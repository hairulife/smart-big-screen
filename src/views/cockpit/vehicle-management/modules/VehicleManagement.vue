<template>
  <div class="module">
    <div class="top">
      <div class="icon"></div>
      <div class="info">
        <div class="item" v-for="item in infos" :key="item.title">
          <div class="title">{{ item.title }}</div>
          <div class="value">{{ item.value }}</div>
        </div>
      </div>
    </div>
    <div class="table">
      <TableComp :columns="columns" :dataSource="dataSource" />
    </div>
  </div>
</template>

<script setup>
import TableComp from '@/views/cockpit/components/TableComp.vue'
const infos = [
  {
    title: '当前在场车辆',
    value: 10
  },
  {
    title: '今日累计在场车辆',
    value: 20
  }
]
const columns = [
  {
    title: '序号',
    align: 'center',
    width: 50,
    customRender(text, index) {
      return index + 1
    }
  },
  {
    title: '单位名称',
    align: 'center',
    width: 200,
    dataIndex: 'val1'
  },
  {
    title: '实时',
    align: 'center',
    dataIndex: 'val2'
  },
  {
    title: '累计',
    align: 'center',
    dataIndex: 'val3'
  }
]
const dataSource = [
  { val1: '单位1', val2: 10, val3: 20 },
  { val1: '单位2', val2: 20, val3: 30 },
  { val1: '单位3', val2: 20, val3: 30 },
  { val1: '单位4', val2: 20, val3: 30 },
  { val1: '单位5', val2: 20, val3: 30 }
]
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  .top {
    height: 60px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    .icon {
      width: 90px;
      height: 60px;
      background: url('@/views/cockpit/images/vehicle1.png') no-repeat center -20px;
      background-size: 90px 80px;
    }
    .info {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: url('@/views/cockpit/images/vehicle2.png') no-repeat center center;
      background-size: 100% 100%;
      padding: 0 40px;
      .item {
        .title {
          font-size: 14px;
          text-align: center;
          line-height: 1;
        }
        .value {
          line-height: 1;
          margin-top: 6px;
          text-align: center;
          font-size: 18px;
          color: #4feefc;
        }
      }
    }
  }
  .table {
    height: calc(100% - 70px);
  }
}
</style>
