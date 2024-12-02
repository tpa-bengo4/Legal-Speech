<script setup lang="ts">
import { SCREEN_HEADER_LOGO } from "@/constants";

const { HEIGHT: height, WIDTH: width } = SCREEN_HEADER_LOGO;
</script>
<template>
  <div class="screen-header">
    <img
      class="app-logo"
      :width="width"
      :height="height"
      src="@/assets/image/logo.png"
      alt="app logo"
      aria-label="app logo"
    />
    <div class="app-brand">
      <p class="app-name">リーガルスピーチ</p>
      <p class="app-slogan">迅速な相談で、より多くの問題を解決</p>
    </div>
  </div>
</template>
<style scoped>
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

.app-brand {
  display: flex;
  flex-direction: column;
  color: #000;
}

.app-name {
  font-size: 27px;
  font-weight: 900;
}

.app-slogan {
  font-size: 12px;
}
</style>
