<template >
    <div class="chat-body">
        <div class="msg-page">
            <Message/>
            <Message/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Message from "@/components/chat/Message.vue"
</script>

<style lang="css" scoped>
.chat-body {
    overflow-y: scroll;
}

.msg-page {
}
</style>