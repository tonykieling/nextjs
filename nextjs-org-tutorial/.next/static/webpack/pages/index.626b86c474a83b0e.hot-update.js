"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// initial HTML file, which will be turned into a jsx/js file\n\nvar _s = $RefreshSig$();\n{}\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"K:\\\\dev\\\\next.js\\\\next.js-practice\\\\nextjs-org-tutorial\\\\pages\\\\index.jsx\",\n        lineNumber: 49,\n        columnNumber: 12\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\",\n        \"Tony Kieling\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"K:\\\\dev\\\\next.js\\\\next.js-practice\\\\nextjs-org-tutorial\\\\pages\\\\index.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"K:\\\\dev\\\\next.js\\\\next.js-practice\\\\nextjs-org-tutorial\\\\pages\\\\index.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"K:\\\\dev\\\\next.js\\\\next.js-practice\\\\nextjs-org-tutorial\\\\pages\\\\index.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"K:\\\\dev\\\\next.js\\\\next.js-practice\\\\nextjs-org-tutorial\\\\pages\\\\index.jsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"K:\\\\dev\\\\next.js\\\\next.js-practice\\\\nextjs-org-tutorial\\\\pages\\\\index.jsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_s(HomePage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2REFBNkQ7QUFDN0Q7O0FBQUEsQ0F5Q1UsQ0FHdUI7QUFFakMsU0FBU0MsTUFBTSxDQUFDLEtBQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxLQUFTLENBQVBDLEtBQUs7SUFDbkIscUJBQU8sOERBQUNDLElBQUU7a0JBQUVELEtBQUssR0FBR0EsS0FBSyxHQUFHLGVBQWU7Ozs7O1lBQU0sQ0FBQztBQUN0RCxDQUFDO0FBRlFELEtBQUFBLE1BQU07QUFJQSxTQUFTRyxRQUFRLEdBQUc7O1FBS3RCQyxXQUFXLEdBQXBCLFNBQVNBLFdBQVcsR0FBRztRQUNuQkMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7SUFORCxJQUFNQyxLQUFLLEdBQUc7UUFBQyxjQUFjO1FBQUUsY0FBYztRQUFFLG1CQUFtQjtRQUFFLGNBQWM7S0FBQztJQUVuRixJQUEwQlIsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5Qk8sS0FBSyxHQUFjUCxHQUFXLEdBQXpCLEVBQUVNLFFBQVEsR0FBSU4sR0FBVyxHQUFmO0lBTXRCLHFCQUNJLDhEQUFDUyxLQUFHOzswQkFDSiw4REFBQ1IsTUFBTTtnQkFBQ0MsS0FBSyxFQUFDLHNDQUEyQjs7Ozs7b0JBQUc7MEJBQzVDLDhEQUFDUSxJQUFFOzBCQUNFRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3lDQUNaLDhEQUFDQyxJQUFFO2tDQUFhRCxJQUFJO3VCQUFYQSxJQUFJOzs7OzZCQUFhO2lCQUM3QixDQUFDOzs7OztvQkFDRDswQkFFTCw4REFBQ0UsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFVixXQUFXOztvQkFBRSxRQUFNO29CQUFDRSxLQUFLO29CQUFDLEdBQUM7Ozs7OztvQkFBUzs7Ozs7O1lBQy9DLENBQ1I7QUFDTixDQUFDO0dBckJ1QkgsUUFBUTtBQUFSQSxNQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluaXRpYWwgSFRNTCBmaWxlLCB3aGljaCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEganN4L2pzIGZpbGVcclxuey8qIDxodG1sPlxyXG4gIDxib2R5PlxyXG4gICAgPGRpdiBpZD1cImFwcFwiPjwvZGl2PlxyXG5cclxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3RAMTcvdW1kL3JlYWN0LmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxNy91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL0BiYWJlbC9zdGFuZGFsb25lL2JhYmVsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgIDxzY3JpcHQgdHlwZT1cInRleHQvanN4XCI+XHJcbiAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXHJcblxyXG4gICAgICBmdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIDxoMT57dGl0bGUgPyB0aXRsZSA6IFwiRGVmYXVsdCB0aXRsZVwifTwvaDE+XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVzID0gW1wiQWRhIExvdmVsYWNlXCIsIFwiR3JhY2UgSG9wcGVyXCIsIFwiTWFyZ2FyZXQgSGFtaWx0b25cIiwgXCJUb255IEtpZWxpbmdcIl1cclxuXHJcbiAgICAgICAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSBSZWFjdC51c2VTdGF0ZSgwKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICAgIHNldExpa2VzKGxpa2VzICsgMSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiRGV2ZWxvcC4gUHJldmlldy4gU2hpcC4g8J+agFwiIC8+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7bmFtZXMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfT57bmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TGlrZSAoe2xpa2VzfSk8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgUmVhY3RET00ucmVuZGVyKDxIb21lUGFnZSAvPiwgYXBwKVxyXG4gICAgPC9zY3JpcHQ+XHJcbiAgPC9ib2R5PlxyXG48L2h0bWw+ICovfVxyXG4gXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICAgIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgY29uc3QgbmFtZXMgPSBbJ0FkYSBMb3ZlbGFjZScsICdHcmFjZSBIb3BwZXInLCAnTWFyZ2FyZXQgSGFtaWx0b24nLCBcIlRvbnkgS2llbGluZ1wiXTtcclxuXHJcbiAgICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIHNldExpa2VzKGxpa2VzICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgdGl0bGU9XCJEZXZlbG9wLiBQcmV2aWV3LiBTaGlwLiDwn5qAXCIgLz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtuYW1lcy5tYXAoKG5hbWUpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Pkxpa2UgKHtsaWtlc30pPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwiaGFuZGxlQ2xpY2siLCJzZXRMaWtlcyIsImxpa2VzIiwibmFtZXMiLCJkaXYiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});