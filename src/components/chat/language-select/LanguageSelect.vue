<script setup lang="ts">
// 検索クエリを保存するための変数

const emit = defineEmits<{
  (e: "translate", language: string): void;
}>();

const handleTranslate = (event) => {
  emit("translate", event.target.value);
};
</script>
<template>
  <div class="language-select-container">
    <label for="language-select">translate to </label>
    <select name="languages" id="language-select" @change="handleTranslate">
      <option value="japanese">日本語</option>
      <option value="english">English</option>
      <option value="france">France</option>
      <option value="vietnamese">Tiếng Việt</option>
    </select>
  </div>
</template>
<style scoped>
.language-select-container {
  margin-left: 40px;
}
#language-select {
  border-radius: 2px;
  margin-left: 5px;
}
</style>
