<!-- eslint-disable vue/multi-word-component-names -->
<template >
    <div class="chat-body">
        <div class="msg-page">
            <MessageText v-for="mes in messages" :key="mes.timestamp" :message="mes"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import MessageText from "./MessageText.vue";
import type { Message } from "@/types";

const { messages } = defineProps<{
    messages?: Message[]
}>()
</script>

<style lang="css" scoped>
.chat-body {
    overflow-y: scroll;
}

.msg-page {
    display: flex;
    flex-direction: column;
}
</style>