<script setup lang="ts">
import ConsultationList from "@/components/consultation-list/ConsultationList.vue";
</script>
<template>
  <div class="consultation-list-screen">
    <div class="screen-header">
      <img width="100" height="70" src="@/assets/image/logo.png" />
      <p class="screen-title">Legal Speech</p>
    </div>
    <ConsultationList />
  </div>
</template>
<style scoped>
.consultation-list-screen {
  width: 90vw;
  height: 90vh;
  padding: 5px 10px;
}

.screen-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  margin-bottom: 5px;
}

.screen-title {
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 1px;
  margin: 0;
  color: #000;
}
</style>
