<template>
  <div class="module">
    <ElImage class="image" :src="imgModule" fit="cover" :preview-src-list="[imgModule]" />
  </div>
</template>

<script setup>
import { ElImage } from 'element-plus'
import imgModule from '@/views/cockpit/images/home3.jpg'
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
