import type { ScoreScale } from '../../../scoring'

/**
 * Exam 4's raw-to-scaled conversion chart, transcribed from
 * `exams/exam4/exam4_curve.txt`.
 *
 * Not an official College Board table: it is Exam 1's linear 200–800 baseline
 * with a form-difficulty adjustment applied, tapered to 0 at both ends and
 * rounded to the nearest 10. Both sections here were judged slightly harder
 * than Exam 1 (+5 points at the centre of the range), which is why the same raw
 * count scores a little higher on this form than on Tests 1–3.
 *
 * Indexed by number correct: index 0 is every question missed, the last index
 * is a clean sweep.
 */
export const scale: ScoreScale = {
  // Slightly harder than Exam 1
  'reading-writing': [
    200, 210, 220, 230, 250, 260, 270, 280, 290, 300, 310, 330, 340, 350, 360,
    370, 380, 390, 400, 420, 430, 440, 450, 460, 470, 480, 490, 510, 520, 530,
    540, 550, 560, 570, 580, 590, 600, 620, 630, 640, 650, 660, 670, 680, 690,
    700, 710, 720, 740, 750, 760, 770, 780, 790, 800,
  ],
  // Slightly harder than Exam 1
  math: [
    200, 210, 230, 240, 260, 270, 280, 300, 310, 330, 340, 350, 370, 380, 400,
    410, 420, 440, 450, 460, 480, 490, 510, 520, 530, 550, 560, 570, 590, 600,
    610, 630, 640, 650, 670, 680, 690, 710, 720, 730, 750, 760, 770, 790, 800,
  ],
}
