export interface LoginUserVO {
  id?: number

  account?: string

  name?: string

  avatar?: string

  profile?: string

  role?: 'user' | 'admin' | 'ban'

  createTime?: string

  updateTime?: string
}
