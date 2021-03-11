<template>
<!--  <el-scrollbar class="scrollbar-wrapper">-->
    <el-menu
        :default-active="menuActive"
        class="el-menu-vertical-demo"
        background-color="#001528"
        text-color="#8aa9cf"
        active-text-color="#fff"
        :style="asideWidth"
        :isCollapse="isCollapse"
        :collapse="isCollapse"
        @select="changeRoute"
    >
      <MenuTree :routeList="menuList"></MenuTree>
    </el-menu>
<!--  </el-scrollbar>-->
</template>

<script>
import Routes from "@/router";
import MenuTree from "@/views/layout/SideBar/SideBar";

export default {
  name: "index",
  data() {
    return {
      screenWidth: document.body.clientWidth, // 屏幕高度
      isCollapse: sessionStorage.getItem("isCollapse") === "true" ? true : false,
      asideWidth: sessionStorage.getItem("asideWidth") ? sessionStorage.getItem("asideWidth") : '200',
      iconStyle: sessionStorage.getItem("iconStyle") ? sessionStorage.getItem("iconStyle") : 'width:35px;height:35px;transition: all .4s ease;position: absolute;top:15px;',
      transitionStyle: 'transition: all .4s ease;',
      transitionName: 'slide-left',
      ctrIcon: sessionStorage.getItem("iconStyle") ? sessionStorage.getItem("iconStyle") : 'el-icon-s-fold',
      menuWidth: '',
      timer: null,
    }
  },
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
  components: {MenuTree,},
  methods: {
    /*** @Description: 菜单跳转*/
    changeRoute(index, indexPath) {
      console.log(index, indexPath);
      this.$router.push({name: index})
    },
    /*** @Description: 菜单折叠*/
    Collapse() {
      this.isCollapse = !this.isCollapse;
      this.$store.commit("setState", this.isCollapse);
      if (this.isCollapse) {
        this.asideWidth = '64px';
        this.ctrIcon = 'el-icon-s-unfold';
        sessionStorage.setItem("isCollapse", this.isCollapse);
        sessionStorage.setItem("asideWidth", this.asideWidth);
        sessionStorage.setItem("iconStyle", this.ctrIcon);
      } else {
        this.asideWidth = '200px';
        this.ctrIcon = 'el-icon-s-fold';
        // this.iconStyle = 'width:35px;height:35px;transition: all .4s ease;position: absolute;top:15px;';
        sessionStorage.setItem("isCollapse", this.isCollapse)
        sessionStorage.setItem("asideWidth", this.asideWidth)
        sessionStorage.setItem("iconStyle", this.ctrIcon)
      }
    },
    /*** @Description: 根据路径查菜单path*/
    findMenuPath(key) {
      let routers = Routes.options.routes;
      routers = routers.filter((route) => {
        console.log(route.redirect)
        return route.redirect === '/example'
        // console.log(route,'route',route.name)
      })
    },
  },
}
</script>

<style scoped>

</style>
