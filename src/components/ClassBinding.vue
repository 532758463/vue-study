<script setup lang="ts">
import { ref, computed } from 'vue';
type Error = {
    type?: 'fatal'
} | null

const isActive = ref(true)
const error = ref<Error>(null)

const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error?.value?.type === 'fatal'
}))

const toggle = () => {
    if (error.value) {
        error.value = null
    } else {
        error.value = {
            type: 'fatal'
        }
    }
}
</script>

<template>
    <div :class="classObject">Class 与 Style 绑定</div>
    <div @click="toggle">click error</div>
</template>
<style scoped>
.text-danger {
    color: red;
}

.active {
    text-decoration: underline;
    color: blue;
}
</style>