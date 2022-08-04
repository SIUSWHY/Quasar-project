<template>
  <q-item style="background-color: #2e2e2e; position: absolute; z-index: 1; width: 100%">
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
  <q-item style="padding-top: 66px; padding-bottom: 50px">
    <div id="q-app">
      <div class="q-pa-md row justify-center">
        <div style="width: 100%; heiht: auto">
          <!-- <q-chat-message label="Sunday, 19th"></q-chat-message> -->
          <MessageComponent
            v-for="message in messages"
            :key="message.id"
            v-bind="message"
            :message="message"
          />
        </div>
      </div>
    </div>
  </q-item>
  <q-footer style="background-color: #1d1d1d">
    <q-item>
      <q-item-section side>
        <q-icon size="1.7em" name="sentiment_very_satisfied"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-input placeholder="Placeholder"></q-input>
      </q-item-section>
      <q-item-section side>
        <q-icon size="1.7em" name="send"></q-icon>
      </q-item-section>
    </q-item>
  </q-footer>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
