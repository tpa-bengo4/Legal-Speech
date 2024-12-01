<script setup lang="ts">
import ConsultationListFilter from "@/components/consultation-list/ConsultationListFilter.vue";
import ConsultationListItem from "@/components/consultation-list/ConsultationListItem.vue";
import ConsultationListData from "@/assets/json/consultations-list.json";
import { Consultation } from "@/types";

const consultationList = ConsultationListData.consultations;

const selectConsultation = (consultation: Consultation) => {
  console.log(consultation);
};
</script>

<template>
  <div class="consultation-list-container">
    <div class="title-container">
      <p class="title">相談リスト</p>
    </div>
    <div class="consultation-list">
      <ConsultationListItem
        v-for="consultation in consultationList"
        :key="consultation.id"
        :name="consultation.name"
        :photoSource="consultation.profilePicture"
        :lastMessage="consultation.lastMessage"
        :attachments="consultation.attachments"
        :status="consultation.status"
        @click="selectConsultation(consultation)"
      />
    </div>
  </div>
</template>
<style scoped>
.consultation-list-container {
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.title-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
  padding: 10px;
}
.title {
  font-size: 24px;
  font-weight: 800;
  align-self: flex-start;
  color: #000;
}

.consultation-list {
  height: 80vh;
  overflow: scroll;
}
</style>
