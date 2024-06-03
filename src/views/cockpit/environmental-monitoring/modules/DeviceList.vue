<template>
  <div class="module">
    <div class="device-area" v-for="item in deviceList" :key="item.name">
      <div class="title">{{ item.name }}</div>
      <ul class="device-list">
        <li
          v-for="item1 in item.list"
          :key="item1.id"
          class="device-item"
          :class="{
            active: currentDevice == item1.id
          }"
        >
          <div>{{ item1.name }}</div>
          <div>{{ item1.status }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 当前设备
const currentDevice = ref(3)

const deviceList = [
  {
    name: '一号核岛',
    list: [
      {
        id: 1,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 2,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 3,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 4,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 5,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 6,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 7,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 8,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 9,
        name: '一号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 10,
        name: '一号核岛环境监测设备',
        status: '开启'
      }
    ]
  },
  {
    name: '二号核岛',
    list: [
      {
        id: 11,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 12,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 13,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 14,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 15,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 16,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 17,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 18,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 19,
        name: '二号核岛环境监测设备',
        status: '开启'
      },
      {
        id: 20,
        name: '二号核岛环境监测设备',
        status: '开启'
      }
    ]
  },
  {
    name: '一号常规岛',
    list: [
      {
        id: 21,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 22,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 23,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 24,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 25,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 26,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 27,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 28,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 29,
        name: '一号常规岛环境监测设备',
        status: '开启'
      },
      {
        id: 30,
        name: '一号常规岛环境监测设备',
        status: '开启'
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  overflow: auto;
  .device-area {
    max-height: calc((100% - 20px) / 3);
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    .title {
      flex: 0 0 36px;
      line-height: 36px;
      height: 36px;
      font-size: 16px;
      font-weight: bold;
      position: relative;
      padding-left: 15px;
      background: linear-gradient(to right, #0e4dd4aa, #0e4dd400);
      margin-bottom: 10px;
      &::before {
        display: block;
        position: absolute;
        content: '';
        width: 4px;
        height: 100%;
        background-color: #588cec;
        left: 0;
        top: 0;
      }
    }
    .device-list {
      flex: 1;
      cursor: pointer;
      list-style: none;
      padding: 0;
      margin: 0;
      overflow: auto;
      .device-item {
        display: flex;
        justify-content: space-between;

        line-height: 30px;
        border: 1px solid #588cec;
        padding: 0 15px;
        &:hover,
        &.active {
          border-color: #807900;
          background-color: #807900;
        }
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
