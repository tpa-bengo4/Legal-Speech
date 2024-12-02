<template>
    <div class="chat-screen">
        <ChatFrame :partner-info="partnerInfo" :messages="messages"/>
        <UserProfile :user="partnerInfo"/>
    </div>
</template>

<script setup lang="ts">
import ChatFrame from "@/components/chat/ChatFrame.vue"
import { useRoute } from "vue-router";
import UserProfile from "@/components/UserProfile.vue";
import { Consultation } from "@/types";
import consultationsList from "@/assets/json/consultations-list.json"
import consultationMessages from "@/assets/json/consultation-messages.json"

const route =  useRoute();
const partnerIdString = route.params.partnerId as string

const partnerIdNumber = parseInt(partnerIdString)
const partnerInfo: Consultation =  consultationsList.consultations.find(value => value.partnerId === partnerIdNumber) as Consultation;
const partnerMessage = consultationMessages.find(value => value.partnerId = partnerIdNumber)
const messages = partnerMessage?.messages

</script>

<style lang="css" scoped>
.chat-screen {
    display: flex;
}
</style>