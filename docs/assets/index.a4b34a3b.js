import{p as e,a as t,o as a,c as s,b as r,t as l,r as o,w as c,d as n,e as i,f as u,H as d,g as p,u as m,F as g,i as v,h,j as f,v as b,k as y,l as x,m as k,n as _}from"./vendor.c4ad6150.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,l)=>{const o=new URL(e,s);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),n=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){l(new Error(`Failed to import: ${e}`)),r(n)},onload(){a(self[t].moduleMap[o]),r(n)}});document.head.appendChild(n)})),self[t].moduleMap={}}}("/Entry_CheckZone/assets/");var G="https://api.jsonstorage.net/v1/json/c93bd55a-e1ef-4c78-b95e-3378148449f5",w="https://cors-anywhere.herokuapp.com/",S="https://EnCodeAPI.proladon.repl.co/encode";const I=c();e("data-v-5e7900d2");const C={class:"card-title"},D={class:"card-content"};t();const U={expose:[],props:{title:String,content:String,gate:String,stage:Number,error:!1},setup:e=>I(((t,c)=>(a(),s("div",{class:["gate-card",{"disable-stage":e.stage<Number(e.gate),"current-stage":e.stage===Number(e.gate),"complete-stage":!e.error&&e.stage>Number(e.gate),"error-stage":e.error}]},[r("p",C,l(e.title),1),r("div",D,[o(t.$slots,"default",{},void 0,!0)])],2)))),__scopeId:"data-v-5e7900d2"};const j=r("p",{class:"text-4xl text-cool-gray-400 m-10"},"SHELTER ZONE - 🚧 邊境檢查",-1),L={class:"gate-column"},E=k("IP: "),R={class:"text-teal-400"},$=k("Country: "),M={class:"text-teal-400"},N=r("hr",{class:"border-gray-400 sm:w-2/4 w-3/4 mt-4 mb-4"},null,-1),O={class:"gate-row mb-2"},P=r("p",{class:"description"},"請先加入Discord伺服器",-1),V=r("p",{class:"description"},"從何來到此處",-1),B={class:"btn-container"},F={class:"gate-column"},H=r("p",{class:"description"},"請依照提示重複輸入文字",-1),Z={class:"input-container"},A=r("hr",{class:"mb-2 border-gray-400"},null,-1),J=r("div",{class:"other-notice mb-5"},[r("p",{class:"text-lg mb-2"},"其他注意事項:"),r("p",null,"1. 不要在任何分享性質頻道閒聊與問答"),r("p",null,"2. 除非問題涉及隱私，否則別亂私訊他人"),r("p",null,"3. 拜託，當個有素質的正常人")],-1),T=r("p",null,"如違反以上規定，且不聽從管理員勸告指示者，一律永Ban",-1),Y={class:"checkbox-container"},q=r("label",{for:"agree"},"我同意以上條款",-1),z=r("p",{class:"description"},"於伺服器 💾terminal 頻道輸入 atid 指令可獲取自己的Discord ID",-1),K=r("p",{class:"description"},"請確實輸入ID，否則產生的驗證碼為無效驗證碼",-1),Q={key:0},W=k("你的驗證碼: "),X={class:"text-orange-400"},ee=r("p",{class:"text-gray-400 mt-2"},"於伺服器 💾terminal 頻道輸入指令 p\\check + 你的驗證碼",-1),te=r("p",{class:"text-cyan-500"},"範例: p\\check 8@2f89%2",-1),ae=r("p",{class:"text-gray-400"},"如有任何指令或驗證碼無法運作，請聯繫管理員或Proladon#7525",-1);_({expose:[],setup(e){const t=n(""),o=n(""),c=i({ip:"Loading...",country:"Loading..."}),k=i({curGate:2,inviteSource:[{name:"巴哈文章",selected:!1},{name:"Youtube",selected:!1},{name:"朋友介紹",selected:!1},{name:"Google",selected:!1}],userID:"",user:{name:String,discriminator:String,bot:Boolean},terms:[{placeholder:"禁止引戰、謾罵、洗頻",value:""},{placeholder:"減少不雅用詞",value:""},{placeholder:"尊重與遵從管理員其指示",value:""},{placeholder:"保持頻道主題相符話題",value:""}],agree:!1}),_=i({source:!1,terms:!1}),I=()=>{const e=w,t=k.userID,a=c.country.trim();o.value="產生中...請稍後",d.post(e+S,{data:`${a} ${t}`}).then((e=>{console.log(e.data),o.value=e.data}))},C=()=>{let e=0;for(const t of k.inviteSource)t.selected&&(e+=1);_.source=0===e},D=()=>{for(const e of k.terms){const t=e.value.trim();if(""===t||t!==e.placeholder)return _.terms=!0,void(k.agree=!1);_.terms=!1,k.curGate=4}};return u((()=>{d.get("https://api.ipify.org?format=json").then((async e=>{const t=await v(e.data.ip);c.ip=e.data.ip,c.country=t.country.name})),d.get(G).then((e=>{t.value=e.data.invite_link}))})),(e,n)=>(a(),s(g,null,[j,r("div",L,[r(U,{title:"Client Information"},{default:p((()=>[r("p",null,[E,r("span",R,l(m(c).ip),1)]),r("p",null,[$,r("span",M,l(m(c).country),1)])])),_:1})]),N,r("div",O,[r(U,{title:"Gate 01 - 加入伺服器",class:"ms:mr-1.5",gate:"1",stage:m(k).curGate},{default:p((()=>[P,r("a",{class:"text-cool-gray-700 bg-teal-400 px-4 rounded-sm",href:t.value,target:"_blank",onClick:n[1]||(n[1]=e=>m(k).curGate=2)}," Join Server ",8,["href"])])),_:1},8,["stage"]),r(U,{title:"Gate 02 - 來源管道",class:"sm:ml-1.5",gate:"2",stage:m(k).curGate,error:m(_).source},{default:p((()=>[V,r("div",B,[(a(!0),s(g,null,h(m(k).inviteSource,((e,t)=>(a(),s("div",{class:["btn",{selected:e.selected}],key:e.name,onClick:e=>(e=>{const t=k.inviteSource[e].selected;k.inviteSource[e].selected=!t,k.curGate=3,C()})(t)},l(e.name),11,["onClick"])))),128))])])),_:1},8,["stage","error"])]),r("div",F,[r(U,{title:"Gate 03 - 避難者條款",gate:"3",class:"mb-2",stage:m(k).curGate,error:m(_).terms},{default:p((()=>[H,r("div",Z,[(a(!0),s(g,null,h(m(k).terms,((e,t)=>f((a(),s("input",{type:"text",key:e.placeholder,placeholder:e.placeholder,"onUpdate:modelValue":e=>m(k).terms[t].value=e,class:["form-input",{"error-input":m(k).terms[t].value!==m(k).terms[t].placeholder,"right-input":m(k).terms[t].value===m(k).terms[t].placeholder}]},null,10,["placeholder","onUpdate:modelValue"])),[[y,m(k).terms[t].value]]))),128))]),A,J,T,r("div",Y,[f(r("input",{type:"checkbox",id:"agree","onUpdate:modelValue":n[2]||(n[2]=e=>m(k).agree=e),class:"mx-5",onChange:D},null,544),[[b,m(k).agree]]),q])])),_:1},8,["stage","error"]),r(U,{title:"Gate 04 - 認證碼",class:"mb-2",gate:"4",stage:m(k).curGate},{default:p((()=>[z,K,f(r("input",{type:"text",class:"form-input","onUpdate:modelValue":n[3]||(n[3]=e=>m(k).userID=e),placeholder:"此輸入你的 Discord ID"},null,512),[[y,m(k).userID]]),r("button",{onClick:I},"產生驗證碼"),""!==o.value?(a(),s("p",Q,[W,r("span",X,l(o.value),1)])):x("",!0),ee,te])),_:1},8,["stage"]),ae])],64))}}).mount("#app");
