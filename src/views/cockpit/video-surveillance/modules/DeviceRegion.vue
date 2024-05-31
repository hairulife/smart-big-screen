<template>
  <div class="module">
    <div class="top">
      <ElInput v-model="value"> </ElInput>
      <ElButton type="primary">搜索</ElButton>
    </div>
    <div class="table">
      <TableComp :columns="columns" :dataSource="dataSource" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TableComp from '@/views/cockpit/components/TableComp.vue'
import { ElInput, ElButton } from 'element-plus'
let value = ref('')
const columns = [
  {
    title: '设备名称',
    dataIndex: 'deviceName'
  },
  {
    title: '设备类型',
    dataIndex: 'deviceType'
  },
  {
    title: '设备状态',
    dataIndex: 'deviceStatus'
  },
  {
    title: '设备位置',
    dataIndex: 'deviceLocation'
  },
  {
    title: '设备区域',
    dataIndex: 'deviceRegion'
  }
]
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  .top {
    height: 36px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .table {
    height: calc(100% - 46px);
  }
}
</style>
