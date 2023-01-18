import { createApp } from 'vue'
import router from './router/route'

import App from './App.vue'

// Import 3rd party
import "bootstrap"

createApp(App).use(router).mount('#app')