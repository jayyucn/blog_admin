<template>
  <div class="tags-container">
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag.name"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag.name }}
    </el-tag>
    <el-select
      v-model="value"
      filterable
      remote
      allowCreate
      :default-first-option="true"
      placeholder="请输入标签"
      :remote-method="remoteMethod"
      @change="onSelectChange"
      :loading="loading"
      style="width: 240px"
    >
      <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.name" />
      <template #loading>
        <svg class="circular" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" />
        </svg>
      </template>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ElSelect, ElOption, ElTag } from 'element-plus'
import { ref, unref, watch } from 'vue'
import { Tag, createTagApi, getTagsApi } from '@/api/tags'
import { propTypes } from '@/utils/propTypes'

const props = defineProps({
  onTagsChange: propTypes.func.def(undefined)
})

const dynamicTags = ref<Tag[]>([])

watch(
  () => dynamicTags.value.length,
  () => {
    if (props.onTagsChange) {
      props.onTagsChange(unref(dynamicTags))
    }
  }
)

const handleClose = (tag: Tag) => {
  const idx = dynamicTags.value.indexOf(tag)
  if (idx > -1) {
    dynamicTags.value.splice(idx, 1)
  }
}

async function onSelectChange(tag: string) {
  const iTag = { name: tag, description: '' } as Tag
  const res = await createTagApi(iTag)
  if (res.result) {
    dynamicTags.value.push(res.result)
  }
  value.value = ''
  console.log('selected: ', tag)
}

const options = ref<Tag[]>([])

const value = ref<string>('')
const loading = ref(false)

const timeout = ref()

const remoteMethod = (keyword: string) => {
  console.log('----query---- ', keyword)
  if (keyword) {
    loading.value = true
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getTagsApi({ keyword: keyword }).then((res) => {
        loading.value = false
        if (res.result.data.length > 0) {
          options.value = res.result.data
        }
        console.log(res.result)
      })
    }, 500)
  } else {
    options.value = []
    loading.value = false
  }
}
</script>

<style>
.el-select-dropdown__loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
}

.circular {
  display: inline;
  width: 30px;
  height: 30px;
  animation: loading-rotate 2s linear infinite;
}

.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-color-primary);
  stroke-linecap: round;
}

@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
