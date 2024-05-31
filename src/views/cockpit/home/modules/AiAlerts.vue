<template>
  <div class="module">
    <div class="top">
      <ElDatePicker
        v-model="dates"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="ai-image">
          <ElImage :src="item.img" alt="告警图片" :preview-src-list="[item.img]" fit="cover" />
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="info">{{ item.code }}</div>
        <div class="info">{{ item.name }}</div>
        <div class="info">{{ item.location }}</div>
        <div class="info">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElDatePicker, ElImage } from 'element-plus'
import { onMounted, ref } from 'vue'

const dates = ref([new Date(), new Date()])

let list = ref([])

onMounted(async () => {
  const imageModule = await import('@/views/cockpit/images/home4.jpg')
  list.value = [
    {
      img: imageModule.default,
      title: '未佩戴安全帽',
      code: '18FX',
      name: '王明强',
      location: '1号楼',
      time: '2021-09-01 10:00'
    },
    {
      img: imageModule.default,
      title: '未佩戴安全帽',
      code: '18FX',
      name: '王明强',
      location: '1号楼',
      time: '2021-09-01 10:00'
    }
  ]
})
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  .top {
    height: 36px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .list {
    height: calc(100% - 46px);
    overflow: auto;
    .item {
      height: 110px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 5px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      > div {
        border: 1px solid #69abfc;
        display: flex;
        align-items: center;
        padding: 0 10px;
      }

      .ai-image {
        grid-row: 1 / 4;
        grid-column: 1 / 2;
        padding: 0;
        .el-image {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        grid-row: 1 / 2;
        grid-column: 2 / 4;
        color: #bad2ff;
        font-size: 16px;
      }
    }
  }
}
</style>
