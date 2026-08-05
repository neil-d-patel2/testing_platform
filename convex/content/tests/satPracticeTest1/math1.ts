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
  timeLimitSeconds: 35 * 60,
  questions: [
    {
      type: 'multiple-choice',
      id: 'm1-q1',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 2,
      prompt:
        'Julia purchased 800 feet of fencing. She used 60% of this fencing to surround a vegetable garden. How many feet of fencing did Julia use to surround the vegetable garden?',
      choices: ['12', '30', '480', '740'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q2',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 0,
      prompt: 'Which expression is equivalent to\n\n13(x² − 7)?',
      choices: ['13x² − 91', '13x² − 20', '13x² − 7', '13x² + 6'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q3',
      domain: 'Problem-Solving and Data Analysis',
      skill:
        'One-variable data: Distributions and measures of center and spread',
      correctAnswer: 1,
      prompt: '1, 4, 7, 10, 33\n\nWhat is the mean of the data shown?',
      choices: ['7', '11', '17', '33'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q4',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Probability and conditional probability',
      correctAnswer: 2,
      prompt:
        'A sleep study consisted of 59 participants, 53 of whom each had an average of more than 120 minutes of rapid eye movement (REM) sleep per night. If a participant from this sleep study is selected at random, what is the probability of selecting a participant who had an average of more than 120 minutes of REM sleep per night?',
      choices: ['53/100', '59/100', '53/59', '59/53'],
    },
    {
      type: 'grid-in',
      id: 'm1-q5',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Two-variable data: Models and scatterplots',
      acceptedAnswers: ['14'],
      passage:
        'For certain air temperatures, the table gives wind chill temperatures for two different wind speeds.',
      figureNote:
        'Wind chill table pending insertion — the source document does not include it.',
      prompt:
        'According to the table, what is the wind chill temperature, in degrees Fahrenheit (°F), when the air temperature is 26°F and the wind speed is 15 miles per hour (mph)?\n\nDisregard the degree symbol when entering your answer.',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q6',
      domain: 'Algebra',
      skill: 'Linear inequalities in one or two variables',
      correctAnswer: 3,
      prompt:
        'A soccer team’s goal is to earn at least $1,320 by selling coupon books. The team earns $12 from selling each coupon book. Which of the following inequalities describes all possible values for the number of coupon books, n, the team can sell to meet the goal?',
      choices: [
        'n + 12 ≤ 1,320',
        'n + 12 ≥ 1,320',
        '12n ≤ 1,320',
        '12n ≥ 1,320',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q7',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      correctAnswer: 0,
      prompt:
        '2.5c + 5d = 60\n\nThe given equation describes the relationship between the number of cats, c, and the number of dogs, d, that can be cared for at a pet care business during a week. If the business cares for 12 dogs during a week, how many cats can it care for during that week?',
      choices: ['0', '5', '30', '60'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q8',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 0,
      prompt:
        '(3x − 7)² = p + 17\n\nIn the given equation, p is an integer constant. The equation has no real solution. What is the least possible value of p?',
      choices: ['−18', '−17', '−16', '−15'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q9',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 2,
      passage:
        'For the triangles shown, triangle ABC is dilated by a scale factor of 5 to obtain triangle XYZ.',
      figureNote:
        'Triangle dilation diagram pending insertion — the source document does not include it.',
      prompt: 'If d = 19, what is the measure, in degrees, of angle X?',
      choices: ['12', '55', '60', '65'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q10',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 0,
      prompt:
        'What is the y-intercept of the graph of\n\ny = 16^(x+3)\n\nin the xy-plane?',
      choices: ['(0, 4096)', '(0, 0)', '(0, 16)', '(0, 3)'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q11',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 2,
      passage: 'The area of triangle ABC is 220 square centimeters.',
      figureNote:
        'Triangle diagram pending insertion — the source document does not include it.',
      prompt: 'What is the height h, in centimeters, of this triangle?',
      choices: ['10', '22', '44', '88'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q12',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      correctAnswer: 1,
      passage: 'In the right triangle shown, the value of tan x° is c/39.',
      figureNote:
        'Right-triangle diagram pending insertion — the source document does not include it.',
      prompt: 'What is the value of c?',
      choices: ['79', '40', '39', '1'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q13',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 2,
      prompt:
        'The graph of the polynomial function f in the xy-plane, where y = f(x), has x-intercepts of (−5, 0) and (6, 0). Which of the following must be true?',
      choices: ['f(0) = −5', 'f(6) = −5', 'f(−5) = 0', 'f(−5) = 6'],
    },
    {
      type: 'grid-in',
      id: 'm1-q14',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['10', '16'],
      prompt:
        '(x − 16)(x − 10)(x + 7)(x + 17) = 0\n\nWhat is a positive solution to the given equation?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q15',
      domain: 'Advanced Math',
      skill: 'Systems of equations in two variables',
      correctAnswer: 0,
      prompt:
        'x² + y = 71\n−5x + y = 5\n\nThe solutions to the given system of equations are of the form (x, y). What is a possible value of x?',
      choices: ['−11', '−6', '−5', '71'],
    },
    {
      type: 'grid-in',
      id: 'm1-q16',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      acceptedAnswers: ['2'],
      prompt:
        'In the xy-plane, the graph of the equation\n\n(x − 6)² + (y − 2)² = 36\n\nis a circle. The point (12, c), where c is a constant, lies on this circle. What is the value of c?',
    },
    {
      type: 'grid-in',
      id: 'm1-q17',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      acceptedAnswers: ['1.2', '6/5'],
      prompt:
        '6(x − 4) = (x − 4) + 6\n\nIf x is the solution to the given equation, what is the value of x − 4?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q18',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 3,
      prompt:
        '(5/4)x + 2y = 17\n(3/4)x + 2y = 15\n\nThe solution to the given system of equations is (x, y). What is the value of\n\n(11/4)x + 6y?',
      choices: ['4', '6', '32', '47'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q19',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 1,
      prompt:
        'The function h is defined by\n\nh(x) = 14(2)^(−x) + 7.\n\nWhat is the value of h(3)?',
      choices: ['42/4', '35/4', '−77', '−105'],
    },
    {
      type: 'grid-in',
      id: 'm1-q20',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      acceptedAnswers: ['28/3'],
      prompt:
        'The graph of a line in the xy-plane passes through the point (1, 8) and crosses the x-axis at the point (7, 0). The line crosses the y-axis at the point (0, b). What is the value of b?',
    },
    {
      type: 'grid-in',
      id: 'm1-q21',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      acceptedAnswers: ['-6'],
      passage:
        'The table shows three values of x and their corresponding values of y.',
      figureNote:
        'Table of x- and y-values pending insertion — the source document does not include it.',
      prompt:
        'The linear relationship between x and y can be represented by an equation written in the form\n\nAx + By = C,\n\nwhere A, B, and C are constants. What is the value of A/B?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q22',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 0,
      prompt:
        '5x + 8y = 9\n15x + 24y = 27\n\nFor each real number r, which of the following points lies on the graph of each equation in the xy-plane for the given system?',
      choices: [
        '(r, −5r/8 + 9/8)',
        '(−5r/8 + 9/8, r)',
        '(−5r/8 + 9, 5r/8 + 27)',
        '(r/3 + 9, −r/3 + 27)',
      ],
    },
  ],
}
