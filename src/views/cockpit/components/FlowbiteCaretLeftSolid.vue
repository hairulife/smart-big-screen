<template>
  <svg
    :class="{
      right: props.right,
      disabled: props.disabled
    }"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 255)" />
        <stop offset="40%" style="stop-color: rgb(0, 117, 249)" />
        <stop offset="100%" style="stop-color: rgb(0, 117, 249)" />
      </linearGradient>
      <linearGradient id="disabled" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 255)" />
        <stop offset="40%" style="stop-color: rgb(13, 61, 117)" />
        <stop offset="100%" style="stop-color: rgb(13, 61, 117)" />
      </linearGradient>
      <linearGradient id="hover" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 255)" />
        <stop offset="40%" style="stop-color: rgb(7, 236, 254)" />
        <stop offset="100%" style="stop-color: rgb(7, 236, 254)" />
      </linearGradient>
    </defs>
    <path
      fill-rule="evenodd"
      d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088z"
      clip-rule="evenodd"
    />
    <!-- 从上到下渐变 -->
  </svg>
</template>

<script setup>
const props = defineProps({
  right: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
svg {
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scaleX(0.7) translateY(-10px);
  left: 23px;
  fill: url(#grad);
  &:hover {
    fill: url(#hover);
  }
  &.disabled {
    fill: url(#disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
  &.right {
    left: auto;
    right: 23px;
    transform: translateY(-50%) scaleX(-1) scaleX(0.7);
  }
}
</style>
