/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./src/components/productsComponent/Products.module.css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./src/components/productsComponent/Products.module.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Products_productsWrapper__c94Gl {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.Products_title__qQk3_ {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.Products_productsContainer__8kfQQ {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.Products_card__XwexZ {\\r\\n  flex-grow: 1;\\r\\n  flex-shrink: 1;\\r\\n  flex-basis: calc(33.333% - 20px); /* 3 cartas por fila */\\r\\n  box-sizing: border-box;\\r\\n  margin: 10px;\\r\\n  background-color: #fff;\\r\\n  border: 1px solid #ddd;\\r\\n  border-radius: 8px;\\r\\n  padding: 16px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.Products_productImage__NtGJb {\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.Products_cardContent__JxXMb {\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n.Products_priceContainer__Ri1DV {\\r\\n  font-size: 0.9rem;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.Products_buttonToCart__ixjjH {\\r\\n  font-size: 0.8rem;\\r\\n  margin-top: 10px;\\r\\n  padding: 5px 10px;\\r\\n  background-color: #007bff;\\r\\n  color: white;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.Products_buttonToCart__ixjjH:hover {\\r\\n  background-color: #0056b3;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/productsComponent/Products.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,YAA8B;EAA9B,cAA8B;EAA9B,gCAA8B,EAAE,sBAAsB;EACtD,sBAAsB;EACtB,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B\",\"sourcesContent\":[\".productsWrapper {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.productsContainer {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  flex: 1 1 calc(33.333% - 20px); /* 3 cartas por fila */\\r\\n  box-sizing: border-box;\\r\\n  margin: 10px;\\r\\n  background-color: #fff;\\r\\n  border: 1px solid #ddd;\\r\\n  border-radius: 8px;\\r\\n  padding: 16px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.productImage {\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.cardContent {\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n.priceContainer {\\r\\n  font-size: 0.9rem;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.buttonToCart {\\r\\n  font-size: 0.8rem;\\r\\n  margin-top: 10px;\\r\\n  padding: 5px 10px;\\r\\n  background-color: #007bff;\\r\\n  color: white;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.buttonToCart:hover {\\r\\n  background-color: #0056b3;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"productsWrapper\": \"Products_productsWrapper__c94Gl\",\n\t\"title\": \"Products_title__qQk3_\",\n\t\"productsContainer\": \"Products_productsContainer__8kfQQ\",\n\t\"card\": \"Products_card__XwexZ\",\n\t\"productImage\": \"Products_productImage__NtGJb\",\n\t\"cardContent\": \"Products_cardContent__JxXMb\",\n\t\"priceContainer\": \"Products_priceContainer__Ri1DV\",\n\t\"buttonToCart\": \"Products_buttonToCart__ixjjH\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOV0udXNlWzJdIS4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdHNDb21wb25lbnQvUHJvZHVjdHMubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsNEVBQTRFLGtCQUFrQix5QkFBeUIsS0FBSyxnQ0FBZ0MsMEJBQTBCLEtBQUssNENBQTRDLG9CQUFvQixzQkFBc0IsOEJBQThCLGtCQUFrQixLQUFLLCtCQUErQixtQkFBbUIscUJBQXFCLHdDQUF3QyxvREFBb0QsbUJBQW1CLDZCQUE2Qiw2QkFBNkIseUJBQXlCLG9CQUFvQix5QkFBeUIsS0FBSyx1Q0FBdUMsc0JBQXNCLG1CQUFtQiwwQkFBMEIsS0FBSyxzQ0FBc0Msd0JBQXdCLEtBQUsseUNBQXlDLHdCQUF3Qix1QkFBdUIsS0FBSyx1Q0FBdUMsd0JBQXdCLHVCQUF1Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQixtQkFBbUIseUJBQXlCLHNCQUFzQixLQUFLLDZDQUE2QyxnQ0FBZ0MsS0FBSyxXQUFXLHFIQUFxSCxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSx5QkFBeUIsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLDRDQUE0QyxrQkFBa0IseUJBQXlCLEtBQUssZ0JBQWdCLDBCQUEwQixLQUFLLDRCQUE0QixvQkFBb0Isc0JBQXNCLDhCQUE4QixrQkFBa0IsS0FBSyxlQUFlLHNDQUFzQyxvREFBb0QsbUJBQW1CLDZCQUE2Qiw2QkFBNkIseUJBQXlCLG9CQUFvQix5QkFBeUIsS0FBSyx1QkFBdUIsc0JBQXNCLG1CQUFtQiwwQkFBMEIsS0FBSyxzQkFBc0Isd0JBQXdCLEtBQUsseUJBQXlCLHdCQUF3Qix1QkFBdUIsS0FBSyx1QkFBdUIsd0JBQXdCLHVCQUF1Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQixtQkFBbUIseUJBQXlCLHNCQUFzQixLQUFLLDZCQUE2QixnQ0FBZ0MsS0FBSyx1QkFBdUI7QUFDbDBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0c0NvbXBvbmVudC9Qcm9kdWN0cy5tb2R1bGUuY3NzP2MxOTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Qcm9kdWN0c19wcm9kdWN0c1dyYXBwZXJfX2M5NEdsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uUHJvZHVjdHNfdGl0bGVfX3FRazNfIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5Qcm9kdWN0c19wcm9kdWN0c0NvbnRhaW5lcl9fOGtmUVEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5Qcm9kdWN0c19jYXJkX19Yd2V4WiB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBmbGV4LXNocmluazogMTtcXHJcXG4gIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMzJSAtIDIwcHgpOyAvKiAzIGNhcnRhcyBwb3IgZmlsYSAqL1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RzX3Byb2R1Y3RJbWFnZV9fTnRHSmIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RzX2NhcmRDb250ZW50X19KeFhNYiB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RzX3ByaWNlQ29udGFpbmVyX19SaTFEViB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5Qcm9kdWN0c19idXR0b25Ub0NhcnRfX2l4ampIIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLlByb2R1Y3RzX2J1dHRvblRvQ2FydF9faXhqakg6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzQ29tcG9uZW50L1Byb2R1Y3RzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBOEI7RUFBOUIsY0FBOEI7RUFBOUIsZ0NBQThCLEVBQUUsc0JBQXNCO0VBQ3RELHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9kdWN0c1dyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGZsZXg6IDEgMSBjYWxjKDMzLjMzMyUgLSAyMHB4KTsgLyogMyBjYXJ0YXMgcG9yIGZpbGEgKi9cXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0SW1hZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2VDb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uVG9DYXJ0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvblRvQ2FydDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwcm9kdWN0c1dyYXBwZXJcIjogXCJQcm9kdWN0c19wcm9kdWN0c1dyYXBwZXJfX2M5NEdsXCIsXG5cdFwidGl0bGVcIjogXCJQcm9kdWN0c190aXRsZV9fcVFrM19cIixcblx0XCJwcm9kdWN0c0NvbnRhaW5lclwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RzQ29udGFpbmVyX184a2ZRUVwiLFxuXHRcImNhcmRcIjogXCJQcm9kdWN0c19jYXJkX19Yd2V4WlwiLFxuXHRcInByb2R1Y3RJbWFnZVwiOiBcIlByb2R1Y3RzX3Byb2R1Y3RJbWFnZV9fTnRHSmJcIixcblx0XCJjYXJkQ29udGVudFwiOiBcIlByb2R1Y3RzX2NhcmRDb250ZW50X19KeFhNYlwiLFxuXHRcInByaWNlQ29udGFpbmVyXCI6IFwiUHJvZHVjdHNfcHJpY2VDb250YWluZXJfX1JpMURWXCIsXG5cdFwiYnV0dG9uVG9DYXJ0XCI6IFwiUHJvZHVjdHNfYnV0dG9uVG9DYXJ0X19peGpqSFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./src/components/productsComponent/Products.module.css\n"));

/***/ })

});