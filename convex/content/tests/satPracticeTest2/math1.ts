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
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 0,
      prompt: 'If\n\n8 + x = 5,\n\nwhat is the value of\n\n−24 − 3x?',
      choices: ['−15', '−3', '9', '33'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q2',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 2,
      prompt: 'Which expression is equivalent to\n\n30x² + 6x + 6?',
      choices: ['5x² + 6x + 6', '30x² + 1', '6(5x² + x + 1)', '42x² + x + 1'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q3',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 1,
      prompt:
        'For a particular tree species, it is recommended to plant a maximum of 102 trees per acre. Based on this recommendation, what is the maximum number of trees of this species that can be planted on 3 acres?',
      choices: ['408', '306', '105', '99'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q4',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 1,
      prompt:
        'The function g is defined by\n\ng(x) = −18 − 9x.\n\nFor what value of x does g(x) = −216?',
      choices: ['−26', '22', '26', '1,926'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q5',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      prompt:
        'f(x) = 7x + b\n\nFor the linear function f, b is a constant and f(8) = 56. What is the value of b?',
      choices: ['0', '1', '7', '8'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q6',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 1,
      passage:
        'In the figure shown, triangle CAE is similar to triangle CBD. The measure of angle CBD is 56°, and AE = 24(BD).',
      figureNote:
        'Similar-triangles diagram pending insertion — the source document does not include it.',
      prompt: 'What is the measure of angle CAE?',
      choices: ['24°', '56°', '(24 + 56)°', '(24 · 56)°'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q7',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Probability and conditional probability',
      correctAnswer: 1,
      prompt:
        'At a convention center, there are a total of 275 visitors. Each visitor is located in either room A, room B, or room C. If one of these visitors is selected at random, the probability of selecting a visitor who is located in room A is 0.68, and the probability of selecting a visitor who is located in room B is 0.24. How many visitors are located in room C?',
      choices: ['8', '22', '45', '121'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q8',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 0,
      prompt:
        'x² − 14x + 10 = 0\n\nWhat is the sum of the solutions to the given equation?',
      choices: ['14', '10', '4', '0'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q9',
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
      id: 'm1-q10',
      domain: 'Algebra',
      skill: 'Linear inequalities in one or two variables',
      correctAnswer: 3,
      prompt:
        'y ≥ x + 9\ny ≤ −8x − 9\n\nWhich point (x, y) is a solution to the given system of inequalities in the xy-plane?',
      choices: ['(−1, 5)', '(−1, 10)', '(−3, 5)', '(−3, 10)'],
    },
    {
      type: 'grid-in',
      id: 'm1-q11',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      acceptedAnswers: ['672'],
      prompt:
        'A club plans to sell tote bags. The club members estimate that they will sell 80 tote bags when the bags are priced at $9 each. For every price increase of $1, they estimate that they will sell 8 fewer bags. What is the estimated revenue, in dollars, when the bags are priced at $12 each?\n\nrevenue = price × number sold',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q12',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 3,
      prompt:
        'Scientists collected fallen acorns that each housed a colony of the ant species *P. ohioensis* and analyzed each colony’s structure. For any of these colonies, if the colony has x worker ants, the equation\n\ny = 0.67x + 2.6,  20 ≤ x ≤ 110,\n\ngives the predicted number of larvae, y, in the colony. If one of these colonies has 48 worker ants, which of the following is closest to the predicted number of larvae in the colony?',
      choices: ['157', '68', '51', '35'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q13',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 0,
      prompt:
        'What is the y-intercept of the graph of\n\ny = −4^x − 39\n\nin the xy-plane?',
      choices: ['(0, −40)', '(0, −43)', '(0, −39)', '(0, −38)'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q14',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      correctAnswer: 0,
      prompt:
        'A circle in the xy-plane has center (28, 5) and y-intercepts (0, −16) and (0, 26). What is the radius of this circle?',
      choices: ['35', '26', '21', '16'],
    },
    {
      type: 'grid-in',
      id: 'm1-q15',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      // w = −0.08936…, so every SAT-legal rounding or truncation of it counts.
      acceptedAnswers: ['-0.089', '-.089', '-0.0894', '-.0894', '-.0893'],
      prompt:
        'What value of w is the solution to the equation\n\n0.7w − 0.57 = 7(w − 0.001)?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q16',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      prompt:
        'A computer repair specialist charges $260 for the first two hours of repair plus an hourly fee for each additional hour. The total cost for 4 hours of repair is $400. Which function f gives the total cost, in dollars, for x hours of repair, where x ≥ 2?',
      choices: [
        'f(x) = 70x + 120',
        'f(x) = 70x + 260',
        'f(x) = 100x',
        'f(x) = 100x + 260',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q17',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 0,
      prompt:
        'Which expression is a factor of\n\nx⁴ + 8ax² + 16a² − 25,\n\nwhere a is a positive constant?',
      choices: ['x² + 4a + 5', 'x² − 4a − 5', 'x² + 8a', 'x² − 5a'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q18',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      correctAnswer: 2,
      prompt:
        'In the xy-plane, line s is parallel to line t. Line s is defined by\n\ny + 14 = 3x.\n\nWhat is the slope of line t?',
      choices: ['−14', '−3', '3', '14'],
    },
    {
      type: 'grid-in',
      id: 'm1-q19',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      acceptedAnswers: ['742.5', '1485/2'],
      prompt:
        'A rectangular poster has an area of 330 square inches. A copy of the poster is made in which the length and width of the original poster are each increased by 50%. What is the area of the copy, in square inches?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q20',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 2,
      prompt:
        'In triangle ABC, the measure of angle A is 58° and AC = 30. In triangle PQR, the measure of angle P is 58° and PR = 120. Which additional piece of information is sufficient to prove that triangle ABC is similar to triangle PQR?',
      choices: [
        'AB = 35 and PQ = 35',
        'AB = 35 and QR = 140',
        'The measures of angle B and angle R are 34° and 88°, respectively.',
        'The measures of angle B and angle Q are 58° and 34°, respectively.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q21',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 0,
      prompt:
        'The function f is defined by\n\nf(x) = a^x − b,\n\nwhere a and b are constants. In the xy-plane, the graph of y = f(x) passes through the points (c, 10) and (2c, 282), where c is a constant. Which of the following could be the value of b?',
      choices: ['7', '26', '272', '292'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q22',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 1,
      prompt:
        'f(x) = 12(6)^x\n\nThe function f is defined by the given equation. If g(x) = f(x + 3), which of the following equations defines the function g?',
      choices: [
        'g(x) = 36(6)^x',
        'g(x) = 2,592(6)^x',
        'g(x) = 36(18)^x',
        'g(x) = 1,728(216)^x',
      ],
    },
  ],
}
