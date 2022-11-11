<template>
  <div>
    <q-item
      clickable
      v-ripple
      @click="
        () => {
          pushCompanionData();
          getRoomId();
        }
      "
    >
      <q-item-section side>
        <q-avatar class="custom-border round-avatar" size="50px">
          <img :src="require('src/assets/avatars/' + room_img)" alt="pic" />
          <div v-if="chatType === 'double' && isOnline === true">
            <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
              <q-badge class="q-badge-position" rounded floating color="green"></q-badge>
            </transition>
          </div>
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ room_name }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <div v-if="unreadMessagesCount >= 1">
          <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <q-badge rounded color="primary" :label="unreadMessagesCount"></q-badge>
          </transition>
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
