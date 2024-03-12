import { GeneralKeyValue } from '.'

/** 标签数据 */
export interface Tag {
  id?: number
  _id?: string
  name: string
  slug: string
  description: string
  updated_at: string
  created_at: string
  extends: Array<GeneralKeyValue>
  article_count?: number
}
