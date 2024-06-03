<template>
  <div class="environment-card">
    <div class="title">{{ props.item.title }}</div>
    <div class="content">
      <slot :name="props.item.slot" :item="props.item"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
  slot: String
})
</script>

<style lang="scss" scoped>
.environment-card {
  width: 100%;
  height: 100%;
  .title {
    font-size: 18px;
    height: 36px;
    line-height: 36px;
    font-weight: bold;
    background-color: rgba(9, 62, 177, 0.8);
    padding: 0 15px;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: #588cec;
      left: 0;
      top: 0;
    }
  }
  .content {
    height: calc(100% - 36px);
    padding: 30px;
  }
}
</style>
