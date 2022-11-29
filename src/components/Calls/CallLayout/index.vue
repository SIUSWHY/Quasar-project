<template>
  <div>
    <div id="videoCall">
      <video class="fullscreen" :srcObject="streamDataObj" autoplay></video>
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
          <q-btn class="btn" disable color="primary" icon="cameraswitch"></q-btn>
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
