(this["webpackJsonpevaluacion-intermedia-bis"]=this["webpackJsonpevaluacion-intermedia-bis"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(2),o=n.n(a),i=(n(10),n(4)),m=(n(11),function(e){console.log(e);var t=e.types.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("div",{className:"pokemonCard"},r.a.createElement("div",{className:"pokemon-image"},r.a.createElement("img",{src:e.image,alt:e.name})),r.a.createElement("div",{className:"pokemon-name"},r.a.createElement("h2",null,e.name)),r.a.createElement("div",null,r.a.createElement("ul",{className:"type"},t)))}),p=function(e){var t=e.pokemons.map((function(e,t){return r.a.createElement("li",{className:"pokemon",key:t},r.a.createElement(m,{name:e.name,image:e.url,types:e.types}))}));return r.a.createElement("ul",{className:"pokemonList"},t)},u=n(3),l=function(){var e=Object(s.useState)(u),t=Object(i.a)(e,2),n=t[0];t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Mi lista de Pokemon"),r.a.createElement(p,{pokemons:n}))};o.a.render(r.a.createElement(l,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.dfcf450c.chunk.js.map