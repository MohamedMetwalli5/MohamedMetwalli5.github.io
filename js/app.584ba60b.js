(function(t){function a(a){for(var e,n,o=a[0],c=a[1],l=a[2],p=0,u=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);f&&f(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,a=0;a<r.length;a++){for(var i=r[a],e=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(e=!1)}e&&(r.splice(a--,1),t=n(n.s=i[0]))}return t}var e={},s={app:0},r=[];function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,a,i){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(i,e,function(a){return t[a]}.bind(null,e));return i},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var f=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"01dd":function(t,a,i){t.exports=i.p+"img/Hashnode-icon.f1088aa7.png"},"06b7":function(t,a,i){t.exports=i.p+"img/SnoopDogg.2c69c74f.png"},"098e":function(t,a,i){t.exports=i.p+"img/IsaacNewton.17d43205.png"},"0da8":function(t,a,i){t.exports=i.p+"img/BrunoMars.e065b9bf.png"},"2ce5":function(t,a,i){},3933:function(t,a,i){t.exports=i.p+"img/Shahin.d838abbf.png"},"3f1e":function(t,a,i){t.exports=i.p+"img/Mozart.9b5d3ea0.png"},"43bd":function(t,a,i){t.exports=i.p+"img/AzizMaraka.b50f3fb6.png"},"43fa":function(t,a,i){t.exports=i.p+"img/KoreanGuy.46b7cfd6.png"},"4a9c":function(t,a,i){t.exports=i.p+"img/CristianoRonaldo.a16cb3df.png"},"4af2":function(t,a,i){t.exports=i.p+"img/Loki.9d502965.png"},"552e":function(t,a,i){t.exports=i.p+"img/Drake.4d1739ce.png"},"56d7":function(t,a,i){"use strict";i.r(a);var e=i("2b0e"),s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n=(i("9c6e"),i("2877")),o={},c=Object(n["a"])(o,s,r,!1,null,null,null),l=c.exports,f=i("8c4f"),p=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"directors"}},[a("button",{staticClass:"category",attrs:{type:"button",id:"Projects",onclick:"window.location.href='#/projects';"}},[t._v("\n    Projects\n  ")]),a("button",{staticClass:"category",attrs:{type:"button",id:"AboutMe",onclick:"window.location.href='#/aboutme';"}},[t._v("\n    About me\n  ")]),a("button",{staticClass:"category",attrs:{type:"button",id:"Talents",onclick:"window.location.href='#/talents';"}},[t._v("\n    Talents\n  ")])])}],d={name:"Home",props:{msg:String}},g=d,h=(i("7fac"),Object(n["a"])(g,p,u,!1,null,"3ccd95fa",null)),m=h.exports,v=function(){var t=this,a=t._self._c;return a("div",[a("nav",{attrs:{id:"cover-wrapper"}},[t._m(0),a("p1",{staticStyle:{"margin-top":"5rem",color:"rgb(0, 255, 51)","font-size":"3vw","font-weight":"bold","line-height":"0rem","font-family":"'Chakra Petch', sans-serif"},attrs:{id:"blink-text"}},[t._v("Scroll Down")])],1),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])},_=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"typewriter"},[a("h1",[t._v("Projects")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("QuizAtshi "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/QuizAtshi';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User is asked about the countries flags.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can choose the number of questions and their difficulty level.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• For every right answer, the user is given a point and is shown the correct answer. User grade is shown after answering all questions.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can switch to Dark Mode")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Zarka "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Zarka';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v('• Implementation of a Key-Value store that is inspired by Cassandra\'s architecture to be named "Zarka".')]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• LSM-Tree needs is used as our storage data structure.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Consistent Hashing is used as our partition rebalancing strategy (Only adding a new node should be supported).")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Leaderless replication is used with configurable quorum sizes.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Bookstore "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Bookstore';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can edit his personal information including his password.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can search for books by any of the book's attributes.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can add books to a shopping cart & checkout a shopping cart.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can View the items in the cart, total prices of the books in the cart, and Removing items from the cart.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Paint "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Paint';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can draw multiple shapes with different colors.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can change the shape color, position, and size.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can replicate shapes using the ”copy” operation.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• User can use the ”undo” or the ”redo” operation to undo or redo any action.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("GoTyper "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/GoTyper';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It is a terminal-based typing game that can be played solo or with a friend on the same local network.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It utilizes socket programming for multiplayer functionality.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It contains 1000 of the most commonly used English words, as well as numbers and special characters.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"project-section"},[a("p",{staticClass:"first-paragraph"},[t._v("Music Blender "),a("i",{staticClass:"fa fa-github",staticStyle:{"font-size":"3vw",color:"rgb(255, 255, 255)",cursor:"pointer"},attrs:{onclick:"window.location.href = 'https://github.com/MohamedMetwalli5/Music-Blender';"}})]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• It is a game in which each player can mix more than 60 different tones to produce new music.")]),a("p",{staticStyle:{"font-size":"2vw"}},[t._v("• Used visual effects to show the tunes.")])])},function(){var t=this,a=t._self._c;return a("nav",{attrs:{id:"last-text-wrapper"}},[a("div",{staticClass:"typewriter"},[a("h2",[t._v("And there are many more ones on my GitHub account..")])])])}],b={name:"Projects",props:{msg:String}},w=b,y=(i("f97c"),Object(n["a"])(w,v,_,!1,null,"3db6e9af",null)),k=y.exports,S=function(){var t=this;t._self._c;return t._m(0)},C=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"gallery-container"}},[a("div",{attrs:{id:"gallery"}},[a("figure",[a("img",{attrs:{src:i("43bd"),alt:"Aziz Maraka"}}),a("figcaption",[t._v("Aziz Maraka🎤")])]),a("figure",[a("img",{attrs:{src:i("098e"),alt:"Isaac Newton"}}),a("figcaption",[t._v("Isaac Newton🍎")])]),a("figure",[a("img",{attrs:{src:i("f583"),alt:"Mahmoud Abdelaziz"}}),a("figcaption",[t._v("Mahmoud Abdelaziz🎬")])]),a("figure",[a("img",{attrs:{src:i("c92a"),alt:"Bahaa Sultan"}}),a("figcaption",[t._v("Bahaa Sultan🎤")])]),a("figure",[a("img",{attrs:{src:i("af00"),alt:"Dmitri Shostakovich"}}),a("figcaption",[t._v("Dmitri Shostakovich🎼")])]),a("figure",[a("img",{attrs:{src:i("552e"),alt:"Drake"}}),a("figcaption",[t._v("Drake🎤")])]),a("figure",[a("img",{attrs:{src:i("b29e"),alt:"Leonardo da Vinci"}}),a("figcaption",[t._v("Leonardo da Vinci🎨")])]),a("figure",[a("img",{attrs:{src:i("fa16"),alt:"Queen Nefertiti"}}),a("figcaption",[t._v("Queen Nefertiti👑")])]),a("figure",[a("img",{attrs:{src:i("5850"),alt:"Napoleon Bonaparte"}}),a("figcaption",[t._v("Napoleon Bonaparte")])]),a("figure",[a("img",{attrs:{src:i("63e4"),alt:"Mahmoud Elesseily"}}),a("figcaption",[t._v("Mahmoud Elesseily🎤")])]),a("figure",[a("img",{attrs:{src:i("0da8"),alt:"Bruno Mars"}}),a("figcaption",[t._v("Bruno Mars🎤")])]),a("figure",[a("img",{attrs:{src:i("43fa"),alt:"Korean Guy"}}),a("figcaption",[t._v("Korean Guy")])]),a("figure",[a("img",{attrs:{src:i("4a9c"),alt:"Cristiano Ronaldo"}}),a("figcaption",[t._v("Cristiano Ronaldo⚽️")])]),a("figure",[a("img",{attrs:{src:i("cc02"),alt:"Lionel Messi"}}),a("figcaption",[t._v("Lionel Messi⚽️")])]),a("figure",[a("img",{attrs:{src:i("4af2"),alt:"Loki"}}),a("figcaption",[t._v("Loki🎬")])]),a("figure",[a("img",{attrs:{src:i("3f1e"),alt:"Mozart"}}),a("figcaption",[t._v("Mozart🎼")])]),a("figure",[a("img",{attrs:{src:i("b31f"),alt:"Pablo Picasso"}}),a("figcaption",[t._v("Pablo Picasso🎨")])]),a("figure",[a("img",{attrs:{src:i("3933"),alt:"Shahin"}}),a("figcaption",[t._v("Shahin🎤")])]),a("figure",[a("img",{attrs:{src:i("06b7"),alt:"Snoop Dogg"}}),a("figcaption",[t._v("Snoop Dogg🎤")])]),a("figure",[a("img",{attrs:{src:i("73a4"),alt:"Stromae"}}),a("figcaption",[t._v("Stromae🎤")])]),a("figure",[a("img",{attrs:{src:i("ba35"),alt:"Tupac Shakur (2Pac)"}}),a("figcaption",[t._v("Tupac Shakur (2Pac)🎤")])])])])}],z={name:"Talents",props:{msg:String}},M=z,x=(i("9c83"),Object(n["a"])(M,S,C,!1,null,"10236e2a",null)),j=x.exports,P=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[t._m(0),a("div",{attrs:{id:"bottom-container"}},[a("div",{attrs:{id:"social-media"}},[a("a",{attrs:{href:"https://www.linkedin.com/in/mohamed-metwalli5/",target:"_blank"}},[a("fa-icon",{attrs:{icon:["fab","linkedin"],id:"linkedin"}})],1),a("a",{attrs:{href:"https://github.com/MohamedMetwalli5",target:"_blank"}},[a("fa-icon",{attrs:{icon:["fab","github-square"],id:"github"}})],1),t._m(1)]),a("div",{staticClass:"sub-container"},[t._m(2),t._m(3),a("div",{staticClass:"flip-card",attrs:{id:"contact-me-card"},on:{click:t.contactme}},[t._m(4)]),t._m(5),a("div",{ref:"emailCard",staticClass:"flip-card",attrs:{id:"email-card"}},[t._m(6)])])])])},O=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"brief"}},[a("img",{attrs:{id:"image",src:i("93d4"),alt:"failed to load."}}),a("div",{attrs:{id:"textWrapper"}},[a("div",{attrs:{id:"text"}},[t._v("Hello, I'm Mohamed, Software Engineer.💻")])])])},function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"https://metwalli.hashnode.dev/",target:"_blank"}},[a("img",{attrs:{src:i("01dd"),alt:"Hashnode Blog Icon",id:"hashnode"}})])},function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"last-text-wrapper"}},[a("h1",{staticClass:"typewriter"},[t._v("Pick a card!")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card",attrs:{onclick:"window.open('https://drive.google.com/file/d/1R3jhPzZlSeEnZif82yHd9AWeDw2hquqM/view?usp=sharing')"}},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/other/spades_ace_simple.svg",alt:"Download Resume"}})]),a("div",{staticClass:"flip-card-back"},[a("h1",[t._v("Download Resume📄")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_8.svg",alt:"Contact me"}})]),a("div",{staticClass:"flip-card-back"},[a("h1",[t._v("Contact me📧")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card",attrs:{onclick:"window.location.href='#/projects';"}},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/hearts_jack.svg",alt:"Projects"}})]),a("div",{staticClass:"flip-card-back"},[a("h1",[t._v("Projects💻")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front"},[a("img",{staticStyle:{height:"100%"},attrs:{src:"https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_5.svg",alt:"Contact me"}})]),a("div",{staticClass:"flip-card-back"},[a("p",{staticStyle:{"align-items":"center","font-size":"1.5em"}},[a("i",{staticClass:"fa fa-envelope",staticStyle:{color:"rgb(255, 255, 255)"},attrs:{"aria-hidden":"true"}}),t._v(" mohamedmetwalli5@gmail.com")])])])}],D={name:"Talents",props:{msg:String},data(){return{isHovered:!1}},methods:{contactme(){alert("Click on card number 5!")}}},B=D,T=(i("b563"),Object(n["a"])(B,P,O,!1,null,"754c9beb",null)),A=T.exports;e["a"].use(f["a"]);var U=new f["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"Home",component:m},{path:"/projects",name:"Projects",component:k},{path:"/talents",name:"Talents",component:j},{path:"/aboutme",name:"AboutMe",component:A}]}),L=i("ecee"),I=i("ad3d"),H=i("b702"),N=i("f2d1");L["c"].add(N["a"],N["c"],N["b"],H["a"]),e["a"].component("fa-icon",I["a"]),e["a"].config.productionTip=!1,new e["a"]({router:U,render:t=>t(l)}).$mount("#app")},5850:function(t,a,i){t.exports=i.p+"img/NapoleonBonaparte.48661e4f.png"},"63e4":function(t,a,i){t.exports=i.p+"img/MahmoudElesseily.7e9f50f5.png"},"682c":function(t,a,i){},"73a4":function(t,a,i){t.exports=i.p+"img/Stromae.6a379153.png"},"7fac":function(t,a,i){"use strict";i("2ce5")},"93d4":function(t,a,i){t.exports=i.p+"img/PersonalPhoto.deec04c9.png"},9789:function(t,a,i){},"9c6e":function(t,a,i){"use strict";i("e137")},"9c83":function(t,a,i){"use strict";i("9789")},af00:function(t,a,i){t.exports=i.p+"img/DmitriShostakovich.47215e7d.png"},b29e:function(t,a,i){t.exports=i.p+"img/LeonardoDaVinci.807b68bb.png"},b31f:function(t,a,i){t.exports=i.p+"img/PabloPicasso.a7ef60cf.png"},b563:function(t,a,i){"use strict";i("f52f")},ba35:function(t,a,i){t.exports=i.p+"img/TupacShakur(2Pac).cf00ce31.png"},c92a:function(t,a,i){t.exports=i.p+"img/BahaaSultan.0872da78.png"},cc02:function(t,a,i){t.exports=i.p+"img/LionelMessi.ea33136c.png"},e137:function(t,a,i){},f52f:function(t,a,i){},f583:function(t,a,i){t.exports=i.p+"img/MahmoudAbdelaziz.fff1d56c.png"},f97c:function(t,a,i){"use strict";i("682c")},fa16:function(t,a,i){t.exports=i.p+"img/QueenNefertiti.ae1fe613.png"}});
//# sourceMappingURL=app.584ba60b.js.map