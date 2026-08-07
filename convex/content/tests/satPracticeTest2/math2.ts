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
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 0,
      prompt:
        'The bone mineral density of a certain person’s thoracic spine was estimated to be 0.822 grams per square centimeter. What is this estimated bone mineral density in grams per square millimeter?\n\n1 centimeter = 10 millimeters',
      choices: ['0.00822', '0.0822', '8.22', '82.2'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q2',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 0,
      passage: 'In the figure shown, line ℓ intersects lines j and k.',
      figureNote:
        'Parallel-lines diagram pending insertion — the source document does not include it.',
      prompt:
        'Which additional piece of information is sufficient to prove that lines j and k are parallel?',
      choices: ['w = 54', 'x = 126', 'y = 54', 'z = 126'],
    },
    {
      type: 'grid-in',
      id: 'm2-q3',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      acceptedAnswers: ['17'],
      prompt:
        '16x − 20y = 14y + 8\nty = 8x + 1/4\n\nIn the given system of equations, t is a constant. If the system has no solution, what is the value of t?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q4',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 1,
      prompt:
        'If\n\n5(2x + 9) = 3(2x + 9) + 74,\n\nwhat is the value of 2x + 9?',
      choices: ['74', '37', '28', '14'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q5',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 3,
      prompt: 'If 380% of n is 38, what is the value of n?',
      choices: ['14,440', '1,444', '1,000', '10'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q6',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      passage:
        'The table shows two values of x and their corresponding values of h(x) for the linear function h.',
      figureNote:
        'Table of x- and h(x)-values pending insertion — the source document does not include it.',
      prompt: 'Which equation defines h?',
      choices: [
        'h(x) = (1/3)x − 5/3',
        'h(x) = 3x + 5',
        'h(x) = 4x + 7',
        'h(x) = 6x + 23',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q7',
      domain: 'Advanced Math',
      skill: 'Systems of equations in two variables',
      correctAnswer: 0,
      prompt:
        'y = x² + 17x + 4\ny = x + 4\n\nThe graphs of the equations in the given system intersect at the point (x, y) in the xy-plane. What is a possible value of x?',
      choices: ['−16', '−15', '13', '15'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q8',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 3,
      prompt:
        'A piece of string with a length of 108 inches is cut into two parts. One part has a length of x inches, and the other part has a length of y inches. The value of x is 8 more than 4 times the value of y. What is the value of x?',
      choices: ['25', '29', '58', '88'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q9',
      domain: 'Algebra',
      skill: 'Linear inequalities in one or two variables',
      correctAnswer: 0,
      prompt:
        'A landscaper will plant two types of shrubs, hydrangeas and winter hazels, in a park. There will be no more than 244 total shrubs planted, and the number of hydrangeas planted will be at most three times the number of winter hazels planted. Which of the following systems of inequalities best represents this situation, where h is the number of hydrangeas that will be planted and w is the number of winter hazels that will be planted?',
      choices: [
        'h + w ≤ 244\nh ≤ 3w',
        'h + w ≤ 244\n3h ≥ w',
        'h + w ≥ 244\nh ≤ 3w',
        'h + w ≥ 244\n3h ≥ w',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q10',
      domain: 'Algebra',
      skill: 'Linear inequalities in one or two variables',
      correctAnswer: 3,
      prompt:
        'y > 17\n4x + y < 21\n\nThe point (x, 54) is a solution to the given system of inequalities in the xy-plane. Which of the following could be the value of x?',
      choices: ['9', '5', '−5', '−9'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q11',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 1,
      prompt:
        '3x² − 5x − 5 = 0\n\nWhat is the greatest solution to the given equation?',
      choices: ['5/6 − √85/6', '5/6 + √85/6', '5/3 − √85/3', '5/3 + √85/3'],
    },
    {
      type: 'grid-in',
      id: 'm2-q12',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      acceptedAnswers: ['14300', '14,300'],
      prompt:
        'A researcher surveyed undergraduate students, graduate students, and postdoctoral students. The number of undergraduate students surveyed was 7,050% of the number of postdoctoral students surveyed, and the number of graduate students surveyed was 32% of the number of undergraduate students surveyed. If there were 4,512 graduate students surveyed, what was the sum of the number of undergraduate students and postdoctoral students surveyed?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q13',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'What is the y-intercept of the graph of\n\ny = (8/13)^(x+1)\n\nin the xy-plane?',
      choices: ['(8, 13)', '(0, 13)', '(0, 8)', '(0, 8/13)'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q14',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      correctAnswer: 1,
      passage:
        'In the figure shown, the measure of angle X is 53°. The length of XY is 24 units, and the length of XZ is 19 units.',
      figureNote:
        'Triangle XYZ diagram pending insertion — the source document does not include it.',
      prompt: 'What is the area, in square units, of triangle XYZ?',
      choices: ['456 sin 53°', '228 sin 53°', '456', '228'],
    },
    {
      type: 'grid-in',
      id: 'm2-q15',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      acceptedAnswers: ['11'],
      prompt:
        'Line s in the xy-plane is defined by\n\n6x + 2y = 0.\n\nLine t is perpendicular to line s and passes through the points (7, 0) and (k, 4/3). What is the value of k?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q16',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 1,
      prompt:
        'A right rectangular prism has a base area of 32t square centimeters. The length of the base of the rectangular prism is 8/3 centimeters, and the height of the rectangular prism is 3 centimeters. Which expression represents the surface area, in square centimeters, of the right rectangular prism?',
      choices: ['64t + 32', '136t + 16', '576t + 16', '96t'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q17',
      domain: 'Problem-Solving and Data Analysis',
      skill:
        'One-variable data: Distributions and measures of center and spread',
      correctAnswer: 2,
      passage:
        'The weight of each object in two groups, A and B, was recorded. The histograms represent the distributions of weight, in grams, for the objects in groups A and B. The mean weight of the objects in group A is 2.1, and the mean weight of the objects in group B is 11.1.',
      figureNote:
        'Histograms for groups A and B pending insertion — the source document does not include it.',
      prompt:
        'Which of the following statements about the standard deviations of weight for the objects in these two groups is true?',
      choices: [
        'The standard deviation of weight for the objects in group A is less than the standard deviation of weight for the objects in group B.',
        'The standard deviation of weight for the objects in group A is equal to the standard deviation of weight for the objects in group B.',
        'The standard deviation of weight for the objects in group A is greater than the standard deviation of weight for the objects in group B.',
        'There is not enough information to compare the standard deviations of weight for the objects in these two groups.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q18',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      prompt:
        'A carpenter charges a flat rate of $306 for the first 3 hours of work and $85 for each additional hour of work. Which equation gives the total amount y, in dollars, that the carpenter charges for x hours of work, where x > 3?',
      choices: [
        'y = 85x + 51',
        'y = 306x + 85',
        'y = 306x + 561',
        'y = 85x + 306',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q19',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 0,
      prompt:
        'The function\n\nf(x) = (x − 5)²/9 + 6\n\ngives a toy car’s height above the ground, f(x), in inches, x seconds after it started moving on an elevated track, where 0 ≤ x ≤ 10. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?',
      choices: [
        'The toy car’s minimum height was 6 inches above the ground.',
        'The toy car’s minimum height was 5 inches above the ground.',
        'The toy car’s height was 6 inches above the ground when it started moving.',
        'The toy car’s height was 5 inches above the ground when it started moving.',
      ],
    },
    {
      type: 'grid-in',
      id: 'm2-q20',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      // 40/9 = 4.444…, so the decimal spellings the SAT grid allows count too.
      acceptedAnswers: ['40/9', '4.444', '4.4444'],
      passage:
        'In the figure, AD and BC intersect at point D. The measure of angle ABD is w°, the measure of angle CAD is z°, and AD = 178.',
      figureNote:
        'Intersecting-segments diagram pending insertion — the source document does not include it.',
      prompt: 'If\n\ncos w° = 9/41,\n\nwhat is the value of tan z°?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q21',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 0,
      prompt:
        'A right square pyramid has a total surface area of 28,160 square inches, and the combined surface area of the four lateral faces is 16,060 square inches. What is the height, in inches, of this pyramid?',
      choices: ['48', '55', '73', '110'],
    },
    {
      type: 'grid-in',
      id: 'm2-q22',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['-24'],
      prompt:
        '1/(cx) = x/96 + 1/c\n\nIn the given equation, c is a constant. If the equation has exactly one solution, what is the value of c?',
    },
  ],
}
