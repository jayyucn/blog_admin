export enum PublishState {
  Draft = 0, // 草稿
  Published = 1, // 已发布
  Recycle = -1 // 回收站
}

export enum PublicState {
  Public = 1, // 公开
  Secret = -1, // 私密
  Reserve = 0 // 保留（限制）
}

export enum OriginState {
  Original = 0, // 原创
  Reprint = 1, // 转载
  Hybrid = 2 // 混合
}

export type TableData = {
  id: string
  title: string
  content: string
  description: string
  keywords: string[]
  thumbnail: string | null
  state: PublishState
  public: PublicState
  origin: OriginState
  featured: boolean
  author: string
  categories: any[]
  tags: any[]
  importance: number
  created_at: string
  updated_at: string
  pageviews: number
}
