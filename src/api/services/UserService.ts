import type { UserLoginDto } from '@/api/models/request/user/UserLoginDto'
import type { LoginUserVO } from '@/api/models/response/user/LoginUserVO'
import request from '@/api/core/request'
import { User } from '@/api/core/Url'
import type { UserRegisterDto } from '@/api/models/request/user/UserRegisterDto.ts'
import type { UserAddDto } from '@/api/models/request/user/UserAddDto.ts'
import type { UserQueryDto } from '@/api/models/request/user/UserQueryDto.ts'
import type { Page } from '@/api/models/response/Page.ts'
import type { UserVO } from '@/api/models/response/user/UserVO.ts'
import type { UserUpdateDto } from '@/api/models/request/user/UserUpdateDto.ts'
import type { DeleteRequest } from '@/api/models/request/DeleteRequest.ts'

export class UserService {
  public static async login(userLoginDto: UserLoginDto): Promise<LoginUserVO> {
    return await request<LoginUserVO>({
      url: User.login,
      method: 'POST',
      body: userLoginDto,
      dataType: 'json',
    })
  }

  public static async getLoginUser(): Promise<LoginUserVO> {
    return await request<LoginUserVO>({
      url: User.getLoginUser,
      method: 'GET',
      body: null,
      dataType: 'json',
    })
  }

  public static async logout(): Promise<boolean> {
    return await request<boolean>({
      url: User.logout,
      method: 'GET',
      body: null,
      dataType: 'json',
    })
  }

  public static async register(userRegisterDto: UserRegisterDto): Promise<number> {
    return await request<number>({
      url: User.register,
      method: 'POST',
      body: userRegisterDto,
      dataType: 'json',
    })
  }

  public static async add(userAddDto: UserAddDto): Promise<number> {
    return await request<number>({
      url: User.add,
      method: 'POST',
      body: userAddDto,
      dataType: 'json',
    })
  }

  public static async update(userUpdateDto: UserUpdateDto): Promise<boolean> {
    return await request<boolean>({
      url: User.update,
      method: 'POST',
      body: userUpdateDto,
      dataType: 'json',
    })
  }

  public static async delete(deleteRequest: DeleteRequest): Promise<boolean> {
    return await request<boolean>({
      url: User.delete,
      method: 'POST',
      body: deleteRequest,
      dataType: 'json',
    })
  }

  public static async listUserVOByPage(userQueryDto: UserQueryDto): Promise<Page<UserVO>> {
    return await request<Page<UserVO>>({
      url: User.listUserVOByPage,
      method: 'POST',
      body: userQueryDto,
      dataType: 'json',
    })
  }
}
