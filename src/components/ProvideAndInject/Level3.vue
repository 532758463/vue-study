<template>
    <p>=======Level3==============</p>
    <p>{{ name }}</p>
    <p>{{ info }}</p>
</template>

<script lang="ts">
import { onMounted, getCurrentInstance, inject } from 'vue'
export default {
    setup() {
        const name = inject('name');
        const info = inject('info')
        const current = getCurrentInstance();
        onMounted(() => {
            console.log("获取父组件实例")
            console.log(current?.parent);
        })

        return {
            name
        }
    }
}
</script>