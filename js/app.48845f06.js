(function(t){function a(a){for(var e,r,o=a[0],c=a[1],l=a[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);f&&f(a);while(u.length)u.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,a=0;a<n.length;a++){for(var i=n[a],e=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=i[0]))}return t}var e={},s={app:0},n=[];function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,a,i){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(i,e,function(a){return t[a]}.bind(null,e));return i},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var f=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"01dd":function(t,a,i){t.exports=i.p+"img/Hashnode-icon.f1088aa7.png"},"06b7":function(t,a,i){t.exports=i.p+"img/SnoopDogg.2c69c74f.png"},"098e":function(t,a,i){t.exports=i.p+"img/IsaacNewton.17d43205.png"},"0da8":function(t,a,i){t.exports=i.p+"img/BrunoMars.e065b9bf.png"},"1d1d":function(t,a,i){"use strict";i("3635")},3558:function(t,a,i){"use strict";i("6cae")},3635:function(t,a,i){},3933:function(t,a,i){t.exports=i.p+"img/Shahin.d838abbf.png"},"3f1e":function(t,a,i){t.exports=i.p+"img/Mozart.9b5d3ea0.png"},"43bd":function(t,a,i){t.exports=i.p+"img/AzizMaraka.b50f3fb6.png"},"43fa":function(t,a,i){t.exports=i.p+"img/KoreanGuy.46b7cfd6.png"},"4a9c":function(t,a,i){t.exports=i.p+"img/CristianoRonaldo.a16cb3df.png"},"4af2":function(t,a,i){t.exports=i.p+"img/Loki.9d502965.png"},"552e":function(t,a,i){t.exports=i.p+"img/Drake.4d1739ce.png"},"56d7":function(t,a,i){"use strict";i.r(a);var e=i("2b0e"),s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r=(i("9c6e"),i("2877")),o={},c=Object(r["a"])(o,s,n,!1,null,null,null),l=c.exports,f=i("8c4f"),p=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"home-container"}},[a("Ball")],1)},u=[],d=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{ref:"container",staticClass:"ball-container"}),a("div",{attrs:{id:"main-title",title:"𝓗𝓮𝓵𝓵𝓸 𝓣𝓱𝓮𝓻𝓮!💻"}},[t._v("𝓗𝓮𝓵𝓵𝓸 𝓣𝓱𝓮𝓻𝓮!💻")]),t._m(0)])},g=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"options"},[a("button",{staticClass:"button",attrs:{role:"button",onclick:"window.location.href='#/projects';"}},[t._v("𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬")]),a("button",{staticClass:"button",attrs:{role:"button",onclick:"window.location.href='#/aboutme';"}},[t._v("𝐀𝐛𝐨𝐮𝐭 𝐦𝐞")]),a("button",{staticClass:"button",attrs:{role:"button",onclick:"window.location.href='#/talents';"}},[t._v("𝐓𝐚𝐥𝐞𝐧𝐭𝐬")])])}],h=i("5a89"),m=i("622e"),v=i.n(m),_={name:"Ball",mounted(){this.scene=new h["f"],this.camera=new h["e"](75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new h["i"],this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs.container.appendChild(this.renderer.domElement);const t=new h["h"],a=t.load(v.a),i=new h["d"]({map:a,color:14449713}),e=new h["g"](1,20,20);this.ball=new h["c"](e,i),this.scene.add(this.ball);const s=new h["a"](16777215,.5);this.scene.add(s);const n=new h["b"](16777215,.7);n.position.set(1,1,1).normalize(),this.scene.add(n);const r=()=>{requestAnimationFrame(r),this.ball.rotation.x+=.02,this.ball.rotation.y+=.02,this.renderer.render(this.scene,this.camera)};r()},beforeDestroy(){this.renderer.dispose(),this.scene.dispose()}},b=_,w=(i("3558"),Object(r["a"])(b,d,g,!1,null,"a5566e06",null)),y=w.exports,k={name:"Home",components:{Ball:y},props:{msg:String}},S=k,C=(i("6825"),Object(r["a"])(S,p,u,!1,null,"8eace18e",null)),z=C.exports,x=function(){var t=this,a=t._self._c;return a("div",[a("nav",{attrs:{id:"cover-wrapper"}},[t._m(0),a("p1",{staticStyle:{"margin-top":"5rem",color:"rgb(0, 255, 51)","font-size":"3vw","font-weight":"bold","line-height":"0rem","font-family":"'Chakra Petch', sans-serif"},attrs:{id:"blink-text"}},[t._v("Scroll Down")])],1),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])},M=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"typewriter"},[a("h1",[t._v("Projects")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("QuizAtshi "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/QuizAtshi';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User is asked about the countries flags.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can choose the number of questions and their difficulty level.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• For every right answer, the user is given a point and is shown the correct answer. User grade is shown after answering all questions.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can switch to Dark Mode")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Zarka "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Zarka';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v('• Implementation of a Key-Value store that is inspired by Cassandra\'s architecture to be named "Zarka".')]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• LSM-Tree needs is used as our storage data structure.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Consistent Hashing is used as our partition rebalancing strategy (Only adding a new node should be supported).")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Leaderless replication is used with configurable quorum sizes.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Bookstore "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Bookstore';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can edit his personal information including his password.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can search for books by any of the book's attributes.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can add books to a shopping cart & checkout a shopping cart.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can View the items in the cart, total prices of the books in the cart, and Removing items from the cart.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Paint "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Paint';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can draw multiple shapes with different colors.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can change the shape color, position, and size.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can replicate shapes using the ”copy” operation.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can use the ”undo” or the ”redo” operation to undo or redo any action.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("GoTyper "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/GoTyper';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It is a terminal-based typing game that can be played solo or with a friend on the same local network.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It utilizes socket programming for multiplayer functionality.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It contains 1000 of the most commonly used English words, as well as numbers and special characters.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Music Blender "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Music-Blender';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It is a game in which each player can mix more than 60 different tones to produce new music.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Used visual effects to show the tunes.")])])},function(){var t=this,a=t._self._c;return a("nav",{attrs:{id:"last-text-wrapper"}},[a("div",{staticClass:"typewriter"},[a("h2",[t._v("And there are many more ones on my GitHub account..")])])])}],j={name:"Projects",props:{msg:String}},P=j,O=(i("f97c"),Object(r["a"])(P,x,M,!1,null,"3db6e9af",null)),B=O.exports,D=function(){var t=this;t._self._c;return t._m(0)},U=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"gallery-container"}},[a("div",{attrs:{id:"gallery"}},[a("figure",[a("img",{attrs:{src:i("43bd"),alt:"Aziz Maraka"}}),a("figcaption",[t._v("Aziz Maraka🎤")])]),a("figure",[a("img",{attrs:{src:i("098e"),alt:"Isaac Newton"}}),a("figcaption",[t._v("Isaac Newton🍎")])]),a("figure",[a("img",{attrs:{src:i("f583"),alt:"Mahmoud Abdelaziz"}}),a("figcaption",[t._v("Mahmoud Abdelaziz🎬")])]),a("figure",[a("img",{attrs:{src:i("c92a"),alt:"Bahaa Sultan"}}),a("figcaption",[t._v("Bahaa Sultan🎤")])]),a("figure",[a("img",{attrs:{src:i("af00"),alt:"Dmitri Shostakovich"}}),a("figcaption",[t._v("Dmitri Shostakovich🎼")])]),a("figure",[a("img",{attrs:{src:i("552e"),alt:"Drake"}}),a("figcaption",[t._v("Drake🎤")])]),a("figure",[a("img",{attrs:{src:i("b29e"),alt:"Leonardo da Vinci"}}),a("figcaption",[t._v("Leonardo da Vinci🎨")])]),a("figure",[a("img",{attrs:{src:i("fa16"),alt:"Queen Nefertiti"}}),a("figcaption",[t._v("Queen Nefertiti👑")])]),a("figure",[a("img",{attrs:{src:i("5850"),alt:"Napoleon Bonaparte"}}),a("figcaption",[t._v("Napoleon Bonaparte")])]),a("figure",[a("img",{attrs:{src:i("63e4"),alt:"Mahmoud Elesseily"}}),a("figcaption",[t._v("Mahmoud Elesseily🎤")])]),a("figure",[a("img",{attrs:{src:i("0da8"),alt:"Bruno Mars"}}),a("figcaption",[t._v("Bruno Mars🎤")])]),a("figure",[a("img",{attrs:{src:i("43fa"),alt:"Korean Guy"}}),a("figcaption",[t._v("Korean Guy")])]),a("figure",[a("img",{attrs:{src:i("4a9c"),alt:"Cristiano Ronaldo"}}),a("figcaption",[t._v("Cristiano Ronaldo⚽️")])]),a("figure",[a("img",{attrs:{src:i("cc02"),alt:"Lionel Messi"}}),a("figcaption",[t._v("Lionel Messi⚽️")])]),a("figure",[a("img",{attrs:{src:i("4af2"),alt:"Loki"}}),a("figcaption",[t._v("Loki🎬")])]),a("figure",[a("img",{attrs:{src:i("3f1e"),alt:"Mozart"}}),a("figcaption",[t._v("Mozart🎼")])]),a("figure",[a("img",{attrs:{src:i("b31f"),alt:"Pablo Picasso"}}),a("figcaption",[t._v("Pablo Picasso🎨")])]),a("figure",[a("img",{attrs:{src:i("3933"),alt:"Shahin"}}),a("figcaption",[t._v("Shahin🎤")])]),a("figure",[a("img",{attrs:{src:i("06b7"),alt:"Snoop Dogg"}}),a("figcaption",[t._v("Snoop Dogg🎤")])]),a("figure",[a("img",{attrs:{src:i("73a4"),alt:"Stromae"}}),a("figcaption",[t._v("Stromae🎤")])]),a("figure",[a("img",{attrs:{src:i("ba35"),alt:"Tupac Shakur (2Pac)"}}),a("figcaption",[t._v("Tupac Shakur (2Pac)🎤")])])])])}],A={name:"Talents",props:{msg:String}},T=A,H=(i("9c83"),Object(r["a"])(T,D,U,!1,null,"10236e2a",null)),L=H.exports,I=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[t._m(0),a("div",{attrs:{id:"bottom-container"}},[a("div",{attrs:{id:"social-media"}},[a("a",{attrs:{href:"https://www.linkedin.com/in/mohamed-metwalli5/",target:"_blank"}},[a("fa-icon",{attrs:{icon:["fab","linkedin"],id:"linkedin"}})],1),a("a",{attrs:{href:"https://github.com/MohamedMetwalli5",target:"_blank"}},[a("fa-icon",{attrs:{icon:["fab","github-square"],id:"github"}})],1),t._m(1)]),a("div",{staticClass:"sub-container"},[t._m(2),t._m(3),a("div",{staticClass:"flip-card",attrs:{id:"contact-me-card"},on:{click:t.contactme}},[t._m(4)]),t._m(5),a("div",{ref:"emailCard",staticClass:"flip-card",attrs:{id:"email-card"}},[t._m(6)])])])])},N=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"brief"}},[a("img",{attrs:{id:"image",src:i("93d4"),alt:"failed to load."}}),a("div",{attrs:{id:"textWrapper"}},[a("div",{attrs:{id:"text"}},[t._v("Hello, I'm Mohamed, Software Engineer.💻")])])])},function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"https://metwalli.hashnode.dev/",target:"_blank"}},[a("img",{attrs:{src:i("01dd"),alt:"Hashnode Blog Icon",id:"hashnode"}})])},function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"last-text-wrapper"}},[a("h1",{staticClass:"typewriter"},[t._v("Pick a card!")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card",attrs:{onclick:"window.open('https://drive.google.com/file/d/1R3jhPzZlSeEnZif82yHd9AWeDw2hquqM/view?usp=sharing')"}},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/other/spades_ace_simple.svg",alt:"Download Resume"}})]),a("div",{staticClass:"flip-card-back"},[a("h1",[t._v("Download Resume📄")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_8.svg",alt:"Contact me"}})]),a("div",{staticClass:"flip-card-back"},[a("h1",[t._v("Contact me📧")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card",attrs:{onclick:"window.location.href='#/projects';"}},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_jack.svg",alt:"Projects"}})]),a("div",{staticClass:"flip-card-back"},[a("h1",[t._v("Projects💻")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_5.svg",alt:"Contact me"}})]),a("div",{staticClass:"flip-card-back"},[a("p",{staticStyle:{"align-items":"center","font-size":"1.5em"}},[a("i",{staticClass:"fa fa-envelope",staticStyle:{color:"rgb(255, 255, 255)"},attrs:{"aria-hidden":"true"}}),t._v(" mohamedmetwalli5@gmail.com")])])])}],q={name:"Talents",props:{msg:String},data(){return{isHovered:!1}},methods:{contactme(){alert("Click on card number 5!")}}},E=q,R=(i("1d1d"),Object(r["a"])(E,I,N,!1,null,"31220b30",null)),G=R.exports;e["a"].use(f["a"]);var Q=new f["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Home",component:z},{path:"/projects",name:"Projects",component:B},{path:"/talents",name:"Talents",component:L},{path:"/aboutme",name:"AboutMe",component:G}]}),V=i("ecee"),Z=i("ad3d"),K=i("b702"),W=i("f2d1");V["c"].add(W["a"],W["c"],W["b"],K["a"]),e["a"].component("fa-icon",Z["a"]),e["a"].config.productionTip=!1,new e["a"]({router:Q,render:t=>t(l)}).$mount("#app")},5850:function(t,a,i){t.exports=i.p+"img/NapoleonBonaparte.48661e4f.png"},"622e":function(t,a,i){t.exports=i.p+"img/basketball-texture.138751cd.png"},"63e4":function(t,a,i){t.exports=i.p+"img/MahmoudElesseily.7e9f50f5.png"},6825:function(t,a,i){"use strict";i("6fe4")},"682c":function(t,a,i){},"6cae":function(t,a,i){},"6fe4":function(t,a,i){},"73a4":function(t,a,i){t.exports=i.p+"img/Stromae.6a379153.png"},"93d4":function(t,a,i){t.exports=i.p+"img/PersonalPhoto.deec04c9.png"},9789:function(t,a,i){},"9c6e":function(t,a,i){"use strict";i("e137")},"9c83":function(t,a,i){"use strict";i("9789")},af00:function(t,a,i){t.exports=i.p+"img/DmitriShostakovich.47215e7d.png"},b29e:function(t,a,i){t.exports=i.p+"img/LeonardoDaVinci.807b68bb.png"},b31f:function(t,a,i){t.exports=i.p+"img/PabloPicasso.a7ef60cf.png"},ba35:function(t,a,i){t.exports=i.p+"img/TupacShakur(2Pac).cf00ce31.png"},c92a:function(t,a,i){t.exports=i.p+"img/BahaaSultan.0872da78.png"},cc02:function(t,a,i){t.exports=i.p+"img/LionelMessi.ea33136c.png"},e137:function(t,a,i){},f583:function(t,a,i){t.exports=i.p+"img/MahmoudAbdelaziz.fff1d56c.png"},f97c:function(t,a,i){"use strict";i("682c")},fa16:function(t,a,i){t.exports=i.p+"img/QueenNefertiti.ae1fe613.png"}});
//# sourceMappingURL=app.48845f06.js.map