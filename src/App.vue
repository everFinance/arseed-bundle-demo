<template>
  <div id="app">
    <ConnectWallet></ConnectWallet>
    <Upload></upload>
  </div>
</template>

<script>
import Upload from './components/Upload.vue'
import ConnectWallet from './components/ConnectWallet'

export default {
  name: 'App',
  components: {
    Upload,
    ConnectWallet
  }
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
