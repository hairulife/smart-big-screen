<template>
  <div class="header-comp">
    <div class="header-center">
      <div class="title" style="order: 3">安吉梅西智慧工地管理系统</div>
      <div
        class="menu-item"
        v-for="(item, index) in routes"
        :key="item.path"
        :style="{
          order: index
        }"
      >
        <div
          class="bg"
          :class="{
            bg1: index >= 3
          }"
        ></div>
        {{ item.meta.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
// 获取当前菜单
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = router.getRoutes()
const currentRoute = router.currentRoute
console.log(currentRoute, routes)
const currentPage = currentRoute.value.query.m || 1
</script>

<style lang="scss" scoped>
.header-comp {
  height: 148px;
  display: flex;
  justify-content: center;
  .header-center {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 850px 1fr 1fr 1fr;
    align-items: center;
    .title {
      font-size: 24px;
      color: #fff;
      text-align: center;
      transform: translateY(-20px);
    }
    .menu-item {
      width: 156px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('@/assets/images/menu-btn.png') no-repeat;
        z-index: -1;

        &:hover {
          background: url('@/assets/images/menu-btn-active.png') no-repeat;
        }
      }

      .bg1 {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
