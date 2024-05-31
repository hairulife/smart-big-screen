<template>
  <div class="container">
    <div class="bg-top-left"></div>
    <div class="bg-top-right"></div>
    <div class="bg-left"></div>
    <div class="bg-right"></div>
    <div class="bg-bottom-left"></div>
    <div class="bg-bottom-right"></div>
    <HeaderComp />
    <div class="container-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeaderComp from './HeaderComp.vue'

const width = 1920
const height = 1080

const setAppScale = () => {
  const currentWdith = window.innerWidth
  const currentHeight = window.innerHeight
  let wp = currentWdith / width
  let hp = currentHeight / height
  document.querySelector('.container').style.transform = `scale(${wp},${hp})`
}

onMounted(() => {
  document.querySelector('.container').style.width = `${width}px`
  document.querySelector('.container').style.height = `${height}px`

  setAppScale()
  window.addEventListener('resize', setAppScale)
})
</script>

<style lang="scss" scoped>
.container {
  color: #fff;
  background-color: #0a2473;
  background-size: 1920px 1090px;
  background-position: 0 -10px;
  transform-origin: top left;
  position: relative;

  .container-content {
    position: absolute;
    top: 102px;
    width: 100%;
    height: calc(100% - 102px);
    padding: 0 40px 45px;
  }

  .bg-top-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 960px;
    height: 136px;
    background: url('@/views/cockpit/images/header-bg.png') no-repeat;
    background-size: 100% 100%;
  }
  .bg-top-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 960px;
    height: 136px;
    background: url('@/views/cockpit/images/header-bg.png') no-repeat;
    background-size: 100% 100%;
    transform: scaleX(-1);
  }

  .bg-left {
    position: absolute;
    top: 136px;
    left: 0;
    width: 30px;
    height: 834px;
    background: url('@/views/cockpit/images/left-bg.png') no-repeat;
    background-size: 100% 100%;
  }
  .bg-right {
    position: absolute;
    top: 136px;
    right: 0;
    width: 30px;
    height: 834px;
    background: url('@/views/cockpit/images/right-bg.png') no-repeat;
    background-size: 100% 100%;
  }
  .bg-bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 960px;
    height: 110px;
    background: url('@/views/cockpit/images/bottom-bg.png') no-repeat;
    background-size: 100% 100%;
  }
  .bg-bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: scaleX(-1);
    width: 960px;
    height: 110px;
    background: url('@/views/cockpit/images/bottom-bg.png') no-repeat;
    background-size: 100% 100%;
  }
}
</style>
