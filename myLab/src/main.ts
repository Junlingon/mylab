import { createApp } from 'vue'
import router from './router'
const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'


import { createPinia } from 'pinia'
app.use(createPinia())

import App from './App.vue'

// // JWT 用户权限校验，判断 TOKEN 是否在 localStorage 当中
// router.beforeEach((to, from, next) => {
//     // 获取 JWT Token
//     if (localStorage.getItem('token')) {
//         // 如果用户在login页面
//         if (to.path === "/login") {
//             next('/');
//         } else {
//             next({
//                 path: "/login"
//             });
//         }
//     } else {
//         if (to.path === '/') {
//             next();
//         } else {
//             next({
//                 path: "/login"
//             })
//         }
//     }
// });

// router.beforeEach((to, from, next) => {
//     /* 路由发生变化修改页面title */
//     if (to.meta.title) {
//         document.title = to.meta.title
//     }


//     next()
// })

app.use(router)
app.use(ElementPlus)
app.mount('#app')
