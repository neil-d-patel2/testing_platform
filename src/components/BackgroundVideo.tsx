import { useCallback, useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4'

const FADE_MS = 500
/** Start fading out this many seconds before the clip ends. */
const FADE_OUT_LEAD_S = 0.55
/** Beat of full black between the fade-out and the restarted clip. */
const LOOP_RESET_MS = 100

/**
 * Full-screen looping background video.
 *
 * The crossfade is driven by requestAnimationFrame rather than a CSS
 * transition: a transition would restart from its current computed value only
 * after a reflow, and interrupting one mid-flight (fade-out overlapping the
 * next fade-in) produces a visible snap. Animating opacity by hand lets each
 * fade cancel the previous frame loop and resume from wherever it stopped.
 */
export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const frameRef = useRef<number | null>(null)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  /** Guards against `timeupdate` firing repeatedly inside the fade-out window. */
  const fadingOutRef = useRef(false)

  const cancelFade = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
  }, [])

  const fadeTo = useCallback(
    (target: number) => {
      const video = videoRef.current
      if (!video) return

      cancelFade()

      const from = Number(video.style.opacity || '0')
      const distance = target - from
      if (distance === 0) return

      const startedAt = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - startedAt) / FADE_MS, 1)
        video.style.opacity = String(from + distance * progress)
        frameRef.current = progress < 1 ? requestAnimationFrame(step) : null
      }

      frameRef.current = requestAnimationFrame(step)
    },
    [cancelFade],
  )

  useEffect(() => {
    return () => {
      cancelFade()
      if (resetTimerRef.current !== null) clearTimeout(resetTimerRef.current)
    }
  }, [cancelFade])

  const handleReady = useCallback(() => {
    fadingOutRef.current = false
    fadeTo(1)
  }, [fadeTo])

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video || fadingOutRef.current) return
    if (!Number.isFinite(video.duration)) return

    if (video.duration - video.currentTime <= FADE_OUT_LEAD_S) {
      fadingOutRef.current = true
      fadeTo(0)
    }
  }, [fadeTo])

  const handleEnded = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    cancelFade()
    video.style.opacity = '0'

    resetTimerRef.current = setTimeout(() => {
      video.currentTime = 0
      void video.play()
      fadingOutRef.current = false
      fadeTo(1)
    }, LOOP_RESET_MS)
  }, [cancelFade, fadeTo])

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      onCanPlay={handleReady}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      // Shifted down so the framing sits on the lower part of the clip.
      className="absolute inset-0 h-full w-full translate-y-[17%] object-cover"
      // Starts hidden and is faded in by the rAF loop above; inline style
      // because that is what fadeTo() reads and writes.
      style={{ opacity: 0 }}
    />
  )
}
