import axios from 'axios'
import store from '../store'

const request = axios.create({
  baseURL: '/'
})

const WHITE_LIST = [
  '/music/getRecommendMusic',
  '/music/getGroupMusic',
  '/user/getUserDetail'
]

request.interceptors.request.use(config => {
  if(WHITE_LIST.includes(config.url)){
    return config
  }
  if(!store.user.isLogin){
    location.href = '//music.163.com/m/login'
  }
  return config
})

export default request