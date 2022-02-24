import request from './request'

export const subject = async () => {
  return request({ url: 'subject/list', method: 'GET' })
}
