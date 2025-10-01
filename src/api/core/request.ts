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
    console.log("responseData: ", responseData)
    if (responseData.code == 0) {
      return responseData.data
    } else if (responseData.code == 40000) {
      message.error(responseData.message)
    } else if (responseData.code == 40100) {
      if (!window.location.pathname.includes('user/login')) {
        message.warning('请先登录')
        window.location.href = `/user/login?redirect=${window.location.href}`
      }
      return {
        name: '未登录',
      }
    }
    return Promise.reject(responseData)
  },
  function (error) {
    return Promise.reject(error)
  },
)

const request = <T>(config: Api): Promise<T> => {
  let contentType = contentTypeForm
  const formData = new FormData() // 创建form对象
  for (const key in config.body) {
    formData.append(key, config.body[key] == undefined ? '' : config.body[key])
  }
  if (config.dataType != null && config.dataType == 'json') {
    contentType = contentTypeJson
  }
  // 如果是 GET 请求，将参数拼接到 URL 上
  if (config.method === 'GET' && config.body) {
    const queryString = new URLSearchParams(config.body).toString()
    config.url = `${config.url}?${queryString}`
  }
  // const token = VueCookies.get('token')

  const headers = {
    'Content-Type': contentType,
    'X-Requested-With': 'XMLHttpRequest',
    // "token": token
  }
  return instance.request({
    headers: headers,
    url: config.url,
    method: config.method,
    data: config.method === 'GET' ? undefined : config.dataType == 'json' ? config.body : formData,
    // withCredentials: true,
    onUploadProgress: (event) => {
      if (config.uploadProgressCallback) {
        config.uploadProgressCallback(event)
      }
    },
  })
}

export default request
