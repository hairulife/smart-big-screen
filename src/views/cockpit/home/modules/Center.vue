<template>
  <div class="module canvasWrap">
    <!-- <div class="bg"></div> -->
    <canvas class="canvasContainer"></canvas>
    <div class="info">
      <div class="item">
        <div class="icon1"></div>
        <div>鹰眼</div>
      </div>
      <div class="item">
        <div class="icon2"></div>
        <div>球机</div>
      </div>
      <div class="item">
        <div class="icon3"></div>
        <div>枪机</div>
      </div>
    </div>
    <div class="left-btn left-close" @click="centerStore.toggleLeft">
      <img v-if="!centerStore.leftClose" src="../../images/left.png" alt="" />
      <img v-else src="../../images/right.png" alt="" />
    </div>
    <div class="right-btn" @click="centerStore.toggleRight">
      <img v-if="!centerStore.rightClose" src="../../images/right.png" alt="" />
      <img v-else src="../../images/left.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CanvasSelect from 'canvas-select'
import imgUrl from '@/views/cockpit/images/home6.png'
import { useCenterStore } from '@/stores/cockpit.js'
const centerStore = useCenterStore()
const canvasEl = ref(null)
let instance = null
const getType1 = (x, y, label = '') => {
  return {
    labelFillStyle: '#fff',
    textFillStyle: '#000',
    lineWidth: 0,
    fillStyle: 'red',
    strokeStyle: 'red',
    label,
    coor: [
      [x, y],
      [x + 20, y + 15]
    ],
    labelFont: '16px sans-serif	',
    active: false,
    creating: false,
    dragging: false,
    index: 0,
    type: 1,
    labelUp: true
  }
}
const getType2 = (x, y, label = '') => {
  return {
    labelFont: '16px sans-serif	',
    labelFillStyle: '#fff',
    textFillStyle: '#000',
    fillStyle: 'red',
    strokeStyle: 'red',
    active: false,
    creating: false,
    dragging: false,
    index: 0,
    label,
    coor: [
      [x, y],
      [x + 15, y + 25],
      [x - 15, y + 25]
    ],
    type: 2,
    labelUp: true
  }
}
const getType5 = (x, y, label = '') => {
  return {
    labelFont: '16px sans-serif	',
    labelFillStyle: '#fff',
    textFillStyle: '#000',
    fillStyle: 'red',
    strokeStyle: 'red',
    label,
    coor: [x, y],
    active: false,
    creating: false,
    dragging: false,
    uuid: '3b23cf5e-ac84-4c52-bdf5-4b6bfa13d2df',
    index: 4,
    radius: 11,
    type: 5,
    labelUp: true
  }
}

const canvasInit = () => {
  let canvasWrapEl = document.querySelector('.canvasWrap')
  if (!canvasWrapEl) {
    return
  }
  canvasEl.value.width = document.querySelector('.canvasWrap').clientWidth
  canvasEl.value.height = document.querySelector('.canvasWrap').clientHeight
  if (instance) {
    instance.destroy()
  }

  instance = new CanvasSelect('.canvasContainer', imgUrl)
  instance.readonly = true
  let option = [
    getType5(75, 750, '移动信号发射塔'),
    getType2(80, 780),

    getType1(1000, 980, '安健环通道'),
    getType1(1040, 980),
    getType1(1000, 1020),
    getType1(1040, 1020),

    getType2(1580, 1020),
    getType5(1650, 1020, '临建办公楼'),
    getType5(1590, 1120)
  ]
  // 加载数据
  instance.setData(option)
  instance.update()
}

onMounted(() => {
  canvasEl.value = document.querySelector('.canvasContainer')
  canvasInit()

  // 监听 .canvasWrap 的变化
  const observer = new ResizeObserver(() => {
    requestAnimationFrame(() => {
      canvasInit()
    })
  })
  observer.observe(document.querySelector('.canvasWrap'))
})
</script>

<style lang="scss" scoped>
.module {
  width: 100%;
  height: 100%;
  position: relative;
  .info {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(24, 73, 182);
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      .icon1 {
        // 三角形
        width: 0;
        height: 0;
        border-left: 7.5px solid transparent;
        border-right: 7.5px solid transparent;
        border-bottom: 10px solid red;
      }
      .icon2 {
        // 圆形
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
      }
      .icon3 {
        // 正方形
        width: 15px;
        height: 10px;
        background-color: red;
      }
    }
  }
  .canvasContainer {
    width: 100%;
    height: 100%;
  }
  // .bg {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   background: url('@/views/cockpit/images/home6.jpg') no-repeat center center;
  //   background-size: cover;
  //   z-index: -1;
  // }

  .left-btn {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 15px;
    height: 100px;
    border-radius: 0 20px 20px 0;
    background-color: rgb(48, 228, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 40px;
    }
    &:hover {
      background-color: rgb(38, 192, 215);
    }
  }

  .right-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 15px;
    height: 100px;
    border-radius: 20px 0 0 20px;
    background-color: rgb(48, 228, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 40px;
    }
    &:hover {
      background-color: rgb(38, 192, 215);
    }
  }
}
</style>
