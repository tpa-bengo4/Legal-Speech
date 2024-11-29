<template>
    <div id="chat-frame">
        <div id="chat-header">
            <img src="../../assets/img/back.png" class="img back-icon"/>
            <img src="../../assets/img/user.png" class="img user-icon" />
            <h2> 名前 </h2>
        </div>
        <div class="chat-body">

        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="css">
#chat-frame {
    background-color: antiquewhite;
    width: 60vh;
    width: 100vh;
}

#chat-header {
    display: flex;
    background-color: #D9D9D9;
    border-radius: 5px;
    padding: 8px;
    align-items: center;
}

h2 {
    margin: 0;
}

.img {
    vertical-align: middle;
    margin-left: 8px;
    margin-right: 8px;
}

.back-icon {
    width: 40px;
    height: 40px;
}

.user-icon {
    width: 64px;
    height: 64px;
}

</style>