<script setup>
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { shallowRef } from 'vue';

const current = shallowRef(Child1);
</script>
<template>
    <div class="demo">
        <label><input type="radio" v-model="current" :value="Child1" /> A</label>
        <label><input type="radio" v-model="current" :value="Child2" /> B</label>
        <KeepAlive :include="['Child1', 'Child2']">
            <component :is="current"></component>
        </KeepAlive>
    </div>
</template>