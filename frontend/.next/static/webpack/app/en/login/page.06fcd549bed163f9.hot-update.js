"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/en/login/page",{

/***/ "(app-pages-browser)/./src/app/en/login/page.js":
/*!**********************************!*\
  !*** ./src/app/en/login/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_check_mark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/check-mark.png */ \"(app-pages-browser)/./public/check-mark.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_axios_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/axios.js */ \"(app-pages-browser)/./src/app/api/axios.js\");\n/* harmony import */ var _components_GoogleLoginButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/GoogleLoginButton */ \"(app-pages-browser)/./src/app/components/GoogleLoginButton.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const errRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const LOGIN_URL = \"http://localhost:5000/api/login\";\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        userRef.current.focus();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        setErrMsg(\"\");\n    }, [\n        username,\n        password\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await _api_axios_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:5000/api/login\", {\n                username,\n                password\n            });\n            console.log(response);\n            console.log(JSON.stringify({\n                username,\n                password\n            }));\n            if (response.status === 200) {\n                router.push(\"/home\");\n                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n                    icon: \"success\",\n                    title: \"Login Successful!\",\n                    text: \"Redirecting...\"\n                });\n            }\n        } catch (err) {\n            var _err_response, _err_response1;\n            if (!(err === null || err === void 0 ? void 0 : err.response)) {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n                    icon: \"error\",\n                    title: \"Oops...\",\n                    text: \"Server is Not Response. Please try again.\"\n                });\n            } else if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 400) {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n                    icon: \"error\",\n                    title: \"Oops...\",\n                    text: \"Missing username or password. Please try again.\"\n                });\n            } else if (((_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : _err_response1.status) === 401) {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n                    icon: \"error\",\n                    title: \"Oops...\",\n                    text: \"Invalid username or password. Please try again.\"\n                });\n            } else {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n                    icon: \"error\",\n                    title: \"Oops...\",\n                    text: \"Invalid username or password. Please try again.\"\n                });\n            }\n        }\n    };\n    const handleGoogleLogin = (googleResponse)=>{\n        console.log(\"Google login response:\", googleResponse);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-gui\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"login-text\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: \"loginForm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"usernametext\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                className: \"inputbox username-input\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value),\n                                required: true,\n                                ref: userRef,\n                                placeholder: \"Enter your Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"passwordtext\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                className: \"inputbox password-input\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true,\n                                placeholder: \"Enter your Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"login-box\",\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"login\",\n                            onClick: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"iconeditlogin\",\n                                    src: _public_check_mark_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"check-mark-icon\",\n                                    height: \"auto\",\n                                    width: \"auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this),\n                                \"Login\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"line-sep\",\n                        children: \"or\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"login-box\",\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"login\",\n                            onClick: ()=>router.push(\"/en/register\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: \"iconeditlogin\",\n                                    src: _public_check_mark_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"check-mark-icon\",\n                                    height: \"auto\",\n                                    width: \"auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, this),\n                                \"Register\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"login-box login\",\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GoogleLoginButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onGoogleLogin: handleGoogleLogin\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                            lineNumber: 144,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tkkun\\\\OneDrive\\\\Documents\\\\GitHub\\\\Booking-System\\\\frontend\\\\src\\\\app\\\\en\\\\login\\\\page.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"UM9BcXManokFsYZLLM0E6jZsCkg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZW4vbG9naW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ2E7QUFDakI7QUFDSTtBQUMyQjtBQUMvQjtBQUNzQztBQUd6QjtBQUM0QjtBQUdwRCxTQUFTVzs7SUFDdEIsTUFBTUMsU0FBU1gsMERBQVNBO0lBR3hCLE1BQU1ZLFNBQVNSLDZDQUFNQTtJQUNyQixNQUFNUyxVQUFVVCw2Q0FBTUE7SUFDdEIsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNaUIsWUFBWTtJQUVsQmhCLGdEQUFTQSxDQUFDO1FBQ1JPLFFBQVFVLE9BQU8sQ0FBQ0MsS0FBSztJQUN6QixHQUFHLEVBQUU7SUFFTGxCLGdEQUFTQSxDQUFDO1FBQ05hLFVBQVU7SUFDZCxHQUFHO1FBQUNMO1FBQVVFO0tBQVM7SUFHdkIsTUFBTVMsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNcEIscURBQUtBLENBQUNxQixJQUFJLENBQUMsbUNBQWtDO2dCQUFFZjtnQkFBVUU7WUFBUztZQUV6RmMsUUFBUUMsR0FBRyxDQUFDSDtZQUNaRSxRQUFRQyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRW5CO2dCQUFVRTtZQUFTO1lBQ2hELElBQUlZLFNBQVNNLE1BQU0sS0FBSyxLQUFLO2dCQUMzQnZCLE9BQU93QixJQUFJLENBQUM7Z0JBRVpsQyx1REFBUyxDQUFDO29CQUNSb0MsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtZQUNGO1FBQ0YsRUFBRSxPQUFPQyxLQUFLO2dCQU9HQSxlQU1BQTtZQVpYLElBQUksRUFBQ0EsZ0JBQUFBLDBCQUFBQSxJQUFLWixRQUFRLEdBQUU7Z0JBQ2xCM0IsdURBQVMsQ0FBQztvQkFDUm9DLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7WUFDRixPQUFPLElBQUlDLEVBQUFBLGdCQUFBQSxJQUFJWixRQUFRLGNBQVpZLG9DQUFBQSxjQUFjTixNQUFNLE1BQUssS0FBSztnQkFDdkNqQyx1REFBUyxDQUFDO29CQUNSb0MsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTTtnQkFDUjtZQUNGLE9BQU8sSUFBSUMsRUFBQUEsaUJBQUFBLElBQUlaLFFBQVEsY0FBWlkscUNBQUFBLGVBQWNOLE1BQU0sTUFBSyxLQUFLO2dCQUN2Q2pDLHVEQUFTLENBQUM7b0JBQ1JvQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO1lBQ0YsT0FBTztnQkFDTHRDLHVEQUFTLENBQUM7b0JBQ1JvQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO1lBQ0Y7UUFDTjtJQUNKO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3pCWixRQUFRQyxHQUFHLENBQUMsMEJBQTBCVztJQUN4QztJQUVFLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7c0JBQ0MsNEVBQUNBO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWE7Ozs7OztrQ0FDekIsOERBQUNFO3dCQUFLQyxJQUFHOzswQ0FDUCw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVdMLFdBQVU7MENBQWU7Ozs7OzswQ0FHbkQsOERBQUNNO2dDQUNDQyxNQUFLO2dDQUNMSixJQUFHO2dDQUNISCxXQUFVO2dDQUNWUSxPQUFPdkM7Z0NBQ1B3QyxVQUFVLENBQUM1QixJQUFNWCxZQUFZVyxFQUFFNkIsTUFBTSxDQUFDRixLQUFLO2dDQUMzQ0csUUFBUTtnQ0FDUkMsS0FBSzVDO2dDQUNMNkMsYUFBWTs7Ozs7OzBDQUdkLDhEQUFDVDtnQ0FBTUMsU0FBUTtnQ0FBV0wsV0FBVTswQ0FBZTs7Ozs7OzBDQUduRCw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xKLElBQUc7Z0NBQ0hILFdBQVU7Z0NBQ1ZRLE9BQU9yQztnQ0FDUHNDLFVBQVUsQ0FBQzVCLElBQU1ULFlBQVlTLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7Z0NBQzNDRyxRQUFRO2dDQUNSRSxhQUFZOzs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDQzt3QkFBRWQsV0FBVTt3QkFBWU8sTUFBSztrQ0FDNUIsNEVBQUNROzRCQUFPZixXQUFVOzRCQUFRZ0IsU0FBU3BDOzs4Q0FDakMsOERBQUMxQixtREFBS0E7b0NBQ0o4QyxXQUFVO29DQUNWaUIsS0FBSzVELDhEQUFTQTtvQ0FDZDZELEtBQUk7b0NBQ0pDLFFBQU87b0NBQ1BDLE9BQU07Ozs7OztnQ0FDTjs7Ozs7Ozs7Ozs7O2tDQUlOLDhEQUFDbkI7d0JBQUdELFdBQVU7a0NBQVc7Ozs7OztrQ0FDekIsOERBQUNjO3dCQUFFZCxXQUFVO3dCQUFZTyxNQUFLO2tDQUM1Qiw0RUFBQ1E7NEJBQU9mLFdBQVU7NEJBQVFnQixTQUFTLElBQU1sRCxPQUFPd0IsSUFBSSxDQUFFOzs4Q0FDcEQsOERBQUNwQyxtREFBS0E7b0NBQ0o4QyxXQUFVO29DQUNWaUIsS0FBSzVELDhEQUFTQTtvQ0FDZDZELEtBQUk7b0NBQ0pDLFFBQU87b0NBQ1BDLE9BQU07Ozs7OztnQ0FDTjs7Ozs7Ozs7Ozs7O2tDQUlOLDhEQUFDTjt3QkFBRWQsV0FBVTt3QkFBa0JPLE1BQUs7a0NBQ2xDLDRFQUFDM0MscUVBQWlCQTs0QkFBQ3lELGVBQWV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlDO0dBdkl3Qi9COztRQUNQVixzREFBU0E7OztLQURGVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2VuL2xvZ2luL3BhZ2UuanM/ZWFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0ICcuLi8uLi9nbG9iYWxzLmNzcydcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCBDaGVja01hcmsgZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljL2NoZWNrLW1hcmsucG5nJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2FwaS9heGlvcy5qcyc7XHJcbmltcG9ydCBHb29nbGVMb2dpbkJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dvb2dsZUxvZ2luQnV0dG9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IExPR0lOX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2xvZ2luJztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzZXJSZWYuY3VycmVudC5mb2N1cygpO1xyXG59LCBbXSlcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRFcnJNc2coJycpO1xyXG59LCBbdXNlcm5hbWUsIHBhc3N3b3JkXSlcclxuXHJcblxyXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9sb2dpblwiLHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKTtcclxuICAgICAgICBcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgdGl0bGU6ICdMb2dpbiBTdWNjZXNzZnVsIScsXHJcbiAgICAgICAgICB0ZXh0OiAnUmVkaXJlY3RpbmcuLi4nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGlmICghZXJyPy5yZXNwb25zZSkgeyAgICAgIFxyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnU2VydmVyIGlzIE5vdCBSZXNwb25zZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMCkgeyAgICAgIFxyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnTWlzc2luZyB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkgeyAgICAgIFxyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcclxuICAgICAgICAgICAgICB0ZXh0OiAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnT29wcy4uLicsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQuIFBsZWFzZSB0cnkgYWdhaW4uJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUdvb2dsZUxvZ2luID0gKGdvb2dsZVJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0dvb2dsZSBsb2dpbiByZXNwb25zZTonLCBnb29nbGVSZXNwb25zZSk7XHJcbn07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWd1aVwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dpbi10ZXh0XCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgPGZvcm0gaWQ9XCJsb2dpbkZvcm1cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInVzZXJuYW1ldGV4dFwiPlxyXG4gICAgICAgICAgICAgIFVzZXJuYW1lOlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRib3ggdXNlcm5hbWUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHJlZj17dXNlclJlZn0gXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIFVzZXJuYW1lXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJwYXNzd29yZHRleHRcIj5cclxuICAgICAgICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dGJveCBwYXNzd29yZC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ2luLWJveFwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpblwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uZWRpdGxvZ2luXCJcclxuICAgICAgICAgICAgICAgIHNyYz17Q2hlY2tNYXJrfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiY2hlY2stbWFyay1pY29uXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxpbmUtc2VwXCI+b3I8L2gyPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9naW4tYm94XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9lbi9yZWdpc3RlcmApfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25lZGl0bG9naW5cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtDaGVja01hcmt9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJjaGVjay1tYXJrLWljb25cIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2E+ICAgICAgICAgIFxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9naW4tYm94IGxvZ2luXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b24gb25Hb29nbGVMb2dpbj17aGFuZGxlR29vZ2xlTG9naW59IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJTd2FsIiwiQ2hlY2tNYXJrIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJheGlvcyIsIkdvb2dsZUxvZ2luQnV0dG9uIiwiTG9naW4iLCJyb3V0ZXIiLCJlcnJSZWYiLCJ1c2VyUmVmIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJNc2ciLCJzZXRFcnJNc2ciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsIkxPR0lOX1VSTCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwicHVzaCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ0ZXh0IiwiZXJyIiwiaGFuZGxlR29vZ2xlTG9naW4iLCJnb29nbGVSZXNwb25zZSIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJpZCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInJlZiIsInBsYWNlaG9sZGVyIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uR29vZ2xlTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/en/login/page.js\n"));

/***/ })

});