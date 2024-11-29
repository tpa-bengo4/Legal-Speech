<template>
  <div class="user-profile">
    <UserAvatar />
    <h2>相手の名前</h2>
    <p>役員・法務事務所</p>
    <p>性別</p>
    <p>連絡先</p>
    <UserProfileDropdown
      icon-link="/src/assets/images/link-svgrepo-com.svg"
      text="リンク"
    />
    <UserProfileDropdown
      icon-link="/src/assets/images/file-svgrepo-com.svg"
      text="ファイル"
    />
    <UserProfileDropdown
      icon-link="/src/assets/images/image-svgrepo-com.svg"
      text="画像・ビデオ"
    />
  </div>
</template>

<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
import UserProfileDropdown from "./UserProfileDropdown.vue";
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
