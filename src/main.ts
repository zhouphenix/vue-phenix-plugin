import {createApp} from 'vue'
import App from './App.vue'
import {createI18n} from "./plugins/i18n"
import phenix from './plugins/index'

const i18n = createI18n({
    locale: 'zh-CN',
    messages: {
        'zh-CN': {
            hi: '你好 phenix'
        },
        'en-US': {
            hi: 'hello phenix'
        }
    }
})
createApp(App)
    .use(phenix)
    .use(i18n)
    .mount('#app')
