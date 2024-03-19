<template>
  <el-dialog v-model="dialogFormVisible" title="创建分类" width="600" style="padding: 20px">
    <el-form :model="category">
      <el-form-item label="分类别名（显示名称）" :label-width="formLabelWidth">
        <el-input v-model="category.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="分类名称（唯一性）" :label-width="formLabelWidth">
        <el-input v-model="category.slug" autocomplete="off" />
      </el-form-item>
      <el-form-item label="颜色" :label-width="formLabelWidth">
        <el-select v-model="category.type" placeholder="选择颜色" style="width: 240px">
          <el-option
            v-for="item in colors"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          >
            <div class="flex items-center">
              <el-tag :color="item.value" style="margin-right: 8px" size="small" />
              <span :style="{ color: item.value }">{{ item.label }}</span>
            </div>
          </el-option>
          <template #tag>
            <el-tag v-for="color in value" :key="color.value" :color="color" />
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="分类描述" :label-width="formLabelWidth">
        <el-input v-model="category.description" autocomplete="off" />
      </el-form-item>
      <el-form-item label="上级分类" :label-width="formLabelWidth">
        <el-select v-model="category.pid" placeholder="请选择上级分类">
          <el-option
            v-for="(cat, index) in categories"
            :label="cat.name"
            :key="index"
            :value="cat._id!"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleConfirm"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { Category } from '@/constants/constant.category'
import { propTypes } from '@/utils/propTypes'
import {
  ElButton,
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElSelect,
  ElTag
} from 'element-plus'
import { PropType, reactive, ref, watch } from 'vue'

const props = defineProps({
  // 弹窗是否打开
  shouldOpen: propTypes.bool.def(false),
  // 分类信息对象
  editingCategory: {
    type: Object as PropType<Nullable<Category>>,
    default: () => ({})
  },
  // 分类列表
  categories: Array as PropType<Category[]>
})

const value = ref<any[]>([])

const colors = [
  {
    value: '#67C23A',
    label: 'success'
  },
  {
    value: '#E6A23C',
    label: 'warning'
  },
  {
    value: '#F56C6C',
    label: 'danger'
  },
  {
    value: '#909399',
    label: 'info'
  }
]

const emit = defineEmits(['confirm'])

function handleConfirm() {
  emit('confirm', category)
  resetCategory()
}

watch(
  () => props.shouldOpen,
  (val) => {
    dialogFormVisible.value = val
    if (!val) {
      resetCategory()
    }
  }
)

watch(
  () => props.editingCategory,
  (val) => {
    Object.assign(category, val)
  }
)

const dialogFormVisible = ref(props.shouldOpen)
const formLabelWidth = '160px'

const category = reactive<Partial<Category>>({})
function resetCategory() {
  Object.assign(category, {
    name: '',
    slug: '',
    type: '',
    pid: undefined,
    description: '',
    extends: []
  })
}

resetCategory()
</script>

<style scoped>
.el-tag {
  border: none;
  aspect-ratio: 1;
}
</style>
