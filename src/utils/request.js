import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { gettimekey } from '@/utils/auth'
import router from '@/router'
const timeout = 3600
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(config => {
  if (store.getters.token) {
    if (checktimeout()) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('token超时'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const { success, message, data } = response.data

  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, error => {
  Message.error(error.message)
  return Promise.reject(error)
})

function checktimeout() {
  var currenttime = Date.now()
  var timenow = gettimekey()
  return (currenttime - timenow) / 1000 > timeout
}
export default service
