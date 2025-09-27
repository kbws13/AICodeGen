<template>
  <a-layout-header class="header">
    <a-row :wrap="false">
      <a-col flex="200px">
        <RouterLink to="/">
          <div class="header-left">
            <img src="@/assets/logo.svg" alt="Logo" class="logo" />
            <h1 class="site-title">AI应用生成</h1>
          </div>
        </RouterLink>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selected-keys="selectedKeys"
          mode="horizontal"
          :items="menuItems"
          @click="handleMenuClick"
        />
      </a-col>
      <a-col>
        <div class="user-login-status">
          <a-button type="primary">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { h, ref } from 'vue'
import type { MenuProps } from 'ant-design-vue'

const router = useRouter()
// 当前选中
const selectedKeys = ref<string[]>(['/'])
// 监听路由变化
router.afterEach((to) => {
  selectedKeys.value = [to.path]
})

// 菜单配置
const menuItems = ref([
  {
    key: '/',
    label: '首页',
    title: '首页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: 'author',
    label: h('a', { href: 'https://github.com/kbws13' }, '空白无上'),
    title: '空白无上',
  },
])

const handleMenuClick: MenuProps['onClick'] = (e) => {
  const key = e.key as string
  selectedKeys.value = [key]
  // 跳转对应页面
  if (key.startsWith('/')) {
    router.push(key)
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  padding: 0 24px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  height: 48px;
  width: 48px;
}

.ant-menu-horizontal {
  border-bottom: none !important;
}
</style>
