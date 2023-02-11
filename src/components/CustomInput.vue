<!-- <script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])


</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template> -->

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])


const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input class="border border-black" v-model="value" />
</template>