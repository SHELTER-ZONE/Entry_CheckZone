window.onload = function () {
    Vue.component('card6', {
        data(){
            return {
                token: "Click Generate"
            }
        },
       
        template:`
        <div class="card-body">
            <h3> 認證指令生成 </h3>
            <p> 📢 認證指令產生</p>
            <p>如果你同意所有規則與觀點，並且對此伺服器還有興趣:</p>
            <p> 生成指令後請直接複製 並於 🚧邊境檢查 頻道內直接輸入指令即可</p>
            <p class="block" id="token-show">
                <span style="font-size: 30pt;">{{this.token}}</span>
            </p>
            <div id="gen-btn-container">
                <button id="gen-btn" v-on:click="gen_token">Generate</button>
            </div>
        </div>
        `,
        methods: {
            gen_token: function () {
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

                var symbol_list = ['#', '@', '%', '&']
                var char_list = ['b', 'c', 'd', 'f', 'g', 'i', 'j', 'w', 'r', 'm', 'n', 'v', 'o']
                var set_list = ['ap', 'sz', 'te', 'xh']
                var rand_token = []
                
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
                this.token = "atcert " + data
            }
        }
    })
    
    var app = new Vue({
        el: '#app',
        data: {
            show: 'card1',
            current_page: 1,
            cooldown: true,
            btn_text: 'Cooling Down...'
        },
        components: {
            'card1': {
                template: `
                <div class="card-body">
                    <p >自2020/4 月起 </p>
                    <p class="block" >
                        為防止 "無視" 邊境檢查頻道內容，直接進入伺服器者 <br>
                        統一以外部網站實現強制性閱讀內容與認證機制
                    </p>
                    <p style="font-size: 14pt;">
                        請按下方 "NEXT" 按鈕依序閱讀內容 (每個Page 有10秒的冷卻時間)<br>
                        將在最後給予進入伺服器許可的指令 <br>
                        並於Discord - SHELTER ZONE 伺服器內的邊境檢查頻道輸入指令即可
                    </p>
                </div>
                `
            },
            'card2': {
                template:`
                <div class="card-body">
                    <h3> 伺服器規定 </h3>
                    <p> 👻 成員踢除 (幽靈清理機制)</p>
                    <p class="block" >
                        <span style="color: rgb(255, 50, 84);">30天 未進行 "任何互動"(訊息/語音聊天) 及 未上線者</span><br>
                        <span style="color: rgb(69, 226, 187);">將於每個 "星期六" 發佈成員欲剔除名單， 並於後日 "星期一" 進行剔除</span><br>
                        <span >P.S. 剔除後仍可透過邀請連結重新加入，並非封鎖</span>
                    </p>

                    <p> 🚫 封鎖 (Ban)</p>
                    <p class="block" >
                        <span style="color: rgb(255, 50, 84);">騷擾/汙辱/惡意攻擊 者</span><br>
                        <span >經警告3次後，永久封鎖!</span>
                    </p>
                </div>
                `
            },
            'card3': {
                template:`
                <div class="card-body">
                    <h3> 伺服器規定 </h3>
                    <p> ❗ 提醒(Mention)</p>
                    <p class="block" >
                        <span style="color: yellow;">R-18</span><br>
                        <span >R-18相關內容請在R-18專屬頻道內發佈</span><br>
                        <span >禁止 兒童色情 (羅莉、Shotacon)  >> 以不露點為原則</span>
                        <br><br>
                        <span style="color: yellow;">對應頻道</span><br>
                        <span style="color: lightskyblue;">發表之 訊息/內容 請在相對應的頻道</span><br>
                        <span >(無在相對應發佈之 內容/訊息 予以刪除)</span><br>
                        <span style="color: rgb(255, 50, 84);">請勿在任何 結尾有 "分享區" 的頻道內 閒聊/提問</span><br>
                        <span>Ex. 資訊分享區、完成作品分享區、程式/3D/2D 資源分享區 ...等</span><br>
                    </p>
                </div>
                `
            },
            'card4': {
                template:`
                <div class="card-body">
                    <h3> 伺服器規定 </h3>
                    <p> ❗ 提醒(Mention)</p>
                    <p class="block" >
                        <span style="color: yellow;">伸手黨</span><br>
                        <span >本群為 <span style="font-size: 14pt;color: lightskyblue;">"技術交流"</span> 群，
                        <span style="color: rgb(255, 50, 84); font-size: 14pt;">嚴禁</span>任何 
                        <span style="color: rgb(255, 50, 84); font-size: 14pt;">"伸手行為"</span></span><br>
                        <span >Ex. 誰能幫我寫DC Bot 的 xx 指令?</span><br>
                        <span >Ex. 誰能幫我畫 xxx 圖?</span><br>
                        <span >Ex. 誰能幫我畫 xxx 3D模型?</span><br>
                        <br>
                        <span>同時技術交流"大部分"是協助你找到答案或解決方案，而非直接給你答案</span><br>
                        <span style="color: #ecb775;">- 我們秉持著給釣竿不給魚的理念</span><br>
                        <span style="color: #ecb775;">- 所有問題並不一定代表我們都有能力回答</span><br>
                    </p>
                </div>
                `
            },
            'card5': {
                template:`
                <div class="card-body">
                    <h3> 伺服器規定 </h3>
                    <p> 📢 群主碎碎唸</p>
                    <p class="block" >
                        <span style="color: yellow;">不要再一直私訊我問問題 (╯‵□′)╯︵┻━┻</span><br>
                        <span >Code 、 3D 、 2D 的相關技術問題，請在伺服器內的對應頻道尋求幫助</span><br>
                        <span >你們加入伺服器不就是為了尋求幫助與交流嗎 !?</span><br>
                        <span >然後在伺服器裡不問 卻偏偏要來私訊我 ╰（‵□′）╯ </span><br>
                        <span >如果屬於較隱私的問題非得私訊，可以在伺服器內先標記我，告知有事需要私訊，否則一律無視私訊! </span>
                    </p>
                </div>
                `
            }
        },
        methods: {
            next_contain: function () {
                if (this.current_page != 4) {
                    this.cooldown = false
                    setTimeout(() => {
                        this.cooldown = true
                    }, 10000);
                }
                if (this.current_page == 4) {
                    this.cooldown = false
                    this.btn_text = ''
                }

                if (this.current_page == 5){return}
                this.current_page += 1

                if (this.current_page == 2) {this.show = "card2"};
                if (this.current_page == 3) { this.show = "card3" };
                if (this.current_page == 4) { this.show = "card4" };
                if (this.current_page == 5) { this.show = "card5" };
                if (this.current_page == 5) {this.show = "card6"};
            },

            pre_contain: function () {
                this.cooldown = true
                this.btn_text = 'Cooling Down...'
                if (this.current_page == 1){return}
                this.current_page -= 1

                if (this.current_page == 1) {this.show = "card1"};
                if (this.current_page == 2) { this.show = "card2" };
                if (this.current_page == 3) { this.show = "card3" };
                if (this.current_page == 4) { this.show = "card4" };
                if (this.current_page == 5) {this.show = "card5"};
            },       
        }
    })

    
}


