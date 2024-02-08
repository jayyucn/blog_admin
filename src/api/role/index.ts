import request from '@/http'

export const getRoleListApi = () => {
  return request.get({ url: '/mock/role/table' })
}
