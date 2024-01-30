<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen" above-if-show bordered>
      <h4>Settings page</h4>
    </q-drawer>

    <q-page-container>
      <div class="page-content">
        <div class="navigation-bar">
          <div class="setting-btn">
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          </div>
          <div class="bar-content">
            <div class="chat-tab">
              <div class="tab-icon">
                <img src="../assets/icons/all.svg" alt="personal">
              </div>
              <div class="text-caption">All</div>
            </div>
            <div class="chat-tab">
              <div class="tab-icon">
                <img src="../assets/icons/personal1.svg" alt="personal">
              </div>
              <div class="text-caption">Personal</div>
            </div>
            <div class="chat-tab">
              <div class="tab-icon">
                <img src="../assets/icons/group1.svg" alt="personal">
              </div>
              <div class="text-caption">Group</div>
            </div>
            <div class="chat-tab">
              <div class="tab-icon">
                <img src="../assets/icons/personal1.svg" alt="personal">
              </div>
              <div class="text-caption">Chanel</div>
            </div>
            <div class="chat-tab">
              <div class="tab-icon">
                <img src="../assets/icons/group1.svg" alt="personal">
              </div>
              <div class="text-caption">Bot</div>
            </div>
          </div>
        </div>
        <div class="chat-main-content">
          <!-- <router-view /> -->
          <div class="chat-wrapper">
            <ChatUsersItem />
            <ChatPage />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ChatPage from 'src/components/ChatPage.vue'
import ChatUsersItem from 'src/components/ChatUsersItem.vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      tab: ref('mails')
    }
  },
  components: {
    ChatUsersItem,
    ChatPage
  }


})
</script>
<style lang="scss">
.page-content {
  display: flex;

  .navigation-bar {
    .setting-btn {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    border-right: 1px solid #E1E5EA;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh;
    background-color: #809ffc;
    z-index: 1;
    min-height: 600px;

    .bar-content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 8px;

      .chat-tab {
        cursor: pointer;
        display: block;
        padding: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .tab-icon {
          width: 24px;
          height: 24px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  .chat-main-content {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .page-content {
    flex-direction: column;
    height: 100vh;
    position: relative;
    // border: 1px solid black;

    .navigation-bar {
      z-index: 1;
      .setting-btn {
        height: 50px;
        width: 50px;
        // border: 1px solid red;
      }

      border-right: 0px solid #E1E5EA;
      flex-direction: column;
      justify-content: end;
      align-items: flex-start;
      height: 110px;
      min-height: 110px;
      // border: 1px solid red;

      .bar-content {
        flex-direction: row;
        justify-content: space-around;
        gap: 0px;
        padding: 0px;
        // border: 1px solid red;
        width: 100%;

        .chat-tab {
          padding: 4px;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          // border: 1px solid red;
          .tab-icon {
            width: 20px;
            height: 20px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}


// --------------------
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
  .page-content{
    position: relative;
    padding-top: 0;
    .chat-wrapper {
      height: 100vh;
      position: absolute;
      top: 0;
      background-color: #ffffff;
    }
  }
}
</style>
