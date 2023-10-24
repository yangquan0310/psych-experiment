<template>
  <div class="recommand_box">
    <div class="middle-info">
      <div class="title">实验结束
        <img class="leaves" src="@/public/img/leaves.png" alt="">
        <img class="leaves-left" src="@/public/img/leaves.png" alt="">
      </div>
      <div class="content">
        <div class="pragraph">非常感谢您的参与</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: "EndView",
  setup() {
  }
});
</script>
<style>
.recommand_box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(165, 189, 157);
  overflow: hidden;
  position: relative;
}

.middle-info {
  width: 70%;
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  backdrop-filter: blur(20px);
  /* opacity: 0.8; */
  position: relative;
}

.title {
  width: 100%;
  height: 70px;
  text-align: center;
  background-color: rgb(224, 226, 224);
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
.pragraph {
  width: 80%;
  margin-top: 20px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
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