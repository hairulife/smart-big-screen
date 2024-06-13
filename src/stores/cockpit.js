import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCenterStore = defineStore('cockpitCenter', () => {
  const leftClose = ref(false)
  const rightClose = ref(false)

  const toggleLeft = () => {
    leftClose.value = !leftClose.value
  }

  const toggleRight = () => {
    rightClose.value = !rightClose.value
  }

  return { leftClose, rightClose, toggleLeft, toggleRight }
})
