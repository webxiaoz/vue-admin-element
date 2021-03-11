<template>
  <div class="wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
          v-for="(item,index) in levelList"
          :key="index"
          :to="{ path: item.path }">
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {}
  },
  computed: {
    levelList() {
      return this.$route.matched.filter(item => item.meta.title);
    }
  },
  mounted() {
    console.log(this.levelList)
  }
}
</script>

<style scoped>
span{
  color: rgba(0,0,0,.45);
  -webkit-transition: color .3s;
  transition: color .3s;
}
</style>