<template>
  <div>
    <div id="videoCall">
      <video class="fullscreen" :srcObject="stream" autoplay></video>
      <div class="btn-position">
        <div>
          <q-btn v-if="constraints.audio" class="btn" @click="toggleMute()" color="primary" icon="mic"></q-btn>
          <q-btn v-else class="btn" @click="toggleMute()" color="grey" icon="mic_off"></q-btn>
        </div>
        <div>
          <q-btn v-if="stream" class="btn" @click="toggleCam()" color="primary" icon="videocam"></q-btn>
          <q-btn v-else class="btn" @click="getStream()" color="grey" icon="videocam_off"></q-btn>
        </div>
        <div>
          <q-btn class="btn" disable color="primary" icon="cameraswitch"></q-btn>
        </div>
        <div>
          <q-btn class="btn" @click="stopCall()" color="red" icon="phone_disabled"></q-btn>
        </div>
        <!-- <q-btn class="btn" color="primary" icon="videocam"></q-btn>
        <q-btn class="btn" color="primary" icon="cameraswitch"></q-btn>
        <q-btn class="btn" color="red" icon="phone_disabled"></q-btn> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
