type MyChainable<T = {}> = {
  option<K extends string, V>(key: K, value: V): MyChainable<T & {[k in K]: V}>
  get(): {[P in keyof T]: T[P]}
}

/**
 * 测试
 */
// @ts-ignore
const TestCase_MyChainable: MyChainable = {
  // option()
  // get()
}

const Result_MyChainable = TestCase_MyChainable
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()
// except the type
// interface Result {
//   foo: number
//   name: string
//   bar: {
//     value: string
//   }
// }