"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/app/api/sqldata.js":
/*!********************************!*\
  !*** ./src/app/api/sqldata.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchUserData: function() { return /* binding */ fetchUserData; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst fetchUserData = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"YOUR_API_ENDPOINT\"); // Replace with your actual API endpoint\n        return response.data;\n    } catch (error) {\n        console.error(\"Error fetching user data:\", error);\n        throw error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3NxbGRhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFbkIsTUFBTUMsZ0JBQWdCO0lBQzNCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1GLDZDQUFLQSxDQUFDRyxHQUFHLENBQUMsc0JBQXNCLHdDQUF3QztRQUMvRixPQUFPRCxTQUFTRSxJQUFJO0lBQ3RCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxNQUFNQTtJQUNSO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FwaS9zcWxkYXRhLmpzPzQwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnWU9VUl9BUElfRU5EUE9JTlQnKTsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIEFQSSBlbmRwb2ludFxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgZGF0YTonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07Il0sIm5hbWVzIjpbImF4aW9zIiwiZmV0Y2hVc2VyRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/sqldata.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/home/page.js":
/*!******************************!*\
  !*** ./src/app/home/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_sqldata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/sqldata.js */ \"(app-pages-browser)/./src/app/api/sqldata.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Replace with your actual path\n// Rest of your imports\nconst HomePage = ()=>{\n    _s();\n    const router = useRouter();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            try {\n                const userData = await (0,_api_sqldata_js__WEBPACK_IMPORTED_MODULE_2__.fetchUserData)();\n                setUser(userData);\n            } catch (error) {\n            // Handle error\n            }\n        };\n        fetchUser();\n    }, []); // Empty dependency array ensures this effect runs once on mount\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"logo-brand\",\n                    \"aria-label\": \"หน้าหลัก\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                        className: \"logo-main\",\n                        src: Logo,\n                        alt: \"mysticnetwork_logo\",\n                        height: \"auto\",\n                        width: \"auto\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"title\",\n                    children: \"HELLO\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Email: \",\n                                user.email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Name: \",\n                                user.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\home\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"C1U3W1/GLXpNOs2elmI/sE+Rt18=\", true);\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNEM7QUFDTSxDQUFDLGdDQUFnQztBQUVuRix1QkFBdUI7QUFFdkIsTUFBTUcsV0FBVzs7SUFDZixNQUFNQyxTQUFTQztJQUNmLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNUCw4REFBYUE7Z0JBQ3BDSyxRQUFRRTtZQUNWLEVBQUUsT0FBT0MsT0FBTztZQUNkLGVBQWU7WUFDakI7UUFDRjtRQUVBRjtJQUNGLEdBQUcsRUFBRSxHQUFHLGdFQUFnRTtJQUV4RSxxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDOzs4QkFDQyw4REFBQ0M7b0JBQUVDLFdBQVU7b0JBQWFDLGNBQVc7OEJBQ25DLDRFQUFDQzt3QkFBTUYsV0FBVTt3QkFBWUcsS0FBS0M7d0JBQU1DLEtBQUk7d0JBQXFCQyxRQUFPO3dCQUFPQyxPQUFNOzs7Ozs7Ozs7Ozs4QkFFdkYsOERBQUNDO29CQUFHUixXQUFVOzhCQUFROzs7Ozs7Z0JBQ3JCUixzQkFDQyw4REFBQ007O3NDQUNDLDhEQUFDVzs7Z0NBQUU7Z0NBQVFqQixLQUFLa0IsS0FBSzs7Ozs7OztzQ0FDckIsOERBQUNEOztnQ0FBRTtnQ0FBT2pCLEtBQUttQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0I7R0FqQ010QjtLQUFBQTtBQW1DTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvbWUvcGFnZS5qcz81ODQzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJEYXRhIH0gZnJvbSAnLi4vYXBpL3NxbGRhdGEuanMnOyAvLyBSZXBsYWNlIHdpdGggeW91ciBhY3R1YWwgcGF0aFxyXG5cclxuLy8gUmVzdCBvZiB5b3VyIGltcG9ydHNcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgZmV0Y2hVc2VyRGF0YSgpO1xyXG4gICAgICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVXNlcigpO1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSBlbnN1cmVzIHRoaXMgZWZmZWN0IHJ1bnMgb25jZSBvbiBtb3VudFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nby1icmFuZFwiIGFyaWEtbGFiZWw9XCLguKvguJnguYnguLLguKvguKXguLHguIFcIj5cclxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJsb2dvLW1haW5cIiBzcmM9e0xvZ299IGFsdD1cIm15c3RpY25ldHdvcmtfbG9nb1wiIGhlaWdodD1cImF1dG9cIiB3aWR0aD1cImF1dG9cIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5IRUxMTzwvaDE+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPHA+TmFtZToge3VzZXIubmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hVc2VyRGF0YSIsIkhvbWVQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInNldFVzZXIiLCJmZXRjaFVzZXIiLCJ1c2VyRGF0YSIsImVycm9yIiwibWFpbiIsImRpdiIsImEiLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwiSW1hZ2UiLCJzcmMiLCJMb2dvIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJoMSIsInAiLCJlbWFpbCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.js\n"));

/***/ })

});