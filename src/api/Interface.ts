/** 通用请求参数 */
export interface GeneralQueryParams {
  [key: string]: number | string | void
}

/** 通用翻页请求参数 */
export interface GeneralPaginateQueryParams extends GeneralQueryParams {
  page?: number
  page_size?: number
}
