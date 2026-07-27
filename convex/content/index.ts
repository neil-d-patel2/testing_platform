import { sampleTest } from './tests/sampleTest'
import type { PublicQuestion, Question, Test, TestSummary } from './types'

/**
 * Every test the platform serves. Adding a test is a code change: write the
 * file under `./tests/`, then register it here.
 *
 * Slugs must be unique — `assertUniqueSlugs` below fails the deploy if not,
 * since a duplicate would silently shadow a test that students may already
 * have attempts against.
 */
const ALL_TESTS: Array<Test> = [sampleTest]

function assertUniqueSlugs(tests: Array<Test>) {
  const seen = new Set<string>()
  for (const test of tests) {
    if (seen.has(test.slug)) {
      throw new Error(`Duplicate test slug in the registry: "${test.slug}"`)
    }
    seen.add(test.slug)
  }
}

assertUniqueSlugs(ALL_TESTS)

const BY_SLUG = new Map(ALL_TESTS.map((test) => [test.slug, test]))

/** The test with this slug, or `undefined` if the slug is unknown. */
export function getTest(slug: string): Test | undefined {
  return BY_SLUG.get(slug)
}

function summarize(test: Test): TestSummary {
  return {
    slug: test.slug,
    title: test.title,
    description: test.description,
    moduleCount: test.modules.length,
    questionCount: test.modules.reduce((n, m) => n + m.questions.length, 0),
    totalTimeSeconds: test.modules.reduce((s, m) => s + m.timeLimitSeconds, 0),
  }
}

/** Metadata for the test list. Carries no question content. */
export function listTestSummaries(): Array<TestSummary> {
  return ALL_TESTS.map(summarize)
}

/**
 * Removes the answer key from a question.
 *
 * Every path that sends question content to a student must go through this.
 * It is written as an exhaustive switch rather than a field delete so that
 * adding a new question type with a new answer field fails to compile here
 * instead of quietly leaking it.
 */
export function stripAnswers(question: Question): PublicQuestion {
  switch (question.type) {
    case 'multiple-choice': {
      const { correctAnswer: _c, explanation: _e, ...safe } = question
      return safe
    }
    case 'grid-in': {
      const { acceptedAnswers: _a, explanation: _e, ...safe } = question
      return safe
    }
  }
}
