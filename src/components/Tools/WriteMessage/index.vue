<template>
  <div>
    <q-layout view="lHh Lpr lFf">
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
        <UserList v-for="user in $store.state.appData.users" @click="createChat(user)" :key="user._id" v-bind="user" />
      </q-page-container>
      <!-- <MessageModal v-model="isMessageModalOpen" @close-modal="isMessageModalOpen = $event" /> -->
    </q-layout>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
