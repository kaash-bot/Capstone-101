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

/***/ "./src/components/dashboard-sidebar.js":
/*!*********************************************!*\
  !*** ./src/components/dashboard-sidebar.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DashboardSidebar\": function() { return /* binding */ DashboardSidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _icons_chart_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/chart-bar */ \"./src/icons/chart-bar.js\");\n/* harmony import */ var _icons_cog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/cog */ \"./src/icons/cog.js\");\n/* harmony import */ var _icons_lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/lock */ \"./src/icons/lock.js\");\n/* harmony import */ var _icons_shopping_bag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/shopping-bag */ \"./src/icons/shopping-bag.js\");\n/* harmony import */ var _icons_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/user */ \"./src/icons/user.js\");\n/* harmony import */ var _icons_user_add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/user-add */ \"./src/icons/user-add.js\");\n/* harmony import */ var _icons_x_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/x-circle */ \"./src/icons/x-circle.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logo */ \"./src/components/logo.js\");\n/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-item */ \"./src/components/nav-item.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        href: '/',\n        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_chart_bar__WEBPACK_IMPORTED_MODULE_5__.ChartBar, {\n            fontSize: \"small\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 19,\n                columnNumber: 12\n            },\n            __self: undefined\n        }),\n        title: 'Dashboard'\n    },\n    {\n        href: '/products',\n        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_shopping_bag__WEBPACK_IMPORTED_MODULE_8__.ShoppingBag, {\n            fontSize: \"small\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 24,\n                columnNumber: 12\n            },\n            __self: undefined\n        }),\n        title: 'Products'\n    },\n    {\n        href: '/account',\n        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_user__WEBPACK_IMPORTED_MODULE_9__.User, {\n            fontSize: \"small\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 29,\n                columnNumber: 12\n            },\n            __self: undefined\n        }),\n        title: 'Account'\n    },\n    {\n        href: '/settings',\n        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_cog__WEBPACK_IMPORTED_MODULE_6__.Cog, {\n            fontSize: \"small\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 34,\n                columnNumber: 12\n            },\n            __self: undefined\n        }),\n        title: 'Settings'\n    },\n    {\n        href: '/login',\n        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_lock__WEBPACK_IMPORTED_MODULE_7__.Lock, {\n            fontSize: \"small\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 39,\n                columnNumber: 12\n            },\n            __self: undefined\n        }),\n        title: 'Login'\n    },\n    {\n        href: '/register',\n        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_user_add__WEBPACK_IMPORTED_MODULE_10__.UserAdd, {\n            fontSize: \"small\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 44,\n                columnNumber: 12\n            },\n            __self: undefined\n        }),\n        title: 'Register'\n    },\n    {\n        href: '/404',\n        icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_x_circle__WEBPACK_IMPORTED_MODULE_11__.XCircle, {\n            fontSize: \"small\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 49,\n                columnNumber: 12\n            },\n            __self: undefined\n        }),\n        title: 'Error'\n    }\n];\nvar DashboardSidebar = function(props) {\n    var _this1 = _this;\n    _s();\n    var open = props.open, onClose = props.onClose;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var lgUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__.useMediaQuery)(function(theme) {\n        return theme.breakpoints.up('lg');\n    }, {\n        defaultMatches: true,\n        noSsr: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!router.isReady) {\n            return;\n        }\n        if (open) {\n            onClose === null || onClose === void 0 ? void 0 : onClose();\n        }\n    }, // eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n        router.asPath\n    ]);\n    var content = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {\n            sx: {\n                display: 'flex',\n                flexDirection: 'column',\n                height: '100%'\n            },\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {\n                            sx: {\n                                p: 3\n                            },\n                            __source: {\n                                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                passHref: true,\n                                __source: {\n                                    fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_logo__WEBPACK_IMPORTED_MODULE_12__.Logo, {\n                                        sx: {\n                                            height: 42,\n                                            width: 42\n                                        },\n                                        __source: {\n                                            fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {\n                            sx: {\n                                px: 2\n                            },\n                            __source: {\n                                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Divider, {\n                    sx: {\n                        borderColor: '#2D3748',\n                        my: 3\n                    },\n                    __source: {\n                        fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {\n                    sx: {\n                        flexGrow: 1\n                    },\n                    __source: {\n                        fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: items.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_nav_item__WEBPACK_IMPORTED_MODULE_13__.NavItem, {\n                            icon: item.icon,\n                            href: item.href,\n                            title: item.title,\n                            __source: {\n                                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        }, item.title);\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Divider, {\n                    sx: {\n                        borderColor: '#2D3748'\n                    },\n                    __source: {\n                        fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Box, {\n                    sx: {\n                        px: 2,\n                        py: 3\n                    },\n                    __source: {\n                        fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            ]\n        })\n    });\n    if (lgUp) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Drawer, {\n            anchor: \"left\",\n            open: true,\n            PaperProps: {\n                sx: {\n                    backgroundColor: 'neutral.900',\n                    color: '#FFFFFF',\n                    width: 280\n                }\n            },\n            variant: \"permanent\",\n            __source: {\n                fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: content\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Drawer, {\n        anchor: \"left\",\n        onClose: onClose,\n        open: open,\n        PaperProps: {\n            sx: {\n                backgroundColor: 'neutral.900',\n                color: '#FFFFFF',\n                width: 280\n            }\n        },\n        sx: {\n            zIndex: function(theme) {\n                return theme.zIndex.appBar + 100;\n            }\n        },\n        variant: \"temporary\",\n        __source: {\n            fileName: \"/home/aashutosh/material-kit-react/src/components/dashboard-sidebar.js\",\n            lineNumber: 152,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: content\n    }));\n};\n_s(DashboardSidebar, \"jDe7Wmux/yFshLtKK8Bs0+WB45U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _mui_material__WEBPACK_IMPORTED_MODULE_14__.useMediaQuery\n    ];\n});\n_c = DashboardSidebar;\nDashboardSidebar.propTypes = {\n    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),\n    open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)\n};\nvar _c;\n$RefreshReg$(_c, \"DashboardSidebar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQtc2lkZWJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNEO0FBQ087QUFDTDtBQUNxRDtBQUMxQjtBQUNoQjtBQUNHO0FBQ3NCO0FBQ3RCO0FBQ1U7QUFDQTtBQUM3QjtBQUNPOzs7QUFFcEMsR0FBSyxDQUFDMEIsS0FBSyxHQUFHLENBQUM7SUFDYixDQUFDO1FBQ0NDLElBQUksRUFBRSxDQUFHO1FBQ1RDLElBQUksdUVBQUlqQixzREFBWTtZQUFDa0IsUUFBUSxFQUFDLENBQU87Ozs7Ozs7O1FBQ3JDQyxLQUFLLEVBQUUsQ0FBVztJQUNwQixDQUFDO0lBQ0QsQ0FBQztRQUNDSCxJQUFJLEVBQUUsQ0FBVztRQUNqQkMsSUFBSSx1RUFBSVgsNERBQWU7WUFBQ1ksUUFBUSxFQUFDLENBQU87Ozs7Ozs7O1FBQ3hDQyxLQUFLLEVBQUUsQ0FBVTtJQUNuQixDQUFDO0lBQ0QsQ0FBQztRQUNDSCxJQUFJLEVBQUUsQ0FBVTtRQUNoQkMsSUFBSSx1RUFBSVQsNkNBQVE7WUFBQ1UsUUFBUSxFQUFDLENBQU87Ozs7Ozs7O1FBQ2pDQyxLQUFLLEVBQUUsQ0FBUztJQUNsQixDQUFDO0lBQ0QsQ0FBQztRQUNDSCxJQUFJLEVBQUUsQ0FBVztRQUNqQkMsSUFBSSx1RUFBSWYsMkNBQU87WUFBQ2dCLFFBQVEsRUFBQyxDQUFPOzs7Ozs7OztRQUNoQ0MsS0FBSyxFQUFFLENBQVU7SUFDbkIsQ0FBQztJQUNELENBQUM7UUFDQ0gsSUFBSSxFQUFFLENBQVE7UUFDZEMsSUFBSSx1RUFBSWIsNkNBQVE7WUFBQ2MsUUFBUSxFQUFDLENBQU87Ozs7Ozs7O1FBQ2pDQyxLQUFLLEVBQUUsQ0FBTztJQUNoQixDQUFDO0lBQ0QsQ0FBQztRQUNDSCxJQUFJLEVBQUUsQ0FBVztRQUNqQkMsSUFBSSx1RUFBSVAscURBQVc7WUFBQ1EsUUFBUSxFQUFDLENBQU87Ozs7Ozs7O1FBQ3BDQyxLQUFLLEVBQUUsQ0FBVTtJQUNuQixDQUFDO0lBQ0QsQ0FBQztRQUNDSCxJQUFJLEVBQUUsQ0FBTTtRQUNaQyxJQUFJLHVFQUFJTCxxREFBVztZQUFDTSxRQUFRLEVBQUMsQ0FBTzs7Ozs7Ozs7UUFDcENDLEtBQUssRUFBRSxDQUFPO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBRU0sR0FBSyxDQUFDQyxnQkFBZ0IsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzs7SUFDMUMsR0FBSyxDQUFHQyxJQUFJLEdBQWNELEtBQUssQ0FBdkJDLElBQUksRUFBRUMsT0FBTyxHQUFLRixLQUFLLENBQWpCRSxPQUFPO0lBQ3JCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHakMsc0RBQVM7SUFDeEIsR0FBSyxDQUFDa0MsSUFBSSxHQUFHM0IsNkRBQWEsQ0FBQyxRQUFRLENBQVA0QixLQUFLO1FBQUtBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxFQUFFLENBQUMsQ0FBSTtPQUFHLENBQUM7UUFDakVDLGNBQWMsRUFBRSxJQUFJO1FBQ3BCQyxLQUFLLEVBQUUsS0FBSztJQUNkLENBQUM7SUFFRHpDLGdEQUFTLENBQ1AsUUFDSixHQURVLENBQUM7UUFDTCxFQUFFLEdBQUdtQyxNQUFNLENBQUNPLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLE1BQU07UUFDUixDQUFDO1FBRUQsRUFBRSxFQUFFVCxJQUFJLEVBQUUsQ0FBQztZQUNUQyxPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUMsRUFDRCxFQUF1RDtJQUN2RCxDQUFDQztRQUFBQSxNQUFNLENBQUNRLE1BQU07SUFBQSxDQUFDO0lBR2pCLEdBQUssQ0FBQ0MsT0FBTzt3RkFFUnhDLCtDQUFHO1lBQ0Z5QyxFQUFFLEVBQUUsQ0FBQztnQkFDSEMsT0FBTyxFQUFFLENBQU07Z0JBQ2ZDLGFBQWEsRUFBRSxDQUFRO2dCQUN2QkMsTUFBTSxFQUFFLENBQU07WUFDaEIsQ0FBQzs7Ozs7Ozs7c0ZBRUFDLENBQUc7Ozs7Ozs7OzZGQUNEN0MsK0NBQUc7NEJBQUN5QyxFQUFFLEVBQUUsQ0FBQztnQ0FBQ0ssQ0FBQyxFQUFFLENBQUM7NEJBQUMsQ0FBQzs7Ozs7OzsyR0FDZGpELGtEQUFRO2dDQUNQMEIsSUFBSSxFQUFDLENBQUc7Z0NBQ1J3QixRQUFROzs7Ozs7OytHQUVQQyxDQUFDOzs7Ozs7O21IQUNDNUIsd0NBQUk7d0NBQ0hxQixFQUFFLEVBQUUsQ0FBQzs0Q0FDSEcsTUFBTSxFQUFFLEVBQUU7NENBQ1ZLLEtBQUssRUFBRSxFQUFFO3dDQUNYLENBQUM7Ozs7Ozs7Ozs7OzZGQUtSakQsK0NBQUc7NEJBQUN5QyxFQUFFLEVBQUUsQ0FBQztnQ0FBQ1MsRUFBRSxFQUFFLENBQUM7NEJBQUMsQ0FBQzs7Ozs7Ozs7OztxRkFHbkJoRCxtREFBTztvQkFDTnVDLEVBQUUsRUFBRSxDQUFDO3dCQUNIVSxXQUFXLEVBQUUsQ0FBUzt3QkFDdEJDLEVBQUUsRUFBRSxDQUFDO29CQUNQLENBQUM7Ozs7Ozs7O3FGQUVGcEQsK0NBQUc7b0JBQUN5QyxFQUFFLEVBQUUsQ0FBQzt3QkFBQ1ksUUFBUSxFQUFFLENBQUM7b0JBQUMsQ0FBQzs7Ozs7Ozs4QkFDckIvQixLQUFLLENBQUNnQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO3NDQUNkLE1BQU0sd0RBQUxsQywrQ0FBTzs0QkFFTkcsSUFBSSxFQUFFK0IsSUFBSSxDQUFDL0IsSUFBSTs0QkFDZkQsSUFBSSxFQUFFZ0MsSUFBSSxDQUFDaEMsSUFBSTs0QkFDZkcsS0FBSyxFQUFFNkIsSUFBSSxDQUFDN0IsS0FBSzs7Ozs7OzsyQkFIWjZCLElBQUksQ0FBQzdCLEtBQUs7OztxRkFPcEJ4QixtREFBTztvQkFBQ3VDLEVBQUUsRUFBRSxDQUFDO3dCQUFDVSxXQUFXLEVBQUUsQ0FBUztvQkFBQyxDQUFDOzs7Ozs7OztxRkFDdENuRCwrQ0FBRztvQkFDRnlDLEVBQUUsRUFBRSxDQUFDO3dCQUNIUyxFQUFFLEVBQUUsQ0FBQzt3QkFDTE0sRUFBRSxFQUFFLENBQUM7b0JBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7SUFPVCxFQUFFLEVBQUV4QixJQUFJLEVBQUUsQ0FBQztRQUNULE1BQU0sc0VBQ0g3QixrREFBTTtZQUNMc0QsTUFBTSxFQUFDLENBQU07WUFDYjVCLElBQUk7WUFDSjZCLFVBQVUsRUFBRSxDQUFDO2dCQUNYakIsRUFBRSxFQUFFLENBQUM7b0JBQ0hrQixlQUFlLEVBQUUsQ0FBYTtvQkFDOUJDLEtBQUssRUFBRSxDQUFTO29CQUNoQlgsS0FBSyxFQUFFLEdBQUc7Z0JBQ1osQ0FBQztZQUNILENBQUM7WUFDRFksT0FBTyxFQUFDLENBQVc7Ozs7Ozs7c0JBRWxCckIsT0FBTzs7SUFHZCxDQUFDO0lBRUQsTUFBTSxzRUFDSHJDLGtEQUFNO1FBQ0xzRCxNQUFNLEVBQUMsQ0FBTTtRQUNiM0IsT0FBTyxFQUFFQSxPQUFPO1FBQ2hCRCxJQUFJLEVBQUVBLElBQUk7UUFDVjZCLFVBQVUsRUFBRSxDQUFDO1lBQ1hqQixFQUFFLEVBQUUsQ0FBQztnQkFDSGtCLGVBQWUsRUFBRSxDQUFhO2dCQUM5QkMsS0FBSyxFQUFFLENBQVM7Z0JBQ2hCWCxLQUFLLEVBQUUsR0FBRztZQUNaLENBQUM7UUFDSCxDQUFDO1FBQ0RSLEVBQUUsRUFBRSxDQUFDO1lBQUNxQixNQUFNLEVBQUUsUUFBUSxDQUFQN0IsS0FBSztnQkFBS0EsTUFBTTZCLENBQU43QixLQUFLLENBQUM2QixNQUFNLENBQUNDLE1BQU0sR0FBRyxHQUFHOztRQUFDLENBQUM7UUFDcERGLE9BQU8sRUFBQyxDQUFXOzs7Ozs7O2tCQUVsQnJCLE9BQU87O0FBR2QsQ0FBQztHQW5IWWIsZ0JBQWdCOztRQUVaN0Isa0RBQVM7UUFDWE8seURBQWE7OztLQUhmc0IsZ0JBQWdCO0FBcUg3QkEsZ0JBQWdCLENBQUNxQyxTQUFTLEdBQUcsQ0FBQztJQUM1QmxDLE9BQU8sRUFBRS9CLHdEQUFjO0lBQ3ZCOEIsSUFBSSxFQUFFOUIsd0RBQWM7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQtc2lkZWJhci5qcz85YWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBEaXZpZGVyLCBEcmF3ZXIsIFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IENoYXJ0QmFyIGFzIENoYXJ0QmFySWNvbiB9IGZyb20gJy4uL2ljb25zL2NoYXJ0LWJhcic7XG5pbXBvcnQgeyBDb2cgYXMgQ29nSWNvbiB9IGZyb20gJy4uL2ljb25zL2NvZyc7XG5pbXBvcnQgeyBMb2NrIGFzIExvY2tJY29uIH0gZnJvbSAnLi4vaWNvbnMvbG9jayc7XG5pbXBvcnQgeyBTaG9wcGluZ0JhZyBhcyBTaG9wcGluZ0JhZ0ljb24gfSBmcm9tICcuLi9pY29ucy9zaG9wcGluZy1iYWcnO1xuaW1wb3J0IHsgVXNlciBhcyBVc2VySWNvbiB9IGZyb20gJy4uL2ljb25zL3VzZXInO1xuaW1wb3J0IHsgVXNlckFkZCBhcyBVc2VyQWRkSWNvbiB9IGZyb20gJy4uL2ljb25zL3VzZXItYWRkJztcbmltcG9ydCB7IFhDaXJjbGUgYXMgWENpcmNsZUljb24gfSBmcm9tICcuLi9pY29ucy94LWNpcmNsZSc7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi9sb2dvJztcbmltcG9ydCB7IE5hdkl0ZW0gfSBmcm9tICcuL25hdi1pdGVtJztcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICBocmVmOiAnLycsXG4gICAgaWNvbjogKDxDaGFydEJhckljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+KSxcbiAgICB0aXRsZTogJ0Rhc2hib2FyZCdcbiAgfSxcbiAge1xuICAgIGhyZWY6ICcvcHJvZHVjdHMnLFxuICAgIGljb246ICg8U2hvcHBpbmdCYWdJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPiksXG4gICAgdGl0bGU6ICdQcm9kdWN0cydcbiAgfSxcbiAge1xuICAgIGhyZWY6ICcvYWNjb3VudCcsXG4gICAgaWNvbjogKDxVc2VySWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz4pLFxuICAgIHRpdGxlOiAnQWNjb3VudCdcbiAgfSxcbiAge1xuICAgIGhyZWY6ICcvc2V0dGluZ3MnLFxuICAgIGljb246ICg8Q29nSWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz4pLFxuICAgIHRpdGxlOiAnU2V0dGluZ3MnXG4gIH0sXG4gIHtcbiAgICBocmVmOiAnL2xvZ2luJyxcbiAgICBpY29uOiAoPExvY2tJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPiksXG4gICAgdGl0bGU6ICdMb2dpbidcbiAgfSxcbiAge1xuICAgIGhyZWY6ICcvcmVnaXN0ZXInLFxuICAgIGljb246ICg8VXNlckFkZEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+KSxcbiAgICB0aXRsZTogJ1JlZ2lzdGVyJ1xuICB9LFxuICB7XG4gICAgaHJlZjogJy80MDQnLFxuICAgIGljb246ICg8WENpcmNsZUljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+KSxcbiAgICB0aXRsZTogJ0Vycm9yJ1xuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkU2lkZWJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9wZW4sIG9uQ2xvc2UgfSA9IHByb3BzO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbGdVcCA9IHVzZU1lZGlhUXVlcnkoKHRoZW1lKSA9PiB0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSwge1xuICAgIGRlZmF1bHRNYXRjaGVzOiB0cnVlLFxuICAgIG5vU3NyOiBmYWxzZVxuICB9KTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgIG9uQ2xvc2U/LigpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtyb3V0ZXIuYXNQYXRoXVxuICApO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Qm94IHN4PXt7IHA6IDMgfX0+XG4gICAgICAgICAgICA8TmV4dExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQyXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17eyBweDogMiB9fT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzJEMzc0OCcsXG4gICAgICAgICAgICBteTogM1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpdmlkZXIgc3g9e3sgYm9yZGVyQ29sb3I6ICcjMkQzNzQ4JyB9fSAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHB4OiAyLFxuICAgICAgICAgICAgcHk6IDNcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG5cbiAgaWYgKGxnVXApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyYXdlclxuICAgICAgICBhbmNob3I9XCJsZWZ0XCJcbiAgICAgICAgb3BlblxuICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgc3g6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ25ldXRyYWwuOTAwJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgICAgICB3aWR0aDogMjgwXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgID5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L0RyYXdlcj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICBhbmNob3I9XCJsZWZ0XCJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICBvcGVuPXtvcGVufVxuICAgICAgUGFwZXJQcm9wcz17e1xuICAgICAgICBzeDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ25ldXRyYWwuOTAwJyxcbiAgICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgICAgICAgIHdpZHRoOiAyODBcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHN4PXt7IHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguYXBwQmFyICsgMTAwIH19XG4gICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcbiAgICA+XG4gICAgICB7Y29udGVudH1cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5cbkRhc2hib2FyZFNpZGViYXIucHJvcFR5cGVzID0ge1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2xcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiTmV4dExpbmsiLCJ1c2VSb3V0ZXIiLCJQcm9wVHlwZXMiLCJCb3giLCJCdXR0b24iLCJEaXZpZGVyIiwiRHJhd2VyIiwiVHlwb2dyYXBoeSIsInVzZU1lZGlhUXVlcnkiLCJDaGFydEJhciIsIkNoYXJ0QmFySWNvbiIsIkNvZyIsIkNvZ0ljb24iLCJMb2NrIiwiTG9ja0ljb24iLCJTaG9wcGluZ0JhZyIsIlNob3BwaW5nQmFnSWNvbiIsIlVzZXIiLCJVc2VySWNvbiIsIlVzZXJBZGQiLCJVc2VyQWRkSWNvbiIsIlhDaXJjbGUiLCJYQ2lyY2xlSWNvbiIsIkxvZ28iLCJOYXZJdGVtIiwiaXRlbXMiLCJocmVmIiwiaWNvbiIsImZvbnRTaXplIiwidGl0bGUiLCJEYXNoYm9hcmRTaWRlYmFyIiwicHJvcHMiLCJvcGVuIiwib25DbG9zZSIsInJvdXRlciIsImxnVXAiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwidXAiLCJkZWZhdWx0TWF0Y2hlcyIsIm5vU3NyIiwiaXNSZWFkeSIsImFzUGF0aCIsImNvbnRlbnQiLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwiZGl2IiwicCIsInBhc3NIcmVmIiwiYSIsIndpZHRoIiwicHgiLCJib3JkZXJDb2xvciIsIm15IiwiZmxleEdyb3ciLCJtYXAiLCJpdGVtIiwicHkiLCJhbmNob3IiLCJQYXBlclByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ2YXJpYW50IiwiekluZGV4IiwiYXBwQmFyIiwicHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/dashboard-sidebar.js\n");

/***/ })

});