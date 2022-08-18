

<template>
  <HelloWorld val="vallllll" :count="count" />
</template>
<script setup lang="ts">
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
const count = ref(999);
setTimeout(() => {
  count.value = 777;
}, 2000);
</script>
<style scoped>
</style>
