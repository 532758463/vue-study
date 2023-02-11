<template>
    <p>{{ info }}</p>
    <input class="border border-black" :value="name" @input="onChange" />
    <Level3 v-bind="$attrs" ref="level3">
    </Level3>
</template>

<script lang="ts">
import { computed, provide, ref } from 'vue'
import Level3 from './Level3.vue'

export default {
    name: "Level2",
    components: {
        Level3
    },
    inject: ['info'],
    setup() {
        const name = ref('xiao');
        function onChange(e: any) {
            console.log(e?.target?.value)
            name.value = e?.target?.value;
        }
        provide('name', computed(() => name));

        return {
            onChange,
            name
        }
    }
}
</script>