<!-- WeiboItem.vue -->
<template>
  <div class="weibo-item">
    <div class="user-info">
      <img class="avatar" :src="circleUrl" v-if="circleUrl" />
      <div class="username">{{ weibo.username }}</div>
    </div>
    <div class="content">{{ weibo.content }}</div>
    <div class="timestamp">{{ weibo.timestamp }}</div>
    <table class="table11_7" :selectable=false>
      <tr>
        <td @click="FollowClick()" :style="{color:follow_style}">点赞 {{follows }}</td>
        <td>评论</td>
        <td>转发</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'WeiboItem',
  props: {
    weibo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const circleUrl = require("@/public/img/woman.png")
    const data=ref(props)
    const follows=ref(data.value.weibo.follow)
    var follow = false
    var follow_style=ref("")
    var FollowClick = () => {
      if (follow){
        follows.value--;
        follow= !follow;
        follow_style.value="black"
        return {
          style:data.value.weibo.isfollow=follow
        }
      }
      else{
        follows.value++;
        follow_style.value="red"
        follow= !follow;
        return {
          style:data.value.weibo.isfollow=follow
        }
      }
    }
    const getNameLast = (str) => {
      return str.substring(0, 1)
    }
    return {
      follows,
      follow_style,
      circleUrl,
      FollowClick,
      getNameLast
    };
  }
});
</script>  
<style>
.weibo-item {
  width: 700px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.user-info {
  display: flex;
  text-align: center;
  align-items: center;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.avatar img {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #eee;
}
.username {
  margin-left: 10px;
}


.content {
  margin-top: 10px;
  margin-bottom: 10px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-line;
}

.timestamp {
  color: #999;
  text-align: left;
}

.table11_7 table {
  width: 100%;
  margin: 20px 0;
  border: 0;
}
.table11_7 {
  margin: 5px 0;
}

.table11_7,
.table11_7 th,
.table11_7 td {
  width: 700px;
  font-size: 0.95em;
  text-align: center;
  padding: 4px;
  border-collapse: collapse;
  user-select: none;
  background-color: rgba(88, 103, 88, 0.053);
}

.table11_7 th,
.table11_7 td {
  border: 1px solid #dce1e3;
  border-width: 1px 0 1px 0;
  border: 2px inset #ffffff;
}
</style>
  