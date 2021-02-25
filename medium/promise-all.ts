/**
 * Promise.all
 * 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。
 */
declare function PromiseAll<T extends any[]> (arr: readonly [...T]): 
  Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]}>

/**
 * 测试
 */
const Result_PromiseAll = PromiseAll([1, 'a', Promise.resolve(2)])