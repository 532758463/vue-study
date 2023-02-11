<template>
    <p>Level3</p>
</template>

<script lang="ts">
import { onMounted, useAttrs, getCurrentInstance } from 'vue'
export default {
    name: "Level3",
    props: ['x'],
    emits: ['getX'],
    data() {
        return {
            name: 'hello world'
        }
    },
    methods: {
    },
    created() {
        console.log('level3', Object.keys(this.$attrs))
    },
    mounted() {
        // 获取父组件属性
        console.log(this.$parent?.getX())
    },
    setup(props, context) {
        const a = useAttrs();
        console.log(context?.parent)
        const current = getCurrentInstance();
        console.log(context.attrs)
        console.log(a)
        console.log('setup')
        console.log(props)
        onMounted(() => {
            console.log("获取父组件实例")
            console.log(current?.parent);
        })
    }
}
</script>