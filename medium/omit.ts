
type ExcludeKey<T, K extends T> = T extends K ? never : T // 同 Exclude

type MyOmit<T, K extends keyof T> = {
  [P in ExcludeKey<keyof T, K>]: T[P];
} 

/**
 * 测试
 */
interface TestCase_MyOmit {
  a: number;
  b: string;
  c: boolean;
}

type Result_MyOmit = MyOmit<TestCase_MyOmit, 'a'>