<script setup lang="ts">
import ConsultationListFilter from "@/components/consultation-list/ConsultationListFilter.vue";
import ConsultationListItem from "@/components/consultation-list/ConsultationListItem.vue";
import ConsultationListData from "@/assets/json/consultations-list.json";

const consultationList = ConsultationListData.consultations;
</script>

<template>
  <div class="consultation-list">
    <ConsultationListItem
      v-for="consultation in consultationList"
      :key="consultation.id"
      :name="consultation.name"
      :photoSource="consultation.profilePicture"
      :lastMessage="consultation.lastMessage"
      :attachments="consultation.attachments"
      :status="consultation.status"
    />
  </div>
</template>
<style scoped>
.consultation-list {
  height: 80vh;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  overflow: scroll;
}
</style>
