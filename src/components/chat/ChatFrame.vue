<template>
    <div id="chat-frame">
        <Header />
        <Body />
        <Bottom/>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/chat/Header.vue"
import Bottom from "@/components/chat/Bottom.vue"
import Body from "@/components/chat/Body.vue"
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