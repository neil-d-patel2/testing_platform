import type { ScoreScale } from '../../../scoring'

/**
 * Exam 5's raw-to-scaled conversion chart, transcribed from
 * `exams/exam5/exam5_curve.txt`.
 *
 * Not an official College Board table: it is Exam 1's linear 200–800 baseline
 * with a form-difficulty adjustment applied, tapered to 0 at both ends and
 * rounded to the nearest 10. Both sections here were judged moderately harder
 * than Exam 1 (+10 points at the centre of the range) — a larger adjustment
 * than Exam 4's, so this form is the most generous of the three.
 *
 * Indexed by number correct: index 0 is every question missed, the last index
 * is a clean sweep.
 */
export const scale: ScoreScale = {
  // Moderately harder than Exam 1
  'reading-writing': [
    200, 210, 220, 240, 250, 260, 270, 280, 290, 310, 320, 330, 340, 350, 360,
    370, 390, 400, 410, 420, 430, 440, 450, 470, 480, 490, 500, 510, 520, 530,
    540, 550, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690,
    710, 720, 730, 740, 750, 760, 770, 780, 790, 800,
  ],
  // Moderately harder than Exam 1
  math: [
    200, 220, 230, 250, 260, 280, 290, 310, 320, 340, 350, 370, 380, 390, 410,
    420, 440, 450, 460, 480, 490, 510, 520, 530, 550, 560, 570, 590, 600, 610,
    630, 640, 650, 670, 680, 690, 700, 720, 730, 740, 750, 760, 780, 790, 800,
  ],
}
