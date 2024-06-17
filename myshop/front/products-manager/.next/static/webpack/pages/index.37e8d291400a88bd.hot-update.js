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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.module.css */ \"./src/components/productsComponent/Products.module.css\");\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Products_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ProductContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/ProductContext */ \"./src/context/ProductContext.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _api_cartFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/cartFetch */ \"./src/api/cartFetch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Products = (param)=>{\n    let { filters, products } = param;\n    _s();\n    const { userId, setSelectedProductId } = (0,_context_ProductContext__WEBPACK_IMPORTED_MODULE_4__.useProduct)(); // Obtén userId del contexto\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleAddToCart = async (product)=>{\n        try {\n            // Prepara los datos del producto para agregar al carrito\n            const data = {\n                userId: userId,\n                id: product._id,\n                image: product.image,\n                price: product.price\n            };\n            // Llama a la función que realiza la solicitud POST al backend\n            const response = await (0,_api_cartFetch__WEBPACK_IMPORTED_MODULE_6__.CreateCartProductFetch)(data);\n            console.log(\"Product added to cart:\", response);\n        // Aquí podrías mostrar un mensaje de éxito o actualizar el estado del carrito en el contexto si es necesario\n        } catch (error) {\n            console.error(\"Error adding product to cart:\", error);\n        // Manejo de errores: muestra un mensaje al usuario o maneja el error de otra manera\n        }\n    };\n    const handleClick = (id)=>{\n        setSelectedProductId(id); // Establecer el ID del producto seleccionado en el contexto\n        router.push({\n            pathname: \"/productDetails\",\n            query: {\n                id\n            }\n        }, \"/productDetails/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsWrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().productsContainer),\n            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().productImage),\n                            src: product.image,\n                            alt: product.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/productDetails\",\n                                        legacyBehavior: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().linkDetails),\n                                            onClick: (e)=>{\n                                                e.preventDefault();\n                                                handleClick(product._id);\n                                            },\n                                            children: product.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().cardContent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"Gender: \",\n                                                product.category\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"Score: \",\n                                                product.score\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().priceContainer),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"Price: \",\n                                                product.price,\n                                                \"€\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonToCart),\n                                            onClick: ()=>handleAddToCart(product),\n                                            children: \"To Cart\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, product._id, true, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Products, \"8wuBcCMDp4lkVZ2wUOegOCorMqY=\", false, function() {\n    return [\n        _context_ProductContext__WEBPACK_IMPORTED_MODULE_4__.useProduct,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0c0NvbXBvbmVudC9Qcm9kdWN0cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ2Q7QUFDNkI7QUFDbEI7QUFDcUI7QUFFN0QsTUFBTU0sV0FBVztRQUFDLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFOztJQUNyQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsb0JBQW9CLEVBQUUsR0FBR1AsbUVBQVVBLElBQUksNEJBQTRCO0lBQ25GLE1BQU1RLFNBQVNQLHNEQUFTQTtJQUV4QixNQUFNUSxrQkFBa0IsT0FBT0M7UUFDN0IsSUFBSTtZQUNGLHlEQUF5RDtZQUN6RCxNQUFNQyxPQUFPO2dCQUNYTCxRQUFRQTtnQkFDUk0sSUFBSUYsUUFBUUcsR0FBRztnQkFDZkMsT0FBT0osUUFBUUksS0FBSztnQkFDcEJDLE9BQU9MLFFBQVFLLEtBQUs7WUFDdEI7WUFFQSw4REFBOEQ7WUFDOUQsTUFBTUMsV0FBVyxNQUFNZCxzRUFBc0JBLENBQUNTO1lBQzlDTSxRQUFRQyxHQUFHLENBQUMsMEJBQTBCRjtRQUN0Qyw2R0FBNkc7UUFDL0csRUFBRSxPQUFPRyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxpQ0FBaUNBO1FBQy9DLG9GQUFvRjtRQUN0RjtJQUNGO0lBRUEsTUFBTUMsY0FBYyxDQUFDUjtRQUNuQkwscUJBQXFCSyxLQUFLLDREQUE0RDtRQUN0RkosT0FBT2EsSUFBSSxDQUNUO1lBQ0VDLFVBQVU7WUFDVkMsT0FBTztnQkFBRVg7WUFBRztRQUNkLEdBQ0EsbUJBQXNCLE9BQUhBO0lBRXZCO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVczQiw2RUFBc0I7a0JBQ3BDLDRFQUFDMEI7WUFBSUMsV0FBVzNCLCtFQUF3QjtzQkFDckNPLFNBQVN1QixHQUFHLENBQUMsQ0FBQ2xCLHdCQUNiLDhEQUFDYztvQkFBSUMsV0FBVzNCLGtFQUFXOztzQ0FDekIsOERBQUNnQzs0QkFDQ0wsV0FBVzNCLDBFQUFtQjs0QkFDOUJrQyxLQUFLdEIsUUFBUUksS0FBSzs0QkFDbEJtQixLQUFLdkIsUUFBUXdCLElBQUk7Ozs7OztzQ0FFbkIsOERBQUNWOzRCQUFJQyxXQUFXM0IscUVBQWM7OzhDQUM1Qiw4REFBQ3NDOzhDQUNDLDRFQUFDckMsa0RBQUlBO3dDQUFDc0MsTUFBTTt3Q0FBbUJDLGNBQWM7a0RBQzNDLDRFQUFDQzs0Q0FDQ2QsV0FBVzNCLHlFQUFrQjs0Q0FDN0IyQyxTQUFTLENBQUNDO2dEQUNSQSxFQUFFQyxjQUFjO2dEQUNoQnZCLFlBQVlWLFFBQVFHLEdBQUc7NENBQ3pCO3NEQUVDSCxRQUFRd0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJbkIsOERBQUNWO29DQUFJQyxXQUFXM0IseUVBQWtCOztzREFDaEMsOERBQUMrQzs7Z0RBQUs7Z0RBQVNuQyxRQUFRb0MsUUFBUTs7Ozs7OztzREFDL0IsOERBQUNDOzs7OztzREFDRCw4REFBQ0Y7O2dEQUFLO2dEQUFRbkMsUUFBUXNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7OENBRTdCLDhEQUFDeEI7b0NBQUlDLFdBQVczQiw0RUFBcUI7O3NEQUNuQyw4REFBQytDOztnREFBSztnREFBUW5DLFFBQVFLLEtBQUs7Z0RBQUM7Ozs7Ozs7c0RBQzVCLDhEQUFDZ0M7Ozs7O3NEQUNELDhEQUFDRzs0Q0FDQ3pCLFdBQVczQiwwRUFBbUI7NENBQzlCMkMsU0FBUyxJQUFNaEMsZ0JBQWdCQztzREFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBL0IyQkEsUUFBUUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FBeUN2RDtHQWhGTVY7O1FBQ3FDSCwrREFBVUE7UUFDcENDLGtEQUFTQTs7O0tBRnBCRTtBQWtGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0c0NvbXBvbmVudC9Qcm9kdWN0cy5qc3g/Y2QzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUHJvZHVjdHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Qcm9kdWN0Q29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQ2FydFByb2R1Y3RGZXRjaCB9IGZyb20gXCIuLi8uLi9hcGkvY2FydEZldGNoXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICh7IGZpbHRlcnMsIHByb2R1Y3RzIH0pID0+IHtcclxuICBjb25zdCB7IHVzZXJJZCwgc2V0U2VsZWN0ZWRQcm9kdWN0SWQgfSA9IHVzZVByb2R1Y3QoKTsgLy8gT2J0w6luIHVzZXJJZCBkZWwgY29udGV4dG9cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFByZXBhcmEgbG9zIGRhdG9zIGRlbCBwcm9kdWN0byBwYXJhIGFncmVnYXIgYWwgY2Fycml0b1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgIGlkOiBwcm9kdWN0Ll9pZCxcclxuICAgICAgICBpbWFnZTogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgICBwcmljZTogcHJvZHVjdC5wcmljZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIExsYW1hIGEgbGEgZnVuY2nDs24gcXVlIHJlYWxpemEgbGEgc29saWNpdHVkIFBPU1QgYWwgYmFja2VuZFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENyZWF0ZUNhcnRQcm9kdWN0RmV0Y2goZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0OlwiLCByZXNwb25zZSk7XHJcbiAgICAgIC8vIEFxdcOtIHBvZHLDrWFzIG1vc3RyYXIgdW4gbWVuc2FqZSBkZSDDqXhpdG8gbyBhY3R1YWxpemFyIGVsIGVzdGFkbyBkZWwgY2Fycml0byBlbiBlbCBjb250ZXh0byBzaSBlcyBuZWNlc2FyaW9cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgcHJvZHVjdCB0byBjYXJ0OlwiLCBlcnJvcik7XHJcbiAgICAgIC8vIE1hbmVqbyBkZSBlcnJvcmVzOiBtdWVzdHJhIHVuIG1lbnNhamUgYWwgdXN1YXJpbyBvIG1hbmVqYSBlbCBlcnJvciBkZSBvdHJhIG1hbmVyYVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGlkKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFByb2R1Y3RJZChpZCk7IC8vIEVzdGFibGVjZXIgZWwgSUQgZGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkbyBlbiBlbCBjb250ZXh0b1xyXG4gICAgcm91dGVyLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTogXCIvcHJvZHVjdERldGFpbHNcIixcclxuICAgICAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgICB9LFxyXG4gICAgICBgL3Byb2R1Y3REZXRhaWxzLyR7aWR9YFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0c1dyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzQ29udGFpbmVyfT5cclxuICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IGtleT17cHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0RGV0YWlsc1wifSBsZWdhY3lCZWhhdmlvcj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rRGV0YWlsc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2socHJvZHVjdC5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkdlbmRlcjoge3Byb2R1Y3QuY2F0ZWdvcnl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TY29yZToge3Byb2R1Y3Quc2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UHJpY2U6IHtwcm9kdWN0LnByaWNlfeKCrDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Ub0NhcnR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQ2FydChwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVG8gQ2FydFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJMaW5rIiwidXNlUHJvZHVjdCIsInVzZVJvdXRlciIsIkNyZWF0ZUNhcnRQcm9kdWN0RmV0Y2giLCJQcm9kdWN0cyIsImZpbHRlcnMiLCJwcm9kdWN0cyIsInVzZXJJZCIsInNldFNlbGVjdGVkUHJvZHVjdElkIiwicm91dGVyIiwiaGFuZGxlQWRkVG9DYXJ0IiwicHJvZHVjdCIsImRhdGEiLCJpZCIsIl9pZCIsImltYWdlIiwicHJpY2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUNsaWNrIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9kdWN0c1dyYXBwZXIiLCJwcm9kdWN0c0NvbnRhaW5lciIsIm1hcCIsImNhcmQiLCJpbWciLCJwcm9kdWN0SW1hZ2UiLCJzcmMiLCJhbHQiLCJuYW1lIiwiY29udGVudCIsImg0IiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImxpbmtEZXRhaWxzIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmRDb250ZW50Iiwic3BhbiIsImNhdGVnb3J5IiwiYnIiLCJzY29yZSIsInByaWNlQ29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uVG9DYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/productsComponent/Products.jsx\n"));

/***/ })

});