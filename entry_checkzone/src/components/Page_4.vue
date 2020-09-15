<template>
    <div id="page-four" class="section">
        <p class="title">請回答以下問題</p>

        <p class="title-2">1. 超過幾天沒發訊息/上線會被踢除?</p>

        <div class="checkbox-wrapper">
            <input type="checkbox" name="q1" id="" >
            <label for="q1"> 15天</label><br>
        </div>

        <div class="checkbox-wrapper">
            <input type="checkbox" name="q2" id="" ref="a1">
            <label for="q2"> 30天</label><br>
        </div>

        <p class="title-2">2. 以下何者正確?</p>

        <div class="checkbox-wrapper">
            <input type="checkbox" name="q3" id="">
            <label for="q3"> 可以隨時私訊任何伺服器內的人進行提問</label><br>
        </div>

        <div class="checkbox-wrapper">
            <input type="checkbox" name="q3" id="">
            <label for="q3"> 可以詢問別人我不會寫的Bot指令的所有程式碼</label><br>
        </div>

        <div class="checkbox-wrapper">
            <input type="checkbox" name="q5" id="" ref="a2">
            <label for="q5"> 應該在伺服器內對應頻道提問，避免使用私訊</label><br>
        </div>

        <div class="checkbox-wrapper">
            <input type="checkbox" name="q5" id="">
            <label for="q5"> 每次回覆對方或引用回覆時，應該同時@標記對方，以免對方不知道我在跟他說話</label><br>
        </div>

        <button class="sub" @click="getc">提交</button>

    </div>
</template>

<script>
    export default {
        methods:{
            getc(){
                let empty = true
                document.getElementsByTagName('input').forEach(element => {
                    if (element.checked){
                        empty = false
                    }
                });
                
                if(empty){
                    this.$modal.show("dialog", {
                        title: "操作錯誤",
                        text: "請回答頁面上的問題以繼續",
                        buttons:[
                            {
                                title: "了解",
                                handler: () => {
                                    this.$modal.hide("dialog")
                                }
                            }
                        ]
                    })
                }

                if (this.$refs.a1.checked && this.$refs.a2.checked){
                    this.$store.commit("PASS")
                    console.log("pass")
                }
                else{
                    this.$modal.show("dialog", {
                        title: "回答有誤",
                        text: "代表你根本沒有仔細觀看伺服器規定，請重新仔細觀看規定。如果你不願尊重規定，慢走不送謝謝!",
                        buttons:[
                            {
                                title: "了解",
                                handler: () => {
                                    this.$store.commit('RESET')
                                    this.$modal.hide("dialog")
                                }
                            }
                        ]
                    })
                }
            }
        }
    }
</script>


<style scoped lang="scss">

.sub{
    margin-top: 20px;
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: lightgray;
    transition: ease-in-out .3s;
}

.sub:hover{
    background-color: skyblue;
}


</style>