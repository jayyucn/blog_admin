<template>
  <el-button v-if="!showCheckbox" type="success" @click="onCreateCategory"> 新建分类 </el-button>
  <el-divider v-if="!showCheckbox" />
  <el-tree
    ref="treeRef"
    v-bind="$attrs"
    style="max-width: 600px"
    class="categories"
    :data="categories"
    :props="defaultProps"
    default-expand-all
    :draggable="!showCheckbox"
    :expand-on-click-node="false"
    :showCheckbox="showCheckbox"
    :filter-node-method="filterNode"
    @check-change="handleCheckChange"
    :render-content="renderContent"
    node-key="id"
    :default-checked-keys="defaultCheckedKeys"
  />

  <CategoryDialog
    v-if="!showCheckbox"
    @confirm="onConfirmCallback"
    @close="onDialogClose"
    :shouldOpen="openDialog"
    :categories="allCategories"
    :editingCategory="editingCategory"
  />
</template>

<script lang="ts" setup>
import CategoryDialog from './components/CategoryDialog.vue'
import {
  createCategoryApi,
  deleteCategoryApi,
  getCategoryListApi,
  updateCategoryApi
} from '@/api/category'
import { CategoryTree } from '@/constants/constant.category'
import { ElTree, ElButton, ElDivider } from 'element-plus'
import { PropType, ref, watch } from 'vue'
import { arrayToTree } from 'performant-array-to-tree'
import { propTypes } from '@/utils/propTypes'
import type Node from 'element-plus/es/components/tree/src/model/node'

const props = defineProps({
  showCheckbox: propTypes.bool.def(false),
  checkedCategories: {
    type: Array as PropType<CategoryTree[]>,
    default: () => []
  },
  onCheckChange: propTypes.func.def(undefined)
})

const defaultCheckedKeys = ref<number[]>([])

watch(
  () => props.checkedCategories,
  (val) => {
    defaultCheckedKeys.value = val.map((item) => item.id!)
  },
  {
    immediate: true
  }
)

function handleCheckChange(_tree: CategoryTree, _checked: boolean, _indeterminate: boolean): void {
  if (treeRef.value && props.onCheckChange)
    props.onCheckChange(treeRef.value.getCheckedNodes() as CategoryTree[])
}

const treeRef = ref<InstanceType<typeof ElTree>>()
const filterText = ref('')
watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const editingCategory = ref<Nullable<CategoryTree>>()

const categories = ref<CategoryTree[]>([])
const allCategories = ref<CategoryTree[]>([])

function handleResult(trees: CategoryTree[]) {
  allCategories.value = trees
  categories.value = arrayToTree(trees, {
    id: '_id',
    parentId: 'pid',
    childrenField: 'children',
    dataField: null
  }) as CategoryTree[]
}

async function getCategories() {
  editingCategory.value = null
  const res = await getCategoryListApi({ page_size: 20 })
  if (res && res.result) {
    handleResult(res.result.data || [])
  }
}
getCategories()

const filterNode = (value: string, data: CategoryTree) => {
  if (!value) return true
  return data.name.includes(value)
}

const defaultProps = {
  children: 'children',
  label: (data: CategoryTree) => {
    let count = data.article_count || 0
    for (const item of data.children || []) {
      item.article_count && (count += item.article_count)
    }
    return data.name + '(' + count + ')'
  }
}

const renderContent = props.showCheckbox
  ? undefined
  : (h, { node, data }: { node: Node; data: CategoryTree; store: Node['store'] }) => {
      return h(
        'span',
        {
          class: 'custom-tree-node'
        },
        h('span', null, node.label),
        h(
          'span',
          null,
          h(
            'a',
            {
              hidden: false,
              onClick: () => append(data)
            },
            '编辑 '
          ),
          h(
            'a',
            {
              style: 'margin-left: 8px',
              onClick: () => remove(node, data)
            },
            '删除'
          )
        )
      )
    }

function onCreateCategory() {
  openDialog.value = true
}

const append = (d: CategoryTree) => {
  openDialog.value = true
  editingCategory.value = d
}

const openDialog = ref(false)

//接收opendialog
const onConfirmCallback = async (category) => {
  if (editingCategory.value) {
    editingCategory.value = null
    await updateCategoryApi(category)
  } else {
    await createCategoryApi(category)
  }
  getCategories()
  openDialog.value = false
}

const onDialogClose = () => {
  openDialog.value = false
  editingCategory.value = null
}

const remove = async (_: Node, d: CategoryTree) => {
  await deleteCategoryApi(d.id!)
  getCategories()
}
</script>

<style>
.custom-tree-node {
  display: flex;
  padding-right: 8px;
  font-size: 14px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}
</style>
