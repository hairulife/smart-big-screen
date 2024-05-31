<template>
  <div class="module">
    <TableComp :columns="columns" :dataSource="dataSource">
      <template #action>
        <ElButton class="action-btn" type="warning" size="mini">试听</ElButton>
        <ElButton class="action-btn" type="success" size="mini">全厂广播</ElButton>
      </template>
    </TableComp>
  </div>
</template>

<script setup>
import TableComp from '@/views/cockpit/components/TableComp.vue'
import { ElButton } from 'element-plus'
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
    title: '区域',
    align: 'center',
    dataIndex: 'val1'
  },
  {
    title: '操作',
    align: 'center',
    width: 120,
    customRender: 'action'
  }
]
const dataSource = [
  {
    val1: '区域1'
  },
  {
    val1: '区域2'
  },
  {
    val1: '区域3'
  },
  {
    val1: '区域4'
  },
  {
    val1: '区域5'
  },
  {
    val1: '区域6'
  },
  {
    val1: '区域7'
  },
  {
    val1: '区域8'
  },
  {
    val1: '区域9'
  },
  {
    val1: '区域10'
  }
]
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
}
</style>
