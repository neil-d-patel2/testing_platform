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
      skill: 'Linear functions',
      correctAnswer: 3,
      prompt:
        'The function g is defined by\n\ng(x) = 4x + 2.\n\nWhat is the value of g(x) when x = 2?',
      choices: ['0', '2', '4', '10'],
    },
    {
      type: 'grid-in',
      id: 'm1-q2',
      domain: 'Algebra',
      skill: 'Linear inequalities in one variable',
      acceptedAnswers: ['12'],
      prompt:
        'An event planner is planning an ice-skating event. It costs the event planner a onetime fee of $35 to rent the skating rink and $15.25 per attendee. The event planner has a budget of $225. What is the greatest number of attendees possible without exceeding the budget?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q3',
      domain: 'Advanced Math',
      skill: 'Equivalent expressions',
      correctAnswer: 1,
      prompt: 'Which expression is equivalent to\n\n42x³ + 7x?',
      choices: ['7x(6 + 7x)', '7x(6x² + 1)', '7x²(6 + 7x)', '7x²(6x + 1)'],
    },
    {
      type: 'grid-in',
      id: 'm1-q4',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Ratios, rates, proportional relationships, and units',
      acceptedAnswers: ['134'],
      prompt:
        'For a certain rectangle, the ratio of the width to the length is 1 to 2. If the width of the rectangle is 67 centimeters, what is the length, in centimeters, of the rectangle?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q5',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Two-variable data: Models and scatterplots',
      correctAnswer: 2,
      passage:
        'The scatterplot shows the relationship between the square footage of 12 clothing stores and their annual sales, in millions of dollars.',
      figureNote:
        'Scatterplot of square footage versus annual sales for 12 clothing stores pending insertion — the source document does not include it.',
      prompt:
        'According to the trend shown by the data, which of the following is the best prediction for the annual sales, in millions of dollars, of a clothing store that is 4 thousand square feet?',
      choices: ['4.1', '5.4', '7.5', '10.2'],
    },
    {
      type: 'grid-in',
      id: 'm1-q6',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      acceptedAnswers: ['2600', '2,600'],
      prompt:
        'y = 2,600(a)^x\n\nThe given equation, where a is a positive constant, gives the predicted number of bacteria, y, in a growth medium x hours after the number of bacteria was initially measured. According to the equation, what was the predicted number of bacteria initially measured in the growth medium?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q7',
      domain: 'Algebra',
      skill: 'Linear equations in one variable',
      correctAnswer: 3,
      prompt: 'If\n\n6x − 8 = 4,\n\nwhat is the value of 6x + 8?',
      choices: ['−4', '2', '10', '20'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q8',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 1,
      prompt:
        'A number f is 120% greater than a positive number g. A number h is 90% less than the number f. The number h is how many times the number g?',
      choices: ['0.12', '0.22', '1.08', '1.98'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q9',
      domain: 'Problem-Solving and Data Analysis',
      skill: 'Percentages',
      correctAnswer: 1,
      prompt:
        'A certain university’s research farm is 1,000 acres, of which 71 acres contain rice. What percentage of the acres of this research farm contain rice?',
      choices: ['0.71%', '7.1%', '71%', '710%'],
    },
    {
      type: 'grid-in',
      id: 'm1-q10',
      domain: 'Geometry and Trigonometry',
      skill: 'Right triangles and trigonometry',
      acceptedAnswers: ['32'],
      passage:
        'In the right triangle shown, a, b, and c are positive constants. For an acute angle D,\n\nsin D = b/c.',
      figureNote:
        'Right triangle labelled a, b, c with a 58° angle pending insertion — the source document does not include it.',
      prompt: 'What is the measure of angle D, in degrees?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q11',
      domain: 'Geometry and Trigonometry',
      skill: 'Lines, angles, and triangles',
      correctAnswer: 0,
      passage:
        'In the figure shown, lines ℓ and k are parallel and line t intersects both lines.',
      figureNote:
        'Parallel lines ℓ and k cut by transversal t, with angles x° and y°, pending insertion — the source document does not include it.',
      prompt: 'If x > 134, which of the following must be true?',
      choices: ['y < 46', 'y > 46', 'x + y < 180', 'x + y > 180'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q12',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      prompt:
        'Line t in the xy-plane has a slope of 1/8 and passes through the point (32, −7). Which equation defines line t?',
      choices: ['y = −11x + 1/8', 'y = x/8 − 11', 'y = x/8 − 7', 'y = 32x − 7'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q13',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 0,
      passage:
        'The graph of the function f, where y = f(x), gives the total cost y, in dollars, for a certain video game system and x games.',
      figureNote:
        'Graph of the linear total-cost function pending insertion — the source document does not include it.',
      prompt:
        'What is the best interpretation of the slope of the graph in this context?',
      choices: [
        'Each game costs $16.',
        'The video game system costs $16.',
        'Each game costs $50.',
        'The video game system costs $50.',
      ],
    },
    {
      type: 'grid-in',
      id: 'm1-q14',
      domain: 'Geometry and Trigonometry',
      skill: 'Circles',
      acceptedAnswers: ['19'],
      prompt:
        'What is the radius of the circle in the xy-plane defined by\n\n(x + 2)² + (y + 6)² = 361?',
    },
    {
      type: 'multiple-choice',
      id: 'm1-q15',
      domain: 'Advanced Math',
      skill:
        'Nonlinear equations in one variable and systems of equations in two variables',
      correctAnswer: 1,
      prompt:
        'x² + y² = 1,088\ny − 4x = 0\n\nA solution to the given system of equations is (x, y), where x < 0. What is the value of y?',
      choices: ['−256', '−32', '−8', '−4'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q16',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 3,
      prompt:
        'f(x) = 10(x² + 47)\n\nWhat is the minimum value of the given function?',
      choices: ['0.1', '4.7', '10', '470'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q17',
      domain: 'Advanced Math',
      skill: 'Nonlinear functions',
      correctAnswer: 0,
      prompt:
        'The function j is defined by\n\nj(x) = (10x + 5)/(3p),\n\nand the function k is defined by\n\nk(x) = j(x) · p/(x + 1),\n\nwhere p is a positive constant. What is the value of k(9)?',
      choices: ['19/6', '10/3', '95/13', '85/3'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q18',
      domain: 'Algebra',
      skill: 'Linear inequalities in two variables',
      correctAnswer: 3,
      prompt:
        'In the xy-plane, which of the following does **NOT** contain any points that are part of the solution set to\n\n7x − 6y > 42?',
      choices: [
        'The x-axis',
        'The region where x > 0 and y > 0',
        'The region where x < 0 and y < 0',
        'The region where x < 0 and y > 0',
      ],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q19',
      domain: 'Algebra',
      skill: 'Systems of two linear equations in two variables',
      correctAnswer: 2,
      prompt:
        '3x + 2y = 10\n18x + 12y = 60\n\nHow many solutions does the given system of equations have?',
      choices: ['Exactly one', 'Exactly two', 'Infinitely many', 'Zero'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q20',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      correctAnswer: 2,
      prompt:
        '(|4x − 48| + 4)/8 = 6\n\nWhat is the sum of the solutions to the given equation?',
      choices: ['1', '23', '24', '48'],
    },
    {
      type: 'multiple-choice',
      id: 'm1-q21',
      domain: 'Algebra',
      skill: 'Linear functions',
      correctAnswer: 1,
      prompt:
        'A beekeeper’s initial observation of the population of a certain bee colony was 1,600 bees. The beekeeper set a goal to increase the population to 2,975 bees. The beekeeper uses a model that predicts the population of this bee colony begins at 1,600 and increases by 110 bees per week in the first two weeks after the initial observation, and then increases by 165 bees per week until the beekeeper’s goal is reached. According to this model, at the end of week w after the initial observation, where w > 2, which of the following functions gives the predicted number of bees still needed to reach the beekeeper’s goal?',
      choices: [
        'p(w) = −110 + 165w',
        'p(w) = 1,485 − 165w',
        'p(w) = 2,865 + 165w',
        'p(w) = 2,975 − 165w',
      ],
    },
    {
      type: 'grid-in',
      id: 'm1-q22',
      domain: 'Advanced Math',
      skill: 'Nonlinear equations in one variable',
      acceptedAnswers: ['0'],
      prompt:
        'The quadratic equation\n\n(2x − 64)² = a,\n\nwhere a is a constant, has exactly one real solution. What is the value of a?',
    },
  ],
}
