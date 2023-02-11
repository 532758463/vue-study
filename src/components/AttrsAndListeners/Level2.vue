<template>
    <p>Level2</p>
    <Level3 :x="x" :y="x" :z="z" @getX="getX" @getY="getY" @getZ="getZ" v-bind="$attrs" ref="level3">
    </Level3>
</template>

<script>
import Level3 from './Level3.vue'

export default {
    name: "Level2",
    components: {
        Level3
    },
    inject: ['info'],
    props: ['a'],
    emits: ['getA'],
    data() {
        return {
            x: "xxx",
            y: "yyy",
            z: "zzz"
        }
    },
    methods: {
        getX() {
            return this.x
        },
        getY() {
            return this.y
        },
        getZ() {
            return this.z
        }
    },
    created() {
        console.log('level2', Object.keys(this.$attrs))
    },
    mounted() {
        // 获取子组件内容
        console.log(this.$refs.level3.name)
    },
}
</script>