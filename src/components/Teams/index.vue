<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-header elevated style="background-color: #121212">
        <q-toolbar>
          <q-icon name="west" size="1.5em" @click="goChatLayout"></q-icon>
          <q-space></q-space>
          <div>
            <strong>{{ $store.state.appData.currentTeam.teamName }}</strong>
          </div>
          <q-space></q-space>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-item class="link-container">
          <q-input
            class="link-input"
            readonly
            label="Your invite link"
            v-model="$store.state.appData.currentTeam.inviteLink"
            filled
            type="text"
          ></q-input>
          <!-- <q-item-section class="add-member-color"> {{ $store.state.appData.currentTeam.inviteLink }}</q-item-section> -->
          <q-item-section side>
            <q-icon name="qr_code" size="1.5em"></q-icon>
          </q-item-section>
          <q-item-section side @click="copyLink" class="copy">
            <q-icon name="content_copy" size="1.5em"></q-icon>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section side>
            <q-avatar size="50px"> <img :src="$store.state.appData.currentTeam.teamLogo" alt="avatar" /> </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-input filled v-model="name" label="Team name"></q-input>
          </q-item-section>
          <q-item-section side>
            <q-btn color="green" label="Save" @click="saveNewTeamName"></q-btn>
          </q-item-section>
        </q-item>
        <q-separator class="q-my-md" dark></q-separator>
        <div>
          <q-item v-for="user in $store.state.appData.users" :key="user._id">
            <q-item-section side>
              <q-avatar size="50px"> <img :src="user.avatar" alt="avatar" /> </q-avatar>
            </q-item-section>
            <q-item-section> {{ user.name }}</q-item-section>
            <q-item-section side>
              <q-icon name="delete" size="1.5em"></q-icon>
            </q-item-section>
          </q-item>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
