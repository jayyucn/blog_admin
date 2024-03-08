import http from '@/http'

// 获取所有字典
export const getDictApi = () => {
  return http.get({ url: '/mock/dict/list' })
}

// 模拟获取某个字典
export const getDictOneApi = async () => {
  return http.get({ url: '/mock/dict/one' })
}

export const dumpMongodb = async () => {
  return http.get({ url: '/backup/dump' })
}

export const restoreMongodb = async () => {
  return http.get({ url: '/backup/restore' })
}

export async function postStaticApi(options: {
  file: File
  name: string
  onProgress?: (progress: number) => void
}) {
  const data = {
    file: options.file,
    name: options.name
  }
  return http
    .post<{
      url: string
      key: string
      size: number
    }>({
      url: '/static/upload',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' },
      responseType: 'json'
      // params: {
      //   onUploadProgress: ({ loaded, total }) => {
      //     if (isNumber(total)) {
      //       const progress = (loaded / total) * 100
      //       options.onProgress?.(progress)
      //     }
      //   }
      // }
    })
    .then((response) => {
      return response.result
    })
}

export const Common = {
  dumpMongodb: dumpMongodb,
  restoreMongodb: restoreMongodb,
  postStaticApi
}
