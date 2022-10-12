import axios from 'axios';
import { createPinia } from 'pinia';
import router from '../router'
import { useStore } from '../stores/counter'
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";
var httpurl = "http://121.41.112.205:8088";

const service = axios.create({
    baseURL: httpurl,
    timeout: 9000,
    headers: {
        "Content-Type": "application/json",
    },
});
let loadingIsShow: any = null;
// 请求拦截
service.interceptors.request.use((res) => {
    // res.headers.common["satoken"] = localStorage.getItem("token");
    loadingIsShow = ElLoading.service({
        fullscreen: true,
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
    });
    return res;
});

// 响应拦截
service.interceptors.response.use((res: any): any => {
    if (res.status === 200) {
        if (res.data && res.data.code != 101 && res.data.code != 102) {
            loadingIsShow.close();
            return Promise.resolve(res.data);
        } else if (res.data.code == 102) {
            localStorage.clear();
            // router.push("/login");
            loadingIsShow.close();
            return Promise.reject(res);
        }
        else {
            ElMessage({
                dangerouslyUseHTMLString: true,
                message: `${res.data.msg}`,
                type: "warning",
                showClose: true,
                icon: "",
                duration: 2500,
            });
        }
        loadingIsShow.close();
        return Promise.reject(res);
    } else {
        setTimeout(() => {
            return Promise.resolve(res);
            loadingIsShow.close();
        }, 5000)
    }
});

export const request = (url = "", data = {}, type = "POST") => {
    return new Promise((resolve, reject) => {
        let promise: any;
        // var setpwddata = utils.setpwd(JSON.stringify(data));
        // var getpwddata = utils.getpwd(setpwddata);

        if (type.toUpperCase() === "GET") {
            promise = service({
                url,
                params: data,
            });
        } else if (type.toUpperCase() === "POST") {
            promise = service({
                method: "POST",
                url,
                data: data,
            });
        }
        promise
            .then((res: any) => {
                resolve(res);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
};