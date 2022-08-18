<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #121212">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-space />
        <q-tabs v-model="tab">
          <q-tab name="chats" label="Chats"></q-tab>
          <q-tab name="test" label="Test"></q-tab>
        </q-tabs>
        <q-space />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <UserInfo />
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" :width="width" side="right">
      <router-view></router-view>
    </q-drawer>

    <q-page-container style="padding-top: 50px">
      <q-pull-to-refresh @refresh="refreshUserList" bg-color="black">
        <ChatList
          @click="toggleRightDrawer"
          :to="'/chat_layout/chat/' + chat._id"
          v-for="chat in $store.state.userList.users"
          :key="chat._id"
          v-bind="chat"
        />
      </q-pull-to-refresh>
    </q-page-container>
    <div :class="{ shadowBlock: true, shadowBlockOpen: toolsIsActive }"></div>
    <q-page-sticky
      @click="togleTools"
      position="bottom-right"
      class="btn_z-index"
      :offset="[18, 18]"
    >
      <q-fab icon="edit" direction="up" color="blue">
        <q-fab-action
          @click="toggleRightDrawer()"
          label="Create secret chat"
          external-label
          color="green-6"
          label-position="left"
          icon="lock"
        ></q-fab-action>
        <q-fab-action
          @click="writeMessage()"
          to="/chat_layout/write_message"
          label="Write message"
          external-label
          color="red-5"
          label-position="left"
          icon="person"
        ></q-fab-action>
        <q-fab-action
          @click="toggleRightDrawer()"
          label="Create group"
          to="/chat_layout/create_group"
          external-label
          color="orange-6"
          label-position="left"
          icon="people"
        ></q-fab-action>
      </q-fab>
    </q-page-sticky>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ChatList from 'components/ChatsList/index.vue';
import UserInfo from '../components/UserInfo/index.vue';
import { mapActions } from 'vuex';

const toolsIsActive = ref(false);

export default defineComponent({
  name: 'MainLayout',

  components: {
    ChatList,
    UserInfo,
  },
  async created() {
    await this.loadUsers();
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    return {
      toolsIsActive,
      leftDrawerOpen,
      width,
      rightDrawerOpen,
      tab: ref('chats'),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleRightDrawer() {
        setTimeout(() => {
          rightDrawerOpen.value = !rightDrawerOpen.value;
        }, 10);
      },
    };
  },
  methods: {
    writeMessage() {
      this.toggleRightDrawer();
      // this.$router.push({ path: 'chat_layout/write_message' });
    },
    ...mapActions('userList', {
      loadUsers: 'loadUsers',
    }),
    async refreshUserList(done: () => void) {
      setTimeout(() => {
        this.loadUsers();
        done();
      }, 1000);
    },
    togleTools() {
      toolsIsActive.value = !toolsIsActive.value;
    },
  },
});
</script>

<style lang="scss" scoped>
.shadowBlock {
  opacity: 0;
  width: 0;
  background-color: black;
  transition: opacity 0.25s;
  position: fixed;
  height: 100vh;
  z-index: 2002;
  top: 0;
}
.shadowBlockOpen {
  opacity: 0.5;
  width: 100vw;
}
.btn_z-index {
  z-index: 2002;
}
::v-deep {
  .q-drawer__opener.fixed-right {
    display: none;
  }
}
</style>
