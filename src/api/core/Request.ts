import axios from 'axios'
import { message } from 'ant-design-vue'

const contentTypeForm = 'application/x-www-form-urlencoded;charset=UTF-8'
const contentTypeJson = 'application/json'
const instance = axios.create({
  withCredentials: true,
  baseURL: '/api',
  timeout: 10 * 1000,
})

type Api = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body: any
  dataType: 'form' | 'json' | 'url'
  uploadProgressCallback?: Function
}

//请求前拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  () => {
    message.error('请求发送失败')
    return Promise.reject('请求发送失败')
  },
)

//请求后拦截器
instance.interceptors.response.use(
  (response) => {
    const { responseType } = response.config
    const responseData = response.data
    if (responseType == 'arraybuffer' || responseType == 'blob') {
      return responseData
    }
    // 正常请求
    if (responseData.code == 0) {
      return responseData.data
    } else if (responseData.code == 40000) {
      message.error(responseData.message)
    } else if (responseData.code == 40100) {
      if (
        !responseData.request.responseURL.include('user/get/login') &&
        !window.location.pathname.includes('user/login')
      ) {
        message.warning('请先登录')
        window.location.href = `/user/login?redirect=${window.location.href}`
      }
    }
    return Promise.reject({ showError: false })
  },
  function (error) {
    return Promise.reject(error)
  },
)
