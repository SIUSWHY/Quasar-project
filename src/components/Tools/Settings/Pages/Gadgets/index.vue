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
      <q-item-section> {{ $t('settings.gadgets.gadgets') }} </q-item-section>
    </q-item>
    <q-item class="header-pisition">
      <div v-if="!$store.getters['appData/getUserDevice'].desktop">
        <q-item-section>
          <q-icon class="pc-image" name="laptop" size="1000%"></q-icon>
        </q-item-section>
        <q-item-section class="lable-position"> {{ $t('settings.gadgets.description') }} </q-item-section>
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
                :label="$t('settings.gadgets.add')"
              ></q-btn>
            </qrcode-stream>
          </div>
        </div>
      </div>
      <div v-else>
        <q-item-section class="lable-position"> {{ $t('settings.gadgets.pc') }} </q-item-section>
      </div>
    </q-item>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
