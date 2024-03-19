import { Category, CategoryResult } from '@/constants/constant.category'
import { GeneralPaginateQueryParams } from '../Interface'
import request from '@/http'

export const getCategoryListApi = (
  params: GeneralPaginateQueryParams = {}
): Promise<IResponse<CategoryResult>> => {
  return request.get({ url: '/category', data: { params } })
}

export const deleteCategoryApi = (id: number): Promise<IResponse<any>> => {
  return request.delete({ url: `/category/${id}` })
}

export const createCategoryApi = (data: Category): Promise<IResponse<any>> => {
  return request.post<CategoryResult>({ url: '/category', data: data })
}

export const updateCategoryApi = (data: Category): Promise<IResponse<any>> => {
  return request.put<CategoryResult>({ url: `/category/${data._id}`, data })
}
