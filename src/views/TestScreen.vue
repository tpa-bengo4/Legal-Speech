<template>
  <div class="container">
    <button @click="startRecord">startRecord</button>
    <button @click="stopRecord">stopRecord</button>
  </div>
</template>

<script setup lang="ts">
import { startRecord, stopRecord } from "@/utils/recordText";
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

button {
  padding: 10px;
}
</style>
