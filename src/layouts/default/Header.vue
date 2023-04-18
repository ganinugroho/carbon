<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <v-breadcrumbs
          style="color: #3382fa; padding-left: 0px; padding-top: 0px"
        >
          <v-breadcrumbs-item v-for="(item, index) in bc" :key="item.text">
            <a
              style="cursor: pointer"
              v-if="!item.disabled"
              @click.native="test(item)"
              >{{ item.text }}</a
            >
            <span v-else disabled style="color: #808080"
              ><strong>{{ item.text }}</strong></span
            >
            &nbsp;&nbsp; <span v-if="index !== bc.length - 1">></span>
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-col>
      <v-col style="text-align: end;">
        <v-icon icon="mdi-bell-outline" small style="margin-right: 20px;" size="18"></v-icon>
        <v-avatar color="#c7e5d7" style="height: 18px; width: 18px;"><span style="font-size: smaller;">N</span></v-avatar>
        <span style="margin-right: 20px; margin-left: 5px; color: grey; font-size: smaller;">Nita Thalia</span>
        <v-icon icon="mdi-arrow-down-drop-circle-outline" size="16px" style="background-color: #e5e7e8; border-radius: 50%;"></v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Child } from "@/router/child";

const router = useRouter();
const route = useRoute();
const bc = ref([]);
function initBC() {
  for (let i = 0; i < Object.values(route.meta.breadcrumbs).length; i++) {
    bc.value.push(route.meta.breadcrumbs[i]);
  }
}
initBC();
// bc.value = route.meta.breadcrumbs

function test(b) {
  console.log(b.href);
  router.push(b.href);
}
watch(
  () => route.path,
  () => {
    bc.value = Child.filter((x) => x.path === route.path)[0].meta.breadcrumbs;
    console.log(bc);
  }
);
</script>
