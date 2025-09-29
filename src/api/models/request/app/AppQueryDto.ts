import type { PageRequest } from '@/api/models/request/PageRequest.ts'

export interface AppQueryDto extends PageRequest{
  id?: number,
  appName?: string,
  cover?: string,
  initPrompt?: string,
  codeGenType?: string,
  deployKey?: string,
  priority?: number,
  userId?: string,
}
