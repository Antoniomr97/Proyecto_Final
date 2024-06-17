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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.module.css */ \"./src/components/cartComponent/Cart.module.css\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cart_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n/* harmony import */ var _api_billFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/billFetch */ \"./src/api/billFetch.js\");\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const { userId, refreshCart, setRefreshCart } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_6__.useProduct)();\n    const [cartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showPaymentMessage, setShowPaymentMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId && cartVisible) {\n            fetchCartProducts();\n        }\n    }, [\n        userId,\n        cartVisible,\n        refreshCart\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        calculateTotalPrice();\n    }, [\n        cartProducts\n    ]);\n    const fetchCartProducts = async ()=>{\n        try {\n            const products = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.getCartProductsFetch)(userId);\n            setCartProducts(products.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching cart products:\", error);\n            setLoading(false);\n        }\n    };\n    const handleRemoveFromCart = async (productId)=>{\n        try {\n            await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.deleteCartProductFetch)(productId);\n            console.log(\"Product removed from cart:\", productId);\n            setRefreshCart((prevRefresh)=>!prevRefresh);\n        } catch (error) {\n            console.error(\"Error removing product from cart:\", error);\n        }\n    };\n    const toggleCartVisibility = ()=>{\n        setCartVisible(!cartVisible);\n        if (!cartVisible) {\n            setRefreshCart((prevRefresh)=>!prevRefresh);\n        }\n    };\n    const calculateTotalPrice = ()=>{\n        const total = cartProducts.reduce((acc, product)=>acc + product.productPrice, 0).toFixed(2);\n        setTotalPrice(total);\n    };\n    const handlePay = async ()=>{\n        try {\n            const billData = {\n                userId: userId,\n                totalPrice: parseFloat(totalPrice)\n            };\n            const newBill = await (0,_api_billFetch__WEBPACK_IMPORTED_MODULE_5__.CreateBillFetch)(billData);\n            console.log(\"Bill created:\", newBill);\n            setShowPaymentMessage(true);\n        } catch (error) {\n            console.error(\"Error creating bill:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cart),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faShoppingCart,\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),\n                onClick: toggleCartVisibility\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            cartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartItems),\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Please Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsList),\n                    children: [\n                        cartProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.productImage,\n                                        alt: product.productName,\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productInfo),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productName),\n                                                children: product.productName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productPrice),\n                                                children: [\n                                                    product.productPrice,\n                                                    \"€\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonRemove),\n                                                onClick: ()=>handleRemoveFromCart(product._id),\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, product.productId, true, {\n                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 17\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Total Price: \",\n                                        totalPrice,\n                                        \"€\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().payButton),\n                                    onClick: handlePay,\n                                    children: \"Pay\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 17\n                                }, this),\n                                showPaymentMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().paymentMessage),\n                                    children: \"Payment Successful!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"SuFFzZ1KtsjiGOrhQk2E2j/JUxU=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_6__.useProduct\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50L0NhcnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1o7QUFDMEI7QUFDRTtBQUl0QztBQUN5QjtBQUNJO0FBRTNDLFNBQVNVOztJQUN0QixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUUsR0FBR0osbUVBQVVBO0lBQzFELE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ29CLG9CQUFvQkMsc0JBQXNCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUU3REQsZ0RBQVNBLENBQUM7UUFDUixJQUFJVSxVQUFVRyxhQUFhO1lBQ3pCVTtRQUNGO0lBQ0YsR0FBRztRQUFDYjtRQUFRRztRQUFhRjtLQUFZO0lBRXJDWCxnREFBU0EsQ0FBQztRQUNSd0I7SUFDRixHQUFHO1FBQUNUO0tBQWE7SUFFakIsTUFBTVEsb0JBQW9CO1FBQ3hCLElBQUk7WUFDRixNQUFNRSxXQUFXLE1BQU1wQixvRUFBb0JBLENBQUNLO1lBQzVDTSxnQkFBZ0JTLFNBQVNDLElBQUk7WUFDN0JSLFdBQVc7UUFDYixFQUFFLE9BQU9TLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDL0NULFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTVcsdUJBQXVCLE9BQU9DO1FBQ2xDLElBQUk7WUFDRixNQUFNeEIsc0VBQXNCQSxDQUFDd0I7WUFDN0JGLFFBQVFHLEdBQUcsQ0FBQyw4QkFBOEJEO1lBQzFDbEIsZUFBZSxDQUFDb0IsY0FBZ0IsQ0FBQ0E7UUFDbkMsRUFBRSxPQUFPTCxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxNQUFNTSx1QkFBdUI7UUFDM0JuQixlQUFlLENBQUNEO1FBQ2hCLElBQUksQ0FBQ0EsYUFBYTtZQUNoQkQsZUFBZSxDQUFDb0IsY0FBZ0IsQ0FBQ0E7UUFDbkM7SUFDRjtJQUVBLE1BQU1SLHNCQUFzQjtRQUMxQixNQUFNVSxRQUFRbkIsYUFDWG9CLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxVQUFZRCxNQUFNQyxRQUFRQyxZQUFZLEVBQUUsR0FDckRDLE9BQU8sQ0FBQztRQUNYbkIsY0FBY2M7SUFDaEI7SUFFQSxNQUFNTSxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXO2dCQUNmL0IsUUFBUUE7Z0JBQ1JTLFlBQVl1QixXQUFXdkI7WUFDekI7WUFDQSxNQUFNd0IsVUFBVSxNQUFNcEMsK0RBQWVBLENBQUNrQztZQUN0Q2IsUUFBUUcsR0FBRyxDQUFDLGlCQUFpQlk7WUFDN0JyQixzQkFBc0I7UUFDeEIsRUFBRSxPQUFPSyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVczQyw4REFBVzs7MEJBQ3pCLDhEQUFDQywyRUFBZUE7Z0JBQ2Q0QyxNQUFNM0MsNkVBQWNBO2dCQUNwQnlDLFdBQVczQyxrRUFBZTtnQkFDMUIrQyxTQUFTaEI7Ozs7OztZQUVWcEIsNkJBQ0MsOERBQUMrQjtnQkFBSUMsV0FBVzNDLG1FQUFnQjswQkFDN0JlLHdCQUNDLDhEQUFDa0M7OEJBQUU7Ozs7O3lDQUVILDhEQUFDUDtvQkFBSUMsV0FBVzNDLHNFQUFtQjs7d0JBQ2hDYSxhQUFhc0MsR0FBRyxDQUFDLENBQUNoQix3QkFDakIsOERBQUNPO2dDQUE0QkMsV0FBVzNDLHFFQUFrQjs7a0RBQ3hELDhEQUFDcUQ7d0NBQ0NDLEtBQUtuQixRQUFRb0IsWUFBWTt3Q0FDekJDLEtBQUtyQixRQUFRc0IsV0FBVzt3Q0FDeEJkLFdBQVczQyxzRUFBbUI7Ozs7OztrREFFaEMsOERBQUMwQzt3Q0FBSUMsV0FBVzNDLHFFQUFrQjs7MERBQ2hDLDhEQUFDaUQ7Z0RBQUVOLFdBQVczQyxxRUFBa0I7MERBQUdtQyxRQUFRc0IsV0FBVzs7Ozs7OzBEQUN0RCw4REFBQ1I7Z0RBQUVOLFdBQVczQyxzRUFBbUI7O29EQUM5Qm1DLFFBQVFDLFlBQVk7b0RBQUM7Ozs7Ozs7MERBRXhCLDhEQUFDdUI7Z0RBQ0NoQixXQUFXM0Msc0VBQW1CO2dEQUM5QitDLFNBQVMsSUFBTXBCLHFCQUFxQlEsUUFBUTBCLEdBQUc7MERBQ2hEOzs7Ozs7Ozs7Ozs7OytCQWRLMUIsUUFBUVAsU0FBUzs7Ozs7c0NBb0I3Qiw4REFBQ2M7NEJBQUlDLFdBQVczQyx3RUFBcUI7OzhDQUNuQyw4REFBQ2lEOzt3Q0FBRTt3Q0FBY2hDO3dDQUFXOzs7Ozs7OzhDQUM1Qiw4REFBQzBDO29DQUFPaEIsV0FBVzNDLG1FQUFnQjtvQ0FBRStDLFNBQVNUOzhDQUFXOzs7Ozs7Z0NBR3hEbkIsb0NBQ0MsOERBQUM4QjtvQ0FBRU4sV0FBVzNDLHdFQUFxQjs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkQ7R0FwSHdCTzs7UUFDMEJELCtEQUFVQTs7O0tBRHBDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50L0NhcnQuanN4P2RkMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJ0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDYXJ0UHJvZHVjdHNGZXRjaCxcclxuICBkZWxldGVDYXJ0UHJvZHVjdEZldGNoLFxyXG59IGZyb20gXCIuLi8uLi9hcGkvY2FydEZldGNoXCI7XHJcbmltcG9ydCB7IENyZWF0ZUJpbGxGZXRjaCB9IGZyb20gXCIuLi8uLi9hcGkvYmlsbEZldGNoXCI7XHJcbmltcG9ydCB7IHVzZVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Qcm9kdWN0Q29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCB7IHVzZXJJZCwgcmVmcmVzaENhcnQsIHNldFJlZnJlc2hDYXJ0IH0gPSB1c2VQcm9kdWN0KCk7XHJcbiAgY29uc3QgW2NhcnRWaXNpYmxlLCBzZXRDYXJ0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NhcnRQcm9kdWN0cywgc2V0Q2FydFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1BheW1lbnRNZXNzYWdlLCBzZXRTaG93UGF5bWVudE1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCAmJiBjYXJ0VmlzaWJsZSkge1xyXG4gICAgICBmZXRjaENhcnRQcm9kdWN0cygpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VySWQsIGNhcnRWaXNpYmxlLCByZWZyZXNoQ2FydF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpO1xyXG4gIH0sIFtjYXJ0UHJvZHVjdHNdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDYXJ0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldENhcnRQcm9kdWN0c0ZldGNoKHVzZXJJZCk7XHJcbiAgICAgIHNldENhcnRQcm9kdWN0cyhwcm9kdWN0cy5kYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FydCBwcm9kdWN0czpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2gocHJvZHVjdElkKTtcclxuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSBjYXJ0OlwiLCBwcm9kdWN0SWQpO1xyXG4gICAgICBzZXRSZWZyZXNoQ2FydCgocHJldlJlZnJlc2gpID0+ICFwcmV2UmVmcmVzaCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVtb3ZpbmcgcHJvZHVjdCBmcm9tIGNhcnQ6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDYXJ0VmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIHNldENhcnRWaXNpYmxlKCFjYXJ0VmlzaWJsZSk7XHJcbiAgICBpZiAoIWNhcnRWaXNpYmxlKSB7XHJcbiAgICAgIHNldFJlZnJlc2hDYXJ0KChwcmV2UmVmcmVzaCkgPT4gIXByZXZSZWZyZXNoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjYWxjdWxhdGVUb3RhbFByaWNlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG90YWwgPSBjYXJ0UHJvZHVjdHNcclxuICAgICAgLnJlZHVjZSgoYWNjLCBwcm9kdWN0KSA9PiBhY2MgKyBwcm9kdWN0LnByb2R1Y3RQcmljZSwgMClcclxuICAgICAgLnRvRml4ZWQoMik7XHJcbiAgICBzZXRUb3RhbFByaWNlKHRvdGFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBiaWxsRGF0YSA9IHtcclxuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICB0b3RhbFByaWNlOiBwYXJzZUZsb2F0KHRvdGFsUHJpY2UpLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBuZXdCaWxsID0gYXdhaXQgQ3JlYXRlQmlsbEZldGNoKGJpbGxEYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJCaWxsIGNyZWF0ZWQ6XCIsIG5ld0JpbGwpO1xyXG4gICAgICBzZXRTaG93UGF5bWVudE1lc3NhZ2UodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgYmlsbDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnR9PlxyXG4gICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgaWNvbj17ZmFTaG9wcGluZ0NhcnR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEljb259XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQ2FydFZpc2liaWxpdHl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtjYXJ0VmlzaWJsZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SXRlbXN9PlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxwPlBsZWFzZSBMb2dpbjwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNMaXN0fT5cclxuICAgICAgICAgICAgICB7Y2FydFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QucHJvZHVjdElkfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3ROYW1lfT57cHJvZHVjdC5wcm9kdWN0TmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByb2R1Y3RQcmljZX3igqxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRnJvbUNhcnQocHJvZHVjdC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHA+VG90YWwgUHJpY2U6IHt0b3RhbFByaWNlfeKCrDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucGF5QnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVQYXl9PlxyXG4gICAgICAgICAgICAgICAgICBQYXlcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge3Nob3dQYXltZW50TWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBheW1lbnRNZXNzYWdlfT5QYXltZW50IFN1Y2Nlc3NmdWwhPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hvcHBpbmdDYXJ0IiwiZ2V0Q2FydFByb2R1Y3RzRmV0Y2giLCJkZWxldGVDYXJ0UHJvZHVjdEZldGNoIiwiQ3JlYXRlQmlsbEZldGNoIiwidXNlUHJvZHVjdCIsIkNhcnQiLCJ1c2VySWQiLCJyZWZyZXNoQ2FydCIsInNldFJlZnJlc2hDYXJ0IiwiY2FydFZpc2libGUiLCJzZXRDYXJ0VmlzaWJsZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidG90YWxQcmljZSIsInNldFRvdGFsUHJpY2UiLCJzaG93UGF5bWVudE1lc3NhZ2UiLCJzZXRTaG93UGF5bWVudE1lc3NhZ2UiLCJmZXRjaENhcnRQcm9kdWN0cyIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJwcm9kdWN0cyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsInByb2R1Y3RJZCIsImxvZyIsInByZXZSZWZyZXNoIiwidG9nZ2xlQ2FydFZpc2liaWxpdHkiLCJ0b3RhbCIsInJlZHVjZSIsImFjYyIsInByb2R1Y3QiLCJwcm9kdWN0UHJpY2UiLCJ0b0ZpeGVkIiwiaGFuZGxlUGF5IiwiYmlsbERhdGEiLCJwYXJzZUZsb2F0IiwibmV3QmlsbCIsImRpdiIsImNsYXNzTmFtZSIsImNhcnQiLCJpY29uIiwiY2FydEljb24iLCJvbkNsaWNrIiwiY2FydEl0ZW1zIiwicCIsInByb2R1Y3RzTGlzdCIsIm1hcCIsInByb2R1Y3RJdGVtIiwiaW1nIiwic3JjIiwicHJvZHVjdEltYWdlIiwiYWx0IiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0SW5mbyIsImJ1dHRvbiIsImJ1dHRvblJlbW92ZSIsIl9pZCIsInRvdGFsQ29udGFpbmVyIiwicGF5QnV0dG9uIiwicGF5bWVudE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cartComponent/Cart.jsx\n"));

/***/ })

});