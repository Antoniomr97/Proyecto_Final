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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.module.css */ \"./src/components/cartComponent/Cart.module.css\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cart_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const { userId } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct)(); // Obtén userId del contexto\n    const [cartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para controlar la visibilidad del carrito\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [refreshCart, setRefreshCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para forzar la actualización del carrito\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId && cartVisible) {\n            fetchCartProducts();\n        }\n    }, [\n        userId,\n        cartVisible,\n        refreshCart\n    ]); // Agregar refreshCart a las dependencias\n    const fetchCartProducts = async ()=>{\n        try {\n            const products = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.getCartProductsFetch)(userId); // Pasa userId al fetch\n            setCartProducts(products.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching cart products:\", error);\n            setLoading(false);\n        }\n    };\n    const handleAddToCart = async (product)=>{\n        try {\n            const data = {\n                id: product._id,\n                image: product.image,\n                price: product.price\n            };\n            const addedProduct = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.createCartProductFetch)(data); // Llama al fetch para añadir producto al carrito\n            console.log(\"Product added to cart:\", addedProduct);\n            setRefreshCart(!refreshCart); // Activa el refreshCart para forzar la actualización del carrito\n        } catch (error) {\n            console.error(\"Error adding product to cart:\", error);\n        }\n    };\n    const handleRemoveFromCart = async (productId)=>{\n        try {\n            await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.deleteCartProductFetch)(productId); // Llama al fetch para eliminar el producto del carrito\n            console.log(\"Product removed from cart:\", productId);\n            setRefreshCart(!refreshCart); // Activa el refreshCart para forzar la actualización del carrito\n        } catch (error) {\n            console.error(\"Error removing product from cart:\", error);\n        }\n    };\n    const toggleCartVisibility = ()=>{\n        setCartVisible(!cartVisible); // Cambia el estado para mostrar u ocultar el carrito\n        if (!cartVisible) {\n            setRefreshCart(!refreshCart); // Activa el refreshCart cuando se muestra el carrito\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cart),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faShoppingCart,\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),\n                onClick: toggleCartVisibility\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            cartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartItems),\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading cart...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsList),\n                    children: cartProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productItem),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: product.productImage,\n                                    alt: product.productName,\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productInfo),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productName),\n                                            children: product.productName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productPrice),\n                                            children: [\n                                                product.productPrice,\n                                                \"€\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonRemove),\n                                            onClick: ()=>handleRemoveFromCart(product._id),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, product._id, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"q46XknKX6TMKMnHuwX6yxIXlF+Q=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50L0NhcnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUMwQjtBQUNFO0FBS3RDO0FBQzZCO0FBRTNDLFNBQVNVOztJQUN0QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRixtRUFBVUEsSUFBSSw0QkFBNEI7SUFDN0QsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLFFBQVEsbURBQW1EO0lBQzFHLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDLFFBQVEsa0RBQWtEO0lBRXpHRCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLFVBQVVDLGFBQWE7WUFDekJRO1FBQ0Y7SUFDRixHQUFHO1FBQUNUO1FBQVFDO1FBQWFNO0tBQVksR0FBRyx5Q0FBeUM7SUFFakYsTUFBTUUsb0JBQW9CO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1mLG9FQUFvQkEsQ0FBQ0ssU0FBUyx1QkFBdUI7WUFDNUVJLGdCQUFnQk0sU0FBU0MsSUFBSTtZQUM3QkwsV0FBVztRQUNiLEVBQUUsT0FBT00sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtZQUMvQ04sV0FBVztRQUNiO0lBQ0Y7SUFFQSxNQUFNUSxrQkFBa0IsT0FBT0M7UUFDN0IsSUFBSTtZQUNGLE1BQU1KLE9BQU87Z0JBQ1hLLElBQUlELFFBQVFFLEdBQUc7Z0JBQ2ZDLE9BQU9ILFFBQVFHLEtBQUs7Z0JBQ3BCQyxPQUFPSixRQUFRSSxLQUFLO1lBQ3RCO1lBQ0EsTUFBTUMsZUFBZSxNQUFNeEIsc0VBQXNCQSxDQUFDZSxPQUFPLGlEQUFpRDtZQUMxR0UsUUFBUVEsR0FBRyxDQUFDLDBCQUEwQkQ7WUFDdENaLGVBQWUsQ0FBQ0QsY0FBYyxpRUFBaUU7UUFDakcsRUFBRSxPQUFPSyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO1FBQ2pEO0lBQ0Y7SUFFQSxNQUFNVSx1QkFBdUIsT0FBT0M7UUFDbEMsSUFBSTtZQUNGLE1BQU0xQixzRUFBc0JBLENBQUMwQixZQUFZLHVEQUF1RDtZQUNoR1YsUUFBUVEsR0FBRyxDQUFDLDhCQUE4QkU7WUFDMUNmLGVBQWUsQ0FBQ0QsY0FBYyxpRUFBaUU7UUFDakcsRUFBRSxPQUFPSyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQ0FBcUNBO1FBQ3JEO0lBQ0Y7SUFFQSxNQUFNWSx1QkFBdUI7UUFDM0J0QixlQUFlLENBQUNELGNBQWMscURBQXFEO1FBQ25GLElBQUksQ0FBQ0EsYUFBYTtZQUNoQk8sZUFBZSxDQUFDRCxjQUFjLHFEQUFxRDtRQUNyRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFXbEMsOERBQVc7OzBCQUN6Qiw4REFBQ0MsMkVBQWVBO2dCQUNkbUMsTUFBTWxDLDZFQUFjQTtnQkFDcEJnQyxXQUFXbEMsa0VBQWU7Z0JBQzFCc0MsU0FBU047Ozs7OztZQUVWdkIsNkJBQ0MsOERBQUN3QjtnQkFBSUMsV0FBV2xDLG1FQUFnQjswQkFDN0JhLHdCQUNDLDhEQUFDMkI7OEJBQUU7Ozs7O3lDQUVILDhEQUFDUDtvQkFBSUMsV0FBV2xDLHNFQUFtQjs4QkFDaENXLGFBQWErQixHQUFHLENBQUMsQ0FBQ25CLHdCQUNqQiw4REFBQ1U7NEJBQXNCQyxXQUFXbEMscUVBQWtCOzs4Q0FDbEQsOERBQUM0QztvQ0FDQ0MsS0FBS3RCLFFBQVF1QixZQUFZO29DQUN6QkMsS0FBS3hCLFFBQVF5QixXQUFXO29DQUN4QmQsV0FBV2xDLHNFQUFtQjs7Ozs7OzhDQUVoQyw4REFBQ2lDO29DQUFJQyxXQUFXbEMscUVBQWtCOztzREFDaEMsOERBQUN3Qzs0Q0FBRU4sV0FBV2xDLHFFQUFrQjtzREFBR3VCLFFBQVF5QixXQUFXOzs7Ozs7c0RBQ3RELDhEQUFDUjs0Q0FBRU4sV0FBV2xDLHNFQUFtQjs7Z0RBQzlCdUIsUUFBUTJCLFlBQVk7Z0RBQUM7Ozs7Ozs7c0RBRXhCLDhEQUFDQzs0Q0FDQ2pCLFdBQVdsQyxzRUFBbUI7NENBQzlCc0MsU0FBUyxJQUFNUixxQkFBcUJQLFFBQVFFLEdBQUc7c0RBQ2hEOzs7Ozs7Ozs7Ozs7OzJCQWRLRixRQUFRRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQnJDO0dBaEd3QmxCOztRQUNIRCwrREFBVUE7OztLQURQQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50L0NhcnQuanN4P2RkMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJ0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBnZXRDYXJ0UHJvZHVjdHNGZXRjaCxcclxuICBjcmVhdGVDYXJ0UHJvZHVjdEZldGNoLFxyXG4gIGRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2gsXHJcbn0gZnJvbSBcIi4uLy4uL2FwaS9jYXJ0RmV0Y2hcIjtcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1Byb2R1Y3RDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VQcm9kdWN0KCk7IC8vIE9idMOpbiB1c2VySWQgZGVsIGNvbnRleHRvXHJcbiAgY29uc3QgW2NhcnRWaXNpYmxlLCBzZXRDYXJ0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEVzdGFkbyBwYXJhIGNvbnRyb2xhciBsYSB2aXNpYmlsaWRhZCBkZWwgY2Fycml0b1xyXG4gIGNvbnN0IFtjYXJ0UHJvZHVjdHMsIHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3JlZnJlc2hDYXJ0LCBzZXRSZWZyZXNoQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIEVzdGFkbyBwYXJhIGZvcnphciBsYSBhY3R1YWxpemFjacOzbiBkZWwgY2Fycml0b1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJJZCAmJiBjYXJ0VmlzaWJsZSkge1xyXG4gICAgICBmZXRjaENhcnRQcm9kdWN0cygpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VySWQsIGNhcnRWaXNpYmxlLCByZWZyZXNoQ2FydF0pOyAvLyBBZ3JlZ2FyIHJlZnJlc2hDYXJ0IGEgbGFzIGRlcGVuZGVuY2lhc1xyXG5cclxuICBjb25zdCBmZXRjaENhcnRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0Q2FydFByb2R1Y3RzRmV0Y2godXNlcklkKTsgLy8gUGFzYSB1c2VySWQgYWwgZmV0Y2hcclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKHByb2R1Y3RzLmRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjYXJ0IHByb2R1Y3RzOlwiLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGlkOiBwcm9kdWN0Ll9pZCxcclxuICAgICAgICBpbWFnZTogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYWRkZWRQcm9kdWN0ID0gYXdhaXQgY3JlYXRlQ2FydFByb2R1Y3RGZXRjaChkYXRhKTsgLy8gTGxhbWEgYWwgZmV0Y2ggcGFyYSBhw7FhZGlyIHByb2R1Y3RvIGFsIGNhcnJpdG9cclxuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnQ6XCIsIGFkZGVkUHJvZHVjdCk7XHJcbiAgICAgIHNldFJlZnJlc2hDYXJ0KCFyZWZyZXNoQ2FydCk7IC8vIEFjdGl2YSBlbCByZWZyZXNoQ2FydCBwYXJhIGZvcnphciBsYSBhY3R1YWxpemFjacOzbiBkZWwgY2Fycml0b1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwcm9kdWN0IHRvIGNhcnQ6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2gocHJvZHVjdElkKTsgLy8gTGxhbWEgYWwgZmV0Y2ggcGFyYSBlbGltaW5hciBlbCBwcm9kdWN0byBkZWwgY2Fycml0b1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNhcnQ6XCIsIHByb2R1Y3RJZCk7XHJcbiAgICAgIHNldFJlZnJlc2hDYXJ0KCFyZWZyZXNoQ2FydCk7IC8vIEFjdGl2YSBlbCByZWZyZXNoQ2FydCBwYXJhIGZvcnphciBsYSBhY3R1YWxpemFjacOzbiBkZWwgY2Fycml0b1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIHByb2R1Y3QgZnJvbSBjYXJ0OlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ2FydFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0VmlzaWJsZSghY2FydFZpc2libGUpOyAvLyBDYW1iaWEgZWwgZXN0YWRvIHBhcmEgbW9zdHJhciB1IG9jdWx0YXIgZWwgY2Fycml0b1xyXG4gICAgaWYgKCFjYXJ0VmlzaWJsZSkge1xyXG4gICAgICBzZXRSZWZyZXNoQ2FydCghcmVmcmVzaENhcnQpOyAvLyBBY3RpdmEgZWwgcmVmcmVzaENhcnQgY3VhbmRvIHNlIG11ZXN0cmEgZWwgY2Fycml0b1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnR9PlxyXG4gICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgaWNvbj17ZmFTaG9wcGluZ0NhcnR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEljb259XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQ2FydFZpc2liaWxpdHl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtjYXJ0VmlzaWJsZSAmJiAoIC8vIFJlbmRlcml6YSBlbCBjb250ZW5pZG8gZGVsIGNhcnJpdG8gc2kgY2FydFZpc2libGUgZXMgdHJ1ZVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEl0ZW1zfT5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8cD5Mb2FkaW5nIGNhcnQuLi48L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzTGlzdH0+XHJcbiAgICAgICAgICAgICAge2NhcnRQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0Ll9pZH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnByb2R1Y3RJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0TmFtZX0+e3Byb2R1Y3QucHJvZHVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RQcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcm9kdWN0UHJpY2V94oKsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZyb21DYXJ0KHByb2R1Y3QuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hvcHBpbmdDYXJ0IiwiZ2V0Q2FydFByb2R1Y3RzRmV0Y2giLCJjcmVhdGVDYXJ0UHJvZHVjdEZldGNoIiwiZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCIsInVzZVByb2R1Y3QiLCJDYXJ0IiwidXNlcklkIiwiY2FydFZpc2libGUiLCJzZXRDYXJ0VmlzaWJsZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmcmVzaENhcnQiLCJzZXRSZWZyZXNoQ2FydCIsImZldGNoQ2FydFByb2R1Y3RzIiwicHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQWRkVG9DYXJ0IiwicHJvZHVjdCIsImlkIiwiX2lkIiwiaW1hZ2UiLCJwcmljZSIsImFkZGVkUHJvZHVjdCIsImxvZyIsImhhbmRsZVJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwidG9nZ2xlQ2FydFZpc2liaWxpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJ0IiwiaWNvbiIsImNhcnRJY29uIiwib25DbGljayIsImNhcnRJdGVtcyIsInAiLCJwcm9kdWN0c0xpc3QiLCJtYXAiLCJwcm9kdWN0SXRlbSIsImltZyIsInNyYyIsInByb2R1Y3RJbWFnZSIsImFsdCIsInByb2R1Y3ROYW1lIiwicHJvZHVjdEluZm8iLCJwcm9kdWN0UHJpY2UiLCJidXR0b24iLCJidXR0b25SZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cartComponent/Cart.jsx\n"));

/***/ })

});