<template>
  <v-container fluid style="padding-top: 0px;">
    <v-app-bar fixed style="padding-top: 0px; padding-bottom: 0px; height: 50px;" :elevation="1">
      <header-view style="padding-left: 10px;"/>
    </v-app-bar>
    <router-view style="padding-left: 75px; margin-top: 100px;"/>
  </v-container>
</template>

<script setup>
import HeaderView from './Header.vue'
  //
</script>
<style>
.myHeader {
  --easy-table-header-background-color: #e9f5f9;
  --easy-table-header-height: 50px;
}
</style>
