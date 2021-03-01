/**
 * 获取只读字段
 * 实现泛型ReadonlyKey<T>，该ReadonlyKey<T>返回对象的只读键的并集。
 */
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

export type ReadonlyKey<T, K extends T = T> = {
  [P in keyof T]:
    Equal<Pick<T, P>, Pick<Readonly<K>, P>> extends true
      ? P
      : never
}[keyof T]

/**
 * 测试
 */
type TestCase_ReadonlyKey = {
  a: string
  readonly b: number
}
type Result_ReadonlyKey = ReadonlyKey<TestCase_ReadonlyKey>
