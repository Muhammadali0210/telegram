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
            <div class="chat-tab" v-for="tab in navigations" :key="tab.key" @click="activetabfunction(tab.key)"
              :class="[{ active: tab.key == activeTab }]">
              <div class="tab-icon">
                <img :src="tab.img1" alt="personal" class="lite-icon">
                <img :src="tab.img2" alt="personal" class="dark-icon">
              </div>
              <div class="text-caption">{{ tab.name }}</div>
            </div>
          </div>
        </div>
        <div class="chat-main-content">
          <div class="chat-wrapper">
            <ChatUsersItem :activeTab="activeTab" />
            <ChatPage />
          </div>
        </div>
      </div>
    </q-page-container>
    <router-view />
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
  },
  data() {
    return {
      navigations: [
        {
          key: "all",
          name: "All",
          img1: "./src/assets/icons/all.svg",
          img2: "./src/assets/icons/all-dark.svg"
        },
        {
          key: "personal",
          name: "Personal",
          img1: "./src/assets/icons/personal1.svg",
          img2: "./src/assets/icons/personal2.svg"
        },
        {
          key: "group",
          name: "Group",
          img1: "./src/assets/icons/group1.svg",
          img2: "./src/assets/icons/group2.svg"
        },
        {
          key: "channel",
          name: "Channel",
          img1: "./src/assets/icons/personal1.svg",
          img2: "./src/assets/icons/personal2.svg"
        },
        {
          key: "bot",
          name: "Bot",
          img1: "./src/assets/icons/personal1.svg",
          img2: "./src/assets/icons/personal2.svg"
        },
      ],
      activeTab: "all"
    }
  },
  methods: {
    activetabfunction(e) {
      this.activeTab = e
    }
  },


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
        // border: 1px solid red;
        width: 70px;

        .text-caption {
          color: #222222;
          font-weight: 400;
        }

        .tab-icon {
          width: 24px;
          height: 24px;

          .dark-icon {
            display: none;
          }

          .lite-icon {
            display: block;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &.active {
          .dark-icon {
            display: block;
          }

          .lite-icon {
            display: none;
          }

          .text-caption {
            color: #222222;
            font-weight: 600;
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
  .page-content {
    position: relative;
    padding-top: 0;

    .chat-wrapper {
      height: 100vh;
      position: absolute;
      top: 0;
      background-color: #ffffff;
    }
  }
}</style>
