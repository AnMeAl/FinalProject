import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import HomeView from './components/HomeView.vue'
import TestApi from './components/TestApi.vue'
import NotFoundView from './components/NotFoundView.vue'
import ChatView from './components/ChatView.vue'
import ApiComp from './components/ApiComp.vue'

const router = createRouter({
    routes: 
    [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/test",
            name: "testApi",
            component: TestApi,
        },
        {
            path: "/api",
            name: "api",
            component: ApiComp,
        },
        {
            path: "/chat",
            name: "chat",
            component: ChatView
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFoundView,
        }
    ],
    history: createWebHashHistory()
})

const isAuthenticated = true;

router.beforeEach((to) => {
    if(to.meta.requiresAuth && !isAuthenticated){
        return {name: "home"}
    }
});

const app = createApp(App);
app.use(router);
app.mount("#app");