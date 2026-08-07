import { satPracticeTest1 } from './tests/satPracticeTest1'
import { satPracticeTest2 } from './tests/satPracticeTest2'
import { satPracticeTest3 } from './tests/satPracticeTest3'
import { satPracticeTest4 } from './tests/satPracticeTest4'
import { satPracticeTest5 } from './tests/satPracticeTest5'
import type {
  PublicModule,
  PublicTest,
  Question,
  Test,
  TestSummary,
} from './types'

/**
 * Every test the platform serves. Adding a test is a code change: write the
 * files under `./tests/`, then register it here.
 *
 * Slugs must be unique — `assertUniqueSlugs` below fails the deploy if not,
 * since a duplicate would silently shadow a test that students may already
 * have attempts against.
 */
const ALL_TESTS: Array<Test> = [
  satPracticeTest1,
  satPracticeTest2,
  satPracticeTest3,
  satPracticeTest4,
  satPracticeTest5,
]

function assertUniqueSlugs(tests: Array<Test>) {
  const seen = new Set<string>()
  for (const test of tests) {
    if (seen.has(test.slug)) {
      throw new Error(`Duplicate test slug in the registry: "${test.slug}"`)
    }
    seen.add(test.slug)
  }
}

/**
 * Question ids are the key stored answers point at, so a collision inside a
 * test would make two questions share a student's response.
 */
function assertUniqueQuestionIds(tests: Array<Test>) {
  for (const test of tests) {
    const seen = new Set<string>()
    for (const module of test.modules) {
      for (const question of module.questions) {
        if (seen.has(question.id)) {
          throw new Error(
            `Duplicate question id "${question.id}" in test "${test.slug}"`,
          )
        }
        seen.add(question.id)
      }
    }
  }
}

assertUniqueSlugs(ALL_TESTS)
assertUniqueQuestionIds(ALL_TESTS)

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
export function stripAnswers(question: Question) {
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

function stripModule(module: Test['modules'][number]): PublicModule {
  return {
    id: module.id,
    title: module.title,
    timeLimitSeconds: module.timeLimitSeconds,
    breakAfterSeconds: module.breakAfterSeconds,
    questions: module.questions.map(stripAnswers),
  }
}

/** A whole test with every answer field removed. Safe to send to a student. */
export function getPublicTest(slug: string): PublicTest | undefined {
  const test = getTest(slug)
  if (!test) return undefined

  return {
    slug: test.slug,
    title: test.title,
    description: test.description,
    modules: test.modules.map(stripModule),
  }
}
