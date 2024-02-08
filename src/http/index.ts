import { CONTENT_TYPE } from './config'
import service from './service'
import type { IResponse } from './types'

const request = async (option: AxiosConfig) => {
  const { url, method, params, data, headers, responseType } = option

  const rsp = await service.request({
    url: url,
    method,
    params,
    data: data,
    responseType: responseType,
    headers: {
      'Content-Type': CONTENT_TYPE,
      ...headers
    }
  })
  return rsp
}

const http = {
  get: async <T = any>(option: AxiosConfig) => {
    return await (request({ method: 'get', ...option }) as Promise<IResponse<T>>)
  },
  post: <T = any>(option: AxiosConfig) => {
    return request({ method: 'post', ...option }) as Promise<IResponse<T>>
  },
  delete: <T = any>(option: AxiosConfig) => {
    return request({ method: 'delete', ...option }) as Promise<IResponse<T>>
  },
  put: <T = any>(option: AxiosConfig) => {
    return request({ method: 'put', ...option }) as Promise<IResponse<T>>
  },
  cancelRequest: (url: string | string[]) => {
    return service.cancelRequest(url)
  },
  cancelAllRequest: () => {
    return service.cancelAllRequest()
  }
}

export default http
