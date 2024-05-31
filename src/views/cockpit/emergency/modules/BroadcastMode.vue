<template>
  <div class="module">
    <div class="icon"></div>
    <div class="content">
      <div class="item">应急广播</div>
      <div class="item">正常广播</div>
      <div class="item">人工广播</div>
      <div class="item">关闭广播</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  display: flex;
  gap: 10px;
  .icon {
    height: 100%;
    width: 150px;
    background: url('@/views/cockpit/images/emergency1.png') no-repeat center center;
    background-size: 150px 150px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: 10px;
    .item {
      height: 70px;
      width: calc(50% - 10px);
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      cursor: pointer;

      &:nth-child(1) {
        border-color: #f05f31;
        color: #f05f31;
        border-top-left-radius: 20px;

        &:hover {
          background: #f05f31;
          color: #fff;
        }
      }
      &:nth-child(2) {
        border-color: #19b393;
        color: #19b393;
        border-top-right-radius: 20px;

        &:hover {
          background: #19b393;
          color: #fff;
        }
      }
      &:nth-child(3) {
        border-color: #1890ff;
        color: #1890ff;
        border-bottom-left-radius: 20px;

        &:hover {
          background: #1890ff;
          color: #fff;
        }
      }
      &:nth-child(4) {
        border-color: #f59a23;
        color: #f59a23;
        border-bottom-right-radius: 20px;

        &:hover {
          background: #f59a23;
          color: #fff;
        }
      }
    }
  }
}
</style>
