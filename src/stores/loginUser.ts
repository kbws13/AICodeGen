import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LoginUserVO } from '@/api/models/response/user/LoginUserVO'
import { UserService } from '@/api/services/UserService'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<LoginUserVO>({
    name: '未登录',
  })

  async function getLoginUser() {
    const res = await UserService.getLoginUser()
    console.log(res)
    loginUser.value = res
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, getLoginUser, setLoginUser }
})
