"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_personal-detail_personal-detail_module_ts"],{

/***/ 74570:
/*!*******************************************************************!*\
  !*** ./src/app/personal-detail/personal-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPageRoutingModule: () => (/* binding */ PersonalDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _personal_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-detail.page */ 68988);




const routes = [{
  path: '',
  component: _personal_detail_page__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailPage
}];
let PersonalDetailPageRoutingModule = class PersonalDetailPageRoutingModule {};
PersonalDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PersonalDetailPageRoutingModule);


/***/ }),

/***/ 67603:
/*!***********************************************************!*\
  !*** ./src/app/personal-detail/personal-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDetailPageModule: () => (/* binding */ PersonalDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-detail-routing.module */ 74570);






let PersonalDetailPageModule = class PersonalDetailPageModule {};
PersonalDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _personal_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
  declarations: []
})], PersonalDetailPageModule);


/***/ })

}]);
//# sourceMappingURL=src_app_personal-detail_personal-detail_module_ts.js.map