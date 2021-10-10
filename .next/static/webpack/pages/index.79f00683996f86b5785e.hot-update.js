self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Common/OurTeamTwo.js":
/*!*****************************************!*\
  !*** ./components/Common/OurTeamTwo.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
// import React, { Component } from 'react';
// import Link from 'next/link';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(import('react-owl-carousel3'));
// const options = {
//     loop: true,
//     nav: true,
//     dots: false,
//     margin: 30,
//     autoplayHoverPause: true,
//     autoplay: true,
//     mouseDrag: false,
//     touchDrag: false,
//     navText: [
//         "<i class='flaticon-left-chevron'></i>",
//         "<i class='flaticon-right-chevron'></i>"
//     ],
//     responsive: {
//         0: {
//             items: 1,
//         },
//         576: {
//             items: 2,
//         },
//         768: {
//             items: 3,
//         }
//     }
// }
// class OurTeamTwo extends Component {
//     _isMounted = false;
//     state = {
//         display:false
//     }
//     componentDidMount(){ 
//         this._isMounted = true;
//         this.setState({ display: true }) 
//     }
//     componentWillUnmount() {
//         this._isMounted = false;
//     }
//     render() {
//         return (
//         <>
//             <section className="team-area ptb-100">
//             <div className="container">
//                 <div className="section-title">
//                 <span className="sub-title">YY Agency 팀</span>
//                 <h2>YY Agency의 전문 인력</h2>
//                 </div>
//                 {this.state.display ? (
//                 <OwlCarousel
//                     className="team-slider owl-carousel owl-theme"
//                     {...options}
//                 >
//                     <div className="single-team-box">
//                     <div className="image">
//                         <img src="/images/team-image/team10.jpg" alt="team" />
//                         <div className="social">
//                         <a href="https://www.linkedin.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         <a href="https://www.facebook.com/" target="_blank">
//                             <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="https://twitter.com/" target="_blank">
//                             <i className="fab fa-twitter"></i>
//                         </a>
//                         <a href="https://www.instagram.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <h3>Classy</h3>
//                         <span>CEO & Full Stack Developer</span>
//                     </div>
//                     </div>
//                     <div className="single-team-box">
//                     <div className="image">
//                         <img src="/images/team-image/team11.jpg" alt="team" />
//                         <div className="social">
//                         <a href="https://www.linkedin.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         <a href="https://www.facebook.com/" target="_blank">
//                             <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="https://twitter.com/" target="_blank">
//                             <i className="fab fa-twitter"></i>
//                         </a>
//                         <a href="https://www.instagram.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <h3>Vicky</h3>
//                         <span>Full Stack Developer</span>
//                     </div>
//                     </div>
//                     <div className="single-team-box">
//                     <div className="image">
//                         <img src="/images/team-image/team12.jpg" alt="team" />
//                         <div className="social">
//                         <a href="https://www.linkedin.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         <a href="https://www.facebook.com/" target="_blank">
//                             <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="https://twitter.com/" target="_blank">
//                             <i className="fab fa-twitter"></i>
//                         </a>
//                         <a href="https://www.instagram.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <h3>Megan</h3>
//                         <span>Planer</span>
//                     </div>
//                     </div>
//                     <div className="single-team-box">
//                     <div className="image">
//                         <img src="/images/team-image/team13.jpg" alt="team" />
//                         <div className="social">
//                         <a href="https://www.linkedin.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         <a href="https://www.facebook.com/" target="_blank">
//                             <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="https://twitter.com/" target="_blank">
//                             <i className="fab fa-twitter"></i>
//                         </a>
//                         <a href="https://www.instagram.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <h3>Jin</h3>
//                         <span>Web Designer</span>
//                     </div>
//                     </div>
//                     <div className="single-team-box">
//                     <div className="image">
//                         <img src="/images/team-image/team14.jpg" alt="team" />
//                         <div className="social">
//                         <a href="https://www.linkedin.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         <a href="https://www.facebook.com/" target="_blank">
//                             <i className="fab fa-facebook-f"></i>
//                         </a>
//                         <a href="https://twitter.com/" target="_blank">
//                             <i className="fab fa-twitter"></i>
//                         </a>
//                         <a href="https://www.instagram.com/" target="_blank">
//                             <i className="fab fa-instagram"></i>
//                         </a>
//                         </div>
//                     </div>
//                     <div className="content">
//                         <h3>Yeon</h3>
//                         <span>Web Designer</span>
//                     </div>
//                     </div>
//                 </OwlCarousel>
//                 ) : (
//                 ""
//                 )}
//             </div>
//             {/* Animation shape image */}
//             <div className="shape-img2">
//                 <img src="/images/shape/shape2.svg" alt="image" />
//             </div>
//             <div className="shape-img3">
//                 <img src="/images/shape/shape3.svg" alt="image" />
//             </div>
//             <div className="shape-img4">
//                 <img src="/images/shape/shape4.png" alt="image" />
//             </div>
//             <div className="shape-img5">
//                 <img src="/images/shape/shape5.png" alt="image" />
//             </div>
//             <div className="shape-img6">
//                 <img src="/images/shape/shape6.png" alt="image" />
//             </div>
//             <div className="shape-img9">
//                 <img src="/images/shape/shape9.png" alt="image" />
//             </div>
//             <div className="shape-img10">
//                 <img src="/images/shape/shape10.png" alt="image" />
//             </div>
//             </section>
//         </>
//         );
//     }
// }
// export default OurTeamTwo;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/NavbarTwo */ "./components/Layout/NavbarTwo.js");
/* harmony import */ var _components_HomeNine_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomeNine/Banner */ "./components/HomeNine/Banner.js");
/* harmony import */ var _components_HomeNine_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HomeNine/Projects */ "./components/HomeNine/Projects.js");
/* harmony import */ var _components_Common_FunFacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/FunFacts */ "./components/Common/FunFacts.js");
/* harmony import */ var _components_Common_TestimonialsTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/TestimonialsTwo */ "./components/Common/TestimonialsTwo.js");
/* harmony import */ var _components_Pricing_PricingStyleFive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Pricing/PricingStyleFive */ "./components/Pricing/PricingStyleFive.js");
/* harmony import */ var _components_Common_OurTeamTwo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Common/OurTeamTwo */ "./components/Common/OurTeamTwo.js");
/* harmony import */ var _components_Common_OurTeamTwo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Common_OurTeamTwo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Common_LetsGetToWork__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Common/LetsGetToWork */ "./components/Common/LetsGetToWork.js");
/* harmony import */ var _components_HomeSeven_Clients__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/HomeSeven/Clients */ "./components/HomeSeven/Clients.js");
/* harmony import */ var _components_Common_SubscribeBoxed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Common/SubscribeBoxed */ "./components/Common/SubscribeBoxed.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var Index9 = /*#__PURE__*/function (_Component) {
  (0,C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Index9, _Component);

  var _super = _createSuper(Index9);

  function Index9() {
    (0,C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Index9);

    return _super.apply(this, arguments);
  }

  (0,C_Users_Desktop_YYAgency_taiker_react_next_it_startups_seo_agency_template_taiker_react_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Index9, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_HomeNine_Banner__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_HomeNine_Projects__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Common_FunFacts__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Common_TestimonialsTwo__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Pricing_PricingStyleFive__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((_components_Common_OurTeamTwo__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Common_LetsGetToWork__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this)]
      }, void 0, true);
    }
  }]);

  return Index9;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index9);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzlmMDA2ODM5OTZmODZiNTc4NWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBSTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7SUFFTWE7Ozs7Ozs7Ozs7Ozs7V0FDRixrQkFBUztBQUNMLDBCQUNJO0FBQUEsZ0NBQ0ksK0RBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLCtEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSwrREFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUksK0RBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLCtEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSwrREFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0ksK0RBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVFJLCtEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFXSSwrREFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUEsc0JBREo7QUFlSDs7OztFQWpCZ0JaOztBQW9CckIsK0RBQWVZLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vT3VyVGVhbVR3by5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiICAgIC8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbiAgICAvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4gICAgLy8gaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuICAgIC8vIGNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LW93bC1jYXJvdXNlbDMnKSk7XHJcblxyXG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIC8vICAgICBsb29wOiB0cnVlLFxyXG4gICAgLy8gICAgIG5hdjogdHJ1ZSxcclxuICAgIC8vICAgICBkb3RzOiBmYWxzZSxcclxuICAgIC8vICAgICBtYXJnaW46IDMwLFxyXG4gICAgLy8gICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgIC8vICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIC8vICAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgLy8gICAgIHRvdWNoRHJhZzogZmFsc2UsXHJcbiAgICAvLyAgICAgbmF2VGV4dDogW1xyXG4gICAgLy8gICAgICAgICBcIjxpIGNsYXNzPSdmbGF0aWNvbi1sZWZ0LWNoZXZyb24nPjwvaT5cIixcclxuICAgIC8vICAgICAgICAgXCI8aSBjbGFzcz0nZmxhdGljb24tcmlnaHQtY2hldnJvbic+PC9pPlwiXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAvLyAgICAgICAgIDA6IHtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICA1NzY6IHtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICA3Njg6IHtcclxuICAgIC8vICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNsYXNzIE91clRlYW1Ud28gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8vICAgICBfaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgc3RhdGUgPSB7XHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6ZmFsc2VcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGNvbXBvbmVudERpZE1vdW50KCl7IFxyXG4gICAgLy8gICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogdHJ1ZSB9KSBcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJlbmRlcigpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIChcclxuICAgIC8vICAgICAgICAgPD5cclxuICAgIC8vICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlYW0tYXJlYSBwdGItMTAwXCI+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPllZIEFnZW5jeSDtjIA8L3NwYW4+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGgyPllZIEFnZW5jeeydmCDsoITrrLgg7J2466ClPC9oMj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IChcclxuICAgIC8vICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVhbS1zbGlkZXIgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgID5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVhbS1ib3hcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RlYW0taW1hZ2UvdGVhbTEwLmpwZ1wiIGFsdD1cInRlYW1cIiAvPlxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2xhc3N5PC9oMz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNFTyAmIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9zcGFuPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZWFtLWJveFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdGVhbS1pbWFnZS90ZWFtMTEuanBnXCIgYWx0PVwidGVhbVwiIC8+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WaWNreTwvaDM+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GdWxsIFN0YWNrIERldmVsb3Blcjwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVhbS1ib3hcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RlYW0taW1hZ2UvdGVhbTEyLmpwZ1wiIGFsdD1cInRlYW1cIiAvPlxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWVnYW48L2gzPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxhbmVyPC9zcGFuPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZWFtLWJveFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdGVhbS1pbWFnZS90ZWFtMTMuanBnXCIgYWx0PVwidGVhbVwiIC8+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5KaW48L2gzPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2ViIERlc2lnbmVyPC9zcGFuPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZWFtLWJveFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdGVhbS1pbWFnZS90ZWFtMTQuanBnXCIgYWx0PVwidGVhbVwiIC8+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5ZZW9uPC9oMz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlYiBEZXNpZ25lcjwvc3Bhbj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgIC8vICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgKX1cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHsvKiBBbmltYXRpb24gc2hhcGUgaW1hZ2UgKi99XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzJcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGUyLnN2Z1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWczXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMy5zdmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nNFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTQucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzVcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGU1LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc2XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nOVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTkucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzEwXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMTAucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAvLyAgICAgICAgIDwvPlxyXG4gICAgLy8gICAgICAgICApO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBleHBvcnQgZGVmYXVsdCBPdXJUZWFtVHdvOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZiYXJUd28gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyVHdvJztcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVOaW5lL0Jhbm5lcic7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVOaW5lL1Byb2plY3RzJztcclxuaW1wb3J0IEZ1bkZhY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0Z1bkZhY3RzJztcclxuaW1wb3J0IFRlc3RpbW9uaWFsc1R3byBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9UZXN0aW1vbmlhbHNUd28nO1xyXG5pbXBvcnQgUHJpY2luZ1N0eWxlRml2ZSBmcm9tICcuLi9jb21wb25lbnRzL1ByaWNpbmcvUHJpY2luZ1N0eWxlRml2ZSc7XHJcbmltcG9ydCBPdXJUZWFtVHdvIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL091clRlYW1Ud28nO1xyXG5pbXBvcnQgTGV0c0dldFRvV29yayBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9MZXRzR2V0VG9Xb3JrJztcclxuaW1wb3J0IENsaWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lU2V2ZW4vQ2xpZW50cyc7XHJcbmltcG9ydCBTdWJzY3JpYmVCb3hlZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9TdWJzY3JpYmVCb3hlZCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyJztcclxuXHJcbmNsYXNzIEluZGV4OSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXJUd28gLz5cclxuICAgICAgICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICAgICAgICAgICAgPEZ1bkZhY3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8VGVzdGltb25pYWxzVHdvIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2luZ1N0eWxlRml2ZSAvPlxyXG4gICAgICAgICAgICAgICAgPE91clRlYW1Ud28gLz5cclxuICAgICAgICAgICAgICAgIDxMZXRzR2V0VG9Xb3JrIC8+IFxyXG4gICAgICAgICAgICAgICAgey8qIDxDbGllbnRzIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxTdWJzY3JpYmVCb3hlZCAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPiBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg5OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk5hdmJhclR3byIsIkJhbm5lciIsIlByb2plY3RzIiwiRnVuRmFjdHMiLCJUZXN0aW1vbmlhbHNUd28iLCJQcmljaW5nU3R5bGVGaXZlIiwiT3VyVGVhbVR3byIsIkxldHNHZXRUb1dvcmsiLCJDbGllbnRzIiwiU3Vic2NyaWJlQm94ZWQiLCJGb290ZXIiLCJJbmRleDkiXSwic291cmNlUm9vdCI6IiJ9