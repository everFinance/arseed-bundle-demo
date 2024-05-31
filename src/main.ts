import { createApp } from 'vue'
import { importElementPlus } from './element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

importElementPlus(app)

app.mount('#app')