/**
 * 最后一个元素
 * 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。
 */
type MyLast<T extends any[]> = T extends [...infer _, infer L] ? L : never

/**
 * 测试
 */
type TestCase_MyLast = [string, number, 'a', boolean]
type Result_MyLast = MyLast<TestCase_MyLast>