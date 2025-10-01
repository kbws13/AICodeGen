import type { Page } from '@/api/models/response/Page.ts'
import type { ChatHistory } from '@/api/models/response/chatHistory/ChatHistory.ts'
import request from '@/api/core/request.ts'
import { History } from '@/api/core/Url.ts'
import type { ChatHistoryQueryDto } from '@/api/models/request/chatHistory/ChatHistoryQueryDto.ts'
import type { ListAppChatHistoryParam } from '@/api/models/request/chatHistory/ListAppChatHistoryParam.ts'

export class ChatHistoryService {
  public static async listAppChatHistory(
    listAppChatHistoryParam: ListAppChatHistoryParam,
  ): Promise<Page<ChatHistory>> {
    const { appId, pageSize, lastCreateTime } = listAppChatHistoryParam
    return request<Page<ChatHistory>>({
      url: `${History.listAppChatHistory}/${appId}`,
      method: 'GET',
      body: {
        pageSize: pageSize,
        ...(lastCreateTime != null ? { lastCreateTime } : {}),
      },
      dataType: 'url',
    })
  }

  public static async listAllChatHistoryByPageForAdmin(
    chatHistoryQueryDto: ChatHistoryQueryDto,
  ): Promise<Page<ChatHistory>> {
    return request<Page<ChatHistory>>({
      url: History.listAllChatHistoryByPageForAdmin,
      method: 'POST',
      body: chatHistoryQueryDto,
      dataType: 'json',
    })
  }
}
