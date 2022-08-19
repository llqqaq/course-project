<template>
  <div class='course'>
    <course-header></course-header>
    <course-content></course-content>
    <!-- tabbar -->
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import CourseHeader from './components/CourseHeader'
import CourseContent from './components/CourseContent'
import LayoutFooter from '@/components/LayoutFooter'
export default {
  name: 'course',
  data () {
    return {

    }
  },
  components: {
    CourseHeader,
    CourseContent,
    LayoutFooter
  }
}
</script>
<style lang='less' scoped>
</style>
