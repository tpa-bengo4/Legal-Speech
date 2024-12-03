<template>
    <div class="header">
      <RouterLink :to="VIEW_CONFIG.CONSULTATION_LIST.path">
        <img :src="BackIcon" class="img back-icon"/>
      </RouterLink>
      <UserAvatar :source-avatar="user.image" :status="user.status" class="img user-icon" :width="'48px'" :height="'48px'"/>
      <h2> {{ user.name }} </h2>
    </div>
</template>

<script setup lang="ts">
import BackIcon from "@/assets/images/back-svgrepo-com.svg"
import UserAvatar from "../UserAvatar.vue";
import { VIEW_CONFIG } from "@/constants";

const user = defineProps<{
  name: string,
  image?: string,
  status: string
}>()
</script>

<style lang="css" scoped>
h2 {
  margin-left: 16px;
  font-weight: 600;
  color: black;
  font-size: 26px;
}

.header {
  background-color: #aaa;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.img {
  margin: 16px 8px 16px 8px;
  object-fit: cover;
}

.back-icon {
  width: 40px;
  height: 40px;
  margin-left: 16px;
  cursor: pointer;
}

.user-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}</style>