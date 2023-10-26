import{d as N}from"./seventv.useModule.3.0.9.js";import{e as C,a as I,w as T,ak as A,al as M,aI as E,R as L,l as D,f as F,k as j,F as R,am as B,s as S,u as $}from"./seventv.index.3.0.9.js";import{C as O}from"./seventv.ChatMessage.3.0.9.js";import{u as k}from"./seventv.useChannelContext.3.0.9.js";import{u as x}from"./seventv.useChatEmotes.3.0.9.js";import{r as y,a9 as P}from"./seventv.useUserAgent.3.0.9.js";function V(w){var u,t;return((t=(u=atob(decodeURIComponent(atob(w))).split(`*'
`))==null?void 0:u[1].split("\v"))==null?void 0:t[0])??""}const q=C({__name:"ChatAutocomplete",props:{w:{}},setup(w){const u=w,t=k(),r=x(t),h=y(null),n=y(null),a=y([]);return I(r.active,()=>{a.value=[...[r.byProvider("7TV"),r.byProvider("BTTV"),r.byProvider("FFZ")].flatMap(e=>Object.values(e).flatMap(s=>s.emotes))]}),T(async()=>{h.value=await u.w.customElements.whenDefined("yt-live-chat-text-input-field-renderer"),h.value&&(n.value=new h.value)}),I(n,(e,s)=>{s&&A(s,"getSuggestions"),e&&M(e.constructor.prototype,"getSuggestions",function(p,f){const c=p==null?void 0:p.apply(this,[f]);if(!c||!Array.isArray(c))return;const v=f.toLowerCase().slice(1),m=a.value.filter(i=>i.name.toLowerCase().includes(v));return c.push(...m.map(i=>{var d;return{suggestion:{alt:i.name,emoji:!0,text:i.name,textToInsertWhenSelected:i.name,image:{accessibility:{accessibilityData:{label:i.name}},thumbnails:(d=i.data)==null?void 0:d.host.files.filter(o=>o.format===i.data.host.files[0].format).map(o=>({url:`${i.data.host.url}/${o.name}`,width:o.width,height:o.height}))}}}})),c})},{immediate:!0}),(e,s)=>null}}),H=C({__name:"ChatData",setup(w){const u=k(),t=x(u),r=P(u,"id"),h=E(()=>L.channels.where("id").equals(u.id??"").first().then(n=>(n==null?void 0:n.set_ids)??[]),()=>{t.providers["7TV"]={},t.providers.FFZ={},t.providers.BTTV={}},{reactives:[r]});return E(()=>L.emoteSets.where("id").anyOf(h.value??[]).or("scope").equals("GLOBAL").sortBy("priority"),n=>{if(!n)return;for(const e of n){const s=e.provider??"UNKNOWN";t.providers[s]||(t.providers[s]={}),t.providers[s][e.id]=e,t.sets[e.id]=e}const a={};for(const e of n.flatMap(s=>s.emotes)){if(!e)return;a[e.name]=e}for(const e in t.emojis){const s=t.emojis[e];!s||!s.unicode||(a[s.unicode]=s)}for(const e in a)t.active[e]=a[e]},{reactives:[h]}),(n,a)=>null}}),W=C({__name:"ChatController",props:{w:{},channelId:{},chatList:{}},setup(w){const u=w,t=k(u.channelId,!0),r=x(t),h={};return T(()=>{t.setCurrentChannel({id:u.channelId,displayName:"",username:"",active:!0}),M(u.chatList.constructor.prototype,"handleAddChatItemAction_",function(n,a){var d;if(!a||!a.item||!((d=a.item.liveChatTextMessageRenderer)!=null&&d.message))return n==null?void 0:n.apply(this,[a]);const e=new O(a.clientId??a.clientMessageId??"");for(const o of a.item.liveChatTextMessageRenderer.message.runs)if(o.text)e.body+=o.text;else if(o.emoji){const l=o.emoji.image.accessibility.accessibilityData.label;e.body+=l,h[l]||(h[l]={id:o.emoji.emojiId,name:l,data:{id:o.emoji.emojiId,name:l,owner:null,host:{url:"",files:o.emoji.image.thumbnails.map(g=>({name:g.url,width:g.width,height:g.height,format:"PNG"}))}}})}const s=a.item.liveChatTextMessageRenderer.message.runs;s.length=0;const p=e.getTokenizer(),f=(p==null?void 0:p.tokenize({emoteMap:{...r.active,...h},chatterMap:{}}))??[],c=[],v=e.body;let m=0;for(const o of f){const l=o.range[0],g=o.range[1],_=v.substring(m,l);_&&c.push(_),c.push(o),m=g+1}const i=v.substring(m);i&&c.push(i);for(const o of c){if(typeof o=="string"){s.push({text:o});continue}switch(o.kind){case"EMOTE":{const l=o.content;if(!l.emote||!l.emote.data)break;const g=!h[l.emote.name],_=l.emote.data.host;s.push({emoji:{emojiId:g?`seventv:${l.emote.id}`:l.emote.id,image:{accessibility:{accessibilityData:{label:l.emote.name}},thumbnails:_.files.filter(b=>b.format===_.files[0].format).slice(0,2).map(b=>({url:_.url?`${_.url}/${b.name}`:b.name,width:b.width,height:b.height}))},isCustomEmoji:!0}});break}}}return n==null?void 0:n.apply(this,[a])})}),(n,a)=>(D(),F(R,null,[j(H),j(q,{w:n.w},null,8,["w"])],64))}});const Q=C({__name:"ChatModule",setup(w){const{markAsReady:u}=N("chat",{name:"Chat",depends_on:[]}),t=y(""),r=y(window),h=window.navigation,n=y(""),a=y(null),e=y(null),s=y(null);h.addEventListener("navigate",f=>{f.destination&&(n.value=f.destination.url)});async function p(f){var i;const c=f.document.querySelector("yt-live-chat-message-input-renderer");if(!c){const d=f.yt;t.value=((i=d==null?void 0:d.config_)==null?void 0:i.CHANNEL_ID)??"";return}const v=c.data.sendButton.buttonRenderer.serviceEndpoint.sendLiveChatMessageEndpoint.params,m=V(v);t.value=m}return B(n,async()=>{const c=window.frames.chatframe;if(r.value=c?c.contentWindow:window,!r.value)return;a.value=await r.value.customElements.whenDefined("yt-live-chat-item-list-renderer"),s.value=await r.value.customElements.whenDefined("yt-live-chat-message-input-renderer"),e.value=new a.value;const v=window.document.querySelectorAll("#seventv-stylesheet, [data-vite-dev-id]");v.length&&r.value.frameElement&&v.forEach(m=>{let i;switch(m.tagName){case"STYLE":{if(!m.dataset.viteDevId)break;(i=document.createElement("style")).appendChild(document.createTextNode(m.innerHTML));break}case"LINK":{if(m.id!=="seventv-stylesheet")break;const d=i=document.createElement("link");d.rel="stylesheet",d.href=m.href,d.id=m.id;break}}i&&r.value.document.head.appendChild(i)}),p(r.value)},{debounce:2e3,immediate:!0}),u(),(f,c)=>e.value&&t.value?(D(),S(W,{key:0,w:r.value,"chat-list":e.value,"channel-id":t.value},null,8,["w","chat-list","channel-id"])):$("",!0)}});export{Q as _};
