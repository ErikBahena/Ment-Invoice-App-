// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bboKq":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "9bc6eccb264e9f96";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5qTuD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("../JavaScript/model.js");
var _invoicePanelViewJs = require("./Views/invoicePanelView.js");
var _invoicePanelViewJsDefault = parcelHelpers.interopDefault(_invoicePanelViewJs);
var _newInvoiceViewJs = require("./Views/newInvoiceView.js");
var _newInvoiceViewJsDefault = parcelHelpers.interopDefault(_newInvoiceViewJs);
const controlSaveAsDraft = function(data) {
    _modelJs.saveToLocalStorage(data);
    _invoicePanelViewJsDefault.default.renderInvoices(_modelJs.getData("invoices"));
};
const controlSaveAndSend = function(data) {
    _modelJs.saveToLocalStorage(data);
    _invoicePanelViewJsDefault.default.renderInvoices(_modelJs.getData("invoices"));
};
const init = ()=>{
    // this is an optional function which would be used if the user signed in as a guest, it just puts some test data into localstorage
    _modelJs.stateInit();
    _invoicePanelViewJsDefault.default.addHandlerRender("load", _modelJs.getData("invoices"));
    _invoicePanelViewJsDefault.default.addFilterByFunctionality(_modelJs.getData("invoices"));
    _newInvoiceViewJsDefault.default.addHandlersWhenFormIsOpen();
    _newInvoiceViewJsDefault.default.addHandlerSaveAsDraft(controlSaveAsDraft, _modelJs.formDataFormat);
    _newInvoiceViewJsDefault.default.addHandlerSaveAndSend(controlSaveAndSend, _modelJs.formDataFormat);
};
init();

},{"../JavaScript/model.js":"D9OB3","./Views/invoicePanelView.js":"jHezo","./Views/newInvoiceView.js":"h9Y04","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"D9OB3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "stateInit", ()=>stateInit
);
parcelHelpers.export(exports, "formDataFormat", ()=>formDataFormat
);
parcelHelpers.export(exports, "getData", ()=>getData
);
parcelHelpers.export(exports, "saveToLocalStorage", ()=>saveToLocalStorage
);
"use strict";
const state = {
    invoices: []
};
const stateInit = ()=>{
    const stateInitData = [
        {
            id: "RT3080",
            createdAt: "2021-08-18",
            paymentDue: "2021-08-19",
            description: "Re-branding",
            paymentTerms: 1,
            clientName: "Jensen Huang",
            clientEmail: "jensenh@mail.com",
            status: "paid",
            senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom"
            },
            clientAddress: {
                street: "106 Kendell Street",
                city: "Sharrington",
                postCode: "NR24 5WQ",
                country: "United Kingdom"
            },
            items: [
                {
                    name: "Brand Guidelines",
                    quantity: 1,
                    price: 1800.9,
                    total: 1800.9
                }, 
            ],
            total: 1800.9
        },
        {
            id: "XM9141",
            createdAt: "2021-08-21",
            paymentDue: "2021-09-20",
            description: "Graphic Design",
            paymentTerms: 30,
            clientName: "Alex Grim",
            clientEmail: "alexgrim@mail.com",
            status: "pending",
            senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom"
            },
            clientAddress: {
                street: "84 Church Way",
                city: "Bradford",
                postCode: "BD1 9PB",
                country: "United Kingdom"
            },
            items: [
                {
                    name: "Banner Design",
                    quantity: 1,
                    price: 156,
                    total: 156
                },
                {
                    name: "Email Design",
                    quantity: 2,
                    price: 200,
                    total: 400
                }, 
            ],
            total: 556
        },
        {
            id: "RG0314",
            createdAt: "2021-09-24",
            paymentDue: "2021-10-01",
            description: "Website Redesign",
            paymentTerms: 7,
            clientName: "John Morrison",
            clientEmail: "jm@myco.com",
            status: "paid",
            senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom"
            },
            clientAddress: {
                street: "79 Dover Road",
                city: "Westhall",
                postCode: "IP19 3PF",
                country: "United Kingdom"
            },
            items: [
                {
                    name: "Website Redesign",
                    quantity: 1,
                    price: 14002.33,
                    total: 14002.33
                }, 
            ],
            total: 14002.33
        },
        {
            id: "RT2080",
            createdAt: "2021-10-11",
            paymentDue: "2021-10-12",
            description: "Logo Concept",
            paymentTerms: 1,
            clientName: "Alysa Werner",
            clientEmail: "alysa@email.co.uk",
            status: "pending",
            senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom"
            },
            clientAddress: {
                street: "63 Warwick Road",
                city: "Carlisle",
                postCode: "CA20 2TG",
                country: "United Kingdom"
            },
            items: [
                {
                    name: "Logo Sketches",
                    quantity: 1,
                    price: 102.04,
                    total: 102.04
                }, 
            ],
            total: 102.04
        },
        {
            id: "AA1449",
            createdAt: "2021-10-7",
            paymentDue: "2021-10-14",
            description: "Re-branding",
            paymentTerms: 7,
            clientName: "Mellisa Clarke",
            clientEmail: "mellisa.clarke@example.com",
            status: "pending",
            senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom"
            },
            clientAddress: {
                street: "46 Abbey Row",
                city: "Cambridge",
                postCode: "CB5 6EG",
                country: "United Kingdom"
            },
            items: [
                {
                    name: "New Logo",
                    quantity: 1,
                    price: 1532.33,
                    total: 1532.33
                },
                {
                    name: "Brand Guidelines",
                    quantity: 1,
                    price: 2500,
                    total: 2500
                }, 
            ],
            total: 4032.33
        },
        {
            id: "TY9141",
            createdAt: "2021-10-01",
            paymentDue: "2021-10-31",
            description: "Landing Page Design",
            paymentTerms: 30,
            clientName: "Thomas Wayne",
            clientEmail: "thomas@dc.com",
            status: "pending",
            senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom"
            },
            clientAddress: {
                street: "3964  Queens Lane",
                city: "Gotham",
                postCode: "60457",
                country: "United States of America"
            },
            items: [
                {
                    name: "Web Design",
                    quantity: 1,
                    price: 6155.91,
                    total: 6155.91
                }, 
            ],
            total: 6155.91
        },
        {
            id: "FV2353",
            createdAt: "2021-11-05",
            paymentDue: "2021-11-12",
            description: "Logo Re-design",
            paymentTerms: 7,
            clientName: "Anita Wainwright",
            clientEmail: "",
            status: "draft",
            senderAddress: {
                street: "19 Union Terrace",
                city: "London",
                postCode: "E1 3EZ",
                country: "United Kingdom"
            },
            clientAddress: {
                street: "",
                city: "",
                postCode: "",
                country: ""
            },
            items: [
                {
                    name: "Logo Re-design",
                    quantity: 1,
                    price: 3102.04,
                    total: 3102.04
                }, 
            ],
            total: 3102.04
        }, 
    ];
    if (getData("invoices") === null) localStorage.setItem("invoices", JSON.stringify(stateInitData));
};
const formDataFormat = {
    id: "defualt",
    createdAt: "default",
    paymentDue: "default",
    description: "defualt",
    paymentTerms: 1,
    clientName: "default",
    clientEmail: "default",
    status: "draft",
    senderAddress: {
        street: "default",
        city: "default",
        postCode: "default",
        country: "default"
    },
    clientAddress: {
        street: "default",
        city: "default",
        postCode: "default",
        country: "default"
    },
    items: [
        {
            name: "default",
            quantity: 0,
            price: 0,
            total: 0
        }, 
    ],
    total: 0
};
const getData = (name)=>{
    if (localStorage.getItem(name) === null) return null;
    return JSON.parse(localStorage.getItem(name).replaceAll("%23", "#"));
};
const saveToLocalStorage = (data)=>{
    if (getData("invoices") === null) {
        localStorage.setItem("invoices", JSON.stringify([
            data
        ]));
        return;
    }
    if (getData("invoices") !== null) {
        let tempArr = [
            ...getData("invoices")
        ];
        tempArr.unshift(data);
        localStorage.setItem("invoices", JSON.stringify(tempArr));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"jHezo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("../helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
var _invoiceDetailsViewJs = require("./invoiceDetailsView.js");
var _invoiceDetailsViewJsDefault = parcelHelpers.interopDefault(_invoiceDetailsViewJs);
var _illustrationEmptySvg = require("url:../../assets/illustration-empty.svg");
var _illustrationEmptySvgDefault = parcelHelpers.interopDefault(_illustrationEmptySvg);
var _iconArrowRightSvg = require("url:../../assets/icon-arrow-right.svg");
var _iconArrowRightSvgDefault = parcelHelpers.interopDefault(_iconArrowRightSvg);
class InvoiceViewPanel {
    invoiceControlContainer = document.querySelector(".invoice-control-container");
    populateContainer = document.querySelector(".invoice-view-container-populate");
    invoiceAmountText = document.querySelector(".amount-of-invoices");
    openFilterArea = document.querySelector(".filter-text-and-filter-btn-container");
    filterByStatusContainer = document.querySelector(".filter-by-status-container");
    filterByArrowBtn = document.querySelector(".filter-by-status");
    addHandlerRender(event, invoices) {
        window.addEventListener(event, this.renderInvoices(invoices));
    }
    addFilterByFunctionality() {
        var self = this;
        this.filterByArrowBtn.addEventListener("click", this._showFilterByContainer.bind(this));
        this.filterByStatusContainer.addEventListener("click", function(e) {
            const input = e.target.closest(".checkbox-container")?.querySelector("input");
            if (!input?.classList) return; // since we are clicking on the filter by container, we need to make sure that what we are clicking has some type of classlist, making sure that we are only running this if we are actually clicking on an input square.
            const allOtherInputs = [
                ...this.querySelectorAll("input")
            ].filter((inp)=>inp !== input
            );
            if (input.hasAttribute("checked")) input.removeAttribute("checked");
            self.renderInvoices(self._filterInvoicesByStatus("none"));
            self._hideFilterByContainer();
            if (!input.hasAttribute("checked")) input.setAttribute("checked", "checked");
            self.renderInvoices(self._filterInvoicesByStatus(input.value));
            self._hideFilterByContainer();
            allOtherInputs.forEach((inp)=>inp.removeAttribute("checked")
            );
        });
    }
    _showFilterByContainer() {
        if (_helpersJsDefault.default.getLocalStorageData("invoices") === null) return; // only want to "show" this container if there is data to filter by
        this.filterByStatusContainer.style.display = "flex";
        this.filterByArrowBtn.style.transform = "rotate(180deg)";
    }
    _hideFilterByContainer() {
        this.filterByStatusContainer.style.display = "none";
        this.filterByArrowBtn.style.transform = "rotate(360deg)";
    }
    _filterInvoicesByStatus(status) {
        const invoices = _helpersJsDefault.default.getLocalStorageData("invoices");
        const filteredInvoices = {
            draftInvoices: invoices.filter((inv)=>inv.status === "draft"
            ),
            pendingInvoices: invoices.filter((inv)=>inv.status === "pending"
            ),
            paidInvoices: invoices.filter((inv)=>inv.status === "paid"
            )
        };
        if (status === "none") return invoices;
        if (status !== "none") {
            const allInvoiceTypes = [
                "draft",
                "pending",
                "paid"
            ].filter((type)=>type !== status
            );
            const selectedInvoices = filteredInvoices[`${status}Invoices`];
            const allOtherInvoices = allInvoiceTypes.flatMap((type)=>{
                if (filteredInvoices[`${type}Invoices`] !== undefined) return filteredInvoices[`${type}Invoices`];
            });
            return selectedInvoices.concat(allOtherInvoices);
        }
    }
    renderInvoices(invoices) {
        const html = this._generateMarkup(invoices === null ? [] : invoices);
        this.populateContainer.innerHTML = "";
        this.populateContainer.insertAdjacentHTML("afterbegin", html);
        this._addIndividualInvoiceHandler(invoices);
        if (invoices === null) {
            this.invoiceAmountText.innerHTML = `No Invoices`;
            localStorage.clear();
            return;
        }
        if (invoices.length > 0) this.invoiceAmountText.innerHTML = `${invoices.length} Invoices`;
        if (invoices.length === 1) this.invoiceAmountText.innerHTML = `${invoices.length} Invoice`;
    }
    _addIndividualInvoiceHandler(invoices) {
        this.populateContainer.addEventListener("click", this._viewInvoiceDetails.bind(this, invoices));
    }
    _viewInvoiceDetails(invoices, e) {
        if (!e.target.closest(".invoice") || !invoices) return;
        const invoiceId = e.target.closest(".invoice").dataset.id;
        const invoiceData = invoices.find((inv)=>inv.id === invoiceId
        );
        this._toggleInvoicePanelVisibility();
        _invoiceDetailsViewJsDefault.default.toggleInvoiceDetailsVisibility();
        _invoiceDetailsViewJsDefault.default.renderInvoiceDetails(invoiceData);
    }
    _toggleInvoicePanelVisibility() {
        this.invoiceControlContainer.style.display = "none";
        this.populateContainer.style.display = "none";
    }
    _generateMarkup(invoices) {
        if (invoices.length === 0) return `<div class="no-invoices-container">\n        <div class="empty-illustration-image-container">\n          <img\n            src="${_illustrationEmptySvgDefault.default}"\n            alt="empty folder illustration"\n            class="empty-illustration-svg"\n          />\n        </div>\n        <div class="no-invoices-text-container">\n          <h2 class="there-is-nothing-here-text no-marg-padd">\n            There is nothing here\n          </h2>\n          <div class="create-an-invoice-text body-1">\n            Create an invoice by clicking the <br />\n            <b>New</b> button and get started\n          </div>\n        </div>\n      </div> `;
        const html = [];
        invoices.forEach((invoice)=>{
            const id = invoice.id;
            const dueDate = _helpersJsDefault.default.formatDate(invoice?.paymentDue);
            const invoiceRecipient = invoice.clientName;
            const invoiceTotal = invoice.total;
            //   capitalizing the first letter
            const invoiceStateText = invoice.status[0].toUpperCase() + invoice.status.slice(1);
            const individualInvoiceMarkup = `\n    <div class="invoice" data-id="${id}">\n        <h4 class="invoice-id no-marg-padd">\n        <hash>#</hash><id>${id}</id>\n        </h4>\n        <div class="invoice-due-date body-1">\n        <due>Due</due> <date>${dueDate}</date>\n        </div>\n        <div class="invoice-recipient body-1">${invoiceRecipient}</div>\n        <h3 class="invoice-total no-marg-padd">$ ${invoiceTotal?.toFixed(2)}</h3>\n        <div class="invoice-status-visual-container ${invoiceStateText}">\n        <div class="invoice-status-circle ${invoiceStateText}"></div>\n        <h4 class="invoice-state-text ${invoiceStateText}">${invoiceStateText}</h4>\n        </div>\n        <div class="view-invoice-btn">\n        <img\n            src="${_iconArrowRightSvgDefault.default}"\n            alt="view invoice details button"\n            class="arrow-right"/>\n        </div>\n  </div>`;
            html.push(individualInvoiceMarkup);
        });
        return html.join("");
    }
    _formatDateForInvoiceDetails(date) {
        const options = {
            month: "long",
            day: "numeric",
            year: "numeric"
        };
        const dateArray = new Date(date).toLocaleDateString("en-US", options).replaceAll(",", "").split(" ");
        //   1 is day, 0 is month, 2 is year
        return `${dateArray[1]} ${dateArray[0]} ${dateArray[2]}`;
    }
}
exports.default = new InvoiceViewPanel();

},{"../helpers.js":"rp8EA","./invoiceDetailsView.js":"hzoFa","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../assets/illustration-empty.svg":"7bYUI","url:../../assets/icon-arrow-right.svg":"bPWFy"}],"rp8EA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = helpers = {
    formatDate: (date)=>{
        const options = {
            month: "short",
            day: "numeric",
            year: "numeric"
        };
        // returning a formatted date based on the date provided
        return new Date(date).toLocaleDateString("en-US", options).replaceAll(",", "");
    },
    getLocalStorageData: (name)=>{
        if (localStorage.getItem(name) === null) return null;
        return JSON.parse(localStorage.getItem(name).replaceAll("%23", "#"));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hzoFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modelJs = require("../model.js");
var _invoicePanelViewJs = require("./invoicePanelView.js");
var _invoicePanelViewJsDefault = parcelHelpers.interopDefault(_invoicePanelViewJs);
var _editInvoiceViewJs = require("./editInvoiceView.js");
var _editInvoiceViewJsDefault = parcelHelpers.interopDefault(_editInvoiceViewJs);
class InvoiceDetailsView {
    viewInvoiceContainer = document.querySelector(".view-invoice-container");
    _statusContainer = document.querySelector(".view-invoice-status-edit-delete-container");
    _invoiceDetailsContainer = document.querySelector(".invoice-description-container");
    _mobileStatusContainer = document.querySelector(".status-text-mobile-container");
    _editDeleteMarkPaidMobile = document.querySelector(".edit-delete-markaspaid-container-mobile");
    _invoiceControlContainer = document.querySelector(".invoice-control-container");
    _populateContainer = document.querySelector(".invoice-view-container-populate");
    toggleInvoiceDetailsVisibility() {
        this.viewInvoiceContainer.style.display = "flex";
    }
    _toggleInvoiceDetailsVisibilityNone() {
        this.viewInvoiceContainer.style.display = "none";
        this._invoiceControlContainer.style.display = "flex";
        this._populateContainer.style.display = "flex";
        this._editDeleteMarkPaidMobile.style.display = "none";
    }
    _addMediaQueryFlexToNone(element, condition) {
        let checkIfConditionSatisfies = (x)=>{
            x.matches ? element.style.display = "flex !important" : element.style.display = "none !important";
        };
        let x = window.matchMedia(condition);
        checkIfConditionSatisfies(x);
        x.addEventListener("change", checkIfConditionSatisfies);
    }
    renderInvoiceDetails(invoice) {
        this._addMediaQueryFlexToNone(this._editDeleteMarkPaidMobile, "(max-width: 37.5rem)");
        this._statusContainer.innerHTML = "";
        this._mobileStatusContainer.innerHTML = "";
        this._invoiceDetailsContainer.innerHTML = "";
        this._statusContainer.innerHTML = this._generateStatusHtml(invoice);
        this._mobileStatusContainer.innerHTML = this._generateStatusHtml(invoice, true);
        this._invoiceDetailsContainer.innerHTML = this._generateDetailsHtml(invoice);
        // had to search the dom after calling these generate html functions because the class ".delete-btn" did not exist until those functions finished executing
        const deleteBtn = document.querySelector(".delete-btn");
        const deleteBtnMobile = document.querySelector(".delete-btn-mobile-container");
        const modal = document.querySelector(".modal-background");
        const markAsPaidBtn = document.querySelector(".mark-paid-btn");
        const markAsPaidBtnMobile = document.querySelector(".markaspaid-btn-mobile-container");
        const editBtn = document.querySelector(".edit-btn");
        const editBtnMobile = document.querySelector(".edit-btn-mobile-container");
        const deleteBtns = [
            deleteBtnMobile,
            deleteBtn
        ];
        const markAsPaidBtns = [
            markAsPaidBtnMobile,
            markAsPaidBtn
        ];
        const editBtns = [
            editBtn,
            editBtnMobile
        ];
        deleteBtns.forEach((btn)=>btn?.addEventListener("click", this._openDeleteModal.bind(this, modal, invoice?.id))
        );
        markAsPaidBtns.forEach((btn)=>btn?.addEventListener("click", this._markAsPaid.bind(this, invoice))
        );
        this._editInvoice(editBtns, invoice);
        this._addGoBackFunctionality();
        this._editDeleteMarkPaidMobile.style.display = "flex";
    }
    _markAsPaid(invoice) {
        const invoices = _modelJs.getData("invoices");
        const index = invoices.findIndex((inv)=>inv.id === invoice?.id
        );
        invoices[index].status = "paid";
        localStorage.setItem("invoices", JSON.stringify(invoices));
        this.renderInvoiceDetails(invoices[index]);
    }
    _openDeleteModal(modal, invoiceId) {
        modal.style.display = "flex";
        const modalId = document.querySelector(".deltion-invoice-id");
        modalId.innerHTML = `#${invoiceId}?`;
        modal.addEventListener("click", this._closeDeleteModal.bind(this, modal, invoiceId));
    }
    _closeDeleteModal(modal, id, e) {
        const elClass = e.target.classList[0];
        if (elClass === "modal-background" || elClass === "cancel-deletion-btn-container" || elClass === "cancel-deletion-btn-text") modal.style.display = "none";
        if (elClass === "delete-invoice-btn-container" || elClass === "delete-invoice-btn-text") {
            const invoices = _modelJs.getData("invoices");
            const alteredInvoices = invoices.filter((inv)=>inv.id !== id
            );
            if (alteredInvoices.length === 0) {
                localStorage.setItem("invoices", null);
                _invoicePanelViewJsDefault.default.renderInvoices(null);
                _invoicePanelViewJsDefault.default.addFilterByFunctionality();
            }
            if (alteredInvoices.length > 0) {
                localStorage.setItem("invoices", JSON.stringify(alteredInvoices));
                _invoicePanelViewJsDefault.default.renderInvoices(alteredInvoices);
            }
            modal.style.display = "none";
            this._toggleInvoiceDetailsVisibilityNone();
        }
    }
    _generateDetailsHtml(invoice) {
        const billFromAddress = {
            street: invoice?.senderAddress.street,
            city: invoice?.senderAddress.city,
            postCode: invoice?.senderAddress.postCode,
            country: invoice?.senderAddress.country
        };
        const billToAddress = {
            clientName: invoice?.clientName,
            clientEmail: invoice?.clientEmail,
            street: invoice?.clientAddress.street,
            city: invoice?.clientAddress.city,
            postCode: invoice?.clientAddress.postCode,
            country: invoice?.clientAddress.country
        };
        return `\n    <div class="id-description-and-sender-address-container">\n    <div class="id-and-description-container">\n      <h3 class="invoice-id no-marg-padd">#${invoice?.id}</h3>\n      <div class="product-description body-1">${invoice?.description}</div>\n    </div>\n    <div class="bill-from-address-container body-2 column">\n      <div class="bill-from-street-address">${billFromAddress.street}</div>\n      <div class="bill-from-city">${billFromAddress.city}</div>\n      <div class="bill-from-postal-code">${billFromAddress.postCode}</div>\n      <div class="bill-from-country">${billFromAddress.country}</div>\n    </div>\n  </div>\n  <div class="invoice-date-and-payment-due-billto-sentto-container">\n    <div class="invoice-date-payment-due-container">\n      <div class="invoice-date-container">\n        <div class="invoice-date-text body-1">Invoice Created On</div>\n        <h4 class="invoice-date no-marg-padd">${this._formatDateForInvoiceDetails(invoice?.createdAt)}</h4>\n      </div>\n      <div class="payment-due-container">\n        <div class="payment-due-text body-1">Payment Due</div>\n        <h4 class="payment-due-date no-marg-padd">${this._formatDateForInvoiceDetails(invoice?.paymentDue)}</h4>\n      </div>\n    </div>\n\n    <div class="bill-to-container">\n      <div class="bill-to-text body-1">Bill to</div>\n      <h4 class="clients-name no-marg-padd">${billToAddress.clientName}</h4>\n      <div class="bill-to-address-container body-2">\n        <div class="clients-street">${billToAddress.street}</div>\n        <div class="clients-city">${billToAddress.city}</div>\n        <div class="clients-postal-code">${billToAddress.postCode}</div>\n        <div class="clients-country">${billToAddress.country}</div>\n      </div>\n    </div>\n\n    <div class="sent-to-container">\n      <div class="sent-to-text body-1">Sent to</div>\n      <h4 class="recipients-email no-marg-padd">\n        ${billToAddress.clientEmail}\n      </h4>\n    </div>\n  </div>\n\n  <div class="amount-due-container">\n    <div class="item-name-price-total-text-container">\n      <div class="item-name-text body-2">Item Name</div>\n      <div class="quantity-text body-2">QTY.</div>\n      <div class="price-text body-2">Price</div>\n      <div class="total-text body-2">Total</div>\n    </div>\n\n    ${this._generateItemsHtml(invoice)}\n\n    <div class="amount-due-banner-container">\n      <div class="amount-due-banner-text-container">\n        <div class="amount-due-text body-2" id="text-white">\n          Amount Due\n        </div>\n        <h1 class="total-amount-due">$ ${invoice?.total?.toFixed(2)}</h1>\n      </div>\n    </div>\n  </div>`;
    }
    _generateStatusHtml(invoice, mobileView) {
        const invoiceStatus = this._capitalizeFirstLetter(invoice?.status.trim());
        if (mobileView) {
            this._updateMobileEditContainer(invoiceStatus);
            return ` \n          <div class="status-text-mobile-container">\n            <div class="status-text-mobile body-1">Status</div>\n            <div class="status-visual-container ${invoiceStatus} status-visual-container-mobile">\n            <div class="status-circle ${invoiceStatus}"></div>\n            <h4 class="state-text ${invoiceStatus}">${invoiceStatus}</h4>\n            </div>\n          </div>`;
        }
        if (!mobileView) return `\n      <div class="status-container">\n      <div class="status-text body-1">Status</div>\n      <div class="status-visual-container ${invoiceStatus}">\n          <div class="status-circle ${invoiceStatus}"></div>\n          <h4 class="state-text ${invoiceStatus}">${invoiceStatus}</h4>\n      </div>\n      </div>\n  \n      <div class="edit-delete-mark-paid-container">\n          \n\n          ${invoiceStatus !== "Paid" ? ` <div class="edit-btn btn-common">\n          <h4 class="edit-text">Edit</h4>\n      </div>` : ""}\n\n          <div class="delete-btn btn-common">\n              <h4 class="delete-text">Delete</h4>\n          </div>\n  \n          ${invoiceStatus !== "Paid" ? ` <div class="mark-paid-btn btn-common"> <h4 class="mark-as-paid-text">Mark as Paid</h4> </div>` : ""}\n         \n      </div>\n      `;
    }
    _updateMobileEditContainer(invoiceStatus) {
        this._editDeleteMarkPaidMobile.innerHTML = "";
        this._editDeleteMarkPaidMobile.innerHTML = `\n\n    ${invoiceStatus !== "Paid" ? `\n     <div class="edit-btn-mobile-container">\n       <h4 class="edit-btn-mobile-text no-marg-padd">Edit</h4>\n     </div>` : ""}\n       \n  \n     <div class="delete-mark-as-paid-container-right-mobile">\n          <div class="delete-btn-mobile-container">\n            <h4 class="delete-btn-mobile-text no-marg-padd">Delete</h4>\n          </div>\n\n          ${invoiceStatus !== "Paid" ? ` \n          <div class="markaspaid-btn-mobile-container">\n          <h4 class="mark-as-paid-btn-mobile-text no-marg-padd">\n            Mark as Paid\n          </h4>\n        </div>` : ""}\n         \n\n    </div>\n    `;
    }
    _generateItemsHtml(invoice) {
        const html = [];
        invoice?.items.forEach((item)=>{
            html.push(`\n      <div class="item-name-price-total-container">\n        <div class="name-price-total-container-mobile">\n            <h4 class="item-name no-marg-padd">${item.name}</h4>\n            <div class="quantity-price-container-mobile">\n            <h4 class="quantity no-marg-padd">${item.quantity}</h4>\n            <div class="custom-x-container">\n                <h4 class="custom-x no-marg-padd">x</h4>\n            </div>\n            <h4 class="price no-marg-padd">$ ${item?.price?.toFixed(2)}</h4>\n            </div>\n        </div>\n        <h4 class="total no-marg-padd">$ ${item?.total?.toFixed(2)}</h4>\n    </div>\n    `);
        });
        return html.join("");
    }
    _capitalizeFirstLetter(string) {
        if (!string) return "Draft";
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    _formatDateForInvoiceDetails(date) {
        const options = {
            month: "long",
            day: "numeric",
            year: "numeric"
        };
        const dateArray = new Date(date).toLocaleDateString("en-US", options).replaceAll(",", "").split(" ");
        //   1 is day, 0 is month, 2 is year
        return `${dateArray[1]} ${dateArray[0]} ${dateArray[2]}`;
    }
    _addGoBackFunctionality() {
        const goBackArrow = document.querySelector(".go-back-arrow-icon-btn");
        const goBackText = document.querySelector(".go-back-text");
        self = this;
        [
            goBackText,
            goBackArrow
        ].forEach((elmt)=>elmt.addEventListener("click", function() {
                _invoicePanelViewJsDefault.default.renderInvoices(_modelJs.getData("invoices"));
                self._toggleInvoiceDetailsVisibilityNone();
            })
        );
    }
    _editInvoice(editBtns, invoice) {
        editBtns.forEach((btn)=>btn?.addEventListener("click", function() {
                _editInvoiceViewJsDefault.default._openInvoiceForm(invoice);
            })
        );
    }
}
exports.default = new InvoiceDetailsView();

},{"../model.js":"D9OB3","./invoicePanelView.js":"jHezo","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./editInvoiceView.js":"aoz1A"}],"aoz1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconDeleteSvg = require("url:../../assets/icon-delete.svg");
var _iconDeleteSvgDefault = parcelHelpers.interopDefault(_iconDeleteSvg);
var _nanoid = require("nanoid");
var _helpersJs = require("../helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
const newItemHtml = `\n<div class="item-container">\n<div class="item-name-container">\n  <div class="item-name-text body-1">Item Name</div>\n  <input type="text" name="item-name" id="item-name">\n</div>\n<div class="item-quantity-container">\n  <div class="item-quantity-text body-1">QTY.</div>\n  <input type="text" name="item-quantity" id="item-quantity">\n</div>\n<div class="item-price-container">\n  <div class="item-price-text body-1">Price</div>\n  <input type="text" name="item-price" id="item-price">\n</div>\n<div class="total-text-total-price-container">\n  <div class="total-text-form body-1">Total</div>\n  <h4 class="total-price no-marg-padd">$ 0.00</h4>\n</div>\n<div class="delete-btn-container">\n  <img src="${_iconDeleteSvgDefault.default}" alt="delete item button" class="delete-btn-img">\n</div>\n</div>`;
class EditInvoiceView {
    _newInvoiceBtn = document.querySelector(".new-invoice-btn-container-bg");
    _newInvoiceFormContainer = document.querySelector(".new-invoice-form-container");
    _newInvoiceForm = document.querySelector(".new-invoice-form");
    _newInvoiceFormBackground = document.querySelector(".new-invoice-container-background");
    _discardBtn = document.querySelector(".discard-btn-container");
    _discardBtnMobile = document.querySelector(".discard-btn-container-media-mobile");
    _addItemBtn = document.querySelector(".add-new-item-btn-container");
    _newItemContainer = document.querySelector(".item-list-container-populate");
    _saveAsDraftBtn = document.querySelector(".save-as-draft--btn-container");
    _formItemElements = this._newInvoiceForm.querySelector(".item-list-container-populate").children;
    _allFieldsMustBeEl = document.querySelector(".all-fields-text");
    _saveAsDraftBtnMobile = document.querySelector(".save-as-draft--btn-container-media-mobile");
    _saveAndSendBtn = document.querySelector(".save-and-send-btn-container");
    _saveAndSendBtnMobile = document.querySelector(".save-and-send-btn-container-media-mobile");
    _openInvoiceForm(invoice) {
        this._changeNewToEdit();
        this._populateInvoice(invoice);
        this._newInvoiceFormContainer.style.display = "unset";
        this._newInvoiceFormBackground.style.display = "unset";
    }
    _addNewInvoiceItem() {
        this._newItemContainer.insertAdjacentHTML("beforeend", newItemHtml);
        this._liveItemTotals();
    }
    addHandlerSaveAsDraft(handler, formDataFormatSaveAsDraft) {
        const self = this;
        this._newInvoiceForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self._saveFormData(handler, formDataFormatSaveAsDraft);
        });
        this._saveAsDraftBtnMobile.addEventListener("click", function() {
            self._saveFormData(handler, formDataFormatSaveAsDraft);
        });
    }
    addHandlerSaveAndSend(handler, formDataFormatSaveAndSend) {
        [
            this._saveAndSendBtnMobile,
            this._saveAndSendBtn
        ].forEach((btn)=>btn.addEventListener("click", this._saveFormData.bind(this, handler, formDataFormatSaveAndSend, true))
        );
    }
    _saveFormData(handler, dataObjectReference, isPending) {
        // creating a copy of the object which has format I want. Just in case I want to change that format or add something to that format in the future
        let dataObjectInstance = JSON.parse(JSON.stringify(dataObjectReference));
        // adding a unique id to each invoice
        dataObjectInstance.id = _nanoid.nanoid(6).toUpperCase().replace(/_|-/g, "U");
        //adding the date which the invoice was created
        dataObjectInstance.createdAt = _helpersJsDefault.default.formatDate(new Date());
        if (isPending) dataObjectInstance.status = "pending";
        const form = this._newInvoiceForm;
        const formElements = [
            ...form.elements
        ];
        //filtering and classifying the form data
        formElements.forEach((el)=>{
            let name = encodeURIComponent(el.name);
            let value = encodeURIComponent(el.value).replaceAll("%20", " ").replaceAll("%40", "@");
            switch(name){
                case "invoice-date":
                    dataObjectInstance.paymentDue = value;
                    break;
                case "project-description":
                    dataObjectInstance.description = value;
                    break;
                case "payment-terms":
                    dataObjectInstance.paymentTerms = value;
                    break;
                case "bill-to-clients-name":
                    dataObjectInstance.clientName = value;
                    break;
                case "bill-to-clients-email":
                    dataObjectInstance.clientEmail = value;
                    break;
                case "bill-from-street-address":
                    dataObjectInstance.senderAddress.street = value;
                    break;
                case "bill-from-city":
                    dataObjectInstance.senderAddress.city = value;
                    break;
                case "bill-from-postal-code":
                    dataObjectInstance.senderAddress.postCode = value;
                    break;
                case "bill-from-country":
                    dataObjectInstance.senderAddress.country = value;
                    break;
                case "bill-to-clients-street-address":
                    dataObjectInstance.clientAddress.street = value;
                    break;
                case "bill-to-city":
                    dataObjectInstance.clientAddress.city = value;
                    break;
                case "bill-to-postal-code":
                    dataObjectInstance.clientAddress.postCode = value;
                    break;
                case "bill-to-country":
                    dataObjectInstance.clientAddress.country = value;
                    break;
                case "bill-to-clients-name":
                    dataObjectInstance.clientName = value;
                    break;
                case "bill-to-clients-email":
                    dataObjectInstance.clientEmail = value;
                    break;
            }
        });
        this._formatItemsInForm(dataObjectInstance);
        if (isPending && this._checkIfFormElIsBlank(formElements)) {
            handler(dataObjectInstance);
            this._closeNewInvoiceForm();
        }
        if (!isPending) {
            handler(dataObjectInstance);
            this._closeNewInvoiceForm();
        }
    }
    _formatItemsInForm(dataObjectInstance) {
        let itemsArray = [];
        [
            ...this._formItemElements
        ].forEach((item)=>{
            const individualItem = {
                name: item.querySelector("#item-name").value,
                quantity: +item.querySelector("#item-quantity").value,
                price: +item.querySelector("#item-price").value
            };
            individualItem.total = individualItem.quantity * individualItem.price;
            itemsArray.push(individualItem);
        });
        dataObjectInstance.items = itemsArray;
        this._setInvoiceTotal(itemsArray, dataObjectInstance);
    }
    _setInvoiceTotal(itemsArray, dataObjectInstance) {
        let invoiceTotal = 0;
        itemsArray.forEach((item)=>{
            invoiceTotal += item.total;
        });
        dataObjectInstance.total = invoiceTotal;
    }
    _liveItemTotals(force) {
        [
            ...this._formItemElements
        ].forEach((item)=>{
            const itemTotal = item.querySelector(".total-price");
            const quantity = item.querySelector("#item-quantity");
            const price = item.querySelector("#item-price");
            if (force) itemTotal.innerHTML = `$ ${(price.value * quantity.value).toFixed(2)}`;
            if (!force) [
                price,
                quantity
            ].forEach((el)=>el.addEventListener("input", function() {
                    itemTotal.innerHTML = `$ ${(price.value * quantity.value).toFixed(2)}`;
                })
            );
        });
    }
    _populateInvoice(invoice) {
        console.log(invoice);
        const formElements = [
            ...this._newInvoiceForm.elements
        ];
        // update form elements
        formElements.slice(0, 13).forEach((el)=>{
            let name = encodeURIComponent(el.name);
            switch(name){
                case "bill-from-street-address":
                    el.value = invoice.senderAddress.street;
                    break;
                case "bill-from-city":
                    el.value = invoice.senderAddress.city;
                    break;
                case "bill-from-postal-code":
                    el.value = invoice.senderAddress.postCode;
                    break;
                case "bill-from-country":
                    el.value = invoice.senderAddress.country;
                    break;
                case "bill-to-clients-name":
                    el.value = invoice.clientName;
                    break;
                case "bill-to-clients-email":
                    el.value = invoice.clientEmail;
                    break;
                case "bill-to-clients-street-address":
                    el.value = invoice.clientAddress.street;
                    break;
                case "bill-to-city":
                    el.value = invoice.clientAddress.city;
                    break;
                case "bill-to-postal-code":
                    el.value = invoice.clientAddress.postCode;
                    break;
                case "bill-to-country":
                    el.value = invoice.clientAddress.country;
                    break;
                case "invoice-date":
                    el.value = invoice.paymentDue;
                    break;
                case "project-description":
                    el.value = invoice.description;
                    break;
                case "payment-terms":
                    el.value = `Net ${invoice.paymentTerms} ${invoice.paymentTerms > 1 ? "Days" : "Day"}`;
                    break;
            }
        });
        // update item elements
        // make sure there are the right amount of items in the form before you begin to populate them
        // subtracting one because there is one item in every new invoice by default
        for(let i = 0; i < invoice.items.length - 1; i++)this._addNewInvoiceItem();
        const formItemElements = [
            ...this._newInvoiceForm.elements
        ].slice(13, [
            ...this._newInvoiceForm.elements
        ].length - 1);
        for(let i1 = 0; i1 < invoice.items.length; i1++){
            formItemElements[i1 + 2 * [
                i1
            ]].value = invoice.items[i1].name;
            formItemElements[i1 + 2 * [
                i1
            ] + 1].value = invoice.items[i1].quantity;
            formItemElements[i1 + 2 * [
                i1
            ] + 2].value = invoice.items[i1].price;
        }
        // first iteration 0, 1, 2, ... second iteration 3 4 5, third iteration 6, 7, 8 and so on
        this._liveItemTotals(true);
    // when people go back, create a function that ensures the items are reset back to only one item
    }
    _changeNewToEdit() {
        document.querySelector(".new-invoice-text").textContent = "Edit Invoice";
        document.querySelector(".discard-text").textContent = "Cancel";
        document.querySelector(".discard-text-media-mobile").textContent = "Cancel";
    }
}
exports.default = new EditInvoiceView();

},{"url:../../assets/icon-delete.svg":"fZMsx","nanoid":"f3mBM","../helpers.js":"rp8EA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fZMsx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dncfw') + "icon-delete.8603e37f.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"f3mBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid
);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet
);
parcelHelpers.export(exports, "customRandom", ()=>customRandom
);
parcelHelpers.export(exports, "urlAlphabet", ()=>_indexJs.urlAlphabet
);
parcelHelpers.export(exports, "random", ()=>random
);
// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.
var _indexJs = require("./url-alphabet/index.js");
// All bundlers will remove this block in the production bundle.
if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative' && typeof crypto === 'undefined') throw new Error("React Native does not have a built-in secure random generator. If you don’t need unpredictable IDs use `nanoid/non-secure`. For secure IDs, import `react-native-get-random-values` before Nano ID.");
if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') throw new Error("Import file with `if (!window.crypto) window.crypto = window.msCrypto` before importing Nano ID to fix IE 11 support");
if (typeof crypto === 'undefined') throw new Error("Your browser does not have secure random generator. If you don’t need unpredictable IDs, you can use nanoid/non-secure.");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes))
;
let customRandom = (alphabet, size, getRandom)=>{
    // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
    // values closer to the alphabet size. The bitmask calculates the closest
    // `2^31 - 1` number, which exceeds the alphabet size.
    // For example, the bitmask for the alphabet size 30 is 31 (00011111).
    // `Math.clz32` is not used, because it is not available in browsers.
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    // Though, the bitmask solution is not perfect since the bytes exceeding
    // the alphabet size are refused. Therefore, to reliably generate the ID,
    // the random bytes redundancy has to be satisfied.
    // Note: every hardware random generator call is performance expensive,
    // because the system call for entropy collection takes a lot of time.
    // So, to avoid additional system calls, extra bytes are requested in advance.
    // Next, a step determines how many random bytes to generate.
    // The number of random bytes gets decided upon the ID size, mask,
    // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
    // according to benchmarks).
    // `-~f => Math.ceil(f)` if f is a float
    // `-~i => i + 1` if i is an integer
    let step = -~(1.6 * mask * size / alphabet.length);
    return ()=>{
        let id = '';
        while(true){
            let bytes = getRandom(step);
            // A compact alternative for `for (var i = 0; i < step; i++)`.
            let j = step;
            while(j--){
                // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
                id += alphabet[bytes[j] & mask] || '';
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size)=>customRandom(alphabet, size, random)
;
let nanoid = (size = 21)=>{
    let id = '';
    let bytes = crypto.getRandomValues(new Uint8Array(size));
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    while(size--){
        // It is incorrect to use bytes exceeding the alphabet size.
        // The following mask reduces the random byte in the 0-255 value
        // range to the 0-63 value range. Therefore, adding hacks, such
        // as empty string fallback or magic numbers, is unneccessary because
        // the bitmask trims bytes down to the alphabet size.
        let byte = bytes[size] & 63;
        if (byte < 36) // `0-9a-z`
        id += byte.toString(36);
        else if (byte < 62) // `A-Z`
        id += (byte - 26).toString(36).toUpperCase();
        else if (byte < 63) id += '_';
        else id += '-';
    }
    return id;
};

},{"./url-alphabet/index.js":"jIzVn","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jIzVn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>urlAlphabet
);
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7bYUI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dncfw') + "illustration-empty.bcfb06ab.svg";

},{"./helpers/bundle-url":"8YnfL"}],"bPWFy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('dncfw') + "icon-arrow-right.1a63da95.svg";

},{"./helpers/bundle-url":"8YnfL"}],"h9Y04":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconDeleteSvg = require("url:../../assets/icon-delete.svg");
var _iconDeleteSvgDefault = parcelHelpers.interopDefault(_iconDeleteSvg);
var _nanoid = require("nanoid");
var _helpersJs = require("../helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
const newItemHtml = `\n<div class="item-container">\n<div class="item-name-container">\n  <div class="item-name-text body-1">Item Name</div>\n  <input type="text" name="item-name" id="item-name">\n</div>\n<div class="item-quantity-container">\n  <div class="item-quantity-text body-1">QTY.</div>\n  <input type="text" name="item-quantity" id="item-quantity">\n</div>\n<div class="item-price-container">\n  <div class="item-price-text body-1">Price</div>\n  <input type="text" name="item-price" id="item-price">\n</div>\n<div class="total-text-total-price-container">\n  <div class="total-text-form body-1">Total</div>\n  <h4 class="total-price no-marg-padd">$ 0.00</h4>\n</div>\n<div class="delete-btn-container">\n  <img src="${_iconDeleteSvgDefault.default}" alt="delete item button" class="delete-btn-img">\n</div>\n</div>`;
class NewInvoiceView {
    _newInvoiceBtn = document.querySelector(".new-invoice-btn-container-bg");
    _newInvoiceFormContainer = document.querySelector(".new-invoice-form-container");
    _newInvoiceForm = document.querySelector(".new-invoice-form");
    _newInvoiceFormBackground = document.querySelector(".new-invoice-container-background");
    _discardBtn = document.querySelector(".discard-btn-container");
    _discardBtnMobile = document.querySelector(".discard-btn-container-media-mobile");
    _addItemBtn = document.querySelector(".add-new-item-btn-container");
    _newItemContainer = document.querySelector(".item-list-container-populate");
    _saveAsDraftBtn = document.querySelector(".save-as-draft--btn-container");
    _formItemElements = this._newInvoiceForm.querySelector(".item-list-container-populate").children;
    _allFieldsMustBeEl = document.querySelector(".all-fields-text");
    _saveAsDraftBtnMobile = document.querySelector(".save-as-draft--btn-container-media-mobile");
    _saveAndSendBtn = document.querySelector(".save-and-send-btn-container");
    _saveAndSendBtnMobile = document.querySelector(".save-and-send-btn-container-media-mobile");
    addHandlersWhenFormIsOpen() {
        this._newInvoiceBtn.addEventListener("click", this._openNewInvoiceForm.bind(this));
        [
            this._newInvoiceFormBackground,
            this._discardBtn,
            this._discardBtnMobile, 
        ].forEach((element)=>{
            element.addEventListener("click", this._closeNewInvoiceForm.bind(this));
        });
        this._addItemBtn.addEventListener("click", this._addNewInvoiceItem.bind(this));
        this._newItemContainer.addEventListener("click", this._deleteItem.bind(this));
        this._liveItemTotals();
    }
    _openNewInvoiceForm() {
        this._newInvoiceFormContainer.style.display = "unset";
        this._newInvoiceFormBackground.style.display = "unset";
    }
    _closeNewInvoiceForm() {
        this._newInvoiceFormContainer.style.display = "none";
        this._newInvoiceFormBackground.style.display = "none";
        this._clearAllInputFields();
    }
    _clearAllInputFields() {
        let elements = [
            ...document.getElementsByTagName("input")
        ];
        elements.forEach((el)=>{
            el.type == "text" && (el.value = "");
            el.style.border = "1px solid var(--clr-input-border)";
        });
        this._allFieldsMustBeEl.style.display = "none";
        this._addItemBtn.style.marginBottom = "100px";
        this._liveItemTotals(true);
    }
    _addNewInvoiceItem() {
        this._newItemContainer.insertAdjacentHTML("beforeend", newItemHtml);
        this._liveItemTotals();
    }
    _deleteItem(e) {
        //   since we are using event delegation we need filter for the correct element
        if (e.target.classList[0] !== "delete-btn-img") return;
        const relativeToBtnItem = e.target.parentNode.parentNode;
        // there has to be at least one item in the items container
        if (this._newItemContainer.children.length !== 1) relativeToBtnItem.remove();
    }
    addHandlerSaveAsDraft(handler, formDataFormatSaveAsDraft) {
        const self = this;
        this._newInvoiceForm.addEventListener("submit", function(e) {
            e.preventDefault();
            self._saveFormData(handler, formDataFormatSaveAsDraft);
        });
        this._saveAsDraftBtnMobile.addEventListener("click", function() {
            self._saveFormData(handler, formDataFormatSaveAsDraft);
        });
    }
    addHandlerSaveAndSend(handler, formDataFormatSaveAndSend) {
        [
            this._saveAndSendBtnMobile,
            this._saveAndSendBtn
        ].forEach((btn)=>btn.addEventListener("click", this._saveFormData.bind(this, handler, formDataFormatSaveAndSend, true))
        );
    }
    _saveFormData(handler, dataObjectReference, isPending) {
        // creating a copy of the object which has format I want. Just in case I want to change that format or add something to that format in the future
        let dataObjectInstance = JSON.parse(JSON.stringify(dataObjectReference));
        // adding a unique id to each invoice
        dataObjectInstance.id = _nanoid.nanoid(6).toUpperCase().replace(/_|-/g, "U");
        //adding the date which the invoice was created
        dataObjectInstance.createdAt = _helpersJsDefault.default.formatDate(new Date());
        if (isPending) dataObjectInstance.status = "pending";
        const form = this._newInvoiceForm;
        const formElements = [
            ...form.elements
        ];
        //filtering and classifying the form data
        formElements.forEach((el)=>{
            let name = encodeURIComponent(el.name);
            let value = encodeURIComponent(el.value).replaceAll("%20", " ").replaceAll("%40", "@");
            switch(name){
                case "invoice-date":
                    dataObjectInstance.paymentDue = value;
                    break;
                case "project-description":
                    dataObjectInstance.description = value;
                    break;
                case "payment-terms":
                    dataObjectInstance.paymentTerms = value;
                    break;
                case "bill-to-clients-name":
                    dataObjectInstance.clientName = value;
                    break;
                case "bill-to-clients-email":
                    dataObjectInstance.clientEmail = value;
                    break;
                case "bill-from-street-address":
                    dataObjectInstance.senderAddress.street = value;
                    break;
                case "bill-from-city":
                    dataObjectInstance.senderAddress.city = value;
                    break;
                case "bill-from-postal-code":
                    dataObjectInstance.senderAddress.postCode = value;
                    break;
                case "bill-from-country":
                    dataObjectInstance.senderAddress.country = value;
                    break;
                case "bill-to-clients-street-address":
                    dataObjectInstance.clientAddress.street = value;
                    break;
                case "bill-to-city":
                    dataObjectInstance.clientAddress.city = value;
                    break;
                case "bill-to-postal-code":
                    dataObjectInstance.clientAddress.postCode = value;
                    break;
                case "bill-to-country":
                    dataObjectInstance.clientAddress.country = value;
                    break;
                case "bill-to-clients-name":
                    dataObjectInstance.clientName = value;
                    break;
                case "bill-to-clients-email":
                    dataObjectInstance.clientEmail = value;
                    break;
            }
        });
        this._formatItemsInForm(dataObjectInstance);
        if (isPending && this._checkIfFormElIsBlank(formElements)) {
            handler(dataObjectInstance);
            this._closeNewInvoiceForm();
        }
        if (!isPending) {
            handler(dataObjectInstance);
            this._closeNewInvoiceForm();
        }
    }
    _formatItemsInForm(dataObjectInstance) {
        let itemsArray = [];
        [
            ...this._formItemElements
        ].forEach((item)=>{
            const individualItem = {
                name: item.querySelector("#item-name").value,
                quantity: +item.querySelector("#item-quantity").value,
                price: +item.querySelector("#item-price").value
            };
            individualItem.total = individualItem.quantity * individualItem.price;
            itemsArray.push(individualItem);
        });
        dataObjectInstance.items = itemsArray;
        this._setInvoiceTotal(itemsArray, dataObjectInstance);
    }
    _setInvoiceTotal(itemsArray, dataObjectInstance) {
        let invoiceTotal = 0;
        itemsArray.forEach((item)=>{
            invoiceTotal += item.total;
        });
        dataObjectInstance.total = invoiceTotal;
    }
    _liveItemTotals(bool) {
        [
            ...this._formItemElements
        ].forEach((item)=>{
            const itemTotal = item.querySelector(".total-price");
            if (bool) this._clearItemTotals(itemTotal);
            const quantity = item.querySelector("#item-quantity");
            const price = item.querySelector("#item-price");
            [
                price,
                quantity
            ].forEach((el)=>el.addEventListener("input", function() {
                    itemTotal.innerHTML = `$ ${(price.value * quantity.value).toFixed(2)}`;
                })
            );
        });
    }
    _clearItemTotals(itemTotal) {
        itemTotal.innerHTML = `$ 0.00`;
    }
    _checkIfFormElIsBlank(formElements) {
        const arr = [];
        formElements.slice(0, -1).forEach((el)=>{
            if (el.value === "") {
                arr.push(1);
                el.style.border = "1px solid red";
            }
            if (el.value !== "") // arr.push(0);
            el.style.border = "1px solid var(--clr-input-border)";
        });
        if (arr.includes(1)) {
            this._allFieldsMustBeEl.style.display = "flex";
            this._addItemBtn.style.marginBottom = "10px";
        }
        if (!arr.includes(1)) {
            this._allFieldsMustBeEl.style.display = "none";
            return true;
        }
    }
}
exports.default = new NewInvoiceView();

},{"../helpers.js":"rp8EA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../assets/icon-delete.svg":"fZMsx","nanoid":"f3mBM"}]},["bboKq","5qTuD"], "5qTuD", "parcelRequireabc9")

//# sourceMappingURL=index.264e9f96.js.map
