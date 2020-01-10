require("./bootstrap");
import Vue from "vue";
import router from "./router";
import App from "./App.vue";
// import ToastService from "primevue/toastservice";
// import Toast from "primevue/toast";

// Vue.use(ToastService);

// Vue.component("Toast", Toast);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
