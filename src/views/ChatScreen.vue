<template>
    <ChatFrame/>
    
</template>

<script setup lang="ts">
import ChatFrame from "@/components/chat/ChatFrame.vue"
import { useRoute } from "vue-router";
const route =  useRoute();
const {partnerId} = route.params

</script>

<style lang="css" scoped>
</style>