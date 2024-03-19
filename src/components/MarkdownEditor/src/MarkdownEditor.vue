<script setup lang="ts">
import { ref, unref, watch } from 'vue'
import { propTypes } from '@/utils/propTypes'
import API from '@/api'
import { Toolbar } from './CustomToolbar'

const props = defineProps({
  modelValue: propTypes.string.def('')
})

const emit = defineEmits(['change', 'update:modelValue'])

const valueMarkdown = ref('')
watch(
  () => props.modelValue,
  (val) => {
    if (val === unref(valueMarkdown)) return
    valueMarkdown.value = val
  },
  {
    immediate: true
  }
)
watch(
  () => valueMarkdown.value,
  (val: string) => {
    emit('update:modelValue', val)
  }
)

async function handleUploadImage(_event, insertImage, files) {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  const file = files[0]
  const result = await API.Common.postStaticApi({ file: file, name: file.name })

  // 此处只做示例
  insertImage({
    url: result.url,
    desc: ''
    // width: 'auto',
    // height: 'auto',
  })
}

const toolbar = ref(Toolbar)
</script>

<template>
  <v-md-editor
    v-model="valueMarkdown"
    :disabled-menus="[]"
    left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table | tips hr | todo-list | link image code | mermaid "
    :toolbar="toolbar"
    @upload-image="handleUploadImage"
    height="500px"
  />
</template>

<style>
.v-md-icon-mermaid::before {
  content: 'Mermaid';
}

.v-md-icon-tips::before {
  content: 'Tips';
}
</style>
