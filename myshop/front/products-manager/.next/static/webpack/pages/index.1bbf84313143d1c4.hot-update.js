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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart.module.css */ \"./src/components/cartComponent/Cart.module.css\");\n/* harmony import */ var _Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cart_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Cart() {\n    _s();\n    const { userId } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct)(); // Obtén userId del contexto\n    const [cartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para controlar la visibilidad del carrito\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [refreshCart, setRefreshCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para forzar la actualización del carrito\n    const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Estado para almacenar el precio total del carrito\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userId && cartVisible) {\n            fetchCartProducts();\n        }\n    }, [\n        userId,\n        cartVisible,\n        refreshCart\n    ]); // Agregar refreshCart a las dependencias\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Calcular el precio total cada vez que cambian los productos del carrito\n        calculateTotalPrice();\n    }, [\n        cartProducts\n    ]);\n    const fetchCartProducts = async ()=>{\n        try {\n            const products = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.getCartProductsFetch)(userId); // Pasa userId al fetch\n            setCartProducts(products.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching cart products:\", error);\n            setLoading(false);\n        }\n    };\n    const handleAddToCart = async (product)=>{\n        try {\n            const data = {\n                id: product._id,\n                image: product.image,\n                price: product.price\n            };\n            const addedProduct = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.createCartProductFetch)(data); // Llama al fetch para añadir producto al carrito\n            console.log(\"Product added to cart:\", addedProduct);\n            setRefreshCart(!refreshCart); // Activa el refreshCart para forzar la actualización del carrito\n        } catch (error) {\n            console.error(\"Error adding product to cart:\", error);\n        }\n    };\n    const handleRemoveFromCart = async (productId)=>{\n        try {\n            await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_4__.deleteCartProductFetch)(productId); // Llama al fetch para eliminar el producto del carrito\n            console.log(\"Product removed from cart:\", productId);\n            setRefreshCart(!refreshCart); // Activa el refreshCart para forzar la actualización del carrito\n        } catch (error) {\n            console.error(\"Error removing product from cart:\", error);\n        }\n    };\n    const toggleCartVisibility = ()=>{\n        setCartVisible(!cartVisible); // Cambia el estado para mostrar u ocultar el carrito\n        if (!cartVisible) {\n            setRefreshCart(!refreshCart); // Activa el refreshCart cuando se muestra el carrito\n        }\n    };\n    const calculateTotalPrice = ()=>{\n        const total = cartProducts.reduce((acc, product)=>acc + product.price, 0);\n        setTotalPrice(total);\n    };\n    const handlePay = ()=>{\n        // Lógica para procesar el pago (a implementar)\n        console.log(\"Paying...\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cart),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faShoppingCart,\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),\n                onClick: toggleCartVisibility\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            cartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartItems),\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading cart...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsList),\n                    children: [\n                        cartProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productItem),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.productImage,\n                                        alt: product.productName,\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productInfo),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productName),\n                                                children: product.productName\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().productPrice),\n                                                children: [\n                                                    product.productPrice,\n                                                    \"€\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonRemove),\n                                                onClick: ()=>handleRemoveFromCart(product._id),\n                                                children: \"Remove\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, product._id, true, {\n                                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalContainer),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalContainer),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().totalButton),\n                                            onClick: handleShowTotal,\n                                            children: \"Total\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 19\n                                        }, this),\n                                        showTotal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: 'Total Price:\" \"€'\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_Cart_module_css__WEBPACK_IMPORTED_MODULE_2___default().payButton),\n                                    onClick: handlePay,\n                                    children: \"Pay\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\cartComponent\\\\Cart.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Cart, \"CkYo4qbTi7sPsOi26x7KMaK3ecU=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_5__.useProduct\n    ];\n});\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJ0Q29tcG9uZW50L0NhcnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWjtBQUMwQjtBQUNFO0FBS3RDO0FBQzZCO0FBRTNDLFNBQVNVOztJQUN0QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRixtRUFBVUEsSUFBSSw0QkFBNEI7SUFDN0QsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDLFFBQVEsbURBQW1EO0lBQzFHLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDLFFBQVEsa0RBQWtEO0lBQ3pHLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDLElBQUksb0RBQW9EO0lBRXJHRCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLFVBQVVDLGFBQWE7WUFDekJVO1FBQ0Y7SUFDRixHQUFHO1FBQUNYO1FBQVFDO1FBQWFNO0tBQVksR0FBRyx5Q0FBeUM7SUFFakZqQixnREFBU0EsQ0FBQztRQUNSLDBFQUEwRTtRQUMxRXNCO0lBQ0YsR0FBRztRQUFDVDtLQUFhO0lBRWpCLE1BQU1RLG9CQUFvQjtRQUN4QixJQUFJO1lBQ0YsTUFBTUUsV0FBVyxNQUFNbEIsb0VBQW9CQSxDQUFDSyxTQUFTLHVCQUF1QjtZQUM1RUksZ0JBQWdCUyxTQUFTQyxJQUFJO1lBQzdCUixXQUFXO1FBQ2IsRUFBRSxPQUFPUyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO1lBQy9DVCxXQUFXO1FBQ2I7SUFDRjtJQUVBLE1BQU1XLGtCQUFrQixPQUFPQztRQUM3QixJQUFJO1lBQ0YsTUFBTUosT0FBTztnQkFDWEssSUFBSUQsUUFBUUUsR0FBRztnQkFDZkMsT0FBT0gsUUFBUUcsS0FBSztnQkFDcEJDLE9BQU9KLFFBQVFJLEtBQUs7WUFDdEI7WUFDQSxNQUFNQyxlQUFlLE1BQU0zQixzRUFBc0JBLENBQUNrQixPQUFPLGlEQUFpRDtZQUMxR0UsUUFBUVEsR0FBRyxDQUFDLDBCQUEwQkQ7WUFDdENmLGVBQWUsQ0FBQ0QsY0FBYyxpRUFBaUU7UUFDakcsRUFBRSxPQUFPUSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO1FBQ2pEO0lBQ0Y7SUFFQSxNQUFNVSx1QkFBdUIsT0FBT0M7UUFDbEMsSUFBSTtZQUNGLE1BQU03QixzRUFBc0JBLENBQUM2QixZQUFZLHVEQUF1RDtZQUNoR1YsUUFBUVEsR0FBRyxDQUFDLDhCQUE4QkU7WUFDMUNsQixlQUFlLENBQUNELGNBQWMsaUVBQWlFO1FBQ2pHLEVBQUUsT0FBT1EsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMscUNBQXFDQTtRQUNyRDtJQUNGO0lBRUEsTUFBTVksdUJBQXVCO1FBQzNCekIsZUFBZSxDQUFDRCxjQUFjLHFEQUFxRDtRQUNuRixJQUFJLENBQUNBLGFBQWE7WUFDaEJPLGVBQWUsQ0FBQ0QsY0FBYyxxREFBcUQ7UUFDckY7SUFDRjtJQUVBLE1BQU1LLHNCQUFzQjtRQUMxQixNQUFNZ0IsUUFBUXpCLGFBQWEwQixNQUFNLENBQUMsQ0FBQ0MsS0FBS1osVUFBWVksTUFBTVosUUFBUUksS0FBSyxFQUFFO1FBQ3pFWixjQUFja0I7SUFDaEI7SUFFQSxNQUFNRyxZQUFZO1FBQ2hCLCtDQUErQztRQUMvQ2YsUUFBUVEsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV3pDLDhEQUFXOzswQkFDekIsOERBQUNDLDJFQUFlQTtnQkFDZDBDLE1BQU16Qyw2RUFBY0E7Z0JBQ3BCdUMsV0FBV3pDLGtFQUFlO2dCQUMxQjZDLFNBQVNWOzs7Ozs7WUFFVjFCLDZCQUNDLDhEQUFDK0I7Z0JBQUlDLFdBQVd6QyxtRUFBZ0I7MEJBQzdCYSx3QkFDQyw4REFBQ2tDOzhCQUFFOzs7Ozt5Q0FFSCw4REFBQ1A7b0JBQUlDLFdBQVd6QyxzRUFBbUI7O3dCQUNoQ1csYUFBYXNDLEdBQUcsQ0FBQyxDQUFDdkIsd0JBQ2pCLDhEQUFDYztnQ0FBc0JDLFdBQVd6QyxxRUFBa0I7O2tEQUNsRCw4REFBQ21EO3dDQUNDQyxLQUFLMUIsUUFBUTJCLFlBQVk7d0NBQ3pCQyxLQUFLNUIsUUFBUTZCLFdBQVc7d0NBQ3hCZCxXQUFXekMsc0VBQW1COzs7Ozs7a0RBRWhDLDhEQUFDd0M7d0NBQUlDLFdBQVd6QyxxRUFBa0I7OzBEQUNoQyw4REFBQytDO2dEQUFFTixXQUFXekMscUVBQWtCOzBEQUFHMEIsUUFBUTZCLFdBQVc7Ozs7OzswREFDdEQsOERBQUNSO2dEQUFFTixXQUFXekMsc0VBQW1COztvREFDOUIwQixRQUFRK0IsWUFBWTtvREFBQzs7Ozs7OzswREFFeEIsOERBQUNDO2dEQUNDakIsV0FBV3pDLHNFQUFtQjtnREFDOUI2QyxTQUFTLElBQU1aLHFCQUFxQlAsUUFBUUUsR0FBRzswREFDaEQ7Ozs7Ozs7Ozs7Ozs7K0JBZEtGLFFBQVFFLEdBQUc7Ozs7O3NDQW9CdkIsOERBQUNZOzRCQUFJQyxXQUFXekMsd0VBQXFCOzs4Q0FDbkMsOERBQUN3QztvQ0FBSUMsV0FBV3pDLHdFQUFxQjs7c0RBQ25DLDhEQUFDMEQ7NENBQ0NqQixXQUFXekMscUVBQWtCOzRDQUM3QjZDLFNBQVNpQjtzREFDVjs7Ozs7O3dDQUdBQywyQkFBYSw4REFBQ2hCO3NEQUFFOzs7Ozs7Ozs7Ozs7OENBRW5CLDhEQUFDVztvQ0FBT2pCLFdBQVd6QyxtRUFBZ0I7b0NBQUU2QyxTQUFTTjs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekU7R0E5SHdCaEM7O1FBQ0hELCtEQUFVQTs7O0tBRFBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnRDb21wb25lbnQvQ2FydC5qc3g/ZGQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhU2hvcHBpbmdDYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENhcnRQcm9kdWN0c0ZldGNoLFxyXG4gIGNyZWF0ZUNhcnRQcm9kdWN0RmV0Y2gsXHJcbiAgZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCxcclxufSBmcm9tIFwiLi4vLi4vYXBpL2NhcnRGZXRjaFwiO1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvUHJvZHVjdENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgeyB1c2VySWQgfSA9IHVzZVByb2R1Y3QoKTsgLy8gT2J0w6luIHVzZXJJZCBkZWwgY29udGV4dG9cclxuICBjb25zdCBbY2FydFZpc2libGUsIHNldENhcnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gRXN0YWRvIHBhcmEgY29udHJvbGFyIGxhIHZpc2liaWxpZGFkIGRlbCBjYXJyaXRvXHJcbiAgY29uc3QgW2NhcnRQcm9kdWN0cywgc2V0Q2FydFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcmVmcmVzaENhcnQsIHNldFJlZnJlc2hDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gRXN0YWRvIHBhcmEgZm9yemFyIGxhIGFjdHVhbGl6YWNpw7NuIGRlbCBjYXJyaXRvXHJcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7IC8vIEVzdGFkbyBwYXJhIGFsbWFjZW5hciBlbCBwcmVjaW8gdG90YWwgZGVsIGNhcnJpdG9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VySWQgJiYgY2FydFZpc2libGUpIHtcclxuICAgICAgZmV0Y2hDYXJ0UHJvZHVjdHMoKTtcclxuICAgIH1cclxuICB9LCBbdXNlcklkLCBjYXJ0VmlzaWJsZSwgcmVmcmVzaENhcnRdKTsgLy8gQWdyZWdhciByZWZyZXNoQ2FydCBhIGxhcyBkZXBlbmRlbmNpYXNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENhbGN1bGFyIGVsIHByZWNpbyB0b3RhbCBjYWRhIHZleiBxdWUgY2FtYmlhbiBsb3MgcHJvZHVjdG9zIGRlbCBjYXJyaXRvXHJcbiAgICBjYWxjdWxhdGVUb3RhbFByaWNlKCk7XHJcbiAgfSwgW2NhcnRQcm9kdWN0c10pO1xyXG5cclxuICBjb25zdCBmZXRjaENhcnRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0Q2FydFByb2R1Y3RzRmV0Y2godXNlcklkKTsgLy8gUGFzYSB1c2VySWQgYWwgZmV0Y2hcclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKHByb2R1Y3RzLmRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjYXJ0IHByb2R1Y3RzOlwiLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGlkOiBwcm9kdWN0Ll9pZCxcclxuICAgICAgICBpbWFnZTogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYWRkZWRQcm9kdWN0ID0gYXdhaXQgY3JlYXRlQ2FydFByb2R1Y3RGZXRjaChkYXRhKTsgLy8gTGxhbWEgYWwgZmV0Y2ggcGFyYSBhw7FhZGlyIHByb2R1Y3RvIGFsIGNhcnJpdG9cclxuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnQ6XCIsIGFkZGVkUHJvZHVjdCk7XHJcbiAgICAgIHNldFJlZnJlc2hDYXJ0KCFyZWZyZXNoQ2FydCk7IC8vIEFjdGl2YSBlbCByZWZyZXNoQ2FydCBwYXJhIGZvcnphciBsYSBhY3R1YWxpemFjacOzbiBkZWwgY2Fycml0b1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwcm9kdWN0IHRvIGNhcnQ6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGcm9tQ2FydCA9IGFzeW5jIChwcm9kdWN0SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUNhcnRQcm9kdWN0RmV0Y2gocHJvZHVjdElkKTsgLy8gTGxhbWEgYWwgZmV0Y2ggcGFyYSBlbGltaW5hciBlbCBwcm9kdWN0byBkZWwgY2Fycml0b1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNhcnQ6XCIsIHByb2R1Y3RJZCk7XHJcbiAgICAgIHNldFJlZnJlc2hDYXJ0KCFyZWZyZXNoQ2FydCk7IC8vIEFjdGl2YSBlbCByZWZyZXNoQ2FydCBwYXJhIGZvcnphciBsYSBhY3R1YWxpemFjacOzbiBkZWwgY2Fycml0b1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIHByb2R1Y3QgZnJvbSBjYXJ0OlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQ2FydFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRDYXJ0VmlzaWJsZSghY2FydFZpc2libGUpOyAvLyBDYW1iaWEgZWwgZXN0YWRvIHBhcmEgbW9zdHJhciB1IG9jdWx0YXIgZWwgY2Fycml0b1xyXG4gICAgaWYgKCFjYXJ0VmlzaWJsZSkge1xyXG4gICAgICBzZXRSZWZyZXNoQ2FydCghcmVmcmVzaENhcnQpOyAvLyBBY3RpdmEgZWwgcmVmcmVzaENhcnQgY3VhbmRvIHNlIG11ZXN0cmEgZWwgY2Fycml0b1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbCA9IGNhcnRQcm9kdWN0cy5yZWR1Y2UoKGFjYywgcHJvZHVjdCkgPT4gYWNjICsgcHJvZHVjdC5wcmljZSwgMCk7XHJcbiAgICBzZXRUb3RhbFByaWNlKHRvdGFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXkgPSAoKSA9PiB7XHJcbiAgICAvLyBMw7NnaWNhIHBhcmEgcHJvY2VzYXIgZWwgcGFnbyAoYSBpbXBsZW1lbnRhcilcclxuICAgIGNvbnNvbGUubG9nKFwiUGF5aW5nLi4uXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcnR9PlxyXG4gICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgaWNvbj17ZmFTaG9wcGluZ0NhcnR9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEljb259XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlQ2FydFZpc2liaWxpdHl9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtjYXJ0VmlzaWJsZSAmJiAoIC8vIFJlbmRlcml6YSBlbCBjb250ZW5pZG8gZGVsIGNhcnJpdG8gc2kgY2FydFZpc2libGUgZXMgdHJ1ZVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FydEl0ZW1zfT5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8cD5Mb2FkaW5nIGNhcnQuLi48L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzTGlzdH0+XHJcbiAgICAgICAgICAgICAge2NhcnRQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0Ll9pZH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnByb2R1Y3RJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0TmFtZX0+e3Byb2R1Y3QucHJvZHVjdE5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RQcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcm9kdWN0UHJpY2V94oKsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZyb21DYXJ0KHByb2R1Y3QuX2lkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvdGFsQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG90YWxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2hvd1RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVG90YWxcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtzaG93VG90YWwgJiYgPHA+VG90YWwgUHJpY2U6XCIgXCLigqw8L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnBheUJ1dHRvbn0gb25DbGljaz17aGFuZGxlUGF5fT5cclxuICAgICAgICAgICAgICAgICAgUGF5XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hvcHBpbmdDYXJ0IiwiZ2V0Q2FydFByb2R1Y3RzRmV0Y2giLCJjcmVhdGVDYXJ0UHJvZHVjdEZldGNoIiwiZGVsZXRlQ2FydFByb2R1Y3RGZXRjaCIsInVzZVByb2R1Y3QiLCJDYXJ0IiwidXNlcklkIiwiY2FydFZpc2libGUiLCJzZXRDYXJ0VmlzaWJsZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmcmVzaENhcnQiLCJzZXRSZWZyZXNoQ2FydCIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwiZmV0Y2hDYXJ0UHJvZHVjdHMiLCJjYWxjdWxhdGVUb3RhbFByaWNlIiwicHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQWRkVG9DYXJ0IiwicHJvZHVjdCIsImlkIiwiX2lkIiwiaW1hZ2UiLCJwcmljZSIsImFkZGVkUHJvZHVjdCIsImxvZyIsImhhbmRsZVJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwidG9nZ2xlQ2FydFZpc2liaWxpdHkiLCJ0b3RhbCIsInJlZHVjZSIsImFjYyIsImhhbmRsZVBheSIsImRpdiIsImNsYXNzTmFtZSIsImNhcnQiLCJpY29uIiwiY2FydEljb24iLCJvbkNsaWNrIiwiY2FydEl0ZW1zIiwicCIsInByb2R1Y3RzTGlzdCIsIm1hcCIsInByb2R1Y3RJdGVtIiwiaW1nIiwic3JjIiwicHJvZHVjdEltYWdlIiwiYWx0IiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0SW5mbyIsInByb2R1Y3RQcmljZSIsImJ1dHRvbiIsImJ1dHRvblJlbW92ZSIsInRvdGFsQ29udGFpbmVyIiwidG90YWxCdXR0b24iLCJoYW5kbGVTaG93VG90YWwiLCJzaG93VG90YWwiLCJwYXlCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cartComponent/Cart.jsx\n"));

/***/ })

});