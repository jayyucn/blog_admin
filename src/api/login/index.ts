import type { UserLoginToken, UserType } from './types'
import http from '../../http'

interface RoleParams {
  roleName: string
}

const loginApi = (data: UserType): Promise<IResponse<UserLoginToken>> => {
  // return request.post({ url: '/mock/user/login', data })
  return http.post<UserLoginToken>({ url: '/auth/login', data })
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
  loginOutApi,
  getUserListApi,
  getAdminRoleApi,
  getTestRoleApi
}
