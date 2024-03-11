<script setup lang="ts">
import { provide, computed, watch, onMounted } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { ComponentSize, ElConfigProvider } from 'element-plus'
import { useLocaleStore } from '@/store/modules/locale'
import { useWindowSize } from '@vueuse/core'
import { useAppStore } from '@/store/modules/app'
import { setCssVar } from '@/utils'
import { useDesign } from '@/hooks/web/useDesign'
import { useUserStore, useUserStoreWithOut } from '@/store/modules/user'
import API from '@/api'

const { variables } = useDesign()

const appStore = useAppStore()

const props = defineProps({
  size: propTypes.oneOf<ComponentSize>(['default', 'small', 'large']).def('default')
})

provide('configGlobal', props)

// 初始化所有主题色
onMounted(() => {
  appStore.setCssVarTheme()
})

const { width } = useWindowSize()

const userStore = useUserStoreWithOut()

// 监听窗口变化
watch(
  () => width.value,
  (width: number) => {
    if (width < 768) {
      !appStore.getMobile ? appStore.setMobile(true) : undefined
      setCssVar('--left-menu-min-width', '0')
      appStore.setCollapse(true)
      appStore.getLayout !== 'classic' ? appStore.setLayout('classic') : undefined
    } else {
      appStore.getMobile ? appStore.setMobile(false) : undefined
      setCssVar('--left-menu-min-width', '64px')
    }
  },
  {
    immediate: true
  }
)

watch(
  () => userStore.getToken,
  (token: string) => {
    if (token) {
      runRenewalToken()
    } else {
      stopRenewalToken()
    }
  }
)
let renewalTimer: null | number = null

// 停止 Token 续约
const stopRenewalToken = (): void => {
  if (typeof renewalTimer === 'number') {
    window.clearTimeout(renewalTimer)
  }
}

function refreshToken() {
  API.login.refreshToken().then((res) => {
    const { access_token, expires_in } = res.result
    userStore.setToken(access_token, expires_in)
  })
}

refreshToken()
// 自动续约 Token
const runRenewalToken = (): void => {
  stopRenewalToken()
  const userStore = useUserStore()
  const countdown = userStore.getTokenCountdown
  const seconds = countdown - 10
  console.info(`Token 自动续约正在工作，Token 将在 ${seconds}s 后自动更新！`)
  renewalTimer = window.setTimeout(() => {
    refreshToken()
  }, seconds * 1000)
}

// 多语言相关
const localeStore = useLocaleStore()

const currentLocale = computed(() => localeStore.currentLocale)
</script>

<template>
  <ElConfigProvider
    :namespace="variables.elNamespace"
    :locale="currentLocale.elLocale"
    :message="{ max: 1 }"
    :size="size"
  >
    <slot></slot>
  </ElConfigProvider>
</template>
