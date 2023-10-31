import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from './store';
import { MotionPlugin } from '@vueuse/motion';


const app = createApp(App)

app.use(router)
app.use(store)
app.use( MotionPlugin)

app.mount('#app')
