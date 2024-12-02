<script setup lang="ts">
import { Message, Attachment } from "@/types";
import { CONSULTATION_LIST_ITEM_IMAGE_DIMENSION } from "@/constants";

const { HEIGHT: height, WIDTH: width } = CONSULTATION_LIST_ITEM_IMAGE_DIMENSION;

interface Props {
  photoSource: string;
  name: string;
  lastMessage: Message;
  attachments: Attachment[];
  status: string;
}

const { photoSource, name, lastMessage, status } =
  defineProps<Props>();
</script>
<template>
  <div class="container">
    <!--ステータスドット付きパートナー写真 -->
    <div class="photo-container">
      <img
        class="partner-photo"
        :width="width"
        :height="height"
        :src="photoSource"
        alt="partner photo"
        aria-label="partner photo"
      />
      <!-- 緑色の点はオンライン ステータスを示します -->
      <div v-if="status === 'オンライン'" class="status-dot"></div>
    </div>

    <!-- 相談プレビューセクション -->
    <div class="consultation-preview">
      <p class="partner-name">{{ name }}</p>
      <div class="last-message">
        <p v-if="lastMessage.side === 'right'" class="sender">You:</p>
        <p class="last-message-text">{{ lastMessage.text }}</p>
        <p class="last-message-timestamp">・{{ lastMessage.timestamp }}</p>
      </div>
    </div>
    <FileList :fileList="attachments" />
  </div>
</template>
<style scoped>
.container {
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 10px;
  gap: 20px;
}

.container:hover {
  cursor: pointer;
  background-color: #eee;
  border-radius: 10px;
}

.photo-container {
  position: relative; /* ステータスドットを配置するには */
}

.partner-photo {
  border-radius: 50%;
  border: 1px solid #ccc;
}

.status-dot {
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #02c42f;
  border-radius: 50%;
}

.consultation-preview {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.last-message {
  display: flex;
  align-items: center;
}

.sender {
  color: #333;
}

.partner-name,
.last-message-text {
  display: inline;
  color: #000;
  margin: 0; /* デフォルトのマージンを削除する */
  padding: 0;
}

.partner-name {
  font-weight: 500;
}

.last-message-timestamp {
  color: #888;
}

.last-message-text {
  color: #555;
}
</style>
