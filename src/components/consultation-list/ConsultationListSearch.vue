<script setup lang="ts">
import { ref } from "vue";

// 検索クエリを保存するための変数
const searchQuery = ref("");

// 親コンポーネントに 'change' イベントを発火させるための emit 定義
const emit = defineEmits<{
  (e: 'change', query: string): void
}>()

// 検索クエリが変更された時に呼ばれる関数
const handleSearchQueryChange = () => {
    emit('change', searchQuery.value);
}

</script>

<template>
  <div class="consultation-list-search-container">
    <!-- 検索バーの入力フィールド -->
    <label class="search-label">検索: </label>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="相手名..."
      class="search-input"
      aria-label="Search by partner name"
      aria-required="false"
      @change="handleSearchQueryChange"
    />
  </div>
</template>

<style scoped>
.consultation-list-search-container {
  display: flex;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  align-items: center;
  gap: 20px;
}

.search-input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: #fff;
  color: #000;
  flex-grow: 1;
}

.search-label {
    color: #000;
}

.search-results {
  font-size: 14px;
}

.search-results p {
  color: #555;
}
</style>
