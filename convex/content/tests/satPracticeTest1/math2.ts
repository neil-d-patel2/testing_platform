import type { TestModule } from '../../types'

/** Math — Module 2. 22 questions, fixed (non-adaptive). See `math1.ts` on notation. */
export const math2: TestModule = {
  id: 'math-2',
  title: 'Math — Module 2',
  timeLimitSeconds: 35 * 60,
  questions: [
    {
      type: 'multiple-choice',
      id: 'm2-q1',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 1,
      prompt:
        'The function g is defined by\n\ng(x) = −18 − 9x.\n\nFor what value of x does g(x) = −216?',
      choices: ['−26', '22', '26', '1,926'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q2',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 0,
      prompt:
        'The population of a certain city doubled every 25 years from 1660 to 1760. The population of this city was 208,000 in 1760. What was the population of this city in 1660?',
      choices: ['13,000', '26,000', '104,000', '416,000'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q3',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 2,
      prompt:
        'The function\n\nf(x) = 600(0.5)^(x/11)\n\ngives the predicted intensity of a beam, f(x), measured by the number of photons in the beam, x millimeters below the surface of a certain material. What is the best interpretation of f(11) = 300?',
      choices: [
        'A beam at the surface of the material has a predicted intensity of 11 photons.',
        'A beam at the surface of the material has a predicted intensity of 300 photons.',
        'A beam 11 millimeters below the surface of the material has a predicted intensity of 300 photons.',
        'A beam 300 millimeters below the surface of the material has a predicted intensity of 600 photons.',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q4',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      prompt:
        'For the linear function h, h(0) = 0 and h(11) = 5. Which equation defines h?',
      choices: [
        'h(x) = (5/11)x',
        'h(x) = (5/11)x + 5',
        'h(x) = (11/5)x',
        'h(x) = (11/5)x + 11',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q5',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      correctAnswer: 0,
      prompt:
        'Hassan put up wire fencing along each edge of a rectangular garden with a length of x feet and a width of y feet. Hassan put up a total of 44 feet of wire fencing. Which equation represents this situation?',
      choices: ['2x + 2y = 44', 'x + y = 44', '2xy = 44', 'xy = 44'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q6',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 1,
      prompt:
        'How many solutions does the equation\n\n7x − 19 = 19 − 7x\n\nhave?',
      choices: ['Zero', 'Exactly one', 'Exactly two', 'Infinitely many'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q7',
      domain: 'Algebra',
      skill: 'Linear inequalities in one or two variables',
      correctAnswer: 3,
      prompt:
        'y > 17\n4x + y < 21\n\nThe point (x, 54) is a solution to the given system of inequalities in the xy-plane. Which of the following could be the value of x?',
      choices: ['9', '5', '−5', '−9'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q8',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 3,
      prompt:
        'A linear function f gives a company’s profit, in dollars, from selling x items. The company’s profit is $190 when it sells 4 items, and its profit is $670 when it sells 10 items. Which equation defines f?',
      choices: [
        'f(x) = 180x − 670',
        'f(x) = 67x',
        'f(x) = 80x − 10x',
        'f(x) = 80x − 130',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q9',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 3,
      prompt: 'Which quadratic equation has no real solutions?',
      choices: [
        '−2x² = 0',
        '−2x² + 2 = 0',
        '−2x² + 2x = 0',
        '−2x² + 2x − 2 = 0',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q10',
      domain: 'Geometry and Trigonometry',
      skill: 'Area and volume',
      correctAnswer: 2,
      prompt:
        'The circumference of the base of a right circular cylinder is 6π meters, and the height of the cylinder is 19 meters. What is the volume, in cubic meters, of the cylinder?',
      choices: ['57π', '114π', '171π', '684π'],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q11',
      domain: 'Algebra',
      skill: 'Linear inequalities in one or two variables',
      correctAnswer: 3,
      passage:
        'The shaded region shown represents the solutions to the inequality\n\nry < 133,\n\nwhere r is a constant.',
      figureNote:
        'Graph of the shaded solution region pending insertion — the source document does not include it.',
      prompt: 'What is the value of r?',
      choices: ['19', '7', '−7', '−19'],
    },
    {
      type: 'grid-in',
      id: 'm2-q12',
      domain: 'Algebra',
      skill: 'Linear equations in two variables',
      acceptedAnswers: ['380'],
      prompt:
        'A carnival receives $10 for each adult admission ticket sold and $5 for each child admission ticket sold. On a particular day, the carnival received a total of $4,100 from selling adult and child admission tickets. If 220 adult admission tickets were sold on that day, how many child admission tickets were sold?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q13',
      domain: 'Advanced Math',
      skill: 'Systems of equations in two variables',
      correctAnswer: 3,
      prompt:
        'y − x = 32\ny = x² − 30x\n\nThe graphs of the equations in the given system intersect at the point (x, y) in the xy-plane. What is a possible value of y?',
      choices: ['32', '33', '63', '64'],
    },
    {
      type: 'grid-in',
      id: 'm2-q14',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      acceptedAnswers: ['14.4', '72/5'],
      prompt:
        'c(r) = (2/5)(2πr)\n\nThe function c gives the partial length, in centimeters, of the circumference of a circle with a radius of r centimeters. According to the function, for each increase of 18 centimeters in the radius, this partial length of the circumference increases by kπ centimeters. What is the value of k?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q15',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'f(x) = 25(1.40)^(x/3)\n\nFor the given function f, the value of f(x) increases by p% for every increase of x by 6. What is the value of p?',
      choices: ['40', '49', '80', '96'],
    },
    {
      type: 'grid-in',
      id: 'm2-q16',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['55'],
      prompt:
        'The function k is defined by\n\nk(s) = √(s + 110).\n\nIf k(53p) = p, where p is a constant, what is the value of p?',
    },
    {
      type: 'grid-in',
      id: 'm2-q17',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['9'],
      prompt:
        'If\n\n121x² = −110x + 56,\n\nwhat is the value of 11x + 5, where 11x + 5 > 0?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q18',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'A computer program models the population of a certain insect in an environment where the insect has no natural predators. According to the model, the estimated total mass of the insect population at the end of every 5-week period is 158% greater than the estimated total mass at the end of the previous 5-week period. The estimated total mass of the insect population at the end of 15 weeks is 627.7 grams. Which equation best represents this model, where M is the estimated total mass, in grams, of the insect population at the end of t weeks?',
      choices: [
        'M = 538.92(1.58)^(t/5)',
        'M = 457.66(2.58)^(t/5)',
        'M = 159.14(1.58)^(t/5)',
        'M = 36.55(2.58)^(t/5)',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm2-q19',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 0,
      prompt:
        'The value of an autographed baseball increased by 178% from the end of 2012 to the end of 2013 and then decreased by 21% from the end of 2013 to the end of 2014. What was the net percentage increase in the value of the autographed baseball from the end of 2012 to the end of 2014?',
      choices: ['119.62%', '140.62%', '157.00%', '236.38%'],
    },
    {
      type: 'grid-in',
      id: 'm2-q20',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      acceptedAnswers: ['7/16'],
      prompt:
        'If n and k are numbers greater than 1, and\n\n⁴√(n⁵) = ³√(k²),\n\nfor what value of a is\n\nn^(2a+1) = k?',
    },
    {
      type: 'grid-in',
      id: 'm2-q21',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      acceptedAnswers: ['28/17'],
      passage:
        'For triangle ABC, the length of AB is 11 less than the length of AC. Point D, not shown, lies on AC such that BD is perpendicular to AC.',
      figureNote:
        'Triangle diagram pending insertion — the source document does not include it.',
      prompt: 'What is the value of\n\nBC/BD?',
    },
    {
      type: 'multiple-choice',
      id: 'm2-q22',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      correctAnswer: 0,
      prompt:
        'The area of a rectangular region is increasing at a rate of 280 square feet per hour. Which of the following is closest to this rate in square meters per minute? Use 1 meter = 3.28 feet.',
      choices: ['0.43', '1.42', '15.31', '26.03'],
    },
  ],
}
