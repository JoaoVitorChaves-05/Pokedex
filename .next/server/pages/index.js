"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/index.js


async function getStaticProps(context) {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2/").then((response)=>{
        if (response.ok) {
            return response.json();
        }
    }).then((response)=>{
        console.log(response);
        return response.pokemon_entries;
    });
    return {
        props: {
            pokemons
        }
    };
}
function Home(props) {
    const { pokemons  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        children: [
            "Pokedex - JoaoVitorChaves-05",
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("ul", {
                children: pokemons.map((pokemon)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                        children: pokemon.pokemon_species.name
                    }, pokemon.entry_number))
            })
        ]
    });
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(902));
module.exports = __webpack_exports__;

})();