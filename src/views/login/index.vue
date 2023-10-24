<template>
    <div class="outside-content">
        <div class="login-container">
            <div class="title">登录</div>
            <form @submit.prevent="login">
                <div class="input-box">
                    <!-- <svg t="1691823456149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4391" width="20" height="20"><path d="M617.216 696.192v-94.08C650.24 578.56 670.464 512 670.464 512c0-31.36 31.36-41.472 31.36-41.472 43.136-41.472 0-115.2 0-115.2V222.08C662.528 100.608 513.408 84.864 513.408 84.864s-150.016 15.616-189.44 137.088V355.2s-43.392 73.856 0 115.2c0 0 31.488 10.112 31.488 41.472 0 0 20.352 66.56 53.632 90.112v94.08S20.48 813.568 32.256 939.008h959.488c11.776-125.312-374.528-242.816-374.528-242.816z" p-id="4392" fill="#515151"></path></svg> -->
                    <label class="label" for="username">用户名:</label>
                    <input type="text" id="username" v-model="username" required />
                </div>
                <div class="input-box top">
                    <label class="label" for="password">密码:</label>
                    <input type="password" id="password" v-model="password" required />
                </div>
                <button class="submit-btn" type="submit">登录</button>
            </form>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { login as logins } from "@/utils/api.js"
import { useRouter } from 'vue-router'
import { inject } from 'vue';
export default defineComponent({
    name: "userLogin",
    setup() {
        const username = ref("");
        const password = ref("");
        const router = useRouter();
        const globalState = inject('globalState');
        const login = () => {
            const params = {
                username: username.value,
                password: password.value,
            };
            logins(params).then(res => {
                console.log("这里返回的值", globalState.count++);
                console.log("这里返回的值", res);
                if (res.success) {
                    router.push('/scale');
                } else {
                    alert(res.message);
                }
            })
            // this.$http.post('/api/login', {
            //     username: this.username,
            //     password: this.password,
            // }).then(res => {
            //     if(res.data.success) {
            //         this.$router.push('/Home');
            //     } else {
            //         alert(res.data.message);
            //     }
            // }).catch(  e =>{
            //     alert("登录报错", e);
            // })
        };
        return {
            login,
            username,
            password,
        }
    }
});
</script>
<style  scoped>
.outside-content {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background: rgba(31, 249, 249, 0.664);
    position: relative;
    overflow: hidden;
    background-image: url(@/public/img/Background.png);
}

.back {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    display: flex;
    align-items: flex-end;
}

.login-container {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 400px;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-top: 180px;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
  letter-spacing: 20px;
  user-select: none;
}

input {
    border: 0;
    background-color: #33333323;
    border-radius: 5px;
    height: 35px;
    width: 300px;
    outline: none;
    box-sizing: border-box;
    padding-left: 10px;
    margin-top: 5px;
    /* text-align: center; */
}

.label {
    font-size: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label {
    font-weight: bold;
}

.top {
    margin-top: 5px;
}

.submit-btn {
    margin-top: 40px;
    background-color: rgba(56,97,50);
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
}
</style>