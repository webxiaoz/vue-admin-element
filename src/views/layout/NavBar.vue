<template>
  <div class="NavBar">
    <User class="fr mr10"></User>
  </div>
</template>

<script>
import User from "@/views/layout/components/User";

export default {
  name: "NavBar",
  data(){
    return{

    }
  },
  components:{User}
}
</script>

<style scoped lang="scss">
.NavBar{
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
</style>
