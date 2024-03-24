<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { PropType, reactive, ref, watch } from 'vue'
import { TableData } from '@/api/table/types'
import { useI18n } from '@/hooks/web/useI18n'
import { useValidator } from '@/hooks/web/useValidator'
import { UploadComponentProps } from '@/components/Form/src/types'
import API from '@/api'
import { computed } from 'vue'
import { ElButton, ElMessage, UploadRawFile } from 'element-plus'
import { CategoryTree } from '@/constants/constant.category'
import { Tag } from '@/api/tags'
import { updateArticleApi } from '@/api/table'

const { required } = useValidator()

const props = defineProps({
  currentRow: {
    type: Object as PropType<Nullable<TableData>>,
    default: () => null
  }
})

const { t } = useI18n()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose, setSchema } = formMethods
const imageUrl = ref('')
const thumbnailUrl = computed(() => {
  return imageUrl
})

const schema = reactive<FormSchema[]>([
  {
    field: 'title',
    label: t('exampleDemo.title'),
    component: 'Input',
    formItemProps: {
      rules: [required()]
    },
    colProps: {
      span: 12
    }
  },
  {
    field: 'categories',
    label: t('exampleDemo.category'),
    component: 'Category',
    componentProps: {
      onCheckChange: (trees: CategoryTree[]) => {
        setValues({
          categories: trees
        })
      },
      checkedCategories: computed(() => props.currentRow?.categories || []),
      showCheckbox: true
    },
    formItemProps: {},
    colProps: {
      span: 12
    }
  },
  {
    field: 'tags',
    label: t('exampleDemo.tags'),
    component: 'Tags',
    componentProps: {
      style: 'color=red',
      onTagsChange: (tags: Tag[]) => {
        setValues({
          tags: tags
        })
      },
      defaultTags: computed(() => props.currentRow?.tags || [])
    },
    colProps: {
      span: 12
    }
  },
  {
    field: 'description',
    label: t('exampleDemo.subtitle'),
    component: 'Input',
    formItemProps: {
      rules: [required()]
    },
    colProps: {
      span: 12
    }
  },
  {
    field: 'thumbnail',
    component: 'Input',
    hidden: false,
    value: thumbnailUrl
  },
  {
    field: 'thumbnailUpload',
    label: t('exampleDemo.thumbnail'),
    component: 'Upload',
    componentProps: {
      // action: PATH_URL + '/static/upload',
      // headers: { Authorization: `Bearer ${userStore.getToken}` },
      httpRequest: async (data: any) => {
        const result = await API.Common.postStaticApi({
          file: data.file,
          name: 'thumbnail/' + data.file.name
        })
        imageUrl.value = result.url
      },
      showFileList: false,
      beforeUpload: (rawFile: UploadRawFile) => {
        if (rawFile.type !== 'image/jpeg') {
          ElMessage.error('Avatar picture must be JPG format!')
          return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
          ElMessage.error('Avatar picture size can not exceed 2MB!')
          return false
        }
        return true
      },
      slots: {
        default: () => (
          <>
            {imageUrl.value ? <img src={imageUrl.value} class="avatar" /> : null}
            {!imageUrl.value ? (
              <ElButton type="primary">{t('exampleDemo.addThumbnail')}</ElButton>
            ) : null}
            {/* {imageUrl.value ? <ElText>{imageUrl.value}</ElText> : null} */}
          </>
        )
      }
    } as UploadComponentProps,
    colProps: {
      span: 24
    }
  },
  {
    field: 'author',
    label: t('exampleDemo.author'),
    component: 'Input'
  },
  {
    field: 'state',
    label: t('exampleDemo.state'),
    component: 'Select',
    formItemProps: {
      rules: [required()]
    },
    componentProps: {
      options: [
        { label: t('exampleDemo.state1'), value: 0 },
        { label: t('exampleDemo.state2'), value: 1 },
        { label: t('exampleDemo.state3'), value: -1 }
      ]
    },
    value: 1
  },
  {
    field: 'public',
    label: t('exampleDemo.public'),
    component: 'Select',
    formItemProps: {
      rules: [required()]
    },
    componentProps: {
      options: [
        { label: t('exampleDemo.public1'), value: 1 },
        { label: t('exampleDemo.public2'), value: -1 },
        { label: t('exampleDemo.public3'), value: 0 }
      ]
    },
    value: 1
  },
  {
    field: 'featured',
    label: t('exampleDemo.featured'),
    component: 'Switch',
    value: false
  },
  {
    field: 'origin',
    label: t('exampleDemo.articleSource'),
    component: 'Select',
    formItemProps: {
      rules: [required()]
    },
    componentProps: {
      options: [
        { label: t('exampleDemo.articleSource1'), value: 0 },
        { label: t('exampleDemo.articleSource2'), value: 1 },
        { label: t('exampleDemo.articleSource3'), value: 2 }
      ]
    },
    value: 0
  },
  // {
  //   field: 'update_at',
  //   label: t('exampleDemo.displayTime'),
  //   component: 'DatePicker',
  //   componentProps: {
  //     type: 'datetime',
  //     valueFormat: 'YYYY-MM-DD HH:mm:ss'
  //   },
  //   formItemProps: {
  //     rules: [required()]
  //   }
  // },
  {
    field: 'importance',
    label: t('exampleDemo.importance'),
    component: 'Select',
    formItemProps: {
      rules: [required()]
    },
    componentProps: {
      options: [
        {
          label: '重要',
          value: 3
        },
        {
          label: '良好',
          value: 2
        },
        {
          label: '一般',
          value: 1
        }
      ]
    },
    value: 1
  },
  {
    field: 'content',
    component: 'MarkdownEditor',
    colProps: {
      span: 24
    },
    componentProps: {
      text: '',
      change: (_text, html) => {
        setValues({
          content: html
        })
      }
    },
    label: t('exampleDemo.description')
  }
])

const rules = reactive({
  title: [required()],
  description: [required()],
  thumbnail: [required()],
  importance: [required()],
  display_time: [required()],
  content: [required()]
})

const submit = async () => {
  const elForm = await getElFormExpose()
  const valid = await elForm?.validate().catch((err) => {
    console.log(err)
  })
  if (valid) {
    const formData = await getFormData()
    return formData
  }
}

watch(
  () => props.currentRow,
  (currentRow) => {
    if (!currentRow) return
    setValues(currentRow)
    setSchema([
      {
        field: 'content',
        path: 'componentProps.defaultHtml',
        value: currentRow.content
      }
    ])
  },
  {
    deep: true,
    immediate: true
  }
)

/** 每隔5秒同步一次 */
async function syncromize() {
  const formData = await submit()
  if (formData) {
    updateArticleApi(formData)
  }
}

defineExpose({
  submit
})
</script>

<template>
  <Form :rules="rules" @register="formRegister" :schema="schema" labelPosition="top" />
</template>
