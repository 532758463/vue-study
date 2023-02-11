<script setup lang="ts">
import { ref } from 'vue'
const text = ref('Edit me')
const checkedNames = ref([])
const selected = ref('')

</script>

<template>
    <h2>Text Input</h2>
    <div>v-modal</div>
    <input class="border border-black" v-model="text"> {{ text }}

    <h2>checkbox</h2>
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>

    <span> Selected: {{ selected }}</span>
    <h2>select</h2>
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
</template>