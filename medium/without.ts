/**
 * 实现一个像 Lodash.without 函数一样的泛型 Without<T, U>
 * 它接收数组类型的 T 和数字或数组类型的 U 为参数
 * 会返回一个去除 U 中元素的数组 T。
 */
type ToUnion<T> = T extends any[] ? T[number] : T

type Without<T extends any[], K extends any> = 
  T extends [infer Head, ...infer Rest]
    ? Head extends ToUnion<K> 
      ? Without<Rest, K>
      : [Head, ...Without<Rest, K>]
    : []


type Res1 = Without<[1, 4, 1, 2, 5], [1, 2]>; // expected to be [4, 5]