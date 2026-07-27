import type { Test } from '../types'

/**
 * PLACEHOLDER — delete this once the tutor's real tests are transcribed.
 *
 * It exists so the `/tests` page has something to render and so the answer-key
 * stripping is exercisable end to end. The question counts and time limits are
 * deliberately small, not SAT-accurate.
 */
export const sampleTest: Test = {
  slug: 'sample-test',
  title: 'Sample Test (placeholder)',
  description:
    'A short stand-in used to verify the platform. Replace with a real test.',
  modules: [
    {
      id: 'rw-1',
      title: 'Reading and Writing — Module 1',
      timeLimitSeconds: 10 * 60,
      questions: [
        {
          type: 'multiple-choice',
          id: 'rw-1-q1',
          passage:
            'The archaeologist noted that the settlement had been abandoned abruptly: cooking pots sat unwashed, and tools lay where they had been set down.',
          prompt:
            'Which choice best describes the function of the underlined portion in the text as a whole?',
          choices: [
            'It offers evidence that the departure was unplanned.',
            'It explains why the settlement was originally founded.',
            'It contrasts two competing archaeological theories.',
            'It identifies the tools used to date the settlement.',
          ],
          correctAnswer: 0,
          explanation:
            'Unwashed pots and abandoned tools are details supporting the claim that the departure was sudden rather than orderly.',
        },
        {
          type: 'multiple-choice',
          id: 'rw-1-q2',
          prompt:
            'Which choice completes the text with the most logical and precise word or phrase?\n\nThe committee was ______ in its praise, singling out nearly every member of the team for recognition.',
          choices: ['reticent', 'effusive', 'ambivalent', 'perfunctory'],
          correctAnswer: 1,
          explanation:
            '"Effusive" means unrestrained in expressing praise, which matches singling out nearly everyone for recognition.',
        },
      ],
    },
    {
      id: 'math-1',
      title: 'Math — Module 1',
      timeLimitSeconds: 12 * 60,
      questions: [
        {
          type: 'multiple-choice',
          id: 'math-1-q1',
          prompt: 'If 3x + 7 = 22, what is the value of x?',
          choices: ['3', '5', '7', '15'],
          correctAnswer: 1,
          explanation: '3x = 22 − 7 = 15, so x = 5.',
        },
        {
          type: 'grid-in',
          id: 'math-1-q2',
          prompt:
            'A line passes through the points (0, 1) and (4, 4). What is the slope of the line?',
          acceptedAnswers: ['3/4', '0.75', '.75'],
          explanation: 'Slope = (4 − 1) / (4 − 0) = 3/4.',
        },
      ],
    },
  ],
}
