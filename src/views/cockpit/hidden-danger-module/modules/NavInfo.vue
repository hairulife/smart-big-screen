<template>
  <div class="module">
    <div
      class="item"
      v-for="(item, index) in lists"
      :key="index"
      :style="{ '--color': item.color }"
    >
      <div class="icon" v-html="item.svg"></div>
      <div class="title">{{ item.title }}</div>
      <div class="value">
        <span class="num">{{ item.value }}</span>
        <span class="unit">{{ item.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const lists = [
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2v7c0 1.1.9 2 2 2m10-5v3c0 1.1.9 2 2 2s2-.9 2-2v-3c0-1.1-.9-2-2-2s-2 .9-2 2m-4 5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2"/></svg>',
    title: '隐患总数',
    value: 22,
    unit: '条',
    color: '#0ac472'
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26c.21-.36.1-.82-.26-1.03l-2.87-1.71v-3.4c-.01-.4-.35-.74-.76-.74s-.75.34-.75.75m10 .75V4.21c0-.45-.54-.67-.85-.35l-1.78 1.78a9.01 9.01 0 0 0-7.21-2.6c-4.19.38-7.64 3.75-8.1 7.94a9 9 0 0 0 17.87 2.14c.07-.6-.4-1.12-1-1.12c-.5 0-.92.37-.98.86c-.43 3.49-3.44 6.19-7.05 6.14c-3.71-.05-6.84-3.18-6.9-6.9C4.94 8.2 8.11 5 12 5c1.93 0 3.68.79 4.95 2.05l-2.09 2.09c-.32.32-.1.86.35.86h5.29c.28 0 .5-.22.5-.5"/></svg>',
    title: '隐患延期数',
    value: 22,
    unit: '条',
    color: '#f8a035'
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 19c0-.55-.45-1-1-1H4v-6h18V6c0-1.1-.9-2-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h9c.55 0 1-.45 1-1m6-11H4V6h16zm0 14c-.55 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1"/></svg>',
    title: '今日新增数',
    value: 22,
    unit: '条',
    color: '#02fdff'
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM11 5h2v14h-2z"/></svg>',
    title: '今日关闭数',
    value: 22,
    unit: '条',
    color: '#ff6b4e'
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM11 5h2v14h-2z"/></svg>',
    title: '关闭总数',
    value: 22,
    unit: '条',
    color: '#fca235'
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13h-6v-2h6c.55 0 1-.45 1-1s-.45-1-1-1h-6V3c0-.55-.45-1-1-1s-1 .45-1 1v6h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v6H3c-.55 0-1 .45-1 1s.45 1 1 1h6v2H3c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1v-6h2v6c0 .55.45 1 1 1s1-.45 1-1v-6h6c.55 0 1-.45 1-1s-.45-1-1-1m-8 0h-2v-2h2z"/></svg>',
    title: '关闭率',
    value: 22,
    unit: '%',
    color: '#22c6c8'
  }
]
</script>

<style lang="scss" scoped>
.module {
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
      :deep(svg) {
        width: 100%;
        height: 100%;
        color: var(--color);
      }
    }

    .title {
      font-size: 20px;
      margin-bottom: 10px;
      color: #fff;
    }

    .value {
      .num {
        line-height: 1;
        font-size: 26px;
        font-weight: bold;
        color: var(--color);
      }
      .unit {
        font-size: 16px;
        margin-left: 5px;
      }
    }
  }
}
</style>
