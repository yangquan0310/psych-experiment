<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { provideGlobalState } from '@/utils/GlobalState';
export default defineComponent({
  name: 'App',
  setup() {
    provideGlobalState();
    return {
    }
  }
});
</script>
<style>
  body {
    padding: 0px;
    margin: 0px;
  }
</style>
