<template>
  <div id="app">
    <ThemeProvider v-bind:theme="theme">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </ThemeProvider>
  </div>
</template>

<script>
import { ThemeProvider } from 'vue-styled-components'
import HelloWorld from './components/HelloWorld.vue'
import theme from './theme'

export default {
  name: 'App',
  components: {
    ThemeProvider,
    HelloWorld
  },
  data: () => ({
    theme
  })
}
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
