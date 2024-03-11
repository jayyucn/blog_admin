import { GeneralKeyValue } from '.'

/** 分类 */
export interface Category {
  id?: number
  _id?: string
  pid?: string | null
  name: string
  slug: string
  description: string
  updated_at: string
  created_at: string
  children?: Array<Category>
  extends: Array<GeneralKeyValue>
  article_count?: number
}

export interface CategoryTree extends Category {
  name: string
  children?: Array<CategoryTree>
}

export interface CategoryResult {
  data: CategoryTree[]
  pagination: any
}
