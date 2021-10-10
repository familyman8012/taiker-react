(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoTop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Shared\\GoTop.js";


class GoTop extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const {
      is_visible
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "scroll-to-top",
      children: is_visible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: "fas fa-chevron-up",
        onClick: () => this.scrollToTop()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Shared\\Loader.js";




class Loader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: `preloader ${this.props.loading ? '' : 'preloader-deactivate'}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "loader",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "shadow"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "box"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "AppInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.AppInitialProps;
  }
}));
Object.defineProperty(exports, "NextWebVitalsMetric", ({
  enumerable: true,
  get: function () {
    return _utils.NextWebVitalsMetric;
  }
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _appGetInitialProps() {
  _appGetInitialProps =
  /**
  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
  * This allows for keeping state between navigation, custom error handling, injecting additional data.
  */
  _asyncToGenerator(function* ({
    Component,
    ctx
  }) {
    const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

function appGetInitialProps(_) {
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps));
  }

}

App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
exports.default = App;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/bootstrap.min.css */ "./assets/css/bootstrap.min.css");
/* harmony import */ var _assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/css/fontawesome.min.css */ "./assets/css/fontawesome.min.css");
/* harmony import */ var _assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/animate.min.css */ "./assets/css/animate.min.css");
/* harmony import */ var _assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/flaticon.css */ "./assets/css/flaticon.css");
/* harmony import */ var _assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_flaticon_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/boxicons.min.css */ "./assets/css/boxicons.min.css");
/* harmony import */ var _assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ "./node_modules/react-modal-video/css/modal-video.min.css");
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/css/responsive.css */ "./assets/css/responsive.css");
/* harmony import */ var _assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_css_responsive_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Shared/Loader */ "./components/Shared/Loader.js");
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_16__.initStore)(class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_13___default()) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: true
    });
  }

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({
      loading: false
    }), 2000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_14___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("title", {
          children: "Taiker - React Next IT Startups & SEO Agency Template"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_12__.Provider, {
        store: store,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_17__.default, {
        loading: this.state.loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_18__.default, {
        scrollStepInPx: "50",
        delayInMs: "16.66"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, this)]
    }, void 0, true);
  }

}));

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TO_CART": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "REMOVE_ITEM": () => (/* binding */ REMOVE_ITEM),
/* harmony export */   "SUB_QUANTITY": () => (/* binding */ SUB_QUANTITY),
/* harmony export */   "ADD_QUANTITY": () => (/* binding */ ADD_QUANTITY),
/* harmony export */   "ADD_SHIPPING": () => (/* binding */ ADD_SHIPPING),
/* harmony export */   "ADD_QUANTITY_WITH_NUMBER": () => (/* binding */ ADD_QUANTITY_WITH_NUMBER),
/* harmony export */   "ORDER_FORM": () => (/* binding */ ORDER_FORM),
/* harmony export */   "CHECKOUT_CHARGE": () => (/* binding */ CHECKOUT_CHARGE),
/* harmony export */   "RESET_CART": () => (/* binding */ RESET_CART)
/* harmony export */ });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initStore": () => (/* binding */ initStore)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initState = {
  products: [{
    id: 1,
    title: "Novel Bunch",
    price: 455.50,
    image: "/images/shop/item1.jpg",
    imageHover: "/images/shop/item1-hover.jpg"
  }, {
    id: 2,
    title: "Book Chicks",
    price: 541.50,
    image: "/images/shop/item2.jpg",
    imageHover: "/images/shop/item2-hover.jpg"
  }, {
    id: 3,
    title: "Book Divas",
    price: 140.50,
    image: "/images/shop/item3.jpg",
    imageHover: "/images/shop/item3-hover.jpg"
  }, {
    id: 4,
    title: "Book Smart",
    price: 600.00,
    image: "/images/shop/item4.jpg",
    imageHover: "/images/shop/item4-hover.jpg"
  }, {
    id: 5,
    title: "Book Broads",
    price: 655.50,
    image: "/images/shop/item5.jpg",
    imageHover: "/images/shop/item5-hover.jpg"
  }, {
    id: 6,
    title: "Page Turners",
    price: 415.00,
    image: "/images/shop/item6.jpg",
    imageHover: "/images/shop/item6-hover.jpg"
  }],
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_QUANTITY_WITH_NUMBER) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.SUB_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.ADD_SHIPPING) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_2__.RESET_CART) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(cartReducer, initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)()));
};

/***/ }),

/***/ "./assets/css/animate.min.css":
/*!************************************!*\
  !*** ./assets/css/animate.min.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./assets/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/boxicons.min.css":
/*!*************************************!*\
  !*** ./assets/css/boxicons.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/flaticon.css":
/*!*********************************!*\
  !*** ./assets/css/flaticon.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/fontawesome.min.css":
/*!****************************************!*\
  !*** ./assets/css/fontawesome.min.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/responsive.css":
/*!***********************************!*\
  !*** ./assets/css/responsive.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFFZGEsWUFGYyxFQUdkeEIsNkVBQW1CLENBQUNELHNEQUFlLEVBQWhCLENBSEwsQ0FBbEI7QUFLSCxDQU5NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBYTlMUDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3RhaWtlci8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vc3RvcmUvYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zLmpzIiwid2VicGFjazovL3RhaWtlci8uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLmpzIiwid2VicGFjazovL3RhaWtlci8uL2Fzc2V0cy9jc3MvYW5pbWF0ZS5taW4uY3NzIiwid2VicGFjazovL3RhaWtlci8uL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vYXNzZXRzL2Nzcy9ib3hpY29ucy5taW4uY3NzIiwid2VicGFjazovL3RhaWtlci8uL2Fzc2V0cy9jc3MvZmxhdGljb24uY3NzIiwid2VicGFjazovL3RhaWtlci8uL2Fzc2V0cy9jc3MvZm9udGF3ZXNvbWUubWluLmNzcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9hc3NldHMvY3NzL3Jlc3BvbnNpdmUuY3NzIiwid2VicGFjazovL3RhaWtlci8uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9yZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9zY3NzL21vZGFsLXZpZGVvLnNjc3MiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvVG9wIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzX3Zpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgc2Nyb2xsQ29tcG9uZW50ID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2Nyb2xsQ29tcG9uZW50LnRvZ2dsZVZpc2liaWxpdHkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc192aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpc192aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAge2lzX3Zpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXVwXCIgb25DbGljaz17KCkgPT4gdGhpcy5zY3JvbGxUb1RvcCgpfT48L2k+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIExvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJlbG9hZGVyICR7dGhpcy5wcm9wcy5sb2FkaW5nID8gJycgOiAncHJlbG9hZGVyLWRlYWN0aXZhdGUnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgX2FwcEdldEluaXRpYWxQcm9wcyA9IC8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgcGFnZVByb3BzKSkpO1xuICAgIH1cbn1cbkFwcC5vcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJpbXBvcnQgJy4uL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3MvZm9udGF3ZXNvbWUubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9hbmltYXRlLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3MvZmxhdGljb24uY3NzJztcclxuaW1wb3J0ICcuLi9hc3NldHMvY3NzL2JveGljb25zLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9zY3NzL21vZGFsLXZpZGVvLnNjc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LWltYWdlLWxpZ2h0Ym94L3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzJztcclxuXHJcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXInO1xyXG5pbXBvcnQgR29Ub3AgZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoXHJcbiAgICBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcblxyXG4gICAgICAgIC8vIFByZWxvYWRlclxyXG4gICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lckhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pLCAyMDAwKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lckhhbmRsZSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJIYW5kbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lckhhbmRsZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVuZGVyICgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+VGFpa2VyIC0gUmVhY3QgTmV4dCBJVCBTdGFydHVwcyAmIFNFTyBBZ2VuY3kgVGVtcGxhdGU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcmVsb2FkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRlciBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBHbyBUb3AgQnV0dG9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjUwXCIgZGVsYXlJbk1zPVwiMTYuNjZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pIiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcclxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0FERF9UT19DQVJUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcclxuZXhwb3J0IGNvbnN0IFNVQl9RVUFOVElUWSA9ICdTVUJfUVVBTlRJVFknO1xyXG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZID0gJ0FERF9RVUFOVElUWSc7XHJcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcclxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUiA9ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInO1xyXG5leHBvcnQgY29uc3QgT1JERVJfRk9STSA9ICdPUkRFUl9GT1JNJztcclxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVCA9ICdSRVNFVF9DQVJUJzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgQUREX1RPX0NBUlQsXHJcbiAgICBSRU1PVkVfSVRFTSxcclxuICAgIFNVQl9RVUFOVElUWSxcclxuICAgIEFERF9RVUFOVElUWSwgXHJcbiAgICBBRERfU0hJUFBJTkcsXHJcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXHJcbiAgICBSRVNFVF9DQVJUXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zJ1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgcHJvZHVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOb3ZlbCBCdW5jaFwiLFxyXG4gICAgICAgICAgICBwcmljZTogNDU1LjUwLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Nob3AvaXRlbTEuanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9zaG9wL2l0ZW0xLWhvdmVyLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJCb29rIENoaWNrc1wiLFxyXG4gICAgICAgICAgICBwcmljZTogNTQxLjUwLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Nob3AvaXRlbTIuanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9zaG9wL2l0ZW0yLWhvdmVyLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJCb29rIERpdmFzXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxNDAuNTAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC9pdGVtMy5qcGdcIixcclxuICAgICAgICAgICAgaW1hZ2VIb3ZlcjogXCIvaW1hZ2VzL3Nob3AvaXRlbTMtaG92ZXIuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkJvb2sgU21hcnRcIixcclxuICAgICAgICAgICAgcHJpY2U6IDYwMC4wMCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wL2l0ZW00LmpwZ1wiLFxyXG4gICAgICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvc2hvcC9pdGVtNC1ob3Zlci5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQm9vayBCcm9hZHNcIixcclxuICAgICAgICAgICAgcHJpY2U6IDY1NS41MCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wL2l0ZW01LmpwZ1wiLFxyXG4gICAgICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvc2hvcC9pdGVtNS1ob3Zlci5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgdGl0bGU6IFwiUGFnZSBUdXJuZXJzXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA0MTUuMDAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC9pdGVtNi5qcGdcIixcclxuICAgICAgICAgICAgaW1hZ2VIb3ZlcjogXCIvaW1hZ2VzL3Nob3AvaXRlbTYtaG92ZXIuanBnXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYWRkZWRJdGVtczpbXSxcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgc2hpcHBpbmc6IDBcclxufVxyXG5cclxuY29uc3QgY2FydFJlZHVjZXI9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgIFxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DQVJUKXtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIpe1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcclxuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZihleGlzdGVkX2l0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTSl7XHJcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUucHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFkpe1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBTVUJfUVVBTlRJVFkpeyAgXHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXHJcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgaWYoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKXtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5wcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFU0VUX0NBUlQpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBpbml0U3RhdGUpID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgICAgICBjYXJ0UmVkdWNlcixcclxuICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICAgIClcclxufSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJHb1RvcCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImlzX3Zpc2libGUiLCJjb21wb25lbnREaWRNb3VudCIsInNjcm9sbENvbXBvbmVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzZXRTdGF0ZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInJlbmRlciIsIkxvYWRlciIsImxvYWRpbmciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiQXBwIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJQcm92aWRlciIsIkhlYWQiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJNeUFwcCIsInRpbWVySGFuZGxlIiwic2V0VGltZW91dCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJUaW1lb3V0Iiwic3RvcmUiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJpbml0U3RhdGUiLCJwcm9kdWN0cyIsImlkIiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwiaW1hZ2VIb3ZlciIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsIm5ld1RvdGFsIiwicXR5IiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwiaW5pdGlhbFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==