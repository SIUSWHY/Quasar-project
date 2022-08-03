<template>
  <div>
    <q-chat-message
      :name="this.message.name"
      avatar="https://cdn.quasar.dev/img/avatar4.jpg"
      :text="text"
      :sent="true"
      stamp="7 minutes ago"
    ></q-chat-message>
  </div>
  <!-- <q-chat-message
          name="Jane"
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="['doing fine, how r you?']"
          stamp="4 minutes ago"
        ></q-chat-message> -->
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
