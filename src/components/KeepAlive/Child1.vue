<template>
  <p>child1</p>
  <p>Current component: B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg">
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Child1',
  created() {
    console.log('child1 created')
  },
  activated() {
    console.log('child1 activated')
  },
  deactivated() {
    console.log('child1 deactivated')
  },
  setup() {
    const msg = ref('')
    return {
      msg
    }
  }
}

</script>