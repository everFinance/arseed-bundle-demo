<template>
  <div>
    <h1>{{signerAddr}}</h1>
    <button class="btn btn-danger" @click="connectWallet" v-show="!connected">connectWallet</button>
  </div>
</template>


<script>
import { genAPI } from "arseeding-js";
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
    async connectWallet() {
      await window.ethereum.enable()
      const instance = await genAPI(window.ethereum)
      this.signerAddr = window.ethereum.selectedAddress
      this.connected = true
      pubsub.publish('connected',instance)
    },
  }
}
</script>

<style scoped>

</style>
