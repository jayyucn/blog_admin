import request from '@/http'
import type { TableData } from './types'

export const getArticleListApi = (params: any) => {
  return request.get({ url: '/article', params })
}

export const getCardTableListApi = (params: any) => {
  return request.get({ url: '/mock/card/list', params })
}

export const getTreeTableListApi = (params: any) => {
  return request.get({ url: '/mock/example/treeList', params })
}

export const saveTableApi = (data: Partial<TableData>): Promise<IResponse> => {
  return request.post({ url: '/article', data })
}

export const getTableDetApi = (id: string): Promise<IResponse<TableData>> => {
  return request.get({ url: '/mock/example/detail', params: { id } })
}

export const delTableListApi = (ids: string[] | number[]): Promise<IResponse> => {
  return request.post({ url: '/mock/example/delete', data: { ids } })
}
