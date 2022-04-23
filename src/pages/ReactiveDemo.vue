<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
    count: 0
});
</script>

<template>
    <div>
        <p>{{ state.count }}</p>
        <button @click="state.count++">+</button>
    </div>
</template>