import ajax from 'uni-ajax'

const instance = ajax.create({
  baseURL: 'https://d.vv.chat/api/'
})

instance.interceptors.request.use(
  config => {
    console.log('请求前拦截', config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    console.log('响应后拦截', response)
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
