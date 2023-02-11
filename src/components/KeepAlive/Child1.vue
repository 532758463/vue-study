<template>
    <p>child1</p>
</template>
<script lang="ts">
export default {
    name: 'Child1',
    created() {
        console.log('child1 created')
    },
    activated() {
        console.log('child1 activated')
    },
    deactivated() {
        console.log('child1 deactivated')
    },
}

</script>