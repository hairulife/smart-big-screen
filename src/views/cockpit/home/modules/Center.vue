<template>
  <div class="module">
    <div class="bg"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.module {
  width: 100%;
  height: 100%;
  position: relative;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('@/views/cockpit/images/home5.jpg') no-repeat center center;
    background-size: cover;
    z-index: -1;
  }
}
</style>
