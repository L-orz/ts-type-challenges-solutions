type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}

/**
 * 测试
 */
interface TestCase_MyPick {
  a: number;
  b: string;
  c: boolean;
}

type Result_MyPick = MyPick<TestCase_MyPick, 'a'>