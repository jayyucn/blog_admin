import request from '@/http'
import { GeneralPaginateQueryParams, ResponsePaginationData } from '../Interface'
export interface Tag {
  name: string
  description: string
  created_at: number
  updated_at: number
}

/** 获取标签参数 */
export interface GetTagParams extends GeneralPaginateQueryParams {
  /** 搜索关键词 */
  keyword?: string
}

export const getTagsApi = (params: GetTagParams = {}) => {
  return request.get<ResponsePaginationData<Tag>>({ url: '/tag', params })
}

export const createTagApi = (tag: Tag) => {
  return request.post<Tag>({ url: '/tag', data: tag })
}
