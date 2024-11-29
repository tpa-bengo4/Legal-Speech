<template>
  <div class="user-profile">
    <UserAvatar />
    <h2>相手の名前</h2>
    <p>役員・法務事務所</p>
    <p>性別</p>
    <p>連絡先</p>
  </div>
</template>

<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
</script>

<style lang="css" scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.user-profile h2 {
  font-size: 32px;
}

.user-profile p {
  font-size: 24px;
}
</style>
