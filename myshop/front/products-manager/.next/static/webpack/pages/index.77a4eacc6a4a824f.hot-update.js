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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.module.css */ \"./src/components/cartComponent/Cart.module.css\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cart_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const { userId } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct)(); // Obtén userId del contexto\n    const [cartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para controlar la visibilidad del carrito\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Estado para almacenar los productos del carrito\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Estado para indicar si se están cargando los productos del carrito\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Estado para almacenar el precio total del carrito\n    // Función para cargar los productos del carrito desde el servidor\n    const fetchCartProducts = async ()=>{\n        try {\n            const products = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.getCartProductsFetch)(userId); // Obtén los productos del carrito del usuario\n            setCartProducts(products.data); // Actualiza el estado con los productos obtenidos\n            setLoading(false); // Indica que la carga ha finalizado\n        } catch (error) {\n            console.error(\"Error fetching cart products:\", error);\n            setLoading(false); // Manejo de errores: detiene la carga y muestra un mensaje\n        }\n    };\n    // Efecto para cargar los productos del carrito cuando userId cambia o se muestra el carrito\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId && cartVisible) {\n            fetchCartProducts(); // Carga los productos del carrito cuando userId y cartVisible cambian\n        }\n    }, [\n        userId,\n        cartVisible\n    ]); // Dependencias: userId y cartVisible\n    // Efecto para recalcular el precio total cuando cambia la lista de productos del carrito\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Calcula el precio total sumando los precios de los productos en cartProducts\n        const calculateTotalPrice = ()=>{\n            const total = cartProducts.reduce((acc, product)=>acc + product.price, 0);\n            setTotalPrice(total);\n        };\n        calculateTotalPrice(); // Llama a la función inicialmente y cuando cambia cartProducts\n    }, [\n        cartProducts\n    ]); // Dependencia: cartProducts\n    // Manejador para añadir un producto al carrito\n    const handleAddToCart = async (product)=>{\n        try {\n            const data = {\n                id: product._id,\n                image: product.image,\n                price: product.price\n            };\n            const addedProduct = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.createCartProductFetch)(data); // Llama al fetch para añadir producto al carrito\n            console.log(\"Product added to cart:\", addedProduct);\n            fetchCartProducts(); // Actualiza la lista de productos del carrito después de añadir\n        } catch (error) {\n            console.error(\"Error adding product to cart:\", error);\n        }\n    };\n    // Manejador para eliminar un producto del carrito\n    const handleRemoveFromCart = async (productId)=>{\n        try {\n            await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.deleteCartProductFetch)(productId); // Llama al fetch para eliminar el producto del carrito\n            console.log(\"Product removed from cart:\", productId);\n            fetchCartProducts(); // Actualiza la lista de productos del carrito después de eliminar\n        } catch (error) {\n            console.error(\"Error removing product from cart:\", error);\n        }\n    };\n    // Manejador para cambiar la visibilidad del carrito\n    const toggleCartVisibility = ()=>{\n        setCartVisible(!cartVisible); // Cambia el estado para mostrar u ocultar el carrito\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cart),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faShoppingCart,\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),\n                onClick: toggleCartVisibility\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            cartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartItems),\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading cart...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsList),\n                            children: cartProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productItem),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: product.image,\n                                            alt: product.productName,\n                                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productInfo),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productName),\n                                                    children: product.productName\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productPrice),\n                                                    children: [\n                                                        product.price,\n                                                        \"€\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonRemove),\n                                                    onClick: ()=>handleRemoveFromCart(product._id),\n                                                    children: \"Remove\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, product._id, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Total Price: \",\n                                        totalPrice.toFixed(2),\n                                        \"€\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().payButton),\n                                    children: \"Pay\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"GtZiFhCdEtTMG/7rHLq5vBdXKo4=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDs0QkFBSUMsV0FBV3RDLHNFQUFtQjtzQ0FDaENXLGFBQWFtQyxHQUFHLENBQUMsQ0FBQ3BCLHdCQUNqQiw4REFBQ1c7b0NBQXNCQyxXQUFXdEMscUVBQWtCOztzREFDbEQsOERBQUNnRDs0Q0FDQ0MsS0FBS3ZCLFFBQVFLLEtBQUs7NENBQ2xCbUIsS0FBS3hCLFFBQVF5QixXQUFXOzRDQUN4QmIsV0FBV3RDLHNFQUFtQjs7Ozs7O3NEQUVoQyw4REFBQ3FDOzRDQUFJQyxXQUFXdEMscUVBQWtCOzs4REFDaEMsOERBQUM0QztvREFBRU4sV0FBV3RDLHFFQUFrQjs4REFDN0IwQixRQUFReUIsV0FBVzs7Ozs7OzhEQUV0Qiw4REFBQ1A7b0RBQUVOLFdBQVd0QyxzRUFBbUI7O3dEQUFHMEIsUUFBUUMsS0FBSzt3REFBQzs7Ozs7Ozs4REFDbEQsOERBQUM0QjtvREFDQ2pCLFdBQVd0QyxzRUFBbUI7b0RBQzlCMEMsU0FBUyxJQUFNUixxQkFBcUJSLFFBQVFJLEdBQUc7OERBQ2hEOzs7Ozs7Ozs7Ozs7O21DQWRLSixRQUFRSSxHQUFHOzs7Ozs7Ozs7O3NDQXFCekIsOERBQUNPOzRCQUFJQyxXQUFXdEMsd0VBQXFCOzs4Q0FDbkMsOERBQUM0Qzs7d0NBQUU7d0NBQWM3QixXQUFXMkMsT0FBTyxDQUFDO3dDQUFHOzs7Ozs7OzhDQUN2Qyw4REFBQ0g7b0NBQU9qQixXQUFXdEMsbUVBQWdCOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJEO0dBdEh3Qk87O1FBQ0hELCtEQUFVQTs7O0tBRFBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnQvQ2FydC5qc3g/ZGQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENhcnRQcm9kdWN0c0ZldGNoLFxyXG4gIGNyZWF0ZUNhcnRQcm9kdWN0RmV0Y2gsXHJcbiAgZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCxcclxufSBmcm9tIFwiLi4vLi4vYXBpL2NhcnRGZXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvUHJvZHVjdENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IHVzZVByb2R1Y3QoKTsgLy8gT2J0w6luIHVzZXJJZCBkZWwgY29udGV4dG9cclxuICBjb25zdCBbY2FydFZpc2libGUsIHNldENhcnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gRXN0YWRvIHBhcmEgY29udHJvbGFyIGxhIHZpc2liaWxpZGFkIGRlbCBjYXJyaXRvXHJcbiAgY29uc3QgW2NhcnRQcm9kdWN0cywgc2V0Q2FydFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTsgLy8gRXN0YWRvIHBhcmEgYWxtYWNlbmFyIGxvcyBwcm9kdWN0b3MgZGVsIGNhcnJpdG9cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gRXN0YWRvIHBhcmEgaW5kaWNhciBzaSBzZSBlc3TDoW4gY2FyZ2FuZG8gbG9zIHByb2R1Y3RvcyBkZWwgY2Fycml0b1xyXG4gIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKDApOyAvLyBFc3RhZG8gcGFyYSBhbG1hY2VuYXIgZWwgcHJlY2lvIHRvdGFsIGRlbCBjYXJyaXRvXHJcblxyXG4gIC8vIEZ1bmNpw7NuIHBhcmEgY2FyZ2FyIGxvcyBwcm9kdWN0b3MgZGVsIGNhcnJpdG8gZGVzZGUgZWwgc2Vydmlkb3JcclxuICBjb25zdCBmZXRjaENhcnRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0Q2FydFByb2R1Y3RzRmV0Y2godXNlcklkKTsgLy8gT2J0w6luIGxvcyBwcm9kdWN0b3MgZGVsIGNhcnJpdG8gZGVsIHVzdWFyaW9cclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKHByb2R1Y3RzLmRhdGEpOyAvLyBBY3R1YWxpemEgZWwgZXN0YWRvIGNvbiBsb3MgcHJvZHVjdG9zIG9idGVuaWRvc1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gSW5kaWNhIHF1ZSBsYSBjYXJnYSBoYSBmaW5hbGl6YWRvXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2FydCBwcm9kdWN0czpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gTWFuZWpvIGRlIGVycm9yZXM6IGRldGllbmUgbGEgY2FyZ2EgeSBtdWVzdHJhIHVuIG1lbnNhamVcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBFZmVjdG8gcGFyYSBjYXJnYXIgbG9zIHByb2R1Y3RvcyBkZWwgY2Fycml0byBjdWFuZG8gdXNlcklkIGNhbWJpYSBvIHNlIG11ZXN0cmEgZWwgY2Fycml0b1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcklkICYmIGNhcnRWaXNpYmxlKSB7XHJcbiAgICAgIGZldGNoQ2FydFByb2R1Y3RzKCk7IC8vIENhcmdhIGxvcyBwcm9kdWN0b3MgZGVsIGNhcnJpdG8gY3VhbmRvIHVzZXJJZCB5IGNhcnRWaXNpYmxlIGNhbWJpYW5cclxuICAgIH1cclxuICB9LCBbdXNlcklkLCBjYXJ0VmlzaWJsZV0pOyAvLyBEZXBlbmRlbmNpYXM6IHVzZXJJZCB5IGNhcnRWaXNpYmxlXHJcblxyXG4gIC8vIEVmZWN0byBwYXJhIHJlY2FsY3VsYXIgZWwgcHJlY2lvIHRvdGFsIGN1YW5kbyBjYW1iaWEgbGEgbGlzdGEgZGUgcHJvZHVjdG9zIGRlbCBjYXJyaXRvXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENhbGN1bGEgZWwgcHJlY2lvIHRvdGFsIHN1bWFuZG8gbG9zIHByZWNpb3MgZGUgbG9zIHByb2R1Y3RvcyBlbiBjYXJ0UHJvZHVjdHNcclxuICAgIGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gY2FydFByb2R1Y3RzLnJlZHVjZShcclxuICAgICAgICAoYWNjLCBwcm9kdWN0KSA9PiBhY2MgKyBwcm9kdWN0LnByaWNlLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuICAgICAgc2V0VG90YWxQcmljZSh0b3RhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbGN1bGF0ZVRvdGFsUHJpY2UoKTsgLy8gTGxhbWEgYSBsYSBmdW5jacOzbiBpbmljaWFsbWVudGUgeSBjdWFuZG8gY2FtYmlhIGNhcnRQcm9kdWN0c1xyXG4gIH0sIFtjYXJ0UHJvZHVjdHNdKTsgLy8gRGVwZW5kZW5jaWE6IGNhcnRQcm9kdWN0c1xyXG5cclxuICAvLyBNYW5lamFkb3IgcGFyYSBhw7FhZGlyIHVuIHByb2R1Y3RvIGFsIGNhcnJpdG9cclxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBpZDogcHJvZHVjdC5faWQsXHJcbiAgICAgICAgaW1hZ2U6IHByb2R1Y3QuaW1hZ2UsXHJcbiAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGFkZGVkUHJvZHVjdCA9IGF3YWl0IGNyZWF0ZUNhcnRQcm9kdWN0RmV0Y2goZGF0YSk7IC8vIExsYW1hIGFsIGZldGNoIHBhcmEgYcOxYWRpciBwcm9kdWN0byBhbCBjYXJyaXRvXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0OlwiLCBhZGRlZFByb2R1Y3QpO1xyXG4gICAgICBmZXRjaENhcnRQcm9kdWN0cygpOyAvLyBBY3R1YWxpemEgbGEgbGlzdGEgZGUgcHJvZHVjdG9zIGRlbCBjYXJyaXRvIGRlc3B1w6lzIGRlIGHDsWFkaXJcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgcHJvZHVjdCB0byBjYXJ0OlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gTWFuZWphZG9yIHBhcmEgZWxpbWluYXIgdW4gcHJvZHVjdG8gZGVsIGNhcnJpdG9cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2gocHJvZHVjdElkKTsgLy8gTGxhbWEgYWwgZmV0Y2ggcGFyYSBlbGltaW5hciBlbCBwcm9kdWN0byBkZWwgY2Fycml0b1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNhcnQ6XCIsIHByb2R1Y3RJZCk7XHJcbiAgICAgIGZldGNoQ2FydFByb2R1Y3RzKCk7IC8vIEFjdHVhbGl6YSBsYSBsaXN0YSBkZSBwcm9kdWN0b3MgZGVsIGNhcnJpdG8gZGVzcHXDqXMgZGUgZWxpbWluYXJcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZW1vdmluZyBwcm9kdWN0IGZyb20gY2FydDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIE1hbmVqYWRvciBwYXJhIGNhbWJpYXIgbGEgdmlzaWJpbGlkYWQgZGVsIGNhcnJpdG9cclxuICBjb25zdCB0b2dnbGVDYXJ0VmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIHNldENhcnRWaXNpYmxlKCFjYXJ0VmlzaWJsZSk7IC8vIENhbWJpYSBlbCBlc3RhZG8gcGFyYSBtb3N0cmFyIHUgb2N1bHRhciBlbCBjYXJyaXRvXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydH0+XHJcbiAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICBpY29uPXtmYVNob3BwaW5nQ2FydH1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SWNvbn1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVDYXJ0VmlzaWJpbGl0eX1cclxuICAgICAgLz5cclxuICAgICAge2NhcnRWaXNpYmxlICYmICggLy8gUmVuZGVyaXphIGVsIGNvbnRlbmlkbyBkZWwgY2Fycml0byBzaSBjYXJ0VmlzaWJsZSBlcyB0cnVlXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SXRlbXN9PlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxwPkxvYWRpbmcgY2FydC4uLjwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c0xpc3R9PlxyXG4gICAgICAgICAgICAgICAge2NhcnRQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuX2lkfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0TmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdFByaWNlfT57cHJvZHVjdC5wcmljZX3igqw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlRnJvbUNhcnQocHJvZHVjdC5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHA+VG90YWwgUHJpY2U6IHt0b3RhbFByaWNlLnRvRml4ZWQoMil94oKsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wYXlCdXR0b259PlBheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFTaG9wcGluZ0NhcnQiLCJnZXRDYXJ0UHJvZHVjdHNGZXRjaCIsImNyZWF0ZUNhcnRQcm9kdWN0RmV0Y2giLCJkZWxldGVDYXJ0UHJvZHVjdEZldGNoIiwidXNlUHJvZHVjdCIsIkNhcnQiLCJ1c2VySWQiLCJjYXJ0VmlzaWJsZSIsInNldENhcnRWaXNpYmxlIiwiY2FydFByb2R1Y3RzIiwic2V0Q2FydFByb2R1Y3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsImZldGNoQ2FydFByb2R1Y3RzIiwicHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInRvdGFsIiwicmVkdWNlIiwiYWNjIiwicHJvZHVjdCIsInByaWNlIiwiaGFuZGxlQWRkVG9DYXJ0IiwiaWQiLCJfaWQiLCJpbWFnZSIsImFkZGVkUHJvZHVjdCIsImxvZyIsImhhbmRsZVJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwidG9nZ2xlQ2FydFZpc2liaWxpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJ0IiwiaWNvbiIsImNhcnRJY29uIiwib25DbGljayIsImNhcnRJdGVtcyIsInAiLCJwcm9kdWN0c0xpc3QiLCJtYXAiLCJwcm9kdWN0SXRlbSIsImltZyIsInNyYyIsImFsdCIsInByb2R1Y3ROYW1lIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdEluZm8iLCJwcm9kdWN0UHJpY2UiLCJidXR0b24iLCJidXR0b25SZW1vdmUiLCJ0b3RhbENvbnRhaW5lciIsInRvRml4ZWQiLCJwYXlCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cartComponent/Cart.jsx\n"));

/***/ })

});