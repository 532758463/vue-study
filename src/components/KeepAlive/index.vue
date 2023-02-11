<template>
    <div>
        <button id="counter" class="border bg-lime-600 border-zinc-900" @click="toggle">切换{{ num }}</button>
        <keep-alive>
            <Child1 ref="child1" v-if="num === 1"></Child1>
            <Child2 v-else></Child2>
        </keep-alive>
    </div>
</template>
<script lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

export default {
    name: "KeepAlive",
    components: {
        Child1,
        Child2
    },
    data() {
        return {
            a: "aaa",
            b: "bbbb",
            c: "ccc"
        }
    },
    provide: {
        info: 'info form Level1'
    },
    setup() {
        const num = ref(1);
        async function toggle() {
            if (num.value === 1) {
                num.value = 2
            } else {
                num.value = 1
            }
            // DOM not yet updated
            console.log(document?.getElementById?.('counter')?.textContent) // 0

            await nextTick()
            // DOM is now updated
            console.log(document?.getElementById?.('counter')?.textContent) // 1
        };
        onMounted(() => {
            nextTick(function () {
                console.log('仅在整个视图渲染之后才会运行的代码')
                console.log('onMounted nextTick:' + document?.getElementById?.('counter')?.textContent)
            })
        });
        return {
            num,
            toggle
        }
    }

}
</script>