<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-avatar square size="300px">
        <img src="../assets/avatars/avatar.jpg" alt="avatar" />
      </q-avatar>
      <q-list>
        <strong>
          <EssentialLink
            @click="toggleRightDrawer"
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </strong>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" :width="width" side="right">
      <router-view></router-view>
      <q-item>
        <q-item-section side>
          <q-icon name="west" size="1.5em" @click="toggleRightDrawer"></q-icon>
        </q-item-section>
        <q-item-section side>
          <q-avatar :rounded="false" size="50px">
            <img src="../assets/avatars/avatar.jpg" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Ares</q-item-label>
          <q-item-label caption>online</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="more_vert" size="1.5em"></q-icon>
        </q-item-section>
      </q-item>
      <q-item>
        <div id="q-app">
          <div class="q-pa-md row justify-center">
            <div style="width: 100%; max-width: 400px">
              <q-chat-message label="Sunday, 19th"></q-chat-message>

              <q-chat-message
                name="me"
                avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                :text="['hey, how are you?']"
                sent
                stamp="7 minutes ago"
              ></q-chat-message>
              <q-chat-message
                name="Jane"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                :text="['doing fine, how r you?']"
                stamp="4 minutes ago"
              ></q-chat-message>
            </div>
          </div>
        </div>
      </q-item>
      <!-- <q-item>
        <div id="q-app">
          <div class="q-pa-md">
            <div class="q-gutter-y-md column">
              <q-input bottom-slots v-model="text" label="Label" :dense="dense">
                <template v-slot:before>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                  </q-avatar>
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </q-item> -->
    </q-drawer>

    <q-page-container>
      <ChatList @click="toggleRightDrawer" v-for="chat in chats" :key="chat.name" v-bind="chat" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import ChatList from 'components/ChatsList/index.vue';

const linksList = [
  {
    title: 'Contacts',
    icon: 'perm_contact_calendar',
  },
  {
    title: 'Favorites',
    icon: 'bookmark',
  },
  {
    title: 'Settings',
    icon: 'settings',
  },
];
const chatList = [
  {
    name: 'Ares',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Ares.png'),
  },
  {
    name: 'Ares1',
    caption: '2',
    time: '37',
    avatar: require('src/assets/avatars/FP_Ares.png'),
  },
  {
    name: 'Ares2',
    caption: '5',
    time: '51',
    avatar: require('src/assets/avatars/FP_Ares.png'),
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    ChatList,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    return {
      essentialLinks: linksList,
      chats: chatList,
      leftDrawerOpen,
      width,
      rightDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
