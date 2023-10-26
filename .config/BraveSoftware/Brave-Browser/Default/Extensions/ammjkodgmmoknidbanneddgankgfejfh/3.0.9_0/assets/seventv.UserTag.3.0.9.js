import{u as ie}from"./seventv.useChannelContext.3.0.9.js";import{t as x,r as P,u as p,b as ve,a as Ce,l as re,n as Xe,m as lt,a9 as mt,a5 as ht}from"./seventv.useUserAgent.3.0.9.js";import{u as Ie,S as gt}from"./seventv.useCosmetics.3.0.9.js";import{e as W,l as u,f as c,j as f,_ as L,aM as pe,k as I,u as T,G as X,w as _e,s as A,q as de,F as z,m as te,a as ce,as as Ke,aH as Te,A as le,B as G,J as Le,x as K,Z as Ue,H as Je,aB as Ze,C as Pe,at as vt,aE as ft,aL as pt,y as _t,z as yt,n as xe,I as bt,d as wt,aA as Ct,W as Mt,aN as $t}from"./seventv.index.3.0.9.js";import{u as Tt}from"./seventv.main.3.0.9.js";import{b as ke,e as Ut}from"./seventv.Transform.3.0.9.js";import{C as Ne}from"./seventv.ChatMessage.3.0.9.js";import{u as et,U as kt}from"./seventv.UiConfirmPrompt.3.0.9.js";import{t as Dt,a as tt,b as Oe,u as se,c as St,E as It}from"./seventv.Emote.3.0.9.js";import{g as J}from"./seventv.seventv.user.gql.3.0.9.js";import{C as Lt}from"./seventv.CloseIcon.3.0.9.js";import{U as at,b as Pt,a as We}from"./seventv.StarIcon.3.0.9.js";import{u as nt}from"./seventv.useChatEmotes.3.0.9.js";import{v as xt}from"./seventv.v4.3.0.9.js";import{a as Ve}from"./seventv.useFloatContext.3.0.9.js";import{R as Ot}from"./seventv.ReactHooks.3.0.9.js";import{a as Bt}from"./seventv.useModule.3.0.9.js";import{T as Et,U as Rt}from"./seventv.UiDraggable.3.0.9.js";import{f as At}from"./seventv.index.3.0.93.js";function Nt(a){return a.kind==="LINK"}function Wt(a){return a.kind==="EMOTE"}function Vt(a){return a.kind==="MENTION"}const Ht={ref:"tooltip",class:"seventv-tooltip","tooltip-type":"badge"},Ft=W({__name:"BadgeTooltip",props:{alt:{}},setup(a){return(t,e)=>(u(),c("div",Ht,[f("p",null,x(t.alt),1)],512))}});const Yt=L(Ft,[["__scopeId","data-v-bfbc76a7"]]),qt={class:"seventv-chat-badge"},zt=["srcset","alt"],jt=W({__name:"Badge",props:{alt:{},type:{},badge:{}},setup(a){const t=a,e=P(""),n={twitch:l=>`${l.image1x} 1x, ${l.image2x} 2x, ${l.image4x} 4x`,app:l=>l.data.host.files.map((g,h)=>`https:${l.data.host.url}/${g.name} ${h+1}x`).join(", ")}[t.type](t.badge),r=P(),{show:s,hide:i}=pe(Yt,{alt:t.alt});function m(l){return l.kind==="BADGE"&&t.type==="app"}return m(t.badge)&&(e.value=t.badge.data.backgroundColor??""),(l,g)=>(u(),c("div",qt,[f("img",{ref_key:"imgRef",ref:r,srcset:p(n),alt:l.alt,style:ve({backgroundColor:e.value}),onMouseenter:g[0]||(g[0]=h=>p(s)(r.value)),onMouseleave:g[1]||(g[1]=h=>p(i)())},null,44,zt)]))}});const De=L(jt,[["__scopeId","data-v-5aff362b"]]),He=new WeakMap;function rt(a){let t=He.get(a);return t||(t=Ce({isDarkTheme:1,primaryColorHex:null,useHighContrastColors:!0,showTimestamps:!1,showModerationIcons:!1,hovering:!1,pauseReason:new Set(["SCROLL"]),currentChannel:{},imageFormat:"WEBP",twitchBadgeSets:{},blockedUsers:new Set}),He.set(a,t)),t}const Fe=new WeakMap;function st(a){let t=Fe.get(a);t||(t=Ce({TWITCH:{onShowViewerCard:()=>{}},YOUTUBE:{},KICK:{},UNKNOWN:{}}),Fe.set(a,t));function e(r,s,i){t&&(t[r][s]=i)}function n(r,s,i){if(!t||!r||!r.currentTarget||!s)return!1;const m=r.currentTarget.getBoundingClientRect();return t[a.platform].onShowViewerCard(s,0,i,m.bottom),!0}return{update:e,openViewerCard:n}}const Qt=J`
	query ViewerCard(
		$channelID: ID!
		$channelIDStr: String!
		$channelLogin: String!
		$targetLogin: String!
		$isViewerBadgeCollectionEnabled: Boolean!
	) {
		activeTargetUser: user(login: $targetLogin) {
			id
		}
		targetUser: user(login: $targetLogin, lookupType: ALL) {
			id
			login
			bannerImageURL
			displayName
			displayBadges(channelID: $channelID) {
				...badge
				description
			}
			chatColor
			profileImageURL(width: 70)
			createdAt
			relationship(targetUserID: $channelID) {
				cumulativeTenure: subscriptionTenure(tenureMethod: CUMULATIVE) {
					months
					daysRemaining
				}
				followedAt
				subscriptionBenefit {
					id
					tier
					purchasedWithPrime
					gift {
						isGift
					}
				}
			}
			isModerator(channelID: $channelIDStr)
			stream {
				id
				game {
					id
					displayName
				}
				viewersCount
			}
		}
		channelUser: user(login: $channelLogin) {
			id
			login
			displayName
			subscriptionProducts {
				...subProduct
			}
			self {
				banStatus {
					isPermanent
				}
				isModerator
			}
		}
		currentUser {
			login
			id
		}
		channelViewer(userLogin: $targetLogin, channelLogin: $channelLogin) {
			id
			earnedBadges @include(if: $isViewerBadgeCollectionEnabled) {
				...badge
				description
			}
		}
		channel(id: $channelID) {
			id
			moderationSettings {
				canAccessViewerCardModLogs
			}
		}
	}

	${Dt}
	${tt}
`,Gt=J`
	query ViewerCardModLogs($channelLogin: String!, $channelID: ID!, $targetID: ID!) {
		targetUser: user(id: $targetID) {
			id
			login
		}
		channelUser: user(login: $channelLogin) {
			id
			login
			modLogs {
				...modLogs
			}
		}
		currentUser {
			login
			id
		}
		banStatus: chatRoomBanStatus(channelID: $channelID, userID: $targetID) {
			bannedUser {
				id
				login
				displayName
			}
			createdAt
			expiresAt
			isPermanent
			moderator {
				id
				login
				displayName
			}
			reason
		}
		viewerCardModLogs(targetID: $targetID, channelID: $channelID) {
			comments(first: 100) {
				... on ModLogsCommentConnection {
					edges {
						cursor
						node {
							...modComment
						}
					}
					pageInfo {
						hasNextPage
						hasPreviousPage
					}
				}
			}
		}
	}

	fragment modLogs on ModLogs {
		messages: messagesBySender(
			senderID: $targetID
			first: 1
			includeMessageCount: true
			includeTargetedActions: true
			includeAutoModCaughtMessages: true
		) {
			messageCount
		}
		bans: targetedModActions(targetID: $targetID, actionType: BAN_USER) {
			edges {
				cursor
				node {
					...targetedModAction
				}
			}
			actionCount
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
		}
		timeouts: targetedModActions(targetID: $targetID, actionType: TIMEOUT_USER) {
			edges {
				cursor
				node {
					...targetedModAction
				}
			}
			actionCount
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
		}
	}

	fragment targetedModAction on ModLogsTargetedModActionsEntry {
		id
		action
		timestamp
		channel {
			id
			login
		}
		target {
			id
			login
		}
		user {
			id
			login
		}
		details {
			...targetedModActionDetails
		}
	}

	fragment targetedModActionDetails on TargetedModActionDetails {
		bannedAt
		durationSeconds
		expiresAt
		reason
	}

	${Oe}
`,Xt=J`
	query UserCardMessagesBySender($senderID: ID!, $channelLogin: String!, $cursor: Cursor) {
		channel: user(login: $channelLogin) {
			id
			logs: modLogs {
				bySender: messagesBySender(
					senderID: $senderID
					first: 50
					order: DESC
					includeMessageCount: false
					includeTargetedActions: true
					includeAutoModCaughtMessages: true
					after: $cursor
				) {
					edges {
						cursor
						node {
							...modLogsMessageFields
							...autoModCaughtMessage
							...targetedModAction
						}
					}
					pageInfo {
						hasNextPage
					}
				}
			}
		}
	}

	fragment modLogsMessageFields on ModLogsMessage {
		id
		sentAt
		sender {
			...sender
		}
		content {
			text
		}
	}

	fragment autoModCaughtMessage on AutoModCaughtMessage {
		id
		category
		modLogsMessage {
			id
			sentAt
			content {
				text
			}
			sender {
				...sender
			}
		}
		resolvedAt
		resolver {
			...sender
		}
		status
	}

	fragment targetedModAction on ModLogsTargetedModActionsEntry {
		id
		action
		timestamp
		channel {
			id
			login
		}
		target {
			id
			login
		}
		user {
			id
			login
		}
		details {
			...targetedModActionDetails
		}
	}

	fragment targetedModActionDetails on TargetedModActionDetails {
		bannedAt
		durationSeconds
		expiresAt
		reason
	}

	fragment sender on User {
		id
		login
		displayName
		chatColor
		displayBadges {
			...badge
		}
	}

	${tt}
`,Kt=J`
	mutation createModComment($input: CreateModeratorCommentInput!) {
		createModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${Oe}
`;J`
	mutation deleteModeratorComment($input: DeleteModeratorCommentInput!) {
		deleteModeratorComment(input: $input) {
			comment {
				...modComment
			}
		}
	}

	${Oe}
`;const Jt={},Zt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"1em",height:"1em",fill:"currentColor"},ea=f("path",{d:"M96 0L63.9 44.9C58.8 52.1 56 60.8 56 69.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L96 0zM224 0L191.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L224 0zm95.9 44.9c-5.1 7.2-7.9 15.8-7.9 24.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.6c0-8.8-2.8-17.5-7.9-24.6L352 0 319.9 44.9zM128 176V144H64v32 48H0V350.8l29.2 15.3 60-28.6 7.1-3.4 7 3.5L160 366.1l56.8-28.4 7.2-3.6 7.2 3.6L288 366.1l56.8-28.4 7-3.5 7 3.4 60 28.6L448 350.8V224H384V176 144H320v32 48H256V176 144H192v32 48H128V176zM448 386.9l-21.3 11.2-7.1 3.7-7.2-3.4-60.2-28.6-57 28.5-7.2 3.6-7.2-3.6L224 369.9l-56.8 28.4-7.2 3.6-7.2-3.6-57-28.5L35.7 398.4l-7.2 3.4-7.1-3.7L0 386.9V512H448V386.9z"},null,-1),ta=[ea];function aa(a,t){return u(),c("svg",Zt,ta)}const na=L(Jt,[["render",aa]]),ra={},sa={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},oa=f("path",{d:"M39.8 263.8L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z"},null,-1),ia=[oa];function ua(a,t){return u(),c("svg",sa,ia)}const da=L(ra,[["render",ua]]);const ca={},la={class:"seventv-user-card-actions"};function ma(a,t){return u(),c("div",la)}const ha=L(ca,[["render",ma],["__scopeId","data-v-ac215262"]]),ga=J`
	mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {
		banUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
				reason
			}
			error {
				code
				minTimeoutDurationSeconds
				maxTimeoutDurationSeconds
			}
		}
	}
`,va=J`
	mutation Chat_UnbanUserFromChatRoom($input: UnbanUserFromChatRoomInput!) {
		unbanUserFromChatRoom(input: $input) {
			ban {
				bannedUser {
					id
					login
					displayName
				}
				createdAt
				expiresAt
				isPermanent
				moderator {
					id
					login
					displayName
				}
			}
			error {
				code
			}
		}
	}
`,fa=J`
	mutation PinChatMessage($input: PinChatMessageInput!) {
		pinChatMessage(input: $input) {
			pinnedChatMessage {
				id
				pinnedMessage {
					id
				}
			}
			error {
				code
			}
		}
	}
`,pa=J`
	mutation ModUser($input: ModUserInput!) {
		result: modUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`,_a=J`
	mutation UnmodUser($input: UnmodUserInput!) {
		result: unmodUser(input: $input) {
			channel {
				id
				login
			}
			target {
				id
				login
			}
			error {
				code
			}
		}
	}
`;function Be(a,t){const e=et(a);function n(l,g){const h=se();return h?h.mutate({mutation:ga,variables:{input:{channelID:a.id,bannedUserLogin:t,expiresIn:l,reason:g}}}):Promise.reject("Missing Apollo")}function r(){const l=se();return l?l.mutate({mutation:va,variables:{input:{channelID:a.id,bannedUserLogin:t}}}):Promise.reject("Missing Apollo")}function s(l,g){const h=se();return h?h.mutate({mutation:fa,variables:{input:{channelID:a.id,messageID:l,durationSeconds:g,type:"MOD"}}}):Promise.reject("Missing Apollo")}function i(l,g){const h=se();return h?h.mutate({mutation:g?_a:pa,variables:{input:{channelID:a.id,targetID:l}}}):Promise.reject("Missing Apollo")}function m(l){e.sendMessage(`/delete ${l}`)}return{banUserFromChat:n,unbanUserFromChat:r,pinChatMessage:s,deleteChatMessage:m,setUserModerator:i}}const ya={},ba={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},wa=f("g",null,[f("path",{"fill-rule":"evenodd",d:"M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8 6a6 6 0 01-4.904-9.458l8.362 8.362A5.972 5.972 0 0110 16zm4.878-2.505a6 6 0 00-8.372-8.372l8.372 8.372z","clip-rule":"evenodd"})],-1),Ca=[wa];function Ma(a,t){return u(),c("svg",ba,Ca)}const $a=L(ya,[["render",Ma]]),Ta={},Ua={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},ka=f("g",null,[f("path",{d:"M12 2H8v1H3v2h14V3h-5V2zM4 7v9a2 2 0 002 2h8a2 2 0 002-2V7h-2v9H6V7H4z"}),f("path",{d:"M11 7H9v7h2V7z"})],-1),Da=[ka];function Sa(a,t){return u(),c("svg",Ua,Da)}const Ia=L(Ta,[["render",Sa]]),La={},Pa={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px",fill:"currentColor"},xa=f("g",null,[f("path",{d:"M11 9.586V6H9v4.414l2.293 2.293 1.414-1.414L11 9.586z"}),f("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z","clip-rule":"evenodd"})],-1),Oa=[xa];function Ba(a,t){return u(),c("svg",Pa,Oa)}const Ea=L(La,[["render",Ba]]),Ra={class:"seventv-chat-mod-buttons"},Aa=W({__name:"ModIcons",props:{msg:{}},setup(a){var v,_,o,C;const t=a,e=ie(),{banUserFromChat:n,deleteChatMessage:r}=Be(e,((v=t.msg.author)==null?void 0:v.username)??""),s=P(),i=pe(`Ban ${((_=t.msg.author)==null?void 0:_.username)??"???"}`),m=P(),l=pe(`Timeout ${((o=t.msg.author)==null?void 0:o.username)??"???"}`),g=P(),h=pe(`Delete message by ${((C=t.msg.author)==null?void 0:C.username)??"???"}`);return(M,$)=>(u(),c("span",Ra,[M.msg.author&&!M.msg.author.isActor?(u(),c("span",{key:0,ref_key:"banRef",ref:s,onClick:$[0]||($[0]=b=>p(n)(null)),onMouseenter:$[1]||($[1]=b=>p(i).show(s.value)),onMouseleave:$[2]||($[2]=b=>p(i).hide())},[I($a)],544)):T("",!0),M.msg.author&&!M.msg.author.isActor?(u(),c("span",{key:1,ref_key:"timeoutRef",ref:m,onClick:$[3]||($[3]=b=>p(n)("10m")),onMouseenter:$[4]||($[4]=b=>p(l).show(m.value)),onMouseleave:$[5]||($[5]=b=>p(l).hide())},[I(Ea)],544)):T("",!0),f("span",{ref_key:"deleteRef",ref:g,onClick:$[6]||($[6]=b=>p(r)(M.msg.id)),onMouseenter:$[7]||($[7]=b=>p(h).show(g.value)),onMouseleave:$[8]||($[8]=b=>p(h).hide())},[I(Ia)],544)]))}});const Na=L(Aa,[["__scopeId","data-v-071f3a4f"]]),Wa=["href"],Va=W({__name:"MessageTokenLink",props:{token:{}},setup(a){return(t,e)=>(u(),c("a",{href:t.token.content.url,target:"_blank",class:"link-part"},x(t.token.content.displayText),9,Wa))}}),Ha={class:"mention-token"},Fa={key:1},Ya=W({__name:"MessageTokenMention",props:{token:{},msg:{}},setup(a){const t=a,e=X("chat.colored_mentions"),n=t.token.content.displayText.charAt(0)==="@",r=n?t.token.content.displayText.slice(1):t.token.content.displayText;return(s,i)=>{var m;return u(),c("span",Ha,[p(e)?(u(),c("span",{key:0,style:ve({color:(m=s.token.content.user)==null?void 0:m.color})},[I(fe,{user:s.token.content.user??{id:p(xt)(),username:p(r).toLowerCase(),displayName:p(r),color:""},"as-mention":n,"hide-badges":!0},null,8,["user"])],4)):(u(),c("span",Fa,x(s.token.content.displayText),1))])}}});const qa=L(Ya,[["__scopeId","data-v-7bfbc3c4"]]),za={class:"seventv-chat-message-rich-embed"},ja=["href"],Qa={class:"seventv-chat-message-rich-embed-layout"},Ga={class:"seventv-chat-message-rich-embed-layout-thumbnail"},Xa=["src"],Ka={class:"seventv-chat-message-rich-embed-layout-description"},Ja={class:"seventv-chat-message-rich-embed-layout-description-title"},Za={key:0},en={class:"seventv-chat-message-rich-embed-layout-description-author"},tn=W({__name:"RichEmbed",props:{richEmbed:{}},setup(a){return(t,e)=>(u(),c("div",za,[f("a",{href:t.richEmbed.request_url,target:"_blank",class:"seventv-chat-message-rich-embed-link"},[f("div",Qa,[f("div",Ga,[f("img",{src:t.richEmbed.thumbnail_url,alt:"thumbnail"},null,8,Xa)]),f("div",Ka,[f("div",null,[f("p",Ja,x(t.richEmbed.title),1)]),t.richEmbed.twitch_metadata.clip_metadata.id?(u(),c("div",Za,[f("p",en," Clipped by "+x(t.richEmbed.author_name),1)])):T("",!0)])])],8,ja)]))}});const an=L(tn,[["__scopeId","data-v-9f95cf92"]]),nn=J`
	query ChatReplies($messageID: ID!, $channelID: ID!) {
		message(id: $messageID) {
			...messageFields
			replies {
				nodes {
					...messageFields
				}
				totalCount
			}
		}
	}

	${St}
`,rn={},sn={fill:"currenColor",width:"1em",height:"1em",version:"1.1",viewBox:"0 0 16 16",x:"0px",y:"0px"},on=f("g",null,[f("path",{d:"M5 6H7V8H5V6Z"}),f("path",{d:"M9 6H11V8H9V6Z"}),f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 14L10 12H13C13.5523 12 14 11.5523 14 11V3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3V11C2 11.5523 2.44772 12 3 12H6L8 14ZM6.82843 10H4V4H12V10H9.17157L8 11.1716L6.82843 10Z"})],-1),un=[on];function dn(a,t){return u(),c("svg",sn,un)}const Ee=L(rn,[["render",dn]]),cn={},ln={width:"1em",height:"1em",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},mn=f("path",{d:"M8.5 5.5L7 4L2 9L7 14L8.5 12.5L6 10H10C12.2091 10 14 11.7909 14 14V16H16V14C16 10.6863 13.3137 8 10 8H6L8.5 5.5Z"},null,-1),hn=[mn];function gn(a,t){return u(),c("svg",ln,hn)}const vn=L(cn,[["render",gn]]),fn={class:"seventv-tray-header"},pn={class:"seventv-tray-icon seventv-reply"},_n={class:"seventv-tray-header-text"},yn={key:0},bn={key:1},wn={class:"seventv-tray-user-message-container"},Cn=W({__name:"ReplyTray",props:{close:{type:Function},id:{},authorID:{},username:{},displayName:{},body:{},deleted:{type:Boolean}},setup(a){const t=a,e=P(null),n=P([]),r=ie(),s=nt(r),i=se();return _e(async()=>{if(!i)return;const m=await i.query({query:nn,fetchPolicy:"no-cache",variables:{messageID:t.id,channelID:r.id}}).catch(l=>{re.error("failed to fetch chat replies",l.message)});!m||!m.data||!m.data.message||(e.value=ke(m.data.message),n.value=[e.value,...m.data.message.replies.nodes.map(l=>ke(l))])}),(m,l)=>(u(),c(z,null,[f("div",fn,[f("div",pn,[n.value.length<=1?(u(),A(vn,{key:0})):(u(),A(Ee,{key:1}))]),f("div",_n,[n.value.length<=1&&m.authorID?(u(),c("span",yn,x(`Replying to @${m.displayName??m.username}:`),1)):(u(),c("span",bn," Thread "))]),f("div",{class:"seventv-tray-icon seventv-close",onClick:l[0]||(l[0]=g=>m.close())},[I(Et)])]),I(at,null,{default:de(()=>[f("div",wn,[(u(!0),c(z,null,te(n.value,g=>{var h;return u(),A(Se,{key:g.id,msg:g,emotes:p(s).active,"force-timestamp":!0,as:"Reply",class:Xe(["thread-msg",{"is-root-msg":((h=e.value)==null?void 0:h.id)===g.id}])},null,8,["msg","emotes","class"])}),128))])]),_:1})],64))}});const Mn=L(Cn,[["__scopeId","data-v-3459cc07"]]),Ye=Ce(new Set);function qe(a,t){const e=P({current:null}),n={parent:e.value,component:lt(a),props:t},r=ce(e.value,()=>{e.value.current?Ye.add(n):(Ye.delete(n),r())});return{$$typeof:Ot,key:null,ref:e.value,type:"seventv-tray-container",props:{}}}function $n(a){const t=a;return!!(t.id&&t.body)&&typeof t.deleted=="boolean"}function Tn(a){return{body:Mn,inputValueOverride:"",sendButtonOverride:"reply",disableBits:!0,disablePaidPinnedChat:!0,disableChat:a.deleted,sendMessageHandler:{type:"reply",additionalMetadata:{reply:{parentMsgId:a.id,parentMessageBody:a.body,...a.authorID?{parentUid:a.authorID,parentUserLogin:a.username,parentDisplayName:a.displayName}:{}}}},type:"reply"}}function Un(a,t){let e=null;switch(a){case"Reply":if(!$n(t))break;e=Tn(t)}return e}function kn(a,t,e){const n=Bt("chat-input");function r(){var i;!n.value||typeof((i=n.value.instance)==null?void 0:i.setTray)!="function"||n.value.instance.setTray(null)}function s(){var l;if(!n.value||typeof((l=n.value.instance)==null?void 0:l.setTray)!="function")return;const i={...t==null?void 0:t(),close:r};if(!i)return;const m=e??Un(a,i);m&&n.value.instance.setTray({...m,header:m.header?qe(m.header,i):void 0,body:m.body?qe(m.body,i):void 0})}return{open:s,clear:r}}const Dn={},Sn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},In=f("path",{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},null,-1),Ln=[In];function Pn(a,t){return u(),c("svg",Sn,Ln)}const xn=L(Dn,[["render",Pn]]),On={},Bn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"1em",height:"1em",fill:"currentColor"},En=f("path",{d:"M64 0H32V64H64 93.5L82.1 212.1C23.7 240.7 0 293 0 320v32H384V320c0-22.5-23.7-76.5-82.1-106.7L290.5 64H320h32V0H320 64zm96 480v32h64V480 384H160v96z"},null,-1),Rn=[En];function An(a,t){return u(),c("svg",Bn,Rn)}const Nn=L(On,[["render",An]]),Wn={},Vn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em",fill:"currentColor"},Hn=f("path",{d:"M0 208L192 384h32V288h80c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176H224V32H192L0 208z"},null,-1),Fn=[Hn];function Yn(a,t){return u(),c("svg",Vn,Fn)}const qn=L(Wn,[["render",Yn]]),zn={class:"seventv-copied-message-toast-body"},jn={key:0},Qn=W({__name:"UiCopiedMessageToast",props:{message:{}},emits:["close"],setup(a,{emit:t}){const e=P();return At(e,()=>{t("close")}),(n,r)=>(u(),c("main",{ref_key:"copiedMessageToastRef",ref:e,class:"seventv-copied-message-toast"},[f("div",zn,[n.message?(u(),c("p",jn,x(n.message),1)):Ke(n.$slots,"default",{key:1},void 0,!0)])],512))}});const Gn=L(Qn,[["__scopeId","data-v-fbb0ba18"]]),Xn={class:"seventv-chat-message-buttons"},Kn=W({__name:"UserMessageButtons",props:{msg:{}},emits:["pin"],setup(a,{emit:t}){const e=a,n=kn("Reply",()=>{var C,M,$,b,B,F,N,O,H,q,j,d;return{id:((C=e.msg.parent)==null?void 0:C.id)??e.msg.id,body:((M=e.msg.parent)==null?void 0:M.body)??e.msg.body,deleted:(($=e.msg.parent)==null?void 0:$.deleted)??e.msg.moderation.deleted,...((b=e.msg.parent)==null?void 0:b.author)??e.msg.author?{authorID:((B=e.msg.parent)==null?void 0:B.uid)??((F=e.msg.author)==null?void 0:F.id),username:((O=(N=e.msg.parent)==null?void 0:N.author)==null?void 0:O.username)??((H=e.msg.author)==null?void 0:H.username),displayName:((j=(q=e.msg.parent)==null?void 0:q.author)==null?void 0:j.displayName)??((d=e.msg.author)==null?void 0:d.displayName)}:{}}}),r=X("chat.copy_icon_toggle"),s=P(!1),i=P(),m=Ve(i,{enabled:()=>s.value,middleware:[Te({padding:8})]});function l(){s.value||(navigator.clipboard.writeText(e.msg.body),s.value=!0,Je(()=>{s.value=!1},1e3))}const g=P(!1),h=P(),v=Ve(h,{enabled:()=>g.value,middleware:[Te({padding:8})]});function _(){n.open()}function o(C){C==="yes"&&t("pin")}return(C,M)=>{const $=le("tooltip");return u(),c(z,null,[f("div",Xn,[p(r)&&!C.msg.moderation.deleted?G((u(),c("div",{key:0,ref_key:"copyButtonRef",ref:i,class:"seventv-button",onClick:M[0]||(M[0]=b=>l())},[I(xn)])),[[$,"Copy"]]):T("",!0),C.msg.pinnable&&!C.msg.moderation.deleted?G((u(),c("div",{key:1,ref_key:"pinButtonRef",ref:h,class:"seventv-button",onClick:M[1]||(M[1]=b=>g.value=!0)},[I(Nn)])),[[$,"Pin"]]):T("",!0),G((u(),c("div",{class:"seventv-button",onClick:_},[(u(),A(Le(C.msg.parent?Ee:qn)))])),[[$,"Reply"]])]),s.value&&p(m)?(u(),A(Ue,{key:0,to:p(m)},[I(Gn,{title:"Message Copied",onClose:M[2]||(M[2]=b=>s.value=!1)},{default:de(()=>[K(" Message from "),C.msg.author?(u(),A(fe,{key:0,user:C.msg.author},null,8,["user"])):T("",!0),K(" has been copied ")]),_:1})],8,["to"])):T("",!0),g.value&&p(v)?(u(),A(Ue,{key:1,to:p(v)},[I(kt,{title:"Pin Message?",choices:["yes","no"],onClose:M[3]||(M[3]=b=>g.value=!1),onAnswer:M[4]||(M[4]=b=>o(b))},{default:de(()=>[K(" Are you sure you want to pin this message by "),C.msg.author?(u(),A(fe,{key:0,user:C.msg.author},null,8,["user"])):T("",!0),K("? ")]),_:1})],8,["to"])):T("",!0)],64)}}});const Jn=L(Kn,[["__scopeId","data-v-292d3e55"]]);function Y(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function Zn(a,t,e){var n;Y(1,arguments);var r;return er(t)?r=t:e=t,new Intl.DateTimeFormat((n=e)===null||n===void 0?void 0:n.locale,r).format(a)}function er(a){return a!==void 0&&!("locale"in a)}function Re(a,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e.length>=t?a.apply(null,e.slice(0,t).reverse()):function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return Re(a,t,e.concat(r))}}const tr=Re(Zn,3),ar=["msg-id","state","data-highlight-style"],nr=["data-highlight-label"],rr={key:1,class:"seventv-chat-message-timestamp"},sr={key:4},or={class:"seventv-chat-message-body"},ir={key:0,class:"text-token"},ur={key:1},dr={key:0,class:"seventv-chat-message-moderated"},cr={key:1,class:"seventv-chat-message-moderated"},lr=W({__name:"UserMessage",props:{msg:{},as:{default:"Chat"},highlight:{},emotes:{},chatters:{},isModerator:{type:Boolean},hideAuthor:{type:Boolean},hideModeration:{type:Boolean},hideModIcons:{type:Boolean},hideDeletionState:{type:Boolean},showButtons:{type:Boolean},forceTimestamp:{type:Boolean}},setup(a){var j;const t=a,e=mt(t,"msg"),n=P(),r=ie(),s=rt(r),{openViewerCard:i}=st(r),{pinChatMessage:m}=Be(r,((j=e.value.author)==null?void 0:j.username)??""),l=X("chat.emote_scale"),g=X("chat.slash_me_style"),h=X("highlights.display_style"),v=X("highlights.opacity"),_=X("chat.timestamp_with_seconds"),o=X("chat.show_emote_modifiers"),C=X("chat.timestamp_format"),M=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language??"en",$=t.msg.author?Ie(t.msg.author.id):{emotes:{}},b=P(""),B=t.msg.getTokenizer(),F=P([]);function N(){if(!B)return;const d=B.tokenize({chatterMap:t.chatters??{},emoteMap:t.emotes??{},localEmoteMap:{...$.emotes,...t.msg.nativeEmotes},showModifiers:o.value}),y=[],D=t.msg.body;let w=0;for(const S of d){const U=S.range[0],R=S.range[1],V=D.substring(w,U);V&&y.push(V),y.push(S),w=R+1}const E=D.substring(w);E&&y.push(E),F.value=y}function O(){var d;(d=m(e.value.id,1200))==null||d.catch(y=>re.error("failed to pin chat message",y))}ce(()=>[$.emotes,t.msg.nativeEmotes],()=>N(),{immediate:!0}),t.msg.historical&&Je(_e(()=>{N()}),1e4);function H(d){if(Vt(d))return qa;if(Nt(d))return Va}const q=()=>{switch(C.value){case"infer":return;case"12":return!0;case"24":return!1}};return _e(()=>{!e.value||!n.value||(e.value.highlight&&(n.value.style.setProperty("--seventv-highlight-color",e.value.highlight.color),n.value.style.setProperty("--seventv-highlight-dim-color",e.value.highlight.color.concat(gt(v.value/100)))),(s.showTimestamps||e.value.historical||t.forceTimestamp)&&(b.value=tr({locale:M},{localeMatcher:"lookup",hour:"2-digit",minute:"2-digit",second:_.value?"numeric":void 0,hour12:q()},t.msg.timestamp)))}),(d,y)=>{var D;return u(),c("span",{ref_key:"msgEl",ref:n,class:Xe(["seventv-user-message",{deleted:!d.hideDeletionState&&(e.value.moderation.banned||e.value.moderation.deleted),"has-mention":d.as=="Chat"&&e.value.mentions.has("#actor"),"has-highlight":d.as=="Chat"&&e.value.highlight}]),"msg-id":e.value.id,state:e.value.deliveryState,style:ve({"font-style":e.value.slashMe&&p(g)&1?"italic":"",color:e.value.slashMe&&p(g)&2?(D=e.value.author)==null?void 0:D.color:""}),"data-highlight-style":p(h)},[e.value.highlight?(u(),c("div",{key:0,class:"seventv-chat-message-highlight-label","data-highlight-label":e.value.highlight.label},null,8,nr)):T("",!0),p(s).showTimestamps||e.value.historical||d.forceTimestamp?(u(),c("span",rr,x(b.value),1)):T("",!0),p(r).actor.roles.has("MODERATOR")&&p(s).showModerationIcons&&!d.hideModIcons?(u(),A(Na,{key:2,msg:e.value},null,8,["msg"])):T("",!0),e.value.author&&!d.hideAuthor?(u(),A(fe,{key:3,user:e.value.author,badges:e.value.badges,"msg-id":e.value.sym,onOpenNativeCard:y[0]||(y[0]=w=>p(i)(w,e.value.author.username,e.value.id))},null,8,["user","badges","msg-id"])):T("",!0),d.hideAuthor?T("",!0):(u(),c("span",sr,x(e.value.slashMe?" ":": "),1)),f("span",or,[(u(!0),c(z,null,te(F.value,(w,E)=>(u(),c(z,{key:E},[typeof w=="string"?(u(),c("span",ir,x(w),1)):p(Wt)(w)?(u(),c("span",ur,[I(It,{class:"emote-token",emote:w.content.emote,format:p(s).imageFormat,overlaid:w.content.overlaid,clickable:!0,scale:Number(p(l))},null,8,["emote","format","overlaid","scale"]),w.content?(u(),c("span",{key:0,style:ve({color:w.content.cheerColor})},x(w.content.cheerAmount),5)):T("",!0)])):(u(),A(Le(H(w)),ht(Ze({key:2},{token:w,msg:e.value})),null,16))],64))),128))]),e.value.richEmbed.request_url?(u(),A(an,{key:5,"rich-embed":e.value.richEmbed},null,8,["rich-embed"])):T("",!0),!d.hideModeration&&(e.value.moderation.banned||e.value.moderation.deleted)?(u(),c(z,{key:6},[e.value.moderation.banned?(u(),c("span",dr,x(e.value.moderation.banDuration?`Timed out (${e.value.moderation.banDuration}s)`:"Permanently Banned"),1)):(u(),c("span",cr,"Deleted"))],64)):T("",!0),I(Jn,{msg:e.value,onPin:y[1]||(y[1]=w=>O())},null,8,["msg"])],14,ar)}}});const Se=L(lr,[["__scopeId","data-v-82270c68"]]),mr={class:"seventv-chat-message-container"},hr={class:"seventv-chat-message-background",tabindex:"0"},gr={key:0,class:"seventv-reply-part"},vr={class:"seventv-chat-reply-icon"},fr={class:"seventv-reply-message-part"},pr=W({__name:"0.NormalMessage",props:{msg:{},msgData:{}},setup(a){return(t,e)=>{const n=le("tooltip");return u(),c("div",mr,[f("div",hr,[t.msgData.reply?(u(),c("div",gr,[f("div",vr,[I(Ee)]),G((u(),c("div",fr,[K(x(`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`),1)])),[[n,`Replying to @${t.msgData.reply.parentDisplayName}: ${t.msgData.reply.parentMessageBody}`]])])):T("",!0),Ke(t.$slots,"default",{},void 0,!0)])])}}});const _r=L(pr,[["__scopeId","data-v-81315227"]]),ot=a=>(_t("data-v-27de22bc"),a=a(),yt(),a),yr={key:0,class:"seventv-user-card-message-timeline"},br=["timeline-id"],wr=ot(()=>f("div",{selector:"date-boundary"},null,-1)),Cr=ot(()=>f("div",{selector:"date-boundary"},null,-1)),Mr={class:"seventv-user-card-message-timeline-list"},$r={key:1,class:"seventv-user-card-message-timeline-empty"},Tr={key:2,class:"seventv-user-card-mod-comment-input-container"},Ur=["placeholder","onKeydown"],kr=W({__name:"UserCardMessageList",props:{activeTab:{},target:{},timeline:{},scroller:{}},emits:["add-mod-comment"],setup(a,{emit:t}){const e=a,{t:n}=Pe(),r=ie(),s=nt(r),i=vt(!0,10),m=se(),l=P("");function g(){var v;(v=e.scroller)!=null&&v.container&&e.scroller.container.scrollTo({top:e.scroller.container.scrollHeight})}async function h(){var o;if(!l.value||!m)return;const v=l.value;l.value="";const _=await m.mutate({mutation:Kt,variables:{input:{channelID:r.id,targetID:e.target.id,text:v}}}).catch(C=>re.error("failed to add mod comment",C));!_||!_.data||!_.data.createModeratorComment||(t("add-mod-comment",(o=_.data)==null?void 0:o.createModeratorComment.comment),xe(g))}return ce(()=>e.activeTab,()=>{i.value=!1,setTimeout(()=>{g()},10)}),ce(e.timeline,()=>{var v;!((v=e.scroller)!=null&&v.container)||e.scroller.container.scrollTop!==0||g()}),(v,_)=>p(i)?(u(),c("div",yr,[Object.keys(e.timeline).length?(u(!0),c(z,{key:0},te(Object.entries(e.timeline).reverse(),([o,C])=>(u(),c("section",{key:o,"timeline-id":o},[wr,f("label",null,x(o),1),Cr,f("div",Mr,[(u(!0),c(z,null,te(C,M=>(u(),c(z,{key:M.sym},[M.instance&&M.instance!==_r?(u(),A(Le(M.instance),Ze({key:0},M.componentProps,{msg:M}),{default:de(()=>[I(Se,{msg:M,emotes:p(s).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"])]),_:2},1040,["msg"])):(u(),A(Se,{key:1,msg:M,emotes:p(s).active,"hide-mod-icons":!0,"force-timestamp":!0},null,8,["msg","emotes"]))],64))),128))])],8,br))),128)):(u(),c("div",$r,[f("p",null,x(p(n)(`user_card.no_${v.activeTab}`,{user:v.target.displayName})),1)])),v.activeTab==="comments"?(u(),c("div",Tr,[G(f("input",{id:"seventv-user-card-mod-comment-input","onUpdate:modelValue":_[0]||(_[0]=o=>l.value=o),placeholder:p(n)("user_card.add_comment_input_placeholder"),onKeydown:pt(h,["enter"])},null,40,Ur),[[ft,l.value]])])):T("",!0)])):T("",!0)}});const Dr=L(kr,[["__scopeId","data-v-27de22bc"]]),Sr={mlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Ir={key:0,d:"M408 56L384 80c37.3 37.3 74.7 74.7 112 112c8-8 16-16 24-24l56 56c-37.5 37.5-74.9 74.9-112.4 112.4c59.1 45.9 118.2 91.7 177.3 137.6c-9.8 12.6-19.6 25.3-29.4 37.9C407.9 353.9 204.5 195.9 1 38C10.8 25.3 20.6 12.7 30.4 .1c60.3 46.8 120.7 93.7 181 140.5C258.3 93.7 305.1 46.9 352 0c18.7 18.7 37.3 37.3 56 56zM288 176l-13.5 13.5c40.3 31.3 80.7 62.7 121 94C359.7 247.7 323.8 211.8 288 176zm-9.4 166.7c5.8 5.7 11.6 11.5 17.4 17.3c-50.7 50.7-101.3 101.3-152 152c-26.7-26.7-53.3-53.3-80-80c50.7-50.7 101.3-101.3 152-152c5.8 5.8 11.6 11.6 17.4 17.4c3.3-3.3 6.5-6.5 9.8-9.8c16.9 13.3 33.8 26.6 50.6 39.9c-5.1 5.1-10.1 10.1-15.2 15.2z"},Lr={key:1,d:"M344 56L320 80 432 192l24-24 56 56L368 368l-56-56 24-24L224 176l-24 24-56-56L288 0l56 56zM214.6 342.6L232 360 80 512 0 432 152 280l17.4 17.4L234.7 232 280 277.3l-65.4 65.4z"},Pr=W({__name:"GavelIcon",props:{slashed:{type:Boolean}},setup(a){return(t,e)=>(u(),c("svg",Sr,[t.slashed?(u(),c("path",Ir)):(u(),c("path",Lr))]))}}),xr={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",width:"1em",height:"1em",fill:"currentColor"},Or={key:0,d:"M496.8 363l124.1 96.3 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 77.8 60.4L308.4 4.5 320 0l11.6 4.5L539.1 85l19.2 7.4 1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-7.2 16.5-15.6 32.9-25.3 49zM170.4 109.5L458.6 333.3c7.4-12.6 13.9-25.5 19.5-38.5C505 232.9 512.9 169.5 512 126L320 51.5l-149.6 58zm-8.5 185.2c28.2 64.9 77 127.7 158.1 164.8c30-13.7 55.6-31 77.3-50.5l38.2 30.1c-28.1 26.5-62 49.7-102.8 67.3L320 512l-12.7-5.5c-98.4-42.6-156.7-117.3-189.4-192.6c-23.5-54.1-34.1-109-37-154.2l53.3 42c5.2 29.5 13.9 61.5 27.7 93z"},Br={key:1,d:"M267.6 4.5L256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5zM256 68.7l0 0L432 137c-.5 40.9-8.8 96.8-32.6 151.5c-26.2 60.3-70.6 118-143.5 153.5V68.7z"},Er=W({__name:"ShieldIcon",props:{slashed:{type:Boolean}},setup(a){return(t,e)=>(u(),c("svg",xr,[t.slashed?(u(),c("path",Or)):(u(),c("path",Br))]))}}),Rr={class:"seventv-user-card-mod"},Ar=["is-banned"],Nr={class:"seventv-user-card-mod-timeout-options"},Wr=["onClick"],Vr=["is-mod"],Hr=W({__name:"UserCardMod",props:{target:{},ban:{},isModerator:{type:Boolean}},emits:["victim-banned","victim-unbanned","victim-modded","victim-unmodded"],setup(a,{emit:t}){const e=a,{t:n}=Pe(),r=ie(),s=Be(r,e.target.username);async function i(h){var _,o,C;const v=await s.banUserFromChat(h).catch(()=>{});!v||(_=v.errors)!=null&&_.length||!((o=v.data)!=null&&o.banUserFromChatRoom.ban)||t("victim-banned",(C=v.data)==null?void 0:C.banUserFromChatRoom.ban)}async function m(){var v;const h=await s.unbanUserFromChat().catch(()=>{});!h||(v=h.errors)!=null&&v.length||t("victim-unbanned")}async function l(h){var _;const v=await s.setUserModerator(e.target.id,h).catch(()=>{});!v||(_=v.errors)!=null&&_.length||t(h?"victim-unmodded":"victim-modded")}const g=["1s","30s","1m","10m","30m","1h","4h","12h","1d","7d","14d"];return(h,v)=>{const _=le("tooltip");return u(),c("div",Rr,[f("div",{class:"seventv-user-card-mod-side seventv-user-card-mod-ban","is-banned":h.ban?"1":"0"},[G(I(Pr,{slashed:!!h.ban,onClick:v[0]||(v[0]=o=>h.ban?m():i(""))},null,8,["slashed"]),[[_,h.ban?p(n)("user_card.unban_button"):p(n)("user_card.ban_button")]])],8,Ar),G(f("div",Nr,[(u(),c(z,null,te(g,o=>G(f("button",{key:o,onClick:C=>i(o)},[K(x(o),1)],8,Wr),[[_,p(n)("user_card.timeout_button",{duration:o})]])),64))],512),[[bt,!h.ban]]),p(r).actor.roles.has("BROADCASTER")?(u(),c("div",{key:0,class:"seventv-user-card-mod-side seventv-user-card-mod-moderator","is-mod":h.isModerator?"1":"0"},[G(I(Er,{slashed:h.isModerator,onClick:v[1]||(v[1]=o=>l(!!h.isModerator))},null,8,["slashed"]),[[_,h.isModerator?p(n)("user_card.unmod_button"):p(n)("user_card.mod_button")]])],8,Vr)):T("",!0)])}}});const Fr=L(Hr,[["__scopeId","data-v-251f4df5"]]),Yr={class:"seventv-user-card-tabs"},qr=["selected","onClick"],zr=W({__name:"UserCardTabs",props:{activeTab:{},messageCount:{},timeoutCount:{},banCount:{},commentCount:{}},emits:["switch"],setup(a,{emit:t}){const e=a,n=wt(()=>[{id:"messages",label:"Messages",count:e.messageCount,maxCount:1e3},{id:"timeouts",label:"Timeouts",count:e.timeoutCount,maxCount:99},{id:"bans",label:"Bans",count:e.banCount,maxCount:99},{id:"comments",label:"Comments",count:e.commentCount,maxCount:10}]);function r(s,i){return s>=i?i.toString()+"+":s.toString()}return(s,i)=>(u(),c("div",Yr,[(u(!0),c(z,null,te(n.value,m=>(u(),c("button",{key:m.label,selected:s.activeTab===m.id,onClick:l=>t("switch",m.id)},[K(x(r(m.count,m.maxCount))+" ",1),f("p",null,x(m.label),1)],8,qr))),128))]))}});const jr=L(zr,[["__scopeId","data-v-22801492"]]),Qr={class:"seventv-basic-system-message"},Gr=W({__name:"BasicSystemMessage",props:{text:{}},setup(a){return(t,e)=>(u(),c("span",Qr,x(t.text),1))}});const Xr=L(Gr,[["__scopeId","data-v-0218c5a7"]]);function ye(a){return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ye(a)}function Kr(a){return Y(1,arguments),a instanceof Date||ye(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Z(a){Y(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||ye(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Jr(a){if(Y(1,arguments),!Kr(a)&&typeof a!="number")return!1;var t=Z(a);return!isNaN(Number(t))}function oe(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Zr(a,t){Y(2,arguments);var e=Z(a).getTime(),n=oe(t);return new Date(e+n)}function es(a,t){Y(2,arguments);var e=oe(t);return Zr(a,-e)}var ts=864e5;function as(a){Y(1,arguments);var t=Z(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=t.getTime(),r=e-n;return Math.floor(r/ts)+1}function be(a){Y(1,arguments);var t=1,e=Z(a),n=e.getUTCDay(),r=(n<t?7:0)+n-t;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function it(a){Y(1,arguments);var t=Z(a),e=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(e+1,0,4),n.setUTCHours(0,0,0,0);var r=be(n),s=new Date(0);s.setUTCFullYear(e,0,4),s.setUTCHours(0,0,0,0);var i=be(s);return t.getTime()>=r.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function ns(a){Y(1,arguments);var t=it(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var n=be(e);return n}var rs=6048e5;function ss(a){Y(1,arguments);var t=Z(a),e=be(t).getTime()-ns(t).getTime();return Math.round(e/rs)+1}var os={};function Me(){return os}function we(a,t){var e,n,r,s,i,m,l,g;Y(1,arguments);var h=Me(),v=oe((e=(n=(r=(s=t==null?void 0:t.weekStartsOn)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(m=i.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&r!==void 0?r:h.weekStartsOn)!==null&&n!==void 0?n:(l=h.locale)===null||l===void 0||(g=l.options)===null||g===void 0?void 0:g.weekStartsOn)!==null&&e!==void 0?e:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=Z(a),o=_.getUTCDay(),C=(o<v?7:0)+o-v;return _.setUTCDate(_.getUTCDate()-C),_.setUTCHours(0,0,0,0),_}function ut(a,t){var e,n,r,s,i,m,l,g;Y(1,arguments);var h=Z(a),v=h.getUTCFullYear(),_=Me(),o=oe((e=(n=(r=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(m=i.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&r!==void 0?r:_.firstWeekContainsDate)!==null&&n!==void 0?n:(l=_.locale)===null||l===void 0||(g=l.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(o>=1&&o<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var C=new Date(0);C.setUTCFullYear(v+1,0,o),C.setUTCHours(0,0,0,0);var M=we(C,t),$=new Date(0);$.setUTCFullYear(v,0,o),$.setUTCHours(0,0,0,0);var b=we($,t);return h.getTime()>=M.getTime()?v+1:h.getTime()>=b.getTime()?v:v-1}function is(a,t){var e,n,r,s,i,m,l,g;Y(1,arguments);var h=Me(),v=oe((e=(n=(r=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(i=t.locale)===null||i===void 0||(m=i.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&r!==void 0?r:h.firstWeekContainsDate)!==null&&n!==void 0?n:(l=h.locale)===null||l===void 0||(g=l.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&e!==void 0?e:1),_=ut(a,t),o=new Date(0);o.setUTCFullYear(_,0,v),o.setUTCHours(0,0,0,0);var C=we(o,t);return C}var us=6048e5;function ds(a,t){Y(1,arguments);var e=Z(a),n=we(e,t).getTime()-is(e,t).getTime();return Math.round(n/us)+1}function k(a,t){for(var e=a<0?"-":"",n=Math.abs(a).toString();n.length<t;)n="0"+n;return e+n}var cs={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return k(e==="yy"?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return e==="M"?String(n+1):k(n+1,2)},d:function(t,e){return k(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h:function(t,e){return k(t.getUTCHours()%12||12,e.length)},H:function(t,e){return k(t.getUTCHours(),e.length)},m:function(t,e){return k(t.getUTCMinutes(),e.length)},s:function(t,e){return k(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds(),s=Math.floor(r*Math.pow(10,n-3));return k(s,e.length)}};const ae=cs;var ue={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ls={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){var r=t.getUTCFullYear(),s=r>0?r:1-r;return n.ordinalNumber(s,{unit:"year"})}return ae.y(t,e)},Y:function(t,e,n,r){var s=ut(t,r),i=s>0?s:1-s;if(e==="YY"){var m=i%100;return k(m,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):k(i,e.length)},R:function(t,e){var n=it(t);return k(n,e.length)},u:function(t,e){var n=t.getUTCFullYear();return k(n,e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return k(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return k(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return ae.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return k(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var s=ds(t,r);return e==="wo"?n.ordinalNumber(s,{unit:"week"}):k(s,e.length)},I:function(t,e,n){var r=ss(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):k(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):ae.d(t,e)},D:function(t,e,n){var r=as(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):k(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var s=t.getUTCDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return k(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(s,{width:"short",context:"formatting"});case"eeee":default:return n.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var s=t.getUTCDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return k(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(s,{width:"narrow",context:"standalone"});case"cccccc":return n.day(s,{width:"short",context:"standalone"});case"cccc":default:return n.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return k(s,e.length);case"io":return n.ordinalNumber(s,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours(),s=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r=t.getUTCHours(),s;switch(r===12?s=ue.noon:r===0?s=ue.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r=t.getUTCHours(),s;switch(r>=17?s=ue.evening:r>=12?s=ue.afternoon:r>=4?s=ue.morning:s=ue.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){var r=t.getUTCHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ae.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):ae.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):k(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):k(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):ae.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):ae.s(t,e)},S:function(t,e){return ae.S(t,e)},X:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return je(i);case"XXXX":case"XX":return ne(i);case"XXXXX":case"XXX":default:return ne(i,":")}},x:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();switch(e){case"x":return je(i);case"xxxx":case"xx":return ne(i);case"xxxxx":case"xxx":default:return ne(i,":")}},O:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ze(i,":");case"OOOO":default:return"GMT"+ne(i,":")}},z:function(t,e,n,r){var s=r._originalDate||t,i=s.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ze(i,":");case"zzzz":default:return"GMT"+ne(i,":")}},t:function(t,e,n,r){var s=r._originalDate||t,i=Math.floor(s.getTime()/1e3);return k(i,e.length)},T:function(t,e,n,r){var s=r._originalDate||t,i=s.getTime();return k(i,e.length)}};function ze(a,t){var e=a>0?"-":"+",n=Math.abs(a),r=Math.floor(n/60),s=n%60;if(s===0)return e+String(r);var i=t||"";return e+String(r)+i+k(s,2)}function je(a,t){if(a%60===0){var e=a>0?"-":"+";return e+k(Math.abs(a)/60,2)}return ne(a,t)}function ne(a,t){var e=t||"",n=a>0?"-":"+",r=Math.abs(a),s=k(Math.floor(r/60),2),i=k(r%60,2);return n+s+e+i}const ms=ls;var Qe=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},dt=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},hs=function(t,e){var n=t.match(/(P+)(p+)?/)||[],r=n[1],s=n[2];if(!s)return Qe(t,e);var i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",Qe(r,e)).replace("{{time}}",dt(s,e))},gs={p:dt,P:hs};const vs=gs;function fs(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}var ps=["D","DD"],_s=["YY","YYYY"];function ys(a){return ps.indexOf(a)!==-1}function bs(a){return _s.indexOf(a)!==-1}function Ge(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ws={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Cs=function(t,e,n){var r,s=ws[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const Ms=Cs;function $e(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,n=a.formats[e]||a.formats[a.defaultWidth];return n}}var $s={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ts={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Us={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ks={date:$e({formats:$s,defaultWidth:"full"}),time:$e({formats:Ts,defaultWidth:"full"}),dateTime:$e({formats:Us,defaultWidth:"full"})};const Ds=ks;var Ss={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Is=function(t,e,n,r){return Ss[t]};const Ls=Is;function he(a){return function(t,e){var n=e!=null&&e.context?String(e.context):"standalone",r;if(n==="formatting"&&a.formattingValues){var s=a.defaultFormattingWidth||a.defaultWidth,i=e!=null&&e.width?String(e.width):s;r=a.formattingValues[i]||a.formattingValues[s]}else{var m=a.defaultWidth,l=e!=null&&e.width?String(e.width):a.defaultWidth;r=a.values[l]||a.values[m]}var g=a.argumentCallback?a.argumentCallback(t):t;return r[g]}}var Ps={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},xs={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Os={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Bs={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Es={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Rs={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},As=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ns={ordinalNumber:As,era:he({values:Ps,defaultWidth:"wide"}),quarter:he({values:xs,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:he({values:Os,defaultWidth:"wide"}),day:he({values:Bs,defaultWidth:"wide"}),dayPeriod:he({values:Es,defaultWidth:"wide",formattingValues:Rs,defaultFormattingWidth:"wide"})};const Ws=Ns;function ge(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.width,r=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],s=t.match(r);if(!s)return null;var i=s[0],m=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(m)?Hs(m,function(v){return v.test(i)}):Vs(m,function(v){return v.test(i)}),g;g=a.valueCallback?a.valueCallback(l):l,g=e.valueCallback?e.valueCallback(g):g;var h=t.slice(i.length);return{value:g,rest:h}}}function Vs(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function Hs(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function Fs(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(a.matchPattern);if(!n)return null;var r=n[0],s=t.match(a.parsePattern);if(!s)return null;var i=a.valueCallback?a.valueCallback(s[0]):s[0];i=e.valueCallback?e.valueCallback(i):i;var m=t.slice(r.length);return{value:i,rest:m}}}var Ys=/^(\d+)(th|st|nd|rd)?/i,qs=/\d+/i,zs={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},js={any:[/^b/i,/^(a|c)/i]},Qs={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Gs={any:[/1/i,/2/i,/3/i,/4/i]},Xs={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ks={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Js={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Zs={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},eo={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},to={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ao={ordinalNumber:Fs({matchPattern:Ys,parsePattern:qs,valueCallback:function(t){return parseInt(t,10)}}),era:ge({matchPatterns:zs,defaultMatchWidth:"wide",parsePatterns:js,defaultParseWidth:"any"}),quarter:ge({matchPatterns:Qs,defaultMatchWidth:"wide",parsePatterns:Gs,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ge({matchPatterns:Xs,defaultMatchWidth:"wide",parsePatterns:Ks,defaultParseWidth:"any"}),day:ge({matchPatterns:Js,defaultMatchWidth:"wide",parsePatterns:Zs,defaultParseWidth:"any"}),dayPeriod:ge({matchPatterns:eo,defaultMatchWidth:"any",parsePatterns:to,defaultParseWidth:"any"})};const no=ao;var ro={code:"en-US",formatDistance:Ms,formatLong:Ds,formatRelative:Ls,localize:Ws,match:no,options:{weekStartsOn:0,firstWeekContainsDate:1}};const so=ro;var oo=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,io=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,uo=/^'([^]*?)'?$/,co=/''/g,lo=/[a-zA-Z]/;function mo(a,t,e){var n,r,s,i,m,l,g,h,v,_,o,C,M,$,b,B,F,N;Y(2,arguments);var O=String(t),H=Me(),q=(n=(r=e==null?void 0:e.locale)!==null&&r!==void 0?r:H.locale)!==null&&n!==void 0?n:so,j=oe((s=(i=(m=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(g=e.locale)===null||g===void 0||(h=g.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&m!==void 0?m:H.firstWeekContainsDate)!==null&&i!==void 0?i:(v=H.locale)===null||v===void 0||(_=v.options)===null||_===void 0?void 0:_.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=oe((o=(C=(M=($=e==null?void 0:e.weekStartsOn)!==null&&$!==void 0?$:e==null||(b=e.locale)===null||b===void 0||(B=b.options)===null||B===void 0?void 0:B.weekStartsOn)!==null&&M!==void 0?M:H.weekStartsOn)!==null&&C!==void 0?C:(F=H.locale)===null||F===void 0||(N=F.options)===null||N===void 0?void 0:N.weekStartsOn)!==null&&o!==void 0?o:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!q.localize)throw new RangeError("locale must contain localize property");if(!q.formatLong)throw new RangeError("locale must contain formatLong property");var y=Z(a);if(!Jr(y))throw new RangeError("Invalid time value");var D=fs(y),w=es(y,D),E={firstWeekContainsDate:j,weekStartsOn:d,locale:q,_originalDate:y},S=O.match(io).map(function(U){var R=U[0];if(R==="p"||R==="P"){var V=vs[R];return V(U,q.formatLong)}return U}).join("").match(oo).map(function(U){if(U==="''")return"'";var R=U[0];if(R==="'")return ho(U);var V=ms[R];if(V)return!(e!=null&&e.useAdditionalWeekYearTokens)&&bs(U)&&Ge(U,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&ys(U)&&Ge(U,t,String(a)),V(w,U,q.localize,E);if(R.match(lo))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return U}).join("");return S}function ho(a){var t=a.match(uo);return t?t[1].replace(co,"'"):a}const go=Re(mo,2),vo={class:"seventv-user-card-container"},fo={class:"seventv-user-card-header"},po={class:"seventv-user-card-menuactions"},_o={class:"seventv-user-card-avatar"},yo=["src"],bo={class:"seventv-user-card-usertag-container"},wo=["href"],Co=["data-seventv-paint-id"],Mo={class:"seventv-user-card-badges"},$o={class:"seventv-user-card-interactive"},To={class:"seventv-user-card-metrics"},Uo={key:0},ko={key:1},Do={key:2},So={key:3},Io=["show-tabs"],Lo=W({__name:"UserCard",props:{target:{}},emits:["close","mount-handle"],setup(a,{emit:t}){const e=a,n=ie(),r=et(n),{identity:s}=Ct(Tt()),i=Ie(e.target.id),m=st(n),l=se(),{t:g}=Pe(),h=P(),v=P(),_=P(null),o=Ce({activeTab:"messages",canActorAccessLogs:!1,ban:null,paint:null,targetUser:{id:e.target.id,username:e.target.username,displayName:e.target.displayName,bannerURL:"",avatarURL:"",createdAt:"",isModerator:!1,color:"",badges:[],relationship:{followedAt:"",subscription:{isSubscribed:!1,tier:"",months:0}}},stream:{live:!1,game:"",viewCount:0},messageCursors:new WeakMap,timelines:{messages:{},bans:{},timeouts:{},comments:{}},count:{messages:0,bans:0,timeouts:0,comments:0}});function C(){return o.timelines[o.activeTab]}async function M(d){var E;if(!o.targetUser||!l||o.activeTab!=="messages")return[];const y=d?o.messageCursors.get(d):void 0,D=await l.query({query:Xt,variables:{channelLogin:n.username,senderID:o.targetUser.id,cursor:y}}).catch(S=>Promise.reject(S));if(!D||(E=D.errors)!=null&&E.length||!Array.isArray(D.data.channel.logs.bySender.edges))return[];const w=[];for(const S of D.data.channel.logs.bySender.edges){if(!S.node)continue;const U=ke(S.node);w.push(U),o.messageCursors.set(U,S.cursor)}return w}async function $(){var w,E,S,U,R;if(!o.targetUser||!l)return;const d=await l.query({query:Gt,variables:{channelLogin:n.username,channelID:n.id,targetID:o.targetUser.id}}).catch(V=>Promise.reject(V));if(!d||(w=d.errors)!=null&&w.length||!d.data.channelUser)return;o.count.messages=d.data.channelUser.modLogs.messages.messageCount,o.count.bans=d.data.channelUser.modLogs.bans.actionCount,o.count.timeouts=d.data.channelUser.modLogs.timeouts.actionCount,o.count.comments=d.data.viewerCardModLogs.comments.edges.length??0,o.ban=d.data.banStatus;const y=d.data.channelUser.modLogs.timeouts.edges,D=d.data.channelUser.modLogs.bans.edges;for(const[V,Q]of[["timeouts",y],["bans",D]]){const me=[];for(const ee of Q){const ct={TIMEOUT_USER:ee.node.details.reason?"messages.mod_timeout_user_reason":"messages.mod_timeout_user",UNTIMEOUT_USER:"messages.mod_undo_timeout_user",BAN_USER:ee.node.details.reason?"messages.mod_ban_user_reason":"messages.mod_ban_user",UNBAN_USER:"messages.mod_undo_ban_user"}[ee.node.action],Ae=new Ne(ee.node.id).setComponent(Xr,{text:g(ct,{actor:(E=ee.node.user)==null?void 0:E.login,victim:(S=ee.node.target)==null?void 0:S.login,duration:((U=ee.node.details)==null?void 0:U.durationSeconds)+" seconds",reason:(R=ee.node.details)==null?void 0:R.reason})});Ae.setTimestamp(Date.parse(ee.node.timestamp)),me.push(Ae)}N(me,V)}for(const V of d.data.viewerCardModLogs.comments.edges)b(V.node)}function b(d){const y=new Ne(d.id);y.setAuthor({id:d.author.id,username:d.author.login,displayName:d.author.displayName,color:d.author.chatColor}),y.setTimestamp(Date.parse(d.timestamp)),y.body=d.text,N([y],"comments")}function B(){if(!h.value||!h.value.container||h.value.container.scrollTop>0)return;const y=F(new Date(Math.min(...Object.keys(o.timelines.messages).map(E=>Date.parse(E)||1/0))));if(!y)return;const D=o.timelines.messages[y];if(!D)return;const w=D[0];w&&(O(1),M(w).then(E=>{E.length&&N(E)}).catch(E=>{re.error("Failed to fetch more messages",E)}))}function F(d){return`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`}function N(d,y="messages"){const D=o.timelines[y],w=r.find(S=>!!S.author&&S.author.id===e.target.id,!0),E=new Set(w.map(S=>S.id));for(const S of d){if(!S.timestamp)continue;const U=E.has(S.id)?"LIVE":F(new Date(S.timestamp));if(!D[U])D[U]=[];else if(D[U].find(R=>R.id===S.id))continue;D[U].unshift(S),D[U].sort((R,V)=>R.timestamp-V.timestamp)}}function O(d){!h.value||!h.value.container||h.value.container.scrollTo({top:d})}function H(d){!o.targetUser.username||!m.openViewerCard(d,o.targetUser.username,"")||t("close")}function q(){return window.location.origin+"/"+e.target.username}function j(d){return d?go("PPP")(new Date(d)):""}return _e(async()=>{if(l){l.query({query:Qt,variables:{channelID:n.id,channelIDStr:n.id,channelLogin:n.username,targetLogin:e.target.username,withStandardGifting:!1,isViewerBadgeCollectionEnabled:!0}}).then(async d=>{var y,D,w,E,S,U,R,V;if(d.data.channel&&(o.canActorAccessLogs=((y=d.data.channel.moderationSettings)==null?void 0:y.canAccessViewerCardModLogs)??!1),d.data.targetUser){if(o.targetUser.id=d.data.targetUser.id,o.targetUser.username=d.data.targetUser.login,o.targetUser.displayName=d.data.targetUser.displayName,o.targetUser.avatarURL=d.data.targetUser.profileImageURL,o.targetUser.bannerURL=d.data.targetUser.bannerImageURL??"",o.targetUser.color=d.data.targetUser.chatColor,o.targetUser.relationship.followedAt=j((D=d.data.targetUser.relationship)==null?void 0:D.followedAt),o.targetUser.createdAt=j(d.data.targetUser.createdAt),o.targetUser.relationship.subscription.months=((E=(w=d.data.targetUser.relationship)==null?void 0:w.cumulativeTenure)==null?void 0:E.months)??0,(S=d.data.targetUser.relationship)!=null&&S.subscriptionBenefit&&(o.targetUser.relationship.subscription.isSubscribed=!0,o.targetUser.relationship.subscription.tier=(U=d.data.targetUser.relationship)==null?void 0:U.subscriptionBenefit.tier),d.data.targetUser.stream&&(o.stream.live=!0,o.stream.game=((R=d.data.targetUser.stream.game)==null?void 0:R.displayName)??"",o.stream.viewCount=d.data.targetUser.stream.viewersCount),o.targetUser.badges.length=0,o.targetUser.isModerator=d.data.targetUser.isModerator||d.data.targetUser.id===n.id,d.data.channelViewer&&((V=d.data.channelViewer.earnedBadges)!=null&&V.length))for(let Q=0;Q<d.data.channelViewer.earnedBadges.length;Q++){const me=Ut(d.data.channelViewer.earnedBadges[Q]);me&&(o.targetUser.badges[Q]=me)}for(const Q of i.badges.values())o.targetUser.badges.push(Q)}o.targetUser&&(o.canActorAccessLogs||s.value&&o.targetUser.id===s.value.id)&&(N(await M().catch(Q=>re.error("failed to fetch message logs",Q))??[]),$().catch(Q=>re.error("failed to fetch moderator data",Q)))}).catch(d=>re.error("failed to query user card",d));for(const d of i.paints.values()){o.paint=d;break}}}),ce(()=>[o.targetUser.bannerURL,o.targetUser.color],([d,y])=>{_.value&&(_.value.style.setProperty("--seventv-user-card-banner-url",`url(${d})`),_.value.style.setProperty("--seventv-user-card-color",y))}),Mt(async()=>{v.value&&t("mount-handle",v.value),N(r.find(d=>!!d.author&&d.author.id===e.target.id,!0)),xe(()=>{!h.value||!h.value.container||O(h.value.container.scrollHeight)})}),(d,y)=>{const D=le("tooltip");return u(),c("main",vo,[f("div",{ref_key:"cardRef",ref:_,class:"seventv-user-card"},[f("div",fo,[f("div",{ref_key:"dragHandle",ref:v,class:"seventv-user-card-identity"},[f("div",po,[G(I(Pt,{onClick:H},null,512),[[D,p(g)("user_card.native")]]),I(Lt,{class:"close-button",onClick:y[0]||(y[0]=w=>t("close"))})]),f("div",_o,[o.targetUser.avatarURL?(u(),c("img",{key:0,src:o.targetUser.avatarURL},null,8,yo)):T("",!0)]),f("div",bo,[f("a",{href:q(),target:"_blank",class:"seventv-user-card-usertag"},[I(fe,{user:o.targetUser,"hide-badges":!0,clickable:!1},null,8,["user"])],8,wo)]),o.paint?(u(),c("span",{key:0,class:"seventv-user-card-paint seventv-painted-content seventv-paint","data-seventv-paint-id":o.paint.id},x(o.paint.data.name),9,Co)):T("",!0),f("div",Mo,[(u(!0),c(z,null,te(o.targetUser.badges,w=>(u(),A(De,{key:w.id,badge:w,alt:w.data.tooltip,type:"app"},null,8,["badge","alt"]))),128))])],512),f("div",$o,[f("div",To,[o.targetUser.createdAt?(u(),c("p",Uo,[I(na),K(" "+x(p(g)("user_card.account_created_date",{date:o.targetUser.createdAt})),1)])):T("",!0),o.targetUser.relationship.followedAt?(u(),c("p",ko,[I(da),K(" "+x(p(g)("user_card.following_since_date",{date:o.targetUser.relationship.followedAt})),1)])):T("",!0),o.targetUser.relationship.subscription.isSubscribed?(u(),c("p",Do,[I(We),K(" "+x(`${p(g)("user_card.subscription_tier",{tier:o.targetUser.relationship.subscription.tier[0]})} -
							${p(g)("user_card.subscription_length",{length:o.targetUser.relationship.subscription.months})}`),1)])):o.targetUser.relationship.subscription.months?(u(),c("p",So,[I(We),K(" "+x(p(g)("user_card.previously_subscription_length",{length:o.targetUser.relationship.subscription.months})),1)])):T("",!0)]),I(ha),p(n).actor.roles.has("MODERATOR")&&!o.targetUser.isModerator||p(n).actor.roles.has("BROADCASTER")?(u(),A(Fr,{key:0,target:o.targetUser,ban:o.ban,"is-moderator":o.targetUser.isModerator,onVictimBanned:y[1]||(y[1]=w=>o.ban=w),onVictimUnbanned:y[2]||(y[2]=w=>o.ban=null),onVictimModded:y[3]||(y[3]=w=>o.targetUser.isModerator=!0),onVictimUnmodded:y[4]||(y[4]=w=>o.targetUser.isModerator=!1)},null,8,["target","ban","is-moderator"])):T("",!0)])]),f("div",{class:"seventv-user-card-data","show-tabs":p(n).actor.roles.has("MODERATOR")},[p(n).actor.roles.has("MODERATOR")?(u(),A(jr,{key:0,"active-tab":o.activeTab,"message-count":o.count.messages,"ban-count":o.count.bans,"timeout-count":o.count.timeouts,"comment-count":o.count.comments,onSwitch:y[5]||(y[5]=w=>o.activeTab=w)},null,8,["active-tab","message-count","ban-count","timeout-count","comment-count"])):T("",!0),I(at,{ref_key:"scroller",ref:h,onContainerScroll:B},{default:de(()=>[I(Dr,{"active-tab":o.activeTab,target:o.targetUser,timeline:C(),scroller:h.value,onAddModComment:b},null,8,["active-tab","target","timeline","scroller"])]),_:1},512)],8,Io)],512)])}}});const Po=L(Lo,[["__scopeId","data-v-f8cf1704"]]),xo={key:0,class:"seventv-chat-user-badge-list"},Oo={key:0},Bo={key:1},Eo=W({__name:"UserTag",props:{user:{},msgId:{},asMention:{type:Boolean},hideBadges:{type:Boolean},clickable:{type:Boolean,default:!0},badges:{}},emits:["open-native-card"],setup(a,{emit:t}){const e=a,n=ie(),r=rt(n),s=Ie(e.user.id),i=X("vanity.nametag_paints"),m=X("chat.user_card"),l=P([]),g=P(),h=P(!1),v=P(),_=P(null),o=P([]);function C(b){if(e.clickable){if(!m.value){t("open-native-card",b);return}h.value=!h.value}}if(e.badges&&r.twitchBadgeSets)for(const[b,B]of Object.entries(e.badges)){const F=b,N=B;for(const O of[r.twitchBadgeSets.channelsBySet,r.twitchBadgeSets.globalsBySet]){if(!O)continue;const H=O.get(F);if(!H)continue;const q=H.get(N);if(q){l.value.push(q);break}}}const M=Date.now(),$=ce([s.paints,s.badges],([b,B])=>{if(e.msgId&&e.user.lastMsgId&&e.msgId!==e.user.lastMsgId&&Date.now()-M>5e3){xe(()=>$());return}_.value=i.value&&b&&b.size?b.values().next().value:null,o.value=[...B.values()]},{immediate:!0});return(b,B)=>{const F=le("cosmetic-paint"),N=le("tooltip");return u(),c(z,null,[b.user&&b.user.displayName?(u(),c("div",{key:0,ref_key:"tagRef",ref:g,class:"seventv-chat-user",style:ve({color:b.user.color})},[!b.hideBadges&&(l.value.length||p(s).badges.size)?(u(),c("span",xo,[(u(!0),c(z,null,te(l.value,O=>(u(),A(De,{key:O.id,badge:O,alt:O.title,type:"twitch",onClick:B[0]||(B[0]=H=>C(H))},null,8,["badge","alt"]))),128)),(u(!0),c(z,null,te(o.value,O=>(u(),A(De,{key:O.id,badge:O,alt:O.data.tooltip,type:"app"},null,8,["badge","alt"]))),128))])):T("",!0),G((u(),c("span",{class:"seventv-chat-user-username",onClick:B[1]||(B[1]=O=>C(O))},[G((u(),c("span",null,[b.asMention?(u(),c("span",Oo,"@")):T("",!0),f("span",null,x(b.user.displayName),1),b.user.intl?(u(),c("span",Bo," ("+x(b.user.username)+")",1)):T("",!0)])),[[F,_.value?_.value.id:null]])])),[[N,_.value&&_.value.data?`Paint: ${_.value.data.name}`:""]])],4)):T("",!0),h.value&&g.value?(u(),A(Ue,{key:1,to:"#seventv-float-context"},[I(Rt,{class:"seventv-user-card-float",handle:v.value,"initial-anchor":g.value,"initial-middleware":[p(Te)({mainAxis:!0,crossAxis:!0}),p($t)()],once:!0},{default:de(()=>[I(Po,{target:e.user,onClose:B[2]||(B[2]=O=>h.value=!1),onMountHandle:B[3]||(B[3]=O=>v.value=O)},null,8,["target"])]),_:1},8,["handle","initial-anchor","initial-middleware"])])):T("",!0)],64)}}});const fe=L(Eo,[["__scopeId","data-v-6cbf31b5"]]);export{Xr as B,Wt as I,Se as U,_r as _,Be as a,st as b,Z as c,oe as d,ye as e,Re as f,fs as g,so as h,Me as i,fe as j,De as k,Y as r,Ye as t,rt as u};
