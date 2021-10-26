import Axios, { Method, ResponseType, AxiosResponse } from "axios";

interface axiosData {
  url: string
  method: Method
  headers?: any
  json: boolean
  contentType?: string
  data?: any
  params?: any
  timeout?: number
  responseType?: ResponseType
}

const axios = Axios.create({
  baseURL: './',
  timeout: 20000,
})

// 允许携带cookie
axios.defaults.withCredentials = true

// 请求头信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 默认使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    if (sessionStorage.getItem("accessToken")) {
      config.headers.Authorization = `${sessionStorage.getItem("accessToken")}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data) {
      const code = err.response.status
      const msg = err.response.data.message
    } else {
    }
    return Promise.reject(err)
  }
)

/** *
 * axios({url,method,content,params,datas})
 *
 * @param {string}  url，(必填)
 * @param {string}  method,默认post
 * @param {boolean} json, content-type类型，(必填)
 * @param {object}  params
 * @param {object}  datas  //token在datas中
 *
 */

export default function requestAnimationFrame(arr: axiosData) {
  return new Promise<any>((resolve, reject) => {
    axios({
      ...arr
    }).then((response: AxiosResponse<any>) => {
      /**
       * response格式
       *
       * {
        data:{},
        status:200,
        statusText:'OK',//从服务器返回的http状态文本
        headers: {},//响应头信息
        config: {} //`config`是在请求的时候的一些配置信息
      }
      */

      const responseStatus = `${response.status}`

      if (responseStatus.charAt(0) === '2') {
        if (response.data.code === '1' || response.data.code === 'err_9999') {
          reject(response.data)
          return
        }
        resolve(response.data)
      } else {
        reject(response.data)
      }
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}
