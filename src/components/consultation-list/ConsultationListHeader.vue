<script setup lang="ts">
interface Props {
  title: string;
}

const { title = "相談リスト" } = defineProps<Props>();
</script>
<template>
  <div class="title-container">
    <p class="title">{{ title }}</p>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}
.title {
  font-size: 24px;
  font-weight: 800;
  align-self: flex-start;
  color: #000;
}
</style>
