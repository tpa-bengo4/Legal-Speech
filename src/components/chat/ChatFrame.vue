<template>
    <div id="chat-frame">
        <Header :name="partnerInfo.name" :image="partnerInfo.profilePicture"/>
        <Body :messages="messages"/>
        <Bottom/>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/chat/Header.vue"
import Bottom from "@/components/chat/Bottom.vue"
import Body from "@/components/chat/Body.vue"
import consultationsList from "@/assets/json/consultations-list.json"
import consultationMessages from "@/assets/json/consultation-messages.json"
import type { Consultation } from "@/types"
import { useRoute } from "vue-router"

const route = useRoute();
const partnerIdString = route.params.partnerId as string
const partnerIdNumber = parseInt(partnerIdString)
const partnerInfo: Consultation =  consultationsList.consultations.find(value => value.partnerId === partnerIdNumber)

const {messages: messages} = consultationMessages.find(value => value.partnerId = partnerIdNumber);


</script>

<style lang="css">
#chat-frame {
    background-color: antiquewhite;
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.chat-body {
    flex: 1;
}

</style>