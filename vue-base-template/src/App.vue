<template>
  <v-app>
    <appHeader title="Base Template" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import appHeader from './components/common/Header.vue';
</script>
