(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("ic-vui", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["ic-vui"] = factory(require("vue"));
	else
		root["ic-vui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(31)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(17);
var hide = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41);
var defined = __webpack_require__(28);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(32);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(66);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(75);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 33 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(23);
var wksExt = __webpack_require__(36);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(18);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(61)(false);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(68)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(45);
var hide = __webpack_require__(6);
var has = __webpack_require__(10);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(69);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(70);
var enumBugKeys = __webpack_require__(32);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(26)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(47).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
var global = __webpack_require__(1);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(32).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(18);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(17);
var invoke = __webpack_require__(92);
var html = __webpack_require__(47);
var cel = __webpack_require__(26);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(38);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/avatar/index.vue
//
//
//
//
//
//

/* harmony default export */ var avatar = ({
  name: 'ic-avatar'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-06c903e2","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/avatar/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_avatar = (esExports);
// CONCATENATED MODULE: ./packages/avatar/index.vue
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  avatar,
  selectortype_template_index_0_packages_avatar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var packages_avatar = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/badge/index.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var badge = ({
  name: 'ic-badge',

  props: {
    blink: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8ccc34a0","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/badge/index.vue
var badge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"ic-badge",class:{
    'ic-badge--dot': !_vm.$slots.default
  }},[_vm._t("default")],2)}
var badge_staticRenderFns = []
var badge_esExports = { render: badge_render, staticRenderFns: badge_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_badge = (badge_esExports);
// CONCATENATED MODULE: ./packages/badge/index.vue
var badge_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var badge___vue_template_functional__ = false
/* styles */
var badge___vue_styles__ = null
/* scopeId */
var badge___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var badge___vue_module_identifier__ = null
var badge_Component = badge_normalizeComponent(
  badge,
  selectortype_template_index_0_packages_badge,
  badge___vue_template_functional__,
  badge___vue_styles__,
  badge___vue_scopeId__,
  badge___vue_module_identifier__
)

/* harmony default export */ var packages_badge = (badge_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/button/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var selectortype_script_index_0_packages_button = ({
  name: 'ic-button',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    timer: {
      type: Boolean,
      default: false
    },
    endText: {
      type: String,
      default: '重新发送'
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data: function data() {
    return {
      n: 60,
      end: this.endText
    };
  },

  computed: {
    timerText: function timerText() {
      return this.n === 0 ? this.end : this.n + 's';
    }
  },
  watch: {
    n: function n(newVal) {
      if (newVal === 0) {
        this.$emit('timer-end');
      }
    }
  },
  methods: {
    onClick: function onClick(e) {
      this.$emit('click', e);
      this.timer && this.count();
    },
    count: function count() {
      var _this = this;

      this.n = 60;
      var steps = function steps() {
        var timer = setTimeout(function (_) {
          if (_this.n === 0) {
            clearTimeout(timer);
          } else {
            _this.n--;
            steps();
          }
        }, 1000);
      };
      steps();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5409637d","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/button/index.vue
var button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ic-btn",class:[
    'ic-btn--' + _vm.type,
    'ic-btn--' + _vm.size,
    {
      'ic-btn--round': _vm.round,
      'ic-btn--block': _vm.block,
      'ic-btn--fixed': _vm.fixed,
      'ic-btn--text': _vm.text
    }
  ],attrs:{"disabled":_vm.disabled},on:{"click":_vm.onClick}},[_c('span',{staticClass:"ic-btn__text"},[(_vm.prefixIcon)?_c('ic-icon',{staticClass:"ic-btn--prefix-icon",attrs:{"name":_vm.prefixIcon}}):_vm._e(),_vm._t("default",[_vm._v(_vm._s(_vm.timerText))]),(_vm.suffixIcon)?_c('ic-icon',{staticClass:"ic-btn--suffix-icon",attrs:{"name":_vm.suffixIcon}}):_vm._e()],2)])}
var button_staticRenderFns = []
var button_esExports = { render: button_render, staticRenderFns: button_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_button = (button_esExports);
// CONCATENATED MODULE: ./packages/button/index.vue
var button_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var button___vue_template_functional__ = false
/* styles */
var button___vue_styles__ = null
/* scopeId */
var button___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var button___vue_module_identifier__ = null
var button_Component = button_normalizeComponent(
  selectortype_script_index_0_packages_button,
  selectortype_template_index_0_packages_button,
  button___vue_template_functional__,
  button___vue_styles__,
  button___vue_scopeId__,
  button___vue_module_identifier__
)

/* harmony default export */ var packages_button = (button_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/cell/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cell = ({
  name: 'ic-cell',

  props: {
    title: String,
    content: String,
    icon: String,
    showArrow: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6746fb2a","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/cell/index.vue
var cell_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-cell"},[_vm._t("all",[_c('div',{staticClass:"ic-cell__inner"},[_c('div',{staticClass:"ic-cell__left"},[_vm._t("prefix",[(_vm.icon)?_c('ic-icon',{attrs:{"name":_vm.icon}}):_vm._e()]),_vm._t("title",[_c('span',{staticClass:"ic-cell__title"},[_vm._v(_vm._s(_vm.title))])])],2),_vm._t("suffix",[_c('div',{staticClass:"ic-cell__right"},[_c('span',[_vm._v(_vm._s(_vm.content))]),(_vm.showArrow)?_c('ic-icon',{attrs:{"name":"arrow"}}):_vm._e()],1)])],2)]),_vm._t("bottom")],2)}
var cell_staticRenderFns = []
var cell_esExports = { render: cell_render, staticRenderFns: cell_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_cell = (cell_esExports);
// CONCATENATED MODULE: ./packages/cell/index.vue
var cell_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var cell___vue_template_functional__ = false
/* styles */
var cell___vue_styles__ = null
/* scopeId */
var cell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var cell___vue_module_identifier__ = null
var cell_Component = cell_normalizeComponent(
  cell,
  selectortype_template_index_0_packages_cell,
  cell___vue_template_functional__,
  cell___vue_styles__,
  cell___vue_scopeId__,
  cell___vue_module_identifier__
)

/* harmony default export */ var packages_cell = (cell_Component.exports);

// CONCATENATED MODULE: ./src/mixins/emitter.js
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName || child.$options.name;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
/* harmony default export */ var emitter = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent;
      var name = parent.$options.componentName || parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName || parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});
// CONCATENATED MODULE: ./src/utils/share.js
function findParentByName(vm, name) {
  var parent = vm.$parent;
  while (parent) {
    if (parent.$options.name === name) return parent;
    parent = parent.$parent;
  }
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/checkbox/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var selectortype_script_index_0_packages_checkbox = ({
  name: 'ic-checkbox',

  mixins: [emitter],
  props: {
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      originalValue: this.value,
      checked: this.value
    };
  },

  methods: {
    click: function click(e) {
      this.$emit('input', e.target.checked);
      this.dispatch('ic-checkbox-group', 'update:actives', this.originalValue);
    }
  },
  created: function created() {
    var parent = findParentByName(this, 'ic-checkbox-group');
    this.checked = parent && parent.values.indexOf(this.value) > -1;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7a9ea8f2","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/checkbox/index.vue
var checkbox_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"ic-checkbox",class:{
    'ic-checkbox--checked': _vm.checked,
    'ic-checkbox--disabled': _vm.disabled,
    'ic-checkbox--round': _vm.round
  }},[_c('span',{staticClass:"ic-checkbox__wrapper"},[_c('span',{staticClass:"ic-checkbox__inner",on:{"click":function($event){$event.stopPropagation();_vm.click($event)}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checked),expression:"checked"}],staticClass:"ic-checkbox__input",attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":Array.isArray(_vm.checked)?_vm._i(_vm.checked,null)>-1:(_vm.checked)},on:{"change":function($event){var $$a=_vm.checked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checked=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checked=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checked=$$c}}}})]),(_vm.$slots.default)?_c('span',{staticClass:"ic-checkbox__label"},[_vm._t("default")],2):_vm._e()])])}
var checkbox_staticRenderFns = []
var checkbox_esExports = { render: checkbox_render, staticRenderFns: checkbox_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_checkbox = (checkbox_esExports);
// CONCATENATED MODULE: ./packages/checkbox/index.vue
var checkbox_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var checkbox___vue_template_functional__ = false
/* styles */
var checkbox___vue_styles__ = null
/* scopeId */
var checkbox___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var checkbox___vue_module_identifier__ = null
var checkbox_Component = checkbox_normalizeComponent(
  selectortype_script_index_0_packages_checkbox,
  selectortype_template_index_0_packages_checkbox,
  checkbox___vue_template_functional__,
  checkbox___vue_styles__,
  checkbox___vue_scopeId__,
  checkbox___vue_module_identifier__
)

/* harmony default export */ var packages_checkbox = (checkbox_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/checkbox-group/index.vue
//
//
//
//
//
//



/* harmony default export */ var checkbox_group = ({
  name: 'ic-checkbox-group',

  mixins: [emitter],
  props: {
    value: Array,
    max: Number
  },
  data: function data() {
    return {
      values: this.value
    };
  },

  watch: {
    values: function values(newVal) {
      this.$emit('input', newVal);
      this.$emit('change', newVal);
    }
  },
  methods: {
    setActives: function setActives(value) {
      var index = this.values.indexOf(value);
      if (index > -1) {
        this.values.splice(index, 1);
      } else {
        this.values.push(value);
      }
    }
  },
  created: function created() {
    this.$on('update:actives', this.setActives);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-422241b4","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/checkbox-group/index.vue
var checkbox_group_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-checkbox-group"},[_vm._t("default")],2)}
var checkbox_group_staticRenderFns = []
var checkbox_group_esExports = { render: checkbox_group_render, staticRenderFns: checkbox_group_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_checkbox_group = (checkbox_group_esExports);
// CONCATENATED MODULE: ./packages/checkbox-group/index.vue
var checkbox_group_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var checkbox_group___vue_template_functional__ = false
/* styles */
var checkbox_group___vue_styles__ = null
/* scopeId */
var checkbox_group___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var checkbox_group___vue_module_identifier__ = null
var checkbox_group_Component = checkbox_group_normalizeComponent(
  checkbox_group,
  selectortype_template_index_0_packages_checkbox_group,
  checkbox_group___vue_template_functional__,
  checkbox_group___vue_styles__,
  checkbox_group___vue_scopeId__,
  checkbox_group___vue_module_identifier__
)

/* harmony default export */ var packages_checkbox_group = (checkbox_group_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/collapse/index.vue
//
//
//
//
//
//

/* harmony default export */ var collapse = ({
  name: 'ic-collapse',

  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Array],
      default: function _default() {
        return [];
      }
    },
    activeText: {
      type: String,
      default: '收起'
    },
    inactiveText: {
      type: String,
      default: '展开'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  provide: function provide() {
    return {
      collapse: this
    };
  },
  data: function data() {
    return {
      activeNames: [].concat(this.value)
    };
  },

  watch: {
    value: function value(val) {
      this.activeNames = [].concat(val);
    }
  },
  methods: {
    setActiveNames: function setActiveNames(activeNames) {
      activeNames = [].concat(activeNames);
      var value = this.accordion ? activeNames[0] : activeNames;
      this.activeNames = activeNames;
      this.$emit('input', value);
      this.$emit('change', value);
    },
    handleItemClick: function handleItemClick(item) {
      if (this.accordion) {
        this.setActiveNames((this.activeNames[0] || this.activeNames[0] === 0) && this.activeNames[0] === item.name ? '' : item.name);
      } else {
        var activeNames = this.activeNames.slice();
        var index = activeNames.indexOf(item.name);
        if (index > -1) {
          activeNames.splice(index, 1);
        } else {
          activeNames.push(item.name);
        }
        this.setActiveNames(activeNames);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f191d99e","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/collapse/index.vue
var collapse_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"ic-collapse"},[_vm._t("default")],2)}
var collapse_staticRenderFns = []
var collapse_esExports = { render: collapse_render, staticRenderFns: collapse_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_collapse = (collapse_esExports);
// CONCATENATED MODULE: ./packages/collapse/index.vue
var collapse_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var collapse___vue_template_functional__ = false
/* styles */
var collapse___vue_styles__ = null
/* scopeId */
var collapse___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var collapse___vue_module_identifier__ = null
var collapse_Component = collapse_normalizeComponent(
  collapse,
  selectortype_template_index_0_packages_collapse,
  collapse___vue_template_functional__,
  collapse___vue_styles__,
  collapse___vue_scopeId__,
  collapse___vue_module_identifier__
)

/* harmony default export */ var packages_collapse = (collapse_Component.exports);

// CONCATENATED MODULE: ./packages/collapse-item/transition-height.js
/* harmony default export */ var transition_height = ({
  inserted: function inserted(el, binding) {
    var value = binding.value;
    if (value.active) {
      var offsetHeight = el.offsetHeight;
      el.style.height = offsetHeight + 'px';
      el.style.transition = 'height .3s';
    }
  },
  update: function update(el, binding) {
    var value = binding.value;
    if (!value.active) {
      el.style.overflow = 'hidden';
      el.style.height = '0';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/collapse-item/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var collapse_item = ({
  name: 'ic-collapse-item',

  props: {
    title: String,
    subtitle: String,
    name: [String, Number],
    icon: {
      type: String,
      default: 'arrow-down'
    }
  },
  inject: ['collapse'],
  // directives: { tsh: transitionDirective },
  computed: {
    active: function active() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    },
    weathercockText: function weathercockText() {
      return this.active ? this.collapse.activeText : this.collapse.inactiveText;
    },
    disabled: function disabled() {
      return this.collapse.disabled;
    }
  },
  methods: {
    clickItem: function clickItem() {
      this.collapse.handleItemClick(this);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-84c6daaa","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/collapse-item/index.vue
var collapse_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ic-collapse__item",class:{
    'ic-collapse__item--active': _vm.active
  }},[_c('div',{staticClass:"ic-collapse__header",on:{"click":_vm.clickItem}},[_c('div',{staticClass:"ic-collapse__inner"},[_vm._t("title",[_c('div',{staticClass:"ic-collapse__title"},[_vm._v(_vm._s(_vm.title))])]),(_vm.subtitle)?_c('div',{staticClass:"ic-collapse__subtitle"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()],2),_c('div',{staticClass:"ic-collapse__weathercock"},[(!_vm.disabled)?_c('span',[_vm._v(_vm._s(_vm.weathercockText))]):_vm._e(),_c('ic-icon',{attrs:{"name":_vm.icon}})],1)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"ic-collapse__panel"},[_vm._t("default")],2)])}
var collapse_item_staticRenderFns = []
var collapse_item_esExports = { render: collapse_item_render, staticRenderFns: collapse_item_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_collapse_item = (collapse_item_esExports);
// CONCATENATED MODULE: ./packages/collapse-item/index.vue
var collapse_item_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var collapse_item___vue_template_functional__ = false
/* styles */
var collapse_item___vue_styles__ = null
/* scopeId */
var collapse_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var collapse_item___vue_module_identifier__ = null
var collapse_item_Component = collapse_item_normalizeComponent(
  collapse_item,
  selectortype_template_index_0_packages_collapse_item,
  collapse_item___vue_template_functional__,
  collapse_item___vue_styles__,
  collapse_item___vue_scopeId__,
  collapse_item___vue_module_identifier__
)

/* harmony default export */ var packages_collapse_item = (collapse_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/datetime-picker/index.vue
//
//
//
//
//
//
//
//
//
//

var FORMAT_MAP = {
  Y: 'year',
  M: 'month',
  D: 'date',
  H: 'hour',
  m: 'minute'
};

/* harmony default export */ var datetime_picker = ({
  name: 'ic-datetime-picker',

  props: {
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    type: {
      type: String,
      default: 'datetime'
    },
    startDate: {
      type: Date,
      default: function _default() {
        return new Date(new Date().getFullYear() - 10, 0, 1);
      }
    },
    endDate: {
      type: Date,
      default: function _default() {
        return new Date(new Date().getFullYear() + 10, 11, 31);
      }
    },
    startHour: {
      type: Number,
      default: 0
    },
    endHour: {
      type: Number,
      default: 23
    },
    yearFormat: {
      type: String,
      default: '{value}'
    },
    monthFormat: {
      type: String,
      default: '{value}'
    },
    dateFormat: {
      type: String,
      default: '{value}'
    },
    hourFormat: {
      type: String,
      default: '{value}'
    },
    minuteFormat: {
      type: String,
      default: '{value}'
    },
    visibleItemCount: {
      type: Number,
      default: 7
    },
    rotateEffect: {
      type: Boolean,
      default: false
    },
    value: null,
    defaultValue: {
      type: [String, Array],
      default: ''
    }
  },
  data: function data() {
    return {
      visible: false,
      startYear: null,
      endYear: null,
      startMonth: 1,
      endMonth: 12,
      startDay: 1,
      endDay: 31,
      currentValue: null,
      selfTriggered: false,
      dateSlots: [],
      shortMonthDates: [],
      longMonthDates: [],
      febDates: [],
      leapFebDates: []
    };
  },

  computed: {
    rims: function rims() {
      if (!this.currentValue) return {
        year: [], month: [], date: [], hour: [], min: []
      };
      var result = void 0;
      if (this.type === 'time') {
        result = {
          hour: [this.startHour, this.endHour],
          min: [0, 59]
        };
        return result;
      }
      result = {
        year: [this.startDate.getFullYear(), this.endDate.getFullYear()],
        month: [1, 12],
        date: [1, this.getMonthEndDay(this.getYear(this.currentValue), this.getMonth(this.currentValue))],
        hour: [0, 23],
        min: [0, 59]
      };
      this.rimDetect(result, 'start');
      this.rimDetect(result, 'end');
      return result;
    },
    typeStr: function typeStr() {
      if (this.type === 'time') {
        return 'Hm';
      } else if (this.type === 'date') {
        return 'YMD';
      } else if (this.type === 'range-date') {
        return 'YM';
      } else {
        return 'YMDHm';
      }
    }
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    rims: function rims() {
      this.generateSlots();
    },
    visible: function visible(val) {
      this.$emit('visible-change', val);
    }
  },
  methods: {
    open: function open() {
      this.visible = true;
    },
    close: function close() {
      this.visible = false;
    },
    isLeapYear: function isLeapYear(year) {
      return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
    },
    isShortMonth: function isShortMonth(month) {
      return [4, 6, 9, 11].indexOf(month) > -1;
    },
    getMonthEndDay: function getMonthEndDay(year, month) {
      if (this.isShortMonth(month)) {
        return 30;
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28;
      } else {
        return 31;
      }
    },
    getTrueValue: function getTrueValue(formattedValue) {
      if (!formattedValue) return;
      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }
      return parseInt(formattedValue, 10);
    },
    getValue: function getValue(values) {
      var _this = this;

      var value = void 0;
      if (this.type === 'time') {
        value = values.map(function (value) {
          return ('0' + _this.getTrueValue(value)).slice(-2);
        }).join(':');
      } else if (this.type === 'range-date') {
        value = [values.slice(0, 2).join('.'), values.slice(2).join('.')];
      } else {
        var year = this.getTrueValue(values[0]);
        var month = this.getTrueValue(values[1]);
        var date = this.getTrueValue(values[2]);
        var maxDate = this.getMonthEndDay(year, month);
        if (date > maxDate) {
          this.selfTriggered = true;
          date = 1;
        }
        var hour = this.typeStr.indexOf('H') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('H')]) : 0;
        var minute = this.typeStr.indexOf('m') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('m')]) : 0;
        value = new Date(year, month - 1, date, hour, minute);
      }
      return value;
    },
    onChange: function onChange(picker) {
      var values = picker.$children.filter(function (child) {
        return child.currentValue !== undefined;
      }).map(function (child) {
        return child.currentValue;
      });
      if (this.selfTriggered) {
        this.selfTriggered = false;
        return;
      }
      if (values.length !== 0) {
        this.currentValue = this.getValue(values);
        this.handleValueChange();
      }
    },
    fillValues: function fillValues(type, start, end) {
      var values = [];
      for (var i = start; i <= end; i++) {
        if (i < 10) {
          values.push(this[FORMAT_MAP[type] + 'Format'].replace('{value}', ('0' + i).slice(-2)));
        } else {
          values.push(this[FORMAT_MAP[type] + 'Format'].replace('{value}', i));
        }
      }
      return values;
    },
    pushSlots: function pushSlots(slots, type, start, end) {
      slots.push({
        flex: 1,
        values: this.fillValues(type, start, end)
      });
    },
    generateSlots: function generateSlots() {
      var _this2 = this;

      var dateSlots = [];
      var INTERVAL_MAP = {
        Y: this.rims.year,
        M: this.rims.month,
        D: this.rims.date,
        H: this.rims.hour,
        m: this.rims.min
      };
      var typesArr = this.typeStr.split('');
      typesArr.forEach(function (type) {
        if (INTERVAL_MAP[type]) {
          _this2.pushSlots.apply(null, [dateSlots, type].concat(INTERVAL_MAP[type]));
        }
      });
      if (this.typeStr === 'Hm') {
        dateSlots.splice(1, 0, {
          divider: true,
          content: ':'
        });
      }
      if (this.typeStr === 'YM') {
        ;[].push.apply(dateSlots, dateSlots);
        dateSlots.splice(2, 0, {
          divider: true,
          content: '-'
        });
      }
      this.dateSlots = dateSlots;
      this.handleExceededValue();
    },
    handleExceededValue: function handleExceededValue() {
      var _this3 = this;

      var values = [];
      if (this.type === 'time') {
        var currentValue = this.currentValue.split(':');
        values = [this.hourFormat.replace('{value}', currentValue[0]), this.minuteFormat.replace('{value}', currentValue[1])];
      } else {
        values = [this.yearFormat.replace('{value}', this.getYear(this.currentValue)), this.monthFormat.replace('{value}', ('0' + this.getMonth(this.currentValue)).slice(-2)), this.dateFormat.replace('{value}', ('0' + this.getDate(this.currentValue)).slice(-2))];
        if (this.type === 'datetime') {
          values.push(this.hourFormat.replace('{value}', ('0' + this.getHour(this.currentValue)).slice(-2)), this.minuteFormat.replace('{value}', ('0' + this.getMinute(this.currentValue)).slice(-2)));
        }
      }
      this.dateSlots.filter(function (child) {
        return child.values !== undefined;
      }).map(function (slot) {
        return slot.values;
      }).forEach(function (slotValues, index) {
        if (slotValues.indexOf(values[index]) === -1) {
          values[index] = slotValues[0];
        }
      });
      this.$nextTick(function () {
        _this3.setSlotsByValues(values);
      });
    },
    setSlotsByValues: function setSlotsByValues(values) {
      var setSlotValue = this.$refs.picker.setItemValue;
      if (this.type === 'time') {
        setSlotValue(0, values[0]);
        setSlotValue(1, values[1]);
      }
      if (this.type !== 'time') {
        setSlotValue(0, values[0]);
        setSlotValue(1, values[1]);
        if (this.type === 'date') {
          setSlotValue(2, values[2]);
        }
        if (this.type === 'datetime') {
          setSlotValue(2, values[2]);
          setSlotValue(3, values[3]);
          setSlotValue(4, values[4]);
        }
        if (this.type === 'range-date') {
          setSlotValue(2, values[0]);
          setSlotValue(3, values[1]);
        }
      }
      ;[].forEach.call(this.$refs.picker.$children, function (child) {
        return child.doOnValueChange();
      });
    },
    rimDetect: function rimDetect(result, rim) {
      var position = rim === 'start' ? 0 : 1;
      var rimDate = rim === 'start' ? this.startDate : this.endDate;
      if (this.getYear(this.currentValue) === rimDate.getFullYear()) {
        result.month[position] = rimDate.getMonth() + 1;
        if (this.getMonth(this.currentValue) === rimDate.getMonth() + 1) {
          result.date[position] = rimDate.getDate();
          if (this.getDate(this.currentValue) === rimDate.getDate()) {
            result.hour[position] = rimDate.getHours();
            if (this.getHour(this.currentValue) === rimDate.getHours()) {
              result.min[position] = rimDate.getMinutes();
            }
          }
        }
      }
    },
    isDateString: function isDateString(str) {
      return typeof str === 'string' && /\d{4}(\-|\/|.)\d{1,2}(\1\d{1,2})?/.test(str);
    },
    getYear: function getYear(value) {
      value = Array.isArray(value) ? value[0] : value;
      var a = this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[0] : value.getFullYear();
    },
    getMonth: function getMonth(value) {
      value = Array.isArray(value) ? value[0] : value;
      return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[1] : value.getMonth() + 1;
    },
    getDate: function getDate(value) {
      value = Array.isArray(value) ? value[0] : value;
      return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[2] : value.getDate();
    },
    getHour: function getHour(value) {
      value = Array.isArray(value) ? value[0] : value;
      if (this.isDateString(value)) {
        var str = value.split(' ')[1] || '00:00:00';
        return str.split(':')[0];
      }
      return value.getHours();
    },
    getMinute: function getMinute(value) {
      value = Array.isArray(value) ? value[0] : value;
      if (this.isDateString(value)) {
        var str = value.split(' ')[1] || '00:00:00';
        return str.split(':')[1];
      }
      return value.getMinutes();
    },
    confirm: function confirm() {
      this.visible = false;
      this.$emit('confirm', this.currentValue);
    },
    handleValueChange: function handleValueChange() {
      this.$emit('input', this.currentValue);
    }
  },

  mounted: function mounted() {
    this.currentValue = this.value;
    if (!this.value) {
      if (this.type.indexOf('date') > -1) {
        this.currentValue = this.startDate;
      } else {
        this.currentValue = ('0' + this.startHour).slice(-2) + ':00';
      }
    }
    this.generateSlots();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e1a95336","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/datetime-picker/index.vue
var datetime_picker_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ic-picker',{ref:"picker",attrs:{"rotate-effect":_vm.rotateEffect,"items":_vm.dateSlots,"visible-item-count":_vm.visibleItemCount},on:{"change":_vm.onChange}})}
var datetime_picker_staticRenderFns = []
var datetime_picker_esExports = { render: datetime_picker_render, staticRenderFns: datetime_picker_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_datetime_picker = (datetime_picker_esExports);
// CONCATENATED MODULE: ./packages/datetime-picker/index.vue
var datetime_picker_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var datetime_picker___vue_template_functional__ = false
/* styles */
var datetime_picker___vue_styles__ = null
/* scopeId */
var datetime_picker___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var datetime_picker___vue_module_identifier__ = null
var datetime_picker_Component = datetime_picker_normalizeComponent(
  datetime_picker,
  selectortype_template_index_0_packages_datetime_picker,
  datetime_picker___vue_template_functional__,
  datetime_picker___vue_styles__,
  datetime_picker___vue_scopeId__,
  datetime_picker___vue_module_identifier__
)

/* harmony default export */ var packages_datetime_picker = (datetime_picker_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/dialog/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var dialog = ({
  name: 'ic-dialog',

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    title: String,
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    round: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    isLeftClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isRound: function isRound() {
      return this.round && (this.width !== '100%' || this.height !== '100%');
    }
  },
  data: function data() {
    return {
      marginTop: 'auto'
    };
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.$nextTick(function (_) {
          var h = _this.$refs.wrapper.offsetHeight;
          _this.marginTop = -h / 2 + 'px';
        });
      }
    }
  },
  methods: {
    handleMaskClose: function handleMaskClose() {
      this.closeOnClickMask && this.$emit('update:visible', false);
    },
    close: function close() {
      this.showClose && this.$emit('update:visible', false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-40846152","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/dialog/index.vue
var dialog_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ic-dialog",class:{
      'ic-dialog--round': _vm.isRound
    },on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.handleMaskClose($event)}}},[_c('div',{ref:"wrapper",staticClass:"ic-dialog__wrapper",style:({ width: _vm.width, height: _vm.height, 'margin-top': _vm.marginTop })},[_c('div',{staticClass:"ic-dialog__header",class:{ 'ic-dialog__header--left-close': _vm.isLeftClose }},[_vm._t("header",[(_vm.showClose)?_c('i',{staticClass:"glyph__close",on:{"click":function($event){$event.preventDefault();_vm.close($event)}}}):_vm._e(),(_vm.title)?_c('span',[_vm._v(_vm._s(_vm.title))]):_vm._e()])],2),_c('div',{staticClass:"ic-dialog__content"},[_vm._t("default")],2),(_vm.$slots.footer)?_c('div',{staticClass:"ic-dialog__footer"},[_vm._t("footer")],2):_vm._e()])])])}
var dialog_staticRenderFns = []
var dialog_esExports = { render: dialog_render, staticRenderFns: dialog_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_dialog = (dialog_esExports);
// CONCATENATED MODULE: ./packages/dialog/index.vue
var dialog_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var dialog___vue_template_functional__ = false
/* styles */
var dialog___vue_styles__ = null
/* scopeId */
var dialog___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var dialog___vue_module_identifier__ = null
var dialog_Component = dialog_normalizeComponent(
  dialog,
  selectortype_template_index_0_packages_dialog,
  dialog___vue_template_functional__,
  dialog___vue_styles__,
  dialog___vue_scopeId__,
  dialog___vue_module_identifier__
)

/* harmony default export */ var packages_dialog = (dialog_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/filter/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var filter = ({
  name: 'ic-filter',

  props: {
    data: {
      type: Array
    },
    headers: Array,
    value: {},
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var headers = this.data.map(function (item) {
      return item.text;
    });
    return {
      innerHeaders: this.headers || headers,
      currentIndex: this.value,
      currentPanelIndexs: {}
    };
  },

  watch: {
    value: function value(newVal) {
      if (newVal === '') {
        document.body.style.overflowY = 'auto';
      } else {
        document.body.style.overflowY = 'hidden';
      }
    }
  },
  methods: {
    clickPanelItem: function clickPanelItem(item, itemIndex, headerIndex) {
      this.currentPanelIndexs[headerIndex] = itemIndex;
      this.$emit('item-click', {
        item: item,
        headerIndex: headerIndex,
        itemIndex: itemIndex
      });
      this.currentIndex = '';
      this.$emit('input', '');
      this.innerHeaders.splice(headerIndex, 1, item[this.data[headerIndex].labelKey]);
    },
    clickHeaderItem: function clickHeaderItem(index, val) {
      if (this.value !== index) {
        this.currentIndex = index;
      } else {
        this.currentIndex = '';
      }
      this.$emit('input', this.currentIndex);
      this.$emit('change', this.currentIndex);
    },
    clickMask: function clickMask() {
      if (this.closeOnClickMask) {
        this.currentIndex = '';
        this.$emit('input', '');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7626206d","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/filter/index.vue
var filter_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-filter"},[_c('div',{staticClass:"ic-filter__header"},_vm._l((_vm.innerHeaders),function(val,index){return _c('div',{key:index,staticClass:"ic-filter__header-item",class:{
        'ic-filter__header-item--active': _vm.currentIndex === index
      },style:({ width: (100 / _vm.innerHeaders.length) + '%' }),on:{"click":function($event){_vm.clickHeaderItem(index, val)}}},[_c('span',{staticClass:"ic-filter__header-text"},[_vm._v(_vm._s(val))]),_c('ic-icon',{attrs:{"name":"arrow-down"}})],1)})),_c('transition-group',{attrs:{"name":"modal-fade"}},_vm._l((_vm.data),function(item,index){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentIndex === index),expression:"currentIndex === index"}],key:index,staticClass:"ic-filter__content",on:{"click":_vm.clickMask}},[_c('div',{staticClass:"ic-filter__panel"},_vm._l((item.children),function(child,idx){return _c('div',{key:idx,staticClass:"ic-filter__panel-item",on:{"click":function($event){$event.stopPropagation();_vm.clickPanelItem(child, idx, index)}}},[_c('div',{staticClass:"ic-filter__row",class:{
              'ic-filter__row--active': _vm.currentPanelIndexs[_vm.currentIndex] === idx
            }},[(child.icon)?_c('ic-icon',{attrs:{"name":child.icon}}):_vm._e(),_vm._v("\n            "+_vm._s(child[item.labelKey])+"\n          ")],1),_c('i',{staticClass:"ic-filter__checkbox glyph__checkbox--primary",style:({
              'display': _vm.currentPanelIndexs[_vm.currentIndex] === idx ? 'inline-block' : 'none'
            })})])}))])}))],1)}
var filter_staticRenderFns = []
var filter_esExports = { render: filter_render, staticRenderFns: filter_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_filter = (filter_esExports);
// CONCATENATED MODULE: ./packages/filter/index.vue
var filter_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var filter___vue_template_functional__ = false
/* styles */
var filter___vue_styles__ = null
/* scopeId */
var filter___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var filter___vue_module_identifier__ = null
var filter_Component = filter_normalizeComponent(
  filter,
  selectortype_template_index_0_packages_filter,
  filter___vue_template_functional__,
  filter___vue_styles__,
  filter___vue_scopeId__,
  filter___vue_module_identifier__
)

/* harmony default export */ var packages_filter = (filter_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var header = ({
  name: 'ic-header',

  props: {
    theme: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#333'
    },
    title: String,
    leftText: String,
    leftIcon: String,
    rightIcon: [String, Array],
    rightText: String,
    showDivider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    rightOption: function rightOption() {
      return typeof this.rightIcon === 'string' ? [this.rightIcon] : this.rightIcon;
    }
  },
  methods: {
    clickLeft: function clickLeft(e) {
      this.$emit('click-left', e);
    },
    clickRight: function clickRight(e, index) {
      this.$emit('click-right', e, index);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e12088a","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/header/index.vue
var header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"ic-header",class:{ 'ic-header--divider': _vm.showDivider },style:({
    'background-color': _vm.theme,
    'color': _vm.color
  })},[_c('div',{staticClass:"ic-header__left",on:{"click":_vm.clickLeft}},[_c('ic-icon',{attrs:{"name":_vm.leftIcon}}),(_vm.leftText)?_c('span',[_vm._v(_vm._s(_vm.leftText))]):_vm._e()],1),_c('div',{staticClass:"ic-header__title"},[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]),_c('div',{staticClass:"ic-header__right"},[(_vm.rightIcon)?_vm._l((_vm.rightOption),function(val,index){return _c('ic-icon',{key:index,attrs:{"name":val},on:{"click":function($event){_vm.clickRight($event, index)}}})}):_vm._e(),(_vm.rightText)?_c('span',{on:{"click":_vm.clickRight}},[_vm._v(_vm._s(_vm.rightText))]):_vm._e()],2)])}
var header_staticRenderFns = []
var header_esExports = { render: header_render, staticRenderFns: header_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_header = (header_esExports);
// CONCATENATED MODULE: ./packages/header/index.vue
var header_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var header___vue_template_functional__ = false
/* styles */
var header___vue_styles__ = null
/* scopeId */
var header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var header___vue_module_identifier__ = null
var header_Component = header_normalizeComponent(
  header,
  selectortype_template_index_0_packages_header,
  header___vue_template_functional__,
  header___vue_styles__,
  header___vue_scopeId__,
  header___vue_module_identifier__
)

/* harmony default export */ var packages_header = (header_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/icon/index.vue
//
//
//
//
//
//

/* harmony default export */ var icon = ({
  name: 'ic-icon',

  props: {
    name: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-be7523c4","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/icon/index.vue
var icon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',_vm._g({staticClass:"ic-icon",class:("icon-" + _vm.name)},_vm.$listeners),[_vm._t("default")],2)}
var icon_staticRenderFns = []
var icon_esExports = { render: icon_render, staticRenderFns: icon_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_icon = (icon_esExports);
// CONCATENATED MODULE: ./packages/icon/index.vue
var icon_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var icon___vue_template_functional__ = false
/* styles */
var icon___vue_styles__ = null
/* scopeId */
var icon___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var icon___vue_module_identifier__ = null
var icon_Component = icon_normalizeComponent(
  icon,
  selectortype_template_index_0_packages_icon,
  icon___vue_template_functional__,
  icon___vue_styles__,
  icon___vue_scopeId__,
  icon___vue_module_identifier__
)

/* harmony default export */ var packages_icon = (icon_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/input/index.vue
var _props;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var input = ({
  name: 'ic-input',

  props: (_props = {
    prefixIcon: String,
    suffixIcon: String,
    size: {
      type: String,
      default: 'medium' // large, medium, small
    },
    clearable: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    timer: {
      type: Boolean,
      default: false
    },
    value: {},
    autofocus: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  }, _props['timer'] = {
    type: Boolean,
    default: false
  }, _props.timerEnd = {
    type: Function,
    default: function _default() {}
  }, _props.to = [String, Object], _props.rows = {
    type: [String, Number],
    default: 3
  }, _props.autosize = {
    type: [Boolean, Object],
    default: false
  }, _props.showError = {
    type: Boolean,
    default: false
  }, _props.errorMsg = String, _props.readonly = {
    type: Boolean,
    default: false
  }, _props),
  computed: {
    currentValue: {
      set: function set(v) {
        var _this = this;

        this.resizeTextarea();
        // https://github.com/vuejs/vue/issues/7042
        this.$nextTick(function (_) {
          return _this.$emit('input', v);
        });
      },
      get: function get() {
        return this.value;
      }
    },
    showClearable: function showClearable() {
      return this.clearable && this.value && this.isFocus;
    },
    style: function style() {
      return {
        paddingRight: this.showClearable && this.suffixIcon ? '90px' : !this.showClearable && this.suffixIcon || this.showClearable && !this.suffixIcon ? '50px' : '15px'
      };
    },
    unselectable: function unselectable() {
      return this.readonly ? 'on' : 'off';
    }
  },
  data: function data() {
    return {
      textareaStyle: {},
      isFocus: false
    };
  },

  methods: {
    resizeTextarea: function resizeTextarea() {
      if (this.type === 'textarea') {
        var _$refs = this.$refs,
            mirror = _$refs.mirror,
            textarea = _$refs.textarea;

        var mHeight = mirror.getBoundingClientRect().height;
        var tHeight = textarea.getBoundingClientRect().height;
        if (mHeight >= tHeight) {
          this.textareaStyle.height = mHeight + 'px';
        }
      }
    },
    onClear: function onClear() {
      this.currentValue = '';
    },
    clickSuffix: function clickSuffix(e) {
      this.$emit('click-suffix', e);
      if (this.to) {
        this.$router.push(this.to);
      }
    },
    timerClick: function timerClick(e) {
      this.$emit('timer-click', e);
    },
    handleFocus: function handleFocus(e) {
      this.isFocus = true;
      // fix IOS `readonly`
      if (this.readonly) e.target.blur();
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.isFocus = false;
      this.$emit('blur', e);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fae41b40","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/input/index.vue
var input_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-input",class:[
    'ic-input--' + _vm.size,
    {
      'ic-input--round': _vm.round,
      'ic-input--prefix': _vm.prefixIcon,
      'ic-input--suffix': _vm.suffixIcon || _vm.clearable,
      'ic-input--timer': _vm.timer,
      'ic-input--error': _vm.showError,
      'ic-input--focus': _vm.isFocus
    }
  ]},[_vm._t("prepend"),_c('div',{staticClass:"ic-input__inner",on:{"click":function($event){$event.stopPropagation();_vm.$emit('click', $event)}}},[(_vm.type !== 'textarea')?[(_vm.prefixIcon)?_c('ic-icon',{staticClass:"ic-icon-prefix",attrs:{"name":_vm.prefixIcon}}):_vm._e(),((_vm.type)==='checkbox')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"ic-input__input",style:(_vm.style),attrs:{"unselectable":_vm.unselectable,"readonly":_vm.readonly,"autofocus":_vm.autofocus,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.currentValue)?_vm._i(_vm.currentValue,null)>-1:(_vm.currentValue)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":function($event){var $$a=_vm.currentValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.currentValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.currentValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.currentValue=$$c}}}},'input',_vm.$attrs,false)):((_vm.type)==='radio')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"ic-input__input",style:(_vm.style),attrs:{"unselectable":_vm.unselectable,"readonly":_vm.readonly,"autofocus":_vm.autofocus,"type":"radio"},domProps:{"checked":_vm._q(_vm.currentValue,null)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":function($event){_vm.currentValue=null}}},'input',_vm.$attrs,false)):_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"ic-input__input",style:(_vm.style),attrs:{"unselectable":_vm.unselectable,"readonly":_vm.readonly,"autofocus":_vm.autofocus,"type":_vm.type},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}},'input',_vm.$attrs,false)),(_vm.suffixIcon)?_c('ic-icon',{staticClass:"ic-icon-suffix",attrs:{"name":_vm.suffixIcon},on:{"click":function($event){$event.stopPropagation();_vm.clickSuffix($event)}}}):_vm._e(),_c('ic-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.showClearable),expression:"showClearable"}],staticClass:"ic-icon-suffix",style:({ color: '#bbb' }),attrs:{"name":"clean"},on:{"click":function($event){$event.stopPropagation();_vm.onClear($event)}}}),(_vm.timer)?_c('ic-button',{attrs:{"timer":"","text":""},on:{"timer-end":_vm.timerEnd,"click":_vm.timerClick}}):_vm._e()]:[_c('textarea',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"textarea",staticClass:"ic-input__textarea",style:(_vm.textareaStyle),attrs:{"rows":_vm.rows,"autofocus":_vm.autofocus,"unselectable":_vm.unselectable,"readonly":_vm.readonly},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}},'textarea',_vm.$attrs,false)),_c('div',{ref:"mirror",staticClass:"ic-input__textarea ic-textarea--mirror",attrs:{"contenteditable":""}},[_vm._v(_vm._s(_vm.currentValue))])]],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.errorMsg),expression:"errorMsg"}],staticClass:"ic-input__errormsg"},[_vm._v(_vm._s(_vm.errorMsg))]),_vm._t("append")],2)}
var input_staticRenderFns = []
var input_esExports = { render: input_render, staticRenderFns: input_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_input = (input_esExports);
// CONCATENATED MODULE: ./packages/input/index.vue
var input_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var input___vue_template_functional__ = false
/* styles */
var input___vue_styles__ = null
/* scopeId */
var input___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var input___vue_module_identifier__ = null
var input_Component = input_normalizeComponent(
  input,
  selectortype_template_index_0_packages_input,
  input___vue_template_functional__,
  input___vue_styles__,
  input___vue_scopeId__,
  input___vue_module_identifier__
)

/* harmony default export */ var packages_input = (input_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(25);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__ = __webpack_require__(13);
var external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default = /*#__PURE__*/__webpack_require__.n(external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/loading/loading.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loading = ({
  name: 'ic-loading',

  props: {
    text: String,
    spinnerType: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    color: {
      type: String,
      default: 'white'
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8cd1ef3a","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/loading/loading.vue
var loading_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"loading-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ic-loading"},[_c('div',{staticClass:"ic-loading__inner"},[_vm._t("default",[_c('ic-spinner',{attrs:{"color":_vm.color,"type":_vm.spinnerType}})]),(_vm.text)?_c('span',{staticClass:"ic-loading__text"},[_vm._v(_vm._s(_vm.text))]):_vm._e()],2)])])}
var loading_staticRenderFns = []
var loading_esExports = { render: loading_render, staticRenderFns: loading_staticRenderFns }
/* harmony default export */ var loading_loading = (loading_esExports);
// CONCATENATED MODULE: ./packages/loading/loading.vue
var loading_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var loading___vue_template_functional__ = false
/* styles */
var loading___vue_styles__ = null
/* scopeId */
var loading___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var loading___vue_module_identifier__ = null
var loading_Component = loading_normalizeComponent(
  loading,
  loading_loading,
  loading___vue_template_functional__,
  loading___vue_styles__,
  loading___vue_scopeId__,
  loading___vue_module_identifier__
)

/* harmony default export */ var packages_loading_loading = (loading_Component.exports);

// CONCATENATED MODULE: ./packages/loading/index.js




var loadingVm = void 0;

var defaultOptions = {
  visible: true,
  text: '',
  spinnerType: 'gradient',
  size: 'medium',
  color: 'white',
  close: function close() {
    loadingVm && (loadingVm.visible = false);
  }
};

var loading_createInstance = function createInstance() {
  if (!loadingVm) {
    var LoadingConstructor = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.extend(packages_loading_loading);
    loadingVm = new LoadingConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(loadingVm.$el);
  }
};

var loading_Loading = function Loading(options) {
  loading_createInstance();

  options = typeof options === 'string' ? { text: options } : options;
  // trigger update
  assign_default()(loadingVm, defaultOptions, options);
  return loadingVm;
};

external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$loading = function (options) {
  return loading_Loading(options);
};

/* harmony default export */ var packages_loading = (loading_Loading);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(35);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/location/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var selectortype_script_index_0_packages_location = ({
  name: 'ic-location',

  props: {
    data: [Object, Array],
    displayKey: {
      type: String,
      default: 'name'
    },
    showTouched: {
      type: Boolean,
      default: false
    },
    touchedType: {
      type: String,
      default: 'rect' // round
    }
  },
  computed: {
    normalizedData: function normalizedData() {
      var _this = this;

      if ('length' in this.data) return this.data;

      return keys_default()(this.data).map(function (key) {
        return { title: key, children: _this.data[key] };
      });
    },
    barLetters: function barLetters() {
      var ret = [];
      var count = 0;
      for (var i = 0, l = this.normalizedData.length; i < l; i++) {
        var item = this.normalizedData[i];
        // a fuck requirement
        if (item.icon !== 'location') {
          ret[count] = {
            icon: item.icon,
            title: item.title.slice(0, 2)
          };
          count++;
        }
      }
      return ret;
    }
  },
  data: function data() {
    return {
      touchedLetter: '',
      barActive: false,
      timer: null
    };
  },

  watch: {
    touchedLetter: function touchedLetter(v) {
      if (!v) return;
      var matchedBlock = document.querySelector('.ic-location__block[data-flag^=' + v + ']');
      this.$refs.content.scrollTop = matchedBlock.offsetTop;
    }
  },
  methods: {
    clickItem: function clickItem(item, index) {
      this.$emit('item-click', item, index);
    },
    onTouchStart: function onTouchStart(e) {
      this.barActive = true;
      this.computeTouch(e);
    },
    onTouchMove: function onTouchMove(e) {
      this.computeTouch(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      var _this2 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(function (_) {
        _this2.touchedLetter = '';
        _this2.barActive = false;
      }, 500);
    },
    handleClickBar: function handleClickBar(e) {
      this.onTouchStart(e);
      this.onTouchEnd(e);
    },
    computeTouch: function computeTouch(e) {
      var touch = e.type === 'click' ? e : e.changedTouches ? e.changedTouches[0] : e.touches[0];
      var letterHeight = touch.target.clientHeight;
      var barTop = (window.innerHeight - this.barLetters.length * letterHeight) / 2;
      var index = parseInt((touch.clientY - barTop) / letterHeight) - 2;
      if (index >= 0 && index < this.barLetters.length) {
        var target = this.barLetters[index];
        this.touchedLetter = target.icon || target.title;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bf11cfb4","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/location/index.vue
var location_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-location"},[_c('div',{ref:"content",staticClass:"ic-location__content"},_vm._l((_vm.normalizedData),function(item,index){return _c('div',{key:index,staticClass:"ic-location__block",attrs:{"data-flag":item.icon || item.title}},[(item.icon)?_c('div',{staticClass:"ic-location__icon-title"},[_vm._t("title",[_c('ic-icon',{attrs:{"name":item.icon}}),_c('span',{staticClass:"ic-location__icon-text"},[_vm._v(_vm._s(item.title))])])],2):_c('div',{staticClass:"ic-location__title"},[_vm._t("title",[_c('span',[_vm._v(_vm._s(item.title))])])],2),_c('div',{staticClass:"ic-location__inner"},_vm._l((item.children),function(child,idx){return _c('ic-button',{key:idx,on:{"click":function($event){_vm.clickItem(child, idx)}}},[_vm._v("\n          "+_vm._s(child[_vm.displayKey])+"\n        ")])}))])})),_c('div',{staticClass:"ic-location__bar",class:{ 'ic-location__bar--active': _vm.barActive },on:{"click":_vm.handleClickBar,"touchstart":_vm.onTouchStart,"touchmove":function($event){$event.preventDefault();_vm.onTouchMove($event)},"touchend":_vm.onTouchEnd}},_vm._l((_vm.barLetters),function(item,index){return _c('div',{key:index,staticClass:"ic-location__letter"},[(item.icon)?_c('ic-icon',{attrs:{"name":item.icon}}):[_vm._v("\n        "+_vm._s(item.title)+"\n      ")]],2)})),_c('transition',{attrs:{"name":"touched-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showTouched && _vm.touchedLetter),expression:"showTouched && touchedLetter"}],staticClass:"ic-location__touched",class:[ 'ic-location__touched--' + _vm.touchedType ]},[_vm._v("\n      "+_vm._s(_vm.touchedLetter[0])+"\n    ")])])],1)}
var location_staticRenderFns = []
var location_esExports = { render: location_render, staticRenderFns: location_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_location = (location_esExports);
// CONCATENATED MODULE: ./packages/location/index.vue
var location_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var location___vue_template_functional__ = false
/* styles */
var location___vue_styles__ = null
/* scopeId */
var location___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var location___vue_module_identifier__ = null
var location_Component = location_normalizeComponent(
  selectortype_script_index_0_packages_location,
  selectortype_template_index_0_packages_location,
  location___vue_template_functional__,
  location___vue_styles__,
  location___vue_scopeId__,
  location___vue_module_identifier__
)

/* harmony default export */ var packages_location = (location_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(22);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__(51);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/modal/modal.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modal = ({
  name: 'ic-modal',

  props: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      default: true
    },
    center: {
      default: false,
      type: Boolean
    },
    roundButton: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      visible: false,
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: true,
      callback: null,
      dangerouslyUseHTMLString: false
    };
  },

  watch: {
    inputValue: {
      immediate: false,
      handler: function handler(val, oldVal) {
        var _this = this;

        console.log(val, oldVal);
        this.$nextTick(function (_) {
          if (_this.$type === 'prompt' && val !== null) {
            if (_this.validate()) {
              _this.confirmButtonDisabled = false;
            } else {
              _this.confirmButtonDisabled = true;
            }
          }
        });
      }
    },

    visible: function visible(val) {
      var _this2 = this;

      if (val) {
        this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          this.$nextTick(function () {
            _this2.$refs.confirm.$el.focus();
          });
        }
      }
      if (this.$type !== 'prompt') return;
      if (val) {
        setTimeout(function () {
          if (_this2.$refs.input && _this2.$refs.input.$el) {
            _this2.getInputElement().focus();
          }
        }, 500);
      }
    }
  },
  methods: {
    getSafeClose: function getSafeClose() {
      var _this3 = this;

      var currentId = this.uid;
      return function () {
        _this3.$nextTick(function () {
          if (currentId === _this3.uid) _this3.doClose();
        });
      };
    },
    doClose: function doClose() {
      var _this4 = this;

      if (!this.visible) return;
      this.visible = false;
      this._closing = true;

      this.onClose && this.onClose();
      if (this.lockScroll) {
        setTimeout(function () {
          if (_this4.modal && _this4.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this4.bodyOverflow;
            document.body.style.paddingRight = _this4.bodyPaddingRight;
          }
          _this4.bodyOverflow = null;
          _this4.bodyPaddingRight = null;
        }, 200);
      }
      this.opened = false;
      setTimeout(function () {
        if (_this4.action) _this4.callback(_this4.action, _this4);
      });
    },
    handleWrapperClick: function handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction('cancel');
      }
    },
    handleAction: function handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return;
      }
      this.action = action;
      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose();
        this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },
    validate: function validate() {
      if (this.$type === 'prompt') {
        var inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          return false;
        }
        var inputValidator = this.inputValidator;
        if (typeof inputValidator === 'function') {
          var validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            return false;
          }
          if (typeof validateResult === 'string') {
            return false;
          }
        }
      }
      return true;
    },
    getInputElement: function getInputElement() {
      var inputRefs = this.$refs.input.$refs;
      return inputRefs.input || inputRefs.textarea;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7499b77e","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/modal/modal.vue
var modal_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ic-modal",class:[{
      'ic-modal--center': _vm.center
    }],on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.handleWrapperClick($event)}}},[_c('div',{staticClass:"ic-modal__inner"},[_c('div',{staticClass:"ic-modal__header"},[_c('span',{staticClass:"ic-modal__title"},[_vm._v(_vm._s(_vm.title))]),(_vm.showClose)?_c('i',{staticClass:"ic-modal__close glyph__close",on:{"click":function($event){_vm.handleAction('cancel')}}}):_vm._e()]),_c('div',{staticClass:"ic-modal__content"},[_vm._t("default",[(!_vm.dangerouslyUseHTMLString)?_c('p',[_vm._v(_vm._s(_vm.message))]):_c('p',{domProps:{"innerHTML":_vm._s(_vm.message)}})]),(_vm.showInput)?_c('ic-input',{ref:"input",attrs:{"type":_vm.inputType,"size":"large","placeholder":_vm.inputPlaceholder},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}}):_vm._e()],2),(_vm.showCancelButton || _vm.showConfirmButton)?_c('div',{staticClass:"ic-modal__footer"},[(_vm.showCancelButton)?_c('ic-button',{nativeOn:{"click":function($event){_vm.handleAction('cancel')}}},[_vm._v("\n          "+_vm._s(_vm.cancelButtonText)+"\n        ")]):_vm._e(),(_vm.showConfirmButton)?_c('ic-button',{ref:"confirm",attrs:{"type":"primary","disabled":_vm.confirmButtonDisabled},nativeOn:{"click":function($event){_vm.handleAction('confirm')}}},[_vm._v("\n          "+_vm._s(_vm.confirmButtonText)+"\n        ")]):_vm._e()],1):_vm._e()])])])}
var modal_staticRenderFns = []
var modal_esExports = { render: modal_render, staticRenderFns: modal_staticRenderFns }
/* harmony default export */ var modal_modal = (modal_esExports);
// CONCATENATED MODULE: ./packages/modal/modal.vue
var modal_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var modal___vue_template_functional__ = false
/* styles */
var modal___vue_styles__ = null
/* scopeId */
var modal___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var modal___vue_module_identifier__ = null
var modal_Component = modal_normalizeComponent(
  modal,
  modal_modal,
  modal___vue_template_functional__,
  modal___vue_styles__,
  modal___vue_scopeId__,
  modal___vue_module_identifier__
)

/* harmony default export */ var packages_modal_modal = (modal_Component.exports);

// CONCATENATED MODULE: ./src/utils/merge.js
/* harmony default export */ var merge = (function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
});
// CONCATENATED MODULE: ./src/utils/util.js
var util_hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return util_hasOwnProperty.call(obj, key);
}

function createObjectURL(blob) {
  return URL.createObjectURL(blob);
}

function revokeObjectURL(objURL) {
  URL.revokeObjectURL(objURL);
}

function createCanvas(needCtx) {
  var canvas = document.createElement('canvas');
  return needCtx ? canvas.getContext('2d') : canvas;
}

function clearCanvas(canvas) {
  canvas.clearRect(0, 0, canvas.width, canvas.height);
}
// CONCATENATED MODULE: ./src/utils/vdom.js



function isVNode(node) {
  return (typeof node === 'undefined' ? 'undefined' : typeof_default()(node)) === 'object' && hasOwn(node, 'componentOptions');
}

function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.tag;
  })[0];
}
// CONCATENATED MODULE: ./packages/modal/index.js







var defaults = {
  title: undefined,
  message: '',
  type: '',
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  inputValue: null,
  inputPlaceholder: '',
  inputType: 'text',
  inputPattern: null,
  inputValidator: null,
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonText: '确定',
  confirmButtonDisabled: false,
  cancelButtonText: '取消',
  beforeClose: null,
  dangerouslyUseHTMLString: false,
  center: false,
  roundButton: false
};

var MessageBoxConstructor = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.extend(packages_modal_modal);
var currentMsg = void 0,
    instance = void 0;
var msgQueue = [];

var defaultCallback = function defaultCallback(action) {
  if (currentMsg) {
    var callback = currentMsg.callback;
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action);
      } else {
        callback(action);
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (instance.showInput) {
          currentMsg.resolve({ value: instance.inputValue, action: action });
        } else {
          currentMsg.resolve(action);
        }
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject(action);
      }
    }
  }
};

var initInstance = function initInstance() {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};

var modal_showNextMsg = function showNextMsg() {
  if (!instance) {
    initInstance();
  }
  instance.action = '';

  if (!instance.visible || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      var options = currentMsg.options;
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }

      var oldCb = instance.callback;
      instance.callback = function (action, instance) {
        oldCb(action, instance);
        showNextMsg();
      };
      if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
      } else {
        delete instance.$slots.default;
      }
      ['modal', 'showClose', 'closeOnClickModal'].forEach(function (prop) {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      document.body.appendChild(instance.$el);

      external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.nextTick(function () {
        instance.visible = true;
      });
    }
  }
};

var modal_MessageBox = function MessageBox(options, callback) {
  if (external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$isServer) return;
  if (typeof options === 'string' || isVNode(options)) {
    options = {
      message: options
    };
    if (typeof arguments[1] === 'string') {
      options.title = arguments[1];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof promise_default.a !== 'undefined') {
    return new promise_default.a(function (resolve, reject) {
      msgQueue.push({
        options: merge({}, defaults, MessageBox.defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });

      modal_showNextMsg();
    });
  } else {
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults, options),
      callback: callback
    });

    modal_showNextMsg();
  }
};

// MessageBox.setDefaults = defaults => {
//   MessageBox.defaults = defaults
// }

modal_MessageBox.alert = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : typeof_default()(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return modal_MessageBox(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnClickModal: false
  }, options));
};

modal_MessageBox.confirm = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : typeof_default()(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return modal_MessageBox(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

modal_MessageBox.prompt = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : typeof_default()(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return modal_MessageBox(merge({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    confirmButtonDisabled: true,
    $type: 'prompt'
  }, options));
};

modal_MessageBox.close = function () {
  instance.doClose();
  instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$alert = modal_MessageBox.alert;
external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$confirm = modal_MessageBox.confirm;
external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$prompt = modal_MessageBox.prompt;

/* harmony default export */ var packages_modal = (modal_MessageBox);
// CONCATENATED MODULE: ./packages/picker/draggable.js


var isDragging = false;
var supportTouch = !external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$isServer && 'ontouchstart' in window;

/* harmony default export */ var draggable = (function (element, options) {
  var moveFn = function moveFn(event) {
    if (options.drag) {
      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  };

  var endFn = function endFn(event) {
    if (!supportTouch) {
      document.removeEventListener('mousemove', moveFn);
      document.removeEventListener('mouseup', endFn);
    }
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  };

  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
    if (isDragging) return;
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };

    if (!supportTouch) {
      document.addEventListener('mousemove', moveFn);
      document.addEventListener('mouseup', endFn);
    }
    isDragging = true;

    if (options.start) {
      event.preventDefault();
      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
    }
  });

  if (supportTouch) {
    element.addEventListener('touchmove', moveFn);
    element.addEventListener('touchend', endFn);
    element.addEventListener('touchcancel', endFn);
  }
});
// CONCATENATED MODULE: ./packages/picker/translate.js


var exportObj = {};
if (!external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$isServer) {
  var docStyle = document.documentElement.style;
  var engine;
  var translate3d = false;

  if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
    engine = 'presto';
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko';
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
  }

  var cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];

  var vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O' }[engine];

  var helperElem = document.createElement('div');
  var perspectiveProperty = vendorPrefix + 'Perspective';
  var translate_transformProperty = vendorPrefix + 'Transform';
  var transformStyleName = cssPrefix + 'transform';
  var transitionProperty = vendorPrefix + 'Transition';
  var transitionStyleName = cssPrefix + 'transition';
  var transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd';

  if (helperElem.style[perspectiveProperty] !== undefined) {
    translate3d = true;
  }

  var getTranslate = function getTranslate(element) {
    var result = { left: 0, top: 0 };
    if (element === null || element.style === null) return result;

    var transform = element.style[translate_transformProperty];
    var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/ig.exec(transform);
    if (matches) {
      result.left = +matches[1];
      result.top = +matches[3];
    }

    return result;
  };

  var translateElement = function translateElement(element, x, y) {
    if (x === null && y === null) return;

    if (element === null || element === undefined || element.style === null) return;

    if (!element.style[translate_transformProperty] && x === 0 && y === 0) return;

    if (x === null || y === null) {
      var translate = getTranslate(element);
      if (x === null) {
        x = translate.left;
      }
      if (y === null) {
        y = translate.top;
      }
    }

    cancelTranslateElement(element);

    if (translate3d) {
      element.style[translate_transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ') translateZ(0px)';
    } else {
      element.style[translate_transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ')';
    }
  };

  var cancelTranslateElement = function cancelTranslateElement(element) {
    if (element === null || element.style === null) return;
    var transformValue = element.style[translate_transformProperty];
    if (transformValue) {
      transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '');
      element.style[translate_transformProperty] = transformValue;
    }
  };
  exportObj = {
    transformProperty: translate_transformProperty,
    transformStyleName: transformStyleName,
    transitionProperty: transitionProperty,
    transitionStyleName: transitionStyleName,
    transitionEndProperty: transitionEndProperty,
    getElementTranslate: getTranslate,
    translateElement: translateElement,
    cancelTranslateElement: cancelTranslateElement
  };
}

/* harmony default export */ var picker_translate = (exportObj);
// CONCATENATED MODULE: ./src/utils/dom.js



var isServer = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([:-_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : typeof_default()(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/picker/picker-column.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





if (typeof window !== 'undefined') {
  __webpack_require__(99);
}

var picker_column_rotateElement = function rotateElement(element, angle) {
  if (!element) return;
  var transformProperty = picker_translate.transformProperty;

  element.style[transformProperty] = element.style[transformProperty].replace(/rotateX\(.+?deg\)/gi, '') + (' rotateX(' + angle + 'deg)');
};

var ITEM_HEIGHT = 36;
var VISIBLE_ITEMS_ANGLE_MAP = {
  3: -45,
  5: -20,
  7: -15
};

/* harmony default export */ var picker_column = ({
  name: 'ic-picker-column',

  props: {
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {},
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: String,
    rotateEffect: {
      type: Boolean,
      default: false
    },
    divider: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    flex: {},
    className: {},
    content: {},
    itemHeight: {
      type: Number,
      default: ITEM_HEIGHT
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      currentValue: this.value,
      mutatingValues: this.values,
      dragging: false,
      animationFrameId: null
    };
  },


  mixins: [emitter],

  computed: {
    flexStyle: function flexStyle() {
      return {
        'flex': this.flex,
        '-webkit-box-flex': this.flex,
        '-moz-box-flex': this.flex,
        '-ms-flex': this.flex
      };
    },
    classNames: function classNames() {
      var PREFIX = 'ic-picker__slot--';
      var resultArray = [];

      if (this.rotateEffect) {
        resultArray.push(PREFIX + 'absolute');
      }

      var textAlign = this.textAlign || 'center';
      resultArray.push(PREFIX + textAlign);

      if (this.divider) {
        resultArray.push(PREFIX + 'divider');
      }

      if (this.className) {
        resultArray.push(this.className);
      }

      return resultArray.join(' ');
    },
    contentHeight: function contentHeight() {
      return this.itemHeight * this.visibleItemCount;
    },
    valueIndex: function valueIndex() {
      var valueKey = this.valueKey;
      if (this.currentValue instanceof Object) {
        for (var i = 0, len = this.mutatingValues.length; i < len; i++) {
          if (this.currentValue[valueKey] === this.mutatingValues[i][valueKey]) {
            return i;
          }
        }
        return -1;
      } else {
        return this.mutatingValues.indexOf(this.currentValue);
      }
    },
    dragRange: function dragRange() {
      var values = this.mutatingValues;
      var visibleItemCount = this.visibleItemCount;
      var itemHeight = this.itemHeight;

      return [-itemHeight * (values.length - Math.ceil(visibleItemCount / 2)), itemHeight * Math.floor(visibleItemCount / 2)];
    },
    minTranslateY: function minTranslateY() {
      return this.itemHeight * (Math.ceil(this.visibleItemCount / 2) - this.mutatingValues.length);
    },
    maxTranslateY: function maxTranslateY() {
      return this.itemHeight * Math.floor(this.visibleItemCount / 2);
    }
  },

  methods: {
    value2Translate: function value2Translate(value) {
      var values = this.mutatingValues;
      var valueIndex = values.indexOf(value);
      var offset = Math.floor(this.visibleItemCount / 2);
      var itemHeight = this.itemHeight;

      if (valueIndex !== -1) {
        return (valueIndex - offset) * -itemHeight;
      }
    },
    translate2Value: function translate2Value(translate) {
      var itemHeight = this.itemHeight;
      // get a int translate of itemHeight
      translate = Math.round(translate / itemHeight) * itemHeight;
      var index = -(translate - Math.floor(this.visibleItemCount / 2) * itemHeight) / itemHeight;

      return this.mutatingValues[index];
    },


    updateRotate: function updateRotate(currentTranslate, pickerItems) {
      var _this = this;

      if (this.divider) return;
      var dragRange = this.dragRange;
      var wrapper = this.$refs.wrapper;

      if (!pickerItems) {
        pickerItems = wrapper.querySelectorAll('.ic-picker__item');
      }

      if (currentTranslate === undefined) {
        currentTranslate = picker_translate.getElementTranslate(wrapper).top;
      }

      var itemsFit = Math.ceil(this.visibleItemCount / 2);
      var angleUnit = VISIBLE_ITEMS_ANGLE_MAP[this.visibleItemCount] || -20;[].forEach.call(pickerItems, function (item, index) {
        var itemOffsetTop = index * _this.itemHeight;
        var translateOffset = dragRange[1] - currentTranslate;
        var itemOffset = itemOffsetTop - translateOffset;
        var percentage = itemOffset / _this.itemHeight;

        var angle = angleUnit * percentage;
        if (angle > 180) angle = 180;
        if (angle < -180) angle = -180;

        picker_column_rotateElement(item, angle);

        if (Math.abs(percentage) > itemsFit) {
          addClass(item, 'ic-picker__item--far');
        } else {
          removeClass(item, 'ic-picker__item--far');
        }
      });
    },

    planUpdateRotate: function planUpdateRotate() {
      var _this2 = this;

      var el = this.$refs.wrapper;
      cancelAnimationFrame(this.animationFrameId);

      this.animationFrameId = requestAnimationFrame(function () {
        _this2.updateRotate();
      });

      once(el, picker_translate.transitionEndProperty, function () {
        cancelAnimationFrame(_this2.animationFrameId);
        _this2.animationFrameId = null;
      });
    },

    initEvents: function initEvents() {
      var _this3 = this;

      var el = this.$refs.wrapper;
      var dragState = {};

      var velocityTranslate, prevTranslate, pickerItems;

      draggable(el, {
        start: function start(event) {
          cancelAnimationFrame(_this3.animationFrameId);
          _this3.animationFrameId = null;
          dragState = {
            range: _this3.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: picker_translate.getElementTranslate(el).top
          };
          pickerItems = el.querySelectorAll('.ic-picker__item');
        },

        drag: function drag(event) {
          _this3.dragging = true;

          dragState.left = event.pageX;
          dragState.top = event.pageY;

          var deltaY = dragState.top - dragState.startTop;
          var translate = dragState.startTranslateTop + deltaY;

          picker_translate.translateElement(el, null, translate);

          velocityTranslate = translate - prevTranslate || translate;

          prevTranslate = translate;

          if (_this3.rotateEffect) {
            _this3.updateRotate(prevTranslate, pickerItems);
          }
        },

        end: function end(event) {
          _this3.dragging = false;

          var momentumRatio = 7;
          var currentTranslate = picker_translate.getElementTranslate(el).top;
          var duration = new Date() - dragState.start;
          var distance = Math.abs(dragState.startTranslateTop - currentTranslate);
          var itemHeight = _this3.itemHeight;
          var visibleItemCount = _this3.visibleItemCount;

          var rect = void 0,
              offset = void 0;
          if (distance < 6) {
            rect = _this3.$el.getBoundingClientRect();
            offset = Math.floor((event.clientY - (rect.top + (visibleItemCount - 1) * itemHeight / 2)) / itemHeight) * itemHeight;

            if (offset > _this3.maxTranslateY) {
              offset = _this3.maxTranslateY;
            }

            velocityTranslate = 0;
            currentTranslate -= offset;
          }

          var momentumTranslate;
          if (duration < 300) {
            momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
          }

          var dragRange = dragState.range;

          _this3.$nextTick(function () {
            var translate;
            if (momentumTranslate) {
              translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
            } else {
              translate = Math.round(currentTranslate / itemHeight) * itemHeight;
            }

            translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);

            picker_translate.translateElement(el, null, translate);

            _this3.currentValue = _this3.translate2Value(translate);

            if (_this3.rotateEffect) {
              _this3.planUpdateRotate();
            }
          });

          dragState = {};
        }
      });
    },
    doOnValueChange: function doOnValueChange() {
      var value = this.currentValue;
      var wrapper = this.$refs.wrapper;

      picker_translate.translateElement(wrapper, null, this.value2Translate(value));
    },
    doOnValuesChange: function doOnValuesChange() {
      var _this4 = this;

      var el = this.$el;
      var items = el.querySelectorAll('.ic-picker__item');[].forEach.call(items, function (item, index) {
        picker_translate.translateElement(item, null, _this4.itemHeight * index);
      });
      if (this.rotateEffect) {
        this.planUpdateRotate();
      }
    }
  },

  mounted: function mounted() {
    this.ready = true;

    if (!this.divider) {
      this.initEvents();
      this.doOnValueChange();
    }

    if (this.rotateEffect) {
      this.doOnValuesChange();
    }
  },


  watch: {
    values: function values(val) {
      this.mutatingValues = val;
    },
    mutatingValues: function mutatingValues(val) {
      var _this5 = this;

      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0];
      }
      if (this.rotateEffect) {
        this.$nextTick(function () {
          _this5.doOnValuesChange();
        });
      }
    },
    currentValue: function currentValue(val) {
      this.doOnValueChange();
      if (this.rotateEffect) {
        this.planUpdateRotate();
      }
      this.$emit('input', val);
      this.dispatch('ic-picker', 'itemValueChange', this);
    },
    defaultIndex: function defaultIndex(val) {
      // ensure in the range
      if (this.mutatingValues[val] !== undefined && this.mutatingValues.length >= val + 1) {
        this.currentValue = this.mutatingValues[val];
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-321b4172","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/picker/picker-column.vue
var picker_column_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-picker__slot",class:_vm.classNames,style:(_vm.flexStyle)},[(!_vm.divider)?_c('div',{ref:"wrapper",staticClass:"ic-picker__wrapper",class:{ 'ic-picker--dragging': _vm.dragging },style:({ height: _vm.contentHeight + 'px' })},_vm._l((_vm.mutatingValues),function(itemValue){return _c('div',{staticClass:"ic-picker__item",class:{
        'ic-picker__item--selected': itemValue === _vm.currentValue
      },style:({
        height: _vm.itemHeight + 'px',
        lineHeight: _vm.itemHeight + 'px'
      })},[_vm._v("\n      "+_vm._s(typeof itemValue === 'object' && itemValue[_vm.valueKey] ? itemValue[_vm.valueKey] : itemValue)+"\n    ")])})):_vm._e(),(_vm.divider)?_c('div',[_vm._v(_vm._s(_vm.content))]):_vm._e()])}
var picker_column_staticRenderFns = []
var picker_column_esExports = { render: picker_column_render, staticRenderFns: picker_column_staticRenderFns }
/* harmony default export */ var picker_picker_column = (picker_column_esExports);
// CONCATENATED MODULE: ./packages/picker/picker-column.vue
var picker_column_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var picker_column___vue_template_functional__ = false
/* styles */
var picker_column___vue_styles__ = null
/* scopeId */
var picker_column___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var picker_column___vue_module_identifier__ = null
var picker_column_Component = picker_column_normalizeComponent(
  picker_column,
  picker_picker_column,
  picker_column___vue_template_functional__,
  picker_column___vue_styles__,
  picker_column___vue_scopeId__,
  picker_column___vue_module_identifier__
)

/* harmony default export */ var packages_picker_picker_column = (picker_column_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/picker/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var picker = ({
  name: 'ic-picker',

  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showToolbar: {
      type: Boolean,
      default: false
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: String,
    rotateEffect: {
      type: Boolean,
      default: false
    },
    itemHeight: {
      type: Number,
      default: 36
    }
  },
  computed: {
    // get every item default value
    values: {
      get: function get() {
        var values = [];
        var valueIndexCount = 0;
        this.items.forEach(function (item) {
          if (!item.divider) {
            item.valueIndex = valueIndexCount++;
            var defaultIndex = item.defaultIndex === -1 ? '' : item.defaultIndex || 0;
            values[item.valueIndex] = (item.values || [])[defaultIndex];
          }
        });
        return values;
      }
    },
    // get the number of not divider item
    itemCount: function itemCount() {
      var result = 0;
      this.items.forEach(function (item) {
        if (!item.divider) result++;
      });
      return result;
    }
  },
  methods: {
    handleCancel: function handleCancel() {
      this.$emit('cancel');
    },
    handleConfirm: function handleConfirm() {
      this.$emit('confirm', this.values);
    },
    itemValueChange: function itemValueChange() {
      this.$emit('change', this, this.values);
    },

    // get not divider child component by index
    getItem: function getItem(itemIndex) {
      var count = 0;
      var target = void 0;
      var children = this.$children.filter(function (child) {
        return child.$options.name === 'picker-column';
      });

      this.items.forEach(function (item, index) {
        if (!item.divider) {
          if (itemIndex === count) {
            target = children[index];
          }
          count++;
        }
      });

      return target;
    },
    getItemValue: function getItemValue(index) {
      var item = this.getItem(index);
      if (item) {
        return item.currentValue;
      }
      return null;
    },
    setItemValue: function setItemValue(index, value) {
      var item = this.getItem(index);
      if (item) {
        item.currentValue = value;
      }
    },
    getItemValues: function getItemValues(index) {
      var item = this.getItem(index);
      if (item) {
        return item.mutatingValues;
      }
      return null;
    },
    setItemValues: function setItemValues(index, values) {
      var item = this.getItem(index);
      if (item) {
        item.mutatingValues = values;
      }
    },
    getValues: function getValues() {
      return this.values;
    },
    setValues: function setValues(values) {
      var _this = this;

      var itemCount = this.itemCount;
      values = values || [];
      if (itemCount !== values.length) {
        throw new Error('values length is not equal item count.');
      }
      values.forEach(function (value, index) {
        _this.setItemValue(index, value);
      });
    }
  },
  created: function created() {
    this.$on('itemValueChange', this.itemValueChange);
    this.itemValueChange();
  },

  components: { PickerColumn: packages_picker_picker_column }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1dc2e5cd","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/picker/index.vue
var picker_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-picker",class:{ 'ic-picker--3d': _vm.rotateEffect }},[(_vm.showToolbar)?_c('div',{staticClass:"ic-picker__toolbar"},[_vm._t("default")],2):_vm._e(),_c('div',{staticClass:"ic-picker__items"},[_vm._l((_vm.items),function(item,index){return _c('picker-column',{key:index,attrs:{"valueKey":_vm.valueKey,"values":item.values || [],"text-align":item.textAlign || 'center',"visible-item-count":_vm.visibleItemCount,"class-name":item.className,"flex":item.flex,"rotate-effect":_vm.rotateEffect,"divider":item.divider,"content":item.content,"itemHeight":_vm.itemHeight,"default-index":item.defaultIndex},model:{value:(_vm.values[item.valueIndex]),callback:function ($$v) {_vm.$set(_vm.values, item.valueIndex, $$v)},expression:"values[item.valueIndex]"}})}),_c('div',{staticClass:"ic-picker__highlight",style:({
        height: _vm.itemHeight + 'px',
        marginTop: -_vm.itemHeight / 2 + 'px'
      })})],2)])}
var picker_staticRenderFns = []
var picker_esExports = { render: picker_render, staticRenderFns: picker_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_picker = (picker_esExports);
// CONCATENATED MODULE: ./packages/picker/index.vue
var picker_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var picker___vue_template_functional__ = false
/* styles */
var picker___vue_styles__ = null
/* scopeId */
var picker___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var picker___vue_module_identifier__ = null
var picker_Component = picker_normalizeComponent(
  picker,
  selectortype_template_index_0_packages_picker,
  picker___vue_template_functional__,
  picker___vue_styles__,
  picker___vue_scopeId__,
  picker___vue_module_identifier__
)

/* harmony default export */ var packages_picker = (picker_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/popup/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var popup = ({
  name: 'ic-popup',

  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close: function close() {
      this.$emit('update:visible', false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6645cfe7","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/popup/index.vue
var popup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-popup",class:{
    'ic-popup--visible': _vm.visible
  }},[_c('div',{staticClass:"ic-popup__backdrop",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.close($event)}}}),_c('div',{staticClass:"ic-popup__content"},[_vm._t("default")],2)])}
var popup_staticRenderFns = []
var popup_esExports = { render: popup_render, staticRenderFns: popup_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_popup = (popup_esExports);
// CONCATENATED MODULE: ./packages/popup/index.vue
var popup_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var popup___vue_template_functional__ = false
/* styles */
var popup___vue_styles__ = null
/* scopeId */
var popup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var popup___vue_module_identifier__ = null
var popup_Component = popup_normalizeComponent(
  popup,
  selectortype_template_index_0_packages_popup,
  popup___vue_template_functional__,
  popup___vue_styles__,
  popup___vue_scopeId__,
  popup___vue_module_identifier__
)

/* harmony default export */ var packages_popup = (popup_Component.exports);

// CONCATENATED MODULE: ./src/utils/throttle.js
// http://www.alloyteam.com/2012/11/javascript-throttle/

function throttle(fn, delay) {
  var mustRunDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var timer = null;
  var tStart = void 0;
  return function () {
    var context = this;
    var args = arguments;
    var tCurr = +new Date();
    clearTimeout(timer);
    if (!tStart) {
      tStart = tCurr;
    }
    if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args);
      tStart = tCurr;
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  };
}
// CONCATENATED MODULE: ./packages/pull/config.js
var TOP_DEFAULT_CONFIG = {
  pullText: '下拉刷新',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 50,
  triggerDistance: 70
};

var BOTTOM_DEFAULT_CONFIG = {
  pullText: '上拉加载',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 50,
  triggerDistance: 70
};


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/pull/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var pull = ({
  name: 'ic-pull',
  props: {
    distanceIndex: {
      type: Number,
      default: 2
    },
    topBlockHeight: {
      type: Number,
      default: 50
    },
    bottomBlockHeight: {
      type: Number,
      default: 50
    },
    wrapperHeight: {
      type: String,
      default: '100%'
    },
    topLoadMethod: {
      type: Function
    },
    bottomLoadMethod: {
      type: Function
    },
    isThrottleTopPull: {
      type: Boolean,
      default: true
    },
    isThrottleBottomPull: {
      type: Boolean,
      default: true
    },
    isThrottleScroll: {
      type: Boolean,
      default: true
    },
    isTopBounce: {
      type: Boolean,
      default: true
    },
    isBottomBounce: {
      type: Boolean,
      default: true
    },
    topConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    bottomConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    infiniteScrollLoadingText: {
      type: String,
      default: '加载中...'
    },
    infiniteScrollEndText: {
      type: String,
      default: '没有更多啦'
    },
    isInfiniteScrollEnd: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      scrollEl: null,
      startScrollTop: 0,
      startY: 0,
      currentY: 0,
      distance: 0,
      direction: 0,
      diff: 0,
      beforeDiff: 0,
      topText: '',
      bottomText: '',
      state: '',
      bottomReached: false,
      throttleEmitTopPull: null,
      throttleEmitBottomPull: null,
      throttleEmitScroll: null,
      throttleOnInfiniteScroll: null
    };
  },

  computed: {
    _topConfig: function _topConfig() {
      return assign_default()({}, TOP_DEFAULT_CONFIG, this.topConfig);
    },
    _bottomConfig: function _bottomConfig() {
      return assign_default()({}, BOTTOM_DEFAULT_CONFIG, this.bottomConfig);
    }
  },
  watch: {
    state: function state(val) {
      if (this.direction === 'down') {
        this.$emit('top-state-change', val);
      } else {
        this.$emit('bottom-state-change', val);
      }
    }
  },
  methods: {
    actionPull: function actionPull() {
      this.state = 'pull';
      this.direction === 'down' ? this.topText = this._topConfig.pullText : this.bottomText = this._bottomConfig.pullText;
    },
    actionTrigger: function actionTrigger() {
      this.state = 'trigger';
      this.direction === 'down' ? this.topText = this._topConfig.triggerText : this.bottomText = this._bottomConfig.triggerText;
    },
    actionLoading: function actionLoading() {
      this.state = 'loading';
      if (this.direction === 'down') {
        this.topText = this._topConfig.loadingText;
        this.topLoadMethod.call(this, this.actionLoaded);
        this.scrollTo(this._topConfig.stayDistance);
      } else {
        this.bottomText = this._bottomConfig.loadingText;
        this.bottomLoadMethod.call(this, this.actionLoaded);
        this.scrollTo(-this._bottomConfig.stayDistance);
      }
    },
    actionLoaded: function actionLoaded() {
      var _this = this;

      var loadState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'done';

      this.state = 'loaded-' + loadState;
      var loadedStayTime = void 0;
      if (this.direction === 'down') {
        this.topText = loadState === 'done' ? this._topConfig.doneText : this._topConfig.failText;
        loadedStayTime = this._topConfig.loadedStayTime;
      } else {
        this.bottomText = loadState === 'done' ? this._bottomConfig.doneText : this._bottomConfig.failText;
        loadedStayTime = this._bottomConfig.loadedStayTime;
      }
      setTimeout(function () {
        _this.scrollTo(0);

        // reset state
        setTimeout(function () {
          _this.state = '';
        }, 200);
      }, loadedStayTime);
    },
    scrollTo: function scrollTo(y) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      this.$el.style.transition = duration + 'ms';
      this.diff = y;
      setTimeout(function () {
        _this2.$el.style.transition = '';
      }, duration);
    },
    checkBottomReached: function checkBottomReached() {
      return this.scrollEl.scrollTop + this.scrollEl.offsetHeight + 1 >= this.scrollEl.scrollHeight;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.beforeDiff = this.diff;
      this.startScrollTop = this.scrollEl.scrollTop;
      this.bottomReached = this.checkBottomReached();
    },
    handleTouchMove: function handleTouchMove(event) {
      this.currentY = event.touches[0].clientY;
      this.distance = (this.currentY - this.startY) / this.distanceIndex + this.beforeDiff;
      this.direction = this.distance > 0 ? 'down' : 'up';

      if (this.startScrollTop === 0 && this.direction === 'down' && this.isTopBounce) {
        event.preventDefault();
        event.stopPropagation();
        this.diff = this.distance;
        this.isThrottleTopPull ? this.throttleEmitTopPull(this.diff) : this.$emit('top-pull', this.diff);

        if (typeof this.topLoadMethod !== 'function') return;

        if (this.distance < this._topConfig.triggerDistance && this.state !== 'pull' && this.state !== 'loading') {
          this.actionPull();
        } else if (this.distance >= this._topConfig.triggerDistance && this.state !== 'trigger' && this.state !== 'loading') {
          this.actionTrigger();
        }
      } else if (this.bottomReached && this.direction === 'up' && this.isBottomBounce) {
        event.preventDefault();
        event.stopPropagation();
        this.diff = this.distance;
        this.isThrottleBottomPull ? this.throttleEmitBottomPull(this.diff) : this.$emit('bottom-pull', this.diff);

        if (typeof this.bottomLoadMethod !== 'function') return;

        if (Math.abs(this.distance) < this._bottomConfig.triggerDistance && this.state !== 'pull' && this.state !== 'loading') {
          this.actionPull();
        } else if (Math.abs(this.distance) >= this._bottomConfig.triggerDistance && this.state !== 'trigger' && this.state !== 'loading') {
          this.actionTrigger();
        }
      }
    },
    handleTouchEnd: function handleTouchEnd() {
      if (this.diff !== 0) {
        if (this.state === 'trigger') {
          this.actionLoading();
          return;
        }

        // pull cancel
        this.scrollTo(0);
      }
    },
    handleScroll: function handleScroll(event) {
      this.isThrottleScroll ? this.throttleEmitScroll(event) : this.$emit('scroll', event);
      this.throttleOnInfiniteScroll();
    },
    onInfiniteScroll: function onInfiniteScroll() {
      if (this.checkBottomReached() && !this.isInfiniteScrollEnd) {
        this.$emit('infinite-scroll');
      }
    },
    throttleEmit: function throttleEmit(delay) {
      var mustRunDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var eventName = arguments[2];

      var throttleMethod = function throttleMethod() {
        var args = [].concat(Array.prototype.slice.call(arguments));
        args.unshift(eventName);
        this.$emit.apply(this, args);
      };

      return throttle(throttleMethod, delay, mustRunDelay);
    },
    bindEvents: function bindEvents() {
      this.scrollEl.addEventListener('touchstart', this.handleTouchStart);
      this.scrollEl.addEventListener('touchmove', this.handleTouchMove);
      this.scrollEl.addEventListener('touchend', this.handleTouchEnd);
      this.scrollEl.addEventListener('scroll', this.handleScroll);
    },
    createThrottleMethods: function createThrottleMethods() {
      this.throttleEmitTopPull = this.throttleEmit(200, 300, 'top-pull');
      this.throttleEmitBottomPull = this.throttleEmit(200, 300, 'bottom-pull');
      this.throttleEmitScroll = this.throttleEmit(100, 150, 'scroll');
      this.throttleOnInfiniteScroll = throttle(this.onInfiniteScroll, 400);
    },
    init: function init() {
      this.createThrottleMethods();
      this.scrollEl = this.$el.querySelector('.ic-pull__scroller');
      this.bindEvents();
    }
  },
  mounted: function mounted() {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3b866e86","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/pull/index.vue
var pull_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-pull",style:({ height: _vm.wrapperHeight, transform: ("translate3d(0, " + _vm.diff + "px, 0)") })},[(_vm.topLoadMethod)?_c('div',{staticClass:"ic-pull__action-block",style:({ height: (_vm.topBlockHeight + "px"), marginTop: ((-_vm.topBlockHeight) + "px") })},[_vm._t("top-block",[_c('p',{staticClass:"ic__default-text"},[_vm._v(_vm._s(_vm.topText))])],{state:_vm.state,stateText:_vm.topText})],2):_vm._e(),_c('div',{staticClass:"ic-pull__scroller"},[_vm._t("default"),_c('div',{staticClass:"ic-pull__infinite-loading"},[(!_vm.topLoadMethod && !_vm.bottomLoadMethod && !_vm.isInfiniteScrollEnd)?[_c('ic-spinner',{attrs:{"type":"gradient","size":"small"}}),_c('span',[_vm._v(_vm._s(_vm.infiniteScrollLoadingText))])]:(_vm.isInfiniteScrollEnd)?_c('span',[_vm._v("\n        "+_vm._s(_vm.infiniteScrollEndText)+"\n      ")]):_vm._e()],2)],2),(_vm.bottomLoadMethod)?_c('div',{staticClass:"ic-pull__action-block",style:({ height: (_vm.bottomBlockHeight + "px"), marginBottom: ((-_vm.bottomBlockHeight) + "px") })},[_vm._t("bottom-block",[_c('p',{staticClass:"ic-pull__default-text"},[_vm._v(_vm._s(_vm.bottomText))])],{state:_vm.state,stateText:_vm.bottomText})],2):_vm._e()])}
var pull_staticRenderFns = []
var pull_esExports = { render: pull_render, staticRenderFns: pull_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_pull = (pull_esExports);
// CONCATENATED MODULE: ./packages/pull/index.vue
var pull_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var pull___vue_template_functional__ = false
/* styles */
var pull___vue_styles__ = null
/* scopeId */
var pull___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var pull___vue_module_identifier__ = null
var pull_Component = pull_normalizeComponent(
  pull,
  selectortype_template_index_0_packages_pull,
  pull___vue_template_functional__,
  pull___vue_styles__,
  pull___vue_scopeId__,
  pull___vue_module_identifier__
)

/* harmony default export */ var packages_pull = (pull_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/radio/index.vue
//
//
//
//
//
//

/* harmony default export */ var selectortype_script_index_0_packages_radio = ({
  name: 'ic-radio'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4a23b846","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/radio/index.vue
var radio_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var radio_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-radio"},[_c('input',{attrs:{"type":"radio","name":""}})])}]
var radio_esExports = { render: radio_render, staticRenderFns: radio_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_radio = (radio_esExports);
// CONCATENATED MODULE: ./packages/radio/index.vue
var radio_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var radio___vue_template_functional__ = false
/* styles */
var radio___vue_styles__ = null
/* scopeId */
var radio___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var radio___vue_module_identifier__ = null
var radio_Component = radio_normalizeComponent(
  selectortype_script_index_0_packages_radio,
  selectortype_template_index_0_packages_radio,
  radio___vue_template_functional__,
  radio___vue_styles__,
  radio___vue_scopeId__,
  radio___vue_module_identifier__
)

/* harmony default export */ var packages_radio = (radio_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/spinner/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var spinner = ({
  name: 'ic-spinner',

  props: {
    type: {
      type: String,
      default: 'default' // crash-ball, circle, gradient
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium' // small
    }
  },
  computed: {
    colors: function colors() {
      return this.color.trim().split(/\s+/);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-79ef8978","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/spinner/index.vue
var spinner_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-spinner",class:[
    'ic-spinner--' + _vm.type,
    'ic-spinner--' + _vm.size
  ]},[(_vm.type === 'default')?_c('span',{staticClass:"ic-spinner__inner",style:({ color: _vm.colors[0] })},_vm._l((12),function(i){return _c('i',{key:i})})):_vm._e(),(_vm.type === 'circle')?_c('span',{staticClass:"ic-spinner__inner",style:({
      'border-color': _vm.colors[0],
      'border-left-color': 'transparent'
    })}):_vm._e(),(_vm.type === 'gradient')?_c('div',{staticClass:"ic-spinner__inner"},[_c('div',{staticClass:"ic-spinner--gradient-left"}),_c('div',{staticClass:"ic-spinner--gradient-top"}),_c('div',{staticClass:"ic-spinner--gradient-bottom"}),_c('div',{staticClass:"ic-spinner--gradient-patch"})]):_vm._e(),(_vm.type === 'crash-ball')?_c('span',{staticClass:"ic-spinner__inner"},_vm._l((['top', 'right', 'bottom', 'left']),function(val,index){return _c('i',{class:[ 'ic-spinner--' + val ],style:({
        'background-color': _vm.colors[index]
      })})})):_vm._e()])}
var spinner_staticRenderFns = []
var spinner_esExports = { render: spinner_render, staticRenderFns: spinner_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_spinner = (spinner_esExports);
// CONCATENATED MODULE: ./packages/spinner/index.vue
var spinner_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var spinner___vue_template_functional__ = false
/* styles */
var spinner___vue_styles__ = null
/* scopeId */
var spinner___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var spinner___vue_module_identifier__ = null
var spinner_Component = spinner_normalizeComponent(
  spinner,
  selectortype_template_index_0_packages_spinner,
  spinner___vue_template_functional__,
  spinner___vue_styles__,
  spinner___vue_scopeId__,
  spinner___vue_module_identifier__
)

/* harmony default export */ var packages_spinner = (spinner_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/switch/index.vue
//
//
//
//
//
//

/* harmony default export */ var selectortype_script_index_0_packages_switch = ({
  name: 'ic-switch'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9d0ad8d2","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/switch/index.vue
var switch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-switch"})}
var switch_staticRenderFns = []
var switch_esExports = { render: switch_render, staticRenderFns: switch_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_switch = (switch_esExports);
// CONCATENATED MODULE: ./packages/switch/index.vue
var switch_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var switch___vue_template_functional__ = false
/* styles */
var switch___vue_styles__ = null
/* scopeId */
var switch___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var switch___vue_module_identifier__ = null
var switch_Component = switch_normalizeComponent(
  selectortype_script_index_0_packages_switch,
  selectortype_template_index_0_packages_switch,
  switch___vue_template_functional__,
  switch___vue_styles__,
  switch___vue_scopeId__,
  switch___vue_module_identifier__
)

/* harmony default export */ var packages_switch = (switch_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/tab/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tab = ({
  name: 'ic-tab',

  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'normal'
    },
    showDivider: {
      type: Boolean,
      default: true
    },
    cursorType: {
      type: String,
      default: 'disperse' // line
    },
    itemWidth: String
  },
  computed: {
    isDisperse: function isDisperse() {
      return this.cursorType === 'disperse';
    },
    itemStyle: function itemStyle() {
      return {
        width: this.itemWidth ? this.itemWidth : 100 / this.children.length + '%'
      };
    }
  },
  data: function data() {
    return {
      children: [],
      currentActive: this.defaultActive
    };
  },

  watch: {
    currentActive: function currentActive(newVal) {
      this.$emit('change', newVal);
    }
  },
  methods: {
    clickItem: function clickItem(index) {
      this.currentActive = index;
      this.$emit('click-item', this.currentActive);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f2985588","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/tab/index.vue
var tab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-tab",class:{
  'ic-tab--divider': _vm.showDivider,
  'ic-tab--disperse': _vm.isDisperse
}},[_c('div',{staticClass:"ic-tab__inner"},_vm._l((_vm.children),function(item,index){return _c('div',{key:index,staticClass:"ic-tab__item",class:{
        'ic-tab__item--active': index === _vm.currentActive
      },style:(_vm.itemStyle),on:{"click":function($event){_vm.clickItem(index)}}},[_vm._v("\n      "+_vm._s(item.title)+"\n    ")])})),_c('div',{staticClass:"ic-tab__content"},[_vm._t("default")],2)])}
var tab_staticRenderFns = []
var tab_esExports = { render: tab_render, staticRenderFns: tab_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_tab = (tab_esExports);
// CONCATENATED MODULE: ./packages/tab/index.vue
var tab_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var tab___vue_template_functional__ = false
/* styles */
var tab___vue_styles__ = null
/* scopeId */
var tab___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tab___vue_module_identifier__ = null
var tab_Component = tab_normalizeComponent(
  tab,
  selectortype_template_index_0_packages_tab,
  tab___vue_template_functional__,
  tab___vue_styles__,
  tab___vue_scopeId__,
  tab___vue_module_identifier__
)

/* harmony default export */ var packages_tab = (tab_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/tab-item/index.vue
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_item = ({
  name: 'ic-tab-item',

  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  computed: {
    index: function index() {
      return this.parentGroup.children.indexOf(this);
    }
  },
  created: function created() {
    if (!this.parentGroup) {
      this.parentGroup = findParentByName(this, 'ic-tab');
    }
    this.parentGroup.children.push(this);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-68152db6","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/tab-item/index.vue
var tab_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-tab__panel",class:{
    'ic-tab__panel--active': _vm.index == _vm.parentGroup.currentActive
  }},[_vm._t("default")],2)}
var tab_item_staticRenderFns = []
var tab_item_esExports = { render: tab_item_render, staticRenderFns: tab_item_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_tab_item = (tab_item_esExports);
// CONCATENATED MODULE: ./packages/tab-item/index.vue
var tab_item_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var tab_item___vue_template_functional__ = false
/* styles */
var tab_item___vue_styles__ = null
/* scopeId */
var tab_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tab_item___vue_module_identifier__ = null
var tab_item_Component = tab_item_normalizeComponent(
  tab_item,
  selectortype_template_index_0_packages_tab_item,
  tab_item___vue_template_functional__,
  tab_item___vue_styles__,
  tab_item___vue_scopeId__,
  tab_item___vue_module_identifier__
)

/* harmony default export */ var packages_tab_item = (tab_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/tabbar/index.vue
//
//
//
//
//
//

/* harmony default export */ var tabbar = ({
  name: 'ic-tabbar',

  props: {
    value: {}
  },
  provide: function provide() {
    return {
      tabbar: this
    };
  },
  data: function data() {
    return {
      currentActive: this.value
    };
  },

  methods: {
    setActive: function setActive(name) {
      this.currentActive = name;
      this.$emit('input', name);
      this.$emit('change', name);
    }
  },
  created: function created() {
    this.$on('set-active', this.setActive);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1352301a","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/tabbar/index.vue
var tabbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"ic-tabbar"},[_vm._t("default")],2)}
var tabbar_staticRenderFns = []
var tabbar_esExports = { render: tabbar_render, staticRenderFns: tabbar_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_tabbar = (tabbar_esExports);
// CONCATENATED MODULE: ./packages/tabbar/index.vue
var tabbar_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var tabbar___vue_template_functional__ = false
/* styles */
var tabbar___vue_styles__ = null
/* scopeId */
var tabbar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tabbar___vue_module_identifier__ = null
var tabbar_Component = tabbar_normalizeComponent(
  tabbar,
  selectortype_template_index_0_packages_tabbar,
  tabbar___vue_template_functional__,
  tabbar___vue_styles__,
  tabbar___vue_scopeId__,
  tabbar___vue_module_identifier__
)

/* harmony default export */ var packages_tabbar = (tabbar_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/tabbar-item/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tabbar_item = ({
  name: 'ic-tabbar-item',

  mixins: [emitter],
  props: {
    icon: String,
    text: String,
    route: [String, Object],
    name: [String, Number]
  },
  inject: ['tabbar'],
  methods: {
    clickItem: function clickItem() {
      this.dispatch('ic-tabbar', 'set-active', this.name);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9f9c786a","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/tabbar-item/index.vue
var tabbar_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ic-tabbar__item",class:{
    'ic-tabbar__item--active': _vm.name === _vm.tabbar.value
  },on:{"click":_vm.clickItem}},[_c('router-link',{attrs:{"to":_vm.route}},[_vm._t("default",[_c('ic-icon',{attrs:{"name":_vm.icon}})]),_c('div',{staticClass:"ic-tabbar__text"},[_vm._v(_vm._s(_vm.text))])],2)],1)}
var tabbar_item_staticRenderFns = []
var tabbar_item_esExports = { render: tabbar_item_render, staticRenderFns: tabbar_item_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_tabbar_item = (tabbar_item_esExports);
// CONCATENATED MODULE: ./packages/tabbar-item/index.vue
var tabbar_item_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var tabbar_item___vue_template_functional__ = false
/* styles */
var tabbar_item___vue_styles__ = null
/* scopeId */
var tabbar_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tabbar_item___vue_module_identifier__ = null
var tabbar_item_Component = tabbar_item_normalizeComponent(
  tabbar_item,
  selectortype_template_index_0_packages_tabbar_item,
  tabbar_item___vue_template_functional__,
  tabbar_item___vue_styles__,
  tabbar_item___vue_scopeId__,
  tabbar_item___vue_module_identifier__
)

/* harmony default export */ var packages_tabbar_item = (tabbar_item_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/tag/index.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tag = ({
  name: 'ic-tag',

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e3ce684","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/tag/index.vue
var tag_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ic-tag",class:[
    'ic-tag--' + _vm.type,
    'ic-tag--' + _vm.size
  ]},[_vm._t("default"),(_vm.closable)?_c('ic-icon'):_vm._e()],2)}
var tag_staticRenderFns = []
var tag_esExports = { render: tag_render, staticRenderFns: tag_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_tag = (tag_esExports);
// CONCATENATED MODULE: ./packages/tag/index.vue
var tag_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var tag___vue_template_functional__ = false
/* styles */
var tag___vue_styles__ = null
/* scopeId */
var tag___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tag___vue_module_identifier__ = null
var tag_Component = tag_normalizeComponent(
  tag,
  selectortype_template_index_0_packages_tag,
  tag___vue_template_functional__,
  tag___vue_styles__,
  tag___vue_scopeId__,
  tag___vue_module_identifier__
)

/* harmony default export */ var packages_tag = (tag_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/timeline/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var timeline = ({
  name: 'ic-timeline',

  props: {
    data: Array,
    dotColor: String,
    dotType: {
      type: String,
      default: 'circle' // fail, success
    },
    dotTypes: Object,
    lineColor: String,
    lineType: {
      type: String,
      default: 'dashed' // solid
    },
    lastLine: {
      type: Boolean,
      default: false
    },
    title: String,
    icon: String
  },
  computed: {
    dots: function dots() {
      var _this = this;

      var ret = [];
      for (var i = 0, l = this.data.length; i < l; i++) {
        ret[i] = this.dotType;
      }
      if (this.dotTypes) {
        keys_default()(this.dotTypes).forEach(function (index) {
          ret[index] = _this.dotTypes[index];
        });
      }
      return ret;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-075b6997","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/timeline/index.vue
var timeline_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"ic-timeline",class:{ 'ic-timeline--last': _vm.lastLine }},[_vm._t("title",[(_vm.title)?_c('li',{staticClass:"ic-timeline__header"},[_c('ic-icon',{attrs:{"name":_vm.icon}}),_c('span',{staticClass:"ic-timeline__title"},[_vm._v(_vm._s(_vm.title))])],1):_vm._e()]),_vm._l((_vm.data),function(item,index){return _c('li',{key:index,staticClass:"ic-timeline__item"},[_c('div',{staticClass:"ic-timeline__progress",class:[
        'ic-timeline__progress--' + _vm.lineType
      ],style:({ color: _vm.lineColor })},[_c('i',{class:[ 'glyph__' + _vm.dots[index] ],style:({ color: _vm.dotColor })})]),_c('div',{staticClass:"ic-timeline__content"},[_c('div',{staticClass:"ic-timeline__inner"},[_vm._t("default",null,{item:item,index:index})],2)])])})],2)}
var timeline_staticRenderFns = []
var timeline_esExports = { render: timeline_render, staticRenderFns: timeline_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_timeline = (timeline_esExports);
// CONCATENATED MODULE: ./packages/timeline/index.vue
var timeline_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var timeline___vue_template_functional__ = false
/* styles */
var timeline___vue_styles__ = null
/* scopeId */
var timeline___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var timeline___vue_module_identifier__ = null
var timeline_Component = timeline_normalizeComponent(
  timeline,
  selectortype_template_index_0_packages_timeline,
  timeline___vue_template_functional__,
  timeline___vue_styles__,
  timeline___vue_scopeId__,
  timeline___vue_module_identifier__
)

/* harmony default export */ var packages_timeline = (timeline_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/toast/toast.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var toast = ({
  name: 'ic-toast',
  props: {
    position: {
      type: String,
      default: 'middle' // top bottom
    },
    message: String,
    icon: String,
    duration: Number
  },
  data: function data() {
    return {
      visible: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-28ce4701","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/toast/toast.vue
var toast_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"toast-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ic-toast",class:[
      'ic-toast--' + _vm.position,
      {
        'ic-toast--icon': _vm.icon
      }
    ]},[(_vm.icon)?_c('ic-icon',{attrs:{"name":_vm.icon}}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.message))])],1)])}
var toast_staticRenderFns = []
var toast_esExports = { render: toast_render, staticRenderFns: toast_staticRenderFns }
/* harmony default export */ var toast_toast = (toast_esExports);
// CONCATENATED MODULE: ./packages/toast/toast.vue
var toast_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var toast___vue_template_functional__ = false
/* styles */
var toast___vue_styles__ = null
/* scopeId */
var toast___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var toast___vue_module_identifier__ = null
var toast_Component = toast_normalizeComponent(
  toast,
  toast_toast,
  toast___vue_template_functional__,
  toast___vue_styles__,
  toast___vue_scopeId__,
  toast___vue_module_identifier__
)

/* harmony default export */ var packages_toast_toast = (toast_Component.exports);

// CONCATENATED MODULE: ./packages/toast/index.js




var toastVm = void 0;

var toast_defaultOptions = {
  duration: 3000,
  visible: true,
  position: 'middle',
  icon: '',
  close: function close() {
    toastVm.timer && clearTimeout(toastVm.timer);
    toastVm.timer = null;
    toastVm.visible = false;
  }
};

var toast_createInstance = function createInstance() {
  if (!toastVm) {
    var ToastConstructor = external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.extend(packages_toast_toast);
    toastVm = new ToastConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(toastVm.$el);
  }
};

var toast_Toast = function Toast(options) {
  toast_createInstance();

  options = typeof options === 'string' ? { message: options, icon: '' } : options;
  options = assign_default()(toast_defaultOptions, options);
  // trigger update
  assign_default()(toastVm, options);

  toastVm.timer = setTimeout(function () {
    toastVm.close();
  }, toastVm.duration);

  return toastVm;
};

external___root___Vue___commonjs___vue___commonjs2___vue___amd___vue___default.a.prototype.$toast = function (options) {
  return toast_Toast(options);
};

/* harmony default export */ var packages_toast = (toast_Toast);
// CONCATENATED MODULE: ./src/utils/blob.js


/**
 * 获取blob中的数据，这个blob对象的来源可以是:
 * ①<input />元素，DataTransfer, mozGetFile() on HTMLCanvasElement
 * @param  {[type]} blob  [description]
 * @param  {[string]} type  [type of return data]
 * 'arraybuffer', 'binarystring', 'dataurl', 'text'
 * @return {[type]}       [description]
 */
function getBlobData(blob) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dataurl';

  return new promise_default.a(function (resolve, reject) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      resolve(fileReader.result);
    };

    fileReader.onerror = function (e) {
      reject(e);
    };

    switch (type) {
      case 'arraybuffer':
        return fileReader.readAsArrayBuffer(blob);
      case 'binarystring':
        return fileReader.readAsBinaryString(blob);
      case 'text':
        return fileReader.readAsText(blob);
      case 'dataurl':
      default:
        return fileReader.readAsDataURL(blob);
    }
  });
}

function canvas2DataURL(canvas) {
  var mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';
  var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.92;

  canvas = typeof canvas === 'string' ? document.getElementById(canvas) : canvas;
  if (canvas == null) canvas = createCanvas();
  return canvas.toDataURL(mimeType, quality);
}

/**
 * 读取本地的文件的内容转化为base64显示在页面上，并返回base64的结果的promise
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
function file2DataURL(input) {
  if (typeof input === 'string') {
    input = document.getElementById(input);
  }

  if (!input || input && !input.nodeType || input && input.nodeType && input.nodeType !== 1) return;

  input.addEventListener('change', function (e) {
    var files = e.target.files;

    if (files && files.length > 0) {
      return getBlobData(files[0]).then(function (result) {
        input.src = result;
        return result;
      });
    }
  });
}

function image2Canvas(image, canvas) {
  return new promise_default.a(function (resolve, reject) {
    var isUrl = /^(http:\/\/|https:\/\/|\.\/|\.\.\/|\/)/.test(image);

    if (isUrl) {
      var url = image;
      image = new Image();
      image.src = url;
    } else {
      image = typeof image === 'string' ? document.getElementById(image) : image;
    }

    if (image == null) return;

    canvas = typeof canvas === 'string' ? document.getElementById(canvas) : canvas;

    if (canvas == null) {
      canvas = createCanvas();
    }
    image.onload = function () {
      var ctx = canvas.getContext('2d');
      createImageBitmap(this, 0, 0).then(function (imageBitmap) {
        ctx.drawImage(imageBitmap, 0, 0);
        resolve(canvas);
      });
    };
    image.onerror = function (e) {
      return reject(e);
    };
  });
}

function rotateImage(orientation, imageBitmap) {
  var width = imageBitmap.width,
      height = imageBitmap.height;

  var canvas = createCanvas();
  var ctx = canvas.getContext('2d');

  switch (orientation) {
    case 3:
      // 180
      canvas.width = width;
      canvas.height = height;
      ctx.rotate(Math.PI);
      ctx.drawImage(imageBitmap, -width, -height);
      break;
    case 6:
      // 90
      canvas.width = height;
      canvas.height = width;
      ctx.rotate(Math.PI * 90 / 180);
      ctx.drawImage(imageBitmap, 0, -height);
      break;
    case 8:
      // -90
      canvas.width = height;
      canvas.height = width;
      ctx.rotate(Math.PI * 270 / 180);
      ctx.drawImage(imageBitmap, -width, 0);
      break;
    case 1: // 0
    default:
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(imageBitmap, 0, 0);
  }
  return canvas;
}

function getBitmapCanvas(image, orientation) {
  return new promise_default.a(function (resolve, reject) {
    createImageBitmap(image).then(function (imageBitmap) {
      resolve(rotateImage(orientation, imageBitmap));
    }).catch(function (error) {
      return reject(error);
    });
  });
}
// CONCATENATED MODULE: ./src/utils/exif.js

/* modified from https://github.com/exif-js/exif-js */
/* eslint-disable */
var debug = false;

var EXIF = function EXIF(obj) {
    if (obj instanceof EXIF) return obj;
    if (!(this instanceof EXIF)) return new EXIF(obj);
    this.EXIFwrapped = obj;
};

var ExifTags = EXIF.Tags = {

    // version tags
    0x9000: "ExifVersion", // EXIF version
    0xA000: "FlashpixVersion", // Flashpix format version

    // colorspace tags
    0xA001: "ColorSpace", // Color space information tag

    // image configuration
    0xA002: "PixelXDimension", // Valid width of meaningful image
    0xA003: "PixelYDimension", // Valid height of meaningful image
    0x9101: "ComponentsConfiguration", // Information about channels
    0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel

    // user information
    0x927C: "MakerNote", // Any desired information written by the manufacturer
    0x9286: "UserComment", // Comments by user

    // related file
    0xA004: "RelatedSoundFile", // Name of related sound file

    // date and time
    0x9003: "DateTimeOriginal", // Date and time when the original image was generated
    0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
    0x9290: "SubsecTime", // Fractions of seconds for DateTime
    0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
    0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized

    // picture-taking conditions
    0x829A: "ExposureTime", // Exposure time (in seconds)
    0x829D: "FNumber", // F number
    0x8822: "ExposureProgram", // Exposure program
    0x8824: "SpectralSensitivity", // Spectral sensitivity
    0x8827: "ISOSpeedRatings", // ISO speed rating
    0x8828: "OECF", // Optoelectric conversion factor
    0x9201: "ShutterSpeedValue", // Shutter speed
    0x9202: "ApertureValue", // Lens aperture
    0x9203: "BrightnessValue", // Value of brightness
    0x9204: "ExposureBias", // Exposure bias
    0x9205: "MaxApertureValue", // Smallest F number of lens
    0x9206: "SubjectDistance", // Distance to subject in meters
    0x9207: "MeteringMode", // Metering mode
    0x9208: "LightSource", // Kind of light source
    0x9209: "Flash", // Flash status
    0x9214: "SubjectArea", // Location and area of main subject
    0x920A: "FocalLength", // Focal length of the lens in mm
    0xA20B: "FlashEnergy", // Strobe energy in BCPS
    0xA20C: "SpatialFrequencyResponse", //
    0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
    0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
    0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
    0xA214: "SubjectLocation", // Location of subject in image
    0xA215: "ExposureIndex", // Exposure index selected on camera
    0xA217: "SensingMethod", // Image sensor type
    0xA300: "FileSource", // Image source (3 == DSC)
    0xA301: "SceneType", // Scene type (1 == directly photographed)
    0xA302: "CFAPattern", // Color filter array geometric pattern
    0xA401: "CustomRendered", // Special processing
    0xA402: "ExposureMode", // Exposure mode
    0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
    0xA404: "DigitalZoomRation", // Digital zoom ratio
    0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
    0xA406: "SceneCaptureType", // Type of scene
    0xA407: "GainControl", // Degree of overall image gain adjustment
    0xA408: "Contrast", // Direction of contrast processing applied by camera
    0xA409: "Saturation", // Direction of saturation processing applied by camera
    0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
    0xA40B: "DeviceSettingDescription", //
    0xA40C: "SubjectDistanceRange", // Distance to subject

    // other tags
    0xA005: "InteroperabilityIFDPointer",
    0xA420: "ImageUniqueID" // Identifier assigned uniquely to each image
};

var TiffTags = EXIF.TiffTags = {
    0x0100: "ImageWidth",
    0x0101: "ImageHeight",
    0x8769: "ExifIFDPointer",
    0x8825: "GPSInfoIFDPointer",
    0xA005: "InteroperabilityIFDPointer",
    0x0102: "BitsPerSample",
    0x0103: "Compression",
    0x0106: "PhotometricInterpretation",
    0x0112: "Orientation",
    0x0115: "SamplesPerPixel",
    0x011C: "PlanarConfiguration",
    0x0212: "YCbCrSubSampling",
    0x0213: "YCbCrPositioning",
    0x011A: "XResolution",
    0x011B: "YResolution",
    0x0128: "ResolutionUnit",
    0x0111: "StripOffsets",
    0x0116: "RowsPerStrip",
    0x0117: "StripByteCounts",
    0x0201: "JPEGInterchangeFormat",
    0x0202: "JPEGInterchangeFormatLength",
    0x012D: "TransferFunction",
    0x013E: "WhitePoint",
    0x013F: "PrimaryChromaticities",
    0x0211: "YCbCrCoefficients",
    0x0214: "ReferenceBlackWhite",
    0x0132: "DateTime",
    0x010E: "ImageDescription",
    0x010F: "Make",
    0x0110: "Model",
    0x0131: "Software",
    0x013B: "Artist",
    0x8298: "Copyright"
};

var GPSTags = EXIF.GPSTags = {
    0x0000: "GPSVersionID",
    0x0001: "GPSLatitudeRef",
    0x0002: "GPSLatitude",
    0x0003: "GPSLongitudeRef",
    0x0004: "GPSLongitude",
    0x0005: "GPSAltitudeRef",
    0x0006: "GPSAltitude",
    0x0007: "GPSTimeStamp",
    0x0008: "GPSSatellites",
    0x0009: "GPSStatus",
    0x000A: "GPSMeasureMode",
    0x000B: "GPSDOP",
    0x000C: "GPSSpeedRef",
    0x000D: "GPSSpeed",
    0x000E: "GPSTrackRef",
    0x000F: "GPSTrack",
    0x0010: "GPSImgDirectionRef",
    0x0011: "GPSImgDirection",
    0x0012: "GPSMapDatum",
    0x0013: "GPSDestLatitudeRef",
    0x0014: "GPSDestLatitude",
    0x0015: "GPSDestLongitudeRef",
    0x0016: "GPSDestLongitude",
    0x0017: "GPSDestBearingRef",
    0x0018: "GPSDestBearing",
    0x0019: "GPSDestDistanceRef",
    0x001A: "GPSDestDistance",
    0x001B: "GPSProcessingMethod",
    0x001C: "GPSAreaInformation",
    0x001D: "GPSDateStamp",
    0x001E: "GPSDifferential"
};

// EXIF 2.3 Spec
var IFD1Tags = EXIF.IFD1Tags = {
    0x0100: "ImageWidth",
    0x0101: "ImageHeight",
    0x0102: "BitsPerSample",
    0x0103: "Compression",
    0x0106: "PhotometricInterpretation",
    0x0111: "StripOffsets",
    0x0112: "Orientation",
    0x0115: "SamplesPerPixel",
    0x0116: "RowsPerStrip",
    0x0117: "StripByteCounts",
    0x011A: "XResolution",
    0x011B: "YResolution",
    0x011C: "PlanarConfiguration",
    0x0128: "ResolutionUnit",
    0x0201: "JpegIFOffset", // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
    0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
    0x0211: "YCbCrCoefficients",
    0x0212: "YCbCrSubSampling",
    0x0213: "YCbCrPositioning",
    0x0214: "ReferenceBlackWhite"
};

var StringValues = EXIF.StringValues = {
    ExposureProgram: {
        0: "Not defined",
        1: "Manual",
        2: "Normal program",
        3: "Aperture priority",
        4: "Shutter priority",
        5: "Creative program",
        6: "Action program",
        7: "Portrait mode",
        8: "Landscape mode"
    },
    MeteringMode: {
        0: "Unknown",
        1: "Average",
        2: "CenterWeightedAverage",
        3: "Spot",
        4: "MultiSpot",
        5: "Pattern",
        6: "Partial",
        255: "Other"
    },
    LightSource: {
        0: "Unknown",
        1: "Daylight",
        2: "Fluorescent",
        3: "Tungsten (incandescent light)",
        4: "Flash",
        9: "Fine weather",
        10: "Cloudy weather",
        11: "Shade",
        12: "Daylight fluorescent (D 5700 - 7100K)",
        13: "Day white fluorescent (N 4600 - 5400K)",
        14: "Cool white fluorescent (W 3900 - 4500K)",
        15: "White fluorescent (WW 3200 - 3700K)",
        17: "Standard light A",
        18: "Standard light B",
        19: "Standard light C",
        20: "D55",
        21: "D65",
        22: "D75",
        23: "D50",
        24: "ISO studio tungsten",
        255: "Other"
    },
    Flash: {
        0x0000: "Flash did not fire",
        0x0001: "Flash fired",
        0x0005: "Strobe return light not detected",
        0x0007: "Strobe return light detected",
        0x0009: "Flash fired, compulsory flash mode",
        0x000D: "Flash fired, compulsory flash mode, return light not detected",
        0x000F: "Flash fired, compulsory flash mode, return light detected",
        0x0010: "Flash did not fire, compulsory flash mode",
        0x0018: "Flash did not fire, auto mode",
        0x0019: "Flash fired, auto mode",
        0x001D: "Flash fired, auto mode, return light not detected",
        0x001F: "Flash fired, auto mode, return light detected",
        0x0020: "No flash function",
        0x0041: "Flash fired, red-eye reduction mode",
        0x0045: "Flash fired, red-eye reduction mode, return light not detected",
        0x0047: "Flash fired, red-eye reduction mode, return light detected",
        0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
        0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
        0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
        0x0059: "Flash fired, auto mode, red-eye reduction mode",
        0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
        0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
    },
    SensingMethod: {
        1: "Not defined",
        2: "One-chip color area sensor",
        3: "Two-chip color area sensor",
        4: "Three-chip color area sensor",
        5: "Color sequential area sensor",
        7: "Trilinear sensor",
        8: "Color sequential linear sensor"
    },
    SceneCaptureType: {
        0: "Standard",
        1: "Landscape",
        2: "Portrait",
        3: "Night scene"
    },
    SceneType: {
        1: "Directly photographed"
    },
    CustomRendered: {
        0: "Normal process",
        1: "Custom process"
    },
    WhiteBalance: {
        0: "Auto white balance",
        1: "Manual white balance"
    },
    GainControl: {
        0: "None",
        1: "Low gain up",
        2: "High gain up",
        3: "Low gain down",
        4: "High gain down"
    },
    Contrast: {
        0: "Normal",
        1: "Soft",
        2: "Hard"
    },
    Saturation: {
        0: "Normal",
        1: "Low saturation",
        2: "High saturation"
    },
    Sharpness: {
        0: "Normal",
        1: "Soft",
        2: "Hard"
    },
    SubjectDistanceRange: {
        0: "Unknown",
        1: "Macro",
        2: "Close view",
        3: "Distant view"
    },
    FileSource: {
        3: "DSC"
    },

    Components: {
        0: "",
        1: "Y",
        2: "Cb",
        3: "Cr",
        4: "R",
        5: "G",
        6: "B"
    }
};

function addEvent(element, event, handler) {
    if (element.addEventListener) {
        element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, handler);
    }
}

function imageHasData(img) {
    return !!img.exifdata;
}

function base64ToArrayBuffer(base64, contentType) {
    contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
    base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    var binary = atob(base64);
    var len = binary.length;
    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
    }
    return buffer;
}

function objectURLToBlob(url, callback) {
    var http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.responseType = "blob";
    http.onload = function (e) {
        if (this.status == 200 || this.status === 0) {
            callback(this.response);
        }
    };
    http.send();
}

function getImageData(img, callback) {
    function handleBinaryFile(binFile) {
        var data = findEXIFinJPEG(binFile);
        img.exifdata = data || {};
        var iptcdata = findIPTCinJPEG(binFile);
        img.iptcdata = iptcdata || {};
        if (EXIF.isXmpEnabled) {
            var xmpdata = findXMPinJPEG(binFile);
            img.xmpdata = xmpdata || {};
        }
        if (callback) {
            callback.call(img);
        }
    }

    if (img.src) {
        if (/^data\:/i.test(img.src)) {
            // Data URI
            var arrayBuffer = base64ToArrayBuffer(img.src);
            handleBinaryFile(arrayBuffer);
        } else if (/^blob\:/i.test(img.src)) {
            // Object URL
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                handleBinaryFile(e.target.result);
            };
            objectURLToBlob(img.src, function (blob) {
                fileReader.readAsArrayBuffer(blob);
            });
        } else {
            var http = new XMLHttpRequest();
            http.onload = function () {
                if (this.status == 200 || this.status === 0) {
                    handleBinaryFile(http.response);
                } else {
                    throw "Could not load image";
                }
                http = null;
            };
            http.open("GET", img.src, true);
            http.responseType = "arraybuffer";
            http.send(null);
        }
    } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            if (debug) console.log("Got file of length " + e.target.result.byteLength);
            handleBinaryFile(e.target.result);
        };

        fileReader.readAsArrayBuffer(img);
    }
}

function findEXIFinJPEG(file) {
    var dataView = new DataView(file);

    if (debug) console.log("Got file of length " + file.byteLength);
    if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
        if (debug) console.log("Not a valid JPEG");
        return false; // not a valid jpeg
    }

    var offset = 2,
        length = file.byteLength,
        marker;

    while (offset < length) {
        if (dataView.getUint8(offset) != 0xFF) {
            if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
            return false; // not a valid marker, something is wrong
        }

        marker = dataView.getUint8(offset + 1);
        if (debug) console.log(marker);

        // we could implement handling for other markers here,
        // but we're only looking for 0xFFE1 for EXIF data

        if (marker == 225) {
            if (debug) console.log("Found 0xFFE1 marker");

            return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

            // offset += 2 + file.getShortAt(offset+2, true);
        } else {
            offset += 2 + dataView.getUint16(offset + 2);
        }
    }
}

function findIPTCinJPEG(file) {
    var dataView = new DataView(file);

    if (debug) console.log("Got file of length " + file.byteLength);
    if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
        if (debug) console.log("Not a valid JPEG");
        return false; // not a valid jpeg
    }

    var offset = 2,
        length = file.byteLength;

    var isFieldSegmentStart = function isFieldSegmentStart(dataView, offset) {
        return dataView.getUint8(offset) === 0x38 && dataView.getUint8(offset + 1) === 0x42 && dataView.getUint8(offset + 2) === 0x49 && dataView.getUint8(offset + 3) === 0x4D && dataView.getUint8(offset + 4) === 0x04 && dataView.getUint8(offset + 5) === 0x04;
    };

    while (offset < length) {

        if (isFieldSegmentStart(dataView, offset)) {

            // Get the length of the name header (which is padded to an even number of bytes)
            var nameHeaderLength = dataView.getUint8(offset + 7);
            if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
            // Check for pre photoshop 6 format
            if (nameHeaderLength === 0) {
                // Always 4
                nameHeaderLength = 4;
            }

            var startOffset = offset + 8 + nameHeaderLength;
            var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

            return readIPTCData(file, startOffset, sectionLength);

            break;
        }

        // Not the marker, continue searching
        offset++;
    }
}
var IptcFieldMap = {
    0x78: 'caption',
    0x6E: 'credit',
    0x19: 'keywords',
    0x37: 'dateCreated',
    0x50: 'byline',
    0x55: 'bylineTitle',
    0x7A: 'captionWriter',
    0x69: 'headline',
    0x74: 'copyright',
    0x0F: 'category'
};
function readIPTCData(file, startOffset, sectionLength) {
    var dataView = new DataView(file);
    var data = {};
    var fieldValue, fieldName, dataSize, segmentType, segmentSize;
    var segmentStartPos = startOffset;
    while (segmentStartPos < startOffset + sectionLength) {
        if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
            segmentType = dataView.getUint8(segmentStartPos + 2);
            if (segmentType in IptcFieldMap) {
                dataSize = dataView.getInt16(segmentStartPos + 3);
                segmentSize = dataSize + 5;
                fieldName = IptcFieldMap[segmentType];
                fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                // Check if we already stored a value with this name
                if (data.hasOwnProperty(fieldName)) {
                    // Value already stored with this name, create multivalue field
                    if (data[fieldName] instanceof Array) {
                        data[fieldName].push(fieldValue);
                    } else {
                        data[fieldName] = [data[fieldName], fieldValue];
                    }
                } else {
                    data[fieldName] = fieldValue;
                }
            }
        }
        segmentStartPos++;
    }
    return data;
}

function readTags(file, tiffStart, dirStart, strings, bigEnd) {
    var entries = file.getUint16(dirStart, !bigEnd),
        tags = {},
        entryOffset,
        tag,
        i;

    for (i = 0; i < entries; i++) {
        entryOffset = dirStart + i * 12 + 2;
        tag = strings[file.getUint16(entryOffset, !bigEnd)];
        if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
        tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
    }
    return tags;
}

function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
    var type = file.getUint16(entryOffset + 2, !bigEnd),
        numValues = file.getUint32(entryOffset + 4, !bigEnd),
        valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
        offset,
        vals,
        val,
        n,
        numerator,
        denominator;

    switch (type) {
        case 1: // byte, 8-bit unsigned int
        case 7:
            // undefined, 8-bit byte, value depending on field
            if (numValues == 1) {
                return file.getUint8(entryOffset + 8, !bigEnd);
            } else {
                offset = numValues > 4 ? valueOffset : entryOffset + 8;
                vals = [];
                for (n = 0; n < numValues; n++) {
                    vals[n] = file.getUint8(offset + n);
                }
                return vals;
            }

        case 2:
            // ascii, 8-bit byte
            offset = numValues > 4 ? valueOffset : entryOffset + 8;
            return getStringFromDB(file, offset, numValues - 1);

        case 3:
            // short, 16 bit int
            if (numValues == 1) {
                return file.getUint16(entryOffset + 8, !bigEnd);
            } else {
                offset = numValues > 2 ? valueOffset : entryOffset + 8;
                vals = [];
                for (n = 0; n < numValues; n++) {
                    vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                }
                return vals;
            }

        case 4:
            // long, 32 bit int
            if (numValues == 1) {
                return file.getUint32(entryOffset + 8, !bigEnd);
            } else {
                vals = [];
                for (n = 0; n < numValues; n++) {
                    vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                }
                return vals;
            }

        case 5:
            // rational = two long values, first is numerator, second is denominator
            if (numValues == 1) {
                numerator = file.getUint32(valueOffset, !bigEnd);
                denominator = file.getUint32(valueOffset + 4, !bigEnd);
                val = new Number(numerator / denominator);
                val.numerator = numerator;
                val.denominator = denominator;
                return val;
            } else {
                vals = [];
                for (n = 0; n < numValues; n++) {
                    numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                    vals[n] = new Number(numerator / denominator);
                    vals[n].numerator = numerator;
                    vals[n].denominator = denominator;
                }
                return vals;
            }

        case 9:
            // slong, 32 bit signed int
            if (numValues == 1) {
                return file.getInt32(entryOffset + 8, !bigEnd);
            } else {
                vals = [];
                for (n = 0; n < numValues; n++) {
                    vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                }
                return vals;
            }

        case 10:
            // signed rational, two slongs, first is numerator, second is denominator
            if (numValues == 1) {
                return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
            } else {
                vals = [];
                for (n = 0; n < numValues; n++) {
                    vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                }
                return vals;
            }
    }
}

/**
* Given an IFD (Image File Directory) start offset
* returns an offset to next IFD or 0 if it's the last IFD.
*/
function getNextIFDOffset(dataView, dirStart, bigEnd) {
    //the first 2bytes means the number of directory entries contains in this IFD
    var entries = dataView.getUint16(dirStart, !bigEnd);

    // After last directory entry, there is a 4bytes of data,
    // it means an offset to next IFD.
    // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

    return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
}

function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd) {
    // get the IFD1 offset
    var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart + firstIFDOffset, bigEnd);

    if (!IFD1OffsetPointer) {
        // console.log('******** IFD1Offset is empty, image thumb not found ********');
        return {};
    } else if (IFD1OffsetPointer > dataView.byteLength) {
        // this should not happen
        // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
        return {};
    }
    // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

    var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd);

    // EXIF 2.3 specification for JPEG format thumbnail

    // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
    // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
    // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
    // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
    // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

    if (thumbTags['Compression']) {
        // console.log('Thumbnail image found!');

        switch (thumbTags['Compression']) {
            case 6:
                // console.log('Thumbnail image format is JPEG');
                if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                    var tOffset = tiffStart + thumbTags.JpegIFOffset;
                    var tLength = thumbTags.JpegIFByteCount;
                    thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                        type: 'image/jpeg'
                    });
                }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
        }
    } else if (thumbTags['PhotometricInterpretation'] == 2) {
        console.log("Thumbnail image format is RGB, which is not implemented.");
    }
    return thumbTags;
}

function getStringFromDB(buffer, start, length) {
    var outstr = "";
    for (var n = start; n < start + length; n++) {
        outstr += String.fromCharCode(buffer.getUint8(n));
    }
    return outstr;
}

function readEXIFData(file, start) {
    if (getStringFromDB(file, start, 4) != "Exif") {
        if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
        return false;
    }

    var bigEnd,
        tags,
        tag,
        exifData,
        gpsData,
        tiffOffset = start + 6;

    // test for TIFF validity and endianness
    if (file.getUint16(tiffOffset) == 0x4949) {
        bigEnd = false;
    } else if (file.getUint16(tiffOffset) == 0x4D4D) {
        bigEnd = true;
    } else {
        if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
        return false;
    }

    if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
        if (debug) console.log("Not valid TIFF data! (no 0x002A)");
        return false;
    }

    var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

    if (firstIFDOffset < 0x00000008) {
        if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
        return false;
    }

    tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

    if (tags.ExifIFDPointer) {
        exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
        for (tag in exifData) {
            switch (tag) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                    exifData[tag] = StringValues[tag][exifData[tag]];
                    break;

                case "ExifVersion":
                case "FlashpixVersion":
                    exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                    break;

                case "ComponentsConfiguration":
                    exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
                    break;
            }
            tags[tag] = exifData[tag];
        }
    }

    if (tags.GPSInfoIFDPointer) {
        gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
        for (tag in gpsData) {
            switch (tag) {
                case "GPSVersionID":
                    gpsData[tag] = gpsData[tag][0] + "." + gpsData[tag][1] + "." + gpsData[tag][2] + "." + gpsData[tag][3];
                    break;
            }
            tags[tag] = gpsData[tag];
        }
    }

    // extract thumbnail
    tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

    return tags;
}

function findXMPinJPEG(file) {

    if (!('DOMParser' in self)) {
        // console.warn('XML parsing not supported without DOMParser');
        return;
    }
    var dataView = new DataView(file);

    if (debug) console.log("Got file of length " + file.byteLength);
    if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
        if (debug) console.log("Not a valid JPEG");
        return false; // not a valid jpeg
    }

    var offset = 2,
        length = file.byteLength,
        dom = new DOMParser();

    while (offset < length - 4) {
        if (getStringFromDB(dataView, offset, 4) == "http") {
            var startOffset = offset - 1;
            var sectionLength = dataView.getUint16(offset - 2) - 1;
            var xmpString = getStringFromDB(dataView, startOffset, sectionLength);
            var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
            xmpString = xmpString.substring(xmpString.indexOf('<x:xmpmeta'), xmpEndIndex);

            var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10;
            //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
            //Without these namespaces, XML is thought to be invalid by parsers
            xmpString = xmpString.slice(0, indexOfXmp) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" ' + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" ' + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" ' + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" ' + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" ' + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" ' + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" ' + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" ' + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" ' + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + xmpString.slice(indexOfXmp);

            var domDocument = dom.parseFromString(xmpString, 'text/xml');
            return xml2Object(domDocument);
        } else {
            offset++;
        }
    }
}

function xml2json(xml) {
    var json = {};

    if (xml.nodeType == 1) {
        // element node
        if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) {
        // text node
        return xml.nodeValue;
    }

    // deal with children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
                json[nodeName] = xml2json(child);
            } else {
                if (json[nodeName].push == null) {
                    var old = json[nodeName];
                    json[nodeName] = [];
                    json[nodeName].push(old);
                }
                json[nodeName].push(xml2json(child));
            }
        }
    }

    return json;
}

function xml2Object(xml) {
    try {
        var obj = {};
        if (xml.children.length > 0) {
            for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for (var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if (dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof obj[nodeName] == "undefined") {
                    obj[nodeName] = xml2json(item);
                } else {
                    if (typeof obj[nodeName].push == "undefined") {
                        var old = obj[nodeName];

                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(xml2json(item));
                }
            }
        } else {
            obj = xml.textContent;
        }
        return obj;
    } catch (e) {
        console.log(e.message);
    }
}

EXIF.enableXmp = function () {
    EXIF.isXmpEnabled = true;
};

EXIF.disableXmp = function () {
    EXIF.isXmpEnabled = false;
};

EXIF.getData = function (img, callback) {
    if ((self.Image && img instanceof self.Image || self.HTMLImageElement && img instanceof self.HTMLImageElement) && !img.complete) return false;

    if (!imageHasData(img)) {
        getImageData(img, callback);
    } else {
        if (callback) {
            callback.call(img);
        }
    }
    return true;
};

EXIF.getTag = function (img, tag) {
    if (!imageHasData(img)) return;
    return img.exifdata[tag];
};

EXIF.getIptcTag = function (img, tag) {
    if (!imageHasData(img)) return;
    return img.iptcdata[tag];
};

EXIF.getAllTags = function (img) {
    if (!imageHasData(img)) return {};
    var a,
        data = img.exifdata,
        tags = {};
    for (a in data) {
        if (data.hasOwnProperty(a)) {
            tags[a] = data[a];
        }
    }
    return tags;
};

EXIF.getAllIptcTags = function (img) {
    if (!imageHasData(img)) return {};
    var a,
        data = img.iptcdata,
        tags = {};
    for (a in data) {
        if (data.hasOwnProperty(a)) {
            tags[a] = data[a];
        }
    }
    return tags;
};

EXIF.pretty = function (img) {
    if (!imageHasData(img)) return "";
    var a,
        data = img.exifdata,
        strPretty = "";
    for (a in data) {
        if (data.hasOwnProperty(a)) {
            if (typeof_default()(data[a]) == "object") {
                if (data[a] instanceof Number) {
                    strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                } else {
                    strPretty += a + " : [" + data[a].length + " values]\r\n";
                }
            } else {
                strPretty += a + " : " + data[a] + "\r\n";
            }
        }
    }
    return strPretty;
};

EXIF.readFromBinaryFile = function (file /*arraybuffer*/) {
    return findEXIFinJPEG(file);
};

/* harmony default export */ var exif = (EXIF);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/upload/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var selectortype_script_index_0_packages_upload = ({
  name: 'ic-upload',

  props: {
    icon: {
      type: String,
      default: 'titlebar-settings'
    },
    showPreview: {
      type: Boolean,
      default: false
    },
    uploadType: {
      type: String,
      default: 'formdata' // base64
    },
    name: String,
    url: {
      type: String
    },
    headers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    data: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    credentials: {
      type: String,
      default: 'include' // 'omit', 'same-origin'
    },
    mode: {
      type: String,
      default: 'cors' // 'no-cors', 'same-origin', 'navigate'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    responseType: {
      type: String,
      default: 'json' // 'arraybuffer', 'blob', 'text', 'formdata'
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    accept: String,
    afterRead: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    beforeUpload: Function,
    onRequest: Function
  },
  data: function data() {
    return {
      previewSrc: '',
      readSucc: false
    };
  },

  computed: {
    usePreview: function usePreview() {
      return this.showPreview && this.readSucc;
    }
  },
  methods: {
    upload: function upload(file, base64) {
      var _this = this;

      if (!file) return;
      // use yourself request method
      if (typeof this.onRequest === 'function') {
        return this.onRequest(file, base64);
      }

      var formData = new FormData();
      if (typeof this.onRequest !== 'function' && !this.name) {
        throw new Error('you must supply a `name` prop');
      }
      formData.append(this.name, this.uploadType != 'formdata' ? base64 : file);
      if (this.data) {
        keys_default()(this.data).forEach(function (key) {
          return formData.append(key, _this.data[key]);
        });
      }

      // TODO: support upload multiple files and upload manually
      if (typeof this.beforeUpload === 'function') {
        if (this.beforeUpload(file) === false) return;else {
          this.autoUpload && this.fetch(formData);
        }
      } else {
        this.autoUpload && this.fetch(formData);
      }
    },
    fetch: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (formData) {
      var _this2 = this;

      fetch(this.url, {
        method: 'POST',
        headers: this.headers,
        credentials: this.credentials,
        mode: this.mode,
        body: formData
      }).then(function (res) {
        switch (_this2.responseType) {
          case 'json':
            return res.json();
          case 'blob':
            return res.blob();
          case 'arraybuffer':
            return res.arrayBuffer();
          case 'text':
            return res.text();
          case 'formdata':
            return res.formData();
        }
      }).then(function (data) {
        if (typeof _this2.onSuccess === 'function') {
          _this2.onSuccess(data);
        }
      }).catch(function (e) {
        if (typeof _this2.onError === 'function') {
          _this2.onError(e);
        }
      });
    }),
    changeFile: function changeFile(e) {
      var _this3 = this;

      var files = e.target.files;
      if (!files || files.length < 1) return;

      var file = files[0];
      if (this.uploadType === 'formdata') {
        return this.upload(file);
      }

      if (/image\/jpe?g/i.test(file.type)) {
        getBlobData(file, 'arraybuffer').then(function (arrayBuffer) {
          return exif.readFromBinaryFile(arrayBuffer).Orientation;
        }).then(function (o) {
          return getBitmapCanvas(file, o);
        }).then(function (canvas) {
          return canvas2DataURL(canvas, 'image/jpeg');
        }).then(function (base64) {
          _this3.afterRead && typeof _this3.afterRead === 'function' && _this3.afterRead(base64, file);
          _this3.readSucc = true;
          _this3.previewSrc = base64;

          _this3.upload(file, base64);
        }).catch(function (error) {
          console.error(error);
          _this3.readSucc = false;
        });
      } else {
        getBlobData(file, 'dataurl').then(function (base64) {
          _this3.afterRead && typeof _this3.afterRead === 'function' && _this3.afterRead(base64, file);
          _this3.readSucc = true;
          _this3.previewSrc = base64;

          _this3.upload(file, base64);
        }).catch(function (error) {
          console.error(error);
          _this3.readSucc = false;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d7aba424","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/upload/index.vue
var upload_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"ic-upload"},[_vm._t("default",[_c('span',{staticClass:"ic-upload__wrapper"},[(_vm.icon && !_vm.usePreview)?_c('ic-icon',{attrs:{"name":_vm.icon}}):_vm._e()],1)]),_c('input',_vm._b({attrs:{"type":"file","disabled":_vm.disabled,"name":_vm.name,"accept":_vm.accept},on:{"change":_vm.changeFile}},'input',_vm.$attrs,false)),(_vm.usePreview)?_c('img',{attrs:{"src":_vm.previewSrc,"alt":"图片预览"}}):_vm._e()],2)}
var upload_staticRenderFns = []
var upload_esExports = { render: upload_render, staticRenderFns: upload_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_upload = (upload_esExports);
// CONCATENATED MODULE: ./packages/upload/index.vue
var upload_normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var upload___vue_template_functional__ = false
/* styles */
var upload___vue_styles__ = null
/* scopeId */
var upload___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var upload___vue_module_identifier__ = null
var upload_Component = upload_normalizeComponent(
  selectortype_script_index_0_packages_upload,
  selectortype_template_index_0_packages_upload,
  upload___vue_template_functional__,
  upload___vue_styles__,
  upload___vue_scopeId__,
  upload___vue_module_identifier__
)

/* harmony default export */ var packages_upload = (upload_Component.exports);

// CONCATENATED MODULE: ./packages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcAvatar", function() { return packages_avatar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcBadge", function() { return packages_badge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcButton", function() { return packages_button; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcCell", function() { return packages_cell; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcCheckbox", function() { return packages_checkbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcCheckboxGroup", function() { return packages_checkbox_group; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcCollapse", function() { return packages_collapse; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcCollapseItem", function() { return packages_collapse_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcDatetimePicker", function() { return packages_datetime_picker; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcDialog", function() { return packages_dialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcFilter", function() { return packages_filter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcHeader", function() { return packages_header; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcIcon", function() { return packages_icon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcInput", function() { return packages_input; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcLoading", function() { return packages_loading; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcLocation", function() { return packages_location; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcModal", function() { return packages_modal; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcPicker", function() { return packages_picker; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcPopup", function() { return packages_popup; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcPull", function() { return packages_pull; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcRadio", function() { return packages_radio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcSpinner", function() { return packages_spinner; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcSwitch", function() { return packages_switch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcTab", function() { return packages_tab; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcTabItem", function() { return packages_tab_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcTabbar", function() { return packages_tabbar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcTabbarItem", function() { return packages_tabbar_item; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcTag", function() { return packages_tag; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcTimeline", function() { return packages_timeline; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcToast", function() { return packages_toast; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IcUpload", function() { return packages_upload; });
// This file is generated automatically by bin/build-entry.js

































var version = '0.0.9430';
var components = [packages_avatar, packages_badge, packages_button, packages_cell, packages_checkbox, packages_checkbox_group, packages_collapse, packages_collapse_item, packages_datetime_picker, packages_dialog, packages_filter, packages_header, packages_icon, packages_input, packages_loading, packages_location, packages_modal, packages_picker, packages_popup, packages_pull, packages_radio, packages_spinner, packages_switch, packages_tab, packages_tab_item, packages_tabbar, packages_tabbar_item, packages_tag, packages_timeline, packages_toast, packages_upload];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}



/* harmony default export */ var packages_0 = __webpack_exports__["default"] = ({
  IcAvatar: packages_avatar,
  IcBadge: packages_badge,
  IcButton: packages_button,
  IcCell: packages_cell,
  IcCheckbox: packages_checkbox,
  IcCheckboxGroup: packages_checkbox_group,
  IcCollapse: packages_collapse,
  IcCollapseItem: packages_collapse_item,
  IcDatetimePicker: packages_datetime_picker,
  IcDialog: packages_dialog,
  IcFilter: packages_filter,
  IcHeader: packages_header,
  IcIcon: packages_icon,
  IcInput: packages_input,
  IcLoading: packages_loading,
  IcLocation: packages_location,
  IcModal: packages_modal,
  IcPicker: packages_picker,
  IcPopup: packages_popup,
  IcPull: packages_pull,
  IcRadio: packages_radio,
  IcSpinner: packages_spinner,
  IcSwitch: packages_switch,
  IcTab: packages_tab,
  IcTabItem: packages_tab_item,
  IcTabbar: packages_tabbar,
  IcTabbarItem: packages_tabbar_item,
  IcTag: packages_tag,
  IcTimeline: packages_timeline,
  IcToast: packages_toast,
  IcUpload: packages_upload
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(60) });


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(33);
var pIE = __webpack_require__(21);
var toObject = __webpack_require__(34);
var IObject = __webpack_require__(41);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(62);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(34);
var $keys = __webpack_require__(14);

__webpack_require__(65)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(48);
module.exports = __webpack_require__(36).f('iterator');


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var defined = __webpack_require__(28);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(46);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(14);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(34);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(73);
var step = __webpack_require__(74);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(44)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(50);
__webpack_require__(83);
__webpack_require__(84);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(45);
var META = __webpack_require__(78).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(31);
var setToStringTag = __webpack_require__(24);
var uid = __webpack_require__(20);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(36);
var wksDefine = __webpack_require__(37);
var enumKeys = __webpack_require__(79);
var isArray = __webpack_require__(80);
var anObject = __webpack_require__(4);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(27);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(46);
var gOPNExt = __webpack_require__(81);
var $GOPD = __webpack_require__(82);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(14);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(21).f = $propertyIsEnumerable;
  __webpack_require__(33).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(23)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(33);
var pIE = __webpack_require__(21);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(15);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(49).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(21);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(27);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(39);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('asyncIterator');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37)('observable');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(43);
__webpack_require__(48);
__webpack_require__(86);
__webpack_require__(97);
__webpack_require__(98);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var global = __webpack_require__(1);
var ctx = __webpack_require__(17);
var classof = __webpack_require__(52);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(18);
var anInstance = __webpack_require__(87);
var forOf = __webpack_require__(88);
var speciesConstructor = __webpack_require__(53);
var task = __webpack_require__(54).set;
var microtask = __webpack_require__(93)();
var newPromiseCapabilityModule = __webpack_require__(38);
var perform = __webpack_require__(55);
var promiseResolve = __webpack_require__(56);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(94)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(24)($Promise, PROMISE);
__webpack_require__(95)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(96)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(17);
var call = __webpack_require__(89);
var isArrayIter = __webpack_require__(90);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(42);
var getIterFn = __webpack_require__(91);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(52);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(54).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(6);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(53);
var promiseResolve = __webpack_require__(56);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(38);
var perform = __webpack_require__(55);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */

(function(window) {
	var lastTime = 0,
		vendors = ['webkit', 'moz'],
		requestAnimationFrame = window.requestAnimationFrame,
		cancelAnimationFrame = window.cancelAnimationFrame,
		i = vendors.length;

	// try to un-prefix existing raf
	while (--i >= 0 && !requestAnimationFrame) {
		requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
	}

	// polyfill with setTimeout fallback
	// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
	if (!requestAnimationFrame || !cancelAnimationFrame) {
		requestAnimationFrame = function(callback) {
			var now = +new Date(), nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() {
				callback(lastTime = nextTime);
			}, nextTime - now);
		};

		cancelAnimationFrame = clearTimeout;
	}

	// export to window
	window.requestAnimationFrame = requestAnimationFrame;
	window.cancelAnimationFrame = cancelAnimationFrame;
}(window));


/***/ })
/******/ ]);
});