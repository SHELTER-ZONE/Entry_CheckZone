<template>
    <div id="app" ref="app">
        <div class="prime-title">
            SHELTER ZONE | CheckZone 🚧邊境檢查
        </div>

        <component :is="this.curpage"/>

        <p id="cooler" v-show="cooling">Cooling Down...</p>

        <div class="btn-wrapper">
            <button 
                class="btn" 
                :class="[{deactive:pagenum === 1}, {deactive:curpage === 'Gen_token'}]"
                @click="prepage"
            >上一頁</button>
            <button 
                class="btn" 
                :class="[{deactive:pagenum === maxpage}, {deactive:curpage === 'Gen_token'}]"
                @click="nextpage"
                >下一頁</button>
        </div>
        
        <v-dialog />
    </div>
</template>

<script>
import Page_1 from '@/components/Page_1.vue'
import Page_2 from '@/components/Page_2.vue'
import Page_3 from '@/components/Page_3.vue'
import Page_4 from '@/components/Page_4.vue'
import Gen_token from '@/components/Gen_token.vue'
    export default {
        name: 'App',
        components: {
            Page_1,
            Page_2,
            Page_3,
            Page_4,
            Gen_token
        },

        methods:{
            cooldown(){
                this.$store.commit('SET_CURPAGE')
                this.$store.commit('SET_COOLING', true)
                setTimeout(() => {
                    this.$store.commit('SET_COOLING', false)
                }, 5000);
            },
            nextpage(){
                if(this.cooling)return
                this.$store.commit('SET_PAGENUM', this.pagenum + 1)
                this.cooldown()
                setTimeout(() => {
                    this.$refs.app.scrollTo({ top: 0, behavior: 'smooth' });
                });
            },
            prepage(){
                if(this.cooling)return
                this.$store.commit('SET_PAGENUM', this.pagenum - 1)
                this.cooldown()
                setTimeout(() => {
                    this.$refs.app.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        },
        computed:{
            again(){
                return this.$store.state.again
            },
            curpage(){
                return this.$store.state.curpage
            },
            pagenum(){
                return this.$store.state.pagenum
            },
            maxpage(){
                return this.$store.state.maxpage
            },
            cooling(){
                return this.$store.state.cooling
            },
        },
        mounted(){
            
            this.$modal.show("dialog", {
                title: "Welcome",
                text: "此為強制性 「伺服器規則導讀」與「進入認證」機制",
                buttons: [
                    {
                        title: "了解",
                        handler: () => {
                            this.$modal.hide("dialog")
                        }
                    }
                ]
            })
        }
    }
</script>

<style lang="scss">
    @import url('./assets/scss/style.scss');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&display=swap');

    * {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans TC', sans-serif;
    }
    body {
        background-color: rgb(36, 36, 36);
        background-image: url('./assets/foggy-mountains.jpeg');
        background-size: cover;
    }

    html,
    body,
    #app {
        background-color: rgba($color: #000000, $alpha: .3);
        width: 100%;
        height: 100%;
    }

    #app {
        padding: 20px;
        box-sizing: border-box;
        overflow: auto;
    }

    .prime-title{
        font-size: 30px;
        color: skyblue;
        margin-bottom: 50px;
    }

    .btn-wrapper{
        position: relative;
        margin-top: 50px;

        .btn{
            background-color: rgba($color: white, $alpha: .5);
            outline: none;
            width: 45%;
            height: 30px;
            margin-bottom: 50px;
            border: none;
            border-radius: 5px;
            transition: ease-in-out .3s;
        }
        .btn:nth-child(1){
            position: absolute;
            left: 0;
        }
        .btn:nth-child(2){
            position: absolute;
            right: 0;
        }

        .btn:hover{
            background-color: mediumspringgreen;
        }
    }

    .deactive{
        display: none;
    }

    #cooler{
        margin-top: 20px;
        color: mediumspringgreen;
    }


    @media screen and (min-width: 740px){
        #app{
            padding: 200px;
        }
    }
    
</style>