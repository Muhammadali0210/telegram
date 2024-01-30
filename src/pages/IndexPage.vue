<template>
  <div class="chat-wrapper">
    <ChatUsersItem />
    <ChatPage />
  </div>
</template>

<script>
import ChatPage from '../components/ChatPage.vue';
import ChatUsersItem from '../components/ChatUsersItem.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    ChatPage,
    ChatUsersItem
  }
})
</script>
<style>
.chat-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
}

@media (max-width: 798px) {
  .chat-wrapper {
    display: block;
    width: 100%;
  }
}
@media (max-width: 500px) {
  .chat-wrapper {
    height: 88vh;
    position: relative;
  }
}
</style>
