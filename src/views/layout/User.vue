<template>
  <div class="wrap">
    <el-dropdown>
  <span class="el-dropdown-link">
    <el-avatar :size="20" :src="circleUrl" class="avatar-user"></el-avatar>
    <span class="role-name">超级管理员</span>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人中心</el-dropdown-item>
        <el-dropdown-item command="b">设置中心</el-dropdown-item>
        <el-dropdown-item command="c">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{
      circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  }
}
</script>

<style scoped>
.avatar-user{
  vertical-align: middle;
  margin-right: 10px;
}
.role-name{
  font-weight: bold;
  color: #010101;
}
</style>