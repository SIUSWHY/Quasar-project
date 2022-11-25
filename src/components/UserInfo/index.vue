<template>
  <div>
    <div v-if="$store.getters['appData/getCurrentUser'].avatar">
      <q-avatar square size="300px">
        <img :src=" $store.getters['appData/getCurrentUser'].avatar" alt="avatar" />
      </q-avatar>
    </div>
    <div v-else>
      <q-skeleton size="300px" type="QAvatar"></q-skeleton>
    </div>
  </div>
  <q-list>
    <strong>
      <UserActions v-for="link in userActions" :key="link.title" v-bind="link" />
    </strong>
    <strong>
      <q-item>
        <q-item-section avatar side>
          <q-icon name="dark_mode" color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Dark mode</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-toggle v-model="darkModeStatus"></q-toggle>
        </q-item-section>
      </q-item>
    </strong>
  </q-list>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
