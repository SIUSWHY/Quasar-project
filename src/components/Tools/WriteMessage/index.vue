<template>
  <q-layout>
    <q-header elevated style="background-color: #121212">
      <q-toolbar>
        <q-icon
          name="west"
          size="1.5em"
          @click="
            () => {
              goChatLayout();
            }
          "
        ></q-icon>
        <q-space></q-space>
        <div><strong>Write Message</strong></div>
        <q-space></q-space>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <UserList
        @click="goToChat(chat._id)"
        v-for="chat in $store.state.userList.users"
        :key="chat.name"
        v-bind="chat"
      />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
