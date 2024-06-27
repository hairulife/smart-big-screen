<template>
  <div class="cockpit-card">
    <div class="bg"></div>
    <div class="cockpit-card-wrapper">
      <div class="cockpit-card-header" v-if="props.title !== ''">
        <div class="cockpit-card-header-title">{{ props.title }}</div>
        <div class="cockpit-card-header-tools">
          <slot name="tools" />
        </div>
      </div>
      <div
        class="cockpit-card-body"
        :class="{
          full: props.title === ''
        }"
      >
        <slot />
      </div>
      <!-- 加载动画 -->
      <div class="loading-wrapper" v-if="props.loading">
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
        <div class="loading"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.cockpit-card {
  width: 100%;
  overflow: auto;
  position: relative;
  z-index: 1;
  &.fullscreen {
    left: 0;
    top: 0;
    width: calc(100%);
    height: calc(100%);
    position: fixed;
    z-index: 0;
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z-index-bg, 0);

    border: 1px solid #294eaf;
    background-color: #fff;
    border-image: radial-gradient(#2961ca 70%, #0a267a 130%) 5;
    background: linear-gradient(to bottom, hsla(222, 100%, 23%, 0.5) 10%, rgba(0, 0, 0, 0.5) 60%);
  }
  .cockpit-card-wrapper {
    height: 100%;
    position: relative;
  }

  &-header {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    position: relative;
    display: flex;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #2457bd00, #bebdbd94, #2457bd00) 1 10;

    &-title {
      font-size: 16px;
      line-height: 1;
      color: #fff;
      padding-left: 35px;
      text-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
      letter-spacing: 1px;
    }
    &::after {
      content: '';
      display: block;
      width: 101px;
      height: 3px;
      background: url('@/views/cockpit/images/card-title-end-icon.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 18px;
      background: url('@/views/cockpit/images/card-title-icon.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }

    &-tools {
      display: flex;
      align-items: center;
      transform: translateY(-3px);
    }
  }
  &-body {
    height: calc(100% - 45px);
    position: relative;

    &.full {
      height: 100%;
    }
  }

  .loading-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    z-index: 998;
  }

  .loading {
    width: 4px;
    height: 6px;
    background: #4bccff;
    float: left;
    margin: 0 3px;
    animation: loading linear 1s infinite;
    -webkit-animation: loading linear 1s infinite;
  }

  .loading:nth-child(1) {
    animation-delay: 0s;
  }

  .loading:nth-child(2) {
    animation-delay: 0.15s;
  }

  .loading:nth-child(3) {
    animation-delay: 0.3s;
  }

  .loading:nth-child(4) {
    animation-delay: 0.45s;
  }

  .loading:nth-child(5) {
    animation-delay: 0.6s;
  }

  @keyframes loading {
    0%,
    60%,
    100% {
      transform: scale(1);
    }

    30% {
      transform: scaleY(3);
    }
  }

  @-webkit-keyframes loading {
    0%,
    60%,
    100% {
      transform: scale(1);
    }

    30% {
      transform: scaleY(3);
    }
  }
}
</style>
