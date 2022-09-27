<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #121212">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-space />
        <q-tabs v-model="tab">
          <q-tab name="chats" label="Chats"></q-tab>
          <!-- <q-tab name="calls" label="Calls"></q-tab> -->
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
      <div v-if="tab === 'chats'">
        <transition appear enter-active-class="animated fadeInLeft">
          <q-pull-to-refresh @refresh="refreshUserList" bg-color="black">
            <div v-if="$store.state.userList.chats[0] !== undefined">
              <ChatComponentLayout
                v-for="newChat in $store.getters['userList/getChatsFromState']"
                :key="newChat._id"
                v-bind="newChat"
              />
            </div>
            <div v-else>
              <div v-for="skeleton in 5" :key="skeleton">
                <q-item clickable v-ripple>
                  <q-item-section side>
                    <q-skeleton type="QAvatar"></q-skeleton>
                  </q-item-section>
                  <q-item-section>
                    <q-skeleton type="text"></q-skeleton>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </q-pull-to-refresh>
        </transition>
      </div>
      <div v-else>
        <transition appear enter-active-class="animated fadeInRight">
          <div>
            <h6 style="justify-content: center; display: flex">NO CALLS !?!?!??!</h6>
            <img width="412" src="https://i.imgflip.com/64sz4u.png?a462000" alt="" />
          </div>
        </transition>
      </div>
    </q-page-container>
    <div :class="{ shadowBlock: true, shadowBlockOpen: toolsIsActive }"></div>
    <div v-if="tab === 'chats'">
      <transition appear enter-active-class="animated fadeIn">
        <q-page-sticky @click="togleTools" position="bottom-right" class="btn_z-index" :offset="[18, 18]">
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
      </transition>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserInfo from '../components/UserInfo/index.vue';
import ChatComponentLayout from './Chat/index.vue';
import { mapActions, mapGetters } from 'vuex';
import { socket } from 'src/SocketInstance';

const toolsIsActive = ref(false);
const rightDrawerOpen = ref(false);
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

export default defineComponent({
  name: 'MainLayout',

  components: {
    ChatComponentLayout,
    UserInfo,
  },
  async created() {
    await this.prepareData();
    await this.loadUsers();
    this.redireckToLayout();
    socket.connect();
  },

  unmounted() {
    socket.disconnect();
  },

  setup() {
    const leftDrawerOpen = ref(false);

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
  watch: {
    rightDrawerOpen() {
      this.redireckToLayout();
    },
  },
  methods: {
    ...mapActions('userList', {
      loadUsers: 'loadUsers',
      prepareData: 'prepareData',
    }),
    ...mapGetters('userList', {
      getChatsFromState: 'getChatsFromState',
      getCurrentUser: 'getCurrentUser',
    }),

    redireckToLayout() {
      if (rightDrawerOpen.value === false) {
        this.$router.push({ path: '/chat_layout' });
      }
    },
    writeMessage() {
      this.toggleRightDrawer();
      // this.$router.push({ path: 'chat_layout/write_message' });
    },

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
