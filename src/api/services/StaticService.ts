import request from '@/api/core/request.ts'
import { Static } from '@/api/core/Url.ts'

export class StaticService {
  public static async serveStaticResource(deployKey: string): Promise<string> {
    return await request<string>({
      url: `${Static.serveStaticResource}/${deployKey}/**`,
      method: 'GET',
      body: null,
      dataType: 'json',
    })
  }
}
