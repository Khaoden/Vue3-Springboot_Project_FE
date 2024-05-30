import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (let iconName in ElementPlusIconsVue) {
    app.component(iconName, ElementPlusIconsVue[iconName])
}
app.mount('#app')
