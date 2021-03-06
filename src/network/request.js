import axios from 'axios'

export function request(config){
    //1创建实例
  const instance = axios.create({
    //baseURL: 'http://123.207.32.32:8000',
    baseURL: "找老师要",
    timeout: 5000
  })

  //2axios请求拦截器
  instance.interceptors.request.use(config => {
    return config
  },err => {
    // console.log(err)
  })

  //3响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  },err => {
    console.log(err);
  })

  //4发送网络请求
  return instance(config)
}
