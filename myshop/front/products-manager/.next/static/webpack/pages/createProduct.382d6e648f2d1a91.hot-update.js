"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createProduct",{

/***/ "./src/components/createProductComponent/createProduct.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/createProductComponent/createProduct.jsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _createProduct_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProduct.module.css */ \"./src/components/createProductComponent/createProduct.module.css\");\n/* harmony import */ var _createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_productFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/productFetch */ \"./src/api/productFetch.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CreateProduct() {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handlerOnChangeImage = (e)=>{\n        setImage(e.target.value);\n    };\n    const handlerOnChangeName = (e)=>{\n        setName(e.target.value);\n    };\n    const handlerOnChangeCategory = (e)=>{\n        setCategory(e.target.value);\n    };\n    const handlerOnChangePrice = (e)=>{\n        setPrice(e.target.value);\n    };\n    const handlerOnChangeScore = (e)=>{\n        setScore(e.target.value);\n    };\n    const createNewProduct = async ()=>{\n        // Validar que todos los campos estén llenos\n        if (!image || !name || !category || !price || !score) {\n            setError(\"Please fill in all fields.\");\n            return;\n        }\n        try {\n            await (0,_api_productFetch__WEBPACK_IMPORTED_MODULE_3__.CreateProductFetch)({\n                image,\n                name,\n                category,\n                price,\n                score\n            });\n            setMessage(\"Product Created\");\n            setError(\"\"); // Limpiar el mensaje de error si la creación fue exitosa\n        } catch (error) {\n            console.error(\"Error creating product:\", error);\n            setError(\"Failed to create product.\");\n        }\n    };\n    const containerStyle = {\n        height: \"75vh\",\n        width: \"100vw\",\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().loginContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                    children: \"Create Product\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputField),\n                    type: \"text\",\n                    onChange: handlerOnChangeImage,\n                    placeholder: \"Image URL\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputField),\n                    type: \"text\",\n                    onChange: handlerOnChangeName,\n                    placeholder: \"Name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputField),\n                    type: \"text\",\n                    onChange: handlerOnChangeCategory,\n                    placeholder: \"Gender\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputField),\n                    type: \"number\",\n                    onChange: handlerOnChangePrice,\n                    placeholder: \"Price\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputField),\n                    type: \"number\",\n                    onChange: handlerOnChangeScore,\n                    placeholder: \"Score\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    onClick: createNewProduct,\n                    children: \"Create\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_createProduct_module_css__WEBPACK_IMPORTED_MODULE_2___default().error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 19\n                }, this),\n                message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: message\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n                    lineNumber: 105,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vermillion\\\\Desktop\\\\Proyecto_Final\\\\Proyecto_Final\\\\myshop\\\\front\\\\products-manager\\\\src\\\\components\\\\createProductComponent\\\\createProduct.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateProduct, \"7manrAqjVLSSQHJLa1LXYRQgP9c=\");\n_c = CreateProduct;\nvar _c;\n$RefreshReg$(_c, \"CreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jcmVhdGVQcm9kdWN0Q29tcG9uZW50L2NyZWF0ZVByb2R1Y3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUTtBQUNZO0FBRTdDLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNa0IsdUJBQXVCLENBQUNDO1FBQzVCZCxTQUFTYyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDekI7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0g7UUFDM0JaLFFBQVFZLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLE1BQU1FLDBCQUEwQixDQUFDSjtRQUMvQlYsWUFBWVUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBRUEsTUFBTUcsdUJBQXVCLENBQUNMO1FBQzVCUixTQUFTUSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDekI7SUFFQSxNQUFNSSx1QkFBdUIsQ0FBQ047UUFDNUJOLFNBQVNNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN6QjtJQUVBLE1BQU1LLG1CQUFtQjtRQUN2Qiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDdEIsU0FBUyxDQUFDRSxRQUFRLENBQUNFLFlBQVksQ0FBQ0UsU0FBUyxDQUFDRSxPQUFPO1lBQ3BESyxTQUFTO1lBQ1Q7UUFDRjtRQUVBLElBQUk7WUFDRixNQUFNZixxRUFBa0JBLENBQUM7Z0JBQ3ZCRTtnQkFDQUU7Z0JBQ0FFO2dCQUNBRTtnQkFDQUU7WUFDRjtZQUNBRyxXQUFXO1lBQ1hFLFNBQVMsS0FBSyx5REFBeUQ7UUFDekUsRUFBRSxPQUFPRCxPQUFPO1lBQ2RXLFFBQVFYLEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDQyxTQUFTO1FBQ1g7SUFDRjtJQUVBLE1BQU1XLGlCQUFpQjtRQUNyQkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsZ0JBQWdCO1FBQ2hCQyxZQUFZO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBT1A7a0JBQ1YsNEVBQUNNO1lBQUlFLFdBQVduQyxpRkFBcUI7OzhCQUNuQyw4REFBQ3FDO29CQUFFRixXQUFXbkMseUVBQWE7OEJBQUU7Ozs7Ozs4QkFDN0IsOERBQUN1QztvQkFDQ0osV0FBV25DLDZFQUFpQjtvQkFDNUJ5QyxNQUFLO29CQUNMQyxVQUFVekI7b0JBQ1YwQixhQUFZOzs7Ozs7OEJBRWQsOERBQUNKO29CQUNDSixXQUFXbkMsNkVBQWlCO29CQUM1QnlDLE1BQUs7b0JBQ0xDLFVBQVVyQjtvQkFDVnNCLGFBQVk7Ozs7Ozs4QkFFZCw4REFBQ0o7b0JBQ0NKLFdBQVduQyw2RUFBaUI7b0JBQzVCeUMsTUFBSztvQkFDTEMsVUFBVXBCO29CQUNWcUIsYUFBWTs7Ozs7OzhCQUVkLDhEQUFDSjtvQkFDQ0osV0FBV25DLDZFQUFpQjtvQkFDNUJ5QyxNQUFLO29CQUNMQyxVQUFVbkI7b0JBQ1ZvQixhQUFZOzs7Ozs7OEJBRWQsOERBQUNKO29CQUNDSixXQUFXbkMsNkVBQWlCO29CQUM1QnlDLE1BQUs7b0JBQ0xDLFVBQVVsQjtvQkFDVm1CLGFBQVk7Ozs7Ozs4QkFFZCw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDQTs7Ozs7OEJBQ0QsOERBQUNDO29CQUFPVixXQUFXbkMseUVBQWE7b0JBQUU4QyxTQUFTckI7OEJBQWtCOzs7Ozs7Z0JBRzVEVix1QkFBUyw4REFBQ3NCO29CQUFFRixXQUFXbkMsd0VBQVk7OEJBQUdlOzs7Ozs7Z0JBQ3RDRix5QkFBVyw4REFBQ3dCOzhCQUFHeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0dBeEd3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlUHJvZHVjdENvbXBvbmVudC9jcmVhdGVQcm9kdWN0LmpzeD8zZWI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NyZWF0ZVByb2R1Y3QubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVQcm9kdWN0RmV0Y2ggfSBmcm9tIFwiLi4vLi4vYXBpL3Byb2R1Y3RGZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJPbkNoYW5nZUltYWdlID0gKGUpID0+IHtcclxuICAgIHNldEltYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVyT25DaGFuZ2VOYW1lID0gKGUpID0+IHtcclxuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXJPbkNoYW5nZUNhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgIHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVyT25DaGFuZ2VQcmljZSA9IChlKSA9PiB7XHJcbiAgICBzZXRQcmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlck9uQ2hhbmdlU2NvcmUgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2NvcmUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZU5ld1Byb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBWYWxpZGFyIHF1ZSB0b2RvcyBsb3MgY2FtcG9zIGVzdMOpbiBsbGVub3NcclxuICAgIGlmICghaW1hZ2UgfHwgIW5hbWUgfHwgIWNhdGVnb3J5IHx8ICFwcmljZSB8fCAhc2NvcmUpIHtcclxuICAgICAgc2V0RXJyb3IoXCJQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IENyZWF0ZVByb2R1Y3RGZXRjaCh7XHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICBwcmljZSxcclxuICAgICAgICBzY29yZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJQcm9kdWN0IENyZWF0ZWRcIik7XHJcbiAgICAgIHNldEVycm9yKFwiXCIpOyAvLyBMaW1waWFyIGVsIG1lbnNhamUgZGUgZXJyb3Igc2kgbGEgY3JlYWNpw7NuIGZ1ZSBleGl0b3NhXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgcHJvZHVjdC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6IFwiNzV2aFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Db250YWluZXJ9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+Q3JlYXRlIFByb2R1Y3Q8L3A+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJPbkNoYW5nZUltYWdlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbWFnZSBVUkxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJPbkNoYW5nZU5hbWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJPbkNoYW5nZUNhdGVnb3J5fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJHZW5kZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlck9uQ2hhbmdlUHJpY2V9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH1cclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZXJPbkNoYW5nZVNjb3JlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTY29yZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17Y3JlYXRlTmV3UHJvZHVjdH0+XHJcbiAgICAgICAgICBDcmVhdGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L3A+fVxyXG4gICAgICAgIHttZXNzYWdlICYmIDxwPnttZXNzYWdlfTwvcD59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNyZWF0ZVByb2R1Y3RGZXRjaCIsIkNyZWF0ZVByb2R1Y3QiLCJpbWFnZSIsInNldEltYWdlIiwibmFtZSIsInNldE5hbWUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwicHJpY2UiLCJzZXRQcmljZSIsInNjb3JlIiwic2V0U2NvcmUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVyT25DaGFuZ2VJbWFnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZXJPbkNoYW5nZU5hbWUiLCJoYW5kbGVyT25DaGFuZ2VDYXRlZ29yeSIsImhhbmRsZXJPbkNoYW5nZVByaWNlIiwiaGFuZGxlck9uQ2hhbmdlU2NvcmUiLCJjcmVhdGVOZXdQcm9kdWN0IiwiY29uc29sZSIsImNvbnRhaW5lclN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGl2Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJsb2dpbkNvbnRhaW5lciIsInAiLCJoZWFkZXIiLCJpbnB1dCIsImlucHV0RmllbGQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/createProductComponent/createProduct.jsx\n"));

/***/ })

});