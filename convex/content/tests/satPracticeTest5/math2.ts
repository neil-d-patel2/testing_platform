import type { TestModule } from '../../types'

/** Math — Module 2. 22 questions, fixed (non-adaptive). See `math1.ts` on notation. */
export const math2: TestModule = {
  id: 'math-2',
  title: 'Math — Module 2',
  section: 'math',
  timeLimitSeconds: 35 * 60,
  questions: [
    {
      type: 'multiple-choice',
      id: 'm2-q1',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      prompt:
        'The equation\n\nd = 20w + 100\n\ngives the total amount of money d, in dollars, that Janna plans to save w weeks after she starts to save. What is the total amount of money, in dollars, she plans to save in 10 weeks?',
      choices: ['250', '300', '350', '400'],
    },
    {
      type: 'grid-in',
      id: 'm2-q2',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      acceptedAnswers: ['13'],
      prompt:
        'x + 2y = 28\n2y = 15\n\nThe solution to the given system of equations is (x, y). What is the value of x?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q3',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 2,
      prompt:
        'b² + 5c = 6d\n\nThe given equation relates the real numbers b, c, and d, where\n\nd > (5/6)c.\n\nWhich equation correctly expresses b in terms of c and d?',
      choices: [
        'b = (6d − 5c)/2',
        'b = (6d + 5c)/2',
        'b = ±√(6d − 5c)',
        'b = ±√(6d + 5c)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q4',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 2,
      passage: 'The area of triangle ABC is 210 square centimeters.',
      figureNote:
        'Triangle ABC with base AC = 10 cm and altitude h from B pending insertion — the source document does not include it.',
      prompt: 'What is the height h, in centimeters, of this triangle?',
      choices: ['10', '21', '42', '84'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q5',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      prompt:
        'g(x) = 2(14x − 15)\n\nWhat is the y-coordinate of the y-intercept of the graph of\n\ny = g(x) − 5\n\nin the xy-plane?',
      choices: ['−35', '−30', '−20', '−15'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q6',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 3,
      prompt:
        'A triangle has a base that is 65% of its height. If the base were decreased by 13 inches, how would the height need to change to keep the same proportions?',
      choices: [
        'It must increase by 13 inches.',
        'It must increase by 20 inches.',
        'It must decrease by 13 inches.',
        'It must decrease by 20 inches.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q7',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      correctAnswer: 1,
      prompt:
        'If\n\na/3 = 10 − 7b\n\nand a ≠ 0, which of the following correctly expresses b in terms of a?',
      choices: [
        'b = (a − 21)/30',
        'b = (30 − a)/21',
        'b = 10 + a/3',
        'b = 10 + 3/a',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q8',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 1,
      prompt:
        'For all positive values of y, the expression\n\n3/(y + c)\n\nis equivalent to\n\n15/(5y + 30).\n\nWhat is the value of constant c?',
      choices: ['3', '6', '8', '150'],
    },
    {
      type: 'grid-in',
      id: 'm2-q9',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      acceptedAnswers: ['25'],
      prompt:
        'In the xy-plane, the equation\n\n(x − 7)² + (y + 7)² = 64\n\ndefines circle O, and the equation\n\n(x − 7)² + (y + 7)² = c\n\ndefines circle P. If the two circles have the same center, and the radius of circle P is three less than the radius of circle O, what is the value of constant c?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q10',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 2,
      prompt:
        'A school has received a donation of $20,000 for the purchase of new laptops. If each laptop costs $149, no tax is charged, and the laptop manufacturer offers a 7.5% discount on orders of at least 100 laptops, what is the maximum number of laptops the school can purchase with the donation?',
      choices: ['124', '134', '145', '146'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q11',
      domain: 'Advanced Math',
      skill:
        'Nonlinear equations in one variable and systems of equations in two variables',
      correctAnswer: 0,
      prompt:
        '3x² − y − 26 = 0\ny = −3x + 10\n\nThe point (a, b) is an intersection of the system of equations above when graphed in the xy-plane. What is a possible value of a?',
      choices: ['−4', '6', '20', '26'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q12',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 0,
      prompt:
        'How many values for y satisfy the equation\n\n−6(4y + 2) = 3(4 − 8y)?',
      choices: ['Zero', 'Exactly one', 'Exactly two', 'Infinitely many'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q13',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'A parabola represents the graph of the function f in the xy-plane, where y = f(x). If the vertex of the parabola is (5, −4) and one of the x-intercepts is (−1.5, 0), what is the other x-intercept?',
      choices: ['(−6.5, 0)', '(1.5, 0)', '(3.5, 0)', '(11.5, 0)'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q14',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 2,
      figureNote:
        'Graph of the line y = g(x) − 10 pending insertion — the source document does not include it.',
      prompt:
        'Which equation defines function g, if the graph of y = g(x) − 10 is shown?',
      choices: [
        'y = (3/5)x − 15',
        'y = (3/5)x − 5',
        'y = (3/5)x + 5',
        'y = (3/5)x + 10',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q15',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 3,
      prompt:
        'If c is a constant in the equation\n\n10x² + c = −5x,\n\nand the equation has no real solutions, what is the value of c?',
      choices: ['−20', '−5', '0', '1'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q16',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      correctAnswer: 0,
      prompt:
        '3x − 4y = 17\n\nIn the xy-plane, the graph of a line with an x-intercept of (c, 0) and a y-intercept of (0, k), where c and k are constants, can be represented by the equation above. What is the value of c/k?',
      choices: ['−4/3', '−3/4', '3/4', '4/3'],
    },
    {
      type: 'grid-in',
      id: 'm2-q17',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      acceptedAnswers: ['12'],
      prompt:
        '−7 + 2f = cg\n21g + 21 = 6f − 15g\n\nIf c is a constant, and the system of equations shown above has infinitely many solutions, what is the value of c?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q18',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      correctAnswer: 2,
      prompt:
        'Triangle A has angles measuring 30°, 60°, and 90°. What is the perimeter, in centimeters, of this triangle if the smallest side has a length of 15 centimeters?',
      choices: ['15√3', '15 + 15√3', '45 + 15√3', '45√3'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q19',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      passage:
        'Four values of x and their corresponding values of g(x) are shown in the table for the linear function g. The equation\n\ng(x) = cx + d\n\ndefines function g, and c and d are constants.',
      table: {
        headers: ['x', 'g(x)'],
        rows: [
          ['2', '46'],
          ['4', '0'],
          ['6', '−46'],
          ['8', '−92'],
        ],
      },
      prompt: 'What is the value of c + d?',
      choices: ['−23', '69', '92', '115'],
    },
    {
      type: 'grid-in',
      id: 'm2-q20',
      domain: 'Problem-Solving and Data Analysis',
      skill:
        'One-variable data: Distributions and measures of center and spread',
      acceptedAnswers: ['105'],
      prompt:
        '114, 109, 106, 111\n\nA data set consists of 5 positive integers greater than 101. What is the value of the smallest integer in the data set if the mean of the entire data set is an integer that is less than the mean of the four integers from the data set shown above?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q21',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      prompt:
        'A teacher awards points to a class based on completed assignments. He gives 5 points per assignment for the first 50 completed assignments and 3 points for each additional completed assignment beyond 50. When a ≥ 50, which function g gives the total number of points earned by the class for a completed assignments?',
      choices: [
        'g(a) = 3a + 5',
        'g(a) = 3a + 100',
        'g(a) = 3a + 250',
        'g(a) = 8a − 150',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q22',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 3,
      prompt:
        'In triangles ABC and XYZ, AB = 22, XY = 11, and angles A and X both measure 77°. Which of the following pieces of information, if any, would be enough to prove that the two triangles are similar to each other?\n\nI.   Angle B measures 40°\n\nII.  Angle Y measures 50°\n\nIII. Angle Z measures 63°',
      choices: [
        'No additional information is necessary.',
        'Angle measures alone do not provide enough information.',
        'I and II together provide enough information.',
        'I and III together provide enough information.',
      ],
    },
  ],
}
