<!-- WeiboList.vue -->
<template>
  <div>
    <WeiboItem v-for="weibo in weibos" :key="weibo.id" :weibo="weibo" />
  </div>
</template>
  
<script>
import WeiboItem from './WeiboItem.vue';
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'WeiboList',
  components: {
    WeiboItem,
  },
  setup() {
    const weibos =require("@/assets/weibo.json");
      return {
        weibos,
      };
  }
});
</script>
  