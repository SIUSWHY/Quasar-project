<template>
  <div>
    <q-card>
      <div class="header-bg-color">
        <q-item>
          <q-item-section>
            <q-icon
              name="west"
              @click="
                () => {
                  goTochatLayout();
                }
              "
              size="1.5em"
            ></q-icon>
          </q-item-section>
          <q-item-section side>
            <q-icon name="qr_code" size="1.5em"></q-icon>
          </q-item-section>
          <q-item-section side>
            <q-icon name="logout" @click="logout()" size="1.5em"></q-icon>
          </q-item-section>
          <q-item-section side>
            <q-icon name="more_vert" size="1.5em"></q-icon>
          </q-item-section>
        </q-item>
        <q-item class="q-avatar-padding">
          <q-item-section side>
            <q-avatar class="round-avatar" size="50px" @click="changeUserAvatar">
              <img :src="$store.getters['appData/getCurrentUser'].avatar" alt="avatar" />
              <q-badge class="q-badge-position" rounded floating color="blue">
                <q-icon name="edit" color="white"></q-icon>
              </q-badge>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ $store.getters['appData/getCurrentUser'].name }}
            </q-item-label>
            <q-item-label>
              <q-badge rounded color="green"></q-badge>
              online
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
      <div class="spacer"></div>
      <div class="header-bg-color section">
        <q-item class="setting-lable">Account </q-item>
        <q-item class="container">
          <q-item-section> {{ $store.getters['appData/getCurrentUser'].phone }}</q-item-section>
          <q-item-section class="sub-title"> Tap to change phone number</q-item-section>
        </q-item>
        <q-item class="container">
          <q-item-section> @{{ $store.getters['appData/getCurrentUser'].name }}</q-item-section>
          <q-item-section class="sub-title"> Username</q-item-section>
        </q-item>
        <q-item class="container">
          <q-item-section>About me</q-item-section>
          <q-item-section class="sub-title"> Add a few words about yourself</q-item-section>
        </q-item>
      </div>
      <div class="spacer"></div>
      <div class="header-bg-color section">
        <q-item class="setting-lable">Settings </q-item>
        <q-item clickable @click="goTo('gadgets')">
          <q-item-section side>
            <q-icon name="devices_other" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Gadgets</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="goTo('confidentiality')">
          <q-item-section side>
            <q-icon name="lock" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Confidentiality</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
