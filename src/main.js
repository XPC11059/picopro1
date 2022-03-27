import { createApp } from 'vue'
import App from './App.vue'

import picocontainer2 from 'picocontainer2'
picocontainer2.start()

createApp(App).mount('#app')
