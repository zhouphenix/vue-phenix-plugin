import {App, inject, InjectionKey, provide, readonly, Ref, ref} from 'vue'

const defLanguage: string = 'zh-CN'
const i18nSymbol: InjectionKey<I18nObj> = Symbol('i18n')

interface I18nObj {
    messages: Messages
    translate: (key: string) => string
    setLocale: (locale: string) => void
    getLocale: () => string
}

/**
 * 限制{Object}
 */
interface Messages {
    [key: string]: any
}

/**
 * 配置接口
 * 其中translate 提供自定义转义
 */
export interface I18nConfig {
    locale?: string,
    translate?: (key: string) => string
    messages: Messages
}

function _create(config: I18nConfig): I18nObj {
    const messages: Messages = readonly(config.messages)

    function isSupportLocale(loc: string): boolean {
        return Object.keys(messages).indexOf(loc) !== -1
    }

    if (config.locale && !isSupportLocale(config.locale)) {
        console.warn(`The locale of ${config.locale} configuration not detected`)
    }

    const locale = ref(config.locale || defLanguage)

    const translate = (key: string) => {
        const lib = messages[locale.value] || messages[defLanguage]
        return lib[key] || key
    }

    const setLocale = (loc: string) => {
        if (!isSupportLocale(loc)) {
            console.error('Not supported the custom language of ' + loc)
        }
        locale.value = loc
    }
    const getLocale = () => locale.value
    return {
        messages,
        translate: config.translate || translate,
        setLocale,
        getLocale
    }
}

export function createI18n(config: I18nConfig) {
    const instance = _create(config)
    return (app: App) => {
        app.provide(i18nSymbol, instance)
        app.config.globalProperties.$t = instance.translate
        app.config.globalProperties.$setLocale = instance.setLocale
        app.config.globalProperties.$getLocale = instance.getLocale
    }
}

export function provideI18n(config: I18nConfig): void {
    provide(i18nSymbol, _create(config))
}

export function useI18n() {
    return inject(i18nSymbol)
}
