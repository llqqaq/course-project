import request from '@/utils/request'
import qs from 'qs'

// 获取首页轮播图
export const getAllAds = () => {
  return request({
    method: 'GET',
    url: '/api/getAllAd'
  })
}

// 获取首页课程列表
export const getQueryCourse = params => {
  return request({
    method: 'post',
    params: qs.stringify(params),
    url: '/api/getQueryCourse'
  })
}
