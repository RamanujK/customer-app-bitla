"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[4183],{

/***/ 74183:
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_img: () => (/* binding */ Img)
/* harmony export */ });
/* harmony import */ var _index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-527b9e34.js */ 96317);
/* harmony import */ var _helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-d94bc8ad.js */ 92486);
/* harmony import */ var _ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-b26f573e.js */ 12508);
/* harmony import */ var _index_cfd9c1f2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-cfd9c1f2.js */ 8736);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
const IonImgStyle0 = imgCss;
const Img = class {
  constructor(hostRef) {
    (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.ionImgWillLoad = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "ionImgDidLoad", 7);
    this.ionError = (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "ionError", 7);
    this.inheritedAttributes = {};
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
    this.loadSrc = undefined;
    this.loadError = undefined;
    this.alt = undefined;
    this.src = undefined;
  }
  srcChanged() {
    this.addIO();
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_d94bc8ad_js__WEBPACK_IMPORTED_MODULE_1__.h)(this.el, ['draggable']);
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === undefined) {
      return;
    }
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'isIntersecting' in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver(data => {
        /**
         * On slower devices, it is possible for an intersection observer entry to contain multiple
         * objects in the array. This happens when quickly scrolling an image into view and then out of
         * view. In this case, the last object represents the current state of the component.
         */
        if (data[data.length - 1].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  render() {
    const {
      loadSrc,
      alt,
      onLoad,
      loadError,
      inheritedAttributes
    } = this;
    const {
      draggable
    } = inheritedAttributes;
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.e, {
      key: 'da600442894427dee1974a28e545613afac69fca',
      class: (0,_ionic_global_b26f573e_js__WEBPACK_IMPORTED_MODULE_2__.b)(this)
    }, (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      key: '16df0c7069af86c0fa7ce5af598bc0f63b4eb71a',
      decoding: "async",
      src: loadSrc,
      alt: alt,
      onLoad: onLoad,
      onError: loadError,
      part: "image",
      draggable: isDraggable(draggable)
    }));
  }
  get el() {
    return (0,_index_527b9e34_js__WEBPACK_IMPORTED_MODULE_0__.f)(this);
  }
  static get watchers() {
    return {
      "src": ["srcChanged"]
    };
  }
};
/**
 * Enumerated strings must be set as booleans
 * as Stencil will not render 'false' in the DOM.
 * The need to explicitly render draggable="true"
 * as only certain elements are draggable by default.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable.
 */
const isDraggable = draggable => {
  switch (draggable) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return undefined;
  }
};
Img.style = IonImgStyle0;


/***/ })

}]);