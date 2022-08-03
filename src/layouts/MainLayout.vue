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
    </q-drawer>

    <q-page-container>
      <ChatList
        @click="toggleRightDrawer"
        :to="chat.link"
        v-for="chat in chats"
        :key="chat.name"
        v-bind="chat"
      />
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
    link: '/settings',
  },
  {
    title: 'Favorites',
    icon: 'bookmark',
    link: '/settings',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings',
  },
];
const chatList = [
  {
    name: 'Ares',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Ares.png'),
    link: '/chat_layout/chat',
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
        setTimeout(() => {
          rightDrawerOpen.value = !rightDrawerOpen.value;
        }, 10);
      },
    };
  },
});
</script>
