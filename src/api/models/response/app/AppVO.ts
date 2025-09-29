import type { UserVO } from '@/api/models/response/user/UserVO.ts'

export interface AppVO {
  id?: number,
  appName?: string,
  cover?: string,
  initPrompt?: string,
  codeGenType?: string,
  deployKey?: string,
  deployedTime?: string,
  priority?: number,
  userId?: number,
  createTime?: string,
  updateTime?: string,
  user?: UserVO,
}
