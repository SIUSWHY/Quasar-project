<template>
  <div v-if="this.$route.fullPath === '/chat_layout'">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated :class="`${$store.state.appData.currentUser.isDarkMode ? 'q-dark' : 'q-hermes'}`">
        <q-toolbar>
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          <q-space />
          <q-tabs v-model="tab">
            <q-tab name="chats" :label="$t('layout.chats')"></q-tab>
            <q-tab name="calls" :label="$t('layout.calls')"></q-tab>
          </q-tabs>
          <q-space />
          <q-btn flat dense round icon="dns" @click="openSwitchTeam" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :class="`${$store.state.appData.currentUser.isDarkMode ? '' : 'q-hermes'}`"
      >
        <UserInfo />
      </q-drawer>

      <!-- <q-drawer show-if-above v-model="rightDrawerOpen" :width="width" side="right">
        <router-view></router-view>
      </q-drawer> -->

      <q-page-container style="padding-top: 50px">
        <q-pull-to-refresh @refresh="refreshUserList" bg-color="black">
          <div v-if="tab === 'chats'">
            <div v-if="$store.getters['appData/getChatLoader'] === true">
              <div v-for="skeleton in 5" :key="skeleton">
                <q-item v-ripple>
                  <q-item-section side>
                    <q-skeleton type="QAvatar"></q-skeleton>
                  </q-item-section>
                  <q-item-section>
                    <q-skeleton type="text"></q-skeleton>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div v-else-if="$store.state.appData.chats.length >= 1">
              <ChatComponentLayout
                v-for="newChat in $store.getters['appData/getChatsFromState']"
                :key="newChat._id"
                @click="isMessageModalOpen = !isMessageModalOpen"
                v-bind="newChat"
              />
            </div>
            <div v-else>
              <q-card style="max-width: 400px; min-width: 350px" class="fixed-center">
                <q-card-section class="text-h6">
                  <div class="text-h5">{{ $t('layout.no_chats.title') }}</div>
                  <div class="text-subtitle2">{{ $t('layout.no_chats.sub') }}</div></q-card-section
                ></q-card
              >
            </div>
          </div>
          <div v-else>
            <!-- <transition appear enter-active-class="animated fadeInRight"> -->
            <CallItem
              v-for="callLog in $store.getters['appData/getCallsLogs']"
              :key="callLog._id"
              @click="isMessageModalOpen = !isMessageModalOpen"
              v-bind="callLog"
            />
            <!-- </transition> -->
          </div>
        </q-pull-to-refresh>
      </q-page-container>
      <MessageModal v-model="isMessageModalOpen" @close-modal="isMessageModalOpen = $event" />
      <div :class="{ shadowBlock: true, shadowBlockOpen: toolsIsActive }"></div>
      <div>
        <div v-if="tab === 'chats'">
          <transition appear enter-active-class="animated fadeIn">
            <q-page-sticky position="bottom-right" class="btn_z-index" :offset="[18, 18]">
              <q-fab @click="togleTools" icon="edit" direction="up" color="blue">
                <!-- <q-fab-action
                  @click="toggleRightDrawer()"
                  label="Create secret chat"
                  external-label
                  color="green-6"
                  label-position="left"
                  icon="lock"
                ></q-fab-action> -->
                <q-fab-action
                  @click="writeMessage()"
                  to="/chat_layout/write_message"
                  :label="$t('layout.actions.double')"
                  external-label
                  color="red-5"
                  label-position="left"
                  icon="person"
                ></q-fab-action>
                <q-fab-action
                  @click="toggleRightDrawer()"
                  :label="$t('layout.actions.group')"
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
        <div v-else>
          <transition appear enter-active-class="animated fadeIn">
            <q-page-sticky position="bottom-right" class="btn_z-index" :offset="[18, 18]">
              <q-btn
                class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--rounded bg-blue text-white q-btn--actionable q-focusable q-hoverable q-btn--fab q-btn--no-uppercase q-fab--form-rounded"
                color="blue"
                icon="call"
                to="/chat_layout/calls"
              ></q-btn>
            </q-page-sticky>
          </transition>
        </div>
      </div>
      <q-dialog v-model="isSwitchTeamOpen" position="bottom">
        <q-card style="width: 90%">
          <div class="q-ma-md">
            <div class="text-h6 q-my-sm">{{ $t('teams.yours_servers') }}</div>
            <div v-for="team in $store.getters['appData/getTeams']" :key="team._id">
              <q-item
                clickable
                :class="`${team._id === $store.state.appData.currentTeam._id ? 'active-team q-my-sm' : 'q-my-sm'}`"
                @click="switchTeam(team._id)"
              >
                <q-item-section side> <q-icon name="dns" size="30px" /> </q-item-section>
                <q-item-section> {{ team.teamName }} </q-item-section>
                <q-item-section
                  v-if="team.admin !== $store.state.appData.currentUser._id"
                  @click="goToTeams"
                  side
                  @click.stop="leaveFromTeam(team._id)"
                >
                  <q-icon name="logout" color="negative" size="30px" />
                </q-item-section>
                <q-item-section side @click.stop="changeDefaultTeam(team._id)">
                  <q-icon
                    name="star"
                    :color="team._id === $store.state.appData.currentUser.defaultTeam ? 'green' : 'grey'"
                    size="30px"
                  />
                </q-item-section>
              </q-item>
            </div>
            <q-btn
              class="q-mt-lg"
              color="green"
              style="width: 100%"
              :label="$t('teams.add')"
              @click="addServer"
            ></q-btn>
          </div>
        </q-card>
      </q-dialog>
    </q-layout>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
