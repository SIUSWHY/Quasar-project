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
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div v-if="$store.state.userList.selectedUsers[0] !== undefined" class="container-widht">
            <div class="chip-position">
              <div v-for="chip in $store.state.userList.selectedUsers" :key="chip._id">
                <transition appear enter-active-class="animated fadeInDown" leave-active-class="animated fadeInDown">
                  <q-chip clickable @click="clickToChouseChat(chip)">
                    <q-avatar size="21px">
                      <img :src="require('src/assets/avatars/' + chip.avatar)" />
                    </q-avatar>
                    {{ chip.name }}
                  </q-chip>
                </transition>
              </div>
            </div>
            <div style="float: right; padding-top: 10px; height: 30px">
              <div style="position: absolute; z-index: 2000; margin-left: -50px">
                <q-btn round color="primary" @click="createGroupChat()" icon="east"></q-btn>
              </div>
            </div>
          </div>
        </transition>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <UserComponent v-for="chat in $store.state.userList.users" :key="chat.name" v-bind="chat" />
    </q-page-container>
    <CreateGroupModal
      v-model="isCreateGroupModalOpen"
      :users="$store.state.userList.selectedUsers"
      @close-modal="isCreateGroupModalOpen = $event"
    />
  </q-layout>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
