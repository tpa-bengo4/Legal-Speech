<template>
    <div>
        <div class="message">
            <div class="msg-text">
                <p>
                    Hi !! This is message from Riya . Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Non quas nemo eum, earum sunt, nobis
          similique quisquam eveniet pariatur commodi modi voluptatibus iusto
          omnis harum illum iste distinctio expedita illo!
                </p>
                <span class="time">12月1日</span>
            </div>    
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>

.msg-text {
    padding: 16px;
    display: inline-block;
    text-align: left;
    width: 60%;
}

p {
  background: #efefef;
  border-radius: 10px;
  color: #646464;
  font-size: 16px;
  padding: 1rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 25%) 2px 5px 5px 2px;
  overflow-wrap: break-word;
}

.time {
    font-size: 12px;
    color: #777;
    /* margin-top: 8px; */
}
</style>