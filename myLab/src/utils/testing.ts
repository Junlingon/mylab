let lastTime = new Date().getTime()
let currentTime = new Date().getTime()
let timeOut = 15 * 60 * 1000  //设置超时时间: 15分钟

window.onload = function () {
    window.document.onmouseover = function () {
        // 保存最新的操作时间到storage中
        localStorage.setItem("lastTime", new Date().getTime());
    }
};
import Service from "@/utils/Api"
function Signout() {
    const res = Service.Service.logout({});
    localStorage.clear();
    location = location
}

function checkTimeout() {
    //更新当前时间
    currentTime = new Date().getTime()
    lastTime = localStorage.getItem("lastTime");
    // console.log(currentTime);
    // console.log(lastTime);
    // console.log(currentTime - lastTime > timeOut);
    //判断是否超时
    if (currentTime - lastTime > timeOut) {
        // 清除storage的数据(登陆信息和token)

        Signout()
    }
}
export default function () {
    /* 定时器 间隔60秒检测是否长时间未操作页面 */
    window.setInterval(checkTimeout, 60000);
}