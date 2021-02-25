type MyReturnType<T extends Function> = 
  T extends (...args: any[]) => (infer R)
    ? R
    : never

/**
 * 测试
 */
const TestCase_MyReturnType = () => false

type Result_MyReturnType = MyReturnType<typeof TestCase_MyReturnType>

// 官方 ReturnType
type OfficialResult_ReturnType = ReturnType<typeof TestCase_MyReturnType>