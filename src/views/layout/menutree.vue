<template>
  <fragment>
    <template v-for="route in routeList">
      <el-menu-item v-if="hasOneShowingChild(route.children,route)" :key="route.path" :index="route.path">
<!--        <i :class="route.meta.icon"></i>-->
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
      <el-submenu v-else :index="route.path">
        <template slot="title" v-if="onlyOneChild.meta">
          <!--          <i :class="route.meta.icon"></i>-->
          <span slot="title">{{ route.meta.title }}</span>
        </template>
        <MenuTree :routeList="route.children"></MenuTree>
      </el-submenu>
    </template>
  </fragment>
</template>

<script>
  export default {
    name: 'MenuTree',
    data(){
      this.onlyOneChild = null;
      return{
        onlyOneChild:{}
      }
    },
    props:{
      routeList:{
        type: Array,
        default: function () {
          return [];
        },
        required: false
        }
    },
    computed:{

    },
    methods:{
      hasOneShowingChild(children = [], parent) {
        const showingChildren = children.filter(item => {
          if (item.hidden) {
            return false
          } else {
            // Temp set(will be used if only has one showing child)
            this.onlyOneChild = item
            return true
          }
        })
        // When there is only one child router, the child router is displayed by default
        if (showingChildren.length === 1) {
          return true
        }
        // Show parent if there are no child router to display
        if (showingChildren.length === 0) {
          this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
          return true
        }
        return false
      },
      // resolvePath(routePath) {
      //   if (isExternal(routePath)) {
      //     return routePath
      //   }
      //   if (isExternal(this.basePath)) {
      //     return this.basePath
      //   }
      //   return path.resolve(this.basePath, routePath)
      // }
    }
  }
</script>
