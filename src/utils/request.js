import axios from 'axios'

// url: '/webview/user/saveAvatar?token=123&avatar=2'

const request = axios.create({
  baseURL: 'https://www.fastmock.site/mock/4b789cb409ccc39a50bb33c009b70906/test'
})

export default request
