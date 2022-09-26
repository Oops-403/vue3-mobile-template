<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'

const router = useRouter()

const startExam = () => {
  Toast('hello world')
  router.push('exam')
}

onMounted(() => {
})
</script>
<template>
  <div class="home">
    <p @click="startExam">go exam</p>
  </div>
</template>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/imgs/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
