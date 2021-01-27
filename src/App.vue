<template>
  <img ref="imgRef" alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld :msg="`Hello Vue 3 + Vite -- ${$t('hi')} -- ${$getLocale()}`"/>
  <button v-for="key in supportLanguages" @click="$setLocale(key)">{{ key }}</button>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, inject} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import {useI18n} from "./plugins/i18n";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup(props, context) {
    // console.log('i18n::', props, context)
    const imgRef = ref(null)
    const i18n = useI18n()
    const supportLanguages = Object.keys(i18n?.messages)
    onMounted(()=> {
      // 在挂载后执行某些代码
      console.log('imgRef::', imgRef.value)
    })
    const [first, second] = ['1', '2']
    console.log(first, second)
    return {
      imgRef,
      supportLanguages
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
