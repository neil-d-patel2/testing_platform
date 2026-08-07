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
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 2,
      prompt:
        'Which expression is equivalent to\n\n(3x² + 5x + 9) − (3x² + 3)?',
      choices: ['6', '12', '5x + 6', '5x + 12'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q2',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 2,
      prompt:
        'W(x) = 4x + 60\n\nThe function W gives the total time, in minutes, it takes for a gardener to water x plants and mow the grass. According to the function, how long does it take the gardener to mow the grass, in minutes?',
      choices: ['4', '15', '60', '240'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q3',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      prompt:
        'The function\n\nf(x) = 55.20 − 0.16x\n\ngives the estimated surface water temperature f(x), in degrees Celsius, of Lake Superior on the xth day of the year, where 220 ≤ x ≤ 360. Based on the model, what is the estimated surface water temperature, in degrees Celsius, of Lake Superior on the 298th day of the year?',
      choices: ['55.20', '7.52', '−0.16', '−47.68'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q4',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 1,
      prompt:
        'A company has a customer loyalty program. In January 2018, there were 300 customers enrolled in the loyalty program. For the next 24 months after January 2018, the total number of customers enrolled in the loyalty program each month was 2% greater than the total number enrolled the previous month. Which equation gives the total number of customers, c, enrolled in the company’s loyalty program m months after January 2018, where m ≤ 24?',
      choices: [
        'c = 300(0.02)^m',
        'c = 300(1.02)^m',
        'c = 300(1.2)^m',
        'c = 300(2)^m',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q5',
      domain: 'Algebra',
      skill: 'Linear inequalities in two variables',
      correctAnswer: 3,
      prompt:
        '6x + 4 > y\n\nFor which of the following tables are all the values of x and their corresponding values of y solutions to the given inequality? Each choice lists its (x, y) pairs.',
      choices: [
        '(0, 5), (1, 11), (2, 17)',
        '(0, 4), (1, 12), (2, 18)',
        '(0, 4), (1, 8), (2, 14)',
        '(0, 3), (1, 9), (2, 15)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q6',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Inference from sample statistics and margin of error',
      correctAnswer: 0,
      prompt:
        'A machine fills bags with approximately 15 ounces of sugar. To test the accuracy of the filling process, 343 bags of sugar were selected at random and weighed. Based on the sample, it is estimated that the average weight of all bags of sugar filled by the machine in an 8-hour period is 14.88 ounces, with an associated margin of error of 0.19 ounce. Which of the following is the best interpretation of this estimate?',
      choices: [
        'Plausible values for the average weight of all bags of sugar filled by the machine are between 14.69 ounces and 15.07 ounces.',
        'Plausible values for the average weight of all bags of sugar filled by the machine are less than 14.69 ounces or greater than 15.07 ounces.',
        'The average weight of all bags of sugar filled by the machine is greater than 14.99 ounces.',
        'The average weight of all bags of sugar filled by the machine is less than 14.99 ounces.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q7',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 0,
      prompt:
        'A container is in the shape of a right rectangular prism that is 2.0 centimeters (cm) wide, 19.0 cm long, and 25.0 cm tall. Which of the following is closest to the number of fluid ounces that are required to completely fill the container?\n\nUse 1.0 cubic centimeter = 0.034 fluid ounces.',
      choices: ['32', '900', '1,000', '28,000'],
    },
    {
      type: 'grid-in',
      id: 'm2-q8',
      domain: 'Algebra',
      skill: 'Linear functions',
      acceptedAnswers: ['48'],
      prompt:
        'In the xy-plane, line ℓ passes through the point (0, 0) and is parallel to the line represented by the equation\n\ny = 6x + 3.\n\nIf line ℓ also passes through the point (8, d), what is the value of d?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q9',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 3,
      prompt:
        'x(x + 6) − 112 = 3x(x − 8)\n\nWhat is the sum of the solutions to the given equation?',
      choices: ['2', '8', '14', '15'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q10',
      domain: 'Problem-Solving and Data Analysis',
      skill:
        'One-variable data: Distributions and measures of center and spread',
      correctAnswer: 2,
      prompt:
        'Data set A consists of 10 positive integers less than 60. The list gives 9 of the integers from data set A:\n\n42, 46, 44, 42, 38, 39, 40, 47, 40\n\nThe mean of these 9 integers is 42. If the mean of data set A is an integer that is greater than 42, what is the value of the largest integer from data set A?',
      choices: ['43', '47', '52', '59'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q11',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 3,
      prompt:
        'x² − 40x + c = 0\n\nIn the given equation, c is a constant. The equation has no real solutions if c > n. What is the least possible value of n?',
      choices: ['−400', '−40', '40', '400'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q12',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 1,
      passage:
        'In the figure, line m is parallel to line n, and lines AE and CD intersect at point B.',
      figureNote:
        'Diagram of parallel lines m and n cut by AE and CD at point B pending insertion — the source document does not include it.',
      prompt:
        'Which additional piece of information is sufficient to prove that triangle ABC is congruent to triangle EBD?',
      choices: [
        'AB = 16 and DB = 16.',
        'AB = 16 and EB = 16.',
        'Triangles ABC and EBD are isosceles.',
        'No additional information is necessary to determine that the two triangles are congruent.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q13',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'f(x) = 25(1.20)^(x/4)\n\nFor the given function f, the value of f(x) increases by p% for every increase of x by 8. What is the value of p?',
      choices: ['20', '31', '40', '44'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q14',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      passage:
        'The graph of the linear function y = f(x) + 17 is shown. If c and d are positive constants, which equation could define f?',
      figureNote:
        'Graph of a decreasing linear function pending insertion — the source document does not include it.',
      prompt: 'Which equation could define f?',
      choices: [
        'f(x) = −d − cx',
        'f(x) = d + cx',
        'f(x) = d − cx',
        'f(x) = −d + cx',
      ],
    },
    {
      type: 'grid-in',
      id: 'm2-q15',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      acceptedAnswers: ['11'],
      prompt:
        'A right square pyramid has a surface area of\n\n100 + 20√146\n\nsquare inches, which includes a base area of 100 square inches. What is the height, in inches, of this pyramid?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q16',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      correctAnswer: 2,
      prompt:
        'A circle in the xy-plane has its center at (−2, 2). Line t is tangent to this circle at the point (7, −5). Which of the following points also lies on line t?',
      choices: ['(0, 9/7)', '(5, 11)', '(14, 4)', '(16, 2)'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q17',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 3,
      prompt:
        'Which of the following expressions has a factor of x + 2b, where b is a positive integer constant?',
      choices: [
        '2x² + 9x + 18b',
        '2x² + 19x + 18b',
        '2x² + 20x + 18b',
        '2x² + 29x + 18b',
      ],
    },
    {
      type: 'grid-in',
      id: 'm2-q18',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      acceptedAnswers: ['22'],
      prompt:
        'A rectangular region of land is divided into 88 square lots of equal area A, in square units. The length of the region is 5.5 times the width of the region. If the length of the region is x√A units, what is the value of x?',
    },
    {
      type: 'grid-in',
      id: 'm2-q19',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      acceptedAnswers: ['-3640', '-3,640'],
      passage:
        'The table shows three values of x and their corresponding values of y, where y = f(x) + 4 and f is a quadratic function.',
      table: {
        headers: ['x', 'y'],
        rows: [
          ['25', '−11'],
          ['27', '9'],
          ['29', '−11'],
        ],
      },
      prompt:
        'What is the y-coordinate of the y-intercept of the graph of y = f(x) in the xy-plane?',
    },
    {
      type: 'grid-in',
      id: 'm2-q20',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      acceptedAnswers: ['179/2', '89.5'],
      passage:
        'In the figure shown, points A, B, C, and E lie on the circle, and AB < BC. Segment AC is perpendicular to segment BE at point D, and\n\nBD = √358.\n\nThe diameter of the circle is 181.',
      figureNote:
        'Circle diagram with points A, B, C, D, and E pending insertion — the source document does not include it.',
      prompt: 'If CD/AD = r, what is the value of r?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q21',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 2,
      prompt:
        '5x + 3y = 6\n\nThe given equation is one equation in a system of two linear equations. If the system of equations has at least one solution, which of the following equations could be the other equation in the system?\n\nI.  7.5x + 4.5y = 9\n\nII. 7.5x − 4.5y = 9',
      choices: ['I only', 'II only', 'I and II', 'Neither I nor II'],
    },
    {
      type: 'grid-in',
      id: 'm2-q22',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Probability and conditional probability',
      acceptedAnswers: ['63/65', '.9692', '0.9692', '.9693', '0.9693'],
      passage:
        'For 100 neurons, the table summarizes the distribution of classification and cell body diameter.',
      table: {
        caption: 'Cell body diameter (micrometers)',
        headers: [
          'Classification',
          'Less than 20',
          '20 to 30',
          'Greater than 30',
        ],
        rows: [
          ['Sensory neuron', '13', '7', '2'],
          ['Motor neuron', '0', '17', '18'],
          ['Interneuron', '10', '33', '0'],
        ],
      },
      prompt:
        'One of these neurons will be selected at random. What is the probability of selecting a neuron with a cell body diameter that is less than or equal to 30 micrometers, given that it is not classified as a motor neuron?\n\nExpress your answer as a decimal or fraction, not as a percent.',
    },
  ],
}
