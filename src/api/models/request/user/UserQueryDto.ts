import type { PageRequest } from '@/api/models/request/PageRequest.ts'

export interface UserQueryDto extends PageRequest{
  id?: number,
  name?: string,
  account?: string,
  profile?: string,
  role?: string,
}
