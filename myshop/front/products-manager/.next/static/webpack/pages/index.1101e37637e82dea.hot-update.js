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

/***/ "./src/components/productsComponent/Products.jsx":
/*!*******************************************************!*\
  !*** ./src/components/productsComponent/Products.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.module.css */ \"./src/components/productsComponent/Products.module.css\");\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Products_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Products = (param)=>{\n    let { filters, products } = param;\n    _s();\n    const { userId, setSelectedProductId, setRefreshCart } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_4__.useProduct)(); // OBTEIN USERID SETSELECTEDPRODUCTID AND SETREFRESHCART FROM CONTEXT\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleAddToCart = async (product)=>{\n        try {\n            // PREPARE DATA FOR CART\n            const data = {\n                userId: userId,\n                id: product._id,\n                image: product.image,\n                price: product.price\n            };\n            // FETCH TO BACK FOR ADD THE PRODUCT\n            const response = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_6__.CreateCartProductFetch)(data);\n            console.log(\"Product added to cart:\", response);\n            // REFRESH THE CART\n            setRefreshCart((prevRefresh)=>!prevRefresh);\n        // Aquí podrías mostrar un mensaje de éxito o actualizar el estado del carrito en el contexto si es necesario\n        } catch (error) {\n            console.error(\"Error adding product to cart:\", error);\n        // Manejo de errores: muestra un mensaje al usuario o maneja el error de otra manera\n        }\n    };\n    const handleClick = (id)=>{\n        setSelectedProductId(id); // Establecer el ID del producto seleccionado en el contexto\n        router.push({\n            pathname: \"/productDetails\",\n            query: {\n                id\n            }\n        }, \"/productDetails/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsWrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsContainer),\n            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage),\n                            src: product.image,\n                            alt: product.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/productDetails\",\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().linkDetails),\n                                            onClick: (e)=>{\n                                                e.preventDefault();\n                                                handleClick(product._id);\n                                            },\n                                            children: product.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardContent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"Gender: \",\n                                                product.category\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"Score: \",\n                                                product.score\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().priceContainer),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"Price: \",\n                                                product.price,\n                                                \"€\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonToCart),\n                                            onClick: ()=>handleAddToCart(product),\n                                            children: \"To Cart\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, product._id, true, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Products, \"rFiLbq6yfDl9OwghtShBdx3i9AY=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_4__.useProduct,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0c0NvbXBvbmVudC9Qcm9kdWN0cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ2Q7QUFDNkI7QUFDbEI7QUFDcUI7QUFFN0QsTUFBTU0sV0FBVztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFOztJQUNyQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUVDLGNBQWMsRUFBRSxHQUFHUixtRUFBVUEsSUFBSSxxRUFBcUU7SUFDNUksTUFBTVMsU0FBU1Isc0RBQVNBO0lBRXhCLE1BQU1TLGtCQUFrQixPQUFPQztRQUM3QixJQUFJO1lBQ0Ysd0JBQXdCO1lBQ3hCLE1BQU1DLE9BQU87Z0JBQ1hOLFFBQVFBO2dCQUNSTyxJQUFJRixRQUFRRyxHQUFHO2dCQUNmQyxPQUFPSixRQUFRSSxLQUFLO2dCQUNwQkMsT0FBT0wsUUFBUUssS0FBSztZQUN0QjtZQUVBLG9DQUFvQztZQUNwQyxNQUFNQyxXQUFXLE1BQU1mLHNFQUFzQkEsQ0FBQ1U7WUFDOUNNLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJGO1lBRXRDLG1CQUFtQjtZQUNuQlQsZUFBZSxDQUFDWSxjQUFnQixDQUFDQTtRQUVqQyw2R0FBNkc7UUFDL0csRUFBRSxPQUFPQyxPQUFPO1lBQ2RILFFBQVFHLEtBQUssQ0FBQyxpQ0FBaUNBO1FBQy9DLG9GQUFvRjtRQUN0RjtJQUNGO0lBRUEsTUFBTUMsY0FBYyxDQUFDVDtRQUNuQk4scUJBQXFCTSxLQUFLLDREQUE0RDtRQUN0RkosT0FBT2MsSUFBSSxDQUNUO1lBQ0VDLFVBQVU7WUFDVkMsT0FBTztnQkFBRVo7WUFBRztRQUNkLEdBQ0EsbUJBQXNCLE9BQUhBO0lBRXZCO0lBRUEscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVc3Qiw2RUFBc0I7a0JBQ3BDLDRFQUFDNEI7WUFBSUMsV0FBVzdCLCtFQUF3QjtzQkFDckNPLFNBQVN5QixHQUFHLENBQUMsQ0FBQ25CLHdCQUNiLDhEQUFDZTtvQkFBSUMsV0FBVzdCLGtFQUFXOztzQ0FDekIsOERBQUNrQzs0QkFDQ0wsV0FBVzdCLDBFQUFtQjs0QkFDOUJvQyxLQUFLdkIsUUFBUUksS0FBSzs0QkFDbEJvQixLQUFLeEIsUUFBUXlCLElBQUk7Ozs7OztzQ0FFbkIsOERBQUNWOzRCQUFJQyxXQUFXN0IscUVBQWM7OzhDQUM1Qiw4REFBQ3dDOzhDQUNDLDRFQUFDdkMsa0RBQUlBO3dDQUFDd0MsTUFBTTt3Q0FBbUJDLGNBQWM7a0RBQzNDLDRFQUFDQzs0Q0FDQ2QsV0FBVzdCLHlFQUFrQjs0Q0FDN0I2QyxTQUFTLENBQUNDO2dEQUNSQSxFQUFFQyxjQUFjO2dEQUNoQnZCLFlBQVlYLFFBQVFHLEdBQUc7NENBQ3pCO3NEQUVDSCxRQUFReUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJbkIsOERBQUNWO29DQUFJQyxXQUFXN0IseUVBQWtCOztzREFDaEMsOERBQUNpRDs7Z0RBQUs7Z0RBQVNwQyxRQUFRcUMsUUFBUTs7Ozs7OztzREFDL0IsOERBQUNDOzs7OztzREFDRCw4REFBQ0Y7O2dEQUFLO2dEQUFRcEMsUUFBUXVDLEtBQUs7Ozs7Ozs7Ozs7Ozs7OENBRTdCLDhEQUFDeEI7b0NBQUlDLFdBQVc3Qiw0RUFBcUI7O3NEQUNuQyw4REFBQ2lEOztnREFBSztnREFBUXBDLFFBQVFLLEtBQUs7Z0RBQUM7Ozs7Ozs7c0RBQzVCLDhEQUFDaUM7Ozs7O3NEQUNELDhEQUFDRzs0Q0FDQ3pCLFdBQVc3QiwwRUFBbUI7NENBQzlCNkMsU0FBUyxJQUFNakMsZ0JBQWdCQztzREFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBL0IyQkEsUUFBUUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FBeUN2RDtHQXBGTVg7O1FBQ3FESCwrREFBVUE7UUFDcERDLGtEQUFTQTs7O0tBRnBCRTtBQXNGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0c0NvbXBvbmVudC9Qcm9kdWN0cy5qc3g/Y2QzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Qcm9kdWN0Q29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQ2FydFByb2R1Y3RGZXRjaCB9IGZyb20gXCIuLi8uLi9hcGkvY2FydEZldGNoXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICh7IGZpbHRlcnMsIHByb2R1Y3RzIH0pID0+IHtcclxuICBjb25zdCB7IHVzZXJJZCwgc2V0U2VsZWN0ZWRQcm9kdWN0SWQsIHNldFJlZnJlc2hDYXJ0IH0gPSB1c2VQcm9kdWN0KCk7IC8vIE9CVEVJTiBVU0VSSUQgU0VUU0VMRUNURURQUk9EVUNUSUQgQU5EIFNFVFJFRlJFU0hDQVJUIEZST00gQ09OVEVYVFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gUFJFUEFSRSBEQVRBIEZPUiBDQVJUXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgaWQ6IHByb2R1Y3QuX2lkLFxyXG4gICAgICAgIGltYWdlOiBwcm9kdWN0LmltYWdlLFxyXG4gICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gRkVUQ0ggVE8gQkFDSyBGT1IgQUREIFRIRSBQUk9EVUNUXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ3JlYXRlQ2FydFByb2R1Y3RGZXRjaChkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnQ6XCIsIHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIC8vIFJFRlJFU0ggVEhFIENBUlRcclxuICAgICAgc2V0UmVmcmVzaENhcnQoKHByZXZSZWZyZXNoKSA9PiAhcHJldlJlZnJlc2gpO1xyXG5cclxuICAgICAgLy8gQXF1w60gcG9kcsOtYXMgbW9zdHJhciB1biBtZW5zYWplIGRlIMOpeGl0byBvIGFjdHVhbGl6YXIgZWwgZXN0YWRvIGRlbCBjYXJyaXRvIGVuIGVsIGNvbnRleHRvIHNpIGVzIG5lY2VzYXJpb1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBwcm9kdWN0IHRvIGNhcnQ6XCIsIGVycm9yKTtcclxuICAgICAgLy8gTWFuZWpvIGRlIGVycm9yZXM6IG11ZXN0cmEgdW4gbWVuc2FqZSBhbCB1c3VhcmlvIG8gbWFuZWphIGVsIGVycm9yIGRlIG90cmEgbWFuZXJhXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaWQpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUHJvZHVjdElkKGlkKTsgLy8gRXN0YWJsZWNlciBlbCBJRCBkZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvIGVuIGVsIGNvbnRleHRvXHJcbiAgICByb3V0ZXIucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIHBhdGhuYW1lOiBcIi9wcm9kdWN0RGV0YWlsc1wiLFxyXG4gICAgICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGAvcHJvZHVjdERldGFpbHMvJHtpZH1gXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzV3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHNDb250YWluZXJ9PlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXtwcm9kdWN0Ll9pZH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2R1Y3REZXRhaWxzXCJ9IGxlZ2FjeUJlaGF2aW9yPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayhwcm9kdWN0Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+R2VuZGVyOiB7cHJvZHVjdC5jYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNjb3JlOiB7cHJvZHVjdC5zY29yZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QcmljZToge3Byb2R1Y3QucHJpY2V94oKsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblRvQ2FydH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9DYXJ0KHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBUbyBDYXJ0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkxpbmsiLCJ1c2VQcm9kdWN0IiwidXNlUm91dGVyIiwiQ3JlYXRlQ2FydFByb2R1Y3RGZXRjaCIsIlByb2R1Y3RzIiwiZmlsdGVycyIsInByb2R1Y3RzIiwidXNlcklkIiwic2V0U2VsZWN0ZWRQcm9kdWN0SWQiLCJzZXRSZWZyZXNoQ2FydCIsInJvdXRlciIsImhhbmRsZUFkZFRvQ2FydCIsInByb2R1Y3QiLCJkYXRhIiwiaWQiLCJfaWQiLCJpbWFnZSIsInByaWNlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicHJldlJlZnJlc2giLCJlcnJvciIsImhhbmRsZUNsaWNrIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9kdWN0c1dyYXBwZXIiLCJwcm9kdWN0c0NvbnRhaW5lciIsIm1hcCIsImNhcmQiLCJpbWciLCJwcm9kdWN0SW1hZ2UiLCJzcmMiLCJhbHQiLCJuYW1lIiwiY29udGVudCIsImg0IiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImxpbmtEZXRhaWxzIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmRDb250ZW50Iiwic3BhbiIsImNhdGVnb3J5IiwiYnIiLCJzY29yZSIsInByaWNlQ29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uVG9DYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/productsComponent/Products.jsx\n"));

/***/ })

});