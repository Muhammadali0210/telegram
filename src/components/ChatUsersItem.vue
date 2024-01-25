<template>
    <div class="user-item-wrap">
        <div class="search-content">
            <input type="text" v-model="chatsearchvalue" class="chat-search">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            chatsearchvalue: ""
        }
    },
}
</script>
<style lang="scss">
.user-item-wrap{
    width: 360px;
    height: 100vh;
    background-color: #fffeee;
    .search-content{
        width: 100%;
        padding: 20px 16px;
        .chat-search{
            border: 1px solid #E0E5E8;
        }
    }
}
</style>