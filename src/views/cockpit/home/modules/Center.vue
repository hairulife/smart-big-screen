<template>
  <div
    ref="wrapEl"
    class="module"
    :style="{
      '--lw': centerStore.leftClose ? '0px' : '25%',
      '--rw': centerStore.rightClose ? '0px' : '25%'
    }"
  >
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
    <div class="left-btn" @click="centerStore.toggleLeft">
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
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ref, onMounted } from 'vue'
import { useCenterStore } from '@/stores/cockpit.js'
const centerStore = useCenterStore()
// import imgUrl from '@/views/cockpit/images/home6.png'
import imgUrl from '@/views/cockpit/images/dt.png'
const wrapEl = ref(null)
// Three Init
// 渲染器
const renderer = new THREE.WebGLRenderer()
// 场景
const scene = new THREE.Scene()
// 相机
let camera = null

let controls = null

const initThree = () => {
  if (!wrapEl.value || !wrapEl.value.clientWidth) {
    return
  }
  // 相机
  camera = new THREE.PerspectiveCamera(
    6,
    wrapEl.value.clientWidth / wrapEl.value.clientHeight,
    0.1,
    1000
  )

  camera.position.set(0, 0, 110)
  camera.lookAt(scene.position)

  // 设置渲染器的大小
  renderer.setSize(wrapEl.value.clientWidth, wrapEl.value.clientHeight)
  // 设置渲染器背景
  renderer.setClearColor(0xffffff, 0)

  // 将渲染器添加到页面
  wrapEl.value.appendChild(renderer.domElement)
}

const create = () => {
  const loader = new THREE.TextureLoader()
  loader.load(imgUrl, function (texture) {
    // 创建几何体
    // const geometry = new THREE.BoxGeometry(23.69, 16.39, 10)
    // const mesh = new THREE.Mesh(
    //   geometry,
    //   new THREE.MeshBasicMaterial({
    //     map: texture
    //   })
    // )
    // scene.add(mesh)
    // 创建一个图片平面
    const geometry = new THREE.PlaneGeometry(23.69, 16.39)
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      lightMap: texture,
      lightMapIntensity: 3
    })
    const plane = new THREE.Mesh(geometry, material)
    scene.add(plane)
  })
}

const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

onMounted(() => {
  initThree()
  create()
  render()
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableRotate = false // 禁用旋转
  // controls.enableZoom = false

  // 监听 .canvasWrap 的变化
  const observer = new ResizeObserver(() => {
    requestAnimationFrame(() => {
      initThree()
      controls = new OrbitControls(camera, renderer.domElement)
      controls.enableRotate = false // 禁用旋转
      // controls.enableZoom = false
    })
  })
  observer.observe(wrapEl.value)
})
</script>

<style lang="scss" scoped>
.module {
  width: 100%;
  height: 100%;
  position: relative;

  .info {
    position: absolute;
    bottom: 10px;
    right: calc(var(--rw) + 5px);
    background-color: rgba(24, 73, 182);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    padding: 10px 20px 10px 15px;
    color: #fff;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      .icon1 {
        width: 30px;
        height: 30px;
        background: url('@/views/cockpit/images/map1.png') no-repeat center center;
        background-size: 100% 100%;
      }
      .icon2 {
        width: 30px;
        height: 30px;
        background: url('@/views/cockpit/images/map2.png') no-repeat center center;
        background-size: 100% 100%;
      }
      .icon3 {
        width: 30px;
        height: 30px;
        background: url('@/views/cockpit/images/map3.png') no-repeat center center;
        background-size: 100% 100%;
      }
    }
  }
  .left-btn {
    position: absolute;
    top: 50%;
    left: var(--lw);
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
    right: var(--rw);
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
  ::v-deep(.point) {
    position: absolute;
    background-color: red;
    position: absolute;
    width: 30px;
    height: 30px;

    &.point1 {
      background: url('@/views/cockpit/images/map1.png') no-repeat center center;
      background-size: 100% 100%;
    }
    &.point2 {
      background: url('@/views/cockpit/images/map2.png') no-repeat center center;
      background-size: 100% 100%;
    }
    &.point3 {
      background: url('@/views/cockpit/images/map3.png') no-repeat center center;
      background-size: 100% 100%;
    }
  }
}
</style>
