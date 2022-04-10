"use strict";
(self["webpackChunkreactunity_sample"] = self["webpackChunkreactunity_sample"] || []).push([[249],{

/***/ 249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "App": () => (/* binding */ App)
});

// EXTERNAL MODULE: ../../renderer/dist/src/renderer/renderer.js + 3 modules
var renderer = __webpack_require__(1696);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(3792);
// EXTERNAL MODULE: ./src/assets/base64Image.txt
var base64Image = __webpack_require__(7312);
// EXTERNAL MODULE: ./src/assets/bg.png
var bg = __webpack_require__(5878);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(6062);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(4036);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(6793);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(7892);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(1173);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(2464);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[6].use[1]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[6].use[2]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[6].use[3]!./src/uitoolkit/index.module.scss
var index_module = __webpack_require__(2176);
;// CONCATENATED MODULE: ./src/uitoolkit/index.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(index_module/* default */.Z, options);




       /* harmony default export */ const uitoolkit_index_module = (index_module/* default */.Z && index_module/* default.locals */.Z.locals ? index_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4790);
;// CONCATENATED MODULE: ./src/uitoolkit/index.tsx
var webImage='https://www.google.com.tr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';function App(){return/*#__PURE__*/(0,jsx_runtime.jsx)("scroll",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:uitoolkit_index_module.app,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:"React Unity Showcase"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Button"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:uitoolkit_index_module.clickButton,children:"Click"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Anchor"}),/*#__PURE__*/(0,jsx_runtime.jsx)("anchor",{url:"https://www.google.com",children:"Open Google"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Input"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Toggle"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("row",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("toggle",{}),"Toggle"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Image"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("row",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("image",{source:bg}),/*#__PURE__*/(0,jsx_runtime.jsx)("image",{source:base64Image/* default */.Z}),/*#__PURE__*/(0,jsx_runtime.jsx)("image",{source:webImage})]})]})]})});};renderer/* Renderer.render */.Th.render(/*#__PURE__*/(0,jsx_runtime.jsx)(App,{}));

/***/ }),

/***/ 4862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qc": () => (/* binding */ globalsWatcher),
/* harmony export */   "Ut": () => (/* binding */ GlobalsProvider)
/* harmony export */ });
/* unused harmony exports createDictionaryWatcher, useGlobals */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3792);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


/**
 * Creates a context that updates its value when the values in the dictionary change
 * @param dictionary The dictionary to be watched. Must implement the EventDictionary type in the C#
 * @param displayName A displayName to identify this context easier in case of problems
 */

function createDictionaryWatcher(dictionary, displayName) {
  var ctx = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
  if (displayName) ctx.displayName = displayName;

  var Provider = function GlobalsProvider(_a) {
    var children = _a.children;

    var _b = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
        render = _b[0],
        setRender = _b[1];

    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function () {
      var remove = dictionary === null || dictionary === void 0 ? void 0 : dictionary.AddListener(function (key, value, dic) {
        setRender(function (x) {
          return x + 1;
        });
      });

      if (!remove) {
        if (displayName) console.warn("".concat(displayName, " dictionary does not provide a change listener"));else console.warn('The dictionary does not provide a change listener');
      }

      return function () {
        return remove === null || remove === void 0 ? void 0 : remove();
      };
    }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

    var value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
      return __assign({}, dictionary);
    }, [render]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ctx.Provider, {
      value: value
    }, children);
  };

  function useContext() {
    var context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ctx);

    if (context === undefined) {
      if (displayName) throw new Error("".concat(displayName, ".useContext must be used within a ").concat(displayName, ".Provider"));else throw new Error('useContext must be used within a provider');
    }

    return context;
  }

  return {
    context: ctx,
    Provider: Provider,
    useContext: useContext
  };
}
var globalsWatcher = createDictionaryWatcher(Globals, 'globalsContext');
var useGlobals = globalsWatcher.useContext;
var GlobalsProvider = globalsWatcher.Provider;

/***/ }),

/***/ 1696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Th": () => (/* binding */ Renderer)
});

// UNUSED EXPORTS: batchedUpdates, flushSync

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(3792);
// EXTERNAL MODULE: ../../node_modules/react-reconciler/index.js
var react_reconciler = __webpack_require__(3630);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4790);
// EXTERNAL MODULE: ../../renderer/dist/src/helpers/dictionary-watcher.js
var dictionary_watcher = __webpack_require__(4862);
;// CONCATENATED MODULE: ../../renderer/dist/src/views/error-boundary.js
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var ErrorBoundary =
/** @class */
function (_super) {
  __extends(ErrorBoundary, _super);

  function ErrorBoundary(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  ErrorBoundary.getDerivedStateFromError = function (error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: error
    };
  };

  ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {// You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  };

  ErrorBoundary.prototype.render = function () {
    var _a, _b;

    if (this.state.hasError) {
      return (0,jsx_runtime.jsxs)("view", __assign({
        style: {
          color: 'crimson',
          padding: 20
        }
      }, {
        children: [(0,jsx_runtime.jsx)("view", __assign({
          style: {
            marginBottom: '12px'
          }
        }, {
          children: ((_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message) || ''
        })), (0,jsx_runtime.jsx)("view", {
          children: ((_b = this.state.error) === null || _b === void 0 ? void 0 : _b.stack) || ''
        })]
      }));
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(react.Component);


;// CONCATENATED MODULE: ../../renderer/dist/src/views/default-view.js



function DefaultView(_a) {
  var children = _a.children;
  return (0,jsx_runtime.jsx)(ErrorBoundary, {
    children: (0,jsx_runtime.jsx)(dictionary_watcher/* GlobalsProvider */.Ut, {
      children: children
    })
  });
}
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/diffing.js
var styleStringSymbol = '__style_as_string__';
function diffProperties(lastProps, nextProps, deepDiffing) {
  if (deepDiffing === void 0) {
    deepDiffing = 0;
  }

  if (lastProps === nextProps) return null;
  var updatePayload = null;
  var propKey;

  for (propKey in lastProps) {
    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
      continue;
    }

    var prop = null;

    if (propKey === 'style' && typeof lastProps.style === 'string') {
      (updatePayload = updatePayload || {})[styleStringSymbol] = null;
    }

    var depth = deepDiffing > 0 ? deepDiffing : propKey === 'style' ? 1 : 0;

    if (depth > 0) {
      prop = diffProperties(lastProps[propKey], null, depth - 1);
      if (!prop) continue;
    } // For all other deleted properties we add it to the queue. We use
    // the whitelist in the commit phase instead.


    (updatePayload = updatePayload || {})[propKey] = prop;
  }

  for (propKey in nextProps) {
    var nextProp = nextProps[propKey];
    var lastProp = lastProps != null ? lastProps[propKey] : undefined;

    if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
      continue;
    }

    var prop = nextProp;

    if (propKey === 'style' && typeof prop === 'string' !== (typeof lastProp === 'string')) {
      (updatePayload = updatePayload || {})[styleStringSymbol] = typeof prop === 'string' ? prop : null;
    }

    var depth = deepDiffing > 0 ? deepDiffing : propKey === 'style' ? 1 : 0;

    if (depth > 0) {
      prop = diffProperties(lastProp, nextProp, depth - 1);
      if (!prop) continue;
    }

    (updatePayload = updatePayload || {})[propKey] = prop;
  }

  return updatePayload;
}
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/renderer.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var LegacyRoot = 0;
var ConcurrentRoot = 1;
var hostContext = {};
var childContext = {};
var DiscreteEventPriority = 1;
var ContinuousEventPriority = 4;
var DefaultEventPriority = 16;
var eventPriorities = {
  discrete: DiscreteEventPriority,
  continuous: ContinuousEventPriority,
  "default": DefaultEventPriority
};
var textTypes = {
  text: true,
  icon: true,
  style: true,
  script: true
};

function getAllowedProps(props, type) {
  var children = props.children,
      tag = props.tag,
      rest = __rest(props, ["children", "tag"]);

  if (textTypes[type] && 'children' in props) {
    rest.children = !children || typeof children === 'boolean' ? null : Array.isArray(children) ? children.join('') : children + '';
  }

  if (typeof props.style === 'string') rest[styleStringSymbol] = props.style;
  return rest;
}

var hostConfig = {
  getRootHostContext: function getRootHostContext() {
    return hostContext;
  },
  getChildHostContext: function getChildHostContext() {
    return childContext;
  },
  getPublicInstance: function getPublicInstance(instance) {
    return instance;
  },
  now: Date.now,
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  supportsMicrotasks: true,
  supportsTestSelectors: false,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: function resetAfterCommit() {},
  clearContainer: function clearContainer(container) {
    return UnityBridge.clearContainer(container);
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree() {
    return false;
  },
  createInstance: function createInstance(type, props, rootContainerInstance) {
    var aProps = getAllowedProps(props, type);
    var children = aProps.children || null;
    delete aProps.children;
    return UnityBridge.createElement(props.tag || type, children, rootContainerInstance, aProps);
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance) {
    return UnityBridge.createText(text, rootContainerInstance);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    UnityBridge.appendChild(parent, child);
  },
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  commitMount: function commitMount() {},
  shouldSetTextContent: function shouldSetTextContent(type) {
    return textTypes[type];
  },
  // -------------------
  //     Mutation
  // -------------------
  prepareUpdate: function prepareUpdate(instance, type, oldProps, newProps) {
    return diffProperties(oldProps, newProps);
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type) {
    UnityBridge.applyUpdate(instance, getAllowedProps(updatePayload, type), type);
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
    UnityBridge.setText(textInstance, newText);
  },
  appendChild: function appendChild(parent, child) {
    return UnityBridge.appendChild(parent, child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    return UnityBridge.appendChildToContainer(parent, child);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    return UnityBridge.insertBefore(parent, child, beforeChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, beforeChild) {
    return UnityBridge.insertBefore(parent, child, beforeChild);
  },
  removeChild: function removeChild(parent, child) {
    return UnityBridge.removeChild(parent, child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    return UnityBridge.removeChild(parent, child);
  },
  resetTextContent: function resetTextContent() {},
  preparePortalMount: function preparePortalMount() {},
  detachDeletedInstance: function detachDeletedInstance() {},
  // Required for Suspense
  // TODO: implement
  hideInstance: function hideInstance() {},
  hideTextInstance: function hideTextInstance() {},
  unhideInstance: function unhideInstance() {},
  unhideTextInstance: function unhideTextInstance() {},
  // -------------------
  //     Scheduling
  // -------------------
  getCurrentEventPriority: function getCurrentEventPriority() {
    return eventPriorities.discrete;
  },
  noTimeout: -1,
  scheduleTimeout: function scheduleTimeout(callback, timeout) {
    return setTimeout(callback, timeout);
  },
  scheduleMicrotask: typeof queueMicrotask === 'function' ? queueMicrotask : function (callback) {
    return Promise.resolve(null).then(callback)["catch"](function (error) {
      return setTimeout(function () {
        throw error;
      }, 0);
    });
  },
  cancelTimeout: function cancelTimeout(handle) {
    return clearTimeout(handle);
  }
};
var reconciler = react_reconciler(hostConfig);
var containerMap = new Map();
var Renderer = {
  render: function render(element, options) {
    if (options === void 0) {
      options = {};
    }

    var hostContainer = (options === null || options === void 0 ? void 0 : options.hostContainer) || HostContainer;
    var hostRoot = containerMap.get(hostContainer);

    if (!hostRoot) {
      hostRoot = reconciler.createContainer(hostContainer, (options === null || options === void 0 ? void 0 : options.mode) === 'legacy' ? LegacyRoot : ConcurrentRoot, false, null);
      containerMap.set(hostContainer, hostRoot);
    }

    if (!(options === null || options === void 0 ? void 0 : options.disableHelpers)) element = (0,react.createElement)(DefaultView, null, element);
    reconciler.updateContainer(element, hostRoot, null);
  }
};
var batchedUpdates = reconciler.batchedUpdates;
var flushSync = reconciler.flushSync;

/***/ }),

/***/ 2176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9367);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7989);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root>*{background-color:#fafafa}.uitoolkit_app__Y3Jh-{padding:20px;max-width:960px;width:100%;align-self:center;align-items:stretch}.uitoolkit_app__Y3Jh- h1{font-size:36px;font-style:smallcaps,bold;color:#582a9c;margin-bottom:12px}.uitoolkit_app__Y3Jh- h2{font-size:30px;font-style:smallcaps;color:#fb2f8e;margin-bottom:8px}.uitoolkit_app__Y3Jh- section{margin-top:10px;margin-bottom:10px}.uitoolkit_app__Y3Jh- row{flex-direction:row;align-items:center}.uitoolkit_app__Y3Jh- column{flex-direction:column;align-items:center;flex-grow:1;flex-shrink:0}.uitoolkit_app__Y3Jh- image{flex-grow:1;flex-shrink:1;flex-basis:0;object-fit:scale-down;object-position:50%;transition:object-position 2s;align-self:stretch}.uitoolkit_app__Y3Jh- input{border-width:1px;border-color:#000}.uitoolkit_app__Y3Jh- button:hover{audio:url(res:click)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"app": "uitoolkit_app__Y3Jh-"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAcElEQVR4AezOsREAIAjFUAs3dgAGYkj8C3g2oBTJXfo3iD419dJ2eOn5EuM6LnsFynQkb4AKQP2zlBOLpAEBAgQIECBAgAA1Au29p6aDrlPBQd3UdJA7yIcUho4KA5UBBxDHk9GwzwdiGQY6gVEwCgC3bcAZ+oXojwAAAABJRU5ErkJggg==\n");

/***/ }),

/***/ 5878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/bg.png";

/***/ })

}]);