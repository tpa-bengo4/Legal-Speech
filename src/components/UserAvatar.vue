<template>
  <div class="photo-container">
      <img
        class="partner-photo"
        :src=" sourceAvatar!== null ? sourceAvatar : '@/assets/images/user-image.png'"
        :style="{ width: width, height: height }"
        alt="partner photo"
        aria-label="partner photo"
      />

      <!-- <div v-if="status === 'オンライン'" class="status-dot"></div> -->
  </div>
</template>

<script setup lang="ts">

const {sourceAvatar} = defineProps<{
  sourceAvatar?: string,
  status: string,
  width: string,
  height: string
}>()
</script>

<style lang="css" scoped>
img {
  border-radius: 50%;
}

.photo-container {
  position: relative;
}

.partner-photo {
  border-radius: 50%;
  border: 1px solid #ccc;
}

.status-dot {
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #02c42f;
  border-radius: 50%;
}

</style>
