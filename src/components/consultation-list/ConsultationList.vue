<script setup lang="ts">
import ConsultationListHeader from "@/components/consultation-list/ConsultationListHeader.vue";
import ConsultationListItem from "@/components/consultation-list/ConsultationListItem.vue";
import ConsultationListData from "@/assets/json/consultations-list.json";
import { Consultation } from "@/types";

const consultationList : Consultation[] = [];

const selectConsultation = (consultation: Consultation) => {
  console.log(consultation);
};
</script>

<template>
  <div class="consultation-list-container">
    <!-- 相談リストヘッダセッション -->
    <ConsultationListHeader title="相談リスト" />

    <!-- 相談リストセッション -->
    <div v-if="consultationList.length > 0" class="consultation-list">
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

    <!-- 相談のリストが空の場合 -->
    <p v-else class="empty-message">相談リストがありません。</p>
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

.consultation-list {
  height: 80vh;
  overflow: scroll;
}

.empty-message {
  font-size: 30px;
  font-weight: 700;
  color: red;
}
</style>
