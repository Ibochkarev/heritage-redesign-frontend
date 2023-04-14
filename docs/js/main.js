/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/sections/s_footer/s_footer.js":
/*!**************************************************!*\
  !*** ./src/blocks/sections/s_footer/s_footer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/blocks/sections/s_footer/s_footer.js?");

/***/ }),

/***/ "./src/blocks/sections/s_header/s_header.js":
/*!**************************************************!*\
  !*** ./src/blocks/sections/s_header/s_header.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"Swiper\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"], swiper__WEBPACK_IMPORTED_MODULE_0__[\"Lazy\"]]);\nvar breakpointScroll = 625;\nvar header = document.querySelector(\".s-header\"),\n  headerBurger = document.querySelector(\".s-header__burger\"),\n  backdrop = document.querySelector(\".backdrop\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Открытие/Закрытие мега меню по клику на бургер\n  headerBurger.addEventListener(\"click\", function () {\n    headerBurger.classList.toggle(\"is-open\");\n    if (backdrop) {\n      backdrop.classList.toggle(\"is-active\");\n    }\n    document.body.classList.toggle(\"is-blocked\");\n  });\n\n  // Фиксация шапки при скроле\n  document.addEventListener(\"scroll\", function () {\n    var scrollTop = window.pageYOffset;\n    if (scrollTop > breakpointScroll) {\n      header.classList.add(\"is-fixed\");\n    } else {\n      header.classList.remove(\"is-fixed\");\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/blocks/sections/s_header/s_header.js?");

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ \"./node_modules/vanilla-lazyload/dist/lazyload.min.js\");\n/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.esm.js */ \"./node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js\");\n\nvar lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a({});\n\nwindow.Fancybox = _fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_1__[\"Fancybox\"];\n_fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_1__[\"Fancybox\"].defaults.autoFocus = false;\n_fancyapps_ui_dist_fancybox_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_1__[\"Fancybox\"].bind();\n\n//# sourceURL=webpack:///./src/js/import/components.js?");

/***/ }),

/***/ "./src/js/import/sections.js":
/*!***********************************!*\
  !*** ./src/js/import/sections.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_s_header_s_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %sections%/s_header/s_header */ \"./src/blocks/sections/s_header/s_header.js\");\n/* harmony import */ var _sections_s_footer_s_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %sections%/s_footer/s_footer */ \"./src/blocks/sections/s_footer/s_footer.js\");\n/* harmony import */ var _sections_s_footer_s_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sections_s_footer_s_footer__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/js/import/sections.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _import_sections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/sections */ \"./src/js/import/sections.js\");\n/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ \"./src/js/import/components.js\");\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });