<template>
  <div>
    <div class="message">
      <div
        class="msg-text"
        :class="message.side === 'right' ? 'right-msg' : 'left-msg'"
      >
        <p>
          {{ messageText || "ファイルを送信しました。" }}
        </p>
        <div class="message-footer">
          <span
          class="time"
          :class="message.side === 'right' ? 'right-time' : 'left-time'"
          >{{ message.timestamp }}</span
          >
          <div class="language-select">
            <div v-if="isLoading">translating...</div>
            <LanguageSelect @translate="handleTranslate" />
            <button class="back-to-original-text" @click="handleBackToOriginalText">original text</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from "@/types";
import LanguageSelect from "./language-select/LanguageSelect.vue";
import { ref } from "vue";

const { message } = defineProps<{
  message: Message;
}>();

const messageText = ref(message.text);
const isLoading = ref(false);

const handleTranslate = async (language: string) => {
  const userMessage = `please translate the text inside of "" to ${language}: "${message.text} and only show translated text"`;

  let systemSettings = {
    role: "system",
    content: `
      会話のシミュレーションを行います。
      ・ビジネスコンサルタントです
      ・フレンドリーに前向きです
      ではシミュレーションを開始します。
    `,
  };

  const myMessage = [];
  myMessage.push(systemSettings);
  myMessage.push({ role: "user", content: userMessage });

  const AZURE_OPENAI_SERVICE_URL = `https://b4-corp-aos-japan-east.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2024-08-01-preview`;

  isLoading.value = true;
  await fetch(AZURE_OPENAI_SERVICE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": `${import.meta.env.VITE_AZURE_OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      stream: false,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 400,
      stop: null,
      messages: myMessage,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      isLoading.value = false;
      messageText.value = data.choices[0].message.content;
    });
};

const handleBackToOriginalText = () => {
  messageText.value = message.text;
}
</script>

<style lang="css" scoped>
.message {
  vertical-align: top;
}
.message-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.language-select {
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.back-to-original-text {
  font-size: 13px;
  padding: 2px 6px;
  margin-left: 10px;
  background-color: rgb(6, 90, 96);
  color: #fff;
  font-weight: 600;
  border: none;
}

.back-to-original-text:hover {
  background-color: rgb(20, 199, 211);
  color: #fff;
}

.msg-text {
  padding: 8px;
  text-align: left;
  width: 50%;
  margin-top: 8px;
}

p {
  background: #efefef;
  border-radius: 10px;
  color: #646464;
  font-size: 16px;
  padding: 1rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 25%) 2px 5px 5px 2px;
}

.time {
  font-size: 12px;
  color: #777;
  margin-top: 8px;
}

.right-msg {
  float: right;
  margin-right: 48px;
}

.left-msg {
  float: left;
  margin-left: 16px;
}

.right-time {
  float: right;
}

.left-time {
  float: left;
}
</style>
