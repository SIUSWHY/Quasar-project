<template>
  <transition>
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
          <div>Create Group</div>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <UserList v-for="chat in $store.state.userList.users" :key="chat.name" v-bind="chat" />
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
