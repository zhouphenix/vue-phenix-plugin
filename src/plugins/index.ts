import type {App} from 'vue'
import {
    APP_SAY,
    LOG_TAG_STYLE,
    LOG_CONTENT_STYLE
} from "./constant"

export default {
    install(app: App) {
        // 静态属性/方法
        // Object.assign(Vue, statics)
        console.log("%c" + APP_SAY, LOG_TAG_STYLE)
        // 1. 添加全局方法或 property
        // Vue.myGlobalMethod = function () {
        //     // 逻辑...
        // }

        // 2. 添加全局资源
        // Vue.directive('my-directive', {
        //     bind (el, binding, vnode, oldVnode) {
        //         // 逻辑...
        //     }
        //     ...
        // })

        // 3. 注入组件选项
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        //     ...
        // })

        const hello =  (hello: string):void => {
            // 逻辑...
            console.log("%cphenix%c" + hello, LOG_TAG_STYLE, LOG_CONTENT_STYLE)
        }

        // 4. 添加实例方法
        app.config.globalProperties.$sayHello = hello

        hello('插件已加载完成!')
    }
}


