<template>
    <div class="header">
            <img :src="BackIcon" class="img back-icon"/>
            <UserAvatar class="img user-icon"/>
            <h2> 名前 </h2>
        </div>
</template>

<script setup lang="ts">
import UserAvatar from "@/components/UserAvatar.vue"
import BackIcon from "@/assets/images/back-svgrepo-com.svg"
</script>

<style lang="css" scoped>
h2 {
  margin-left: 16px;
  font-weight: 600;
  color: black;
  font-size: 26px;
}

.header {
  background-color: #d0d0d0;
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