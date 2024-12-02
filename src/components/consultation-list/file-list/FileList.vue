<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import FileListItem from "@/components/consultation-list/file-list/FileListItem.vue";
import LeftIcon from "@/assets/svg/left.svg";
import RightIcon from "@/assets/svg/right.svg";
import { AttachMent } from "@/types";

interface Props {
  fileList: File[];
}

const { fileList } = defineProps<Props>();

// 可視ファイルのインデックス追跡
const VISIBLE_COUNT = 5; // 一度に表示できるファイルの最大数
const startIndex = ref(0);

// 表示されているファイルとナビゲーション ボタンの算出プロパティ
const visibleFiles = computed(() =>
  fileList.slice(startIndex.value, startIndex.value + VISIBLE_COUNT),
);

const canMoveLeft = computed(() => startIndex.value > 0);

const canMoveRight = computed(
  () => startIndex.value + VISIBLE_COUNT < fileList.length,
);

// ナビゲーション機能
const handleMoveLeft = () => {
  if (canMoveLeft.value) {
    startIndex.value--;
    scrollFiles();
  }
};

const handleMoveRight = async () => {
  if (canMoveRight.value) {
    startIndex.value++;
    scrollFiles();
  }
};

// ファイルリストコンテナをスクロールする関数
const scrollFiles = () => {
  const fileListElement = document.querySelector(".file-list") as HTMLElement;

  if (fileListElement) {
    const fileListElementWidth = fileListElement.offsetWidth;
    const scrollOffset = fileListElementWidth / VISIBLE_COUNT;

    fileListElement.scrollTo({
      left: scrollOffset * startIndex.value,
      behavior: "smooth",
    });
  }
};
</script>
<template>
  <div class="file-list-wrapper">
    <!-- 左ナビゲーションボタン-->
    <img
      :src="LeftIcon"
      alt="Move Left"
      aria-label="Move Left"
      class="nav-icon"
      :class="{ disabled: !canMoveLeft }"
      @click="handleMoveLeft"
    />

    <!-- ファイルリスト -->
    <div class="file-list">
      <FileListItem
        v-for="(file, index) in visibleFiles"
        :key="file.type + index"
        :name="file.name"
        :type="file.type"
      />
    </div>

    <!-- 右ナビゲーションボタン -->
    <img
      :src="RightIcon"
      alt="Move Right"
      aria-label="Move Right"
      class="nav-icon"
      :class="{ disabled: !canMoveRight }"
      @click="handleMoveRight"
    />
  </div>
</template>

<style scoped>
.file-list-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-list {
  display: flex;
  gap: 5px;
  width: 30vw;
  overflow: hidden;
  padding: 5px 10px;
  border-radius: 5px;
  scroll-behavior: smooth;
}

.nav-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.nav-icon.disabled {
  visibility: hidden;
  pointer-events: none;
}
</style>
