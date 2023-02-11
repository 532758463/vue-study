<script>

</script>
<template>
    <div>
        <h1>v-modal</h1>
        <CustomInput ref="s" v-model="message" /> {{ message }}
        <br />
        <h1>{{ firstName }} {{ lastName }}</h1>
        <UserName v-model:first-name="firstName" v-model:last-name="lastName" />
    </div>
</template>