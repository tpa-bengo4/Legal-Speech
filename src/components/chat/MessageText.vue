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
          <LanguageSelect @translate="handleTranslate" />
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

const handleTranslate = async (language: string) => {
  let userMessage = `please translate to ${language}: "${message.text}"`;

  let systemsettings = {
    role: "system",
    content: `
            会話のシミュレーションを行います。
            ・ビジネスコンサルタントです
            ・フレンドリーに前向きです
            ではシミュレーションを開始します。
        `,
  };

  let mymessage = [];
  mymessage.push(systemsettings);
  mymessage.push({ role: "user", content: userMessage });
  const url = `https://b4-corp-aos-japan-east.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-08-01-preview`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": `${import.meta.env.VITE_AZURE_OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-35-turbo",
      stream: false,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 400,
      stop: null,
      messages: mymessage,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      messageText.value = data.choices[0].message.content;
    });
};
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
.msg-text {
  padding: 8px;
  text-align: left;
  width: 60%;
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
