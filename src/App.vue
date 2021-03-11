<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/index.css";
@import "assets/theme/index.css";
@import "assets/css/transition.scss";
#app {
  padding: 0;
  margin: 0;
}
</style>
