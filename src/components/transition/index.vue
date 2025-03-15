<script setup>
import { ref } from 'vue'

const show = ref(true)
const show2 = ref(true)
const open = ref(false)
</script>

<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <button @click="show2 = !show2">Toggle2</button>
    <button @click="open = true">Open Modal</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
    <Transition name="slide-fade">
      <p v-if="show2">hello2</p>
    </Transition>
    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  color: red;
}

/* 进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除。 */
.v-enter-from,
/*  离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 v-leave-from 被移除的同时)，在过渡或动画完成之后移除。 */
.v-leave-to {
  opacity: 0;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>