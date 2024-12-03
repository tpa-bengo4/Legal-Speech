<template>
  <div class="user-profile">
    <UserAvatar :source-avatar="user.profilePicture" :status="user.status" :height="'200px'" :width="'200px'"/>
    <h2>{{ user.name }}</h2>
    <p>役員・法務事務所</p>
    <p>性別</p>
    <p>連絡先</p>
    <UserProfileDropdown
      :icon-link="linkIcon"
      text="リンク"
    />
    <UserProfileDropdown
      :icon-link="fileIcon"
      text="ファイル"
    />
    <UserProfileDropdown
      :icon-link="mediaIcon"
      text="画像・ビデオ"
    />
  </div>
</template>

<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
import UserProfileDropdown from "./UserProfileDropdown.vue";
import linkIcon from "@/assets/images/link-svgrepo-com.svg"
import fileIcon from "@/assets/images/file-svgrepo-com.svg"
import mediaIcon from "@/assets/images/image-svgrepo-com.svg"
import { Consultation } from "@/types";

const {user} = defineProps<{
  user: Consultation
}>()

</script>

<style lang="css" scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem;
}

.user-profile h2 {
  font-size: 32px;
}

.user-profile p {
  font-size: 24px;
}
</style>
