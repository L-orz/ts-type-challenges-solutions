import type { ReadonlyKey } from './readonly-key'

type ReverseReadonly<T> = {
  -readonly [P in ReadonlyKey<T>]: T[P];
} & {
  readonly [P in Exclude<keyof T, ReadonlyKey<T>>]: T[P];
}

type TestCase_ReverseReadonly = {
  a: string
  readonly b: number
}

type Result_ReverseReadonly = ReverseReadonly<TestCase_ReverseReadonly>
