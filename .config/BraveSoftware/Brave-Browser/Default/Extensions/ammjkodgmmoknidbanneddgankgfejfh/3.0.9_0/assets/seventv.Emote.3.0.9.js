import{a as Q,f as H,i as V}from"./seventv.Transform.3.0.9.js";import{e as I,l as s,f as a,j as n,_ as A,w as Z,a as R,k as M,u as r,y as J,z as X,G as j,H as Y,s as P,x as F,F as B,m as q,aM as K,q as ee,aH as te,aN as oe,Z as se}from"./seventv.index.3.0.9.js";import{r as m,a as z,l as ae,t as f,u as $,b as D,n as O}from"./seventv.useUserAgent.3.0.9.js";import{g as C,a as ne,u as ie}from"./seventv.seventv.user.gql.3.0.9.js";import{u as re}from"./seventv.index.3.0.92.js";import{D as le}from"./seventv.useCosmetics.3.0.9.js";import{a as me}from"./seventv.useChatEmotes.3.0.9.js";import{_ as ce}from"./seventv.StarIcon.3.0.9.js";import{U as de}from"./seventv.UiFloating.3.0.9.js";const ue={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},pe=["xlink:href"],x=I({__name:"SingleEmoji",props:{id:{}},setup(h){return(e,p)=>(s(),a("svg",ue,[n("use",{"xlink:href":"#"+e.id},null,8,pe)]))}});function _e(){return"__APOLLO_CLIENT__"in window?__APOLLO_CLIENT__??null:null}const G=C`
	fragment badge on Badge {
		id
		setID
		version
		title
		image1x: imageURL(size: NORMAL)
		image2x: imageURL(size: DOUBLE)
		image4x: imageURL(size: QUADRUPLE)
		clickAction
		clickURL
	}
`,he=C`
	fragment messageSender on User {
		id
		login
		chatColor
		displayName
		displayBadges(channelID: $channelID) {
			...badge
		}
		__typename
	}

	${G}
`,kt=C`
	fragment messageFields on Message {
		id
		deletedAt
		sentAt
		content {
			...messageContent
		}
		sender {
			...messageSender
		}
		__typename
	}

	fragment messageContent on MessageContent {
		text
		fragments {
			...messageParticle
		}
		__typename
	}
	fragment messageParticle on MessageFragment {
		text
		content {
			... on CheermoteToken {
				...cheermoteFragment
			}
			... on Emote {
				...emoteFragment
			}
			... on User {
				...mentionFragment
			}
			... on AutoMod {
				...automodFragment
			}
			__typename
		}
		__typename
	}
	fragment cheermoteFragment on CheermoteToken {
		bitsAmount
		prefix
		tier
		__typename
	}
	fragment emoteFragment on Emote {
		emoteID: id
		setID
		token
		__typename
	}
	fragment mentionFragment on User {
		id
		login
		displayName
		__typename
	}
	fragment automodFragment on AutoMod {
		topics {
			type
			weight
			__typename
		}
		__typename
	}

	${he}
	${G}
`,fe=C`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;C`
	fragment subSummary on SubscriptionSummary {
		id
		name
		offers {
			id
			currency
			exponent
			price
			promoDescription
		}
		emotes {
			id
			token
			subscriptionTier
		}
		url
		tier
		modifiers {
			code
			name
			subscriptionTier
		}
		self {
			subscribedTier
			cumulativeTenure
		}
	}
`;const ve=C`
	fragment subProduct on SubscriptionProduct {
		id
		url
		price
		name
		tier
		interval {
			unit
		}
		state
		emotes {
			id
			setID
			token
		}
		offers {
			id
			tplr
			platform
			eligibility {
				benefitsStartAt
				isEligible
			}
			giftType
			listing {
				chargeModel {
					internal {
						previewPrice {
							id
							currency
							exponent
							price
							total
							discount {
								price
								total
							}
						}
						plan {
							interval {
								duration
								unit
							}
						}
					}
				}
			}
			promotion {
				id
				name
				promoDisplay {
					discountPercent
					discountType
				}
				priority
			}
			quantity {
				min
				max
			}
		}
		emoteModifiers {
			...subscriptionProductEmoteModifier
		}
		self {
			cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
				months
			}
			benefit {
				id
				tier
			}
		}
		owner {
			id
			displayName
			login
			subscriptionProducts {
				id
				tier
				url
				price
				emotes {
					id
					token
				}
				emoteModifiers {
					...subscriptionProductEmoteModifier
				}
			}
			stream {
				id
				type
			}
		}
	}

	fragment subscriptionProductEmoteModifier on EmoteModifier {
		code
		name
	}
`,wt=C`
	fragment modComment on ModLogsComment {
		id
		timestamp
		text
		author {
			...modCommentUser
		}
		channel {
			...modCommentUser
		}
		target {
			...modCommentUser
		}
	}

	fragment modCommentUser on User {
		id
		login
		displayName
		chatColor
	}
`,ge=ne`
	query EmoteCard($emoteID: ID!, $octaneEnabled: Boolean!, $artistEnabled: Boolean!) {
		emote(id: $emoteID) {
			id
			type
			subscriptionTier @include(if: $octaneEnabled)
			token
			setID
			artist @include(if: $artistEnabled) {
				id
				login
				displayName
				profileImageURL(width: 70)
			}
			owner {
				id
				login
				displayName
				profileImageURL(width: 70)
				channel {
					id
					localEmoteSets {
						id
						emotes {
							id
							token
						}
					}
				}
				stream {
					id
					type
				}
				self {
					follower {
						followedAt
					}
					subscriptionBenefit {
						id
						tier
					}
				}
				subscriptionProducts {
					id
					displayName
					tier
					name
					url
					emotes {
						id
						token
					}
					priceInfo {
						id
						currency
						price
					}
				}
			}
			subscriptionProduct @skip(if: $octaneEnabled) {
				...subProduct
			}
			subscriptionSummaries @include(if: $octaneEnabled) {
				...subSummary
			}
			bitsBadgeTierSummary {
				threshold
				self {
					isUnlocked
					numberOfBitsUntilUnlock
				}
			}
			type
		}
	}

	${ve}
	${fe}
`,ye={},be={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",width:"1em",height:"1em"},ke=n("path",{d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"},null,-1),we=[ke];function $e(h,e){return s(),a("svg",be,we)}const Ee=A(ye,[["render",$e]]),W=h=>(J("data-v-08828b10"),h=h(),X(),h),Se={class:"seventv-emote-card-container"},Ce={class:"seventv-emote-card"},Te={class:"seventv-emote-card-image"},Le=["srcset"],Ue={class:"seventv-emote-card-display"},Me={class:"seventv-emote-card-title"},Ie={key:0,class:"seventv-emote-card-title-link"},Ae=["href"],Ne={class:"seventv-emote-card-subtitle"},Fe=["href"],Pe=["src"],Be={key:1,class:"seventv-emote-card-data seventv-emote-card-actor"},De=W(()=>n("p",null,"Added by",-1)),Re={class:"seventv-emote-card-user"},ze=["src"],Oe={key:2,class:"seventv-emote-card-data"},He=W(()=>n("p",null,"Added on",-1)),Ve=I({__name:"EmoteCard",props:{emote:{},size:{}},setup(h){var k;const e=h,p=m(((k=e.emote.data)==null?void 0:k.host)??null),y=m(""),l=z(b()),u=z(b()),T=m(""),E=m(""),v=m(null);function b(){return{id:"",username:"",displayName:"",avatarURL:"",url:""}}return Z(async()=>{var _,w;if(e.emote.provider==="PLATFORM"){const g=_e();if(!g)return;const i=await g.query({query:ge,variables:{emoteID:e.emote.id,artistEnabled:!0,octaneEnabled:!0}}).catch(t=>ae.error("failed to fetch emote card",t));if(!i)return;const{emote:c}=i.data;if(!c)return;const S=Q(c);p.value=S.host,c.owner&&(l.id=c.owner.id,l.username=c.owner.login,l.displayName=c.owner.displayName,l.avatarURL=c.owner.profileImageURL,l.url=`https://twitch.tv/${(_=c.owner)==null?void 0:_.login}`),T.value=((w=c.subscriptionTier)==null?void 0:w.split("_").join(" "))??c.type}else if(e.emote.provider==="7TV"){const{result:g}=re(ie,{id:e.emote.actor_id??""},()=>({enabled:!!e.emote.actor_id}));R(g,i=>{i!=null&&i.user&&(u.id=i==null?void 0:i.user.id,u.username=i==null?void 0:i.user.username,u.displayName=i==null?void 0:i.user.display_name,u.avatarURL=i==null?void 0:i.user.avatar_url)},{immediate:!0}),E.value=new Date(e.emote.timestamp??0).toLocaleDateString(),v.value=`//7tv.app/emotes/${e.emote.id}`}else e.emote.provider==="BTTV"?v.value=`//betterttv.com/emotes/${e.emote.id}`:e.emote.provider==="FFZ"&&(v.value=`//frankerfacez.com/emoticon/${e.emote.id}`)}),R(p,_=>{!_||!_.files.length||(y.value=H(e.size[0],e.size[1],_,e.emote.provider))},{immediate:!0}),(_,w)=>(s(),a("main",Se,[n("div",Ce,[n("div",Te,[n("img",{srcset:y.value,style:{}},null,8,Le)]),n("div",Ue,[n("div",null,[n("h3",Me,[n("span",null,f(_.emote.name),1),v.value?(s(),a("span",Ie,[n("a",{href:v.value,target:"_blank"},[M(Ee)],8,Ae)])):r("",!0)]),n("p",Ne,f(T.value),1),l.id?(s(),a("a",{key:0,class:"seventv-emote-card-user",href:l.url,target:"_blank"},[n("img",{src:l.avatarURL},null,8,Pe),n("span",null,f(l.displayName),1)],8,Fe)):r("",!0),u.id?(s(),a("div",Be,[De,n("p",Re,[n("img",{src:u.avatarURL},null,8,ze),n("span",null,f(u.displayName),1)])])):r("",!0),E.value?(s(),a("div",Oe,[He,n("span",null,f(E.value),1)])):r("",!0)])])])]))}});const je=A(Ve,[["__scopeId","data-v-08828b10"]]),qe={key:0,ref:"tooltip",class:"seventv-tooltip-compact","tooltip-type":"emote"},xe={key:1,ref:"tooltip",class:"seventv-tooltip","tooltip-type":"emote"},Ge=["src","srcset","alt"],We={class:"details"},Qe={class:"emote-name"},Ze={key:2,class:"alias-label"},Je={key:3,class:"creator-label"},Xe={class:"scope-labels"},Ye={key:0,class:"label-global"},Ke={key:1,class:"label-subscriber"},et={key:2,class:"label-channel"},tt={key:3,class:"label-sub-feature"},ot={key:4,class:"label-sub-feature"},st={key:4},at={key:5,class:"divider"},nt={key:6,class:"zero-width-label"},it=["srcset"],rt=I({__name:"EmoteTooltip",props:{emote:{},initSrc:{},overlaid:{},height:{},width:{}},setup(h){var c,S,t;const e=h,p=j("ui.compact_tooltips"),y=m("");e.emote&&e.emote.data&&e.emote.data.host.srcset&&Y(()=>{y.value=H(e.height,e.width,e.emote.data.host,e.emote.provider)},90);const l=m(e.overlaid??{}),u=m(Object.keys(l.value).length>0),T=`${e.width*3}px`,E=`${e.height*3}px`,v=e.emote.scope==="GLOBAL",b=e.emote.scope==="SUB",k=e.emote.scope==="CHANNEL",_=e.emote.scope==="PERSONAL",w=(e.emote.flags||0)!==0,g=m(null);if(e.emote.unicode){const{emojiByCode:o}=me();g.value=o.get(e.emote.unicode)??null}const i=m("inherit");return(t=(S=(c=e.emote.data)==null?void 0:c.owner)==null?void 0:S.style)!=null&&t.color&&(i.value=le(e.emote.data.owner.style.color)),(o,N)=>{var d,U;return $(p)?(s(),a("div",qe,[n("p",null,f(o.emote.name),1)],512)):(s(),a("div",xe,[o.emote.provider!=="EMOJI"?(s(),a("img",{key:0,ref:"imgRef",class:"tooltip-emote",src:o.initSrc,srcset:y.value,alt:o.emote.name,sizes:"auto",style:D({width:T,height:E})},null,12,Ge)):(s(),P(x,{key:1,id:o.emote.id,class:"tooltip-emoji"},null,8,["id"])),n("div",We,[n("h3",Qe,f(o.emote.name),1),M(ce,{class:"logo",provider:o.emote.provider},null,8,["provider"])]),o.emote.data&&o.emote.data.name!==o.emote.name?(s(),a("div",Ze,[F(" aka "),n("span",null,f((d=o.emote.data)==null?void 0:d.name),1)])):r("",!0),(U=o.emote.data)!=null&&U.owner?(s(),a("div",Je,[F(" by "),n("span",{class:"creator-name",style:D({color:i.value})},f(o.emote.data.owner.display_name),5)])):r("",!0),n("div",Xe,[v?(s(),a("div",Ye,"Global Emote")):r("",!0),b?(s(),a("div",Ke,"Subscriber Emote")):r("",!0),k?(s(),a("div",et,"Channel Emote")):r("",!0),_?(s(),a("div",tt,"Personal Emote")):r("",!0),w?(s(),a("div",ot,"Zero-Width")):r("",!0)]),g.value?(s(),a("div",st,[n("div",null,"Emoji - "+f(g.value.group),1)])):r("",!0),u.value?(s(),a("div",at)):r("",!0),u.value?(s(),a("div",nt,[(s(!0),a(B,null,q(l.value,L=>(s(),a("div",{key:L.id,class:"zero-width-emote"},[L.data?(s(),a("img",{key:0,class:"overlaid-emote-icon",srcset:L.data.host.srcset??$(V)(L.data.host,L.provider)},null,8,it)):r("",!0),F(" — "),n("span",null,f(L.name),1)]))),128))])):r("",!0)],512))}}});const lt=A(rt,[["__scopeId","data-v-b5d6eaee"]]),mt=["srcset","alt"],ct=["srcset","alt"],dt=I({__name:"Emote",props:{emote:{},clickable:{type:Boolean},format:{},overlaid:{},unload:{type:Boolean,default:!1},scale:{default:1}},emits:["emote-click"],setup(h,{emit:e}){const p=h,y=j("general.blur_unlisted_emotes"),l=m(),u=m(!1),T=m([0,0]),E=m(),v=m(""),b=m(0),k=m(0),_=t=>{if(!(t.target instanceof HTMLImageElement))return;const o=t.target;b.value=Math.round(o.naturalWidth/p.scale),k.value=Math.round(o.naturalHeight/p.scale),v.value=o.currentSrc,E.value=o};function w(t){var o;return(o=t.data)!=null&&o.host?p.scale!=1||!t.data.host.srcset?V(t.data.host,t.provider,void 0,2,p.scale):t.data.host.srcset:""}function g(t){p.clickable&&(u.value=!0,T.value=[t.clientX,t.clientY])}function i(){c(l.value)}const{show:c,hide:S}=K(lt,{emote:p.emote,initSrc:v,overlaid:p.overlaid,width:b,height:k});return(t,o)=>{var N;return s(),a("div",{ref_key:"boxRef",ref:l,class:"seventv-emote-box"},[!t.emote.unicode&&t.emote.data&&t.emote.data.host?(s(),a("img",{key:0,class:O(["seventv-chat-emote",{blur:$(y)&&((N=t.emote.data)==null?void 0:N.listed)===!1}]),srcset:t.unload?"":w(t.emote),alt:t.emote.name,loading:"lazy",decoding:"async",onLoad:_,onMouseenter:i,onMouseleave:o[0]||(o[0]=d=>$(S)()),onClick:o[1]||(o[1]=d=>[g(d),e("emote-click",d,t.emote)])},null,42,mt)):!t.unload&&t.emote.id?(s(),P(x,{key:1,id:t.emote.id,ref_key:"boxRef",ref:l,alt:t.emote.name,class:"seventv-chat-emote seventv-emoji",style:D({width:`${t.scale*2}rem`,height:`${t.scale*2}rem`}),onMouseenter:i,onMouseleave:o[2]||(o[2]=d=>$(S)())},null,8,["id","alt","style"])):r("",!0),(s(!0),a(B,null,q(t.overlaid,d=>{var U;return s(),a(B,{key:d.id},[d.data&&d.data.host?(s(),a("img",{key:0,class:O(["seventv-chat-emote zero-width-emote",{blur:$(y)&&((U=d.data)==null?void 0:U.listed)===!1}]),srcset:w(d),alt:" "+d.name},null,10,ct)):r("",!0)],64)}),128)),u.value?(s(),P(se,{key:2,to:"#seventv-message-container"},[M(de,{class:"seventv-emote-card-float",anchor:l.value,placement:"right-end",middleware:[$(te)({mainAxis:!0,crossAxis:!0}),$(oe)()],once:!0,"emit-clickout":!0,onClickout:o[3]||(o[3]=d=>u.value=!1)},{default:ee(()=>[M(je,{emote:t.emote,size:[b.value,k.value]},null,8,["emote","size"])]),_:1},8,["anchor","middleware"])])):r("",!0)],512)}}});const $t=A(dt,[["__scopeId","data-v-86a651bd"]]);export{$t as E,x as _,G as a,wt as b,kt as c,ve as t,_e as u};
