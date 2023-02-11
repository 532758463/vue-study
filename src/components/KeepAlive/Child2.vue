<template>
    <p>child2</p>
</template>
<script lang="ts">
export default {
    name: 'Child2',
    created() {
        console.log('child2 created')
    },
    activated() {
        console.log('child2 activated')
    },
    deactivated() {
        console.log('child2 deactivated')
    },
}

</script>