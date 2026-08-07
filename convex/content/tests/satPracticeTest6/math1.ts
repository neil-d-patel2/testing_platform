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
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 1,
      prompt:
        'Jasmin grows bean pods in her garden. This year, she harvested 480 bean pods and saved 10% of them to plant next year. How many of the harvested bean pods did Jasmin save to plant next year?',
      choices: ['38', '48', '56', '58'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q2',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 0,
      prompt: 'Which expression is equivalent to\n\n7(x² + 6)?',
      choices: ['7x² + 42', '7x² + 13', '7x² + 6', '7x² + 1'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q3',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 0,
      prompt:
        'The area of a rectangle is 108 square inches. The length of the longest side of the rectangle is 18 inches. What is the length, in inches, of the shortest side of this rectangle?',
      choices: ['6', '18', '36', '90'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q4',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 0,
      prompt:
        'A piece of a metal alloy called delta metal has a total mass of 200.0 grams. The equation\n\nc + z + 3.6 = 200.0\n\nrelates the mass of copper c, in grams, and the mass of zinc z, in grams, in this piece of metal. If this piece of metal contains 110.0 grams of copper, how many grams of zinc does it contain?',
      choices: ['86.4', '90.0', '110.0', '196.4'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q5',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 2,
      passage:
        'Line j is shown in the xy-plane. Line k (not shown) is parallel to line j and passes through the point (0, 8).',
      figureNote:
        'Graph of line j in the xy-plane pending insertion — the source document does not include it.',
      prompt: 'Which equation defines line k?',
      choices: [
        'y = (2/5)x + 8',
        'y = (2/5)x − 8',
        'y = (5/2)x + 8',
        'y = (5/2)x − 8',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q6',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 0,
      prompt:
        'In triangle JKL, the measures of both angle J and angle K are equal and the measure of angle L is 124°. What is the measure of angle J?',
      choices: ['28°', '56°', '62°', '90°'],
    },
    {
      type: 'grid-in',
      id: 'm1-q7',
      domain: 'Algebra',
      skill: 'Linear functions',
      acceptedAnswers: ['5980', '5,980'],
      prompt:
        'A marine biologist uses a linear model to estimate the weight of a blue whale after it is born. The model estimates that a certain blue whale weighs 5,910 pounds at birth and gains 10.0 pounds per hour, for 120 hours, after it is born. Based on this model, what is the estimated weight, in pounds, of this blue whale 7 hours after it is born?',
    },
    {
      type: 'grid-in',
      id: 'm1-q8',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      acceptedAnswers: ['46'],
      prompt:
        'The ratio of the side length of square A to the side length of square B is 3 to 6. Square A has a side length of 23 inches. What is the side length, in inches, of square B?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q9',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 1,
      prompt: 'Which expression is **NOT** a factor of\n\n37,500x⁴ − 960?',
      choices: ['25x² + 4', '5x² − 2', '5x + 2', '60'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q10',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 2,
      prompt:
        'b² + 6c = 7d\n\nThe given equation relates the real numbers b, c, and d, where\n\nd > (6/7)c.\n\nWhich equation correctly expresses b in terms of c and d?',
      choices: [
        'b = (7d − 6c)/2',
        'b = (7d + 6c)/2',
        'b = ±√(7d − 6c)',
        'b = ±√(7d + 6c)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q11',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 2,
      prompt: 'If\n\n3(7x) = 12,\n\nwhat is the value of 7x?',
      choices: ['9/7', '7/4', '4', '9'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q12',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      passage:
        'For the exponential function g, the table shows four values of x and their corresponding values of g(x).',
      table: {
        headers: ['x', 'g(x)'],
        rows: [
          ['−1', '27'],
          ['0', '1'],
          ['1', '1/27'],
          ['2', '1/729'],
        ],
      },
      prompt: 'Which equation defines g?',
      choices: [
        'g(x) = −27^x',
        'g(x) = −(1/27)^x',
        'g(x) = 27^x',
        'g(x) = (1/27)^x',
      ],
    },
    {
      type: 'grid-in',
      id: 'm1-q13',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      acceptedAnswers: ['5.25', '21/4'],
      prompt:
        '20.5x + 25.75y = 411\n\nOdalys ordered mulch and river rock, which cost a total of $411, for her home. The given equation represents the relationship between the number of cubic yards of mulch, x, and the number of tons of river rock, y, Odalys ordered. How much more, in dollars, did a ton of river rock cost Odalys than a cubic yard of mulch?',
    },
    {
      type: 'grid-in',
      id: 'm1-q14',
      domain: 'Algebra',
      skill: 'Linear inequalities in two variables',
      acceptedAnswers: ['42'],
      prompt:
        'A team of researchers plans to spend no more than 310 hours in total collecting observation data for two projects. For one of the projects, the team will observe at least 13 penguins and will spend 5 hours observing the behavior of each penguin. For the other project, the team will observe at least 16 seals and will spend 6 hours observing the behavior of each seal. Based on this plan, what is the maximum number of penguins the team can observe?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q15',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      correctAnswer: 2,
      prompt:
        '(x + 5)² + (y + 8)² = 15²\n\nIn the xy-plane, the graph of the given equation is a circle. What is the length of a radius of this circle?',
      choices: ['√15', '15/2', '15', '15²'],
    },
    {
      type: 'grid-in',
      id: 'm1-q16',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      acceptedAnswers: ['4/3', '1.333', '1.3333'],
      prompt:
        'x + 21y = 33\n5x + 3y = 29\n\nThe solution to the given system of equations is (x, y). What is the value of y?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q17',
      domain: 'Algebra',
      skill: 'Linear inequalities in two variables',
      correctAnswer: 2,
      prompt:
        'y < −4x + 12\n\nWhich point (x, y) is a solution to the given inequality in the xy-plane?',
      choices: ['(0, 13)', '(−1, 17)', '(−4, 0)', '(4, −1)'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q18',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      passage:
        'The graph models the number of online newsletter subscribers at the end of every six-month period, where x is the number of six-month periods since the end of January 1992 and 0 ≤ x ≤ 4.',
      figureNote:
        'Graph of newsletter subscribers per six-month period pending insertion — the source document does not include it.',
      prompt:
        'Which statement is the best interpretation of the point (1, 750) in this context?',
      choices: [
        'The estimated number of online newsletter subscribers at the end of the first six-month period was 750.',
        'The estimated number of online newsletter subscribers increased every six months by 750 subscribers.',
        'The estimated number of online newsletter subscribers at the end of January 1992 was 750.',
        'The estimated number of online newsletter subscribers at the end of January 1993 was 750.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q19',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 1,
      prompt:
        'ax − by = 72\n2ax − 8y = 48\n\nIn the given system of equations, a and b are constants. The graphs of these equations in the xy-plane intersect at the point (x, 6). What is the value of b?',
      choices: ['−8', '−4', '4', '6'],
    },
    {
      type: 'grid-in',
      id: 'm1-q20',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['2'],
      prompt:
        '2|3x − 3| = 5\n\nWhat is the sum of the solutions to the given equation?',
    },
    {
      type: 'grid-in',
      id: 'm1-q21',
      domain: 'Algebra',
      skill: 'Linear functions',
      acceptedAnswers: ['32.5', '65/2'],
      passage:
        'The table shows three values of x and their corresponding values of y.',
      table: {
        headers: ['x', 'y'],
        rows: [
          ['2', '−183/10'],
          ['4', '−171/10'],
          ['7', '−153/10'],
        ],
      },
      prompt:
        'There is a linear relationship between x and y. What is the x-coordinate of the x-intercept of the graph that represents this linear relationship in the xy-plane?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q22',
      domain: 'Advanced Math',
      skill:
        'Nonlinear equations in one variable and systems of equations in two variables',
      correctAnswer: 3,
      prompt:
        'y = 2x² − 12x + 22\ny + 3 = 0\n\nHow many solutions are there to the given system of equations?',
      choices: [
        'There is exactly 1 solution.',
        'There are exactly 2 solutions.',
        'There are exactly 3 solutions.',
        'There are no solutions.',
      ],
    },
  ],
}
