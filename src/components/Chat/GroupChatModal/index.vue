<template>
  <q-dialog persistent maximized transition-show="slide-down" transition-hide="slide-up" style="background: #1d1d1d">
    <div>
      <q-item style="background-color: #2e2e2e; position: absolute; z-index: 1; height: 60px; width: 100%">
        <q-item-section side>
          <q-icon name="west" @click="$emit('close-modal', false)" size="1.5em"></q-icon>
        </q-item-section>
        <q-item-section side>
          <div>
            <div v-if="$store.getters['appData/getCurrentChat'].room_img">
              <q-avatar :rounded="false" size="50px">
                <img
                  :src="$store.getters['appData/getCurrentChat'].room_img"
                  alt="avatar"
                  @click="
                    () => {
                      $store.getters['appData/getCurrentUser']._id === chat.adminUserId ? changeGroupImage() : '';
                    }
                  "
                />
                <q-badge
                  v-if="$store.getters['appData/getCurrentUser']._id === chat.adminUserId"
                  class="q-badge-position"
                  rounded
                  floating
                  color="blue"
                >
                  <q-icon name="edit" color="white"></q-icon>
                </q-badge>
              </q-avatar>
            </div>
            <div v-else>
              <q-skeleton type="QAvatar"></q-skeleton>
            </div>
          </div>
        </q-item-section>
        <q-item-section @click="changeGroupName">
          <div>
            <div v-if="$store.getters['chatData/getCompanion']?.name">
              <q-item-label>{{ $store.getters['chatData/getCompanion']?.name }}</q-item-label>
            </div>
            <div v-else>
              <q-skeleton type="text"></q-skeleton>
            </div>
          </div>
          <q-item-label caption>{{ countOfMembers }} members</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="more_vert" size="1.5em"></q-icon>
        </q-item-section>
      </q-item>
      <q-item style="padding-top: 68px">
        <q-item-section> Notification</q-item-section>
        <q-item-section side> <q-toggle v-model="isNotify"></q-toggle> </q-item-section>
      </q-item>
      <div>
        <q-item>
          <q-item-section side>
            <q-icon name="person_add" color="primary" size="1.5em"></q-icon>
          </q-item-section>
          <q-item-section class="add-member-color"> Add Member</q-item-section>
        </q-item>
        <q-item v-for="user in chat.users_id" :key="user._id">
          <q-item-section side>
            <q-avatar size="50px"> <img :src="user.avatar" alt="avatar" /> </q-avatar>
          </q-item-section>
          <q-item-section> {{ user.name }}</q-item-section>
          <q-item-section class="chat-owner" side v-if="user._id === chat.adminUserId">
            owner
            <q-icon name="verified" size="1.5em"></q-icon>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-dialog>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
