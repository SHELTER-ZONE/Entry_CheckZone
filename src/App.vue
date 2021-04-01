<template>
  <p class="text-cool-gray-400">SHELTER ZONE - 邊境檢查</p>

  <div class="gate-column">
    <Gate title="Client Information">
      <p>IP: <span class="text-teal-400">{{clientInfo.ip}}</span></p>
      <p>Country: <span class="text-teal-400">{{clientInfo.country}}</span></p>
    </Gate>
  </div>

  <hr class="border-gray-400 sm:w-2/4 w-3/4 mt-4 mb-4">
  
  <!-- Gate 1-2 -->
  <div class="gate-row mb-2">
    <Gate title="Gate 01 - 加入伺服器" class="ms:mr-1.5" gate="1" :stage="formData.curGate">
      <p class="description">請先加入Discord伺服器</p>
      <a class="text-cool-gray-700 bg-teal-400 px-4 rounded-sm"
        :href="serverLink"
        target="_blank"
        
        @click="formData.curGate = 2"
      >
        Join Server
      </a>
    </Gate>

    <Gate title="Gate 02 - 來源管道" class="sm:ml-1.5" 
      gate="2" 
      :stage="formData.curGate" 
      :error="gateError.source">
      <p class="description">從何來到此處</p>
      <div class="btn-container">
        <div class="btn"
          v-for="source, index in formData.inviteSource" 
          :key="source.name"
          :class="{selected : source.selected}" 
          @click="selectSource(index)"
          >
          {{source.name}}
        </div>
      </div>
    </Gate>
  </div>

  <!-- Gate 3-4 -->
  <div class="gate-column">
    <Gate title="Gate 03 - 認證使用者 Discord ID" class="mb-2" 
      gate="3" 
      :stage="formData.curGate">
      <p class="description">請先加入Discord伺服器</p>
    </Gate>
    
    <Gate title="Gate 04 - 避難者條款" gate="4" :stage="formData.curGate">
      <p class="description">請依照提示重複輸入文字</p>
      <div class="input-container">
        <input type="text" placeholder="禁止引戰、謾罵、洗頻" class="form-input">
        <input type="text" placeholder="減少不雅用詞" class="form-input">
        <input type="text" placeholder="尊重與遵從管理員其指示" class="form-input">
        <input type="text" placeholder="保持與頻道主題相符的話題" class="form-input">
      </div>
    </Gate>
  </div>

</template>

<script setup>
import ipLocation from 'iplocation'
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue';
import evnData from './assets/evnData.json'
import Gate from '/src/components/Gate.vue'


const clientInfo = reactive({
  ip: "Loading...",
  country: "Loading..."
})

const formData = reactive({
  curGate:2,
  inviteSource: [
    {
      name: '巴哈文章',
      selected: false
    },
    {
      name: 'Youtube',
      selected: false
    },
    {
      name: '朋友介紹',
      selected: false
    },
    {
      name: 'Google',
      selected: false
    }
  ],
  
})

const gateError = reactive({
  source: false
})

const serverLink = ref("")


const selectSource = (index)=>{
  const current = formData.inviteSource[index].selected
  formData.inviteSource[index].selected = !current
  formData.curGate = 3

  sourceCheck()
}

//:: Gate Check
const sourceCheck = ()=>{
  let count = 0
  
  for(const source of formData.inviteSource){
    if(source.selected) count += 1
  }

  if(count === 0){
    gateError.source = true
  } else{
    gateError.source = false
  }
}

// 取得使用者IP地址國家
const getClientInfo = () => {
  axios.get('https://api.ipify.org?format=json')
    .then(async res => {
      const ipData = await ipLocation(res.data.ip)
      clientInfo.ip = res.data.ip
      clientInfo.country = ipData.country.name
    })
}

onMounted(()=>{
  // getClientInfo()  
  axios.get(evnData.szData)
    .then(res=>{
      serverLink.value = res.data['invite_link']
    })
})
</script>

<style>
body{
  @apply bg-cool-gray-800
}

#app{
  @apply flex flex-col justify-center items-center
}

.gate-row{
  @apply flex flex-col w-3/4 sm:flex-row sm:w-2/4 
}

.gate-column{
  @apply flex flex-col items-center justify-center w-3/4 sm:w-2/4
}

.form-input{
  @apply text-teal-400 bg-cool-gray-700 focus:border-b-1  focus:border-cool-gray-400 focus:text-gray-100 outline-none  px-2 m-2
}

.input-container{
  @apply flex flex-wrap justify-around
}

.btn{
  @apply text-gray-400 border-gray-400 border-1 px-4 w-1/2 cursor-pointer text-center select-none
}

.btn-container{
  @apply flex flex-wrap w-3/4 w-full
}

.selected{
  @apply bg-teal-400 border-teal-400 text-cool-gray-700
}

.description{
  @apply text-gray-500 mb-5
}


</style>