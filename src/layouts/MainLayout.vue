<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      above-if-show
      bordered
    >
      <h4>Settings page</h4>
    </q-drawer>

    <q-page-container>
      <div class="page-content">
        <div class="navigation-bar">
          <div class="setting-btn">
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />
          </div>
          <div class="bar-content">
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
          </div>
        </div>
        <div class="chat-main-content">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      tab: ref('mails')
    }
  }
})
</script>
<style lang="scss">
.page-content{
  display: flex;
  .setting-btn{
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navigation-bar{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh;
    background-color: #d5d5d5;
    .bar-content{
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 8px;
      .chat-tab{
        cursor: pointer;
        display: block;
        padding: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
