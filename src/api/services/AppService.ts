import type { AppAddDto } from '@/api/models/request/app/AppAddDto.ts'
import request from '@/api/core/request.ts'
import { App } from '@/api/core/Url.ts'
import type { AppUpdateDto } from '@/api/models/request/app/AppUpdateDto.ts'
import type { DeleteRequest } from '@/api/models/request/DeleteRequest.ts'
import type { AppVO } from '@/api/models/response/app/AppVO.ts'
import type { Page } from '@/api/models/response/Page.ts'
import type { AppQueryDto } from '@/api/models/request/app/AppQueryDto.ts'
import type { AppDeployDto } from '@/api/models/request/app/AppDeployDto.ts'

export class AppService {

  public static async add(appAddDto: AppAddDto): Promise<number> {
    return await request<number>({
      url: App.add,
      method: 'POST',
      body: appAddDto,
      dataType: 'json',
    })
  }

  public static async update(appUpdateDto: AppUpdateDto): Promise<boolean> {
    return await request<boolean>({
      url: App.update,
      method: 'POST',
      body: appUpdateDto,
      dataType: 'json',
    })
  }

  public static async delete(deleteRequest: DeleteRequest): Promise<boolean> {
    return await request<boolean>({
      url: App.delete,
      method: 'POST',
      body: deleteRequest,
      dataType: 'json',
    })
  }

  public static async getAppVOById(id: number): Promise<AppVO> {
    return await request<AppVO>({
      url: App.getVoById,
      method: 'GET',
      body: {
        id,
      },
      dataType: 'url',
    })
  }

  public static async listMyAppVOByPage(appQueryDto: AppQueryDto): Promise<Page<AppVO>> {
    return await request<Page<AppVO>>({
      url: App.listMyAppVOByPage,
      method: 'POST',
      body: appQueryDto,
      dataType: 'json',
    })
  }

  public static async listGoodAppVOByPage(appQueryDto: AppQueryDto): Promise<Page<AppVO>> {
    return await request<Page<AppVO>>({
      url: App.listGoodAppVOByPage,
      method: 'POST',
      body: appQueryDto,
      dataType: 'json',
    })
  }

  public static async deleteAppByAdmin(deleteRequest: DeleteRequest): Promise<boolean> {
    return await request<boolean>({
      url: App.deleteAppByAdmin,
      method: 'POST',
      body: deleteRequest,
      dataType: 'json',
    })
  }

  public static async updateAppByAdmin(appUpdateDto: AppUpdateDto): Promise<boolean> {
    return await request<boolean>({
      url: App.updateAppByAdmin,
      method: 'POST',
      body: appUpdateDto,
      dataType: 'json',
    })
  }

  public static async listAppVOByPageByAdmin(appQueryDto: AppQueryDto): Promise<Page<AppVO>> {
    return await request<Page<AppVO>>({
      url: App.listAppVOByPageByAdmin,
      method: 'POST',
      body: appQueryDto,
      dataType: 'json',
    })
  }

  public static async getAppVOByIdByAdmin(id: number): Promise<AppVO> {
    return await request<AppVO>({
      url: App.getAppVOByIdByAdmin,
      method: 'GET',
      body: {
        id,
      },
      dataType: 'url',
    })
  }

  public static async deployApp(appDeployDto: AppDeployDto): Promise<string> {
    return await request<string>({
      url: App.deployApp,
      method: 'POST',
      body: appDeployDto,
      dataType: 'json',
    })
  }
}
