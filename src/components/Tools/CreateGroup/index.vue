<template>
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
        <div class="chip-position">
          <div v-for="chip in $store.state.userList.selectedUsers" :key="chip._id">
            <q-chip>
              <q-avatar size="21px">
                <img :src="require('src/assets/avatars/' + chip.avatar)" />
              </q-avatar>
              {{ chip.name }}
            </q-chip>
          </div>
        </div>
        <q-space></q-space>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <UserComponent v-for="chat in $store.state.userList.users" :key="chat.name" v-bind="chat" />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
