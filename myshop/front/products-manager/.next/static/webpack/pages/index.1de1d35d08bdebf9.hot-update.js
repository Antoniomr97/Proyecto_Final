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

/***/ "./src/components/cartComponent/Cart.jsx":
/*!***********************************************!*\
  !*** ./src/components/cartComponent/Cart.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.module.css */ \"./src/components/cartComponent/Cart.module.css\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cart_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n/* harmony import */ var _api_billFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/billFetch */ \"./src/api/billFetch.js\");\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const { userId, refreshCart, setRefreshCart } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_6__.useProduct)();\n    const [cartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showPaymentMessage, setShowPaymentMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId && cartVisible) {\n            fetchCartProducts();\n        }\n    }, [\n        userId,\n        cartVisible,\n        refreshCart\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        calculateTotalPrice();\n    }, [\n        cartProducts\n    ]);\n    const fetchCartProducts = async ()=>{\n        try {\n            const products = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.getCartProductsFetch)(userId);\n            setCartProducts(products.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching cart products:\", error);\n            setLoading(false);\n        }\n    };\n    const handleRemoveFromCart = async (productId)=>{\n        try {\n            await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.deleteCartProductFetch)(productId);\n            console.log(\"Product removed from cart:\", productId);\n            setRefreshCart((prevRefresh)=>!prevRefresh);\n        } catch (error) {\n            console.error(\"Error removing product from cart:\", error);\n        }\n    };\n    const toggleCartVisibility = ()=>{\n        setCartVisible(!cartVisible);\n        if (!cartVisible) {\n            setRefreshCart((prevRefresh)=>!prevRefresh);\n        }\n    };\n    const calculateTotalPrice = ()=>{\n        const total = cartProducts.reduce((acc, product)=>acc + product.productPrice, 0).toFixed(2);\n        setTotalPrice(total);\n    };\n    const handlePay = async ()=>{\n        try {\n            const billData = {\n                userId: userId,\n                totalPrice: parseFloat(totalPrice)\n            };\n            const newBill = await (0,_api_billFetch__WEBPACK_IMPORTED_MODULE_5__.CreateBillFetch)(billData);\n            console.log(\"Bill created:\", newBill);\n            setShowPaymentMessage(true);\n        } catch (error) {\n            console.error(\"Error creating bill:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cart),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),\n                onClick: toggleCartVisibility\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            cartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartItems),\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Please Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsList),\n                    children: [\n                        cartProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.productImage,\n                                        alt: product.productName,\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productInfo),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productName),\n                                                children: product.productName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productPrice),\n                                                children: [\n                                                    product.productPrice,\n                                                    \"€\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonRemove),\n                                                onClick: ()=>handleRemoveFromCart(product._id),\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, product.productId, true, {\n                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalContainer),\n                            children: [\n                                showPaymentMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().paymentMessage),\n                                    children: \"Payment Successful!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalPrice),\n                                    children: [\n                                        \"Total Price: \",\n                                        totalPrice,\n                                        \"€\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().payButton),\n                                    onClick: handlePay,\n                                    children: \"Pay\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"SuFFzZ1KtsjiGOrhQk2E2j/JUxU=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_6__.useProduct\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBbUI7Ozs7OztrREFFaEMsOERBQUMwQzt3Q0FBSUMsV0FBVzNDLHFFQUFrQjs7MERBQ2hDLDhEQUFDaUQ7Z0RBQUVOLFdBQVczQyxxRUFBa0I7MERBQUdtQyxRQUFRc0IsV0FBVzs7Ozs7OzBEQUN0RCw4REFBQ1I7Z0RBQUVOLFdBQVczQyxzRUFBbUI7O29EQUM5Qm1DLFFBQVFDLFlBQVk7b0RBQUM7Ozs7Ozs7MERBRXhCLDhEQUFDdUI7Z0RBQ0NoQixXQUFXM0Msc0VBQW1CO2dEQUM5QitDLFNBQVMsSUFBTXBCLHFCQUFxQlEsUUFBUTBCLEdBQUc7MERBQ2hEOzs7Ozs7Ozs7Ozs7OytCQWRLMUIsUUFBUVAsU0FBUzs7Ozs7c0NBb0I3Qiw4REFBQ2M7NEJBQUlDLFdBQVczQyx3RUFBcUI7O2dDQUNsQ21CLG9DQUNDLDhEQUFDOEI7b0NBQUVOLFdBQVczQyx3RUFBcUI7OENBQUU7Ozs7Ozs4Q0FFdkMsOERBQUNpRDtvQ0FBRU4sV0FBVzNDLG9FQUFpQjs7d0NBQUU7d0NBQWNpQjt3Q0FBVzs7Ozs7Ozs4Q0FDMUQsOERBQUMwQztvQ0FBT2hCLFdBQVczQyxtRUFBZ0I7b0NBQUUrQyxTQUFTVDs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekU7R0FwSHdCL0I7O1FBQzBCRCwrREFBVUE7OztLQURwQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydENvbXBvbmVudC9DYXJ0LmpzeD9kZDFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FydC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFTaG9wcGluZ0NhcnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0Q2FydFByb2R1Y3RzRmV0Y2gsXHJcbiAgZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCxcclxufSBmcm9tIFwiLi4vLi4vYXBpL2NhcnRGZXRjaFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVCaWxsRmV0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL2JpbGxGZXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvUHJvZHVjdENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQsIHJlZnJlc2hDYXJ0LCBzZXRSZWZyZXNoQ2FydCB9ID0gdXNlUHJvZHVjdCgpO1xyXG4gIGNvbnN0IFtjYXJ0VmlzaWJsZSwgc2V0Q2FydFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjYXJ0UHJvZHVjdHMsIHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3dQYXltZW50TWVzc2FnZSwgc2V0U2hvd1BheW1lbnRNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VySWQgJiYgY2FydFZpc2libGUpIHtcclxuICAgICAgZmV0Y2hDYXJ0UHJvZHVjdHMoKTtcclxuICAgIH1cclxuICB9LCBbdXNlcklkLCBjYXJ0VmlzaWJsZSwgcmVmcmVzaENhcnRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNhbGN1bGF0ZVRvdGFsUHJpY2UoKTtcclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoQ2FydFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRDYXJ0UHJvZHVjdHNGZXRjaCh1c2VySWQpO1xyXG4gICAgICBzZXRDYXJ0UHJvZHVjdHMocHJvZHVjdHMuZGF0YSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhcnQgcHJvZHVjdHM6XCIsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlRnJvbUNhcnQgPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBkZWxldGVDYXJ0UHJvZHVjdEZldGNoKHByb2R1Y3RJZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCByZW1vdmVkIGZyb20gY2FydDpcIiwgcHJvZHVjdElkKTtcclxuICAgICAgc2V0UmVmcmVzaENhcnQoKHByZXZSZWZyZXNoKSA9PiAhcHJldlJlZnJlc2gpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIHByb2R1Y3QgZnJvbSBjYXJ0OlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ2FydFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0VmlzaWJsZSghY2FydFZpc2libGUpO1xyXG4gICAgaWYgKCFjYXJ0VmlzaWJsZSkge1xyXG4gICAgICBzZXRSZWZyZXNoQ2FydCgocHJldlJlZnJlc2gpID0+ICFwcmV2UmVmcmVzaCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlVG90YWxQcmljZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRvdGFsID0gY2FydFByb2R1Y3RzXHJcbiAgICAgIC5yZWR1Y2UoKGFjYywgcHJvZHVjdCkgPT4gYWNjICsgcHJvZHVjdC5wcm9kdWN0UHJpY2UsIDApXHJcbiAgICAgIC50b0ZpeGVkKDIpO1xyXG4gICAgc2V0VG90YWxQcmljZSh0b3RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGF5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYmlsbERhdGEgPSB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgdG90YWxQcmljZTogcGFyc2VGbG9hdCh0b3RhbFByaWNlKSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgbmV3QmlsbCA9IGF3YWl0IENyZWF0ZUJpbGxGZXRjaChiaWxsRGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQmlsbCBjcmVhdGVkOlwiLCBuZXdCaWxsKTtcclxuICAgICAgc2V0U2hvd1BheW1lbnRNZXNzYWdlKHRydWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGJpbGw6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0fT5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgIGljb249e2ZhU2hvcHBpbmdDYXJ0fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJY29ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNhcnRWaXNpYmlsaXR5fVxyXG4gICAgICAvPlxyXG4gICAgICB7Y2FydFZpc2libGUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEl0ZW1zfT5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8cD5QbGVhc2UgTG9naW48L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzTGlzdH0+XHJcbiAgICAgICAgICAgICAge2NhcnRQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LnByb2R1Y3RJZH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnByb2R1Y3RJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0TmFtZX0+e3Byb2R1Y3QucHJvZHVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RQcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcm9kdWN0UHJpY2V94oKsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZyb21DYXJ0KHByb2R1Y3QuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtzaG93UGF5bWVudE1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXltZW50TWVzc2FnZX0+UGF5bWVudCBTdWNjZXNzZnVsITwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50b3RhbFByaWNlfT5Ub3RhbCBQcmljZToge3RvdGFsUHJpY2V94oKsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wYXlCdXR0b259IG9uQ2xpY2s9e2hhbmRsZVBheX0+XHJcbiAgICAgICAgICAgICAgICAgIFBheVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJGb250QXdlc29tZUljb24iLCJmYVNob3BwaW5nQ2FydCIsImdldENhcnRQcm9kdWN0c0ZldGNoIiwiZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCIsIkNyZWF0ZUJpbGxGZXRjaCIsInVzZVByb2R1Y3QiLCJDYXJ0IiwidXNlcklkIiwicmVmcmVzaENhcnQiLCJzZXRSZWZyZXNoQ2FydCIsImNhcnRWaXNpYmxlIiwic2V0Q2FydFZpc2libGUiLCJjYXJ0UHJvZHVjdHMiLCJzZXRDYXJ0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwic2hvd1BheW1lbnRNZXNzYWdlIiwic2V0U2hvd1BheW1lbnRNZXNzYWdlIiwiZmV0Y2hDYXJ0UHJvZHVjdHMiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwicHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJwcm9kdWN0SWQiLCJsb2ciLCJwcmV2UmVmcmVzaCIsInRvZ2dsZUNhcnRWaXNpYmlsaXR5IiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJwcm9kdWN0IiwicHJvZHVjdFByaWNlIiwidG9GaXhlZCIsImhhbmRsZVBheSIsImJpbGxEYXRhIiwicGFyc2VGbG9hdCIsIm5ld0JpbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJ0IiwiaWNvbiIsImNhcnRJY29uIiwib25DbGljayIsImNhcnRJdGVtcyIsInAiLCJwcm9kdWN0c0xpc3QiLCJtYXAiLCJwcm9kdWN0SXRlbSIsImltZyIsInNyYyIsInByb2R1Y3RJbWFnZSIsImFsdCIsInByb2R1Y3ROYW1lIiwicHJvZHVjdEluZm8iLCJidXR0b24iLCJidXR0b25SZW1vdmUiLCJfaWQiLCJ0b3RhbENvbnRhaW5lciIsInBheW1lbnRNZXNzYWdlIiwicGF5QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cartComponent/Cart.jsx\n"));

/***/ })

});