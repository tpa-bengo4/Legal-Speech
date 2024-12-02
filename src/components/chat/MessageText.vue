<template>
    <div>
        <div  class="message">
            <div class="msg-text" :class="message.side ==='right' ? 'right-msg' : 'left-msg'">
                <p>
                    {{ message.text || 'ファイルを送信しました。' }}
                </p>
                <span class="time" :class="message.side ==='right' ? 'right-time' : 'left-time' ">{{ message.timestamp }}</span>
            </div>    
        </div>
    </div>
    
</template>

<script setup lang="ts"> 
import type { Message } from '@/types';
const {message} = defineProps<{
    message: Message
}>()

</script>

<style lang="css" scoped>
.message {
  vertical-align: top;
}

.msg-text {
    padding: 8px;
    text-align: left;
    width: 60%;
    margin-top: 8px;
}

p {
  background: #efefef;
  border-radius: 10px;
  color: #646464;
  font-size: 16px;
  padding: 1rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 25%) 2px 5px 5px 2px;
}

.time {
    font-size: 12px;
    color: #777;
    margin-top: 8px;
}

.right-msg {
  float: right;
  margin-right: 48px;
}

.left-msg {
  float: left;
  margin-left: 16px;
}

.right-time {
  float: right;
}

.left-time {
  float: left;
}
</style>