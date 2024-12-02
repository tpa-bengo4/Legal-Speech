<template>
    <div class="bottom">
      <input
        type="text"
        class="message-input"
        placeholder="メッセージを入力する"
      />
      <button class="voice-button">
        <img :src="VoiceIcon" alt="Voice Chat" />
      </button>
      <button class="send-button">
        <img :src="SendIcon" alt="Send Message" />
      </button>
    </div>
  </template>

<script setup lang="ts">
import VoiceIcon from "@/assets/images/voice-circle-fill-svgrepo-com.svg"
import SendIcon from "@/assets/images/send-message-svgrepo-com.svg"
</script>

<style lang="css" scoped>
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ccc;
  padding: 8px;
  border-top: 1px solid #ccc;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.message-input {
  flex: 0.9;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  margin-right: 8px;
  margin-left: 8px;
  background-color: white;
}

.voice-button,
.send-button {
  border: none;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px 0 8px;
  border-radius: 50%;
  background-color: #ccc;
}

.voice-button img,
.send-button img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.voice-button:hover img,
.send-button:hover img {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
</style>
