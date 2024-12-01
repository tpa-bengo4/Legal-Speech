<script setup lang="ts">
import ScreenHeader from "@/components/screen-header/ScreenHeader.vue";
import ConsultationList from "@/components/consultation-list/ConsultationList.vue";
</script>
<template>
  <div class="consultation-list-screen">
    <ScreenHeader />
    <ConsultationList />
  </div>
</template>
<style scoped>
.consultation-list-screen {
  width: 95vw;
  height: 95vh;
  padding: 5px 10px;
}
</style>
