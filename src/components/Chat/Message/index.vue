<template>
  <div>
    <div v-if="this.message.userId === $store.state.userList.currentUser?._id">
      <q-chat-message
        :text="this.message.messageText"
        bg-color="light-blue-9"
        :sent="true"
        :stamp="this.message.stamp"
        text-color="white"
      ></q-chat-message>
    </div>
    <div v-else>
      <q-chat-message
        text-color="white"
        bg-color="grey-9"
        :text="this.message.messageText"
        :sent="false"
        :stamp="this.message.stamp"
      ></q-chat-message>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
