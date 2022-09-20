<template>
  <div>
    <div v-if="this.message.userId === $store.state.userList.currentUser?._id">
      <q-chat-message :text="this.message.messageText" bg-color="light-blue-9" :sent="true" text-color="white">
        <template v-slot:stamp>
          <div class="stepm-direction">
            <div class="stemp">{{ this.message.stamp }}</div>
            <div>
              <div v-if="this.message.whoRead[1] !== undefined">
                <q-icon size="15px" color="blue-10" name="done_all"></q-icon>
              </div>
              <div v-else>
                <q-icon size="15px" color="teal-5" name="done_all"></q-icon>
              </div>
            </div>
          </div>
        </template>
      </q-chat-message>
    </div>
    <div v-else>
      <q-chat-message
        text-color="white"
        bg-color="grey-9"
        :text="this.message.messageText"
        :sent="false"
        :stamp="this.message.stamp"
      ></q-chat-message>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
