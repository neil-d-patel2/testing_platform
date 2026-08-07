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
      correctAnswer: 0,
      prompt:
        'The function f is defined by\n\nf(x) = 3x − 1/5.\n\nWhat is the y-intercept of the graph of y = f(x) in the xy-plane?',
      choices: ['(0, −1/5)', '(0, −3)', '(0, 3)', '(0, 5)'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q2',
      domain: 'Algebra',
      skill: 'Linear inequalities in two variables',
      correctAnswer: 1,
      // Unusually, the *answer choices* are the missing art here, not the
      // stimulus — all four are graphs the source marked for insertion.
      figureNote:
        'All four answer choices are graphs of shaded regions, pending insertion — the source document does not include them, so this question cannot be worked as rendered.',
      prompt:
        'Which shaded region represents the solutions to the inequality\n\ny < −60x + 50?',
      choices: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q3',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 2,
      prompt:
        'Antonia has $130 in an account. Each year she expects to have 2.5% more money in the account than she had the previous year. Which of the following models best describes how Antonia expects the money in her account to change over time?',
      choices: [
        'Decreasing exponential',
        'Decreasing linear',
        'Increasing exponential',
        'Increasing linear',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q4',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      correctAnswer: 3,
      prompt:
        'The measure of an angle is\n\n(51)(k/2)π\n\nradians, where k is a constant. What is the measure of this angle, in degrees?',
      choices: ['(51)(k/360)', '(51)(180k)', '(51)(k/180)', '(51)(90k)'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q5',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 2,
      figureNote:
        'Graph of a line in the xy-plane pending insertion — the source document does not include it.',
      prompt: 'What is an equation of the graph shown?',
      choices: [
        '7x − 8y = 189',
        '8x − 7y = 189',
        '49x − 56y = 189',
        '56x − 49y = 189',
      ],
    },
    {
      type: 'grid-in',
      id: 'm2-q6',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      acceptedAnswers: ['7/3', '2.333', '2.3333'],
      prompt:
        '117x + 78y = 65\n\nOne of the equations in a system of two linear equations is given. The system has infinitely many solutions. If the second equation in the system is written as\n\nAx + By = C,\n\nwhere A, B, and C are constants, what is the value of (A + C)/B?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q7',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      prompt:
        'The function\n\nT(x) = (20,000 − 6.5x)/1,000\n\ngives the estimated air temperature T(x), in degrees Celsius (°C), surrounding a hot air balloon at an altitude of x meters. If the estimated air temperature surrounding the hot air balloon is 15°C, which of the following is closest to the altitude, in meters, of the hot air balloon?',
      choices: ['20', '769', '1,333', '5,385'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q8',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 0,
      prompt:
        'x² − 5x + 3 = 0\n\nWhat is one of the solutions to the given equation?',
      choices: ['(5 + √13)/2', '(5 + √37)/2', '(−5 + √13)/2', '(−5 + √37)/2'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q9',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      correctAnswer: 3,
      prompt:
        'A right triangle has sides of length 3√2, 5√2, and √68 units. What is the area of the triangle, in square units?',
      choices: ['8√2 + √68', '30√68', '30', '15'],
    },
    {
      type: 'grid-in',
      id: 'm2-q10',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Probability and conditional probability',
      acceptedAnswers: ['3/5', '.6', '0.6'],
      passage:
        'For a school competition, each student in the sixth, seventh, and eighth grades is assigned to either the red team or the green team. The table shows the distribution of grade and team for the students in the school.',
      table: {
        headers: ['', 'Red team', 'Green team', 'Total'],
        rows: [
          ['Sixth grade', '47', '42', '89'],
          ['Seventh grade', '49', '36', '85'],
          ['Eighth grade', '38', '52', '90'],
          ['Total', '134', '130', '264'],
        ],
      },
      prompt:
        'A student from the competition will be selected at random. What is the probability of selecting a student who is in the sixth or seventh grade, given that the student is on the green team?\n\nExpress your answer as a decimal or fraction, not as a percent.',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q11',
      domain: 'Problem-Solving and Data Analysis',
      skill:
        'One-variable data: Distributions and measures of center and spread',
      correctAnswer: 1,
      passage:
        'The dot plots represent the distributions of values in data sets A and B.',
      figureNote:
        'Dot plots for data sets A and B pending insertion — the source document does not include them.',
      prompt:
        'Which of the following statements must be true?\n\nI.  The median of data set A is equal to the median of data set B.\n\nII. The standard deviation of data set A is equal to the standard deviation of data set B.',
      choices: ['I and II', 'I only', 'II only', 'Neither I nor II'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q12',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'The function f is defined by\n\nf(x) = 53(0.15)^x.\n\nFor any positive integer n, the value of f(n) is p% less than the value of f(n − 1). What is the value of p?',
      choices: ['15', '47', '53', '85'],
    },
    {
      type: 'grid-in',
      id: 'm2-q13',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      // a and b are integers straddling 20, so a ∈ {18, 19} and b ∈ {21, 22}.
      acceptedAnswers: ['39', '40', '41'],
      prompt:
        'The function f is defined by\n\nf(x) = (x − a)(x − b),\n\nwhere a and b are integer constants. If f(17) > 0, f(20) < 0, and f(23) > 0, what is one possible value of a + b?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q14',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 3,
      prompt:
        'In a collection of items, 10% are red, 25% are green, 35% are blue, and 30% are yellow. If there are 40 green items, how many blue items are in the collection?',
      choices: ['14', '16', '48', '56'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q15',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 2,
      prompt:
        'The number of bacteria in a growth medium is expected to increase by 170% every 2 hours during a period of observation. The number of bacteria in the growth medium was estimated to be 5,000 when the period of observation began. Which function P gives the expected number of bacteria in this growth medium t hours after the period of observation began?',
      choices: [
        'P(t) = 5,000(1.70)^(t/2)',
        'P(t) = 5,000(1.70)^(2t)',
        'P(t) = 5,000(2.70)^(t/2)',
        'P(t) = 5,000(2.70)^(2t)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q16',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 3,
      prompt:
        'The daily precipitation total at a weather station is recorded by a weather instrument each day. The daily precipitation total recorded on Monday was 19.00 millimeters. The daily precipitation total recorded on Tuesday was a 134.00% increase from the daily precipitation total recorded on Monday. What was the daily precipitation total, in millimeters, recorded on Tuesday?',
      choices: ['8.12', '14.18', '25.46', '44.46'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q17',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 0,
      prompt:
        '50x = 12,500y − 10,000\n\nOne of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?',
      choices: [
        '(1/50)x = 5y',
        '(1/50)x = 250y − 200',
        'x = 5y',
        'x = 250y − 200',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q18',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 0,
      prompt:
        'One gallon of paint will cover 310 square feet of a surface. A room has a total wall area of w square feet. Which equation represents the total amount of paint P, in gallons, needed to paint the walls of the room twice?',
      choices: ['P = w/155', 'P = 620w', 'P = w/310', 'P = 310w'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q19',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 2,
      prompt:
        'f(x) = 3x² + 48x + 193\n\nThe function g is defined by g(x) = f(x + 7). What is the minimum value of g(x)?',
      choices: ['−15', '−8', '1', '8'],
    },
    {
      type: 'grid-in',
      id: 'm2-q20',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      acceptedAnswers: ['923'],
      prompt:
        'The function p is defined by\n\np(x) = a((x + 6)² − b)((x + 6)² − c),\n\nwhere a, b, and c are constants. In the xy-plane, the graph of y = p(x) passes through the points (−7, 24) and (0, 899). What is the value of p(−12) + p(−5)?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q21',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 1,
      prompt:
        'A right rectangular prism has a base area of 16t square centimeters (cm²). The length of the base of the rectangular prism is 8/3 cm, and the height of the rectangular prism is 9 cm. Which expression represents the surface area, in cm², of the right rectangular prism?',
      choices: ['32t + 96', '140t + 48', '800t + 48', '144t'],
    },
    {
      type: 'grid-in',
      id: 'm2-q22',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['27'],
      prompt:
        'r² + qr = 8r − 97\n\nIn the given equation, q is an integer constant. The given equation has no real solutions. What is the largest possible value of q?',
    },
  ],
}
