import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

import BaseButton from '@/components/BaseButton.vue'
import App from '@/App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
