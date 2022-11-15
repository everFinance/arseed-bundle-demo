<template>
  <div>
    <h1>{{signerAddr}}</h1>
    <button class="btn btn-danger" @click="connectMetamask" v-show="!connected">connectMetamask</button><br/>
    <br/>
    <button class="btn btn-danger" @click="connectArconnect" v-show="!connected">connectArconnect</button>
  </div>
</template>


<script>
import { genAPI,genArweaveAPI } from "arseeding-js";
import pubsub from 'pubsub-js'
export default {
  name: "ConnectWallet",
  data() {
    return {
      connected: false,
      signerAddr:"",
    }
  },
  methods: {
    async connectMetamask() {
      await window.ethereum.enable()
      const instance = await genAPI(window.ethereum)
      this.signerAddr = window.ethereum.selectedAddress
      this.connected = true
      instance.addr = this.signerAddr
      pubsub.publish('connected',instance)
    },
    async connectArconnect() {
      const instance = await genArweaveAPI(window.arweaveWallet)
      this.signerAddr = await window.arweaveWallet.getActiveAddress()
      this.connected = true
      instance.addr = this.signerAddr
      pubsub.publish('connected', instance)
    }
  }
}
</script>

<style scoped>

</style>
