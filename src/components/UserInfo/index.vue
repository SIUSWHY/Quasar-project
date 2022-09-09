<template>
  <q-avatar square size="300px">
    <img :src="require('../../assets/avatars/' + currentUserAvatar)" alt="avatar" />
  </q-avatar>
  <q-list>
    <strong>
      <UserActions
        @click="toggleRightDrawer"
        :to="link.link"
        v-for="link in userActions"
        :key="link.title"
        v-bind="link"
      />
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
