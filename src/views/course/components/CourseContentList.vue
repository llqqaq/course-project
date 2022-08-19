<template>
  <div class='course-list'>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
       <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item, index) in list" :key="index" >{{ item.title }}</van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getQueryCourse } from '@/services/course'
export default {
  name: 'course-list',
  data () {
    return {
      list: [],
      totalCount: 0,
      currentPage: 1,
      loading: false, // 是否正在加载
      finished: false, // 加载完毕
      isRefresh: false
    }
  },
  created () {
    this.first = true // list为[]，会自动触发一次loading
    this.loadList()
  },
  methods: {
    async loadList () {
      const { data } = await getQueryCourse({
        currentPage: 1,
        pageSize: 10
      })
      this.loading = false
      if (data.code === 0) {
        this.list.push(...data.data.list)
        this.totalCount = data.data.totalCount
      }
      console.log(this.list)
    },
    onLoad () {
      // 第一次 不要触发后面的逻辑
      if (this.first) {
        this.loading = false
        this.first = false
        return
      }
      if (this.currentPage * 10 >= this.totalCount) {
        this.loading = false
        this.finished = true
        return
      }
      this.currentPage++
      this.loadList()
    },
    async onRefresh () {
      this.currentPage = 1
      this.totalCount = 0
      this.finished = false
      const { data } = await getQueryCourse({
        currentPage: 1,
        pageSize: 10
      })
      if (data.code === 0) {
        this.totalCount = data.data.totalCount
        this.list = data.data.list
      }
      this.$toast('刷新成功')
      this.isRefresh = false
    }
  }
}
</script>
<style lang='less' scoped>
.course-list {
}
</style>
