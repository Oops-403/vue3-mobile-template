<script setup lang="ts">
import { RouterView } from "vue-router"

</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  user-select: none;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  text-align: center;
  position: relative;
  /* Non-prefixed version, currentlynot supported by any browser */
}
</style>
