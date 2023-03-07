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
      <q-item-section> {{ $t('settings.language.language') }} </q-item-section>
    </q-item>
    <div class="content">
      <q-item class="setting-lable">{{ $t('settings.language.language') }} </q-item>
      <q-item class="container">
        <q-item class="item">
          <q-radio v-model="language" val="en-US" @click="changeLocale('en-US')"></q-radio>
          <div>
            <q-item-section> English</q-item-section>
            <q-item-section class="sub-title"> English</q-item-section>
          </div>
        </q-item>
        <q-item class="item">
          <q-radio v-model="language" val="ru-RU" @click="changeLocale('ru-RU')"></q-radio>
          <div>
            <q-item-section> Русский</q-item-section>
            <q-item-section class="sub-title"> Russian</q-item-section>
          </div>
        </q-item>
      </q-item>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts" />
<style lang="scss" src="./index.scss" scoped />
