<template>
  <p>child2</p>
  <p>Current component: A</p>
  <span>count: {{ count }}</span>
  <button @click="count++">+</button>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Child2',
  created() {
    console.log('child2 created')
  },
  activated() {
    console.log('child2 activated')
  },
  deactivated() {
    console.log('child2 deactivated')
  },
  setup() {
    const count = ref(0);
    return {
      count
    }
  }
}

</script>