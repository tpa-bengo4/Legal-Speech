<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import FileListItem from "@/components/consultation-list/file-list/FileListItem.vue";
import LeftIcon from "@/assets/svg/left.svg";
import RightIcon from "@/assets/svg/right.svg";

interface File {
  name: string;
  type: string;
}

interface Props {
  fileList: File[];
}

const { fileList } = defineProps<Props>();

// Index tracking for visible files
const startIndex = ref(0);
const visibleCount = 5; // Maximum number of files visible at once

// Computed properties for visible files and navigation buttons
const visibleFiles = computed(() =>
  fileList.slice(startIndex.value, startIndex.value + visibleCount),
);

const canMoveLeft = computed(() => startIndex.value > 0);
const canMoveRight = computed(
  () => startIndex.value + visibleCount < fileList.length,
);

// Navigation functions
const moveLeft = async () => {
  if (canMoveLeft.value) {
    startIndex.value--;
    await nextTick(); // Ensure the DOM is updated before scrolling
    scrollFiles();
  }
};

const moveRight = async () => {
  if (canMoveRight.value) {
    startIndex.value++;
    await nextTick(); // Ensure the DOM is updated before scrolling
    scrollFiles();
  }
};

// Function to scroll the file list container
const scrollFiles = () => {
  const fileListElement = document.querySelector('.file-list') as HTMLElement;
  if (fileListElement) {
    const scrollAmount = fileListElement.offsetWidth / visibleCount;
    fileListElement.scrollTo({
      left: scrollAmount * startIndex.value,
      behavior: 'smooth',
    });
  }
};
</script>
<template>
  <div class="file-list-wrapper">
    <!-- Left Navigation Button -->
    <img
      :src="LeftIcon"
      alt="Move Left"
      aria-label="Move Left"
      class="nav-icon"
      :class="{ disabled: !canMoveLeft }"
      @click="moveLeft"
    />

    <!-- File List -->
    <div class="file-list">
      <FileListItem
        v-for="(file, index) in visibleFiles"
        :key="index"
        :name="file.name"
        :type="file.type"
      />
    </div>

    <!-- Right Navigation Button -->
    <img
      :src="RightIcon"
      alt="Move Right"
      aria-label="Move Right"
      class="nav-icon"
      :class="{ disabled: !canMoveRight }"
      @click="moveRight"
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
  overflow: hidden; /* Hide excess files */
  padding: 5px 10px;
  border-radius: 5px;
  scroll-behavior: smooth; /* Smooth scrolling */
}

/* Navigation Icon Styling */
.nav-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  user-select: none;
}

/* Hide button but keep its space */
.nav-icon.disabled {
  visibility: hidden; /* Makes the icon invisible but keeps its layout */
  pointer-events: none; /* Prevent any interaction */
}
</style>

