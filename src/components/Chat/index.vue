<template>
  <q-item style="background-color: #2e2e2e">
    <q-item-section side>
      <router-link to="/chat_layout">
        <q-icon name="west" size="1.5em" @click="toggleRightDrawer"></q-icon>
      </router-link>
    </q-item-section>
    <q-item-section side>
      <q-avatar :rounded="false" size="50px">
        <img src="../../assets/avatars/avatar.jpg" />
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
        <div style="width: 100%">
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
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
