import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import UserLoginPage from '@/views/user/UserLoginPage.vue'
import UserRegisterPage from '@/views/user/UserRegisterPage.vue'
import UserManagePage from '@/views/admin/UserManagePage.vue'
import AppManagePage from '@/views/admin/AppManagePage.vue'
import AppChatPage from '@/views/app/AppChatPage.vue'
import AppEditPage from '@/views/app/AppEditPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: UserLoginPage,
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: UserRegisterPage,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
    },
    {
      path: '/admin/appManage',
      name: '应用管理',
      component: AppManagePage,
    },
    // {
    //   path: '/admin/chatManage',
    //   name: '对话管理',
    //   component: ChatManagePage,
    // },
    {
      path: '/app/chat/:id',
      name: '应用对话',
      component: AppChatPage,
    },
    {
      path: '/app/edit/:id',
      name: '编辑应用',
      component: AppEditPage,
    },
  ],
})

export default router
