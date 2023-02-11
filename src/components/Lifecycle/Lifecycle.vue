<template>
    <h1>Vue生命周期</h1>
    <img src="https://vuejs.org/assets/lifecycle.16e4c08e.png" alt="Vue生命周期图" />
</template>
<script lang="ts">
export default {
    name: "Lifecycle",
    data() {
        return {
            nums: [1, 2, 3]
        }
    },
    methods: {
        getNums() {
            return this.nums
        }
    },
    beforeCreate() {
        /**
         * 创建一个空白的Vue实例
         * data method尚未被初始话，不可使用
         */
        console.info('-----------beforeCreate------------');
        console.info('nums')
    },
    created() {
        /**
         * Vue实例初始化完成，完成响应式绑定
         * data method都已经初始化完成，可调用
         * 尚未开始渲染模板
         */
        console.info('-----------created------------')
        console.info('nums')
    },
    beforeMount() {
        /**
         * 编译模板，调用render生成vdom
         * 还没有开始渲染dom
         */
        console.info('-----------beforeMount------------')
        console.info('nums')
    },
    mounted() {
        /**
         * 完成dom渲染
         * 组件创建完成
         * 开始由创建阶段进入运行阶段
         */
        console.info('-----------mounted------------')
    },
    beforeUpdate() {
        /**
         * data发生变化之后
         * 准备更新DOM（尚未更新DOM）
         */
    },
    updated() {
        /**
         * data发生变化，且DOM更新完成
         * 不要再updated中修改data,可能会产生死循环
         */
    },
    beforeUnmount() {

    },
    unmounted() {
        /**
         * 组件被销毁
         * 所以子组件也都被销毁了
         */
    },
    setup() {
        /**
         * setup代替了before和created
         */
    }
}

</script>