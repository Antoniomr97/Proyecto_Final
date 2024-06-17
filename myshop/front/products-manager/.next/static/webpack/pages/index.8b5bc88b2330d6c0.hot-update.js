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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.module.css */ \"./src/components/cartComponent/Cart.module.css\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cart_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const { userId } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct)(); // Obtén userId del contexto\n    const [cartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para controlar la visibilidad del carrito\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [refreshCart, setRefreshCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para forzar la actualización del carrito\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Estado para almacenar el precio total del carrito\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId && cartVisible) {\n            fetchCartProducts();\n        }\n    }, [\n        userId,\n        cartVisible,\n        refreshCart\n    ]); // Agregar refreshCart a las dependencias\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Calcular el precio total cada vez que cambian los productos del carrito\n        calculateTotalPrice();\n    }, [\n        cartProducts\n    ]);\n    const fetchCartProducts = async ()=>{\n        try {\n            setLoading(true); // Set loading to true before fetching\n            const products = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.getCartProductsFetch)(userId); // Pasa userId al fetch\n            setCartProducts(products.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching cart products:\", error);\n            setLoading(false);\n        }\n    };\n    const handleRemoveFromCart = async (productId)=>{\n        try {\n            await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.deleteCartProductFetch)(productId); // Llama al fetch para eliminar el producto del carrito\n            console.log(\"Product removed from cart:\", productId);\n            setRefreshCart(!refreshCart); // Activa el refreshCart para forzar la actualización del carrito\n        } catch (error) {\n            console.error(\"Error removing product from cart:\", error);\n        }\n    };\n    const toggleCartVisibility = ()=>{\n        setCartVisible(!cartVisible); // Cambia el estado para mostrar u ocultar el carrito\n        if (!cartVisible) {\n            setRefreshCart(!refreshCart); // Activa el refreshCart cuando se muestra el carrito\n        }\n    };\n    const calculateTotalPrice = ()=>{\n        const total = cartProducts.reduce((acc, product)=>acc + product.productPrice, 0);\n        setTotalPrice(total);\n    };\n    const handlePay = ()=>{\n        // Lógica para procesar el pago (a implementar)\n        console.log(\"Paying...\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cart),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faShoppingCart,\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),\n                onClick: toggleCartVisibility\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            cartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartItems),\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading cart...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsList),\n                    children: [\n                        cartProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.productImage,\n                                        alt: product.productName,\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productInfo),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productName),\n                                                children: product.productName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productPrice),\n                                                children: [\n                                                    product.productPrice,\n                                                    \"€\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonRemove),\n                                                onClick: ()=>handleRemoveFromCart(product.productId),\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, product.productId, true, {\n                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 17\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Total Price: \",\n                                        totalPrice,\n                                        \"€\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().payButton),\n                                    onClick: handlePay,\n                                    children: \"Pay\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"CkYo4qbTi7sPsOi26x7KMaK3ecU=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7Ozs7OzswREFDdEQsOERBQUNSO2dEQUFFTixXQUFXbkMsc0VBQW1COztvREFDOUIrQixRQUFRQyxZQUFZO29EQUFDOzs7Ozs7OzBEQUV4Qiw4REFBQ21CO2dEQUNDaEIsV0FBV25DLHNFQUFtQjtnREFDOUJ1QyxTQUFTLElBQU1mLHFCQUFxQk8sUUFBUU4sU0FBUzswREFDdEQ7Ozs7Ozs7Ozs7Ozs7K0JBZEtNLFFBQVFOLFNBQVM7Ozs7O3NDQW9CN0IsOERBQUNTOzRCQUFJQyxXQUFXbkMsd0VBQXFCOzs4Q0FDbkMsOERBQUN5Qzs7d0NBQUU7d0NBQWN6Qjt3Q0FBVzs7Ozs7Ozs4Q0FDNUIsOERBQUNtQztvQ0FBT2hCLFdBQVduQyxtRUFBZ0I7b0NBQUV1QyxTQUFTTjs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekU7R0EzR3dCM0I7O1FBQ0hELCtEQUFVQTs7O0tBRFBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnQvQ2FydC5qc3g/ZGQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENhcnRQcm9kdWN0c0ZldGNoLFxyXG4gIGRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2gsXHJcbn0gZnJvbSBcIi4uLy4uL2FwaS9jYXJ0RmV0Y2hcIjtcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1Byb2R1Y3RDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VQcm9kdWN0KCk7IC8vIE9idMOpbiB1c2VySWQgZGVsIGNvbnRleHRvXHJcbiAgY29uc3QgW2NhcnRWaXNpYmxlLCBzZXRDYXJ0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEVzdGFkbyBwYXJhIGNvbnRyb2xhciBsYSB2aXNpYmlsaWRhZCBkZWwgY2Fycml0b1xyXG4gIGNvbnN0IFtjYXJ0UHJvZHVjdHMsIHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3JlZnJlc2hDYXJ0LCBzZXRSZWZyZXNoQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEVzdGFkbyBwYXJhIGZvcnphciBsYSBhY3R1YWxpemFjacOzbiBkZWwgY2Fycml0b1xyXG4gIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKDApOyAvLyBFc3RhZG8gcGFyYSBhbG1hY2VuYXIgZWwgcHJlY2lvIHRvdGFsIGRlbCBjYXJyaXRvXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcklkICYmIGNhcnRWaXNpYmxlKSB7XHJcbiAgICAgIGZldGNoQ2FydFByb2R1Y3RzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJJZCwgY2FydFZpc2libGUsIHJlZnJlc2hDYXJ0XSk7IC8vIEFncmVnYXIgcmVmcmVzaENhcnQgYSBsYXMgZGVwZW5kZW5jaWFzXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYWxjdWxhciBlbCBwcmVjaW8gdG90YWwgY2FkYSB2ZXogcXVlIGNhbWJpYW4gbG9zIHByb2R1Y3RvcyBkZWwgY2Fycml0b1xyXG4gICAgY2FsY3VsYXRlVG90YWxQcmljZSgpO1xyXG4gIH0sIFtjYXJ0UHJvZHVjdHNdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDYXJ0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpOyAvLyBTZXQgbG9hZGluZyB0byB0cnVlIGJlZm9yZSBmZXRjaGluZ1xyXG4gICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldENhcnRQcm9kdWN0c0ZldGNoKHVzZXJJZCk7IC8vIFBhc2EgdXNlcklkIGFsIGZldGNoXHJcbiAgICAgIHNldENhcnRQcm9kdWN0cyhwcm9kdWN0cy5kYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FydCBwcm9kdWN0czpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2gocHJvZHVjdElkKTsgLy8gTGxhbWEgYWwgZmV0Y2ggcGFyYSBlbGltaW5hciBlbCBwcm9kdWN0byBkZWwgY2Fycml0b1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNhcnQ6XCIsIHByb2R1Y3RJZCk7XHJcbiAgICAgIHNldFJlZnJlc2hDYXJ0KCFyZWZyZXNoQ2FydCk7IC8vIEFjdGl2YSBlbCByZWZyZXNoQ2FydCBwYXJhIGZvcnphciBsYSBhY3R1YWxpemFjacOzbiBkZWwgY2Fycml0b1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIHByb2R1Y3QgZnJvbSBjYXJ0OlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ2FydFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0VmlzaWJsZSghY2FydFZpc2libGUpOyAvLyBDYW1iaWEgZWwgZXN0YWRvIHBhcmEgbW9zdHJhciB1IG9jdWx0YXIgZWwgY2Fycml0b1xyXG4gICAgaWYgKCFjYXJ0VmlzaWJsZSkge1xyXG4gICAgICBzZXRSZWZyZXNoQ2FydCghcmVmcmVzaENhcnQpOyAvLyBBY3RpdmEgZWwgcmVmcmVzaENhcnQgY3VhbmRvIHNlIG11ZXN0cmEgZWwgY2Fycml0b1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbCA9IGNhcnRQcm9kdWN0cy5yZWR1Y2UoXHJcbiAgICAgIChhY2MsIHByb2R1Y3QpID0+IGFjYyArIHByb2R1Y3QucHJvZHVjdFByaWNlLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gICAgc2V0VG90YWxQcmljZSh0b3RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGF5ID0gKCkgPT4ge1xyXG4gICAgLy8gTMOzZ2ljYSBwYXJhIHByb2Nlc2FyIGVsIHBhZ28gKGEgaW1wbGVtZW50YXIpXHJcbiAgICBjb25zb2xlLmxvZyhcIlBheWluZy4uLlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0fT5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgIGljb249e2ZhU2hvcHBpbmdDYXJ0fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJY29ufVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNhcnRWaXNpYmlsaXR5fVxyXG4gICAgICAvPlxyXG4gICAgICB7Y2FydFZpc2libGUgJiYgKCAvLyBSZW5kZXJpemEgZWwgY29udGVuaWRvIGRlbCBjYXJyaXRvIHNpIGNhcnRWaXNpYmxlIGVzIHRydWVcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnRJdGVtc30+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgPHA+TG9hZGluZyBjYXJ0Li4uPC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c0xpc3R9PlxyXG4gICAgICAgICAgICAgIHtjYXJ0UHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5wcm9kdWN0SWR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdE5hbWV9Pntwcm9kdWN0LnByb2R1Y3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0UHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJvZHVjdFByaWNlfeKCrFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25SZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVGcm9tQ2FydChwcm9kdWN0LnByb2R1Y3RJZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8cD5Ub3RhbCBQcmljZToge3RvdGFsUHJpY2V94oKsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wYXlCdXR0b259IG9uQ2xpY2s9e2hhbmRsZVBheX0+XHJcbiAgICAgICAgICAgICAgICAgIFBheVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJGb250QXdlc29tZUljb24iLCJmYVNob3BwaW5nQ2FydCIsImdldENhcnRQcm9kdWN0c0ZldGNoIiwiZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCIsInVzZVByb2R1Y3QiLCJDYXJ0IiwidXNlcklkIiwiY2FydFZpc2libGUiLCJzZXRDYXJ0VmlzaWJsZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmcmVzaENhcnQiLCJzZXRSZWZyZXNoQ2FydCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwiZmV0Y2hDYXJ0UHJvZHVjdHMiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwicHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJwcm9kdWN0SWQiLCJsb2ciLCJ0b2dnbGVDYXJ0VmlzaWJpbGl0eSIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdCIsInByb2R1Y3RQcmljZSIsImhhbmRsZVBheSIsImRpdiIsImNsYXNzTmFtZSIsImNhcnQiLCJpY29uIiwiY2FydEljb24iLCJvbkNsaWNrIiwiY2FydEl0ZW1zIiwicCIsInByb2R1Y3RzTGlzdCIsIm1hcCIsInByb2R1Y3RJdGVtIiwiaW1nIiwic3JjIiwicHJvZHVjdEltYWdlIiwiYWx0IiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0SW5mbyIsImJ1dHRvbiIsImJ1dHRvblJlbW92ZSIsInRvdGFsQ29udGFpbmVyIiwicGF5QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cartComponent/Cart.jsx\n"));

/***/ })

});