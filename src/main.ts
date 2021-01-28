import {createApp} from 'vue'
import App from './App.vue'
import {createI18n} from "./plugins/i18n"
import phenix from './plugins/index'

// const languages = import.meta.glob('./assets/i18n/*.ts')
// console.log('glob: ', languages)
// for (const path in languages) {
//     languages[path]().then((mod) => {
//         console.log(path, mod)
//     })
// }

const languages = import.meta.globEager('./assets/i18n/*.ts')
const messages = {}
for(const lang in languages) {
    Object.assign(messages, languages[lang].default)
}

const i18n = createI18n({
    locale: 'zh-CN',
    messages: messages
})

createApp(App)
    .use(phenix)
    .use(i18n)
    .mount('#app')
