import type { ScoreScale } from '../../../scoring'

/**
 * Exam 6's raw-to-scaled conversion chart, transcribed from
 * `exams/exam6/exam6_curve.txt`.
 *
 * Not an official College Board table: it is Exam 1's linear 200–800 baseline
 * with a form-difficulty adjustment applied, tapered to 0 at both ends and
 * rounded to the nearest 10. Both sections were judged moderately harder than
 * Exam 1 (+10 points at the centre of the range). Its Reading and Writing
 * column matches Exam 5's; the Math column is a step more generous still.
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
  // Hardest Math form in Exams 1-6
  math: [
    200, 220, 230, 250, 260, 280, 300, 310, 330, 340, 360, 370, 390, 400, 420,
    430, 450, 460, 470, 490, 500, 520, 530, 540, 560, 570, 580, 600, 610, 620,
    640, 650, 660, 670, 680, 700, 710, 720, 730, 740, 760, 770, 780, 790, 800,
  ],
}
