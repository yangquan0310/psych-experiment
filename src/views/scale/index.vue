<template>
    <div class="recommand_box">
    <div class="middle-info">
      <div class="title">问卷调查
        <img class="leaves" src="@/public/img/leaves.png" alt="">
        <img class="leaves-left" src="@/public/img/leaves.png" alt="">
      </div>
      <div class="content">
        <ScaleList class="top-position" />
        <div class="btn" @click="next">下一步</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import ScaleList from '@/components/ScaleList.vue';
import { defineComponent } from 'vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "ScaleView",
  components: {
    ScaleList
  },
  setup() {
    const globalState = inject('globalState');
    const router = useRouter();
    const next = () => {
      console.log("这里返回的值", globalState.count);
      if(globalState.count<2){
        globalState.count++
        router.push('/home')
      }
      else{
        globalState.count++
        router.push('/end')
      }
    };
    return {
      next
    }
  }
});
</script>
  
<style scoped>
.recommand_box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(165,189,157);
  overflow: hidden;
  position: relative;
}
.middle-info {
  width: 70%;
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: rgb(245,245,245);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  backdrop-filter: blur(20px);
  /* opacity: 0.8; */
  position: relative;
}

.title {
  width: 100%;
  height: 70px;
  text-align: center;
  background-color: rgb(224,226,224);
  border-bottom: 1px solid #00000010;
  line-height: 70px;
  font-size: 30px;
  font-weight: 700;
  position: relative;
  letter-spacing: 15px;
  user-select: none;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
}

.content::-webkit-scrollbar {
  /* display: none; */
}
.content::-webkit-scrollbar-thumb {
  border-radius: 10px !important;
  -webkit-box-shadow: inset 0 0 6px 6px rgba(0, 0, 0, 0.3) !important;
  background-color: #ddd !important;
}

.content::-webkit-scrollbar {
  background-color: #f5f5f5;
  width: 10px;
}
.content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f5f5f5;
  display: none;
}
.top-position {
  /* margin-top: 80px; */
}
.btn {
  width: 720px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: center;
  user-select: none;
  margin-top: 20px;
  background-color: rgb(76,117,66);
  border-radius: 2px;
  color: #fff;
  margin-bottom: 10px;
}
.leaves {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 70px;
}
.leaves-left {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 70px;
  transform: rotateY(180deg);
}
.flowers {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 100px;
}
</style>
  