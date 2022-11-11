<template>
  <div v-if="this.$route.fullPath === '/chat_layout'">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated style="background-color: #121212">
        <q-toolbar>
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          <q-space />
          <q-tabs v-model="tab">
            <q-tab name="chats" label="Chats"></q-tab>
            <!-- <q-tab name="calls" label="Calls"></q-tab> -->
          </q-tabs>
          <q-space />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above>
        <UserInfo />
      </q-drawer>

      <!-- <q-drawer show-if-above v-model="rightDrawerOpen" :width="width" side="right">
        <router-view></router-view>
      </q-drawer> -->

      <q-page-container style="padding-top: 50px">
        <q-pull-to-refresh @refresh="refreshUserList" bg-color="black">
          <div v-if="tab === 'chats'">
            <transition appear enter-active-class="animated fadeInLeft">
              <div v-if="$store.state.appData.chats[0] !== undefined">
                <ChatComponentLayout
                  v-for="newChat in $store.getters['appData/getChatsFromState']"
                  :key="newChat._id"
                  @click="isMessageModalOpen = !isMessageModalOpen"
                  v-bind="newChat"
                />
              </div>
              <div v-else>
                <div v-for="skeleton in 5" :key="skeleton">
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-skeleton type="QAvatar"></q-skeleton>
                    </q-item-section>
                    <q-item-section>
                      <q-skeleton type="text"></q-skeleton>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </transition>
          </div>
          <div v-else>
            <transition appear enter-active-class="animated fadeInRight">
              <div>
                <h6 style="justify-content: center; display: flex">NO CALLS !?!?!??!</h6>
                <img width="412" src="https://i.imgflip.com/64sz4u.png?a462000" alt="" />
              </div>
            </transition>
          </div>
        </q-pull-to-refresh>
      </q-page-container>
      <MessageModal v-model="isMessageModalOpen" @close-modal="isMessageModalOpen = $event" />
      <div :class="{ shadowBlock: true, shadowBlockOpen: toolsIsActive }"></div>
      <div v-if="tab === 'chats'">
        <transition appear enter-active-class="animated fadeIn">
          <q-page-sticky @click="togleTools" position="bottom-right" class="btn_z-index" :offset="[18, 18]">
            <q-fab icon="edit" direction="up" color="blue">
              <q-fab-action
                @click="toggleRightDrawer()"
                label="Create secret chat"
                external-label
                color="green-6"
                label-position="left"
                icon="lock"
              ></q-fab-action>
              <q-fab-action
                @click="writeMessage()"
                to="/chat_layout/write_message"
                label="Write message"
                external-label
                color="red-5"
                label-position="left"
                icon="person"
              ></q-fab-action>
              <q-fab-action
                @click="toggleRightDrawer()"
                label="Create group"
                to="/chat_layout/create_group"
                external-label
                color="orange-6"
                label-position="left"
                icon="people"
              ></q-fab-action>
            </q-fab>
          </q-page-sticky>
        </transition>
      </div>
    </q-layout>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
