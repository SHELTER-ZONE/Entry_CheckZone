<template>
   <div id="generate-token">
       <input type="text" name="" id="" placeholder="Click Generate" ref="token">
       <div class="copy-btn">
           <button @click="copytoken">複製指令碼</button>
       </div>
       
       <div class="gen-btn">
        <button @click="gettoken">Generate</button>
       </div>
   </div>
</template>

<script>
   export default {
       methods:{
           copytoken(){
               if (this.$refs.token.value === ''){
                   this.$modal.show("dialog", {
                       title: "成就獲得",
                       text: "成就「英文不及格」，天啊! 你連 \"Click\"是甚麼意思都不知道嗎...(汗"
                   })
               }
               else{
                   this.$refs.token.select();
                   this.$refs.token.setSelectionRange(0, 99999);
                   document.execCommand("copy");

                   this.$modal.show("dialog", {
                       title: "複製成功",
                       text: "請至伺服器 🚧邊境檢查 頻道輸入此命令即可"
                   })
               }
           },
           gettoken(){
               function shuffle(a) {
                    var j, x, i;
                    for (i = a.length - 1; i > 0; i--) {
                        j = Math.floor(Math.random() * (i + 1));
                        x = a[i];
                        a[i] = a[j];
                        a[j] = x;
                    }
                    return a;
                }

                let symbol_list = ['#', '@', '%', '&']
                let char_list = ['b', 'c', 'd', 'f', 'g', 'i', 'j', 'w', 'r', 'm', 'n', 'v', 'o']
                let set_list = ['ap', 'sz', 'te', 'xh']
                let rand_token = []
                
                const rand_symbol = symbol_list[Math.floor(Math.random() * symbol_list.length)];
                const rand_char = char_list[Math.floor(Math.random() * char_list.length)];
                const rand_set = set_list[Math.floor(Math.random() * set_list.length)];
                const rand_num = Math.floor(Math.random() * 9) + 1 
                rand_token.push(rand_symbol, rand_char, String(rand_num), rand_set)
                rand_token = shuffle(rand_token)
                let data = ""
                rand_token.forEach(function (value) {
                    data += value;
                })
                this.$refs.token.value = "atcert " + data

           }
       }
   }
</script>

<style scoped lang="scss">
input{
    pointer-events: none;
    text-align: center;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 30px;
}
.copy-btn{
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        outline: none;
        border: none;
        border-radius: 10px;
        width: 30%;
    }
}
.gen-btn{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        outline: none;
        border: none;
        border-radius: 5px;
        width: 70%;
        height: 30px;
    }

    button:hover{
        background-color: mediumspringgreen;
    }
}


</style>