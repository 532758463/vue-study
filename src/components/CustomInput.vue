<!-- <script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])


</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template> -->

<script setup lang="ts">
import { computed, PropType } from 'vue'

// const props = defineProps<{
//   modelValue: string
// }>()
const props = defineProps({
  modelValue: {
    type: String as PropType<string>, // 明确指定为 string 类型
    required: true // 可选：设置为必填项
  }
})
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