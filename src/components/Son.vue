<template>
  <h1>{{ count }}</h1>
  <button @click="loginHandler">login</button>
</template>

<script lang='ts' setup>
import { mainStore } from "../store/index";
import { apiStore } from "../store/apiStore/index";

import { storeToRefs } from "pinia";
const store = mainStore();
const apistore = apiStore();
const { msg, count, num } = storeToRefs(store);
const loginHandler = (): void => {
  apistore.login({ id: 1 }).then((res: any) => {
    console.log(res);
  });
};
</script>
 
<style lang = "scss" scoped>
</style>