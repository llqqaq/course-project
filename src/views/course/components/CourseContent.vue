<template>
  <div class='course-content'>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <img :src="item.url" />
      </van-swipe-item>
    </van-swipe>
    <!-- 列表 -->
    <course-list ></course-list>
  </div>
</template>

<script>
import { getAllAds } from '@/services/course'
import CourseList from './CourseContentList.vue'
export default {
  name: 'course-content',
  data () {
    return {
      list: []
    }
  },
  components: {
    CourseList
  },
  created () {
    this.loadAllAds()
  },
  methods: {
    async loadAllAds () {
      const { data } = await getAllAds()
      if (data.code === 0) {
        this.list = data.data.bannerList
      }
    }
  }
}
</script>
<style lang='less' scoped>
.my-swipe {
  // height: 300px;
  height: auto;
  width: 100%;
  .van-swipe-item {
    img {
       width: 100%;
    }
  }
}
.course-list {
  width: 100%;
  position: fixed;
  top: 436px;
  bottom: 110px;
  left: 0;
  right: 0;
  overflow-y: auto;

}
</style>
