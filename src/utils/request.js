import axios from "axios";
const request = axios.create({
    baseURL: "http://8.130.47.25:5000/",
    timeout: 10000
});
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        // 当权限验证不通过的时候给出提示
        if (res.code === '401') {
            // ElementUI.Message({
            //     message: res.msg,
            //     type: 'error'
            // });
        }
        return res;
    },
    error => {
        console.log("这里返回的值", error);
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)
export default request;