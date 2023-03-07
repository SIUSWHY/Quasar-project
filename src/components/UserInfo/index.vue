<template>
  <div>
    <div v-if="$store.getters['appData/getCurrentUser'].avatar">
      <q-avatar square size="300px">
        <img :src="$store.getters['appData/getCurrentUser'].avatar" alt="avatar" />
      </q-avatar>
    </div>
    <div v-else>
      <q-skeleton size="300px" type="QAvatar"></q-skeleton>
    </div>
  </div>
  <q-list>
    <strong @click="goTo('settings/main')">
      <q-item clickable>
        <q-item-section avatar side>
          <q-icon name="settings" color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ $t('user_info.settings') }}</q-item-label>
        </q-item-section>
      </q-item>
    </strong>
    <strong
      v-if="$store.state.appData.currentTeam.admin === $store.state.appData.currentUser._id"
      @click="goTo('teams')"
    >
      <q-item clickable>
        <q-item-section avatar side>
          <q-icon name="dns" color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ $t('user_info.teams') }}</q-item-label>
        </q-item-section>
      </q-item>
    </strong>
    <strong>
      <q-item>
        <q-item-section avatar side>
          <q-icon name="dark_mode" color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ $t('user_info.dark_mode') }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-toggle v-model="darkModeStatus"></q-toggle>
        </q-item-section>
      </q-item>
    </strong>
  </q-list>
  <div class="version">v.{{ version }}</div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
