<template>
    <div id="chat-frame">
        <Header :name="partnerInfo.name" :image="partnerInfo.profilePicture" :status="partnerInfo.status"/>
        <Body :messages="messages"/>
        <Bottom/>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/chat/Header.vue"
import Bottom from "@/components/chat/Bottom.vue"
import Body from "@/components/chat/Body.vue"
import type { Consultation, Message } from "@/types"

const { partnerInfo, messages } = defineProps<{
    partnerInfo: Consultation;
    messages?: Message[]
}>()
</script>

<style lang="css">
#chat-frame {
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.chat-body {
    flex: 1;
}

</style>