/**
 * 出堆
 * 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。
 */
type MyPop<T extends any[]> = T extends [...infer Q, infer _] ? Q : never

/**
 * 测试
 */
type TestCase_MyPop = [string, number, 'a', boolean]
type Result_MyPop = MyPop<TestCase_MyPop>