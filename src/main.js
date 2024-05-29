import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import _ from 'lodash'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties._ = _
app.use(createPinia())
app.use(router)

app.mount('#app')
