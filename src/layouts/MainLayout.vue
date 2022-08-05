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
            :to="link.link"
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
    link: '/chat_layout/settings',
  },
  {
    title: 'Favorites',
    icon: 'bookmark',
    link: '/chat_layout/settings',
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/chat_layout/settings',
  },
];
const chatList = [
  {
    name: 'Achilles',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Achilles.png'),
    link: '/chat_layout/chat/Achilles',
  },
  {
    name: 'Aphrodite',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Aphrodite.png'),
    link: '/chat_layout/chat/Aphrodite',
  },
  {
    name: 'Ares',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Ares.png'),
    link: '/chat_layout/chat/Ares',
  },
  {
    name: 'Artemis',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Artemis.png'),
    link: '/chat_layout/chat/Artemis',
  },
  {
    name: 'Athena',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Athena.png'),
    link: '/chat_layout/chat/Athena',
  },
  {
    name: 'Chaos',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Chaos.png'),
    link: '/chat_layout/chat/Chaos',
  },
  {
    name: 'Hades',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Hades.png'),
    link: '/chat_layout/chat/Hades',
  },
  {
    name: 'Hermes',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Hermes.png'),
    link: '/chat_layout/chat/Hermes',
  },
  {
    name: 'Megaera',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Megaera.png'),
    link: '/chat_layout/chat/Megaera',
  },
  {
    name: 'Nyx',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Nyx.png'),
    link: '/chat_layout/chat/Nyx',
  },
  {
    name: 'Poseidon',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Poseidon.png'),
    link: '/chat_layout/chat/Poseidon',
  },
  {
    name: 'Theseus',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Theseus.png'),
    link: '/chat_layout/chat/Theseus',
  },
  {
    name: 'Thanatos',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Thanatos.png'),
    link: '/chat_layout/chat/Thanatos',
  },
  {
    name: 'Zeus',
    caption: '21',
    time: '2',
    avatar: require('src/assets/avatars/FP_Zeus.png'),
    link: '/chat_layout/chat/Zeus',
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
