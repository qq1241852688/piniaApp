
<template>
  <h1>{{ msg }}</h1>
  <h1>{{ val }}</h1>
  <h1>{{ count }}</h1>
  <h2>storeMsg:{{ msg }}</h2>
  <h2>storeCount:{{ count }}</h2>
  <h2>storeNum:{{ num }}</h2>

  <h2>getter数据:{{store.getCount}}</h2>

  <h1>allMsg:{{allMsg}}</h1>

  <button @click="changeMsg">changeStoreMsg</button>
  <button @click="changeMsgByAction">changeMsgByAction</button>
  <button @click="changeStores">changeStores</button>
  <button @click="changeStoresByFn">changeStoresByFn</button>
  <button @click="getMsgToAllMsg">getMsgToAllMsg</button>

  <Son />
</template>
<script setup lang="ts">
import Son from "./Son.vue";
import { mainStore } from "../store/index";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const store = mainStore();
// const { msg } = store;
//确保store是响应式的
const { msg, count, num } = storeToRefs(store);
defineProps<{ val: string; count: number }>();
/**修改store数据 */
const changeMsg = (): void => {
  store.msg = "newMsg";
};
/**修改多个数据 $patch
 * $patch可传入一个对象或者函数
 */
//$patch可传入一个对象
const changeStores = (): void => {
  store.$patch({
    count: store.count + 1,
    num: store.num + 1,
  });
};
//传入函数
const changeStoresByFn = (): void => {
  store.$patch((state) => {
    state.count = state.count + 2;
    state.num = state.num + 3;
  });
};

/**通过Action改变store */
const changeMsgByAction=():void=>{
   store.changeMsgByAction();
};
/**获取其他Store的数据 */
const allMsg=ref("");
const getMsgToAllMsg=()=>{
  const v=store.getAllStoreMsg();
  console.log(v);
  allMsg.value=v;
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
