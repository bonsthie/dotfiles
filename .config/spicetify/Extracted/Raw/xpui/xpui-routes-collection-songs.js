"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8828],{28944:(e,t,r)=>{r.d(t,{Hm:()=>s,gU:()=>i});var n=r(30758),a=r(86070);const l=(0,n.createContext)(null);function s({children:e,playlist:t,metadataOptions:r,contentsOptions:s}){return(0,a.jsx)(l.Provider,{value:(0,n.useMemo)((()=>({playlist:t,metadataOptions:r,contentsOptions:s})),[s,r,t]),children:e})}function i(){const e=(0,n.useContext)(l);if(null===e)throw new Error("Trying to use 'ListPlatformDataContext' without 'ListPlatformDataProvider'!");return e}},99680:(e,t,r)=>{r.d(t,{db:()=>s,jP:()=>i});var n=r(30758),a=r(86070);const l=(0,n.createContext)({setFilterPredicate:()=>{throw new Error("setFilterPredicate must be used within a ListPlatformFilterPredicatesProvider")},filterPredicate:null}),s=(0,n.memo)((function({children:e}){const[t,r]=(0,n.useState)(null),s=(0,n.useMemo)((()=>({filterPredicate:t,setFilterPredicate:r})),[t]);return(0,a.jsx)(l.Provider,{value:s,children:e})}));function i(){return(0,n.useContext)(l)}},39076:(e,t,r)=>{r.d(t,{K_:()=>d,ll:()=>u});var n=r(30758),a=r(28944),l=r(88321),s=r(48604),i=r(16323),o=r(86070);const c=(0,n.createContext)(null);function u({children:e}){const{playlist:t,contentsOptions:r}=(0,a.gU)(),u=(0,s.m)(),d=(0,n.useCallback)((async(e,n)=>await u.getContents(t.metadata.uri,{...r,offset:e,limit:n})),[u,r,t.metadata.uri]),g=(0,l.E)({nrItems:t.contents.totalLength,fetch:d,limit:50,initialItems:t.contents.items});return(0,i.H)(t.metadata.uri,g.invalidateCache),(0,o.jsx)(c.Provider,{value:g,children:e})}function d(){const e=(0,n.useContext)(c);if(null===e)throw new Error("Trying to use 'ListPlatformItemsContext' without 'ListPlatformItemsProvider'!");return e}},58544:(e,t,r)=>{r.d(t,{Zr:()=>i,kW:()=>o});var n=r(30758),a=r(15691),l=r(86070);const s=(0,n.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ListPlatformSortProvider")},sortState:null}),i=n.memo((function({uri:e,children:t}){return(0,l.jsx)(a.E,{uri:e,defaultState:null,sortContext:s,children:t})}));function o(){return(0,n.useContext)(s)}},84467:(e,t,r)=>{r.d(t,{W:()=>T});var n=r(30758),a=r(11808),l=r(80955),s=r(83028),i=r(15549),o=r(28944),c=r(99680),u=r(39076),d=r(58544),g=r(81987),m=r(19159);var f=r(75224),p=r(48604),y=r(86070);const A=({children:e,uri:t})=>{const r=(0,p.m)().getCapabilities(),{filter:u}=(0,n.useContext)(i.g),{sortState:A}=(0,d.kW)(),{filterPredicate:T}=(0,c.jP)(),{metadataOptions:S,contentsOptions:h}=((e,t,r)=>{const a=(0,g.NC)(m.G6N);return(0,n.useMemo)((()=>({metadataOptions:{decorateFormatListData:!0,withSync:!0,hydrateCollaboratorsWithMembers:a},contentsOptions:{offset:0,limit:25,filter:e,sort:t??void 0,filterPredicates:r?[r]:[]}})),[a,e,t,r])})(u,A,T),{data:C,isLoading:x,isError:D}=(0,f.W)(t,S,h);return!C||x?(0,y.jsx)(s.A,{hasError:D,errorMessage:a.Ru.get("error.not_found.title.playlist"),loadOffline:r.canModifyOffline}):C.metadata.permissions&&!C.metadata.permissions.canView?(0,y.jsx)(l.Z,{uri:t}):(0,y.jsx)(o.Hm,{playlist:C,metadataOptions:S,contentsOptions:h,children:e})},T=({children:e,uri:t})=>(0,y.jsx)(i.s,{uri:t,children:(0,y.jsx)(c.db,{children:(0,y.jsx)(d.Zr,{uri:t,children:(0,y.jsx)(A,{uri:t,children:(0,y.jsx)(u.ll,{children:e})})})})})},16046:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$e});var n=r(30758),a=r(41978),l=r(9183),s=r(90507),i=r(81987),o=r(78301),c=r(61544),u=r(11808),d=r(31685),g=r(28754),m=r(83028),f=r(15549),p=r(42832),y=r(67984),A=r(34892),T=r(46288),S=r(97438),h=r(37712),C=r(47231),x=r(57262),D=r(76652),E=r(2e3),w=r(18502),k=r(25763),I=r(15454),b=r(69915),R=r(72091),P=r(95070),j=r(86070);const _=n.memo((({tracklistDomRef:e})=>{const{spec:t,logger:r}=(0,R.r)(w.E,{}),a=(0,n.useCallback)((()=>{r.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[r,t]),l=(0,n.useCallback)((()=>{r.logInteraction(t.filterFieldFactory().hitClearFilter())}),[r,t]),s=(0,b.w)().filter((({columnType:e})=>p.gc.includes(e))).map((({columnType:e})=>e));return(0,j.jsxs)("div",{className:P.A.searchBoxContainer,children:[(0,j.jsx)(n.Suspense,{fallback:null,children:(0,j.jsx)(k.S,{placeholder:u.Ru.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:a,onClear:l})}),(0,j.jsx)(I.d,{columns:s})]})}));var L=r(97500),F=r.n(L),v=r(77925),O=r(69898),M=r(25639),N=r(58717),B=r(25558),U=r(11898),$=r(88602),H=r(75235);const V="liked-songs-tags";function W(){return(0,H.x)("liked-songs-current-tag-filter",null)}var K=r(79303);const Y="q_yjkS1y6URH4Xm7gZfw",z=e=>({id:e.filter,getName:()=>e.name,ubiId:e.name}),q=(0,n.memo)((({spec:e,nrTracks:t})=>{const{tags:r,currentTag:a,setCurrentTag:l}=function({nrTracks:e}){const t=(0,U.f)(),r=(0,O.jE)(),[a,l]=W(),[s,i]=(0,n.useState)([]),{data:o}=(0,M.I)({queryKey:[V],queryFn:()=>t?.getTracksFilterTags(),staleTime:0,gcTime:864e5,placeholderData:N.rX,refetchOnWindowFocus:!1});(0,n.useLayoutEffect)((()=>{const t=o?.find((e=>e.filter===a));if(!t&&a){if(e>0&&o?.length)return;l(null)}i(o??[])}),[a,l,e,o]);const c=(0,n.useCallback)((({data:{list:e}})=>{e===B.Ir.TRACKS&&r.invalidateQueries({queryKey:[V]})}),[r]);(0,$.l)(B.UV.UPDATE,c);const u=(0,n.useMemo)((()=>s.find((e=>e.filter===a))),[a,s]),d=(0,n.useCallback)((e=>{l(e?.filter??null)}),[l]);return{tags:a||e?s:[],currentTag:u,setCurrentTag:d}}({nrTracks:t}),s=(0,K.s)(),i=(0,n.useCallback)(((t,n,a)=>{let i;if(!t)return i=e.clearButtonFactory().hitClearFilter(),void s.logInteraction(i);const o=r.find((({filter:e})=>e===t));if(!o)return;const c=e.filterChipFactory({identifier:o.name,position:a});n?(i=c.hitClearFilter(),l(null)):(i=c.hitFilter(),o&&l(o)),s.logInteraction(i)}),[s,l,e,r]),o=a?[]:r.map(z),c=a?[z(a)]:[];return r.length?(0,j.jsx)(h.S,{children:(0,j.jsx)(v.s,{availableFilters:o,selectedFilters:c,toggleFilterId:()=>{},resetFilterIds:()=>l(null),onFilterClick:i,ariaLabel:u.Ru.get("web-player.liked-songs.liked-songs-filter-tags"),clearBtnAriaLabel:u.Ru.get("web-player.liked-songs.clear-filter"),className:F()(Y),applyLightThemeControls:!0})}):null}));var Q=r(47896),Z=r(85939),X=r(471),G=r(69578),J=r(19159),ee=r(85065),te=r(72013),re=r(17869),ne=r(62943);const ae="ivuDaTbfBpBewwr39aDQ",le=n.memo((function({metadata:e,onClickTogglePlay:t,isPlaying:r,spec:a,logger:l,backgroundColor:s,canSort:o,canFilter:c}){const{uri:d,name:g,totalLength:m}=e,f=(0,n.useRef)(null),p=(0,n.useMemo)((()=>a.actionBarFactory()),[a]),y=(0,n.useMemo)((()=>p.shuffleButtonContainerFactory()),[p]),A=(0,n.useMemo)((()=>p.filtersFactory()),[p]),T=m>0,w=m>0,k=o&&c,I=(0,X.X)(),b=(0,n.useCallback)(((e,t)=>{const r=p.downloadButtonFactory();t===ee.NV.ADD?l.logInteraction(r.hitDownload({itemToDownload:d})):t===ee.NV.REMOVE?l.logInteraction(r.hitRemoveDownload({itemToRemoveFromDownloads:d})):t===ee.NV.NO_PERMISSION&&l.logInteraction(r.hitUiReveal())}),[p,l,d]),R=(0,G.j)(),P=(0,i.NC)(J.cLA);return(0,j.jsxs)(S.E,{backgroundColor:s,children:[(0,j.jsxs)(h.S,{children:[w?(0,j.jsx)(D.D,{onClick:t,isPlaying:r,size:R,uri:d,ariaPauseLabel:u.Ru.get("playlist.a11y.pause",g),ariaPlayLabel:u.Ru.get("playlist.a11y.play",g)}):null,I&&(0,j.jsx)(re.r,{spec:y,children:(0,j.jsx)(Z.Y,{entityName:g,contextUri:d,activationPlacement:"bottomEnd",size:R})}),(0,j.jsx)(C.f,{uri:d,canDownload:T,isFollowing:!0,onFollow:()=>{},size:R,onClick:b,condensed:!0}),k?(0,j.jsx)(re.r,{spec:p,children:(0,j.jsx)(x.u,{property:J.IZ_,renderNewExperience:()=>(0,j.jsx)("div",{className:ae,children:(0,j.jsx)(Q.d,{sortOptions:[te.nw.TITLE,te.nw.ADDED_AT,te.nw.ARTIST,te.nw.ALBUM,te.nw.DURATION],defaultSortField:te.nw.ADDED_AT,filterPlaceholder:u.Ru.get("playlist.search_in_playlist"),enableViewModeMenu:!0})}),renderOldExperience:()=>(0,j.jsx)(_,{tracklistDomRef:f})})}):(0,j.jsx)("div",{className:ae,children:(0,j.jsx)(x.u,{property:ne.mA,renderNewExperience:()=>(0,j.jsx)(E.g,{options:[],onSelect:()=>{},selected:null,enableViewModeMenu:!0})})})]}),P&&(0,j.jsx)(q,{spec:A,nrTracks:m})]})}));var se=r(73516),ie=r(65159),oe=r(45546);var ce=r(58544),ue=r(68518);var de=r(39076),ge=r(78957),me=r(38637),fe=r(48604);const pe=({ariaLabel:e,columns:t,columnPersistenceKey:r,renderItem:a,defaultSortField:s})=>{const{playlist:i}=(0,ge.g)(),o=(0,fe.m)(),{canFetchAllTracks:c}=o.getCapabilities(),u=(0,de.K_)(),d=(0,n.useRef)(null),{isCompactMode:g}=(0,me.a)(),m="custom-order"===s;(e=>{const t=(0,l.wQ)(),r=(0,l.zy)(),a="POP"!==t?new URLSearchParams(r.search).get("uid"):null;(0,n.useLayoutEffect)((()=>{e.current&&a&&e.current.scrollToItem({uid:a})}),[a,e])})(d);const{trackListSortState:f,onSort:p}=((e,t)=>{const{sortState:r,setSortState:a}=(0,ce.kW)(),l=(0,n.useMemo)((()=>(0,ue.Ap)(e,r)),[e,r]),s=(0,n.useCallback)((e=>{a((0,ue.hK)(e,l,t))}),[t,a,l]);return{trackListSortState:l,onSort:s}})(t,m),y=(0,n.useCallback)((e=>({uri:e.uri,uid:e.uid,type:e.type})),[]),T=(0,n.useMemo)((()=>new Set((0,ue.g6)(t))),[t]);return(0,j.jsx)(A.a,{columns:t,children:(0,j.jsx)(oe.g0,{ariaLabel:e,hasHeaderRow:!0,columns:t,sortableColumns:T,sortState:f,onSort:p,renderRow:a,resolveItem:y,itemsCache:u,canFetchAllTracks:c,isCompactMode:g,columnPersistenceKey:r,outerRef:d},i.metadata.uri+g)})};var ye=r(95302),Ae=r(31965),Te=r(3554);const Se=[T.$.INDEX,T.$.TITLE_AND_ARTIST,T.$.ALBUM,T.$.ADDED_AT,T.$.DURATION],he=n.memo((function({usePlayContextItem:e}){const{isCompactMode:t}=(0,me.a)(),r=(({isCompactMode:e=!1})=>{const t=[...Se];return e&&t.splice(t.indexOf(T.$.TITLE_AND_ARTIST),1,T.$.TITLE,T.$.ARTIST),t})({isCompactMode:t}),{playlist:{metadata:a}}=(0,ge.g)(),l=(0,n.useCallback)(((r,n)=>{if(!(0,Ae.Jy)(r))return(0,j.jsx)(j.Fragment,{});const l=(0,Te.g)(r.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,j.jsx)(ie.W,{index:n,contextUri:a.uri,uri:r.uri,isPlayable:r.isPlayable,duration_ms:r.duration.milliseconds,name:r.name,artists:r.artists,albumOrShow:r.album,isExplicit:r.isExplicit,isMixedMedia:!1,isPaywalled:!1,isUserSubscribed:!1,isLocal:r.isLocal,addedBy:[],dateAdded:r.addedAt,hasDecoratedAddedBy:!1,release_date:"",isMOGEFRestricted:r.is19PlusOnly,type:r.type,imgUrl:l?.url||"",onMove:()=>{},onInsert:()=>{},usePlayContextItem:e,allowedDropTypes:[],isDisliked:!1,playlistName:u.Ru.get("sidebar.liked_songs"),isOwnedBySelf:!0,isCompactMode:t,hasAssociatedVideo:r.hasAssociatedVideo},n+r.uri)}),[a.uri,e,t]);return(0,j.jsx)(ye.pZ,{value:"liked-songs-tracklist",children:(0,j.jsx)(pe,{ariaLabel:u.Ru.get("sidebar.liked_songs"),columns:r,renderItem:l,columnPersistenceKey:"liked-songs-tracklist",defaultSortField:te.nw.ADDED_AT})})}));var Ce=r(40999),xe=r(12669),De=r(98767),Ee=r(42582),we=r(41184);const ke=()=>{const{playlist:{metadata:e},contentsOptions:t}=(0,ge.g)(),r=(0,fe.m)(),{canSort:a,canFilter:l}=r.getCapabilities(),{uri:i,name:c,totalLength:m}=e,f=(0,xe.z)("#5038a0"),{spec:p,logger:A}=(0,R.r)(o.k,{data:{uri:i}}),T=n.useMemo((()=>p.headerFactory()),[p]),S=n.useMemo((()=>p.tracklistFactory()),[p]),{isPlaying:h,togglePlay:C,usePlayContextItem:x,isActive:D}=(0,Ee.P)((0,we.A)(e.uri,t),{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),E=()=>{const e=(0,De.$I)({isPlaying:h,isActive:D,spec:p.actionBarFactory().playButtonFactory(),logger:A,uri:i});C({loggingParams:e})},[w]=(0,y.z1)();return(0,j.jsxs)("section",{role:"presentation",className:P.A.playlist,"data-testid":"playlist-page",children:[(0,j.jsx)(d.Q,{children:u.Ru.get("playlist.page-title",c)}),(0,j.jsx)(Ce.x,{metadata:{...e,hasSpotifyTracks:!0},totalItems:w,isPlaying:h,togglePlay:E,backgroundColor:f,specLikedSongs:T}),(0,j.jsx)(le,{metadata:e,onClickTogglePlay:E,isPlaying:h,spec:p,logger:A,backgroundColor:f,canSort:a,canFilter:l}),(0,j.jsx)("div",{className:"contentSpacing",children:m>0?(0,j.jsx)(re.r,{spec:S,children:(0,j.jsx)(he,{usePlayContextItem:x})}):(0,j.jsx)(g.p,{message:u.Ru.get("collection.empty-page.songs-subtitle"),title:u.Ru.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:u.Ru.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,j.jsx)(s.v,{"aria-hidden":"true"})})})]})};var Ie=r(45109);var be=r(61272),Re=r(12811),Pe=r(49943);var je=r(84467),_e=r(7939),Le=r(86076),Fe=r(3986),ve=r(80274),Oe=r(7353);function Me(e,t,r){const n={uri:e};return(0,Le.qq)(n,t),(0,Fe.Pz)(n,r?.map((e=>(0,ve.HI)(e)??null)).filter(Oe.P)),n}const Ne=[T.$.INDEX,T.$.TITLE_AND_ARTIST,T.$.ALBUM,T.$.ADDED_AT,T.$.DURATION],Be=({data:e,canFilter:t,canSort:r})=>{const{uri:a,name:i,totalLength:c}=e.metadata,S=(0,n.useRef)(null),h=(0,xe.z)("#5038a0"),[C]=W(),{filter:x}=(0,n.useContext)(f.g),{sortState:D,setSortState:E}=(0,n.useContext)(p.cL),{spec:w,logger:k}=(0,R.r)(o.k,{data:{uri:a}}),I=n.useMemo((()=>w.headerFactory()),[w]),b=n.useMemo((()=>w.tracklistFactory()),[w]);(0,n.useEffect)((()=>{null===D.column&&E({column:T.$.ADDED_AT,order:T.H.DESC})}),[D,E]);const _=(0,l.wQ)(),L=(0,l.zy)(),F="POP"!==_?new URLSearchParams(L.search).get("uri"):null,{isPlaying:v,togglePlay:O,usePlayContextItem:M,isActive:N}=(0,Ee.P)(Me(a,(0,se.c)(D),[x,C].filter(Oe.P)),{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),B=()=>{const e=(0,De.$I)({isPlaying:v,isActive:N,spec:w.actionBarFactory().playButtonFactory(),logger:k,uri:a});O({loggingParams:e})},[U]=(0,y.z1)(),{isCompactMode:$}=(0,me.a)(),H=(({isCompactMode:e=!1})=>{const t=[...Ne];return e&&t.splice(t.indexOf(T.$.TITLE_AND_ARTIST),1,T.$.TITLE,T.$.ARTIST),t})({isCompactMode:$});return(0,j.jsx)(A.a,{columns:H,children:(0,j.jsxs)("section",{role:"presentation",className:P.A.playlist,"data-testid":"playlist-page",children:[(0,j.jsx)(d.Q,{children:u.Ru.get("playlist.page-title",i)}),(0,j.jsx)(Ce.x,{metadata:{...e.metadata,hasSpotifyTracks:!0},totalItems:U,isPlaying:v,togglePlay:B,backgroundColor:h,specLikedSongs:I}),(0,j.jsx)(le,{metadata:e.metadata,onClickTogglePlay:B,isPlaying:v,spec:w,logger:k,backgroundColor:h,canSort:r,canFilter:t}),(0,j.jsx)("div",{className:"contentSpacing",children:c>0?(0,j.jsx)(n.Suspense,{fallback:(0,j.jsx)(m.A,{hasError:!1,errorMessage:u.Ru.get("error.request-collection-tracks-failure")}),children:(0,j.jsx)(re.r,{spec:b,children:(0,j.jsx)(Ie.b,{nrTracks:c,collectionUri:a,scrollToUri:F,usePlayContextItem:M,outerDomRef:S,spec:b,initialItems:e.contents.items,isCompactMode:$,tagFilter:C})})}):(0,j.jsx)(g.p,{message:u.Ru.get("collection.empty-page.songs-subtitle"),title:u.Ru.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:u.Ru.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,j.jsx)(s.v,{"aria-hidden":"true"})})})]})})},Ue=n.memo((function({user:e,uri:t}){const{filter:r}=(0,n.useContext)(f.g),{sortState:a}=(0,n.useContext)(p.cL),[l]=W(),s=function(e,t,r){const a=(0,U.f)(),l=(0,O.jE)(),s=(0,be.U0)((()=>["useLikedSongs",e,r]),[e,r]),{data:i}=(0,M.I)({queryKey:s(),queryFn:()=>a.getTracks(r),gcTime:18e5,placeholderData:N.rX,refetchOnWindowFocus:!1}),o=(0,n.useCallback)((()=>{l.invalidateQueries({queryKey:s()})}),[l,s]);(0,$.l)(B.UV.UPDATE,o);const c=(0,Re.$R)(t.id);return c&&i?{metadata:{uri:e,name:c.name,images:c.images,totalLength:i?.totalLength,unfilteredTotalLength:i.unfilteredTotalLength,owner:(0,Pe.w)(t)},contents:i}:null}(t,e,{offset:0,limit:25,sort:(0,se.c)(a),filters:[r,l].filter(Oe.P)}),i=(0,U.f)().getCapabilities();return s?(0,j.jsx)(Be,{data:s,canFilter:i.canFilterTracksAndEpisodes&&s.metadata.unfilteredTotalLength>0,canSort:i.canSortTracksAndEpisodes&&s.metadata.unfilteredTotalLength>0}):(0,j.jsx)(m.A,{hasError:!1,errorMessage:u.Ru.get("error.not_found.title.playlist"),loadOffline:i.canModifyOffline})})),$e=()=>{const{user:e}=(0,a.d4)(_e.Ht),t=(0,i.NC)(J.IZ_,{loadingValue:!1}),r=(0,c.Ps)("37i9dQZF1F5p3rmiWPIYgZ");if(t)return(0,j.jsx)(je.W,{uri:r.toURI(),children:(0,j.jsx)(ke,{})});if(null===e)return null;const n=(0,c.fH)(e.id).toURI();return(0,j.jsx)(p.sn,{uri:n,children:(0,j.jsx)(f.s,{uri:n,children:(0,j.jsx)(y.S1,{children:(0,j.jsx)(Ue,{uri:n,user:e})})})})}},47896:(e,t,r)=>{r.d(t,{d:()=>p});var n=r(30758),a=r(18502),l=r(25763),s=r(11808),i=r(2e3),o=r(58544),c=r(68518),u=r(48604),d=r(86070);const g=n.memo((function({sortOptions:e,defaultSortField:t,enableViewModeMenu:r}){const a=(0,u.m)(),{canSort:l}=a.getCapabilities(),{sortState:g,setSortState:m}=(0,o.kW)(),f=(0,n.useCallback)((e=>{const t=c.nw[e];m((0,c.Wc)(t,g))}),[m,g]),p=e.map((e=>c.kA[e]));"custom-order"===t&&p.unshift({key:"custom-order",value:s.Ru.get("sort.custom-order")});const y=c.kA[g?.field??t];return l?(0,d.jsx)(i.g,{options:p,onSelect:f,selected:y,sortOrder:(0,c.Qi)(g?.order??null),heading:s.Ru.get("drop_down.sort_by"),enableViewModeMenu:r}):null}));var m=r(72091);const f="cRlDGz_DCN_UOCt4Khg1",p=n.memo((function({filterPlaceholder:e,sortOptions:t,defaultSortField:r,enableViewModeMenu:s=!1}){const i=(0,u.m)(),{canSort:o,canFilter:c}=i.getCapabilities(),{spec:p,logger:y}=(0,m.r)(a.E,{}),A=(0,n.useCallback)((()=>{y.logInteraction(p.filterFieldFactory().keyStrokeFilter())}),[y,p]),T=(0,n.useCallback)((()=>{y.logInteraction(p.filterFieldFactory().hitClearFilter())}),[y,p]);return(0,d.jsxs)("div",{className:f,children:[c?(0,d.jsx)(n.Suspense,{fallback:null,children:(0,d.jsx)(l.S,{placeholder:e,onFilter:A,onClear:T})}):null,o?(0,d.jsx)(g,{sortOptions:t,defaultSortField:r,enableViewModeMenu:s}):null]})}))},78957:(e,t,r)=>{r.d(t,{g:()=>n.gU});var n=r(28944)},68518:(e,t,r)=>{r.d(t,{Ap:()=>y,Qi:()=>g,Wc:()=>c,g6:()=>p,hK:()=>A,kA:()=>u,nw:()=>d});var n=r(11808),a=r(46288),l=r(72013);const s=[l.nw.ADDED_AT,l.nw.PUBLISH_DATE],i=e=>s.includes(e)?l.xB.DESC:l.xB.ASC,o={[l.xB.ASC]:l.xB.DESC,[l.xB.DESC]:l.xB.ASC},c=(e,t)=>null===e?null:t?.field!==e?{field:e,order:i(e)}:{field:e,order:o[t.order]},u={[l.nw.TITLE]:{key:"title",get value(){return n.Ru.get("sort.title")}},[l.nw.ARTIST]:{key:"artist",get value(){return n.Ru.get("sort.artist")}},[l.nw.ALBUM]:{key:"album",get value(){return n.Ru.get("sort.album")}},[l.nw.ADDED_BY]:{key:"added-by",get value(){return n.Ru.get("sort.added-by")}},[l.nw.ADDED_AT]:{key:"added-at",get value(){return n.Ru.get("collection.sort.recently-added")}},[l.nw.DURATION]:{key:"duration",get value(){return n.Ru.get("sort.duration")}},[l.nw.SHOW_NAME]:{key:"show-name",get value(){return n.Ru.get("collection.sort.creator")}},[l.nw.PUBLISH_DATE]:{key:"publish-date",get value(){return n.Ru.get("tracklist.header.release-date")}},"custom-order":{key:"custom-order",get value(){return n.Ru.get("sort.custom-order")}}},d={title:l.nw.TITLE,artist:l.nw.ARTIST,album:l.nw.ALBUM,"added-by":l.nw.ADDED_BY,"added-at":l.nw.ADDED_AT,duration:l.nw.DURATION,"show-name":l.nw.SHOW_NAME,"publish-date":l.nw.PUBLISH_DATE,"custom-order":null};function g(e){return null===e?a.H.NONE:e===l.xB.ASC?a.H.ASC:a.H.DESC}const m={[a.$.TITLE_AND_ARTIST]:[l.nw.TITLE,l.nw.ARTIST],[a.$.TITLE]:[l.nw.TITLE],[a.$.ADDED_BY]:[l.nw.ADDED_BY],[a.$.ADDED_AT]:[l.nw.ADDED_AT],[a.$.DURATION]:[l.nw.DURATION],[a.$.ARTIST]:[l.nw.ARTIST],[a.$.ALBUM]:[l.nw.ALBUM],[a.$.ALBUM_OR_PODCAST]:[l.nw.ALBUM,l.nw.SHOW_NAME],[a.$.ALBUM_OR_SHOW]:[l.nw.ALBUM,l.nw.SHOW_NAME],[a.$.ACTIONS]:[],[a.$.RELEASE_DATE]:[l.nw.PUBLISH_DATE],[a.$.INDEX]:[],[a.$.PLAYS]:[],[a.$.ADD]:[],[a.$.EVENT_DATE]:[],[a.$.EVENT_INFO]:[],[a.$.CONCERT_DATE]:[],[a.$.CONCERT_VENUE]:[],[a.$.TITLE_AND_AUTHOR]:[l.nw.TITLE],[a.$.AUTHOR]:[],[a.$.BPM]:[],[a.$.KEY]:[],[a.$.VIBE]:[]},f={[a.H.NONE]:null,[a.H.DESC]:l.xB.DESC,[a.H.ASC]:l.xB.ASC,[a.H.SECONDARY_DESC]:l.xB.DESC,[a.H.SECONDARY_ASC]:l.xB.ASC},p=e=>e.filter((e=>m[e].length>0)),y=(e,t)=>{const r=e.find((e=>t?.field&&m[e].includes(t.field)));if(!r||!t?.field)return{column:null,order:a.H.ASC};return m[r].indexOf(t.field)>0?{column:r,order:t.order===l.xB.ASC?a.H.SECONDARY_ASC:a.H.SECONDARY_DESC}:{column:r,order:t.order===l.xB.ASC?a.H.ASC:a.H.DESC}},A=(e,t,r)=>{const n=m[e].length>1?5:3;let l=null,s=null;if(e===t.column){let i=(t.order+1)%n;i!==a.H.NONE||r||(i+=1);const o=[a.H.SECONDARY_ASC,a.H.SECONDARY_DESC].includes(i)?1:0;l=m[e][o],s=f[i]}else l=m[e][0],s=f[a.H.ASC];return null===s?null:{field:l,order:s}}}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map