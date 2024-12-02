<script setup lang="ts">
import ConsultationListHeader from "@/components/consultation-list/ConsultationListHeader.vue";
import ConsultationListSearch from "@/components/consultation-list/ConsultationListSearch.vue";
import ConsultationListItem from "@/components/consultation-list/ConsultationListItem.vue";
import ConsultationListData from "@/assets/json/consultations-list.json";
import { Consultation, Message } from "@/types";
import { ref, Ref } from "vue";

const DEFAULT_LAST_MESSAGE: Message = {
  text: "",
  timestamp: "now",
  side: "right",
};

const DEFAULT_PHOTO_SOURCE = "@/assets/image/default-photo.svg";

const consultationList: Ref<Consultation[]> = ref(
  ConsultationListData.consultations,
);

const selectConsultation = (consultation: Consultation) => {
  console.log(consultation);
};

const handleSearch = (query: string) => {
  if (query.length === 0) {
    consultationList.value = ConsultationListData.consultations;
  } else {
    consultationList.value = consultationList.value.filter(
      (consultation) =>
        consultation.name.toLowerCase().includes(query.toLowerCase()), // 名前に検索文字列が含まれているか
    );
  }
};
</script>

<template>
  <div class="consultation-list-container">
    <!-- 相談リストヘッダセッション -->
    <ConsultationListHeader title="相談リスト" />
    <ConsultationListSearch @change="handleSearch" />
    <!-- 相談リストセッション -->
    <div v-if="consultationList.length > 0" class="consultation-list">
      <ConsultationListItem
        v-for="consultation in consultationList"
        :key="consultation.id"
        :name="consultation.name"
        :photoSource="consultation.profilePicture ?? DEFAULT_PHOTO_SOURCE"
        :lastMessage="consultation.lastMessage ?? DEFAULT_LAST_MESSAGE"
        :attachments="consultation.attachments"
        :status="consultation.status"
        @click="selectConsultation(consultation)"
      />
    </div>

    <!-- 相談のリストが空の場合 -->
    <p v-else class="empty-message">相談が見つかりません</p>
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
