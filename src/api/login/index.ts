import http from '../../http'
import type { UserLoginToken, UserType } from './types'

interface RoleParams {
  roleName: string
}

export interface TokenResult {
  access_token: string
  expires_in: number
}

const loginApi = (data: UserType): Promise<IResponse<UserLoginToken>> => {
  return http.post<UserLoginToken>({ url: '/auth/login', data })
}

const refreshToken = (): Promise<IResponse<TokenResult>> => {
  return http.post<TokenResult>({ url: '/auth/refresh' })
}

const loginOutApi = (): Promise<IResponse> => {
  return http.get({ url: '/auth/signout' })
}

const getUserListApi = ({ params }: AxiosConfig) => {
  return http.get<{
    code: string
    data: {
      list: UserType[]
      total: number
    }
  }>({ url: '/mock/user/list', params })
}

async function getAdminRoleApi(params: RoleParams): Promise<IResponse<AppRoutes>> {
  return await http.get<AppRoutes>({ url: '/routers', params })
}

// const getAdminRoleApi = (params: RoleParams): Promise<IResponse<AppRoutes>> => {
//   return http.get<AppRoutes>({ url: '/routers', params })
// }

const getTestRoleApi = (params: RoleParams): Promise<IResponse<string[]>> => {
  return http.get({ url: '/mock/role/list2', params })
}

export const Login = {
  loginApi,
  refreshToken,
  loginOutApi,
  getUserListApi,
  getAdminRoleApi,
  getTestRoleApi
}
