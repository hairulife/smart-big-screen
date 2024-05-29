<template>
  <div class="container">
    <HeaderComp />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderComp from './components/HeaderComp.vue'

const setAppScale = () => {
  const currentWdith = window.innerWidth
  const currentHeight = window.innerHeight
  let wp = currentWdith / 1920
  let hp = currentHeight / 1080
  document.querySelector('.container').style.transform = `scale(${wp},${hp})`
}

onMounted(() => {
  setAppScale()
  window.addEventListener('resize', setAppScale)
})
</script>

<style lang="scss" scoped>
.container {
  width: 1920px;
  height: 1080px;
  background: url('@/assets/images/container-border.png') no-repeat;
  color: #fff;
  background-color: #0a2473;
  background-size: 1920px 1080px;
  transform-origin: top left;
}
</style>
