<!-- WeiboList.vue -->
<template>
    <div>
      <ScaleItem class="space" v-for="item in items" :key="item.id" :item="item" />
    </div>
  </template>
    
  <script>
  import ScaleItem from './ScaleItem.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ScaleList',
    components: {
        ScaleItem,
    },
    setup() {
      const items = require("@/assets/scale.json");
      return {
        items,
      };
    }
  });
  </script>
  <style scoped>
  .space {
    margin-bottom: 10px;
  }
  </style>
    