<template>
  <div class="NavBar">
    <User class="fr mr10"></User>
    <Breadcrumb class="clearfix Breadcrumb"></Breadcrumb>
  </div>
</template>

<script>
import User from "@/views/layout/components/User";
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: "NavBar",
  data(){
    return{

    }
  },
  components:{User,Breadcrumb}
}
</script>

<style scoped lang="scss">
.NavBar{
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
<style>
.el-breadcrumb{
  line-height: 50px !important;
  margin-left: 20px;
}
</style>
