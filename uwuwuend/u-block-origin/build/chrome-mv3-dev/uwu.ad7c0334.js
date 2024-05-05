(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dfjee":[function(require,module,exports) {
var p = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var y = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var H = new Set(p), _ = (e)=>H.has(e), X = p.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var G = _("--dry-run"), d = ()=>_("--verbose") || y().VERBOSE === "true", Z = d();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), D = 0, c = (...e)=>d() && u(`\u{1F7E1} ${D++}`, ...e);
var s = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/jamesliang/PycharmProjects/McHacks/uwuwuend/u-block-origin/contents/uwu.ts",
    "bundleId": "59e32ca0ad7c0334",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 53303
};
module.bundle.HMR_BUNDLE_ID = s.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: s.verbose
    }
};
var S = module.bundle.Module;
function I(e) {
    S.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !s.host || s.host === "0.0.0.0" ? "localhost" : s.host;
}
function C() {
    return s.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${s.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let i of r.diagnostics.ansi){
            let w = i.codeframe || i.stack;
            m("[plasmo/parcel-runtime]: " + i.message + `
` + w + `

` + i.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${s.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${s.entryFilePath}`);
    }), t;
}
var n = "__plasmo-loading__", T = typeof trustedTypes < "u" ? trustedTypes.createPolicy(`trusted-html-${n}`, {
    createHTML: (e)=>e
}) : void 0;
function g() {
    return document.getElementById(n);
}
function f() {
    return !g();
}
function $() {
    let e = document.createElement("div");
    e.id = n;
    let t = `
  <style>
    #${n} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${n}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${n} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${n} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${n} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${n} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function F(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = $();
        e = F(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var N = `${E}${module.id}__`, a, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    a?.disconnect(), a = l?.runtime.connect({
        name: N
    }), a.onDisconnect.addListener(()=>{
        h();
    }), a.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function W() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
W();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === s.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? a.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"1xe9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _uwuify = require("uwuify");
var _uwuifyDefault = parcelHelpers.interopDefault(_uwuify);
const config = {
    matches: [
        "*://*/*"
    ]
};
// https://medium.com/@ConnorFinnegan/how-to-make-a-simple-text-replacement-chrome-extension-3e7aa9fa301f
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
async function replaceText() {
    const images = document.querySelectorAll("img");
    let image_list = [];
    await fetch("https://api.memegen.link/templates/").then((res)=>res.json()).then((json)=>{
        image_list = json;
    });
    images.forEach((img)=>{
        const newSrc = image_list[getRandomInt(image_list.length)].blank;
        img.src = newSrc;
        try {
            img.srcset = newSrc;
        } catch (error) {}
    });
    const text = document.querySelectorAll("h1, h2, h3, h4, h5, p ,caption, span, a");
    for(let i = 0; i < text.length; i++){
        if (text[i].innerHTML.includes("img")) continue;
        else if (text[i].innerHTML.includes("href")) {
            let children = text[i].childNodes;
            for(let j = 0; j < children.length; j++){
                let node_value = children[j].nodeValue;
                if (node_value != null && !node_value.includes("http")) try {
                    const uwuify = new (0, _uwuifyDefault.default)();
                    console.log(uwuify.uwuify(node_value));
                    text[i].childNodes[j].nodeValue = uwuify.uwuify(node_value);
                } catch (error) {
                    console.error(error);
                }
            }
            continue;
        }
        let element = text[i].innerText;
        try {
            const uwuify = new (0, _uwuifyDefault.default)();
            console.log(uwuify.uwuify(element));
            element = `${uwuify.uwuify(element).replaceAll("bulge", " ").replaceAll("twerk", " ")}`;
            text[i].innerText = element;
        } catch (error) {
            console.error(error);
        }
    }
}
window.addEventListener("load", replaceText); // window.addEventListener("load", () => {
 //     document.body.style.background = "pink"
 // })

},{"uwuify":"hOihk","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"hOihk":[function(require,module,exports) {
"use strict";
// uwuify
// By BadBoyHaloCat
// 
// Copyright (C) 2020  Logan Devine
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
// Import Uwuifier
var uwuifier_1 = require("4bee678b0b04460e");
// Due to the way uwuify is built, we use
// a class called "uwuifier" to store the
// main infrastructure.
var uwuifier = /** @class */ function() {
    // Now we have the main constructor used for
    // the actual creation
    function uwuifier() {
        // Create the uwuifier
        this._uwuifier = new uwuifier_1.Uwuifier();
        // INSERTIONS
        // Uwuifier has built in items that we want to
        // modify.
        // Place our actions into this uwuifier instance
        this._uwuifier.actions = [
            "*blushes*",
            "*cries*",
            "*screams*",
            "*sweats*",
            "*sees bulge*",
            "*thinks about your bulge*",
            "*runs away*",
            "*hugs*",
            "*huggles tightly*",
            "*boops your nose*",
            "*twerks*",
            "*starts twerking*",
            "*screams*",
            "*walks away*",
            "*looks at you*",
            "*cries*",
            "*screeches*",
            "*pounces on you*",
            "*eats*",
            "*boops self*"
        ];
        // Place in our faces instead of the Uwuifier ones
        this._uwuifier.faces = [
            ":3",
            "x3",
            "owo",
            "OwO",
            "uwu",
            "UwU",
            "^-^",
            "^_^"
        ];
        // Custom exclamations too!
        this._uwuifier.exclamations = [
            "!",
            "!?",
            "?!",
            "!??",
            "??!",
            "?!?",
            "!?!?!?!??!?",
            "??!!",
            "!11!!"
        ];
    }
    uwuifier.prototype.uwuify = function(text) {
        return this._uwuifier.uwuifySentence(text);
    };
    return uwuifier;
}();
module.exports = uwuifier;

},{"4bee678b0b04460e":"cJPsd"}],"cJPsd":[function(require,module,exports) {
"use strict";
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Uwuifier = void 0;
var utils_1 = require("aeb4f7dd945479e1");
var seed_1 = require("416592421e76745c");
var Uwuifier = /** @class */ function() {
    function Uwuifier(_a) {
        var _b = _a === void 0 ? {
            spaces: {
                faces: 0.05,
                actions: 0.075,
                stutters: 0.1
            },
            words: 0.7,
            exclamations: 1
        } : _a, _c = _b.spaces, spaces = _c === void 0 ? {
            faces: 0.05,
            actions: 0.075,
            stutters: 0.1
        } : _c, _d = _b.words, words = _d === void 0 ? 1 : _d, _e = _b.exclamations, exclamations = _e === void 0 ? 1 : _e;
        this.faces = [
            "(\u30fb`\u03c9\xb4\u30fb)",
            ";;w;;",
            "OwO",
            "UwU",
            ">w<",
            "^w^",
            "\xdaw\xda",
            "^-^",
            ":3",
            "x3"
        ];
        this.exclamations = [
            "!?",
            "?!!",
            "?!?1",
            "!!11",
            "?!?!"
        ];
        this.actions = [
            "*blushes*",
            "*whispers to self*",
            "*cries*",
            "*screams*",
            "*sweats*",
            "*twerks*",
            "*runs away*",
            "*screeches*",
            "*walks away*",
            "*sees bulge*",
            "*looks at you*",
            "*notices buldge*",
            "*starts twerking*",
            "*huggles tightly*",
            "*boops your nose*"
        ];
        this.uwuMap = [
            [
                /(?:r|l)/g,
                "w"
            ],
            [
                /(?:R|L)/g,
                "W"
            ],
            [
                /n([aeiou])/g,
                "ny$1"
            ],
            [
                /N([aeiou])/g,
                "Ny$1"
            ],
            [
                /N([AEIOU])/g,
                "Ny$1"
            ],
            [
                /ove/g,
                "uv"
            ]
        ];
        this._spacesModifier = spaces !== null && spaces !== void 0 ? spaces : {
            faces: 0.05,
            actions: 0.075,
            stutters: 0.1
        };
        this._wordsModifier = words !== null && words !== void 0 ? words : 0.7;
        this._exclamationsModifier = exclamations !== null && exclamations !== void 0 ? exclamations : 1;
    }
    Uwuifier.prototype.uwuifyWords = function(sentence) {
        var _this = this;
        var words = sentence.split(" ");
        var uwuifiedSentence = words.map(function(word) {
            if (utils_1.isUri(word)) return word;
            var seed = new seed_1.Seed(word);
            for(var _i = 0, _a = _this.uwuMap; _i < _a.length; _i++){
                var _b = _a[_i], oldWord = _b[0], newWord = _b[1];
                // Generate a random value for every map so words will be partly uwuified instead of not at all
                if (seed.random() > _this._wordsModifier) continue;
                word = word.replace(oldWord, newWord);
            }
            return word;
        }).join(" ");
        return uwuifiedSentence;
    };
    Uwuifier.prototype.uwuifySpaces = function(sentence) {
        var _this = this;
        var words = sentence.split(" ");
        var faceThreshold = this._spacesModifier.faces;
        var actionThreshold = this._spacesModifier.actions + faceThreshold;
        var stutterThreshold = this._spacesModifier.stutters + actionThreshold;
        var uwuifiedSentence = words.map(function(word, index) {
            var seed = new seed_1.Seed(word);
            var random = seed.random();
            var firstCharacter = word[0];
            if (random <= faceThreshold && _this.faces) {
                // Add random face before the word
                word += " " + _this.faces[seed.randomInt(0, _this.faces.length - 1)];
                checkCapital();
            } else if (random <= actionThreshold && _this.actions) {
                // Add random action before the word
                word += " " + _this.actions[seed.randomInt(0, _this.actions.length - 1)];
                checkCapital();
            } else if (random <= stutterThreshold && !utils_1.isUri(word)) {
                // Add stutter with a length between 0 and 2
                var stutter = seed.randomInt(0, 2);
                return (firstCharacter + "-").repeat(stutter) + word;
            }
            function checkCapital() {
                // Check if we should remove the first capital letter
                if (firstCharacter !== firstCharacter.toUpperCase()) return;
                // if word has higher than 50% upper case
                if (utils_1.getCapitalPercentage(word) > 0.5) return;
                // If it's the first word
                if (index === 0) // Remove the first capital letter
                word = firstCharacter.toLowerCase() + word.slice(1);
                else {
                    var previousWord = words[index - 1];
                    var previousWordLastChar = previousWord[previousWord.length - 1];
                    var prevWordEndsWithPunctuation = new RegExp("[.!?\\-]").test(previousWordLastChar);
                    if (!prevWordEndsWithPunctuation) return;
                    word = firstCharacter.toLowerCase() + word.slice(1);
                }
            }
            return word;
        }).join(" ");
        return uwuifiedSentence;
    };
    Uwuifier.prototype.uwuifyExclamations = function(sentence) {
        var _this = this;
        var words = sentence.split(" ");
        var pattern = new RegExp("[?!]+$");
        var uwuifiedSentence = words.map(function(word) {
            var seed = new seed_1.Seed(word);
            // If there are no exclamations return
            if (!pattern.test(word) || seed.random() > _this._exclamationsModifier) return word;
            word = word.replace(pattern, "");
            word += _this.exclamations[seed.randomInt(0, _this.exclamations.length - 1)];
            return word;
        }).join(" ");
        return uwuifiedSentence;
    };
    Uwuifier.prototype.uwuifySentence = function(sentence) {
        var uwuifiedString = sentence;
        uwuifiedString = this.uwuifyWords(uwuifiedString);
        uwuifiedString = this.uwuifyExclamations(uwuifiedString);
        uwuifiedString = this.uwuifySpaces(uwuifiedString);
        return uwuifiedString;
    };
    __decorate([
        utils_1.InitModifierParam()
    ], Uwuifier.prototype, "_spacesModifier", void 0);
    __decorate([
        utils_1.InitModifierParam()
    ], Uwuifier.prototype, "_wordsModifier", void 0);
    __decorate([
        utils_1.InitModifierParam()
    ], Uwuifier.prototype, "_exclamationsModifier", void 0);
    return Uwuifier;
}();
exports.Uwuifier = Uwuifier;

},{"aeb4f7dd945479e1":"7D85z","416592421e76745c":"WKLGV"}],"7D85z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isUri = exports.InitModifierParam = exports.getCapitalPercentage = exports.getRandomInt = void 0;
var getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomInt = getRandomInt;
var getCapitalPercentage = function(input) {
    var totalLetters = 0;
    var upperLetters = 0;
    for(var _i = 0, input_1 = input; _i < input_1.length; _i++){
        var currentLetter = input_1[_i];
        if (new RegExp(/^[a-zA-Z]+$/).test(currentLetter)) {
            totalLetters++;
            if (currentLetter === currentLetter.toUpperCase()) upperLetters++;
        }
    }
    return upperLetters / totalLetters;
};
exports.getCapitalPercentage = getCapitalPercentage;
var InitModifierParam = function() {
    return function(target, key) {
        var value = target[key];
        var sum = 0;
        var getter = function() {
            return value;
        };
        var setter = function(next) {
            if (typeof next === "object") sum = Object.values(next).reduce(function(a, b) {
                return a + b;
            });
            if (next < 0 || sum < 0 || next > 1 || sum > 1) throw new Error(key + " modifier value must be a number between 0 and 1");
            value = next;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
};
exports.InitModifierParam = InitModifierParam;
function isUri(value) {
    if (!value) return false;
    // check for illegal characters
    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return false;
    // check for hex escapes that aren't complete
    if (/%[^0-9a-f]/i.test(value) || /%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return false;
    // directly from RFC 3986
    var split = value.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    if (!split) return false;
    var _a = [
        split[1],
        split[2],
        split[3]
    ], scheme = _a[0], authority = _a[1], path = _a[2];
    // scheme and path are required, though the path can be empty
    if (!(scheme && scheme.length && path.length >= 0)) return false;
    // if authority is present, the path must be empty or begin with a /
    if (authority && authority.length) {
        if (!(path.length === 0 || /^\//.test(path))) return false;
    } else {
        // if authority is not present, the path must not start with //
        if (/^\/\//.test(path)) return false;
    }
    // scheme must begin with a letter, then consist of letters, digits, +, ., or -
    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return false;
    return true;
}
exports.isUri = isUri;

},{}],"WKLGV":[function(require,module,exports) {
"use strict";
// This random seed package was previously publicated on the Deno site as a standalone package but I've decided to just integrate it into the Uwuifier
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Seed = void 0;
var Seed = /** @class */ function() {
    function Seed(seed) {
        if (seed === void 0) seed = "";
        this._seed = seed;
        this._seeder = this.generateSeeder(seed);
    }
    Seed.prototype.generateRange = function(value, min, max) {
        // Make sure the minimum and maximum values are correct
        if (min > max) throw new Error("The minimum value must be below the maximum value");
        else if (min === max) throw new Error("The minimum value cannot equal the maximum value");
        else if (min === 0 && max === 1) return value;
        // Actually map the number range
        return (value - 0) * (max - min) / 1 + min;
    };
    Seed.prototype.generateSeeder = function(seed) {
        // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
        // This is a seeded random generator
        // Returns a function which returns a value between 0 and 0xFFFFFFFF (32-bits)
        // Had to use a eslint ignore here since var has different scoping than let
        // tslint:disable-next-line
        for(var i = 0, h = 1779033703 ^ seed.length; i < seed.length; i++)h = Math.imul(h ^ seed.charCodeAt(i), 3432918353), h = h << 13 | h >>> 19;
        return function() {
            h = Math.imul(h ^ h >>> 16, 2246822507);
            h = Math.imul(h ^ h >>> 13, 3266489909);
            return (h ^= h >>> 16) >>> 0;
        };
    };
    Object.defineProperty(Seed.prototype, "seed", {
        get: function() {
            return this._seed;
        },
        set: function(seed) {
            // If the seed hasn't changed just return
            if (this._seed === seed) return;
            this._seed = seed;
            this._seeder = this.generateSeeder(seed);
        },
        enumerable: false,
        configurable: true
    });
    Seed.prototype.random = function(min, max) {
        if (min === void 0) min = 0;
        if (max === void 0) max = 1;
        // Use the default sfc32 random generator
        return this.generateRange(this.sfc32(), min, max);
    };
    Seed.prototype.randomInt = function(min, max) {
        if (min === void 0) min = 0;
        if (max === void 0) max = 1;
        return Math.round(this.random(min, max));
    };
    Seed.prototype.sfc32 = function(min, max) {
        if (min === void 0) min = 0;
        if (max === void 0) max = 1;
        var a = this._seeder();
        var b = this._seeder();
        var c = this._seeder();
        var d = this._seeder();
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        var t = a + b | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = c << 21 | c >>> 11;
        d = d + 1 | 0;
        t = t + d | 0;
        c = c + t | 0;
        return this.generateRange((t >>> 0) / 4294967296, min, max);
    };
    Seed.prototype.mulberry32 = function(min, max) {
        if (min === void 0) min = 0;
        if (max === void 0) max = 1;
        var a = this._seeder();
        var t = a += 0x6d2b79f5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return this.generateRange(((t ^ t >>> 14) >>> 0) / 4294967296, min, max);
    };
    Seed.prototype.jsf32 = function(min, max) {
        if (min === void 0) min = 0;
        if (max === void 0) max = 1;
        var a = this._seeder();
        var b = this._seeder();
        var c = this._seeder();
        var d = this._seeder();
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        // Using eslint here since this stolen code is definitely not optimized for readability
        // tslint:disable-next-line
        var t = a - (b << 27 | b >>> 5) | 0;
        a = b ^ (c << 17 | c >>> 15);
        b = c + d | 0;
        c = d + t | 0;
        d = a + t | 0;
        return this.generateRange((d >>> 0) / 4294967296, min, max);
    };
    Seed.prototype.xoshiro128 = function(min, max) {
        if (min === void 0) min = 0;
        if (max === void 0) max = 1;
        var a = this._seeder();
        var b = this._seeder();
        var c = this._seeder();
        var d = this._seeder();
        // Using eslint here since this stolen code is definitely not optimized for readability
        // tslint:disable-next-line
        var t = b << 9, r = a * 5;
        r = (r << 7 | r >>> 25) * 9;
        c ^= a;
        d ^= b;
        b ^= c;
        a ^= d;
        c ^= t;
        d = d << 11 | d >>> 21;
        return this.generateRange((r >>> 0) / 4294967296, min, max);
    };
    return Seed;
}();
exports.Seed = Seed;

},{}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["dfjee","1xe9X"], "1xe9X", "parcelRequirea99d")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQzVDO0FBRUEsUUFBUSxvQkFBb0IsU0FBVSxDQUFDO0lBQ3JDLE9BQU8sZUFBZSxHQUFHLGNBQWM7UUFBQyxPQUFPO0lBQUk7QUFDckQ7QUFFQSxRQUFRLFlBQVksU0FBVSxNQUFNLEVBQUUsSUFBSTtJQUN4QyxPQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztRQUN2QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGVBQWUsTUFDbkU7UUFHRixPQUFPLGVBQWUsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxTQUFTLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sZUFBZSxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1kYjkwMWUwODQxNjU2MGYzLmpzIiwiY29udGVudHMvdXd1LnRzIiwibm9kZV9tb2R1bGVzL3V3dWlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy91d3VpZmllci9kaXN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3V3dWlmaWVyL2Rpc3QvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvdXd1aWZpZXIvZGlzdC9zZWVkLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHA9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgeT0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBIPW5ldyBTZXQocCksXz1lPT5ILmhhcyhlKSxYPXAuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgRz1fKFwiLS1kcnktcnVuXCIpLGQ9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIsWj1kKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksRD0wLGM9KC4uLmUpPT5kKCkmJnUoYFxcdXsxRjdFMX0gJHtEKyt9YCwuLi5lKTt2YXIgcz17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9qYW1lc2xpYW5nL1B5Y2hhcm1Qcm9qZWN0cy9NY0hhY2tzL3V3dXd1ZW5kL3UtYmxvY2stb3JpZ2luL2NvbnRlbnRzL3V3dS50c1wiLFwiYnVuZGxlSWRcIjpcIjU5ZTMyY2EwYWQ3YzAzMzRcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo1MzMwM307bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPXMuYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpzLnZlcmJvc2V9fTt2YXIgUz1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe1MuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIXMuaG9zdHx8cy5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpzLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBzLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke3Muc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgaSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWkuY29kZWZyYW1lfHxpLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIraS5tZXNzYWdlK2BcbmArdytgXG5cbmAraS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtzLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke3MuZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIG49XCJfX3BsYXNtby1sb2FkaW5nX19cIixUPXR5cGVvZiB0cnVzdGVkVHlwZXM8XCJ1XCI/dHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShgdHJ1c3RlZC1odG1sLSR7bn1gLHtjcmVhdGVIVE1MOmU9PmV9KTp2b2lkIDA7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiAkKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPW47bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7bn0ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7bn06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7bn0gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtufSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtufSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtufSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIEYoZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9JCgpO2U9Rih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgTj1gJHtFfSR7bW9kdWxlLmlkfV9fYCxhLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7YT8uZGlzY29ubmVjdCgpLGE9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOk59KSxhLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGEub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIFcoKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fVcoKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1zLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/YS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NTQ29uZmlnIH0gZnJvbSBcInBsYXNtb1wiXG5pbXBvcnQgdXd1aWZpZXIgZnJvbSBcInV3dWlmeVwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbGFzbW9DU0NvbmZpZyA9IHtcbiAgICBtYXRjaGVzOiBbXCIqOi8vKi8qXCJdXG59XG5cbi8vIGh0dHBzOi8vbWVkaXVtLmNvbS9AQ29ubm9yRmlubmVnYW4vaG93LXRvLW1ha2UtYS1zaW1wbGUtdGV4dC1yZXBsYWNlbWVudC1jaHJvbWUtZXh0ZW5zaW9uLTNlN2FhOWZhMzAxZlxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgICBsZXQgaW1hZ2VfbGlzdCA9IFtdO1xuICAgIGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5tZW1lZ2VuLmxpbmsvdGVtcGxhdGVzLycpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGltYWdlX2xpc3QgPSBqc29uO1xuICAgICAgICB9KTtcbiAgICBpbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xuICAgICAgICBjb25zdCBuZXdTcmMgPSBpbWFnZV9saXN0W2dldFJhbmRvbUludChpbWFnZV9saXN0Lmxlbmd0aCldLmJsYW5rO1xuICAgICAgICBpbWcuc3JjID0gbmV3U3JjO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW1nLnNyY3NldCA9IG5ld1NyYztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDEsIGgyLCBoMywgaDQsIGg1LCBwICxjYXB0aW9uLCBzcGFuLCBhJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXh0W2ldLmlubmVySFRNTC5pbmNsdWRlcyhcImltZ1wiKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGV4dFtpXS5pbm5lckhUTUwuaW5jbHVkZXMoXCJocmVmXCIpKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0ZXh0W2ldLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVfdmFsdWUgPSBjaGlsZHJlbltqXS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVfdmFsdWUgIT0gbnVsbCAmJiAhbm9kZV92YWx1ZS5pbmNsdWRlcygnaHR0cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1d3VpZnkgPSBuZXcgdXd1aWZpZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXd1aWZ5LnV3dWlmeShub2RlX3ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0W2ldLmNoaWxkTm9kZXNbal0ubm9kZVZhbHVlID0gdXd1aWZ5LnV3dWlmeShub2RlX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0ZXh0W2ldLmlubmVyVGV4dDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHV3dWlmeSA9IG5ldyB1d3VpZmllcigpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1d3VpZnkudXd1aWZ5KGVsZW1lbnQpKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBgJHt1d3VpZnkudXd1aWZ5KGVsZW1lbnQpLnJlcGxhY2VBbGwoJ2J1bGdlJywgJyAnKS5yZXBsYWNlQWxsKCd0d2VyaycsICcgJyl9YDtcbiAgICAgICAgICAgIHRleHRbaV0uaW5uZXJUZXh0ID0gZWxlbWVudDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVwbGFjZVRleHQpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IFwicGlua1wiXG4vLyB9KSIsIlwidXNlIHN0cmljdFwiO1xuLy8gdXd1aWZ5XG4vLyBCeSBCYWRCb3lIYWxvQ2F0XG4vLyBcbi8vIENvcHlyaWdodCAoQykgMjAyMCAgTG9nYW4gRGV2aW5lXG4vLyBcbi8vIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vLyBcbi8vIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vLyBcbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4vLyBJbXBvcnQgVXd1aWZpZXJcbnZhciB1d3VpZmllcl8xID0gcmVxdWlyZShcInV3dWlmaWVyXCIpO1xuLy8gRHVlIHRvIHRoZSB3YXkgdXd1aWZ5IGlzIGJ1aWx0LCB3ZSB1c2Vcbi8vIGEgY2xhc3MgY2FsbGVkIFwidXd1aWZpZXJcIiB0byBzdG9yZSB0aGVcbi8vIG1haW4gaW5mcmFzdHJ1Y3R1cmUuXG52YXIgdXd1aWZpZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gTm93IHdlIGhhdmUgdGhlIG1haW4gY29uc3RydWN0b3IgdXNlZCBmb3JcbiAgICAvLyB0aGUgYWN0dWFsIGNyZWF0aW9uXG4gICAgZnVuY3Rpb24gdXd1aWZpZXIoKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdXd1aWZpZXJcbiAgICAgICAgdGhpcy5fdXd1aWZpZXIgPSBuZXcgdXd1aWZpZXJfMS5Vd3VpZmllcigpO1xuICAgICAgICAvLyBJTlNFUlRJT05TXG4gICAgICAgIC8vIFV3dWlmaWVyIGhhcyBidWlsdCBpbiBpdGVtcyB0aGF0IHdlIHdhbnQgdG9cbiAgICAgICAgLy8gbW9kaWZ5LlxuICAgICAgICAvLyBQbGFjZSBvdXIgYWN0aW9ucyBpbnRvIHRoaXMgdXd1aWZpZXIgaW5zdGFuY2VcbiAgICAgICAgdGhpcy5fdXd1aWZpZXIuYWN0aW9ucyA9IFtcbiAgICAgICAgICAgICcqYmx1c2hlcyonLFxuICAgICAgICAgICAgJypjcmllcyonLFxuICAgICAgICAgICAgJypzY3JlYW1zKicsXG4gICAgICAgICAgICAnKnN3ZWF0cyonLFxuICAgICAgICAgICAgJypzZWVzIGJ1bGdlKicsXG4gICAgICAgICAgICAnKnRoaW5rcyBhYm91dCB5b3VyIGJ1bGdlKicsXG4gICAgICAgICAgICAnKnJ1bnMgYXdheSonLFxuICAgICAgICAgICAgJypodWdzKicsXG4gICAgICAgICAgICAnKmh1Z2dsZXMgdGlnaHRseSonLFxuICAgICAgICAgICAgJypib29wcyB5b3VyIG5vc2UqJyxcbiAgICAgICAgICAgICcqdHdlcmtzKicsXG4gICAgICAgICAgICAnKnN0YXJ0cyB0d2Vya2luZyonLFxuICAgICAgICAgICAgJypzY3JlYW1zKicsXG4gICAgICAgICAgICAnKndhbGtzIGF3YXkqJyxcbiAgICAgICAgICAgICcqbG9va3MgYXQgeW91KicsXG4gICAgICAgICAgICAnKmNyaWVzKicsXG4gICAgICAgICAgICAnKnNjcmVlY2hlcyonLFxuICAgICAgICAgICAgJypwb3VuY2VzIG9uIHlvdSonLFxuICAgICAgICAgICAgJyplYXRzKicsXG4gICAgICAgICAgICAnKmJvb3BzIHNlbGYqJ1xuICAgICAgICBdO1xuICAgICAgICAvLyBQbGFjZSBpbiBvdXIgZmFjZXMgaW5zdGVhZCBvZiB0aGUgVXd1aWZpZXIgb25lc1xuICAgICAgICB0aGlzLl91d3VpZmllci5mYWNlcyA9IFtcbiAgICAgICAgICAgICc6MycsXG4gICAgICAgICAgICAneDMnLFxuICAgICAgICAgICAgJ293bycsXG4gICAgICAgICAgICAnT3dPJyxcbiAgICAgICAgICAgICd1d3UnLFxuICAgICAgICAgICAgJ1V3VScsXG4gICAgICAgICAgICAnXi1eJyxcbiAgICAgICAgICAgICdeX14nXG4gICAgICAgIF07XG4gICAgICAgIC8vIEN1c3RvbSBleGNsYW1hdGlvbnMgdG9vIVxuICAgICAgICB0aGlzLl91d3VpZmllci5leGNsYW1hdGlvbnMgPSBbXG4gICAgICAgICAgICAnIScsXG4gICAgICAgICAgICAnIT8nLFxuICAgICAgICAgICAgJz8hJyxcbiAgICAgICAgICAgICchPz8nLFxuICAgICAgICAgICAgJz8/IScsXG4gICAgICAgICAgICAnPyE/JyxcbiAgICAgICAgICAgICchPyE/IT8hPz8hPycsXG4gICAgICAgICAgICAnPz8hIScsXG4gICAgICAgICAgICAnITExISEnXG4gICAgICAgIF07XG4gICAgfVxuICAgIHV3dWlmaWVyLnByb3RvdHlwZS51d3VpZnkgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXd1aWZpZXIudXd1aWZ5U2VudGVuY2UodGV4dCk7XG4gICAgfTtcbiAgICByZXR1cm4gdXd1aWZpZXI7XG59KCkpO1xubW9kdWxlLmV4cG9ydHMgPSB1d3VpZmllcjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXd1aWZpZXIgPSB2b2lkIDA7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIHNlZWRfMSA9IHJlcXVpcmUoXCIuL3NlZWRcIik7XG52YXIgVXd1aWZpZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXd1aWZpZXIoX2EpIHtcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHtcbiAgICAgICAgICAgIHNwYWNlczogeyBmYWNlczogMC4wNSwgYWN0aW9uczogMC4wNzUsIHN0dXR0ZXJzOiAwLjEgfSxcbiAgICAgICAgICAgIHdvcmRzOiAwLjcsXG4gICAgICAgICAgICBleGNsYW1hdGlvbnM6IDFcbiAgICAgICAgfSA6IF9hLCBfYyA9IF9iLnNwYWNlcywgc3BhY2VzID0gX2MgPT09IHZvaWQgMCA/IHsgZmFjZXM6IDAuMDUsIGFjdGlvbnM6IDAuMDc1LCBzdHV0dGVyczogMC4xIH0gOiBfYywgX2QgPSBfYi53b3Jkcywgd29yZHMgPSBfZCA9PT0gdm9pZCAwID8gMSA6IF9kLCBfZSA9IF9iLmV4Y2xhbWF0aW9ucywgZXhjbGFtYXRpb25zID0gX2UgPT09IHZvaWQgMCA/IDEgOiBfZTtcbiAgICAgICAgdGhpcy5mYWNlcyA9IFtcIihcXHUzMEZCYFxcdTAzQzlcXHUwMEI0XFx1MzBGQilcIiwgXCI7O3c7O1wiLCAnT3dPJywgXCJVd1VcIiwgXCI+dzxcIiwgXCJed15cIiwgXCJcXHUwMERBd1xcdTAwREFcIiwgJ14tXicsIFwiOjNcIiwgXCJ4M1wiXTtcbiAgICAgICAgdGhpcy5leGNsYW1hdGlvbnMgPSBbXCIhP1wiLCBcIj8hIVwiLCBcIj8hPzFcIiwgXCIhITExXCIsIFwiPyE/IVwiXTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gW1xuICAgICAgICAgICAgXCIqYmx1c2hlcypcIixcbiAgICAgICAgICAgIFwiKndoaXNwZXJzIHRvIHNlbGYqXCIsXG4gICAgICAgICAgICAnKmNyaWVzKicsXG4gICAgICAgICAgICAnKnNjcmVhbXMqJyxcbiAgICAgICAgICAgICcqc3dlYXRzKicsXG4gICAgICAgICAgICAnKnR3ZXJrcyonLFxuICAgICAgICAgICAgXCIqcnVucyBhd2F5KlwiLFxuICAgICAgICAgICAgJypzY3JlZWNoZXMqJyxcbiAgICAgICAgICAgICcqd2Fsa3MgYXdheSonLFxuICAgICAgICAgICAgXCIqc2VlcyBidWxnZSpcIixcbiAgICAgICAgICAgICcqbG9va3MgYXQgeW91KicsXG4gICAgICAgICAgICBcIipub3RpY2VzIGJ1bGRnZSpcIixcbiAgICAgICAgICAgIFwiKnN0YXJ0cyB0d2Vya2luZypcIixcbiAgICAgICAgICAgIFwiKmh1Z2dsZXMgdGlnaHRseSpcIixcbiAgICAgICAgICAgIFwiKmJvb3BzIHlvdXIgbm9zZSpcIlxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnV3dU1hcCA9IFtcbiAgICAgICAgICAgIFsvKD86cnxsKS9nLCBcIndcIl0sXG4gICAgICAgICAgICBbLyg/OlJ8TCkvZywgXCJXXCJdLFxuICAgICAgICAgICAgWy9uKFthZWlvdV0pL2csIFwibnkkMVwiXSxcbiAgICAgICAgICAgIFsvTihbYWVpb3VdKS9nLCBcIk55JDFcIl0sXG4gICAgICAgICAgICBbL04oW0FFSU9VXSkvZywgXCJOeSQxXCJdLFxuICAgICAgICAgICAgWy9vdmUvZywgXCJ1dlwiXVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLl9zcGFjZXNNb2RpZmllciA9IHNwYWNlcyAhPT0gbnVsbCAmJiBzcGFjZXMgIT09IHZvaWQgMCA/IHNwYWNlcyA6IHtcbiAgICAgICAgICAgIGZhY2VzOiAwLjA1LFxuICAgICAgICAgICAgYWN0aW9uczogMC4wNzUsXG4gICAgICAgICAgICBzdHV0dGVyczogMC4xXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3dvcmRzTW9kaWZpZXIgPSB3b3JkcyAhPT0gbnVsbCAmJiB3b3JkcyAhPT0gdm9pZCAwID8gd29yZHMgOiAwLjc7XG4gICAgICAgIHRoaXMuX2V4Y2xhbWF0aW9uc01vZGlmaWVyID0gZXhjbGFtYXRpb25zICE9PSBudWxsICYmIGV4Y2xhbWF0aW9ucyAhPT0gdm9pZCAwID8gZXhjbGFtYXRpb25zIDogMTtcbiAgICB9XG4gICAgVXd1aWZpZXIucHJvdG90eXBlLnV3dWlmeVdvcmRzID0gZnVuY3Rpb24gKHNlbnRlbmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3b3JkcyA9IHNlbnRlbmNlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdmFyIHV3dWlmaWVkU2VudGVuY2UgPSB3b3Jkc1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNVcmkod29yZCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgICAgICAgICB2YXIgc2VlZCA9IG5ldyBzZWVkXzEuU2VlZCh3b3JkKTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBfdGhpcy51d3VNYXA7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBvbGRXb3JkID0gX2JbMF0sIG5ld1dvcmQgPSBfYlsxXTtcbiAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSB2YWx1ZSBmb3IgZXZlcnkgbWFwIHNvIHdvcmRzIHdpbGwgYmUgcGFydGx5IHV3dWlmaWVkIGluc3RlYWQgb2Ygbm90IGF0IGFsbFxuICAgICAgICAgICAgICAgIGlmIChzZWVkLnJhbmRvbSgpID4gX3RoaXMuX3dvcmRzTW9kaWZpZXIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHdvcmQgPSB3b3JkLnJlcGxhY2Uob2xkV29yZCwgbmV3V29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd29yZDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIHJldHVybiB1d3VpZmllZFNlbnRlbmNlO1xuICAgIH07XG4gICAgVXd1aWZpZXIucHJvdG90eXBlLnV3dWlmeVNwYWNlcyA9IGZ1bmN0aW9uIChzZW50ZW5jZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgd29yZHMgPSBzZW50ZW5jZS5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBmYWNlVGhyZXNob2xkID0gdGhpcy5fc3BhY2VzTW9kaWZpZXIuZmFjZXM7XG4gICAgICAgIHZhciBhY3Rpb25UaHJlc2hvbGQgPSB0aGlzLl9zcGFjZXNNb2RpZmllci5hY3Rpb25zICsgZmFjZVRocmVzaG9sZDtcbiAgICAgICAgdmFyIHN0dXR0ZXJUaHJlc2hvbGQgPSB0aGlzLl9zcGFjZXNNb2RpZmllci5zdHV0dGVycyArIGFjdGlvblRocmVzaG9sZDtcbiAgICAgICAgdmFyIHV3dWlmaWVkU2VudGVuY2UgPSB3b3Jkc1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzZWVkID0gbmV3IHNlZWRfMS5TZWVkKHdvcmQpO1xuICAgICAgICAgICAgdmFyIHJhbmRvbSA9IHNlZWQucmFuZG9tKCk7XG4gICAgICAgICAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSB3b3JkWzBdO1xuICAgICAgICAgICAgaWYgKHJhbmRvbSA8PSBmYWNlVGhyZXNob2xkICYmIF90aGlzLmZhY2VzKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHJhbmRvbSBmYWNlIGJlZm9yZSB0aGUgd29yZFxuICAgICAgICAgICAgICAgIHdvcmQgKz0gJyAnICsgX3RoaXMuZmFjZXNbc2VlZC5yYW5kb21JbnQoMCwgX3RoaXMuZmFjZXMubGVuZ3RoIC0gMSldO1xuICAgICAgICAgICAgICAgIGNoZWNrQ2FwaXRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmFuZG9tIDw9IGFjdGlvblRocmVzaG9sZCAmJiBfdGhpcy5hY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHJhbmRvbSBhY3Rpb24gYmVmb3JlIHRoZSB3b3JkXG4gICAgICAgICAgICAgICAgd29yZCArPSAnICcgKyBfdGhpcy5hY3Rpb25zW3NlZWQucmFuZG9tSW50KDAsIF90aGlzLmFjdGlvbnMubGVuZ3RoIC0gMSldO1xuICAgICAgICAgICAgICAgIGNoZWNrQ2FwaXRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmFuZG9tIDw9IHN0dXR0ZXJUaHJlc2hvbGQgJiYgIXV0aWxzXzEuaXNVcmkod29yZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgc3R1dHRlciB3aXRoIGEgbGVuZ3RoIGJldHdlZW4gMCBhbmQgMlxuICAgICAgICAgICAgICAgIHZhciBzdHV0dGVyID0gc2VlZC5yYW5kb21JbnQoMCwgMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChmaXJzdENoYXJhY3RlciArICctJykucmVwZWF0KHN0dXR0ZXIpICsgd29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrQ2FwaXRhbCgpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBzaG91bGQgcmVtb3ZlIHRoZSBmaXJzdCBjYXBpdGFsIGxldHRlclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdENoYXJhY3RlciAhPT0gZmlyc3RDaGFyYWN0ZXIudG9VcHBlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGlmIHdvcmQgaGFzIGhpZ2hlciB0aGFuIDUwJSB1cHBlciBjYXNlXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzXzEuZ2V0Q2FwaXRhbFBlcmNlbnRhZ2Uod29yZCkgPiAwLjUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIHRoZSBmaXJzdCB3b3JkXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgY2FwaXRhbCBsZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgd29yZCA9IGZpcnN0Q2hhcmFjdGVyLnRvTG93ZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzV29yZCA9IHdvcmRzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1dvcmRMYXN0Q2hhciA9IHByZXZpb3VzV29yZFtwcmV2aW91c1dvcmQubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2V29yZEVuZHNXaXRoUHVuY3R1YXRpb24gPSBuZXcgUmVnRXhwKCdbLiE/XFxcXC1dJykudGVzdChwcmV2aW91c1dvcmRMYXN0Q2hhcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldldvcmRFbmRzV2l0aFB1bmN0dWF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB3b3JkID0gZmlyc3RDaGFyYWN0ZXIudG9Mb3dlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICByZXR1cm4gdXd1aWZpZWRTZW50ZW5jZTtcbiAgICB9O1xuICAgIFV3dWlmaWVyLnByb3RvdHlwZS51d3VpZnlFeGNsYW1hdGlvbnMgPSBmdW5jdGlvbiAoc2VudGVuY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdvcmRzID0gc2VudGVuY2Uuc3BsaXQoXCIgXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoJ1s/IV0rJCcpO1xuICAgICAgICB2YXIgdXd1aWZpZWRTZW50ZW5jZSA9IHdvcmRzXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICB2YXIgc2VlZCA9IG5ldyBzZWVkXzEuU2VlZCh3b3JkKTtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBleGNsYW1hdGlvbnMgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4udGVzdCh3b3JkKSB8fCBzZWVkLnJhbmRvbSgpID4gX3RoaXMuX2V4Y2xhbWF0aW9uc01vZGlmaWVyKVxuICAgICAgICAgICAgICAgIHJldHVybiB3b3JkO1xuICAgICAgICAgICAgd29yZCA9IHdvcmQucmVwbGFjZShwYXR0ZXJuLCBcIlwiKTtcbiAgICAgICAgICAgIHdvcmQgKz0gX3RoaXMuZXhjbGFtYXRpb25zW3NlZWQucmFuZG9tSW50KDAsIF90aGlzLmV4Y2xhbWF0aW9ucy5sZW5ndGggLSAxKV07XG4gICAgICAgICAgICByZXR1cm4gd29yZDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIHJldHVybiB1d3VpZmllZFNlbnRlbmNlO1xuICAgIH07XG4gICAgVXd1aWZpZXIucHJvdG90eXBlLnV3dWlmeVNlbnRlbmNlID0gZnVuY3Rpb24gKHNlbnRlbmNlKSB7XG4gICAgICAgIHZhciB1d3VpZmllZFN0cmluZyA9IHNlbnRlbmNlO1xuICAgICAgICB1d3VpZmllZFN0cmluZyA9IHRoaXMudXd1aWZ5V29yZHModXd1aWZpZWRTdHJpbmcpO1xuICAgICAgICB1d3VpZmllZFN0cmluZyA9IHRoaXMudXd1aWZ5RXhjbGFtYXRpb25zKHV3dWlmaWVkU3RyaW5nKTtcbiAgICAgICAgdXd1aWZpZWRTdHJpbmcgPSB0aGlzLnV3dWlmeVNwYWNlcyh1d3VpZmllZFN0cmluZyk7XG4gICAgICAgIHJldHVybiB1d3VpZmllZFN0cmluZztcbiAgICB9O1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICB1dGlsc18xLkluaXRNb2RpZmllclBhcmFtKClcbiAgICBdLCBVd3VpZmllci5wcm90b3R5cGUsIFwiX3NwYWNlc01vZGlmaWVyXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIHV0aWxzXzEuSW5pdE1vZGlmaWVyUGFyYW0oKVxuICAgIF0sIFV3dWlmaWVyLnByb3RvdHlwZSwgXCJfd29yZHNNb2RpZmllclwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICB1dGlsc18xLkluaXRNb2RpZmllclBhcmFtKClcbiAgICBdLCBVd3VpZmllci5wcm90b3R5cGUsIFwiX2V4Y2xhbWF0aW9uc01vZGlmaWVyXCIsIHZvaWQgMCk7XG4gICAgcmV0dXJuIFV3dWlmaWVyO1xufSgpKTtcbmV4cG9ydHMuVXd1aWZpZXIgPSBVd3VpZmllcjtcbiIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNVcmkgPSBleHBvcnRzLkluaXRNb2RpZmllclBhcmFtID0gZXhwb3J0cy5nZXRDYXBpdGFsUGVyY2VudGFnZSA9IGV4cG9ydHMuZ2V0UmFuZG9tSW50ID0gdm9pZCAwO1xudmFyIGdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn07XG5leHBvcnRzLmdldFJhbmRvbUludCA9IGdldFJhbmRvbUludDtcbnZhciBnZXRDYXBpdGFsUGVyY2VudGFnZSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciB0b3RhbExldHRlcnMgPSAwO1xuICAgIHZhciB1cHBlckxldHRlcnMgPSAwO1xuICAgIGZvciAodmFyIF9pID0gMCwgaW5wdXRfMSA9IGlucHV0OyBfaSA8IGlucHV0XzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50TGV0dGVyID0gaW5wdXRfMVtfaV07XG4gICAgICAgIGlmIChuZXcgUmVnRXhwKC9eW2EtekEtWl0rJC8pLnRlc3QoY3VycmVudExldHRlcikpIHtcbiAgICAgICAgICAgIHRvdGFsTGV0dGVycysrO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMZXR0ZXIgPT09IGN1cnJlbnRMZXR0ZXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHVwcGVyTGV0dGVycysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cHBlckxldHRlcnMgLyB0b3RhbExldHRlcnM7XG59O1xuZXhwb3J0cy5nZXRDYXBpdGFsUGVyY2VudGFnZSA9IGdldENhcGl0YWxQZXJjZW50YWdlO1xudmFyIEluaXRNb2RpZmllclBhcmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICB2YXIgZ2V0dGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsdWU7IH07XG4gICAgICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHN1bSA9IE9iamVjdC52YWx1ZXMobmV4dCkucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICsgYjsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dCA8IDAgfHwgc3VtIDwgMCB8fCBuZXh0ID4gMSB8fCBzdW0gPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArIFwiIG1vZGlmaWVyIHZhbHVlIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBuZXh0O1xuICAgICAgICB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuZXhwb3J0cy5Jbml0TW9kaWZpZXJQYXJhbSA9IEluaXRNb2RpZmllclBhcmFtO1xuZnVuY3Rpb24gaXNVcmkodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gY2hlY2sgZm9yIGlsbGVnYWwgY2hhcmFjdGVyc1xuICAgIGlmICgvW15hLXowLTlcXDpcXC9cXD9cXCNcXFtcXF1cXEBcXCFcXCRcXCZcXCdcXChcXClcXCpcXCtcXCxcXDtcXD1cXC5cXC1cXF9cXH5cXCVdL2kudGVzdCh2YWx1ZSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBjaGVjayBmb3IgaGV4IGVzY2FwZXMgdGhhdCBhcmVuJ3QgY29tcGxldGVcbiAgICBpZiAoLyVbXjAtOWEtZl0vaS50ZXN0KHZhbHVlKSB8fCAvJVswLTlhLWZdKDo/W14wLTlhLWZdfCQpL2kudGVzdCh2YWx1ZSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBkaXJlY3RseSBmcm9tIFJGQyAzOTg2XG4gICAgdmFyIHNwbGl0ID0gdmFsdWUubWF0Y2goLyg/OihbXjpcXC8/I10rKTopPyg/OlxcL1xcLyhbXlxcLz8jXSopKT8oW14/I10qKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8vKTtcbiAgICBpZiAoIXNwbGl0KVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdmFyIF9hID0gW3NwbGl0WzFdLCBzcGxpdFsyXSwgc3BsaXRbM11dLCBzY2hlbWUgPSBfYVswXSwgYXV0aG9yaXR5ID0gX2FbMV0sIHBhdGggPSBfYVsyXTtcbiAgICAvLyBzY2hlbWUgYW5kIHBhdGggYXJlIHJlcXVpcmVkLCB0aG91Z2ggdGhlIHBhdGggY2FuIGJlIGVtcHR5XG4gICAgaWYgKCEoc2NoZW1lICYmIHNjaGVtZS5sZW5ndGggJiYgcGF0aC5sZW5ndGggPj0gMCkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBpZiBhdXRob3JpdHkgaXMgcHJlc2VudCwgdGhlIHBhdGggbXVzdCBiZSBlbXB0eSBvciBiZWdpbiB3aXRoIGEgL1xuICAgIGlmIChhdXRob3JpdHkgJiYgYXV0aG9yaXR5Lmxlbmd0aCkge1xuICAgICAgICBpZiAoIShwYXRoLmxlbmd0aCA9PT0gMCB8fCAvXlxcLy8udGVzdChwYXRoKSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBpZiBhdXRob3JpdHkgaXMgbm90IHByZXNlbnQsIHRoZSBwYXRoIG11c3Qgbm90IHN0YXJ0IHdpdGggLy9cbiAgICAgICAgaWYgKC9eXFwvXFwvLy50ZXN0KHBhdGgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBzY2hlbWUgbXVzdCBiZWdpbiB3aXRoIGEgbGV0dGVyLCB0aGVuIGNvbnNpc3Qgb2YgbGV0dGVycywgZGlnaXRzLCArLCAuLCBvciAtXG4gICAgaWYgKCEvXlthLXpdW2EtejAtOVxcK1xcLVxcLl0qJC8udGVzdChzY2hlbWUudG9Mb3dlckNhc2UoKSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuaXNVcmkgPSBpc1VyaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyByYW5kb20gc2VlZCBwYWNrYWdlIHdhcyBwcmV2aW91c2x5IHB1YmxpY2F0ZWQgb24gdGhlIERlbm8gc2l0ZSBhcyBhIHN0YW5kYWxvbmUgcGFja2FnZSBidXQgSSd2ZSBkZWNpZGVkIHRvIGp1c3QgaW50ZWdyYXRlIGl0IGludG8gdGhlIFV3dWlmaWVyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNlZWQgPSB2b2lkIDA7XG52YXIgU2VlZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWVkKHNlZWQpIHtcbiAgICAgICAgaWYgKHNlZWQgPT09IHZvaWQgMCkgeyBzZWVkID0gJyc7IH1cbiAgICAgICAgdGhpcy5fc2VlZCA9IHNlZWQ7XG4gICAgICAgIHRoaXMuX3NlZWRlciA9IHRoaXMuZ2VuZXJhdGVTZWVkZXIoc2VlZCk7XG4gICAgfVxuICAgIFNlZWQucHJvdG90eXBlLmdlbmVyYXRlUmFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMgYXJlIGNvcnJlY3RcbiAgICAgICAgaWYgKG1pbiA+IG1heClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG1pbmltdW0gdmFsdWUgbXVzdCBiZSBiZWxvdyB0aGUgbWF4aW11bSB2YWx1ZScpO1xuICAgICAgICBlbHNlIGlmIChtaW4gPT09IG1heClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG1pbmltdW0gdmFsdWUgY2Fubm90IGVxdWFsIHRoZSBtYXhpbXVtIHZhbHVlJyk7XG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgaXMgcnVuIHRocm91Z2ggdGhlIG1hcCB2YWx1ZSBzbyBpZiB0aGUgZGVmYXVsdHMgaGF2ZW4ndCBjaGFuZ2VkIGp1c3QgcmV0dXJuXG4gICAgICAgIGVsc2UgaWYgKG1pbiA9PT0gMCAmJiBtYXggPT09IDEpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIC8vIEFjdHVhbGx5IG1hcCB0aGUgbnVtYmVyIHJhbmdlXG4gICAgICAgIHJldHVybiAoKHZhbHVlIC0gMCkgKiAobWF4IC0gbWluKSkgLyAoMSAtIDApICsgbWluO1xuICAgIH07XG4gICAgU2VlZC5wcm90b3R5cGUuZ2VuZXJhdGVTZWVkZXIgPSBmdW5jdGlvbiAoc2VlZCkge1xuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MjEyOTUvc2VlZGluZy10aGUtcmFuZG9tLW51bWJlci1nZW5lcmF0b3ItaW4tamF2YXNjcmlwdC80NzU5MzMxNiM0NzU5MzMxNlxuICAgICAgICAvLyBUaGlzIGlzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3JcbiAgICAgICAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDB4RkZGRkZGRkYgKDMyLWJpdHMpXG4gICAgICAgIC8vIEhhZCB0byB1c2UgYSBlc2xpbnQgaWdub3JlIGhlcmUgc2luY2UgdmFyIGhhcyBkaWZmZXJlbnQgc2NvcGluZyB0aGFuIGxldFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGggPSAxNzc5MDMzNzAzIF4gc2VlZC5sZW5ndGg7IGkgPCBzZWVkLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgKGggPSBNYXRoLmltdWwoaCBeIHNlZWQuY2hhckNvZGVBdChpKSwgMzQzMjkxODM1MykpLCAoaCA9IChoIDw8IDEzKSB8IChoID4+PiAxOSkpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaCA9IE1hdGguaW11bChoIF4gKGggPj4+IDE2KSwgMjI0NjgyMjUwNyk7XG4gICAgICAgICAgICBoID0gTWF0aC5pbXVsKGggXiAoaCA+Pj4gMTMpLCAzMjY2NDg5OTA5KTtcbiAgICAgICAgICAgIHJldHVybiAoaCBePSBoID4+PiAxNikgPj4+IDA7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VlZC5wcm90b3R5cGUsIFwic2VlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHNlZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBzZWVkIGhhc24ndCBjaGFuZ2VkIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VlZCA9PT0gc2VlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9zZWVkID0gc2VlZDtcbiAgICAgICAgICAgIHRoaXMuX3NlZWRlciA9IHRoaXMuZ2VuZXJhdGVTZWVkZXIoc2VlZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZWVkLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cbiAgICAgICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDE7IH1cbiAgICAgICAgLy8gVXNlIHRoZSBkZWZhdWx0IHNmYzMyIHJhbmRvbSBnZW5lcmF0b3JcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSYW5nZSh0aGlzLnNmYzMyKCksIG1pbiwgbWF4KTtcbiAgICB9O1xuICAgIFNlZWQucHJvdG90eXBlLnJhbmRvbUludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICBpZiAobWluID09PSB2b2lkIDApIHsgbWluID0gMDsgfVxuICAgICAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gMTsgfVxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnJhbmRvbShtaW4sIG1heCkpO1xuICAgIH07XG4gICAgU2VlZC5wcm90b3R5cGUuc2ZjMzIgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cbiAgICAgICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDE7IH1cbiAgICAgICAgdmFyIGEgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgdmFyIGIgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgdmFyIGQgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgYSA+Pj49IDA7XG4gICAgICAgIGIgPj4+PSAwO1xuICAgICAgICBjID4+Pj0gMDtcbiAgICAgICAgZCA+Pj49IDA7XG4gICAgICAgIHZhciB0ID0gKGEgKyBiKSB8IDA7XG4gICAgICAgIGEgPSBiIF4gKGIgPj4+IDkpO1xuICAgICAgICBiID0gKGMgKyAoYyA8PCAzKSkgfCAwO1xuICAgICAgICBjID0gKGMgPDwgMjEpIHwgKGMgPj4+IDExKTtcbiAgICAgICAgZCA9IChkICsgMSkgfCAwO1xuICAgICAgICB0ID0gKHQgKyBkKSB8IDA7XG4gICAgICAgIGMgPSAoYyArIHQpIHwgMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSYW5nZSgodCA+Pj4gMCkgLyA0Mjk0OTY3Mjk2LCBtaW4sIG1heCk7XG4gICAgfTtcbiAgICBTZWVkLnByb3RvdHlwZS5tdWxiZXJyeTMyID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSAwOyB9XG4gICAgICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XG4gICAgICAgIHZhciBhID0gdGhpcy5fc2VlZGVyKCk7XG4gICAgICAgIHZhciB0ID0gKGEgKz0gMHg2ZDJiNzlmNSk7XG4gICAgICAgIHQgPSBNYXRoLmltdWwodCBeICh0ID4+PiAxNSksIHQgfCAxKTtcbiAgICAgICAgdCBePSB0ICsgTWF0aC5pbXVsKHQgXiAodCA+Pj4gNyksIHQgfCA2MSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUmFuZ2UoKCh0IF4gKHQgPj4+IDE0KSkgPj4+IDApIC8gNDI5NDk2NzI5NiwgbWluLCBtYXgpO1xuICAgIH07XG4gICAgU2VlZC5wcm90b3R5cGUuanNmMzIgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgaWYgKG1pbiA9PT0gdm9pZCAwKSB7IG1pbiA9IDA7IH1cbiAgICAgICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDE7IH1cbiAgICAgICAgdmFyIGEgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgdmFyIGIgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgdmFyIGQgPSB0aGlzLl9zZWVkZXIoKTtcbiAgICAgICAgYSB8PSAwO1xuICAgICAgICBiIHw9IDA7XG4gICAgICAgIGMgfD0gMDtcbiAgICAgICAgZCB8PSAwO1xuICAgICAgICAvLyBVc2luZyBlc2xpbnQgaGVyZSBzaW5jZSB0aGlzIHN0b2xlbiBjb2RlIGlzIGRlZmluaXRlbHkgbm90IG9wdGltaXplZCBmb3IgcmVhZGFiaWxpdHlcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHZhciB0ID0gKGEgLSAoKGIgPDwgMjcpIHwgKGIgPj4+IDUpKSkgfCAwO1xuICAgICAgICBhID0gYiBeICgoYyA8PCAxNykgfCAoYyA+Pj4gMTUpKTtcbiAgICAgICAgYiA9IChjICsgZCkgfCAwO1xuICAgICAgICBjID0gKGQgKyB0KSB8IDA7XG4gICAgICAgIGQgPSAoYSArIHQpIHwgMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSYW5nZSgoZCA+Pj4gMCkgLyA0Mjk0OTY3Mjk2LCBtaW4sIG1heCk7XG4gICAgfTtcbiAgICBTZWVkLnByb3RvdHlwZS54b3NoaXJvMTI4ID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSAwOyB9XG4gICAgICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxOyB9XG4gICAgICAgIHZhciBhID0gdGhpcy5fc2VlZGVyKCk7XG4gICAgICAgIHZhciBiID0gdGhpcy5fc2VlZGVyKCk7XG4gICAgICAgIHZhciBjID0gdGhpcy5fc2VlZGVyKCk7XG4gICAgICAgIHZhciBkID0gdGhpcy5fc2VlZGVyKCk7XG4gICAgICAgIC8vIFVzaW5nIGVzbGludCBoZXJlIHNpbmNlIHRoaXMgc3RvbGVuIGNvZGUgaXMgZGVmaW5pdGVseSBub3Qgb3B0aW1pemVkIGZvciByZWFkYWJpbGl0eVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdmFyIHQgPSBiIDw8IDksIHIgPSBhICogNTtcbiAgICAgICAgciA9ICgociA8PCA3KSB8IChyID4+PiAyNSkpICogOTtcbiAgICAgICAgYyBePSBhO1xuICAgICAgICBkIF49IGI7XG4gICAgICAgIGIgXj0gYztcbiAgICAgICAgYSBePSBkO1xuICAgICAgICBjIF49IHQ7XG4gICAgICAgIGQgPSAoZCA8PCAxMSkgfCAoZCA+Pj4gMjEpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVJhbmdlKChyID4+PiAwKSAvIDQyOTQ5NjcyOTYsIG1pbiwgbWF4KTtcbiAgICB9O1xuICAgIHJldHVybiBTZWVkO1xufSgpKTtcbmV4cG9ydHMuU2VlZCA9IFNlZWQ7XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoidXd1LmFkN2MwMzM0LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);