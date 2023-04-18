<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :rail="true"
      permanent
      @click="rail = false"
    >
      <div style="margin-top: 10px; margin-bottom: 2px; text-align: center;">
        <img src="logo.png">
      </div>
      <v-list density="compact" nav>
        <div class="mainMenu" @click="menuClick('tes')" :class="menu === 'tes' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-home" class="iconMenu" :color="menu === 'tes' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes2')" :class="menu === 'tes2' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-file-outline" class="iconMenu" :color="menu === 'tes2' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes3')" :class="menu === 'tes3' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-signal-cellular-3" class="iconMenu" :color="menu === 'tes3' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes4')" :class="menu === 'tes4' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-calendar-blank" class="iconMenu" :color="menu === 'tes4' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes5')" :class="menu === 'tes5' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-chart-arc" class="iconMenu" :color="menu === 'tes5' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes5')" :class="menu === 'tes5' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-cloud-download-outline" class="iconMenu" :color="menu === 'tes5' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes5')" :class="menu === 'tes5' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-folder-outline" class="iconMenu" :color="menu === 'tes5' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes5')" :class="menu === 'tes5' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-information-outline" class="iconMenu" :color="menu === 'tes5' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <v-divider class="mt-10"></v-divider>
        <div class="mainMenu" @click="menuClick('tes5')" :class="menu === 'tes5' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-account-multiple-outline" class="iconMenu" :color="menu === 'tes5' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
        <div class="mainMenu" @click="menuClick('tes5')" :class="menu === 'tes5' ? 'mainMenuActive' : 'mainMenu'">
          <v-icon icon="mdi-cog-outline" class="iconMenu" :color="menu === 'tes5' ? 'white' : '#2471d9'" size="18"></v-icon>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer2" location="left" temporary>
      <div style="display: flex; flex-direction: row" pointer role="button" class="e2">
        <v-alert color="#b7caf5" class="header-prefix" :icon="false"></v-alert>
        <span style="align-self: center; font-size: small;">PLTN-IDO</span>
      </div>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer3" location="left" temporary>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-drag-vertical"
          title="Home2"
          value="home"
          @click="drawer2 = true"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-drag-vertical"
          title="My Account2"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-drag-vertical"
          title="Users2"
          value="users"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const drawer = ref(true)
const drawer2 = ref(false)
const drawer3 = ref(false)
const rail = ref(true)
const menu = ref("tes")

function menuClick(m) {
  menu.value = m
  if (m === 'tes') {
    drawer3.value = true
    drawer2.value = false
  }
}

</script>
<style>
.mainMenu {
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.mainMenuActive {
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  background-color: #2572d9;
  margin-bottom: 5px;
  margin-top: 5px;
}
.mainMenu:hover {
  background-color: #e5effb;
}
.mainMenuActive:hover {
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  background-color: #2572d9;
  margin-bottom: 5px;
}
.iconMenu {
  background-color: transparent;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>