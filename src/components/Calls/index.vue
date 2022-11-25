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
          <div><strong>Select Contact</strong></div>
          <q-space></q-space>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <Contact v-for="contact in $store.getters['appData/getUsers']" :key="contact._id" v-bind="contact" />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
