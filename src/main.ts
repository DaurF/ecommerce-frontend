import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import App from '@/App.vue'
import BaseButton from '@/components/BaseButton.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)

app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.use(createPinia())

app.mount('#app')
