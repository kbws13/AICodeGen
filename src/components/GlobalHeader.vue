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
          <div v-if="loginUserStore.loginUser.id">
            <a-dropdown>
              <a-space>
                <a-avatar :src="loginUserStore.loginUser.avatar" />
                {{ loginUserStore.loginUser.name ?? '无名' }}
              </a-space>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="logout">
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, h, ref } from 'vue'
import type { MenuProps } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import { useLoginUserStore } from '@/stores/loginUser'
import { UserService } from '@/api/services/UserService'
import { LogoutOutlined } from '@ant-design/icons-vue'

const loginUserStore = useLoginUserStore()
const router = useRouter()
// 当前选中
const selectedKeys = ref<string[]>(['/'])
// 监听路由变化
router.afterEach((to) => {
  selectedKeys.value = [to.path]
})

const originItems = [
  {
    key: '/',
    label: '首页',
    title: '首页',
  },
  {
    key: '/admin/userManage',
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: '/admin/appManage',
    label: '应用管理',
    title: '应用管理',
  },
  {
    key: 'author',
    label: h('a', { href: 'https://github.com/kbws13' }, '空白无上'),
    title: '空白无上',
  },
]

// 过滤菜单项
const filterMenus = (menus = [] as MenuProps['items']) => {
  return menus?.filter((menu) => {
    const menuKey = menu?.key as string
    if (menuKey?.startsWith('/admin')) {
      const loginUser = loginUserStore.loginUser
      if (!loginUser || loginUser.role !== 'admin') {
        return false
      }
    }
    return true
  })
}

// 展示在菜单的路由数组
const menuItems = computed<MenuProps['items']>(() => filterMenus(originItems))

const handleMenuClick: MenuProps['onClick'] = (e) => {
  const key = e.key as string
  selectedKeys.value = [key]
  // 跳转对应页面
  if (key.startsWith('/')) {
    router.push(key)
  }
}

const logout = async () => {
  const res = await UserService.logout()
  if (res) {
    loginUserStore.setLoginUser({ name: '未登录' })
    message.success('退出登录成功')
    await router.push('/user/login')
  } else {
    message.error('退出登录失败')
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
