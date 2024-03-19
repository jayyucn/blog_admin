<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { useI18n } from '@/hooks/web/useI18n'
import { Table } from '@/components/Table'
import { getArticleListApi, delTableListApi } from '@/api/table'
import { useTable } from '@/hooks/web/useTable'
import { TableData } from '@/api/table/types'
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useEventBus } from '@/hooks/event/useEventBus'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { BaseButton } from '@/components/Button'
import dayjs from 'dayjs'
import { ElDatePicker, ElTag } from 'element-plus'

defineOptions({
  name: 'ArticlePage'
})

const { push } = useRouter()

const ids = ref<string[]>([])

const searchParams = ref({})
const setSearchParams = (params: any) => {
  searchParams.value = params
  getList()
}

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getArticleListApi({
      page: unref(currentPage),
      page_size: unref(pageSize),
      ...unref(searchParams)
    })
    let dataList = res.result.data
    dataList = dataList.map((item) => {
      if (item.created_at) {
        item.created_at = dayjs(item.created_at).format('YYYY年MM月DD日HH时')
      }
      if (item.updated_at) {
        // item.updated_at = dayjs(item.updated_at).format('YYYYMMDD')
      }
      return item
    })
    return {
      list: dataList,
      total: res.result.pagination.total_count
    }
  },
  fetchDelApi: async () => {
    const res = await delTableListApi(unref(ids))
    return !!res
  }
})
const { loading, dataList, total, currentPage, pageSize } = tableState
const { getList, getElTableExpose, delList } = tableMethods

getList()

useEventBus({
  name: 'getList',
  callback: (type: string) => {
    if (type === 'add') {
      currentPage.value = 1
    }
    getList()
  }
})

const { t } = useI18n()

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'selection',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      type: 'selection'
    }
  },
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    }
  },
  {
    field: 'title',
    label: t('tableDemo.title'),
    width: '100px',
    search: {
      component: 'Input'
    },
    form: {
      component: 'Input',
      colProps: {
        span: 12
      }
    },
    detail: {
      minWidth: 20
    }
  },
  {
    field: 'description',
    label: t('exampleDemo.description'),
    search: {
      hidden: true
    },
    table: {
      show: false
    },
    form: {
      component: 'Editor'
      // colProps: {
      //   span: 24
      // }
    },
    detail: {
      span: 24,
      slots: {
        default: (data: any) => {
          return <div innerHTML={data.content}></div>
        }
      }
    }
  },
  {
    field: 'author',
    label: t('tableDemo.author'),
    width: '65px',
    search: {
      hidden: false
    }
  },
  {
    field: 'state',
    sortable: true,
    label: t('exampleDemo.state'),
    width: '85px',
    table: {
      formatter: (row: any) => {
        return row.state === 0 ? t('exampleDemo.state1') : t('exampleDemo.state2')
      }
    },
    search: {
      hidden: false
    }
  },
  {
    field: 'updated_at',
    label: t('tableDemo.displayTime'),
    width: '260px',
    search: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return (
            <>
              <ElDatePicker
                v-model={data.row.updated_at}
                type="datetime"
                readonly={true}
                placeholder="Pick a date"
              />
            </>
          )
        }
      }
    }
  },
  {
    field: 'categories',
    label: t('tableDemo.categories'),
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return data.row?.categories.map((item, index) => {
            return (
              <>
                <ElTag type="success" key={index} class="mx-1">
                  {item.name}
                </ElTag>
              </>
            )
          })
        }
      }
    }
  },
  {
    field: 'tags',
    label: t('tableDemo.tags'),
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return data.row?.tags.map((item, index) => {
            return (
              <>
                <ElTag type="info" key={index} class="mx-1">
                  {item.name}
                </ElTag>
              </>
            )
          })
        }
      }
    }
  },
  {
    field: 'meta.views',
    label: t('tableDemo.pageviews'),
    width: '65px',
    search: {
      hidden: true
    },
    form: {
      component: 'InputNumber',
      value: 0
    }
  },
  {
    field: 'action',
    width: '260px',
    label: t('tableDemo.action'),
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return (
            <>
              <BaseButton type="primary" onClick={() => action(data.row, 'edit')}>
                {t('exampleDemo.edit')}
              </BaseButton>
              <BaseButton type="success" onClick={() => action(data.row, 'detail')}>
                {t('exampleDemo.detail')}
              </BaseButton>
              <BaseButton type="danger" onClick={() => delData(data.row)}>
                {t('exampleDemo.del')}
              </BaseButton>
            </>
          )
        }
      }
    }
  }
])

// @ts-ignore
const { allSchemas } = useCrudSchemas(crudSchemas)

const AddAction = () => {
  push('/article/article-add')
}

const delLoading = ref(false)

const delData = async (row: TableData | null) => {
  const elTableExpose = await getElTableExpose()
  ids.value = row ? [row.id] : elTableExpose?.getSelectionRows().map((v: TableData) => v.id) || []
  delLoading.value = true
  await delList(unref(ids).length).finally(() => {
    delLoading.value = false
  })
}

const action = (row: TableData, type: string) => {
  push(`/article/article-${type}?id=${row.id}`)
}
</script>

<template>
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" @reset="setSearchParams" />

    <div class="mb-10px">
      <BaseButton type="primary" @click="AddAction">{{ t('exampleDemo.add') }}</BaseButton>
      <BaseButton :loading="delLoading" type="danger" @click="delData(null)">
        {{ t('exampleDemo.del') }}
      </BaseButton>
    </div>

    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="allSchemas.tableColumns"
      :data="dataList"
      :loading="loading"
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>
</template>
@/hooks/event/useEventBus
