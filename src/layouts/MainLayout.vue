<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-avatar square size="300px">
        <img src="../assets/avatars/avatar.jpg" alt="avatar" />
      </q-avatar>
      <q-list>
        <strong>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </strong>
      </q-list>
    </q-drawer>
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <q-list>
        <q-icon name="west" size="2em" @click="toggleRightDrawer"></q-icon>
        <q-avatar rounded size="50px">
          <img :src="avatar" />
        </q-avatar>
      </q-list>
    </q-drawer>

    <q-page-container>
      <ChatList v-for="chat in chats" :key="chat.name" v-bind="chat" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import ChatList from 'components/Chats/index.vue';

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

    return {
      essentialLinks: linksList,
      chats: chatList,
      leftDrawerOpen,
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
