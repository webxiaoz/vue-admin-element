<template>
  <div class="app-wrap">
    <SideBar class="sidebar-container"/>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <NavBar />
      </div>
      <AppMain/>
    </div>
  </div>
</template>

<script>
import Routes from '@/router'
import SideBar from '@/views/layout/SideBar'
import NavBar from "@/views/layout/NavBar";
import AppMain from "@/views/layout/AppMain";
export default {
  name: "Layout",
  data() {
    return {
      fixedHeader: true
    }
  },
  components:{NavBar,SideBar,AppMain},
  computed: {
    /*** @Description: 菜单联动（激活时候对应值）*/
    menuActive() {
      return this.$route.meta.title;
    },
    /*** @Description: 过滤不符合条件的菜单*/
    menuList() {
      let routers = Routes.options.routes;
      routers = routers.filter(route => !route.hidden)
      return routers
    },

  },
  methods:{

  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.app-wrap{
  width: 100%;
  height: 100vh;
  //position: relative;
  display: flex;
  margin: 0 auto;
  .sidebar-container{
    width: 200px;
    height: 100%;
  }
  .main-container{
    flex: 1;
  }
  .fixed-header{
    //width: calc(100% - 200px);
    //position: fixed;
    //top: 0;
    //right: 0;
    z-index: 9;
  }
}
</style>
