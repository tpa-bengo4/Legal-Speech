<script setup lang="ts">
import { filesType } from "@/utils";
import { CONSULTATION_LIST_FILE_TYPE } from "@/constants";

const { HEIGHT: height, WIDTH: width } = CONSULTATION_LIST_FILE_TYPE;

interface Props {
  name: string;
  type: string | null;
}

const { name, type } = defineProps<Props>();

const fileConfig = type ? filesType[type] : null;
</script>
<template>
  <div class="file-list-item">
    <img
      class="file-icon"
      v-if="fileConfig"
      :width="width"
      :height="height"
      :src="fileConfig.icon"
      :alt="`${fileConfig.label} icon`"
      :aria-label="fileConfig.label"
    />
    <p class="file-name">
      {{ name }}
    </p>
  </div>
</template>
<style scoped>
.file-list-item {
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0;
}

.file-name {
  color: #000;
  font-size: 11px;
  margin: 0;
}
</style>
