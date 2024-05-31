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
    title: '序号',
    align: 'center',
    width: 50,
    customRender(text, index) {
      return index + 1
    }
  },
  {
    title: '姓名',
    align: 'center',
    dataIndex: 'val1'
  },
  {
    title: '单位',
    align: 'center',
    dataIndex: 'val2'
  },
  {
    title: '入出',
    align: 'center',
    dataIndex: 'val3',
    width: 50
  },
  {
    title: '时间',
    align: 'center',
    width: 140,
    dataIndex: 'val4'
  }
]
const dataSource = [
  {
    val1: '张三',
    val2: 'A单位',
    val3: '入',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '李四',
    val2: 'B单位',
    val3: '出',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '王五',
    val2: 'C单位',
    val3: '入',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '赵六',
    val2: 'D单位',
    val3: '出',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '张三',
    val2: 'A单位',
    val3: '入',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '李四',
    val2: 'B单位',
    val3: '出',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '王五',
    val2: 'C单位',
    val3: '入',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '赵六',
    val2: 'D单位',
    val3: '出',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '张三',
    val2: 'A单位',
    val3: '入',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '李四',
    val2: 'B单位',
    val3: '出',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '王五',
    val2: 'C单位',
    val3: '入',
    val4: '2021-09-01 08:00'
  },
  {
    val1: '赵六',
    val2: 'D单位',
    val3: '出',
    val4: '2021-09-01 08:00'
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
