<template>
  <div>
    <q-item style="position: absolute; z-index: 1; width: 100%">
      <q-item-section side>
        <q-icon
          name="west"
          @click="
            () => {
              goBack();
            }
          "
          size="1.5em"
        ></q-icon>
      </q-item-section>
      <q-item-section> Gadgets </q-item-section>
    </q-item>
    <q-item class="header-pisition">
      <q-item-section class="lable-position"> You can access the application with QR-code </q-item-section>
      <q-item-section>
        <q-btn @click="isAddNewGadget = !isAddNewGadget" color="primary" icon="qr_code" label="Add gadget"></q-btn>
      </q-item-section>
      <div v-if="isAddNewGadget">
        <div class="fullscreen">
          <qrcode-stream camera="auto" :track="this.paintOutline" @init="logErrors" @decode="onDecode">
            <q-btn
              @click="isAddNewGadget = !isAddNewGadget"
              class="fullscreen-button"
              color="primary"
              label="Cancel"
            ></q-btn>
          </qrcode-stream>
        </div>
      </div>
    </q-item>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
