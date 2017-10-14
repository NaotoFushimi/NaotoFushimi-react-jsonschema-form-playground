/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/ts/App.ts ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __assign = undefined && undefined.__assign || Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) {\n            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n        }\n    }\n    return t;\n};\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) {\n            try {\n                step(generator.next(value));\n            } catch (e) {\n                reject(e);\n            }\n        }\n        function rejected(value) {\n            try {\n                step(generator[\"throw\"](value));\n            } catch (e) {\n                reject(e);\n            }\n        }\n        function step(result) {\n            result.done ? resolve(result.value) : new P(function (resolve) {\n                resolve(result.value);\n            }).then(fulfilled, rejected);\n        }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = undefined && undefined.__generator || function (thisArg, body) {\n    var _ = { label: 0, sent: function sent() {\n            if (t[0] & 1) throw t[1];return t[1];\n        }, trys: [], ops: [] },\n        f,\n        y,\n        t,\n        g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n        return this;\n    }), g;\n    function verb(n) {\n        return function (v) {\n            return step([n, v]);\n        };\n    }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) {\n            try {\n                if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\n                if (y = 0, t) op = [0, t.value];\n                switch (op[0]) {\n                    case 0:case 1:\n                        t = op;break;\n                    case 4:\n                        _.label++;return { value: op[1], done: false };\n                    case 5:\n                        _.label++;y = op[1];op = [0];continue;\n                    case 7:\n                        op = _.ops.pop();_.trys.pop();continue;\n                    default:\n                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n                            _ = 0;continue;\n                        }\n                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n                            _.label = op[1];break;\n                        }\n                        if (op[0] === 6 && _.label < t[1]) {\n                            _.label = t[1];t = op;break;\n                        }\n                        if (t && _.label < t[2]) {\n                            _.label = t[2];_.ops.push(op);break;\n                        }\n                        if (t[2]) _.ops.pop();\n                        _.trys.pop();continue;\n                }\n                op = body.call(thisArg, _);\n            } catch (e) {\n                op = [6, e];y = 0;\n            } finally {\n                f = t = 0;\n            }\n        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = undefined;\nconsole.log(59);\nvar u3 = {\n    w: 1,\n    z: 2,\n    x: 12\n};\nvar a = function a() {\n    return __awaiter(_this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    console.log(\"start\");\n                    return [4 /*yield*/, new Promise(function (r) {\n                        return setTimeout(r, 2000);\n                    })];\n                case 1:\n                    _a.sent();\n                    console.log(\"end\");\n                    alert(1);\n                    return [2 /*return*/];\n            }\n        });\n    });\n};\na();\nvar u4 = __assign({}, u3, { w: 7 });\nvar uu = [1, 2, 3, 4, 5];\nvar uu2 = uu.concat([6]);\nconsole.log(u4);\nconsole.log(uu2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy9BcHAudHM/NjhjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyg1OSk7XG5cbmNvbnN0IHUzID0ge1xuICAgIHc6IDEsXG4gICAgeiA6IDIsXG4gICAgeCA6IDEyXG59XG5cbmNvbnN0IGEgPSBhc3luYyAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIilcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociAsIDIwMDApKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZFwiKVxuICAgIGFsZXJ0KDEpXG59XG5cbmEoKTtcblxuY29uc3QgdTQgPSB7Li4udTMgLCB3IDogN31cblxuY29uc3QgdXUgPSBbMSwyLDMsNCw1XTtcbmNvbnN0IHV1MiA9IFsuLi51dSAsIDZdO1xuXG5jb25zb2xlLmxvZyh1NClcbmNvbnNvbGUubG9nKHV1MilcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RzL0FwcC50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);