(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-money-wallet-confirm_add-money-wallet-confirm_module_ts"],{

/***/ 54694:
/*!*************************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPageRoutingModule: () => (/* binding */ AddMoneyWalletConfirmPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm.page */ 9080);




const routes = [{
  path: '',
  component: _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletConfirmPage
}];
let AddMoneyWalletConfirmPageRoutingModule = class AddMoneyWalletConfirmPageRoutingModule {};
AddMoneyWalletConfirmPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AddMoneyWalletConfirmPageRoutingModule);


/***/ }),

/***/ 98383:
/*!*****************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPageModule: () => (/* binding */ AddMoneyWalletConfirmPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5995);
/* harmony import */ var _add_money_wallet_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm-routing.module */ 54694);
/* harmony import */ var _add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-money-wallet-confirm.page */ 9080);







let AddMoneyWalletConfirmPageModule = class AddMoneyWalletConfirmPageModule {};
AddMoneyWalletConfirmPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_money_wallet_confirm_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddMoneyWalletConfirmPageRoutingModule],
  declarations: [_add_money_wallet_confirm_page__WEBPACK_IMPORTED_MODULE_1__.AddMoneyWalletConfirmPage]
})], AddMoneyWalletConfirmPageModule);


/***/ }),

/***/ 9080:
/*!***************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMoneyWalletConfirmPage: () => (/* binding */ AddMoneyWalletConfirmPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 24398);
/* harmony import */ var _add_money_wallet_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-money-wallet-confirm.page.html?ngResource */ 14788);
/* harmony import */ var _add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-money-wallet-confirm.page.scss?ngResource */ 77732);
/* harmony import */ var _add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ 58379);







let AddMoneyWalletConfirmPage = class AddMoneyWalletConfirmPage {
  constructor(util, router, appData) {
    this.util = util;
    this.router = router;
    this.appData = appData;
    this.appData.newTheme = this.util.getNewTheme();
  }
  ngOnInit() {
    this.util.showToast('Money added to wallet successfully', 'bottom');
    setTimeout(() => {
      this.router.navigate(['/wallet']);
    }, 2000);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_util_provider__WEBPACK_IMPORTED_MODULE_2__.UtilProvider
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _services__WEBPACK_IMPORTED_MODULE_3__.AppData
  }];
};
AddMoneyWalletConfirmPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-add-money-wallet-confirm',
  template: _add_money_wallet_confirm_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_add_money_wallet_confirm_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [_services_util_provider__WEBPACK_IMPORTED_MODULE_2__.UtilProvider, _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router, _services__WEBPACK_IMPORTED_MODULE_3__.AppData])], AddMoneyWalletConfirmPage);


/***/ }),

/***/ 77732:
/*!****************************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 14788:
/*!****************************************************************************************!*\
  !*** ./src/app/add-money-wallet-confirm/add-money-wallet-confirm.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>add-money-wallet-confirm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_add-money-wallet-confirm_add-money-wallet-confirm_module_ts.js.map