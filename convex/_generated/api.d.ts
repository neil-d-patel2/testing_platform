/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as attempts from "../attempts.js";
import type * as content_grading from "../content/grading.js";
import type * as content_index from "../content/index.js";
import type * as content_tests_satPracticeTest1_index from "../content/tests/satPracticeTest1/index.js";
import type * as content_tests_satPracticeTest1_math1 from "../content/tests/satPracticeTest1/math1.js";
import type * as content_tests_satPracticeTest1_math2 from "../content/tests/satPracticeTest1/math2.js";
import type * as content_tests_satPracticeTest1_readingWriting1 from "../content/tests/satPracticeTest1/readingWriting1.js";
import type * as content_tests_satPracticeTest1_readingWriting2 from "../content/tests/satPracticeTest1/readingWriting2.js";
import type * as content_types from "../content/types.js";
import type * as tests from "../tests.js";
import type * as timing from "../timing.js";
import type * as todos from "../todos.js";
import type * as tutor from "../tutor.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  attempts: typeof attempts;
  "content/grading": typeof content_grading;
  "content/index": typeof content_index;
  "content/tests/satPracticeTest1/index": typeof content_tests_satPracticeTest1_index;
  "content/tests/satPracticeTest1/math1": typeof content_tests_satPracticeTest1_math1;
  "content/tests/satPracticeTest1/math2": typeof content_tests_satPracticeTest1_math2;
  "content/tests/satPracticeTest1/readingWriting1": typeof content_tests_satPracticeTest1_readingWriting1;
  "content/tests/satPracticeTest1/readingWriting2": typeof content_tests_satPracticeTest1_readingWriting2;
  "content/types": typeof content_types;
  tests: typeof tests;
  timing: typeof timing;
  todos: typeof todos;
  tutor: typeof tutor;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
