<template>
  <div class="regional-positioning">
    <div class="top">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10.45 15.5q.625.625 1.575.588T13.4 15.4l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.65.45-.712 1.363t.562 1.537M5.1 20q-.55 0-1.012-.238t-.738-.712q-.65-1.175-1-2.437T2 14q0-2.075.788-3.9t2.137-3.175T8.1 4.788T12 4q2.05 0 3.85.775T19 6.888t2.15 3.125t.825 3.837q.025 1.375-.312 2.688t-1.038 2.512q-.275.475-.737.713T18.874 20z"
        />
      </svg>
      <span>今日累计次数：</span>
      <span>
        <span>10</span>
        <span>次</span>
      </span>
    </div>
    <div class="table">
      <TableComp :columns="columns" :dataSource="dataSource" />
    </div>
  </div>
</template>

<script setup>
import TableComp from '@/views/cockpit/components/TableComp.vue'
const columns = [
  {
    title: '序号',
    align: 'center',
    width: 80,
    customRender(text, index) {
      return index + 1
    }
  },
  {
    title: '卡口点设备',
    align: 'center',
    width: 200,
    dataIndex: 'val1'
  },
  {
    title: '次数',
    align: 'center',
    dataIndex: 'val2'
  }
]
const dataSource = [
  {
    val1: '卡口1',
    val2: 10
  },
  {
    val1: '卡口2',
    val2: 20
  },
  {
    val1: '卡口3',
    val2: 30
  },
  {
    val1: '卡口4',
    val2: 40
  },
  {
    val1: '卡口5',
    val2: 50
  }
]
</script>

<style lang="scss" scoped>
.regional-positioning {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .top {
    height: 50px;
    background: url('@/views/cockpit/images/home1.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 50px;
    margin-bottom: 10px;
    svg {
      width: 30px;
      height: 30px;
      color: #38edfd;
    }
  }
  .table {
    height: calc(100% - 60px);
  }
}
</style>
