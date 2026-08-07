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
      correctAnswer: 2,
      prompt:
        'The total cost f(x), in dollars, to lease a car for 24 months from a particular car dealership is given by\n\nf(x) = 24x + 1,000,\n\nwhere x is the monthly payment, in dollars. What is the total cost to lease a car when the monthly payment is $300?',
      choices: ['$6,200', '$7,000', '$8,200', '$25,300'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q2',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      correctAnswer: 3,
      prompt: 'What is the area of a circle with a circumference of 12π?',
      choices: ['12π', '24π', '30π', '36π'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q3',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 3,
      prompt:
        '5x + 3 = rx + 7\n\nIn the given equation, r is a constant. The equation has no solution. What is the value of r?',
      choices: ['21', '8', '7', '5'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q4',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 3,
      prompt: 'If\n\n5x = √a,\n\nwhat is a in terms of x?',
      choices: ['√(5x)', '5x²', '25x', '25x²'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q5',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 2,
      prompt:
        'When a black bear hibernates, its heart rate drops by 15 beats per minute. This drop is 25% of its normal heart rate. What is the black bear’s normal heart rate, in beats per minute?',
      choices: ['30', '45', '60', '75'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q6',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Probability and conditional probability',
      correctAnswer: 1,
      passage:
        'The table shows the distribution of people in a certain city by age group.',
      table: {
        caption: 'Age Distribution in a Certain City',
        headers: ['Age group', 'Proportion'],
        rows: [
          ['Less than 18 years old', '28%'],
          ['18–40 years old', '24%'],
          ['41–65 years old', '22%'],
          ['Greater than 65 years old', '26%'],
        ],
      },
      prompt:
        'If a person in this city is selected at random, which of the following is closest to the probability of selecting a person who is older than 65 years, given that the person is at least 18 years old?',
      choices: ['0.26', '0.36', '0.46', '0.93'],
    },
    {
      type: 'grid-in',
      id: 'm2-q7',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['1.2', '6/5'],
      prompt:
        'h(t) = −16t² + b\n\nThe function h estimates an object’s height, in feet, above the ground t seconds after the object is dropped, where b is a constant. The function estimates that the object is 23.04 feet above the ground when it is dropped at t = 0. How many seconds after being dropped does the function estimate that the object will hit the ground?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q8',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      correctAnswer: 2,
      prompt:
        'The diagonal of a rectangle has length √106, and the length of one side of the rectangle is 9. What is the perimeter of the rectangle?',
      choices: ['106', '45', '28', '14'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q9',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      correctAnswer: 1,
      prompt:
        'Circle A\n\n(x − 7)² + (y − p)² = 21\n\nCircle B\n\n(x + 7)² + (y − p)² = 21\n\nIn the given equations, p is a positive constant. Which statement correctly compares the graphs of circles A and B in the xy-plane?',
      choices: [
        'Circle B is the reflection of circle A across the x-axis.',
        'Circle B is the reflection of circle A across the y-axis.',
        'Circle B is the translation of circle A 14 units up.',
        'Circle B is the translation of circle A 14 units to the right.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q10',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 1,
      prompt:
        'a(9 − x) = 36 − 4x\n\nIn the given equation, a is a constant. The equation has exactly one solution. Which of the following **cannot** be the value of a?',
      choices: ['1', '4', '9', '36'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q11',
      domain: 'Problem-Solving and Data Analysis',
      skill:
        'One-variable data: Distributions and measures of center and spread',
      correctAnswer: 2,
      prompt:
        'a, 26, 29, b, 33, 49, c\n\nFor the given data set, the data values are listed in ascending order, where a, b, and c are constants. For this data set, the mean is 36, the median is 29, and the range is 72. What is the value of c?',
      choices: ['53', '72', '79', '98'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q12',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 1,
      prompt:
        'y = 3(a/6)^(x+c) − b\n\nHow many times does the graph of the given equation in the xy-plane cross the x-axis, where a, b, and c are positive constants such that a > 6 and b > c?',
      choices: ['Zero', 'One', 'Two', 'Three'],
    },
    {
      type: 'grid-in',
      id: 'm2-q13',
      domain: 'Algebra',
      skill: 'Linear functions',
      acceptedAnswers: ['4'],
      prompt:
        'A linear function g is defined by\n\ng(x) = ax + b,\n\nwhere a and b are constants. If g(−2) = −7 and g(1) = 5, what is the value of a?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q14',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 3,
      prompt:
        '2x² − 8x − 21 = 0\n\nOne solution to the given equation can be written as\n\nx = h − (1/2)√k,\n\nwhere h and k are integer constants. What is the value of h + k?',
      choices: ['24', '10', '29', '60'],
    },
    {
      type: 'grid-in',
      id: 'm2-q15',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      acceptedAnswers: ['3'],
      prompt:
        'r(x) = 9(x − 3)\ns(x) = x³ + nx² + 3nx + 27\n\nFor the given functions r and s, n is a constant. If\n\nr(x)s(x) = 9(x⁴ − 81),\n\nwhat is the value of n?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q16',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'At different times on a certain day, a manager at a theme park recorded the number of visitors. An exponential model gives the estimated number of visitors, V, at the theme park t hours after the theme park opened, where t ≤ 3. Based on the model, 85 visitors were estimated to be at the theme park when it opened, and every 30 minutes the estimated number of visitors increased by 140% of the estimated number of visitors 30 minutes earlier. Which of the following equations best represents this model?',
      choices: [
        'V = 85(1.40)^(t/30)',
        'V = 85(1.40)^(2t)',
        'V = 85(2.40)^(t/30)',
        'V = 85(2.40)^(2t)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q17',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 0,
      prompt:
        'The function v is defined by\n\nv(x) = (x² + bx + c)/((x + 5)(x − 19)),\n\nwhere b and c are constants. In the xy-plane, the graph of y = v(x) passes through the points (0, 66/95) and (11, 0). If v(q) = 0, which of the following could be the value of q?',
      choices: ['−6', '−5', '5', '6'],
    },
    {
      type: 'grid-in',
      id: 'm2-q18',
      domain: 'Algebra',
      skill: 'Linear functions',
      acceptedAnswers: ['48'],
      prompt:
        'Line s is defined by\n\nx − 4y = 24.\n\nLine t is perpendicular to line s in the xy-plane and passes through the points (k, 0) and (60, −k). What is the value of k?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q19',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 3,
      prompt:
        'x/7 + y/5 = 41/35\n\nAn engineer connects resistors in series, where the resistors have a total resistance of 41/35 ohms. In this series, there are x resistors of type A, each of which has a resistance of a ohms, and y resistors of type B, each of which has a resistance of b ohms. The given equation represents this situation. According to this equation, what is the positive difference between the value of a and the value of b?',
      choices: ['41', '2', '41/35', '2/35'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q20',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 0,
      prompt:
        'The functions f and g are defined by the given equations, where x ≥ 0, a and b are integer constants, a < b, and a > 1.\n\nI.  f(x) = a(0.63)^(−bx)\n\nII. g(x) = a(1.37)^(x+2) + b\n\nIf y = f(x) and y = g(x) are graphed in the xy-plane, which of the following equations displays, as a constant or coefficient, the minimum value of the function it defines, where x ≥ 0?',
      choices: ['I only', 'II only', 'I and II', 'Neither I nor II'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q21',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 3,
      prompt:
        'In triangle XYZ, the measure of angle X is x°, the measure of angle Y is y°, and the measure of angle Z is 31°. If x > y > 31, which of the following additional pieces of information is **not** sufficient to determine the values of x and y?',
      choices: [
        'The value of 31 − x − 3y',
        'The value of 31 + 3x + y',
        'The value of 31 − 3x + 3y',
        'The value of 31 − 3x − 3y',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q22',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 2,
      prompt:
        'In 2013, Chloe earned 11% more than she earned in 2012, and in 2014, Chloe earned 6% more than she earned in 2013. If Chloe earned y times as much in 2012 as she did in 2014, which of the following is closest to the value of y?',
      choices: ['0.5455', '0.6600', '0.8499', '1.1766'],
    },
  ],
}
