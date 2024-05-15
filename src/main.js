import { createApp } from "vue";
import App from './App.vue';

import MyNavbar from './components/MyNavbar.vue';
import MyContent from './components/MyContent.vue';
import MyFooter from './components/MyFooter.vue';

const app = createApp(App);
app.component('my-nav-bar', MyNavbar);
app.component('my-content', MyContent);
app.component('my-footer', MyFooter);
app.mount('#app');