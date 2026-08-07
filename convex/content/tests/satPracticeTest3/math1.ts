import type { TestModule } from '../../types'

/**
 * Math — Module 1. 22 questions, fixed (non-adaptive).
 *
 * The source document writes math as LaTeX. It is transcribed here as Unicode
 * (x², √, π, −, ≤) so it renders as plain text without pulling in a KaTeX
 * stack. Exponents that are more than a single digit use caret-and-parens,
 * e.g. `16^(x+3)`.
 */
export const math1: TestModule = {
  id: 'math-1',
  title: 'Math — Module 1',
  section: 'math',
  timeLimitSeconds: 35 * 60,
  questions: [
    {
      type: 'multiple-choice',
      id: 'm1-q1',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 1,
      prompt:
        'In triangle ABC, the measure of angle A is 34°, and the measure of angle B is 90°. What is the measure, in degrees, of angle C?',
      choices: ['34', '56', '90', '180'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q2',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 3,
      prompt: 'Which expression is equivalent to\n\n3xy(2x² + 7y)?',
      choices: ['5x³y + 10xy²', '6x²y + 7y', '6x²y + 21xy', '6x³y + 21xy²'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q3',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 2,
      prompt: 'Which expression is equivalent to\n\n45x² + 9x + 9?',
      choices: [
        '9x² + 3x + 3',
        '45x² + 9x²',
        '9(5x² + x + 1)',
        '3(15x² + 5x + 5)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q4',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 1,
      prompt:
        'For a particular tree species, it is recommended to plant a maximum of 92 trees per acre. Based on this recommendation, what is the maximum number of trees of this species that can be planted on 2 acres?',
      choices: ['276', '184', '94', '90'],
    },
    {
      type: 'grid-in',
      id: 'm1-q5',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      acceptedAnswers: ['9'],
      prompt:
        'A gym charges its members a one-time $34 enrollment fee and a membership fee of $16 per month. If there are no charges other than the enrollment fee and the membership fee, after how many months will a member have been charged a total of $178 at the gym?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q6',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      prompt:
        'f(x) = 7x + b\n\nFor the linear function f, b is a constant and f(8) = 56. What is the value of b?',
      choices: ['0', '1', '7', '8'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q7',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 3,
      prompt:
        'The function f, defined by\n\nf(t) = 14t + 9,\n\ngives the estimated length, in inches, of a pothos plant t months after Shruti purchased it. Which of the following is the best interpretation of 9 in this context?',
      choices: [
        'Shruti will keep the pothos plant for 9 months.',
        'The pothos plant is expected to grow 9 inches each month.',
        'The pothos plant is expected to grow to a maximum length of 9 inches.',
        'The estimated length of the pothos plant was 9 inches when Shruti purchased it.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q8',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Probability and conditional probability',
      correctAnswer: 3,
      prompt:
        'At a convention center, there are a total of 375 visitors. Each visitor is located in either room A, room B, or room C. If one of these visitors is selected at random, the probability of selecting a visitor who is located in room A is 0.48, and the probability of selecting a visitor who is located in room B is 0.24. How many visitors are located in room C?',
      choices: ['28', '43', '90', '105'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q9',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 1,
      prompt:
        'x² − 28x = 0\n\nWhich of the following is a solution to the given equation?',
      choices: ['56', '28', '41', '√28'],
    },
    {
      type: 'grid-in',
      id: 'm1-q10',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      acceptedAnswers: ['28'],
      prompt:
        'A right square pyramid has a height of 12 inches and a volume of 196 cubic inches. What is the perimeter, in inches, of the base of this pyramid?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q11',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 2,
      prompt:
        'The value of a share of stock was $240 on the day it was purchased. Every year, the value of the share increases by 1% of its value from the previous year. Which function V gives the value, in dollars, of the share of stock t years after the day it was purchased?',
      choices: [
        'V(t) = 240(1.01t)',
        'V(t) = 240(1.1t)',
        'V(t) = 240(1.01)^t',
        'V(t) = 240(1.1)^t',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q12',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 3,
      prompt:
        'If f(x) = x + 3 and g(x) = 3x, what is the value of\n\n6f(3) − g(3)?',
      choices: ['−3', '12', '18', '27'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q13',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 2,
      prompt:
        '3x + 9y = 10\nrx + 18y = 20\n\nIn the given system of equations, r is a constant. The system has infinitely many solutions. What is the value of r?',
      choices: ['2', '3', '6', '9'],
    },
    {
      type: 'grid-in',
      id: 'm1-q14',
      domain: 'Algebra',
      skill: 'Linear functions',
      acceptedAnswers: ['363'],
      prompt:
        'A club plans to sell tote bags. The club members estimate that they will sell 65 tote bags when the bags are priced at $7 each. For every price increase of $1, they estimate that they will sell 8 fewer bags. What is the estimated revenue, in dollars, when the bags are priced at $11 each?\n\nrevenue = price × number sold',
    },
    {
      type: 'grid-in',
      id: 'm1-q15',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      acceptedAnswers: ['22'],
      prompt:
        '3x + 6y = 17\n−3x − 4y = 5\n\nThe solution to the given system of equations is (x, y). What is the value of 2y?',
    },
    {
      type: 'grid-in',
      id: 'm1-q16',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      // w = −0.08936…, so every SAT-legal rounding or truncation of it counts.
      acceptedAnswers: ['-0.089', '-.089', '-0.0894', '-.0894', '-.0893'],
      prompt:
        'What value of w is the solution to the equation\n\n0.7w − 0.57 = 7(w − 0.001)?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q17',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 3,
      prompt:
        'Which quadratic equation has exactly one distinct real solution?',
      choices: [
        'x² − 16 = 0',
        'x² + 16 = 0',
        'x² − 16x + 56 = 0',
        'x² − 16x + 64 = 0',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q18',
      domain: 'Algebra',
      skill: 'Linear functions',
      // The source document's key left this one blank ("cannot determine —
      // graph missing from source"); the tutor supplied D afterward, which is
      // what makes the 44-question Math section fully graded and gives this
      // test a scaled score at all. The graph itself is still missing, so the
      // `figureNote` stays: a student can be scored on this question but cannot
      // actually work it until the figure is inserted.
      correctAnswer: 3,
      passage:
        'The graph shows the total amount of rainfall y, in centimeters, from the start of a 10-hour period, where x is the number of hours after the start of the period.',
      figureNote:
        'Rainfall graph pending insertion — the source document does not include it.',
      prompt:
        'Which of the following statements about the rainfall during this time period is true?',
      choices: [
        'The rate of rainfall was 2 centimeters per hour between x = 2 and x = 4.',
        'The rate of rainfall was greatest between x = 4 and x = 10.',
        'The rate of rainfall increased between x = 0 and x = 2.',
        'The rate of rainfall was 0 centimeters per hour between x = 2 and x = 4.',
      ],
    },
    {
      type: 'grid-in',
      id: 'm1-q19',
      domain: 'Problem-Solving and Data Analysis',
      skill:
        'One-variable data: Distributions and measures of center and spread',
      acceptedAnswers: ['24'],
      passage:
        'The frequency table summarizes the masses, in grams, of 35 objects.',
      table: {
        caption: 'Object Masses',
        headers: ['Mass (grams)', 'Frequency'],
        rows: [
          ['10', '12'],
          ['20', '6'],
          ['30', '8'],
          ['40', '9'],
        ],
      },
      prompt: 'What is the mean mass, in grams, of these objects?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q20',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 1,
      prompt:
        'What is the y-intercept of the graph of\n\ny = −8^x + 54\n\nin the xy-plane?',
      choices: ['(0, 54)', '(0, 53)', '(0, 8)', '(0, −8)'],
    },
    {
      type: 'grid-in',
      id: 'm1-q21',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['10000', '10,000'],
      prompt:
        'The quadratic equation\n\nax² + 200x + c = 0\n\nhas at least one real solution. What is the greatest possible value of ac?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q22',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 3,
      prompt:
        'A certain town has an area of 5.48 square miles. Which of the following is closest to the area, in square yards, of this town?\n\n1 mile = 1,760 yards',
      choices: ['552', '964', '9,645', '16,974,848'],
    },
  ],
}
