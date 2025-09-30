import type { PageRequest } from '@/api/models/request/PageRequest.ts'

export interface ChatHistoryQueryDto extends PageRequest {
  id?: number
  message?: string
  messageType?: string
  appId?: number
  userId?: number
  lastCreateTime?: number
}
