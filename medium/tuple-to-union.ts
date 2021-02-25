/**
 * 元组转合集
 */
// 第一种
type MyTupleToUnion<T extends any[]> = T[number]

// 第二种
type MyTupleToUnion2<T extends any[]> = T extends (infer ITEMS)[] ? ITEMS : never

/**
 * 测试
 */
type TestCase_MyTupleToUnion = ['1', '2', '3' | 1, 4]


type Result_MyTupleToUnion = MyTupleToUnion<TestCase_MyTupleToUnion>
type Result_MyTupleToUnion2 = MyTupleToUnion2<TestCase_MyTupleToUnion>