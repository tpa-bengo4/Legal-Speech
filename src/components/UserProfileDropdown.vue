<template>
  <div class="dropdown">
    <div class="title">
      <img :src="iconLink" />
      <p>{{ text }}</p>
    </div>
    <img src="/src/assets/images/arrow-down-338-svgrepo-com.svg" />
  </div>
</template>

<script setup lang="ts">
const { iconLink, text } = defineProps<{
  iconLink: string;
  text: string;
}>();

</script>

<style lang="css" scoped>
.dropdown {
  width: 401px;
  height: 62px;
  background-color: #c1c1c1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  gap: 5px;
}

.dropdown img {
  width: 36px;
  height: 36px;
  background-color: transparent;
}

.dropdown p {
  font-size: 24px;
  font-weight: 800;
}

.title {
  display: flex;
  align-items: center;
}
</style>
