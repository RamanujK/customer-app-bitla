"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_point-transfer_point-transfer_module_ts"],{

/***/ 62276:
/*!*****************************************************************!*\
  !*** ./src/app/point-transfer/point-transfer-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPageRoutingModule: () => (/* binding */ PointTransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _point_transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-transfer.page */ 20062);




const routes = [{
  path: '',
  component: _point_transfer_page__WEBPACK_IMPORTED_MODULE_0__.PointTransferPage
}];
let PointTransferPageRoutingModule = class PointTransferPageRoutingModule {};
PointTransferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PointTransferPageRoutingModule);


/***/ }),

/***/ 44869:
/*!*********************************************************!*\
  !*** ./src/app/point-transfer/point-transfer.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointTransferPageModule: () => (/* binding */ PointTransferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-transfer-routing.module */ 62276);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);







let PointTransferPageModule = class PointTransferPageModule {};
PointTransferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _point_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointTransferPageRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule],
  declarations: []
})], PointTransferPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_point-transfer_point-transfer_module_ts.js.map