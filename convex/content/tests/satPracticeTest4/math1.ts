import type { TestModule } from '../../types'

/**
 * Math — Module 1. 22 questions, fixed (non-adaptive).
 *
 * The source document writes math as LaTeX. It is transcribed here as Unicode
 * (x², √, π, −, ≤) so it renders as plain text without pulling in a KaTeX
 * stack. Exponents that are more than a single digit use caret-and-parens,
 * e.g. `16^(x+3)`.
 *
 * Math skill labels are lowercased to match Tests 1–3 — the answer key writes
 * them in Title Case, but the report groups by the exact string, so two
 * casings would read as two different skills.
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
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 0,
      prompt:
        'y = 8x − 3\ny = 13\n\nWhat is the solution (x, y) to the given system of equations?',
      choices: ['(2, 13)', '(8, 13)', '(13, 2)', '(13, 8)'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q2',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 2,
      prompt:
        'Triangle PQR is similar to triangle XYZ such that P, Q, and R correspond to X, Y, and Z, respectively. The length of side PQ is 20, and the length of side QR is 18. The length of each side of triangle XYZ is 2 times the length of its corresponding side in triangle PQR. What is the length of side YZ?',
      choices: ['9', '10', '36', '40'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q3',
      domain: 'Algebra',
      skill: 'Linear inequalities in one variable',
      correctAnswer: 2,
      prompt:
        'A number x is at least twice the value of a number y. If the value of y is 65, which inequality represents the possible values of x?',
      choices: ['x ≥ 63', 'x ≥ 67', 'x ≥ 130', 'x ≥ 132'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q4',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 3,
      prompt:
        'The function h is defined by\n\nh(x) = 4(6x − 10).\n\nWhat is the value of h(10)?',
      choices: ['10', '40', '60', '200'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q5',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'g(t) = −16t² + 176t\n\nThe function g gives the height of a model rocket, in feet, t seconds after it was launched into the air. Which statement is the best interpretation of g(3) = 384?',
      choices: [
        'The height of the model rocket was 384 feet when it was launched into the air.',
        'The height of the model rocket was 3 feet when it was launched into the air.',
        'The height of the model rocket was 3 feet 384 seconds after it was launched into the air.',
        'The height of the model rocket was 384 feet 3 seconds after it was launched into the air.',
      ],
    },
    {
      type: 'grid-in',
      id: 'm1-q6',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      acceptedAnswers: ['49'],
      prompt:
        'Sophia bought confetti and balloons for $69. Each package of confetti cost $2, and each balloon cost $1. If Sophia bought 10 packages of confetti, how many balloons did she buy?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q7',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 2,
      prompt: 'If\n\n(2x + 2x)/5 = 88,\n\nwhat is the value of 4x?',
      choices: ['88', '220', '440', '880'],
    },
    {
      type: 'grid-in',
      id: 'm1-q8',
      domain: 'Algebra',
      skill: 'Linear functions',
      acceptedAnswers: ['5340', '5,340'],
      prompt:
        'A marine biologist uses a linear model to estimate the weight of a blue whale after it is born. The model estimates that a certain blue whale weighs 5,310 pounds at birth and gains 10.0 pounds per hour, for 120 hours, after it is born. Based on this model, what is the estimated weight, in pounds, of this blue whale 3 hours after it is born?',
    },
    {
      type: 'grid-in',
      id: 'm1-q9',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      acceptedAnswers: ['8'],
      prompt: 'If\n\nx/y = 56  and  cx/(8y) = 56,\n\nwhat is the value of c?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q10',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 0,
      prompt: 'Which expression is a factor of\n\n81p²¹ − 121p¹⁹?',
      choices: ['9p + 11', '81p² + 121', '11p − 9', '−40p⁴⁴'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q11',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      passage:
        'For the function h, the table gives three values of x and their corresponding values of h(x).',
      table: {
        headers: ['x', 'h(x)'],
        rows: [
          ['0', '28'],
          ['1', '29'],
          ['2', '31'],
        ],
      },
      prompt: 'Which equation could define h?',
      choices: [
        'h(x) = 2^x',
        'h(x) = 2^x + 2',
        'h(x) = 2^x + 26',
        'h(x) = 2^x + 27',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q12',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 2,
      prompt:
        'For the linear function g, the graph of y = g(x) in the xy-plane has a slope of 5 and passes through the point (1, 19). Which equation defines g?',
      choices: ['g(x) = 5x', 'g(x) = 5x + 5', 'g(x) = 5x + 14', 'g(x) = 19x'],
    },
    {
      type: 'grid-in',
      id: 'm1-q13',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      // Three x-intercepts; the SAT accepts any one of them.
      acceptedAnswers: ['1', '6', '9'],
      prompt:
        'f(x) = 2(x − 1)(x − 6)(x − 9)\n\nIf the given function f is graphed in the xy-plane, where y = f(x), what is the x-coordinate of an x-intercept of the graph?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q14',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 3,
      prompt:
        'y = 10z/(x + 4)\n\nThe given equation relates the positive numbers x, y, and z. Which equation correctly expresses z in terms of x and y?',
      choices: [
        'z = xy/10',
        'z = (x + 4)/(10y)',
        'z = 10y/(x + 4)',
        'z = (x + 4)y/10',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q15',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 1,
      prompt: 'Which equation has no solution?',
      choices: [
        '6x + 2 = 2(3x + 1)',
        '6x + 20 = 2(3x + 4)',
        '6x + 1 = 3x + 1',
        '6x + 3 = −6x − 3',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q16',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      passage:
        'The table shows the linear relationship between the number of cars, c, on a commuter train and the maximum number of passengers and crew, p, that the train can carry.',
      table: {
        headers: ['Number of cars', 'Maximum number of passengers and crew'],
        rows: [
          ['4', '145'],
          ['6', '213'],
          ['8', '281'],
        ],
      },
      prompt:
        'Which equation represents the linear relationship between c and p?',
      choices: ['34c − p = −9', '34c − p = 9', '34p − c = −9', '34p − c = 9'],
    },
    {
      type: 'grid-in',
      id: 'm1-q17',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      acceptedAnswers: ['14/29', '.4827', '0.4827', '.4828', '0.4828'],
      figureNote:
        'Right-triangle diagram (hypotenuse 29, side 14, angle x°) pending insertion — the source document does not include it.',
      prompt: 'In the triangle shown, what is the value of sin x°?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q18',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 0,
      prompt:
        'While the mass of an object is the same everywhere, the weight of an object is not the same on different planets. An object has a weight of 70.00 pounds on Earth and a weight of 74.62 pounds on Saturn. The object’s weight on Jupiter is 252.8% of its weight on Earth. If the object’s weight on Saturn is x% of its weight on Jupiter, which of the following is closest to the value of x?',
      choices: ['42.17', '69.76', '176.96', '269.48'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q19',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 1,
      prompt:
        'The measure of angle S is 9π/13 radians. The measure of angle T is 3 times the measure of angle S. Which expression represents the measure, in degrees, of angle T?',
      choices: [
        '(9/13)(90)(3)',
        '(9/13)(180)(3)',
        '(9/(13π))(90)(3)',
        '(9π/13)(180)(3)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q20',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 0,
      prompt:
        '8|7 − x| + 2 = 82\n\nWhat is the sum of the solutions to the given equation?',
      choices: ['14', '10', '−3', '−14'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q21',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 1,
      passage:
        'The scatterplot shows the relationship between x and y for the 10 data points in data set A. Data set B is created by multiplying the y-value of each data point from data set A by 40.',
      figureNote:
        'Scatterplot for data set A pending insertion — the source document does not include it.',
      prompt:
        'Which of the following equations is the most appropriate model for data set B?',
      choices: [
        'y = 7(2.11)^x',
        'y = 276(2.11)^x',
        'y = 7(2.11)^x + 40',
        'y = 40(2.11)^x + 40',
      ],
    },
    {
      type: 'grid-in',
      id: 'm1-q22',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      acceptedAnswers: ['223.2'],
      passage:
        'The figure shown is a right rectangular pyramid, where ℓ = 10 units, w = 5 units, and h = 11 units.',
      figureNote:
        'Right rectangular pyramid diagram pending insertion — the source document does not include it.',
      prompt: 'What is the surface area, in square units, of the pyramid?',
    },
  ],
}
