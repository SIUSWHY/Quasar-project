<template>
  <q-item style="background-color: #2e2e2e; position: absolute; z-index: 1; width: 100%">
    <q-item-section side>
      <q-icon
        name="west"
        size="1.5em"
        @click="
          () => {
            goChatLayout();
          }
        "
      ></q-icon>
    </q-item-section>
    <q-item-section side>
      <div>
        <div v-if="$store.getters['chatData/getCompanion'].avatar">
          <q-avatar :rounded="false" size="50px">
            <img :src="require('src/assets/avatars/' + $store.getters['chatData/getCompanion'].avatar)" />
          </q-avatar>
        </div>
        <div v-else>
          <q-skeleton type="QAvatar"></q-skeleton>
        </div>
      </div>
    </q-item-section>
    <q-item-section>
      <div>
        <div v-if="$store.getters['chatData/getCompanion']?.name">
          <q-item-label>{{ $store.getters['chatData/getCompanion']?.name }}</q-item-label>
        </div>
        <div v-else>
          <q-skeleton type="text"></q-skeleton>
        </div>
      </div>
      <q-item-label caption>online</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon name="more_vert" size="1.5em"></q-icon>
    </q-item-section>
  </q-item>
  <q-item style="padding-top: 66px; padding-bottom: 50px">
    <div id="q-app">
      <div class="q-pa-md correct-padding row justify-center">
        <div class="test" style="width: 100%; heiht: auto">
          <!-- <q-chat-message label="Sunday, 19th"></q-chat-message> -->
          <MessageComponent
            v-for="message in $store.getters['chatData/getMessages']"
            :key="message.stamp"
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
        <q-input v-model="messageText" placeholder="Placeholder" ref="textInput"></q-input>
      </q-item-section>
      <q-item-section side>
        <q-icon size="1.7em" @click="postMessage()" name="send"></q-icon>
      </q-item-section>
    </q-item>
  </q-footer>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
