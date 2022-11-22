<template>
  <div id="app">
    <div style="text-align:right">
      <a href="https://github.com/everFinance/arseed-bundle-demo" target="_blank" style="margin-right:10px;">Github</a>
      <a href="https://web3infra.dev/docs/arseeding/guide/quickStart/" target="_blank" style="margin-right:100px;">Docs</a>
    </div>
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
