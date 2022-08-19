<template>
  <div class='layout-footer'>
    <van-tabbar route>
        <van-tabbar-item to="/">
            <span>选课</span>
            <template #icon="props">
                <i :class="['iconfont', props.active ? 'icon-kecheng' : 'icon-kecheng']"></i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/learn" icon="desktop-o">学习</van-tabbar-item>
        <van-tabbar-item to="/user" icon="user-circle-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-footer',
  data () {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>
<style lang='less' scoped>
.van-hairline--top-bottom {
    height: 110px;
}
.van-tabbar-item .van-tabbar-item__icon .iconfont{
    display: inline-block;
    font-size: 45px;
}
</style>
