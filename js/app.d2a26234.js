(function(t){function i(i){for(var e,r,o=i[0],c=i[1],l=i[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);f&&f(i);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,i=0;i<n.length;i++){for(var a=n[i],e=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(e=!1)}e&&(n.splice(i--,1),t=r(r.s=a[0]))}return t}var e={},s={app:0},n=[];function r(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,i,a){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)r.d(a,e,function(i){return t[i]}.bind(null,e));return a},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=i,o=o.slice();for(var l=0;l<o.length;l++)i(o[l]);var f=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,i,a){t.exports=a("56d7")},"01dd":function(t,i,a){t.exports=a.p+"img/Hashnode-icon.f1088aa7.png"},"06b7":function(t,i,a){t.exports=a.p+"img/SnoopDogg.2c69c74f.png"},"098e":function(t,i,a){t.exports=a.p+"img/IsaacNewton.17d43205.png"},"0da8":function(t,i,a){t.exports=a.p+"img/BrunoMars.e065b9bf.png"},"1d1d":function(t,i,a){"use strict";a("3635")},3635:function(t,i,a){},"38fd":function(t,i,a){"use strict";a("9323")},3933:function(t,i,a){t.exports=a.p+"img/Shahin.d838abbf.png"},"3ca7":function(t,i,a){"use strict";a("b6bb")},"3f1e":function(t,i,a){t.exports=a.p+"img/Mozart.9b5d3ea0.png"},"43bd":function(t,i,a){t.exports=a.p+"img/AzizMaraka.b50f3fb6.png"},"43fa":function(t,i,a){t.exports=a.p+"img/KoreanGuy.46b7cfd6.png"},"4a9c":function(t,i,a){t.exports=a.p+"img/CristianoRonaldo.a16cb3df.png"},"4af2":function(t,i,a){t.exports=a.p+"img/Loki.9d502965.png"},"552e":function(t,i,a){t.exports=a.p+"img/Drake.4d1739ce.png"},"56d7":function(t,i,a){"use strict";a.r(i);var e=a("2b0e"),s=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],r=(a("9c6e"),a("2877")),o={},c=Object(r["a"])(o,s,n,!1,null,null,null),l=c.exports,f=a("8c4f"),p=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"home-container"}},[i("Ball")],1)},u=[],d=function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},[i("div",{ref:"container",staticClass:"ball-container"}),i("div",{attrs:{id:"main-title",title:"𝓗𝓮𝓵𝓵𝓸 𝓣𝓱𝓮𝓻𝓮!💻"}},[t._v("𝓗𝓮𝓵𝓵𝓸 𝓣𝓱𝓮𝓻𝓮!💻")]),t._m(0)])},g=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"options"},[i("button",{staticClass:"button",attrs:{role:"button",onclick:"window.location.href='#/projects';"}},[t._v("𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬")]),i("button",{staticClass:"button",attrs:{role:"button",onclick:"window.location.href='#/aboutme';"}},[t._v("𝐀𝐛𝐨𝐮𝐭 𝐦𝐞")]),i("button",{staticClass:"button",attrs:{role:"button",onclick:"window.location.href='#/talents';"}},[t._v("𝐓𝐚𝐥𝐞𝐧𝐭𝐬")])])}],h=a("5a89"),m=a("622e"),v=a.n(m),_={name:"Ball",mounted(){this.scene=new h["f"],this.camera=new h["e"](75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new h["i"],this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs.container.appendChild(this.renderer.domElement);const t=new h["h"],i=t.load(v.a),a=new h["d"]({map:i,color:14449713}),e=new h["g"](1,20,20);this.ball=new h["c"](e,a),this.scene.add(this.ball);const s=new h["a"](16777215,.5);this.scene.add(s);const n=new h["b"](16777215,.7);n.position.set(1,1,1).normalize(),this.scene.add(n);const r=()=>{requestAnimationFrame(r),this.ball.rotation.x+=.02,this.ball.rotation.y+=.02,this.renderer.render(this.scene,this.camera)};r()},beforeDestroy(){this.renderer.dispose(),this.scene.dispose()}},b=_,w=(a("3ca7"),Object(r["a"])(b,d,g,!1,null,"b6af2130",null)),y=w.exports,k={name:"Home",components:{Ball:y},props:{msg:String}},S=k,C=(a("38fd"),Object(r["a"])(S,p,u,!1,null,"78837e23",null)),z=C.exports,x=function(){var t=this,i=t._self._c;return i("div",[i("nav",{attrs:{id:"cover-wrapper"}},[t._m(0),i("p1",{staticStyle:{"margin-top":"5rem",color:"rgb(0, 255, 51)","font-size":"3vw","font-weight":"bold","line-height":"0rem","font-family":"'Chakra Petch', sans-serif"},attrs:{id:"blink-text"}},[t._v("Scroll Down")])],1),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])},M=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"typewriter"},[i("h1",[t._v("Projects")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"project-section"},[i("p",{staticClass:"first-paragraph"},[t._v("QuizAtshi "),i("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/QuizAtshi';"}})]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User is asked about the countries flags.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can choose the number of questions and their difficulty level.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• For every right answer, the user is given a point and is shown the correct answer. User grade is shown after answering all questions.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can switch to Dark Mode")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"project-section"},[i("p",{staticClass:"first-paragraph"},[t._v("Zarka "),i("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Zarka';"}})]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v('• Implementation of a Key-Value store that is inspired by Cassandra\'s architecture to be named "Zarka".')]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• LSM-Tree needs is used as our storage data structure.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Consistent Hashing is used as our partition rebalancing strategy (Only adding a new node should be supported).")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Leaderless replication is used with configurable quorum sizes.")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"project-section"},[i("p",{staticClass:"first-paragraph"},[t._v("Bookstore "),i("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Bookstore';"}})]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can edit his personal information including his password.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can search for books by any of the book's attributes.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can add books to a shopping cart & checkout a shopping cart.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can View the items in the cart, total prices of the books in the cart, and Removing items from the cart.")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"project-section"},[i("p",{staticClass:"first-paragraph"},[t._v("Paint "),i("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Paint';"}})]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can draw multiple shapes with different colors.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can change the shape color, position, and size.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can replicate shapes using the ”copy” operation.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can use the ”undo” or the ”redo” operation to undo or redo any action.")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"project-section"},[i("p",{staticClass:"first-paragraph"},[t._v("GoTyper "),i("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/GoTyper';"}})]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It is a terminal-based typing game that can be played solo or with a friend on the same local network.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It utilizes socket programming for multiplayer functionality.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It contains 1000 of the most commonly used English words, as well as numbers and special characters.")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"project-section"},[i("p",{staticClass:"first-paragraph"},[t._v("Music Blender "),i("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Music-Blender';"}})]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It is a game in which each player can mix more than 60 different tones to produce new music.")]),i("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Used visual effects to show the tunes.")])])},function(){var t=this,i=t._self._c;return i("nav",{attrs:{id:"last-text-wrapper"}},[i("div",{staticClass:"typewriter"},[i("h2",[t._v("And there are many more ones on my GitHub account..")])])])}],j={name:"Projects",props:{msg:String}},P=j,O=(a("f97c"),Object(r["a"])(P,x,M,!1,null,"3db6e9af",null)),B=O.exports,D=function(){var t=this;t._self._c;return t._m(0)},U=[function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"gallery-container"}},[i("div",{attrs:{id:"gallery"}},[i("figure",[i("img",{attrs:{src:a("43bd"),alt:"Aziz Maraka"}}),i("figcaption",[t._v("Aziz Maraka🎤")])]),i("figure",[i("img",{attrs:{src:a("098e"),alt:"Isaac Newton"}}),i("figcaption",[t._v("Isaac Newton🍎")])]),i("figure",[i("img",{attrs:{src:a("f583"),alt:"Mahmoud Abdelaziz"}}),i("figcaption",[t._v("Mahmoud Abdelaziz🎬")])]),i("figure",[i("img",{attrs:{src:a("c92a"),alt:"Bahaa Sultan"}}),i("figcaption",[t._v("Bahaa Sultan🎤")])]),i("figure",[i("img",{attrs:{src:a("af00"),alt:"Dmitri Shostakovich"}}),i("figcaption",[t._v("Dmitri Shostakovich🎼")])]),i("figure",[i("img",{attrs:{src:a("552e"),alt:"Drake"}}),i("figcaption",[t._v("Drake🎤")])]),i("figure",[i("img",{attrs:{src:a("b29e"),alt:"Leonardo da Vinci"}}),i("figcaption",[t._v("Leonardo da Vinci🎨")])]),i("figure",[i("img",{attrs:{src:a("fa16"),alt:"Queen Nefertiti"}}),i("figcaption",[t._v("Queen Nefertiti👑")])]),i("figure",[i("img",{attrs:{src:a("5850"),alt:"Napoleon Bonaparte"}}),i("figcaption",[t._v("Napoleon Bonaparte")])]),i("figure",[i("img",{attrs:{src:a("63e4"),alt:"Mahmoud Elesseily"}}),i("figcaption",[t._v("Mahmoud Elesseily🎤")])]),i("figure",[i("img",{attrs:{src:a("0da8"),alt:"Bruno Mars"}}),i("figcaption",[t._v("Bruno Mars🎤")])]),i("figure",[i("img",{attrs:{src:a("43fa"),alt:"Korean Guy"}}),i("figcaption",[t._v("Korean Guy")])]),i("figure",[i("img",{attrs:{src:a("4a9c"),alt:"Cristiano Ronaldo"}}),i("figcaption",[t._v("Cristiano Ronaldo⚽️")])]),i("figure",[i("img",{attrs:{src:a("cc02"),alt:"Lionel Messi"}}),i("figcaption",[t._v("Lionel Messi⚽️")])]),i("figure",[i("img",{attrs:{src:a("4af2"),alt:"Loki"}}),i("figcaption",[t._v("Loki🎬")])]),i("figure",[i("img",{attrs:{src:a("3f1e"),alt:"Mozart"}}),i("figcaption",[t._v("Mozart🎼")])]),i("figure",[i("img",{attrs:{src:a("b31f"),alt:"Pablo Picasso"}}),i("figcaption",[t._v("Pablo Picasso🎨")])]),i("figure",[i("img",{attrs:{src:a("3933"),alt:"Shahin"}}),i("figcaption",[t._v("Shahin🎤")])]),i("figure",[i("img",{attrs:{src:a("06b7"),alt:"Snoop Dogg"}}),i("figcaption",[t._v("Snoop Dogg🎤")])]),i("figure",[i("img",{attrs:{src:a("73a4"),alt:"Stromae"}}),i("figcaption",[t._v("Stromae🎤")])]),i("figure",[i("img",{attrs:{src:a("ba35"),alt:"Tupac Shakur (2Pac)"}}),i("figcaption",[t._v("Tupac Shakur (2Pac)🎤")])])])])}],A={name:"Talents",props:{msg:String}},T=A,H=(a("9c83"),Object(r["a"])(T,D,U,!1,null,"10236e2a",null)),L=H.exports,I=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"container"}},[t._m(0),i("div",{attrs:{id:"bottom-container"}},[i("div",{attrs:{id:"social-media"}},[i("a",{attrs:{href:"https://www.linkedin.com/in/mohamed-metwalli5/",target:"_blank"}},[i("fa-icon",{attrs:{icon:["fab","linkedin"],id:"linkedin"}})],1),i("a",{attrs:{href:"https://github.com/MohamedMetwalli5",target:"_blank"}},[i("fa-icon",{attrs:{icon:["fab","github-square"],id:"github"}})],1),t._m(1)]),i("div",{staticClass:"sub-container"},[t._m(2),t._m(3),i("div",{staticClass:"flip-card",attrs:{id:"contact-me-card"},on:{click:t.contactme}},[t._m(4)]),t._m(5),i("div",{ref:"emailCard",staticClass:"flip-card",attrs:{id:"email-card"}},[t._m(6)])])])])},N=[function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"brief"}},[i("img",{attrs:{id:"image",src:a("93d4"),alt:"failed to load."}}),i("div",{attrs:{id:"textWrapper"}},[i("div",{attrs:{id:"text"}},[t._v("Hello, I'm Mohamed, Software Engineer.💻")])])])},function(){var t=this,i=t._self._c;return i("a",{attrs:{href:"https://metwalli.hashnode.dev/",target:"_blank"}},[i("img",{attrs:{src:a("01dd"),alt:"Hashnode Blog Icon",id:"hashnode"}})])},function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"last-text-wrapper"}},[i("h1",{staticClass:"typewriter"},[t._v("Pick a card!")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"flip-card",attrs:{onclick:"window.open('https://drive.google.com/file/d/1R3jhPzZlSeEnZif82yHd9AWeDw2hquqM/view?usp=sharing')"}},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/other/spades_ace_simple.svg",alt:"Download Resume"}})]),i("div",{staticClass:"flip-card-back"},[i("h1",[t._v("Download Resume📄")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_8.svg",alt:"Contact me"}})]),i("div",{staticClass:"flip-card-back"},[i("h1",[t._v("Contact me📧")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"flip-card",attrs:{onclick:"window.location.href='#/projects';"}},[i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_jack.svg",alt:"Projects"}})]),i("div",{staticClass:"flip-card-back"},[i("h1",[t._v("Projects💻")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"flip-card-inner"},[i("div",{staticClass:"flip-card-front"},[i("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_5.svg",alt:"Contact me"}})]),i("div",{staticClass:"flip-card-back"},[i("p",{staticStyle:{"align-items":"center","font-size":"1.5em"}},[i("i",{staticClass:"fa fa-envelope",staticStyle:{color:"rgb(255, 255, 255)"},attrs:{"aria-hidden":"true"}}),t._v(" mohamedmetwalli5@gmail.com")])])])}],q={name:"Talents",props:{msg:String},data(){return{isHovered:!1}},methods:{contactme(){alert("Click on card number 5!")}}},E=q,R=(a("1d1d"),Object(r["a"])(E,I,N,!1,null,"31220b30",null)),G=R.exports;e["a"].use(f["a"]);var Q=new f["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Home",component:z},{path:"/projects",name:"Projects",component:B},{path:"/talents",name:"Talents",component:L},{path:"/aboutme",name:"AboutMe",component:G}]}),V=a("ecee"),Z=a("ad3d"),K=a("b702"),W=a("f2d1");V["c"].add(W["a"],W["c"],W["b"],K["a"]),e["a"].component("fa-icon",Z["a"]),e["a"].config.productionTip=!1,new e["a"]({router:Q,render:t=>t(l)}).$mount("#app")},5850:function(t,i,a){t.exports=a.p+"img/NapoleonBonaparte.48661e4f.png"},"622e":function(t,i,a){t.exports=a.p+"img/basketball-texture.138751cd.png"},"63e4":function(t,i,a){t.exports=a.p+"img/MahmoudElesseily.7e9f50f5.png"},"682c":function(t,i,a){},"73a4":function(t,i,a){t.exports=a.p+"img/Stromae.6a379153.png"},9323:function(t,i,a){},"93d4":function(t,i,a){t.exports=a.p+"img/PersonalPhoto.deec04c9.png"},9789:function(t,i,a){},"9c6e":function(t,i,a){"use strict";a("e137")},"9c83":function(t,i,a){"use strict";a("9789")},af00:function(t,i,a){t.exports=a.p+"img/DmitriShostakovich.47215e7d.png"},b29e:function(t,i,a){t.exports=a.p+"img/LeonardoDaVinci.807b68bb.png"},b31f:function(t,i,a){t.exports=a.p+"img/PabloPicasso.a7ef60cf.png"},b6bb:function(t,i,a){},ba35:function(t,i,a){t.exports=a.p+"img/TupacShakur(2Pac).cf00ce31.png"},c92a:function(t,i,a){t.exports=a.p+"img/BahaaSultan.0872da78.png"},cc02:function(t,i,a){t.exports=a.p+"img/LionelMessi.ea33136c.png"},e137:function(t,i,a){},f583:function(t,i,a){t.exports=a.p+"img/MahmoudAbdelaziz.fff1d56c.png"},f97c:function(t,i,a){"use strict";a("682c")},fa16:function(t,i,a){t.exports=a.p+"img/QueenNefertiti.ae1fe613.png"}});
//# sourceMappingURL=app.d2a26234.js.map