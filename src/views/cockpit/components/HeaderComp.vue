<template>
  <div class="header-comp">
    <FlowbiteCaretLeftSolid @click="changePage(-1)" :disabled="currentPage <= 1" />
    <div class="header-center">
      <div class="title" style="order: 3">{{ title }}</div>
      <div
        class="menu-item"
        v-for="(route, index) in comRouters"
        :key="route ? route.path : '' + index"
        :style="{
          order: index
        }"
        :class="{ active: route && route.path === currentRoute.path }"
        @click="jumpTo(route)"
      >
        <div v-if="route" class="bg" :class="{ 'scale-x': index >= 3 }"></div>
        <span class="route-title">{{ route ? route.meta.title : '' }}</span>
      </div>
    </div>
    <FlowbiteCaretLeftSolid
      right
      @click="changePage(1)"
      :disabled="currentPage * 6 - routes.length > 0"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import FlowbiteCaretLeftSolid from './FlowbiteCaretLeftSolid.vue'
import { ElMessage } from 'element-plus'
const router = useRouter()
const routes = ref(router.getRoutes().find((r) => r.path === '/') || {})
routes.value = routes.value.children || []
routes.value = routes.value.find((r) => r.path === '/cockpit') || {}
routes.value = routes.value.children || []
const currentRoute = router.currentRoute
routes.value = routes.value.sort((a, b) => a.meta.order - b.meta.order)

const title = import.meta.env.VITE_APP_TITLE
const currentPage = computed(() => {
  let currentHash = router.currentRoute.value.hash
  return parseInt(currentHash.replace('#', '')) || 1
})

const comRouters = computed(() => {
  let startIndex = (currentPage.value - 1) * 6
  let _routes = routes.value.slice(startIndex, startIndex + 6)
  return [..._routes, ...Array(6 - _routes.length).fill(null)]
})

const changePage = (step) => {
  router.push({ hash: '#' + (currentPage.value + step) })
}

const jumpTo = (route) => {
  if (!route) return
  if (route.meta.close) {
    ElMessage({
      message: '暂未开放',
      type: 'warning',
      appendTo: document.querySelector('.container')
    })
    return
  }
  router.push({ path: route.path, hash: '#' + currentPage.value })
}
</script>

<style lang="scss" scoped>
.header-comp {
  width: 1920px;
  height: 136px;
  display: flex;
  justify-content: center;
  position: absolute;
  background-size: 100% 100%;
  z-index: 10;

  .header-center {
    height: 100%;
    display: grid;
    grid-template-columns: 150px 150px 150px 840px 150px 150px 150px;
    justify-items: center;
    align-items: center;
    transform: translateY(-10px);
    .title {
      cursor: pointer;
      font-size: 30px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      background: linear-gradient(to bottom, #ffff 50%, #04def6);
      -webkit-background-clip: text;
      color: transparent;
      text-shadow:
        15px 15px 15px #04def6,
        0px 0px 2px #fff;
    }
    .menu-item {
      width: 150px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      white-space: nowrap;

      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('@/assets/images/menu-btn.png') no-repeat;
        background-size: 100% 100%;
      }
      .route-title {
        background-image: -webkit-linear-gradient(#fff 50%, #a9d5ff 100%);
        -webkit-background-clip: text;
        color: transparent;
        z-index: 1;
      }
      &.active {
        .bg {
          background: url('@/assets/images/menu-btn-active.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      .scale-x {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
