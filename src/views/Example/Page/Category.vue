<template>
  <el-tree
    ref="treeRef"
    v-bind="props"
    style="max-width: 600px"
    class="categories"
    :data="data"
    :props="defaultProps"
    default-expand-all
    :showCheckbox="showCheckbox"
    :filter-node-method="filterNode"
    @check-change="handleCheckChange"
  />
</template>

<script lang="ts" setup>
import { getCategoryListApi } from '@/api/table'
import { CategoryTree } from '@/constants/constant.category'
import { ElTree } from 'element-plus'
import { ref, watch } from 'vue'
import { arrayToTree } from 'performant-array-to-tree'
import { propTypes } from '@/utils/propTypes'

const props = defineProps({
  showCheckbox: propTypes.bool.def(false),
  onCheckChange: propTypes.func.def(undefined)
})

function handleCheckChange(_tree: CategoryTree, _checked: boolean, _indeterminate: boolean): void {
  if (treeRef.value && props.onCheckChange)
    props.onCheckChange(treeRef.value.getCheckedNodes() as CategoryTree[])
}

const treeRef = ref<InstanceType<typeof ElTree>>()
const filterText = ref('')
watch(filterText, (val) => {
  treeRef.value!.filter(val)
})

const data = ref<CategoryTree[]>([])

async function getCategories() {
  const res = await getCategoryListApi({ page_size: 20 })
  if (res && res.result) {
    data.value = arrayToTree(res.result.data, {
      id: '_id',
      parentId: 'pid',
      childrenField: 'children',
      dataField: null
    }) as CategoryTree[]
  }
}
getCategories()

const filterNode = (value: string, data: CategoryTree) => {
  if (!value) return true
  return data.name.includes(value)
}

const defaultProps = {
  children: 'children',
  label: 'name'
}
</script>
