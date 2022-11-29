<template>
  <div>
    <div id="videoCall">
      <div>
        <div v-if="streamData.video">
          <video class="fullscreen" :srcObject="streamDataObj" autoplay></video>
        </div>
        <div class="bg-color" v-else>
          <q-avatar class="call-avatar" :rounded="false" size="20vh">
            <img :src="$store.state.appData.currentUser?.avatar" alt="avatar" />
          </q-avatar>
        </div>
      </div>
      <div class="btn-position">
        <div>
          <q-btn
            class="btn"
            @click="toggleMute"
            :color="streamData.audio ? 'primary' : 'grey'"
            :icon="streamData.audio ? 'mic' : 'mic_off'"
          ></q-btn>
        </div>
        <div>
          <q-btn
            class="btn"
            @click="toggleCam"
            :color="streamData.video ? 'primary' : 'grey'"
            :icon="streamData.video ? 'videocam' : 'videocam_off'"
          ></q-btn>
        </div>
        <div>
          <q-btn class="btn" @click="switchCam" disable color="primary" icon="cameraswitch"></q-btn>
        </div>
        <div>
          <q-btn class="btn" @click="stopCall()" color="red" icon="phone_disabled"></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
