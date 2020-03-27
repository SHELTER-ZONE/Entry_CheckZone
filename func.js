window.onload = function () {
    
    var app = new Vue({
        el: '#app',
        data: {
            show: 'card1',
            current_page: 0,
            main_contain: ""
        },
        components: {
            'card1': {
                template: `
                <div class="card-body">
                    <p >自2020/4 月起 </p>
                    <p class="block" >
                        為防止 無視邊境檢查頻道內容，直接進入伺服器者 <br>
                        統一以外部網站實現強制性閱讀內容
                    </p>
                    <p style="font-size: 14pt;">
                        請按下方 "NEXT" 按鈕依序閱讀內容 <br>
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
                        <span style="color: red;">30天 未進行 "任何互動"(訊息/語音聊天) 及 未上線者</span>
                        
                    </p>
                    <p style="font-size: 14pt;">
                        請按下方 "NEXT" 按鈕依序閱讀內容 <br>
                        將在最後給予進入伺服器許可的指令 <br>
                        並於Discord - SHELTER ZONE 伺服器內的邊境檢查頻道輸入指令即可
                    </p>
                </div>
                `
            }
        },
        methods: {
            next_contain: function () {
                if (this.current_page == 2){return}
                this.current_page += 1
                
                if (this.current_page == 1) {
                    this.show = "card2"
                };
                
                if (this.current_page == 2) {
                    this.main_contain = "Change2"
                };
            },

            pre_contain: function () {
                if (this.current_page == 0){return}
                this.current_page -= 1

                if (this.current_page == 0) {
                    this.show = "card1"
                    
                };

            }
        }
    })

    
}


