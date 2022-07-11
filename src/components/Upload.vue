<template>
  <div class="upload-img-root">
    <el-upload v-show="connected"
        :file-list="fileList"
        :show-file-list="false"
        :auto-upload="false"
        :on-change="handleChangeFileSuccess"
        :on-success="handleAvatarSuccess"
        drag
        action="#"
        class="avatar-uploader"
        multiple
    >
      <i class="el-icon-upload"/>
      <div class="el-upload__text">Drag the file here，or<em style="color: #031425;"> Click to upload</em></div>
    </el-upload>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'Upload',
  data() {
    return {
      fileList: [],
      submitResp: "",
      connected: false,
      instance: {},
    };
  },
  methods: {
    handleChangeFileSuccess(file, fileList) {
      this.combineFileList(fileList);
    },
    handleAvatarSuccess(res, file, fileList) {
      this.combineFileList(fileList);
    },
    combineFileList(files) {
      const file = files[0]
      const reader = new FileReader();
      reader.readAsArrayBuffer(file.raw);
      reader.onload= async ()=> {
        const data = reader.result
        const ops = {
          tags: [{name: "FileName", value:file.name},{name: "Content-Type",value:file.raw.type}]
        }
        // todo need user change tokenSymbol, not only 'usdc'
         const res = await this.instance.sendAndPay('https://arseed.web3infura.io', data, 'usdc',ops)
        console.log(res)
        this.submitResp = JSON.stringify(res)
      }
    },
  },
  mounted() {
    this.pubId = pubsub.subscribe('connected',(msgName,data)=>{
      this.connected = true
      this.instance = data
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
};
</script>

