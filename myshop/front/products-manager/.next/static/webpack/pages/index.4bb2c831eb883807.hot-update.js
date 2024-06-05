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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_productFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/productFetch */ \"./src/api/productFetch.js\");\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Products.module.css */ \"./src/components/productsComponent/Products.module.css\");\n/* harmony import */ var _Products_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Products_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Products = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getAllProductsAux = async ()=>{\n            const productsAux = await (0,_api_productFetch__WEBPACK_IMPORTED_MODULE_2__.getAllProducts)();\n            console.log(productsAux);\n            setProducts(productsAux.data);\n        };\n        getAllProductsAux();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productsContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Products\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            products.map((product)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: product.img,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Products_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: product.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: product.score\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, product.id, true, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\productsComponent\\\\Products.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Products, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0c0NvbXBvbmVudC9Qcm9kdWN0cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNZO0FBQ2I7QUFFM0MsTUFBTUssV0FBVzs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxvQkFBb0I7WUFDeEIsTUFBTUMsY0FBYyxNQUFNTixpRUFBY0E7WUFDeENPLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkYsWUFBWUUsWUFBWUcsSUFBSTtRQUM5QjtRQUNBSjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIVCxTQUFTVSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2IscUJBQ0UsOERBQUNKO29CQUFJQyxXQUFXVixrRUFBVzs7c0NBQ3pCLDhEQUFDZTs0QkFBSUMsS0FBS0gsUUFBUUUsR0FBRzs0QkFBRUUsS0FBSTs7Ozs7O3NDQUMzQiw4REFBQ1I7NEJBQUlDLFdBQVdWLHFFQUFjOzs4Q0FDNUIsOERBQUNtQjs4Q0FBR04sUUFBUU8sSUFBSTs7Ozs7OzhDQUNoQiw4REFBQ0Q7OENBQUdOLFFBQVFRLFFBQVE7Ozs7Ozs4Q0FDcEIsOERBQUNDOzhDQUFNVCxRQUFRVSxLQUFLOzs7Ozs7Ozs7Ozs7O21CQUxVVixRQUFRVyxFQUFFOzs7OztZQVNoRDs7Ozs7OztBQUdOO0dBN0JNdkI7S0FBQUE7QUErQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdHNDb21wb25lbnQvUHJvZHVjdHMuanN4P2NkMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEFsbFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL2FwaS9wcm9kdWN0RmV0Y2hcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9kdWN0cy5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEFsbFByb2R1Y3RzQXV4ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9kdWN0c0F1eCA9IGF3YWl0IGdldEFsbFByb2R1Y3RzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzQXV4KTtcclxuICAgICAgc2V0UHJvZHVjdHMocHJvZHVjdHNBdXguZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0QWxsUHJvZHVjdHNBdXgoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzQ29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5Qcm9kdWN0czwvaDE+XHJcbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntwcm9kdWN0LnNjb3JlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBbGxQcm9kdWN0cyIsInN0eWxlcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImdldEFsbFByb2R1Y3RzQXV4IiwicHJvZHVjdHNBdXgiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvZHVjdCIsImNhcmQiLCJpbWciLCJzcmMiLCJhbHQiLCJjb250ZW50IiwicCIsIm5hbWUiLCJjYXRlZ29yeSIsInNwYW4iLCJzY29yZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/productsComponent/Products.jsx\n"));

/***/ })

});