(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Common/FunFacts.js":
/*!***************************************!*\
  !*** ./components/Common/FunFacts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Common\\FunFacts.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class FunFacts extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      didViewCountUp: false
    });

    _defineProperty(this, "onVisibilityChange", isVisible => {
      if (isVisible) {
        this.setState({
          didViewCountUp: true
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
        className: "fun-facts-area ptb-100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "col-lg-3 col-sm-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "single-fun-facts",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "odometer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
                      onChange: this.onVisibilityChange,
                      offset: {
                        top: 10
                      },
                      delayedCall: true,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
                        start: 0,
                        end: this.state.didViewCountUp ? 128 : 0,
                        duration: 3
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 34,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "sign-icon",
                    children: "+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: "\uC644\uB8CC\uB41C \uD504\uB85C\uC81D\uD2B8"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "back-text",
                  children: "P"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "col-lg-3 col-sm-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "single-fun-facts",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "odometer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
                      onChange: this.onVisibilityChange,
                      offset: {
                        top: 10
                      },
                      delayedCall: true,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
                        start: 0,
                        end: this.state.didViewCountUp ? 100 : 0,
                        duration: 3
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "sign-icon",
                    children: "%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: "\uACE0\uAC1D \uB9CC\uC871\uB3C4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "back-text",
                  children: "C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "col-lg-3 col-sm-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "single-fun-facts",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "odometer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
                      onChange: this.onVisibilityChange,
                      offset: {
                        top: 10
                      },
                      delayedCall: true,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
                        start: 0,
                        end: this.state.didViewCountUp ? 15 : 0,
                        duration: 3
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: "YY Agnecy\uC758 \uD68C\uC6D0\uC0AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "back-text",
                  children: "A"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "col-lg-3 col-sm-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "single-fun-facts",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "odometer",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
                      onChange: this.onVisibilityChange,
                      offset: {
                        top: 10
                      },
                      delayedCall: true,
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
                        start: 0,
                        end: this.state.didViewCountUp ? 17 : 0,
                        duration: 3
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "sign-icon",
                    children: "+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: "\uC804\uBB38 \uC778\uB825"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "back-text",
                  children: "E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunFacts);

/***/ }),

/***/ "./components/Common/LetsGetToWork.js":
/*!********************************************!*\
  !*** ./components/Common/LetsGetToWork.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Common\\LetsGetToWork.js";




class LetsGetToWork extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      className: "subscribe-area bg-F4F7FC",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "subscribe-inner-area lets-work jarallax",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "row align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "col-lg-6",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: "sub-title",
                children: "READY TO DO THIS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: "Let's get to work!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "contact-btn",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn",
                    children: ["Contact Us ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 56
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LetsGetToWork);

/***/ }),

/***/ "./components/Common/OurTeamTwo.js":
/*!*****************************************!*\
  !*** ./components/Common/OurTeamTwo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Common\\OurTeamTwo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-owl-carousel3 */ "react-owl-carousel3", 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ["..\\components\\Common\\OurTeamTwo.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  dots: false,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: false,
  touchDrag: false,
  navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    }
  }
};

class OurTeamTwo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
        className: "team-area ptb-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: "sub-title",
              children: "YY Agency \uD300"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              children: "YY Agency\uC758 \uC804\uBB38 \uC778\uB825"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, this), this.state.display ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(OwlCarousel, _objectSpread(_objectSpread({
            className: "team-slider owl-carousel owl-theme"
          }, options), {}, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "single-team-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "image",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: "/images/team-image/team10.jpg",
                  alt: "team"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "social",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.facebook.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-facebook-f"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://twitter.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.instagram.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: "Classy"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: "CEO & Full Stack Developer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "single-team-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "image",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: "/images/team-image/team11.jpg",
                  alt: "team"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "social",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.facebook.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-facebook-f"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://twitter.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.instagram.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: "Vicky"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: "Full Stack Developer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "single-team-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "image",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: "/images/team-image/team12.jpg",
                  alt: "team"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "social",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.facebook.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-facebook-f"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://twitter.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.instagram.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: "Megan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: "Planer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "single-team-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "image",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: "/images/team-image/team13.jpg",
                  alt: "team"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "social",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.facebook.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-facebook-f"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://twitter.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.instagram.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: "Jin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: "Web Designer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "single-team-box",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "image",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  src: "/images/team-image/team14.jpg",
                  alt: "team"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "social",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.facebook.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-facebook-f"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://twitter.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 29
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                    href: "https://www.instagram.com/",
                    target: "_blank",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
                      className: "fab fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                  children: "Yeon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  children: "Web Designer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 25
            }, this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, this) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "shape-img2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/images/shape/shape2.svg",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "shape-img3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/images/shape/shape3.svg",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "shape-img4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/images/shape/shape4.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "shape-img5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/images/shape/shape5.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "shape-img6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/images/shape/shape6.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "shape-img9",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/images/shape/shape9.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "shape-img10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/images/shape/shape10.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OurTeamTwo);

/***/ }),

/***/ "./components/Common/SubscribeBoxed.js":
/*!*********************************************!*\
  !*** ./components/Common/SubscribeBoxed.js ***!
  \*********************************************/
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
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Common\\SubscribeBoxed.js";




class SubscribeBoxed extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
        className: "subscribe-area ptb-100 pt-0 bg-F4F7FC",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "subscribe-inner-area",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "subscribe-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                className: "sub-title",
                children: "Get Started Instantly!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "Get on only new update from this newsletter!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                className: "newsletter-form",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                  type: "email",
                  className: "input-newsletter",
                  placeholder: "Enter your email",
                  name: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  type: "submit",
                  children: "Subscribe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "shape-img2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "/images/shape/shape2.svg",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "shape-img3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "/images/shape/shape3.svg",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "shape-img4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "/images/shape/shape4.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "shape-img5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "/images/shape/shape5.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "shape-img6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "/images/shape/shape6.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscribeBoxed);

/***/ }),

/***/ "./components/Common/TestimonialsTwo.js":
/*!**********************************************!*\
  !*** ./components/Common/TestimonialsTwo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Common\\TestimonialsTwo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-owl-carousel3 */ "react-owl-carousel3", 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ["..\\components\\Common\\TestimonialsTwo.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: false,
  touchDrag: false,
  navText: ["<i className='flaticon-left-chevron'></i>", "<i className='flaticon-right-chevron'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    },
    1550: {
      items: 4
    }
  }
};

class TestimonialsTwo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
        className: "feedback-area feedback-area-two ptb-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "sub-title",
              children: "Review"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
              children: "\uACE0\uAC1D \uB9AC\uBDF0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, this), this.state.display ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(OwlCarousel, _objectSpread(_objectSpread({
          className: "feedback-slides owl-carousel owl-theme"
        }, options), {}, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "single-feedback-item border",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "\u201C\uCEF4\uD478\uD130\uB97C \uC798 \uBABB\uD574\uC11C \uD648\uD398\uC774\uC9C0 \uAD00\uB9AC\uC5D0 \uC5B4\uB824\uC6C0\uC744 \uB290\uAF08\uB294\uB370 YY Agency\uC5D0\uC11C \uAD50\uC721\uB3C4 \uB108\uBB34 \uCE5C\uC808\uD558\uAC8C \uD574\uC8FC\uC2E0 \uB355\uBD84\uC5D0 \uC800\uD76C \uAC00\uAC8C \uB9E4\uCD9C\uB3C4 \uB9CE\uC740 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uC5B4\uC694 \uAC10\uC0AC\uD574\uC694\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "client-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                children: "\uCEE4\uD53C\uD30C\uB294 \uCCAD\uB144 \uACE0\uAC1D\uB2D8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "single-feedback-item border",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "\"YY Agency \uC9C1\uC6D0\uBD84\uB4E4 \uB108\uBB34 \uCE5C\uC808 \uD558\uC138\uC694. \uCC98\uC74C \uD558\uB294 \uC7A5\uC0AC\uB77C\uC11C \uB108\uBB34 \uAC71\uC815 \uB9CE\uC558\uB294\uB370 \uB355\uBD84\uC5D0 \uB108\uBB34 \uC774\uC058\uACE0 \uD3B8\uB9AC\uD55C \uBC18\uC751\uD615 \uC6F9\uC0AC\uC774\uD2B8\uAC00 \uB098\uC640\uC11C \uB108\uBB34 \uC798 \uC774\uC6A9\uD558\uACE0 \uC788\uC5B4\uC694\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "client-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                children: "\uC0B4\uB871\uD558\uB294\uC0C8\uB301 \uACE0\uAC1D\uB2D8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "single-feedback-item border",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "\u201C\uB9C8\uCF13\uD305 \uAD50\uC721 \uB108\uBB34 \uC88B\uC544\uC694. \uADF8\uB9AC\uACE0 \uC5EC\uB7EC \uB300\uD45C\uB2D8\uB4E4\uACFC \uAD50\uB958 \uD560 \uC218 \uC788\uB294 \uCEE8\uD3EC\uB7F0\uC2A4\uB3C4 \uB108\uBB34 \uB3C4\uC6C0\uC774 \uB9CE\uC774 \uB418\uACE0 \uC788\uC5B4\uC694 \uB108\uBB34 \uB108\uBB34 \uAC10\uC0AC\uB4DC\uB824\uC694~~^^\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "client-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                children: "\uAE40XX\uC6D0\uC7A5 \uACE0\uAC1D\uB2D8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "single-feedback-item border",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "\u201CYY Agency \uB355\uBD84\uC5D0 \uB108\uBB34 \uD3B8\uD558\uAC8C \uC628\uB77C\uC778 \uC0AC\uC5C5\uC744 \uC2DC\uC791 \uD560 \uC218 \uC788\uC5B4\uC11C \uB108\uBB34 \uC88B\uC544\uC694. \uC9C1\uC6D0\uBD84\uB4E4 \uB2E4 \uB108\uBB34 \uCE5C\uC808\uD558\uAC8C \uC54C\uB824\uC8FC\uC2DC\uACE0 \uC2F8\uC774\uD2B8\uB3C4 \uB108\uBB34 \uC774\uC058\uACE0 \uAD00\uB9AC\uB3C4 \uB108\uBB34 \uD3B8\uD558\uB124\uC694\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "client-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                children: "\uC774XX \uACE0\uAC1D\uB2D8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "single-feedback-item border",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "\u201C\uC2E0\uC18D \uC815\uD655\uD55C \uC77C\uCC98\uB9AC\uC5D0 \uAC10\uD0C4 \uC911\uC774\uC5D0\uC694 \uC9C1\uC6D0\uBD84\uB4E4 \uB2E4 \uBCF8\uC778 \uC77C\uCC98\uB7FC \uAF3C\uAF3C\uD558\uAC8C \uC218\uC775&\uBC18\uC751\uD615 \uC6F9\uD398\uC774\uC9C0\uB97C \uB9CC\uB4E4\uC5B4 \uC8FC\uC154\uC11C \uB9E4\uCD9C\uC5D0 \uB108\uBB34 \uD070 \uB3C4\uC6C0\uC774 \uB418\uACE0 \uC788\uC5B4\uC694.\u201D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "client-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                children: "\uAE40XX \uACE0\uAC1D\uB2D8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, this)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialsTwo);

/***/ }),

/***/ "./components/HomeNine/Banner.js":
/*!***************************************!*\
  !*** ./components/HomeNine/Banner.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\HomeNine\\Banner.js";




class Banner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "portfolio-agency-banner pa-bg1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "d-table",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "d-table-cell",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "container mt-80",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "banner-content text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
                children: "\uACE0\uAC1D\uC758 \uBE44\uC9C0\uB2C8\uC2A4 \uC131\uACF5\uC744 \uAE30\uC6D0\uD569\uB2C8\uB2E4."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: " Wish your business success"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "banner-btn",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn mr-4",
                    children: ["\uC81C\uC791 \uBB38\uC758 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 39
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape2.svg",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape3.svg",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape4.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape5.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape6.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img7",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape7.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape8.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img9",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape9.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape10.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./components/HomeNine/Projects.js":
/*!*****************************************!*\
  !*** ./components/HomeNine/Projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\HomeNine\\Projects.js";




class Projects extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "works-area ptb-100",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
            children: "Our portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work1.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uC2EC\uB9AC\uC0C1\uB2F4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uB9C8\uC778\uB4DC\uCF00\uC5B4\uC13C\uD130"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  className: "work-btn",
                  children: "Read More"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work2.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uBC95\uBB34\uBC94\uC778"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "HOPE \uBC95\uBB34\uBC95\uC778"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://yymonkeys.dothome.co.kr/works/1/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "work-btn",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work3.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uD559\uC6D0/\uAD50\uC721"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "International \uC720\uCE58\uC6D0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://yymonkeys.dothome.co.kr/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "work-btn",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work4.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uC1FC\uD551"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "YY MARKET"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "https://yymarket.imweb.me/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "work-btn",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work5.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uC11C\uBE44\uC2A4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uC124\uB808\uC784\uC5F0\uAD6C\uC18C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "https://seolleim.kr/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "work-btn",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work6.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "GYM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "YY GYM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://yymonkeys.dothome.co.kr/works/3/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "work-btn",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work7.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uC778\uD14C\uB9AC\uC5B4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "Keyterior"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "https://keyterior.imweb.me/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "work-btn",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "work-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: "/images/works/work8.png",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "content text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "\uC1FC\uD551"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    children: "N STYLE"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "https://nstyle.imweb.me/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "work-btn",
                    children: "Read More"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-12 col-sm-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "pagination-area",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/projects3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  className: "prev page-numbers",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "fas fa-angle-double-left"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                className: "page-numbers current",
                children: "1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/projects3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  className: "page-numbers",
                  children: "2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/projects3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  className: "page-numbers",
                  children: "3"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/projects3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  className: "page-numbers",
                  children: "4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/projects3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  className: "next page-numbers",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "fas fa-angle-double-right"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./components/HomeSeven/Clients.js":
/*!*****************************************!*\
  !*** ./components/HomeSeven/Clients.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\HomeSeven\\Clients.js";





class Clients extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
        className: "partner-area ptb-100",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "section-title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "sub-title",
              children: "Clients"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
              children: "Our Loving Clients"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "row align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img1.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img1.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img2.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img2.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img3.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img3.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img4.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img4.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img5.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img5.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img6.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img6.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img7.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img7.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img8.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img8.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img9.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img9.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-partner-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "/partner",
                target: "_blank",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img10.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                  src: "/images/partner-image/partner-img10.png",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "shape-img2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "/images/shape/shape2.svg",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "shape-img3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "/images/shape/shape3.svg",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "shape-img4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "/images/shape/shape4.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "shape-img5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "/images/shape/shape5.png",
            alt: "image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Layout\\Footer.js";





class Footer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    let currentYear = new Date().getFullYear();
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
        className: "footer-area",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "col-lg-4 col-md-6 col-sm-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "single-footer-widget",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "Contact Info"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                  className: "footer-contact-info",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                      className: "flaticon-phone-call"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Mon to Fri : 10:00AM - 06:00PM"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "tel:+8201071452679",
                      children: "+8201071452679"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                      className: "flaticon-email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 24,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Do You Have a Question?"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "mailto:example@taiker.com",
                      children: "example@taiker.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                      className: "flaticon-social-media"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Socials Network"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                      className: "social",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                          href: "https://twitter.com/",
                          target: "_blank",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                            className: "fab fa-twitter"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 34,
                            columnNumber: 100
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                          href: "https://www.facebook.com/",
                          target: "_blank",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                            className: "fab fa-facebook-f"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 37,
                            columnNumber: 105
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 37,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                          href: "https://www.instagram.com/",
                          target: "_blank",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                            className: "fab fa-instagram"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 40,
                            columnNumber: 106
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                          href: "https://www.linkedin.com/",
                          target: "_blank",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                            className: "fab fa-linkedin"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 43,
                            columnNumber: 105
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                          href: "https://www.youtube.com/",
                          target: "_blank",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                            className: "fab fa-youtube"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 46,
                            columnNumber: 104
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 46,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 45,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "single-footer-widget pl-5",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "Instagram"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                  className: "footer-instagram-post",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                        src: "/images/instagram-image/insta-img1.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 62,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 60,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                        src: "/images/instagram-image/insta-img2.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                        src: "/images/instagram-image/insta-img3.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                        src: "/images/instagram-image/insta-img4.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                        src: "/images/instagram-image/insta-img5.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                        src: "/images/instagram-image/insta-img6.jpg",
                        alt: "image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "copyright-area",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "col-lg-6 col-sm-6 col-md-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: ["Copyright \xA9", currentYear, " YY Agency. All rights reserved ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "https://envytheme.com/",
                    target: "_blank",
                    children: "YY Agnecy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 61
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "col-lg-6 col-sm-6 col-md-6",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/terms-and-conditions",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                        children: "Terms & Conditions"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      href: "/privacy-policy",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                        children: "Privacy Policy"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./components/Layout/NavbarTwo.js":
/*!****************************************!*\
  !*** ./components/Layout/NavbarTwo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _SidebarModal_SidebarModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SidebarModal/SidebarModal */ "./components/SidebarModal/SidebarModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Layout\\NavbarTwo.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class NavbarTwo extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      sidebarModal: false
    });

    _defineProperty(this, "toggleModal", () => {
      this.setState({
        sidebarModal: !this.state.sidebarModal
      });
    });

    _defineProperty(this, "state", {
      searchForm: false
    });

    _defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      products
    } = this.props;
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        id: "navbar",
        className: "navbar-area navbar-area-two",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "adani-nav",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
              className: "navbar navbar-expand-md navbar-light",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  className: "navbar-brand",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                    src: "/images/logo.png",
                    className: "black-logo",
                    alt: "logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                    src: "/images/logo-white.png",
                    className: "white-logo",
                    alt: "logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                onClick: this.toggleNavbar,
                className: classTwo,
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "icon-bar top-bar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "icon-bar middle-bar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "icon-bar bottom-bar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: classOne,
                id: "navbarSupportedContent",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                  className: "navbar-nav",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    className: "nav-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "#",
                      activeClassName: "active",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "nav-link",
                        onClick: e => e.preventDefault(),
                        children: ["Home ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                          className: "fas fa-chevron-down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 58
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Home One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 100,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index2",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Home Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 106,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index3",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Home Three"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 111,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 110,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index4",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Home Four"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 116,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index5",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: ["Home Five", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                              className: "new",
                              children: "New"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 123,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 121,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 120,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index6",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: ["Home Six", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                              className: "new",
                              children: "New"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 131,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 129,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index7",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: ["Home Seven", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                              className: "new",
                              children: "New"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 139,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 137,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index8",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: ["Home Eight", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                              className: "new",
                              children: "New"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 147,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/index9",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: ["Home Nine", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                              className: "new",
                              children: "New"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 155,
                              columnNumber: 61
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 153,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    className: "nav-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "#",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "nav-link",
                        onClick: e => e.preventDefault(),
                        children: ["Pages ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                          className: "fas fa-chevron-down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 165,
                          columnNumber: 59
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/about",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "About Us Style One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 172,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/about2",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "About Us Style Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/team",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Team Style One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 182,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 181,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/team2",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Team Style Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 186,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/features",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Features"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 192,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 191,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/pricing",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Pricing"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 197,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/partner",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Partner"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 202,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/login",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Login"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 207,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 206,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/signup",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Signup"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 212,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 211,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/faq",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "FAQ"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 217,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 216,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/error",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "404 Error Page"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 222,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 221,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    className: "nav-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "#",
                      activeClassName: "active",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "nav-link",
                        onClick: e => e.preventDefault(),
                        children: ["Services ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                          className: "fas fa-chevron-down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 231,
                          columnNumber: 62
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/services",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Services Style One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 238,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 237,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 236,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/services2",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Services Style Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 243,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 242,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/services3",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Services Style Three"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 248,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 247,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/service-details",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Service Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 235,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    className: "nav-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "#",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "nav-link",
                        onClick: e => e.preventDefault(),
                        children: ["Projects ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                          className: "fas fa-chevron-down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 264,
                          columnNumber: 62
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/projects",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Projects Style One"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 271,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 270,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 269,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/projects2",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Projects Style Two"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 276,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 275,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/projects3",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Projects Style Three"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 281,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 280,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 279,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/projects4",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Projects Style Four"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 286,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 285,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/project-details",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Project Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 291,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 290,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 289,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 268,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    className: "nav-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "#",
                      activeClassName: "active",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "nav-link",
                        onClick: e => e.preventDefault(),
                        children: ["Shop ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                          className: "fas fa-chevron-down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 302,
                          columnNumber: 58
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 301,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/shop",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Shop"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 309,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 308,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 307,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/single-product",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Single product"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 314,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 313,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 312,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 306,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    className: "nav-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "#",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "nav-link",
                        onClick: e => e.preventDefault(),
                        children: ["Blog ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                          className: "fas fa-chevron-down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 323,
                          columnNumber: 58
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 322,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/blog",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Blog Grid"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 329,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 328,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 327,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/blog2",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Blog Right Sidebar"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 334,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 333,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 332,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                          href: "/blog-details",
                          activeClassName: "active",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "nav-link",
                            children: "Blog Details"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 339,
                            columnNumber: 57
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 338,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 337,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                    className: "nav-item",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "/contact",
                      activeClassName: "active",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "nav-link",
                        children: "Contact"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 347,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 346,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "others-options",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "cart-items",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "/cart",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                          className: "fas fa-shopping-cart"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 356,
                          columnNumber: 53
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: products.length
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 357,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 355,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "option-item",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                      onClick: this.handleSearchForm,
                      className: "search-btn flaticon-search",
                      style: {
                        display: this.state.searchForm ? 'none' : 'block'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 363,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                      onClick: this.handleSearchForm,
                      className: `close-btn flaticon-close ${this.state.searchForm ? 'active' : ''}`
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 371,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "search-overlay search-popup",
                      style: {
                        display: this.state.searchForm ? 'block' : 'none'
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "search-box",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
                          className: "search-form",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                            className: "search-input",
                            name: "search",
                            placeholder: "Search",
                            type: "text"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 384,
                            columnNumber: 57
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                            className: "search-button",
                            type: "submit",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                              className: "fas fa-search"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 386,
                              columnNumber: 61
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 385,
                            columnNumber: 57
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 383,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 382,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 376,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 362,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "burger-menu",
                    onClick: this.toggleModal,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 394,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 395,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 396,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_SidebarModal_SidebarModal__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: this.toggleModal,
        active: this.state.sidebarModal ? 'active' : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 17
      }, this)]
    }, void 0, true);
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(NavbarTwo)); // export default Navbar;

/***/ }),

/***/ "./components/Pricing/PricingStyleFive.js":
/*!************************************************!*\
  !*** ./components/Pricing/PricingStyleFive.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\Pricing\\PricingStyleFive.js";




class PricingStyleThree extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      className: "pricing-area-two pt-100 pb-70 bg-f4f7fe",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "section-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
            children: "\uD648\uD398\uC774\uC9C0 \uC81C\uC791 \uBE44\uC6A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 49
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 45
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-pricing-table center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "pricing-header",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "\uC18C\uC0C1\uACF5\uC778 \uD2B9\uAC00\uD615"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "price",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sup", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 53
                }, this), " 50\uB9CC\uC6D0 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sub", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 70
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "pricing-features",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 57
                  }, this), "\uBC18\uC751\uD615 \uC6F9\uD398\uC774\uC9C0"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 57
                  }, this), "One page"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 57
                  }, this), "SEO \uCD5C\uC801\uD654"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 57
                  }, this), "\uB2E4\uC774\uB098\uBBF9 \uC778\uD130\uB809\uD2F0\uBE0C \uC774\uD399\uD2B8"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "btn-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn",
                    children: ["Select the plan", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 49
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-pricing-table center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "pricing-header",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "\uBA85\uD488 \uBC18\uC751\uD615 \uC6F9\uC0AC\uC774\uD2B8"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "price",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sup", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 53
                }, this), " 280\uB9CC\uC6D0", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sub", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "pricing-features",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 57
                  }, this), "\uBC18\uC751\uD615 \uC6F9\uC0AC\uC774\uD2B8"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 57
                  }, this), "SSL\uC124\uCE58"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 57
                  }, this), "Goole Ad/Naver \uD30C\uC6CC\uB9C1\uD06C \uC138\uD305"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 57
                  }, this), "\uB85C\uC584 \uD0A4\uC6CC\uB4DC \uC138\uD305"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 57
                  }, this), "\uD3EC\uD138\uC0AC\uC774\uD2B8 \uC0AC\uC774\uD2B8 \uB4F1\uB85D"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "btn-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn",
                    children: ["Select the plan", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 49
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-pricing-table center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "pricing-header",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "\uBA85\uD488 \uBE0C\uB79C\uB529 \uBC18\uC751\uD615 \uD648\uD398\uC774\uC9C0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "price",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sup", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 53
                }, this), " 350\uB9CC\uC6D0", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sub", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "pricing-features",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 57
                  }, this), "\uBC18\uC751\uD615 \uC6F9\uD398\uC774\uC9C0"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 57
                  }, this), "SEO \uCD5C\uC801\uD654"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 57
                  }, this), "SSL \uC124\uCE58"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 57
                  }, this), "Goole Ad/Naver \uD30C\uC6CC\uB9C1\uD06C \uC138\uD305"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 57
                  }, this), "\uB85C\uC584 \uD0A4\uC6CC\uB4DC \uC138\uD305"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 57
                  }, this), "\uBE14\uB85C\uADF8 \uB9C8\uCF00\uD305 \uAD50\uC721 1\uD68C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 57
                  }, this), "\uC601\uC0C1 \uD3B8\uC9D1 \uAE30\uBCF8 \uAD50\uC721 1\uD68C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-x-circle red"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 57
                  }, this), "\uC778\uC2A4\uD0C0 \uB9C8\uCF00\uD305 \uAD50\uC721 1\uD68C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-x-circle red"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 57
                  }, this), "\uAC8C\uC2DC\uD310 &\uAC04\uD3B8\uB85C\uADF8\uC778"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "btn-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn",
                    children: ["Select the plan", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 49
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-pricing-table center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "pricing-header",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "\uBA85\uD488 \uC218\uC775 & \uBC18\uC751\uD615 \uC1FC\uD551\uBAB0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "price",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sup", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 53
                }, this), " 500\uB9CC\uC6D0", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sub", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "pricing-features",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 57
                  }, this), "\uBC18\uC751\uD615\uD648\uD398\uC774\uC9C0 \uC6F9&\uBAA8\uBC14\uC77C \uD638\uD658\uD615"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 57
                  }, this), "SEO\uCD5C\uC801\uD654"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 57
                  }, this), "SSL\uC124\uCE58"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 57
                  }, this), "Goole Ad/ Naver \uD30C\uC6CC\uB9C1\uD06C \uC138\uD305"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 57
                  }, this), "SNS \uB9C8\uCF00\uD305 (\uBE14\uB85C\uADF8,\uC778\uC2A4\uD0C0,\uC601\uC0C1\uD3B8\uC9D1)\uAD50\uC721 \uC6D41\uD68C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-x-circle red"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 201,
                    columnNumber: 57
                  }, this), "PG \uC11C\uBE44\uC2A4 \uC81C\uACF5"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-x-circle red"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 57
                  }, this), "\uAC04\uD3B8 \uB85C\uADF8\uC778(\uCE74\uCE74\uC624 \uB124\uC774\uBC84 \uB85C\uADF8\uC778)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "btn-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn",
                    children: ["Select the plan", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 49
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-pricing-table center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "pricing-header",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "\uAE30\uC5C5\uD615 \uD648\uD398\uC774\uC9C0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "price",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sup", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 53
                }, this), " 700\uB9CC\uC6D0", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sub", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "pricing-features",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 57
                  }, this), "SEO \uCD5C\uC801\uD654"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 57
                  }, this), "SSL\uC124\uCE58"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 57
                  }, this), "Google Ad/Naver \uD30C\uC6CC\uB9C1\uD06C \uC124\uC815"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 57
                  }, this), "\uB85C\uC584 \uD0A4\uC6CC\uB4DC \uC138\uD305"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 57
                  }, this), "\uAD00\uB9AC\uC790 \uD398\uC774\uC9C0 \uC81C\uACF5"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 57
                  }, this), "PG \uC2DC\uC2A4\uD15C \uC81C\uACF5"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 57
                  }, this), "\uAC04\uD3B8\uB85C\uADF8\uC778(\uB124\uC774\uBC84/ \uCE74\uCE74\uC624\uD1A1)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-x-circle red"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 57
                  }, this), "\uD37C\uD3EC\uBA3C\uC2A4 \uB9C8\uCF13\uD305 \uAD50\uC721 \uC6D41\uD68C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-x-circle red"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 57
                  }, this), "\uD648\uD398\uC774\uC9C0 \uAD00\uB9AC \uAD50\uC721 \uC6D41\uD68C"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "btn-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn",
                    children: ["Select the plan", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 49
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "col-lg-4 col-sm-6 offset-lg-0 offset-sm-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "single-pricing-table center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "pricing-header",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                  children: "\uBA85\uD488 SPA \uD50C\uB7AB\uD3FC\uD615"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "price",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sup", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 53
                }, this), " 1000\uB9CC\uC6D0 \uBD80\uD130", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("sub", {
                  children: " "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "pricing-features",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 297,
                    columnNumber: 57
                  }, this), "SEO \uCD5C\uC801\uD654"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 57
                  }, this), "Digital Marketing"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 57
                  }, this), "Google Analytics"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 309,
                    columnNumber: 57
                  }, this), "Branding Solutions"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 57
                  }, this), "Digital Accounts"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 317,
                    columnNumber: 57
                  }, this), "Pay-per-Click"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 53
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                    className: "bx bxs-badge-check"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 321,
                    columnNumber: 57
                  }, this), "24/7 Support"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 320,
                  columnNumber: 53
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 53
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "btn-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    className: "default-btn",
                    children: ["Select the plan", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 330,
                      columnNumber: 57
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 57
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 53
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 49
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 45
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img7",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape7.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape2.svg",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape3.svg",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape4.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img5",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape5.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img6",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape6.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img9",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape9.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 45
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "shape-img10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "/images/shape/shape10.png",
          alt: "image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 45
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 41
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingStyleThree);

/***/ }),

/***/ "./components/SidebarModal/SidebarModal.js":
/*!*************************************************!*\
  !*** ./components/SidebarModal/SidebarModal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarModal": () => (/* binding */ SidebarModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\components\\SidebarModal\\SidebarModal.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class SidebarModal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: `sidebar-modal ${this.props.active}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "sidebar-modal-inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "sidebar-about-area",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "sidebar-instagram-feed",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
              children: "Instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image1.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image2.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image3.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image4.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image5.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image6.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image7.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "/images/blog-image/blog-image8.jpg",
                    alt: "image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "sidebar-contact-area",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "contact-info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "contact-info-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "main-color",
                    children: "+088 130 629 8615"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "or",
                    children: "OR"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    children: "example@taiker.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                  className: "social",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://twitter.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                        className: "fab fa-twitter"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.youtube.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                        className: "fab fa-youtube"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.facebook.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                        className: "fab fa-facebook-f"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.linkedin.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                        className: "fab fa-linkedin-in"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                      href: "https://www.instagram.com/",
                      target: "_blank",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                        className: "fab fa-instagram"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 49
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            onClick: this.closeModal,
            className: "close-btn sidebar-modal-close-btn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
              className: "flaticon-close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false);
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarModal);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/NavbarTwo */ "./components/Layout/NavbarTwo.js");
/* harmony import */ var _components_HomeNine_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeNine/Banner */ "./components/HomeNine/Banner.js");
/* harmony import */ var _components_HomeNine_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeNine/Projects */ "./components/HomeNine/Projects.js");
/* harmony import */ var _components_Common_FunFacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/FunFacts */ "./components/Common/FunFacts.js");
/* harmony import */ var _components_Common_TestimonialsTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/TestimonialsTwo */ "./components/Common/TestimonialsTwo.js");
/* harmony import */ var _components_Pricing_PricingStyleFive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pricing/PricingStyleFive */ "./components/Pricing/PricingStyleFive.js");
/* harmony import */ var _components_Common_OurTeamTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/OurTeamTwo */ "./components/Common/OurTeamTwo.js");
/* harmony import */ var _components_Common_LetsGetToWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/LetsGetToWork */ "./components/Common/LetsGetToWork.js");
/* harmony import */ var _components_HomeSeven_Clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HomeSeven/Clients */ "./components/HomeSeven/Clients.js");
/* harmony import */ var _components_Common_SubscribeBoxed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/SubscribeBoxed */ "./components/Common/SubscribeBoxed.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\pages\\index.js";















class Index9 extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_HomeNine_Banner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_HomeNine_Projects__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Common_FunFacts__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Common_TestimonialsTwo__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Pricing_PricingStyleFive__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Common_LetsGetToWork__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index9);

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["router", "children"];
var _jsxFileName = "C:\\Users\\\uC784\uC720\uC9C4\\Desktop\\YYAgency\\taiker-react-next-it-startups-seo-agency-template\\taiker-react\\utils\\ActiveLink.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ActiveLink = _ref => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const child = react__WEBPACK_IMPORTED_MODULE_2__.Children.only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(child, {
      className
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_0__.withRouter)(ActiveLink));

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-countup");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNSSxRQUFOLFNBQXVCSCw0Q0FBdkIsQ0FBaUM7QUFBQTtBQUFBOztBQUFBLG1DQUVyQjtBQUNKSSxNQUFBQSxjQUFjLEVBQUU7QUFEWixLQUZxQjs7QUFBQSxnREFNUkMsU0FBUyxJQUFJO0FBQzlCLFVBQUlBLFNBQUosRUFBZTtBQUNYLGFBQUtDLFFBQUwsQ0FBYztBQUFFRixVQUFBQSxjQUFjLEVBQUU7QUFBbEIsU0FBZDtBQUNIO0FBQ0osS0FWNEI7QUFBQTs7QUFZN0JHLEVBQUFBLE1BQU0sR0FBRztBQUNMLHdCQUNJO0FBQUEsNkJBQ0k7QUFBUyxpQkFBUyxFQUFDLHdCQUFuQjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsa0JBQWY7QUFBQSx3Q0FDSTtBQUFBLDBDQUNJO0FBQU0sNkJBQVMsRUFBQyxVQUFoQjtBQUFBLDJDQUNJLDhEQUFDLGdFQUFEO0FBQ0ksOEJBQVEsRUFBRSxLQUFLQyxrQkFEbkI7QUFFSSw0QkFBTSxFQUFFO0FBQ0pDLHdCQUFBQSxHQUFHLEVBQUU7QUFERCx1QkFGWjtBQUtJLGlDQUFXLE1BTGY7QUFBQSw2Q0FPSSw4REFBQyxzREFBRDtBQUNJLDZCQUFLLEVBQUUsQ0FEWDtBQUVJLDJCQUFHLEVBQ0MsS0FBS0MsS0FBTCxDQUFXTixjQUFYLEdBQ0UsR0FERixHQUVFLENBTFY7QUFPSSxnQ0FBUSxFQUFFO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBb0JJO0FBQU0sNkJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBdUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZCSixlQXdCSTtBQUFLLDJCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQThCSTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsa0JBQWY7QUFBQSx3Q0FDSTtBQUFBLDBDQUNJO0FBQU0sNkJBQVMsRUFBQyxVQUFoQjtBQUFBLDJDQUNJLDhEQUFDLGdFQUFEO0FBQ0ksOEJBQVEsRUFBRSxLQUFLSSxrQkFEbkI7QUFFSSw0QkFBTSxFQUFFO0FBQ0pDLHdCQUFBQSxHQUFHLEVBQUU7QUFERCx1QkFGWjtBQUtJLGlDQUFXLE1BTGY7QUFBQSw2Q0FPSSw4REFBQyxzREFBRDtBQUNJLDZCQUFLLEVBQUUsQ0FEWDtBQUVJLDJCQUFHLEVBQ0MsS0FBS0MsS0FBTCxDQUFXTixjQUFYLEdBQ0UsR0FERixHQUVFLENBTFY7QUFPSSxnQ0FBUSxFQUFFO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBb0JJO0FBQU0sNkJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBdUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZCSixlQXdCSTtBQUFLLDJCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5QkosZUEyREk7QUFBSyx1QkFBUyxFQUFDLG1CQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGtCQUFmO0FBQUEsd0NBQ0k7QUFBQSx5Q0FDSTtBQUFNLDZCQUFTLEVBQUMsVUFBaEI7QUFBQSwyQ0FDSSw4REFBQyxnRUFBRDtBQUNJLDhCQUFRLEVBQUUsS0FBS0ksa0JBRG5CO0FBRUksNEJBQU0sRUFBRTtBQUNKQyx3QkFBQUEsR0FBRyxFQUFFO0FBREQsdUJBRlo7QUFLSSxpQ0FBVyxNQUxmO0FBQUEsNkNBT0ksOERBQUMsc0RBQUQ7QUFDSSw2QkFBSyxFQUFFLENBRFg7QUFFSSwyQkFBRyxFQUNDLEtBQUtDLEtBQUwsQ0FBV04sY0FBWCxHQUNFLEVBREYsR0FFRSxDQUxWO0FBT0ksZ0NBQVEsRUFBRTtBQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFzQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBdEJKLGVBdUJJO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTNESixlQXVGSTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsa0JBQWY7QUFBQSx3Q0FDSTtBQUFBLDBDQUNJO0FBQU0sNkJBQVMsRUFBQyxVQUFoQjtBQUFBLDJDQUNJLDhEQUFDLGdFQUFEO0FBQ0ksOEJBQVEsRUFBRSxLQUFLSSxrQkFEbkI7QUFFSSw0QkFBTSxFQUFFO0FBQ0pDLHdCQUFBQSxHQUFHLEVBQUU7QUFERCx1QkFGWjtBQUtJLGlDQUFXLE1BTGY7QUFBQSw2Q0FPSSw4REFBQyxzREFBRDtBQUNJLDZCQUFLLEVBQUUsQ0FEWDtBQUVJLDJCQUFHLEVBQ0MsS0FBS0MsS0FBTCxDQUFXTixjQUFYLEdBQ0UsRUFERixHQUVFLENBTFY7QUFPSSxnQ0FBUSxFQUFFO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBb0JJO0FBQU0sNkJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBdUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXZCSixlQXdCSTtBQUFLLDJCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFESjtBQTRISDs7QUF6STRCOztBQTRJakMsaUVBQWVELFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSkE7QUFDQTs7O0FBRUEsTUFBTVMsYUFBTixTQUE0QlosNENBQTVCLENBQXNDO0FBQ2xDTyxFQUFBQSxNQUFNLEdBQUc7QUFDTCx3QkFDSTtBQUFTLGVBQVMsRUFBQywwQkFBbkI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBTUk7QUFBSyx1QkFBUyxFQUFDLFVBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsYUFBZjtBQUFBLHVDQUNJLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxVQUFYO0FBQUEseUNBQ0k7QUFBRyw2QkFBUyxFQUFDLGFBQWI7QUFBQSwyREFDZTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXdCSDs7QUExQmlDOztBQTZCdEMsaUVBQWVLLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0k7QUFDQTtBQUNBOzs7QUFDQSxNQUFNRSxXQUFXLEdBQUdELG1EQUFPLE9BQUMsNElBQUQ7QUFBQTtBQUFBLHdDQUFRLGdEQUFSO0FBQUEsNERBQVEscUJBQVI7QUFBQTtBQUFBLEVBQTNCO0FBRUEsTUFBTUUsT0FBTyxHQUFHO0FBQ1pDLEVBQUFBLElBQUksRUFBRSxJQURNO0FBRVpDLEVBQUFBLEdBQUcsRUFBRSxJQUZPO0FBR1pDLEVBQUFBLElBQUksRUFBRSxLQUhNO0FBSVpDLEVBQUFBLE1BQU0sRUFBRSxFQUpJO0FBS1pDLEVBQUFBLGtCQUFrQixFQUFFLElBTFI7QUFNWkMsRUFBQUEsUUFBUSxFQUFFLElBTkU7QUFPWkMsRUFBQUEsU0FBUyxFQUFFLEtBUEM7QUFRWkMsRUFBQUEsU0FBUyxFQUFFLEtBUkM7QUFTWkMsRUFBQUEsT0FBTyxFQUFFLENBQ0wsdUNBREssRUFFTCx3Q0FGSyxDQVRHO0FBYVpDLEVBQUFBLFVBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQ0MsTUFBQUEsS0FBSyxFQUFFO0FBRFIsS0FESztBQUlSLFNBQUs7QUFDREEsTUFBQUEsS0FBSyxFQUFFO0FBRE4sS0FKRztBQU9SLFNBQUs7QUFDREEsTUFBQUEsS0FBSyxFQUFFO0FBRE47QUFQRztBQWJBLENBQWhCOztBQTBCQSxNQUFNQyxVQUFOLFNBQXlCM0IsNENBQXpCLENBQW1DO0FBQUE7QUFBQTs7QUFBQSx3Q0FFbEIsS0FGa0I7O0FBQUEsbUNBR3ZCO0FBQ0o0QixNQUFBQSxPQUFPLEVBQUM7QUFESixLQUh1QjtBQUFBOztBQU8vQkMsRUFBQUEsaUJBQWlCLEdBQUU7QUFDZixTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS3hCLFFBQUwsQ0FBYztBQUFFc0IsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBZDtBQUNIOztBQUVERyxFQUFBQSxvQkFBb0IsR0FBRztBQUNuQixTQUFLRCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0g7O0FBRUR2QixFQUFBQSxNQUFNLEdBQUc7QUFDTCx3QkFDQTtBQUFBLDZCQUNJO0FBQVMsaUJBQVMsRUFBQyxtQkFBbkI7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsb0NBQ0E7QUFBTSx1QkFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBTUssS0FBS0csS0FBTCxDQUFXa0IsT0FBWCxnQkFDRCw4REFBQyxXQUFEO0FBQ0kscUJBQVMsRUFBQztBQURkLGFBRVFiLE9BRlI7QUFBQSxvQ0FJSTtBQUFLLHVCQUFTLEVBQUMsaUJBQWY7QUFBQSxzQ0FDQTtBQUFLLHlCQUFTLEVBQUMsT0FBZjtBQUFBLHdDQUNJO0FBQUsscUJBQUcsRUFBQywrQkFBVDtBQUF5QyxxQkFBRyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFHSTtBQUFLLDJCQUFTLEVBQUMsUUFBZjtBQUFBLDBDQUNBO0FBQUcsd0JBQUksRUFBQywyQkFBUjtBQUFvQywwQkFBTSxFQUFDLFFBQTNDO0FBQUEsMkNBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREEsZUFJQTtBQUFHLHdCQUFJLEVBQUMsMkJBQVI7QUFBb0MsMEJBQU0sRUFBQyxRQUEzQztBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpBLGVBT0E7QUFBRyx3QkFBSSxFQUFDLHNCQUFSO0FBQStCLDBCQUFNLEVBQUMsUUFBdEM7QUFBQSwyQ0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFQQSxlQVVBO0FBQUcsd0JBQUksRUFBQyw0QkFBUjtBQUFxQywwQkFBTSxFQUFDLFFBQTVDO0FBQUEsMkNBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxlQW9CQTtBQUFLLHlCQUFTLEVBQUMsU0FBZjtBQUFBLHdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUE4Qkk7QUFBSyx1QkFBUyxFQUFDLGlCQUFmO0FBQUEsc0NBQ0E7QUFBSyx5QkFBUyxFQUFDLE9BQWY7QUFBQSx3Q0FDSTtBQUFLLHFCQUFHLEVBQUMsK0JBQVQ7QUFBeUMscUJBQUcsRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBR0k7QUFBSywyQkFBUyxFQUFDLFFBQWY7QUFBQSwwQ0FDQTtBQUFHLHdCQUFJLEVBQUMsMkJBQVI7QUFBb0MsMEJBQU0sRUFBQyxRQUEzQztBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURBLGVBSUE7QUFBRyx3QkFBSSxFQUFDLDJCQUFSO0FBQW9DLDBCQUFNLEVBQUMsUUFBM0M7QUFBQSwyQ0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKQSxlQU9BO0FBQUcsd0JBQUksRUFBQyxzQkFBUjtBQUErQiwwQkFBTSxFQUFDLFFBQXRDO0FBQUEsMkNBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUEEsZUFVQTtBQUFHLHdCQUFJLEVBQUMsNEJBQVI7QUFBcUMsMEJBQU0sRUFBQyxRQUE1QztBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsZUFvQkE7QUFBSyx5QkFBUyxFQUFDLFNBQWY7QUFBQSx3Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTlCSixlQXdESTtBQUFLLHVCQUFTLEVBQUMsaUJBQWY7QUFBQSxzQ0FDQTtBQUFLLHlCQUFTLEVBQUMsT0FBZjtBQUFBLHdDQUNJO0FBQUsscUJBQUcsRUFBQywrQkFBVDtBQUF5QyxxQkFBRyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFHSTtBQUFLLDJCQUFTLEVBQUMsUUFBZjtBQUFBLDBDQUNBO0FBQUcsd0JBQUksRUFBQywyQkFBUjtBQUFvQywwQkFBTSxFQUFDLFFBQTNDO0FBQUEsMkNBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREEsZUFJQTtBQUFHLHdCQUFJLEVBQUMsMkJBQVI7QUFBb0MsMEJBQU0sRUFBQyxRQUEzQztBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpBLGVBT0E7QUFBRyx3QkFBSSxFQUFDLHNCQUFSO0FBQStCLDBCQUFNLEVBQUMsUUFBdEM7QUFBQSwyQ0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFQQSxlQVVBO0FBQUcsd0JBQUksRUFBQyw0QkFBUjtBQUFxQywwQkFBTSxFQUFDLFFBQTVDO0FBQUEsMkNBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxlQW9CQTtBQUFLLHlCQUFTLEVBQUMsU0FBZjtBQUFBLHdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBeERKLGVBa0ZJO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHNDQUNBO0FBQUsseUJBQVMsRUFBQyxPQUFmO0FBQUEsd0NBQ0k7QUFBSyxxQkFBRyxFQUFDLCtCQUFUO0FBQXlDLHFCQUFHLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUdJO0FBQUssMkJBQVMsRUFBQyxRQUFmO0FBQUEsMENBQ0E7QUFBRyx3QkFBSSxFQUFDLDJCQUFSO0FBQW9DLDBCQUFNLEVBQUMsUUFBM0M7QUFBQSwyQ0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFEQSxlQUlBO0FBQUcsd0JBQUksRUFBQywyQkFBUjtBQUFvQywwQkFBTSxFQUFDLFFBQTNDO0FBQUEsMkNBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkEsZUFPQTtBQUFHLHdCQUFJLEVBQUMsc0JBQVI7QUFBK0IsMEJBQU0sRUFBQyxRQUF0QztBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVBBLGVBVUE7QUFBRyx3QkFBSSxFQUFDLDRCQUFSO0FBQXFDLDBCQUFNLEVBQUMsUUFBNUM7QUFBQSwyQ0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLGVBb0JBO0FBQUsseUJBQVMsRUFBQyxTQUFmO0FBQUEsd0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsRkosZUE0R0k7QUFBSyx1QkFBUyxFQUFDLGlCQUFmO0FBQUEsc0NBQ0E7QUFBSyx5QkFBUyxFQUFDLE9BQWY7QUFBQSx3Q0FDSTtBQUFLLHFCQUFHLEVBQUMsK0JBQVQ7QUFBeUMscUJBQUcsRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBR0k7QUFBSywyQkFBUyxFQUFDLFFBQWY7QUFBQSwwQ0FDQTtBQUFHLHdCQUFJLEVBQUMsMkJBQVI7QUFBb0MsMEJBQU0sRUFBQyxRQUEzQztBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURBLGVBSUE7QUFBRyx3QkFBSSxFQUFDLDJCQUFSO0FBQW9DLDBCQUFNLEVBQUMsUUFBM0M7QUFBQSwyQ0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKQSxlQU9BO0FBQUcsd0JBQUksRUFBQyxzQkFBUjtBQUErQiwwQkFBTSxFQUFDLFFBQXRDO0FBQUEsMkNBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBUEEsZUFVQTtBQUFHLHdCQUFJLEVBQUMsNEJBQVI7QUFBcUMsMEJBQU0sRUFBQyxRQUE1QztBQUFBLDJDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsZUFvQkE7QUFBSyx5QkFBUyxFQUFDLFNBQWY7QUFBQSx3Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTVHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREMsR0F3SUQsRUE5SUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBb0pBO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsMEJBQVQ7QUFBb0MsZUFBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBKQSxlQXVKQTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLDBCQUFUO0FBQW9DLGVBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2SkEsZUEwSkE7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQywwQkFBVDtBQUFvQyxlQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUpBLGVBNkpBO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsMEJBQVQ7QUFBb0MsZUFBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdKQSxlQWdLQTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLDBCQUFUO0FBQW9DLGVBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoS0EsZUFtS0E7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQywwQkFBVDtBQUFvQyxlQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbktBLGVBc0tBO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsMkJBQVQ7QUFBcUMsZUFBRyxFQUFDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFEQTtBQThLSDs7QUEvTDhCOztBQWtNbkMsaUVBQWVZLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak9KOzs7O0FBRUEsTUFBTUssY0FBTixTQUE2QmhDLDRDQUE3QixDQUF1QztBQUNuQ08sRUFBQUEsTUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBQSw2QkFDSTtBQUFTLGlCQUFTLEVBQUMsdUNBQW5CO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBQSxzQ0FDSTtBQUFNLHlCQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUlJO0FBQU0seUJBQVMsRUFBQyxpQkFBaEI7QUFBQSx3Q0FDSTtBQUFPLHNCQUFJLEVBQUMsT0FBWjtBQUFvQiwyQkFBUyxFQUFDLGtCQUE5QjtBQUFpRCw2QkFBVyxFQUFDLGtCQUE3RDtBQUFnRixzQkFBSSxFQUFDO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFnQkk7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQywwQkFBVDtBQUFvQyxlQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJKLGVBbUJJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsMEJBQVQ7QUFBb0MsZUFBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CSixlQXNCSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLDBCQUFUO0FBQW9DLGVBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkosZUF5Qkk7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQywwQkFBVDtBQUFvQyxlQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJKLGVBNEJJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsMEJBQVQ7QUFBb0MsZUFBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFESjtBQW9DSDs7QUF0Q2tDOztBQXlDdkMsaUVBQWV5QixjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOzs7QUFDQSxNQUFNbEIsV0FBVyxHQUFHRCxtREFBTyxPQUFDLDRJQUFEO0FBQUE7QUFBQSx3Q0FBUSxnREFBUjtBQUFBLGlFQUFRLHFCQUFSO0FBQUE7QUFBQSxFQUEzQjtBQUVBLE1BQU1FLE9BQU8sR0FBRztBQUNaQyxFQUFBQSxJQUFJLEVBQUUsSUFETTtBQUVaQyxFQUFBQSxHQUFHLEVBQUUsS0FGTztBQUdaQyxFQUFBQSxJQUFJLEVBQUUsSUFITTtBQUlaRSxFQUFBQSxrQkFBa0IsRUFBRSxJQUpSO0FBS1pDLEVBQUFBLFFBQVEsRUFBRSxJQUxFO0FBTVpDLEVBQUFBLFNBQVMsRUFBRSxLQU5DO0FBT1pDLEVBQUFBLFNBQVMsRUFBRSxLQVBDO0FBUVpDLEVBQUFBLE9BQU8sRUFBRSxDQUNMLDJDQURLLEVBRUwsNENBRkssQ0FSRztBQVlaQyxFQUFBQSxVQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0NDLE1BQUFBLEtBQUssRUFBRTtBQURSLEtBREs7QUFJUixTQUFLO0FBQ0RBLE1BQUFBLEtBQUssRUFBRTtBQUROLEtBSkc7QUFPUixVQUFNO0FBQ0ZBLE1BQUFBLEtBQUssRUFBRTtBQURMLEtBUEU7QUFVUixVQUFNO0FBQ0ZBLE1BQUFBLEtBQUssRUFBRTtBQURMO0FBVkU7QUFaQSxDQUFoQjs7QUE0QkEsTUFBTU8sZUFBTixTQUE4QmpDLDRDQUE5QixDQUF3QztBQUFBO0FBQUE7O0FBQUEsd0NBRXZCLEtBRnVCOztBQUFBLG1DQUc1QjtBQUNKNEIsTUFBQUEsT0FBTyxFQUFDO0FBREosS0FINEI7QUFBQTs7QUFPcENDLEVBQUFBLGlCQUFpQixHQUFFO0FBQ2YsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUt4QixRQUFMLENBQWM7QUFBRXNCLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQWQ7QUFDSDs7QUFFREcsRUFBQUEsb0JBQW9CLEdBQUc7QUFDbkIsU0FBS0QsVUFBTCxHQUFrQixLQUFsQjtBQUNIOztBQUVEdkIsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBQSw2QkFDSTtBQUFTLGlCQUFTLEVBQUMseUNBQW5CO0FBQUEsZ0NBQ0E7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG9DQUNBO0FBQU0sdUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFRQyxLQUFLRyxLQUFMLENBQVdrQixPQUFYLGdCQUNHLDhEQUFDLFdBQUQ7QUFDQSxtQkFBUyxFQUFDO0FBRFYsV0FFSWIsT0FGSjtBQUFBLGtDQUlBO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBTUk7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBQSxxQ0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBLGVBZ0JBO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBTUk7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBQSxxQ0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCQSxlQTRCQTtBQUFLLHFCQUFTLEVBQUMsNkJBQWY7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQU1JO0FBQUssdUJBQVMsRUFBQyxhQUFmO0FBQUEscUNBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkEsZUF3Q0E7QUFBSyxxQkFBUyxFQUFDLDZCQUFmO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFNSTtBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUFBLHFDQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeENBLGVBb0RBO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUk7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBQSxxQ0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsR0FpRUcsRUF6RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFnRkM7O0FBakcrQjs7QUFvR3hDLGlFQUFla0IsZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBOzs7QUFFUSxNQUFNQyxNQUFOLFNBQXFCbEMsNENBQXJCLENBQStCO0FBQzNCTyxFQUFBQSxNQUFNLEdBQUc7QUFDTCx3QkFDQTtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxtQ0FDQTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBSUk7QUFBSyx5QkFBUyxFQUFDLFlBQWY7QUFBQSx1Q0FDQSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsVUFBWDtBQUFBLHlDQUNJO0FBQUcsNkJBQVMsRUFBQyxrQkFBYjtBQUFBLDBFQUNNO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFxQkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkosZUF3Qkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkosZUEyQkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkosZUE4Qkk7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5QkosZUFpQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0osZUFvQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQ0osZUF1Q0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2Q0osZUEwQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywwQkFBVDtBQUFvQyxhQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQ0osZUE2Q0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSwrQkFDQTtBQUFLLGFBQUcsRUFBQywyQkFBVDtBQUFxQyxhQUFHLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREE7QUFtREg7O0FBckQwQjs7QUF3RC9CLGlFQUFlMkIsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEUjtBQUNBOzs7QUFFQSxNQUFNQyxRQUFOLFNBQXVCbkMsNENBQXZCLENBQWlDO0FBQzdCTyxFQUFBQSxNQUFNLEdBQUc7QUFDTCx3QkFDRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsNEJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHNDQUNFO0FBQUssbUJBQUcsRUFBQyx5QkFBVDtBQUFtQyxtQkFBRyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFHRTtBQUFLLHlCQUFTLEVBQUMscUJBQWY7QUFBQSx3Q0FDRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUlFO0FBQUEseUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGLGVBUUU7QUFBRywyQkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFrQkU7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMseUJBQVQ7QUFBbUMsbUJBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyx5Q0FBWDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkYsZUFxQ0U7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMseUJBQVQ7QUFBbUMsbUJBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxpQ0FBWDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQ0YsZUF3REU7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMseUJBQVQ7QUFBbUMsbUJBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyw0QkFBWDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4REYsZUEyRUU7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMseUJBQVQ7QUFBbUMsbUJBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxzQkFBWDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzRUYsZUE4RkU7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMseUJBQVQ7QUFBbUMsbUJBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyx5Q0FBWDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5RkYsZUFpSEU7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMseUJBQVQ7QUFBbUMsbUJBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyw2QkFBWDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFqSEYsZUFvSUU7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDRTtBQUFLLG1CQUFHLEVBQUMseUJBQVQ7QUFBbUMsbUJBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0U7QUFBSyx5QkFBUyxFQUFDLHFCQUFmO0FBQUEsd0NBQ0U7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFJRTtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQywwQkFBWDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwSUYsZUFvUEU7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLGlCQUFmO0FBQUEsc0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLFlBQVg7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsbUJBQWI7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFNRTtBQUFNLHlCQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLGVBT0UsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLFlBQVg7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEYsZUFVRSw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsWUFBWDtBQUFBLHVDQUNFO0FBQUcsMkJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRixlQWFFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxZQUFYO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJGLGVBZ0JFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxZQUFYO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDLG1CQUFiO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBc1JIOztBQXhSNEI7O0FBMlJqQyxpRUFBZTRCLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UkE7QUFDQTs7OztBQUVBLE1BQU1DLE9BQU4sU0FBc0JwQyw0Q0FBdEIsQ0FBZ0M7QUFDNUJPLEVBQUFBLE1BQU0sR0FBRztBQUNMLHdCQUNJO0FBQUEsNkJBQ0k7QUFBUyxpQkFBUyxFQUFDLHNCQUFuQjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU9JO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNJO0FBQUcsb0JBQUksRUFBQyxVQUFSO0FBQW1CLHNCQUFNLEVBQUMsUUFBMUI7QUFBQSx3Q0FDSTtBQUFLLHFCQUFHLEVBQUMsd0NBQVQ7QUFBa0QscUJBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBSyxxQkFBRyxFQUFDLHdDQUFUO0FBQWtELHFCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBT0k7QUFBSyx1QkFBUyxFQUFDLHFCQUFmO0FBQUEscUNBQ0k7QUFBRyxvQkFBSSxFQUFDLFVBQVI7QUFBbUIsc0JBQU0sRUFBQyxRQUExQjtBQUFBLHdDQUNJO0FBQUsscUJBQUcsRUFBQyx3Q0FBVDtBQUFrRCxxQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFLLHFCQUFHLEVBQUMsd0NBQVQ7QUFBa0QscUJBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEosZUFhSTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDSTtBQUFHLG9CQUFJLEVBQUMsVUFBUjtBQUFtQixzQkFBTSxFQUFDLFFBQTFCO0FBQUEsd0NBQ0k7QUFBSyxxQkFBRyxFQUFDLHdDQUFUO0FBQWtELHFCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUsscUJBQUcsRUFBQyx3Q0FBVDtBQUFrRCxxQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiSixlQW1CSTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDSTtBQUFHLG9CQUFJLEVBQUMsVUFBUjtBQUFtQixzQkFBTSxFQUFDLFFBQTFCO0FBQUEsd0NBQ0k7QUFBSyxxQkFBRyxFQUFDLHdDQUFUO0FBQWtELHFCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUsscUJBQUcsRUFBQyx3Q0FBVDtBQUFrRCxxQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFuQkosZUF5Qkk7QUFBSyx1QkFBUyxFQUFDLHFCQUFmO0FBQUEscUNBQ0k7QUFBRyxvQkFBSSxFQUFDLFVBQVI7QUFBbUIsc0JBQU0sRUFBQyxRQUExQjtBQUFBLHdDQUNJO0FBQUsscUJBQUcsRUFBQyx3Q0FBVDtBQUFrRCxxQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFLLHFCQUFHLEVBQUMsd0NBQVQ7QUFBa0QscUJBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJKLGVBK0JJO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNJO0FBQUcsb0JBQUksRUFBQyxVQUFSO0FBQW1CLHNCQUFNLEVBQUMsUUFBMUI7QUFBQSx3Q0FDSTtBQUFLLHFCQUFHLEVBQUMsd0NBQVQ7QUFBa0QscUJBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBSyxxQkFBRyxFQUFDLHdDQUFUO0FBQWtELHFCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQS9CSixlQXFDSTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDSTtBQUFHLG9CQUFJLEVBQUMsVUFBUjtBQUFtQixzQkFBTSxFQUFDLFFBQTFCO0FBQUEsd0NBQ0k7QUFBSyxxQkFBRyxFQUFDLHdDQUFUO0FBQWtELHFCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUsscUJBQUcsRUFBQyx3Q0FBVDtBQUFrRCxxQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyQ0osZUEyQ0k7QUFBSyx1QkFBUyxFQUFDLHFCQUFmO0FBQUEscUNBQ0k7QUFBRyxvQkFBSSxFQUFDLFVBQVI7QUFBbUIsc0JBQU0sRUFBQyxRQUExQjtBQUFBLHdDQUNJO0FBQUsscUJBQUcsRUFBQyx3Q0FBVDtBQUFrRCxxQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFLLHFCQUFHLEVBQUMsd0NBQVQ7QUFBa0QscUJBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBM0NKLGVBaURJO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNJO0FBQUcsb0JBQUksRUFBQyxVQUFSO0FBQW1CLHNCQUFNLEVBQUMsUUFBMUI7QUFBQSx3Q0FDSTtBQUFLLHFCQUFHLEVBQUMsd0NBQVQ7QUFBa0QscUJBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBSyxxQkFBRyxFQUFDLHdDQUFUO0FBQWtELHFCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpESixlQXVESTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDSTtBQUFHLG9CQUFJLEVBQUMsVUFBUjtBQUFtQixzQkFBTSxFQUFDLFFBQTFCO0FBQUEsd0NBQ0k7QUFBSyxxQkFBRyxFQUFDLHlDQUFUO0FBQW1ELHFCQUFHLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJO0FBQUsscUJBQUcsRUFBQyx5Q0FBVDtBQUFtRCxxQkFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQXlFSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLDBCQUFUO0FBQW9DLGVBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6RUosZUE0RUk7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQywwQkFBVDtBQUFvQyxlQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUVKLGVBK0VJO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsMEJBQVQ7QUFBb0MsZUFBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9FSixlQWtGSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFDLDBCQUFUO0FBQW9DLGVBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUEwRkg7O0FBNUYyQjs7QUErRmhDLGlFQUFlNkIsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBOzs7O0FBRUEsTUFBTUMsTUFBTixTQUFxQnJDLDRDQUFyQixDQUErQjtBQUMzQk8sRUFBQUEsTUFBTSxHQUFHO0FBQ0wsUUFBSStCLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBbEI7QUFDQSx3QkFDSTtBQUFBLDZCQUNJO0FBQVMsaUJBQVMsRUFBQyxhQUFuQjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsc0JBQWY7QUFBQSx3Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUdJO0FBQUksMkJBQVMsRUFBQyxxQkFBZDtBQUFBLDBDQUNJO0FBQUEsNENBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKLGVBSUk7QUFBRywwQkFBSSxFQUFDLG9CQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQU9JO0FBQUEsNENBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKLGVBR0k7QUFBRywwQkFBSSxFQUFDLDJCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFQSixlQVlJO0FBQUEsNENBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKLGVBSUk7QUFBSSwrQkFBUyxFQUFDLFFBQWQ7QUFBQSw4Q0FDSTtBQUFBLCtDQUNJO0FBQUcsOEJBQUksRUFBQyxzQkFBUjtBQUErQixnQ0FBTSxFQUFDLFFBQXRDO0FBQUEsaURBQStDO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosZUFJSTtBQUFBLCtDQUNJO0FBQUcsOEJBQUksRUFBQywyQkFBUjtBQUFvQyxnQ0FBTSxFQUFDLFFBQTNDO0FBQUEsaURBQW9EO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkosZUFPSTtBQUFBLCtDQUNJO0FBQUcsOEJBQUksRUFBQyw0QkFBUjtBQUFxQyxnQ0FBTSxFQUFDLFFBQTVDO0FBQUEsaURBQXFEO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEosZUFVSTtBQUFBLCtDQUNJO0FBQUcsOEJBQUksRUFBQywyQkFBUjtBQUFvQyxnQ0FBTSxFQUFDLFFBQTNDO0FBQUEsaURBQW9EO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBVkosZUFhSTtBQUFBLCtDQUNJO0FBQUcsOEJBQUksRUFBQywwQkFBUjtBQUFtQyxnQ0FBTSxFQUFDLFFBQTFDO0FBQUEsaURBQW1EO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQTRDSTtBQUFLLHVCQUFTLEVBQUMsZ0VBQWY7QUFBQSxxQ0FDSTtBQUFLLHlCQUFTLEVBQUMsMkJBQWY7QUFBQSx3Q0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUdJO0FBQUksMkJBQVMsRUFBQyx1QkFBZDtBQUFBLDBDQUNJO0FBQUEsMkNBQ0k7QUFBRywwQkFBSSxFQUFDLDRCQUFSO0FBQXFDLDRCQUFNLEVBQUMsUUFBNUM7QUFBQSw2Q0FDSTtBQUFLLDJCQUFHLEVBQUMsd0NBQVQ7QUFBa0QsMkJBQUcsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFNSTtBQUFBLDJDQUNJO0FBQUcsMEJBQUksRUFBQyw0QkFBUjtBQUFxQyw0QkFBTSxFQUFDLFFBQTVDO0FBQUEsNkNBQ0k7QUFBSywyQkFBRyxFQUFDLHdDQUFUO0FBQWtELDJCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5KLGVBV0k7QUFBQSwyQ0FDSTtBQUFHLDBCQUFJLEVBQUMsNEJBQVI7QUFBcUMsNEJBQU0sRUFBQyxRQUE1QztBQUFBLDZDQUNJO0FBQUssMkJBQUcsRUFBQyx3Q0FBVDtBQUFrRCwyQkFBRyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFYSixlQWdCSTtBQUFBLDJDQUNJO0FBQUcsMEJBQUksRUFBQyw0QkFBUjtBQUFxQyw0QkFBTSxFQUFDLFFBQTVDO0FBQUEsNkNBQ0k7QUFBSywyQkFBRyxFQUFDLHdDQUFUO0FBQWtELDJCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWhCSixlQXFCSTtBQUFBLDJDQUNJO0FBQUcsMEJBQUksRUFBQyw0QkFBUjtBQUFxQyw0QkFBTSxFQUFDLFFBQTVDO0FBQUEsNkNBQ0k7QUFBSywyQkFBRyxFQUFDLHdDQUFUO0FBQWtELDJCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXJCSixlQTBCSTtBQUFBLDJDQUNJO0FBQUcsMEJBQUksRUFBQyw0QkFBUjtBQUFxQyw0QkFBTSxFQUFDLFFBQTVDO0FBQUEsNkNBQ0k7QUFBSywyQkFBRyxFQUFDLHdDQUFUO0FBQWtELDJCQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE1Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBcUZJO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyx3QkFBZjtBQUFBLHNDQUNJO0FBQUsseUJBQVMsRUFBQyw0QkFBZjtBQUFBLHVDQUNJO0FBQUEsK0NBQ3FCRixXQURyQixtREFFd0I7QUFBRyx3QkFBSSxFQUFDLHdCQUFSO0FBQWlDLDBCQUFNLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFRSTtBQUFLLHlCQUFTLEVBQUMsNEJBQWY7QUFBQSx1Q0FDSTtBQUFBLDBDQUNJO0FBQUEsMkNBQ0ksOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLHVCQUFYO0FBQUEsNkNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQU1JO0FBQUEsMkNBQ0ksOERBQUMsa0RBQUQ7QUFBTSwwQkFBSSxFQUFDLGlCQUFYO0FBQUEsNkNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFESjtBQXFISDs7QUF4SDBCOztBQTJIL0IsaUVBQWVELE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1NLFNBQU4sU0FBd0IzQyw0Q0FBeEIsQ0FBa0M7QUFBQTtBQUFBOztBQUFBLG1DQUd0QjtBQUNKNEMsTUFBQUEsWUFBWSxFQUFFO0FBRFYsS0FIc0I7O0FBQUEseUNBTWhCLE1BQU07QUFDaEIsV0FBS3RDLFFBQUwsQ0FBYztBQUNWc0MsUUFBQUEsWUFBWSxFQUFFLENBQUMsS0FBS2xDLEtBQUwsQ0FBV2tDO0FBRGhCLE9BQWQ7QUFHSCxLQVY2Qjs7QUFBQSxtQ0FhdEI7QUFDSkMsTUFBQUEsVUFBVSxFQUFFO0FBRFIsS0Fic0I7O0FBQUEsOENBZ0JYLE1BQU07QUFDckIsV0FBS3ZDLFFBQUwsQ0FBZXdDLFNBQVMsSUFBSTtBQUN4QixlQUFPO0FBQ0hELFVBQUFBLFVBQVUsRUFBRSxDQUFDQyxTQUFTLENBQUNEO0FBRHBCLFNBQVA7QUFHSCxPQUpEO0FBS0gsS0F0QjZCOztBQUFBLHdDQXlCakIsS0F6QmlCOztBQUFBLG1DQTBCdEI7QUFDSmpCLE1BQUFBLE9BQU8sRUFBRSxLQURMO0FBRUptQixNQUFBQSxTQUFTLEVBQUU7QUFGUCxLQTFCc0I7O0FBQUEsMENBOEJmLE1BQU07QUFDakIsV0FBS3pDLFFBQUwsQ0FBYztBQUNWeUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsS0FBS3JDLEtBQUwsQ0FBV3FDO0FBRGIsT0FBZDtBQUdILEtBbEM2QjtBQUFBOztBQW1DOUJsQixFQUFBQSxpQkFBaUIsR0FBRztBQUNoQixRQUFJbUIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBaEI7QUFDQUQsSUFBQUEsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxNQUFNO0FBQ3RDLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN0QkwsUUFBQUEsU0FBUyxDQUFDTSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixXQUF4QjtBQUNILE9BRkQsTUFFTztBQUNIUCxRQUFBQSxTQUFTLENBQUNNLFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLFdBQTNCO0FBQ0g7QUFDSixLQU5EO0FBT0FKLElBQUFBLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIOztBQUNEMUIsRUFBQUEsb0JBQW9CLEdBQUc7QUFDbkIsU0FBS0QsVUFBTCxHQUFrQixLQUFsQjtBQUNIOztBQUVEdkIsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsUUFBSTtBQUFFbUQsTUFBQUE7QUFBRixRQUFlLEtBQUtDLEtBQXhCO0FBQ0EsVUFBTTtBQUFFWixNQUFBQTtBQUFGLFFBQWdCLEtBQUtyQyxLQUEzQjtBQUNBLFVBQU1rRCxRQUFRLEdBQUdiLFNBQVMsR0FBRywwQkFBSCxHQUFnQywrQkFBMUQ7QUFDQSxVQUFNYyxRQUFRLEdBQUdkLFNBQVMsR0FBRywrQ0FBSCxHQUFxRCxxQ0FBL0U7QUFFQSx3QkFDSTtBQUFBLDhCQUNHO0FBQUssVUFBRSxFQUFDLFFBQVI7QUFBaUIsaUJBQVMsRUFBQyw2QkFBM0I7QUFBQSwrQkFDSztBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLHNDQUFmO0FBQUEsc0NBQ0ksOERBQUMsc0RBQUQ7QUFBTSxvQkFBSSxFQUFDLEdBQVg7QUFBQSx1Q0FDSTtBQUFHLDJCQUFTLEVBQUMsY0FBYjtBQUFBLDBDQUNJO0FBQUssdUJBQUcsRUFBQyxrQkFBVDtBQUE0Qiw2QkFBUyxFQUFDLFlBQXRDO0FBQW1ELHVCQUFHLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUVJO0FBQUssdUJBQUcsRUFBQyx3QkFBVDtBQUFtQyw2QkFBUyxFQUFDLFlBQTdDO0FBQTBELHVCQUFHLEVBQUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBUUk7QUFDSSx1QkFBTyxFQUFFLEtBQUtlLFlBRGxCO0FBRUkseUJBQVMsRUFBRUQsUUFGZjtBQUdJLG9CQUFJLEVBQUMsUUFIVDtBQUlJLCtCQUFZLFVBSmhCO0FBS0ksK0JBQVkseUJBTGhCO0FBSzBDLGlDQUFjLHdCQUx4RDtBQU1JLGlDQUFjLE9BTmxCO0FBT0ksOEJBQVcsbUJBUGY7QUFBQSx3Q0FTSTtBQUFNLDJCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFUSixlQVVJO0FBQU0sMkJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZKLGVBV0k7QUFBTSwyQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJKLGVBc0JJO0FBQUsseUJBQVMsRUFBRUQsUUFBaEI7QUFBMEIsa0JBQUUsRUFBQyx3QkFBN0I7QUFBQSx3Q0FDSTtBQUFJLDJCQUFTLEVBQUMsWUFBZDtBQUFBLDBDQUNJO0FBQUksNkJBQVMsRUFBQyxVQUFkO0FBQUEsNENBQ0ksOERBQUMsc0RBQUQ7QUFBTSwwQkFBSSxFQUFDLEdBQVg7QUFBZSxxQ0FBZSxFQUFDLFFBQS9CO0FBQUEsNkNBQ0k7QUFBRyxpQ0FBUyxFQUFDLFVBQWI7QUFBd0IsK0JBQU8sRUFBRUcsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQUYsRUFBdEM7QUFBQSx5REFDUztBQUFHLG1DQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFPSTtBQUFJLCtCQUFTLEVBQUMsZUFBZDtBQUFBLDhDQUNJO0FBQUksaUNBQVMsRUFBQyxVQUFkO0FBQUEsK0NBQ0ksOERBQUMsc0RBQUQ7QUFBTSw4QkFBSSxFQUFDLEdBQVg7QUFBZSx5Q0FBZSxFQUFDLFFBQS9CO0FBQUEsaURBQ0k7QUFBRyxxQ0FBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixlQU1JO0FBQUksaUNBQVMsRUFBQyxVQUFkO0FBQUEsK0NBQ0ksOERBQUMsc0RBQUQ7QUFBTSw4QkFBSSxFQUFDLFNBQVg7QUFBcUIseUNBQWUsRUFBQyxRQUFyQztBQUFBLGlEQUNJO0FBQUcscUNBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTkosZUFXSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxTQUFYO0FBQXFCLHlDQUFlLEVBQUMsUUFBckM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVhKLGVBZ0JJO0FBQUksaUNBQVMsRUFBQyxVQUFkO0FBQUEsK0NBQ0ksOERBQUMsc0RBQUQ7QUFBTSw4QkFBSSxFQUFDLFNBQVg7QUFBcUIseUNBQWUsRUFBQyxRQUFyQztBQUFBLGlEQUNJO0FBQUcscUNBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBaEJKLGVBcUJJO0FBQUksaUNBQVMsRUFBQyxVQUFkO0FBQUEsK0NBQ0ksOERBQUMsc0RBQUQ7QUFBTSw4QkFBSSxFQUFDLFNBQVg7QUFBcUIseUNBQWUsRUFBQyxRQUFyQztBQUFBLGlEQUNJO0FBQUcscUNBQVMsRUFBQyxVQUFiO0FBQUEsaUVBRUk7QUFBTSx1Q0FBUyxFQUFDLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQXJCSixlQTZCSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxTQUFYO0FBQXFCLHlDQUFlLEVBQUMsUUFBckM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBLGdFQUVJO0FBQU0sdUNBQVMsRUFBQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkE3QkosZUFxQ0k7QUFBSSxpQ0FBUyxFQUFDLFVBQWQ7QUFBQSwrQ0FDSSw4REFBQyxzREFBRDtBQUFNLDhCQUFJLEVBQUMsU0FBWDtBQUFxQix5Q0FBZSxFQUFDLFFBQXJDO0FBQUEsaURBQ0k7QUFBRyxxQ0FBUyxFQUFDLFVBQWI7QUFBQSxrRUFFSTtBQUFNLHVDQUFTLEVBQUMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBckNKLGVBNkNJO0FBQUksaUNBQVMsRUFBQyxVQUFkO0FBQUEsK0NBQ0ksOERBQUMsc0RBQUQ7QUFBTSw4QkFBSSxFQUFDLFNBQVg7QUFBcUIseUNBQWUsRUFBQyxRQUFyQztBQUFBLGlEQUNJO0FBQUcscUNBQVMsRUFBQyxVQUFiO0FBQUEsa0VBRUk7QUFBTSx1Q0FBUyxFQUFDLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQTdDSixlQXFESTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxTQUFYO0FBQXFCLHlDQUFlLEVBQUMsUUFBckM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBLGlFQUVJO0FBQU0sdUNBQVMsRUFBQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFyREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQXdFSTtBQUFJLDZCQUFTLEVBQUMsVUFBZDtBQUFBLDRDQUNJLDhEQUFDLHNEQUFEO0FBQU0sMEJBQUksRUFBQyxHQUFYO0FBQUEsNkNBQ0k7QUFBRyxpQ0FBUyxFQUFDLFVBQWI7QUFBd0IsK0JBQU8sRUFBRUQsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQUYsRUFBdEM7QUFBQSwwREFDVTtBQUFHLG1DQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFPSTtBQUFJLCtCQUFTLEVBQUMsZUFBZDtBQUFBLDhDQUNJO0FBQUksaUNBQVMsRUFBQyxVQUFkO0FBQUEsK0NBQ0ksOERBQUMsc0RBQUQ7QUFBTSw4QkFBSSxFQUFDLFFBQVg7QUFBb0IseUNBQWUsRUFBQyxRQUFwQztBQUFBLGlEQUNJO0FBQUcscUNBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosZUFNSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxTQUFYO0FBQXFCLHlDQUFlLEVBQUMsUUFBckM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQU5KLGVBV0k7QUFBSSxpQ0FBUyxFQUFDLFVBQWQ7QUFBQSwrQ0FDSSw4REFBQyxzREFBRDtBQUFNLDhCQUFJLEVBQUMsT0FBWDtBQUFtQix5Q0FBZSxFQUFDLFFBQW5DO0FBQUEsaURBQ0k7QUFBRyxxQ0FBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFYSixlQWdCSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxRQUFYO0FBQW9CLHlDQUFlLEVBQUMsUUFBcEM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWhCSixlQXFCSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxXQUFYO0FBQXVCLHlDQUFlLEVBQUMsUUFBdkM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQXJCSixlQTBCSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxVQUFYO0FBQXNCLHlDQUFlLEVBQUMsUUFBdEM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQTFCSixlQStCSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxVQUFYO0FBQXNCLHlDQUFlLEVBQUMsUUFBdEM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQS9CSixlQW9DSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxRQUFYO0FBQW9CLHlDQUFlLEVBQUMsUUFBcEM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQXBDSixlQXlDSTtBQUFJLGlDQUFTLEVBQUMsVUFBZDtBQUFBLCtDQUNJLDhEQUFDLHNEQUFEO0FBQU0sOEJBQUksRUFBQyxTQUFYO0FBQXFCLHlDQUFlLEVBQUMsUUFBckM7QUFBQSxpREFDSTtBQUFHLHFDQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtB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dHMvQ29tbW9uL0Z1bkZhY3RzLmpzIiwid2VicGFjazovL3RhaWtlci8uL2NvbXBvbmVudHMvQ29tbW9uL0xldHNHZXRUb1dvcmsuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vY29tcG9uZW50cy9Db21tb24vT3VyVGVhbVR3by5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9jb21wb25lbnRzL0NvbW1vbi9TdWJzY3JpYmVCb3hlZC5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9jb21wb25lbnRzL0NvbW1vbi9UZXN0aW1vbmlhbHNUd28uanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vY29tcG9uZW50cy9Ib21lTmluZS9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vY29tcG9uZW50cy9Ib21lTmluZS9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9jb21wb25lbnRzL0hvbWVTZXZlbi9DbGllbnRzLmpzIiwid2VicGFjazovL3RhaWtlci8uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXJUd28uanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vY29tcG9uZW50cy9QcmljaW5nL1ByaWNpbmdTdHlsZUZpdmUuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vY29tcG9uZW50cy9TaWRlYmFyTW9kYWwvU2lkZWJhck1vZGFsLmpzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vdXRpbHMvQWN0aXZlTGluay5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL3RhaWtlci8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vdGFpa2VyLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly90YWlrZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzXCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcInJlYWN0LWNvdW50dXBcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIiLCJ3ZWJwYWNrOi8vdGFpa2VyL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly90YWlrZXIvZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovL3RhaWtlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3RhaWtlci9pZ25vcmVkfEM6XFxVc2Vyc1xc7J6E7Jyg7KeEXFxEZXNrdG9wXFxZWUFnZW5jeVxcdGFpa2VyLXJlYWN0LW5leHQtaXQtc3RhcnR1cHMtc2VvLWFnZW5jeS10ZW1wbGF0ZVxcdGFpa2VyLXJlYWN0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIjtcclxuXHJcbmNsYXNzIEZ1bkZhY3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBkaWRWaWV3Q291bnRVcDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgb25WaXNpYmlsaXR5Q2hhbmdlID0gaXNWaXNpYmxlID0+IHtcclxuICAgICAgICBpZiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWRWaWV3Q291bnRVcDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZnVuLWZhY3RzLWFyZWEgcHRiLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZnVuLWZhY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9kb21ldGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25WaXNpYmlsaXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXllZENhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaWRWaWV3Q291bnRVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTI4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWduLWljb25cIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7smYTro4zrkJwg7ZSE66Gc7KCd7Yq4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stdGV4dFwiPlA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mdW4tZmFjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2RvbWV0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblZpc2liaWxpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheWVkQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaWRWaWV3Q291bnRVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWduLWljb25cIj4lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7qs6DqsJ0g66eM7KGx64+EPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stdGV4dFwiPkM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mdW4tZmFjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2RvbWV0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblZpc2liaWxpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheWVkQ2FsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaWRWaWV3Q291bnRVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WVkgQWduZWN57J2YIO2ajOybkOyCrDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLXRleHRcIj5BPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZnVuLWZhY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9kb21ldGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25WaXNpYmlsaXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXllZENhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlkVmlld0NvdW50VXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWduLWljb25cIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7soITrrLgg7J2466ClPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stdGV4dFwiPkU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVuRmFjdHM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIExldHNHZXRUb1dvcmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YnNjcmliZS1hcmVhIGJnLUY0RjdGQ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJzY3JpYmUtaW5uZXItYXJlYSBsZXRzLXdvcmsgamFyYWxsYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5SRUFEWSBUTyBETyBUSElTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MZXQncyBnZXQgdG8gd29yayE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXMgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExldHNHZXRUb1dvcms7IiwiICAgIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbiAgICBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG4gICAgaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuICAgIGNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LW93bC1jYXJvdXNlbDMnKSk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBtYXJnaW46IDMwLFxyXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgICAgIHRvdWNoRHJhZzogZmFsc2UsXHJcbiAgICAgICAgbmF2VGV4dDogW1xyXG4gICAgICAgICAgICBcIjxpIGNsYXNzPSdmbGF0aWNvbi1sZWZ0LWNoZXZyb24nPjwvaT5cIixcclxuICAgICAgICAgICAgXCI8aSBjbGFzcz0nZmxhdGljb24tcmlnaHQtY2hldnJvbic+PC9pPlwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIE91clRlYW1Ud28gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgICAgICBfaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCl7IFxyXG4gICAgICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogdHJ1ZSB9KSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlYW0tYXJlYSBwdGItMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPllZIEFnZW5jeSDtjIA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPllZIEFnZW5jeeydmCDsoITrrLgg7J2466ClPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8T3dsQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVhbS1zbGlkZXIgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVhbS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RlYW0taW1hZ2UvdGVhbTEwLmpwZ1wiIGFsdD1cInRlYW1cIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2xhc3N5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNFTyAmIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZWFtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdGVhbS1pbWFnZS90ZWFtMTEuanBnXCIgYWx0PVwidGVhbVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WaWNreTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GdWxsIFN0YWNrIERldmVsb3Blcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVhbS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RlYW0taW1hZ2UvdGVhbTEyLmpwZ1wiIGFsdD1cInRlYW1cIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWVnYW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxhbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZWFtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdGVhbS1pbWFnZS90ZWFtMTMuanBnXCIgYWx0PVwidGVhbVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5KaW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2ViIERlc2lnbmVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZWFtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdGVhbS1pbWFnZS90ZWFtMTQuanBnXCIgYWx0PVwidGVhbVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5ZZW9uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlYiBEZXNpZ25lcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBBbmltYXRpb24gc2hhcGUgaW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGUyLnN2Z1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWczXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMy5zdmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTQucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGU1LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTkucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMTAucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBPdXJUZWFtVHdvOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBTdWJzY3JpYmVCb3hlZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1YnNjcmliZS1hcmVhIHB0Yi0xMDAgcHQtMCBiZy1GNEY3RkNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZS1pbm5lci1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnNjcmliZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+R2V0IFN0YXJ0ZWQgSW5zdGFudGx5ITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+R2V0IG9uIG9ubHkgbmV3IHVwZGF0ZSBmcm9tIHRoaXMgbmV3c2xldHRlciE8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImlucHV0LW5ld3NsZXR0ZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBbmltYXRpb24gU2hhcGUgSW1hZ2VzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGUyLnN2Z1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMy5zdmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTQucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGU1LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZUJveGVkOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LW93bC1jYXJvdXNlbDMnKSk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgdG91Y2hEcmFnOiBmYWxzZSxcclxuICAgIG5hdlRleHQ6IFtcclxuICAgICAgICBcIjxpIGNsYXNzTmFtZT0nZmxhdGljb24tbGVmdC1jaGV2cm9uJz48L2k+XCIsXHJcbiAgICAgICAgXCI8aSBjbGFzc05hbWU9J2ZsYXRpY29uLXJpZ2h0LWNoZXZyb24nPjwvaT5cIlxyXG4gICAgXSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7IFxyXG4gICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxNTUwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGVzdGltb25pYWxzVHdvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTpmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7IFxyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSkgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWVkYmFjay1hcmVhIGZlZWRiYWNrLWFyZWEtdHdvIHB0Yi0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+UmV2aWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj7qs6DqsJ0g66as67ewPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE93bENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVlZGJhY2stc2xpZGVzIG93bC1jYXJvdXNlbCBvd2wtdGhlbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWVkYmFjay1pdGVtIGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oCc7Lu07ZG47YSw66W8IOyemCDrqrvtlbTshJwg7ZmI7Y6Y7J207KeAIOq0gOumrOyXkCDslrTroKTsm4DsnYQg64qQ6ryI64qU642wIFlZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFnZW5jeeyXkOyEnCDqtZDsnKHrj4Qg64SI66y0IOy5nOygiO2VmOqyjCDtlbTso7zsi6Ag642V67aE7JeQIOyggO2drCDqsIDqsoxcclxuICAgICAgICAgICAgICAgICAgICAgICAg66ek7Lac64+EIOunjuydgCDrj4Tsm4DsnbQg65CY7JeI7Ja07JqUIOqwkOyCrO2VtOyalOKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7su6TtlLztjIzripQg7LKt64WEIOqzoOqwneuLmDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWVkYmFjay1pdGVtIGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZWSBBZ2VuY3kg7KeB7JuQ67aE65OkIOuEiOustCDsuZzsoIgg7ZWY7IS47JqULiDsspjsnYwg7ZWY64qUIOyepeyCrOudvOyEnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrhIjrrLQg6rGx7KCVIOunjuyVmOuKlOuNsCDrjZXrtoTsl5Ag64SI66y0IOydtOyBmOqzoCDtjrjrpqztlZwg67CY7J2R7ZiVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOybueyCrOydtO2KuOqwgCDrgpjsmYDshJwg64SI66y0IOyemCDsnbTsmqntlZjqs6Ag7J6I7Ja07JqU4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPuyCtOuhse2VmOuKlOyDiOuMgSDqs6DqsJ3ri5g8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmVlZGJhY2staXRlbSBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnOuniOy8k+2MhSDqtZDsnKEg64SI66y0IOyii+yVhOyalC4g6re466as6rOgIOyXrOufrCDrjIDtkZzri5jrk6Tqs7wg6rWQ66WYIO2VoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsiJgg7J6I64qUIOy7qO2PrOufsOyKpOuPhCDrhIjrrLQg64+E7JuA7J20IOunjuydtCDrkJjqs6Ag7J6I7Ja07JqUIOuEiOustCDrhIjrrLRcclxuICAgICAgICAgICAgICAgICAgICAgICAg6rCQ7IKs65Oc66Ck7JqUfn5eXuKAnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7quYBYWOybkOyepSDqs6DqsJ3ri5g8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmVlZGJhY2staXRlbSBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnFlZIEFnZW5jeSDrjZXrtoTsl5Ag64SI66y0IO2OuO2VmOqyjCDsmKjrnbzsnbgg7IKs7JeF7J2EIOyLnOyekSDtlaAg7IiYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyeiOyWtOyEnCDrhIjrrLQg7KKL7JWE7JqULiDsp4Hsm5DrtoTrk6Qg64ukIOuEiOustCDsuZzsoIjtlZjqsowg7JWM66Ck7KO87Iuc6rOgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyLuOydtO2KuOuPhCDrhIjrrLQg7J207IGY6rOgIOq0gOumrOuPhCDrhIjrrLQg7Y647ZWY64Sk7JqU4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPuydtFhYIOqzoOqwneuLmDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mZWVkYmFjay1pdGVtIGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oCc7Iug7IaNIOygle2Zle2VnCDsnbzsspjrpqzsl5Ag6rCQ7YOEIOykkeydtOyXkOyalCDsp4Hsm5DrtoTrk6Qg64ukIOuzuOyduCDsnbzsspjrn7wg6ry86ry87ZWY6rKMIOyImOydtSbrsJjsnZHtmJUg7Ju57Y6Y7J207KeA66W8IOunjOuTpOyWtCDso7zshZTshJwg66ek7Lac7JeQIOuEiOustCDtgbAg64+E7JuA7J20IOuQmOqzoCDsnojslrTsmpQu4oCdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPuq5gFhYIOqzoOqwneuLmDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHNUd287IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbiAgICAgICAgY2xhc3MgQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgICAgICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWFnZW5jeS1iYW5uZXIgcGEtYmcxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPuqzoOqwneydmCDruYTsp4Dri4jsiqQg7ISx6rO17J2EIOq4sOybkO2VqeuLiOuLpC48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IFdpc2ggeW91ciBidXNpbmVzcyBzdWNjZXNzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG4gbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOygnOyekSDrrLjsnZggPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTaGFwZSBJbWFnZXMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWcyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMi5zdmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWczXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMy5zdmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNC5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNS5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNy5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlOC5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlOS5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWcxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTEwLnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgQmFubmVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBQcm9qZWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3MtYXJlYSBwdGItMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+T3VyIHBvcnRmb2xpbzwvaDI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd29ya3Mvd29yazEucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7si6zrpqzsg4Hri7Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuuniOyduOuTnOy8gOyWtOyEvO2EsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid29yay1idG5cIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy93b3Jrcy93b3JrMi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuuyleustOuylOyduDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+SE9QRSDrspXrrLTrspXsnbg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8veXltb25rZXlzLmRvdGhvbWUuY28ua3Ivd29ya3MvMS9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid29yay1idG5cIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy93b3Jrcy93b3JrMy5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2VmeybkC/qtZDsnKE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkludGVybmF0aW9uYWwg7Jyg7LmY7JuQPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cDovL3l5bW9ua2V5cy5kb3Rob21lLmNvLmtyL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3b3JrLWJ0blwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3dvcmtzL3dvcms0LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+7Ie87ZWRPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5ZWSBNQVJLRVQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3l5bWFya2V0Lmltd2ViLm1lL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3b3JrLWJ0blwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3dvcmtzL3dvcms1LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+7ISc67mE7IqkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7shKTroIjsnoTsl7Dqtazshow8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3Nlb2xsZWltLmtyL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3b3JrLWJ0blwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3dvcmtzL3dvcms2LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+R1lNPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5ZWSBHWU08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8veXltb25rZXlzLmRvdGhvbWUuY28ua3Ivd29ya3MvMy9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid29yay1idG5cIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBjb2wteGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy93b3Jrcy93b3JrNy5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuyduO2FjOumrOyWtDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+S2V5dGVyaW9yPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9rZXl0ZXJpb3IuaW13ZWIubWUvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndvcmstYnRuXCI+UmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd29ya3Mvd29yazgucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT7sh7ztlZE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPk4gU1RZTEU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL25zdHlsZS5pbXdlYi5tZS9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid29yay1idG5cIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd29ya3Mvd29yazkuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFwcCBEZXZlbG9wbWVudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPldlIHByb3ZpZGUgYW55IHR5cGUgb2YgYXBwIGRldmVsb3BtZW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndvcmstYnRuXCI+UmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd29ya3Mvd29yazEwLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0czNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5NYXJrZXRpbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5XZSBwcm92aWRlIGFueSB0eXBlIG9mIG1hcmtldGluZyBzdXBwb3J0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndvcmstYnRuXCI+UmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLXhsLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvd29ya3Mvd29yazExLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0czNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5FbWFpbCBNYXJrZXRpbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5XZSBwcm92aWRlIGFueSB0eXBlIG9mIEVtYWlsIE1hcmtldGluZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3QtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3b3JrLWJ0blwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC14bC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3dvcmtzL3dvcmsxMi5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+RW1haWwgTWFya2V0aW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+V2UgcHJvdmlkZSBhbnkgdHlwZSBvZiBNYXJrZXRpbmcgJiBSZXBvcnRpbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid29yay1idG5cIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBQYWdpbmF0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0czNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByZXYgcGFnZS1udW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1udW1iZXJzIGN1cnJlbnRcIj4xPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLW51bWJlcnNcIj4yPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1udW1iZXJzXCI+MzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0czNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyc1wiPjQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXh0IHBhZ2UtbnVtYmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgQ2xpZW50cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhcnRuZXItYXJlYSBwdGItMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5DbGllbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPk91ciBMb3ZpbmcgQ2xpZW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3BhcnRuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhcnRuZXItaW1hZ2UvcGFydG5lci1pbWcxLnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhcnRuZXItaW1hZ2UvcGFydG5lci1pbWcxLnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXBhcnRuZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGFydG5lclwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGFydG5lci1pbWFnZS9wYXJ0bmVyLWltZzIucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGFydG5lci1pbWFnZS9wYXJ0bmVyLWltZzIucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcGFydG5lci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wYXJ0bmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYXJ0bmVyLWltYWdlL3BhcnRuZXItaW1nMy5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYXJ0bmVyLWltYWdlL3BhcnRuZXItaW1nMy5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3BhcnRuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhcnRuZXItaW1hZ2UvcGFydG5lci1pbWc0LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhcnRuZXItaW1hZ2UvcGFydG5lci1pbWc0LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXBhcnRuZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGFydG5lclwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGFydG5lci1pbWFnZS9wYXJ0bmVyLWltZzUucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGFydG5lci1pbWFnZS9wYXJ0bmVyLWltZzUucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcGFydG5lci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wYXJ0bmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYXJ0bmVyLWltYWdlL3BhcnRuZXItaW1nNi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYXJ0bmVyLWltYWdlL3BhcnRuZXItaW1nNi5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3BhcnRuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhcnRuZXItaW1hZ2UvcGFydG5lci1pbWc3LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhcnRuZXItaW1hZ2UvcGFydG5lci1pbWc3LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXBhcnRuZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGFydG5lclwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGFydG5lci1pbWFnZS9wYXJ0bmVyLWltZzgucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGFydG5lci1pbWFnZS9wYXJ0bmVyLWltZzgucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcGFydG5lci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wYXJ0bmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYXJ0bmVyLWltYWdlL3BhcnRuZXItaW1nOS5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYXJ0bmVyLWltYWdlL3BhcnRuZXItaW1nOS5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wYXJ0bmVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3BhcnRuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhcnRuZXItaW1hZ2UvcGFydG5lci1pbWcxMC5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYXJ0bmVyLWltYWdlL3BhcnRuZXItaW1nMTAucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEFuaW1hdGlvbiBTaGFwZSBJbWFnZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMi5zdmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWczXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTMuc3ZnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGU0LnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNS5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudHM7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXItYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBJbmZvPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tcGhvbmUtY2FsbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb24gdG8gRnJpIDogMTA6MDBBTSAtIDA2OjAwUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOis4MjAxMDcxNDUyNjc5XCI+KzgyMDEwNzE0NTI2Nzk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWVtYWlsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvIFlvdSBIYXZlIGEgUXVlc3Rpb24/PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86ZXhhbXBsZUB0YWlrZXIuY29tXCI+ZXhhbXBsZUB0YWlrZXIuY29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zb2NpYWwtbWVkaWFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U29jaWFscyBOZXR3b3JrPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpblwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEteW91dHViZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgb2Zmc2V0LWxnLTAgb2Zmc2V0LW1kLTMgb2Zmc2V0LXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0IHBsLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkluc3RhZ3JhbTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLWluc3RhZ3JhbS1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1hZ2UvaW5zdGEtaW1nMS5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWFnZS9pbnN0YS1pbWcyLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltYWdlL2luc3RhLWltZzMuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0taW1hZ2UvaW5zdGEtaW1nNC5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS1pbWFnZS9pbnN0YS1pbWc1LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLWltYWdlL2luc3RhLWltZzYuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5O3tjdXJyZW50WWVhcn0gWVkgQWdlbmN5LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCByaWdodHMgcmVzZXJ2ZWQgPGEgaHJlZj1cImh0dHBzOi8vZW52eXRoZW1lLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5ZWSBBZ25lY3k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXJtcy1hbmQtY29uZGl0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5UZXJtcyAmIENvbmRpdGlvbnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlByaXZhY3kgUG9saWN5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi91dGlscy9BY3RpdmVMaW5rJztcclxuaW1wb3J0IFNpZGViYXJNb2RhbCBmcm9tICcuLi9TaWRlYmFyTW9kYWwvU2lkZWJhck1vZGFsJztcclxuXHJcbmNsYXNzIE5hdmJhclR3byBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gU2lkZWJhciBNb2RhbFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgc2lkZWJhck1vZGFsOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaWRlYmFyTW9kYWw6ICF0aGlzLnN0YXRlLnNpZGViYXJNb2RhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlYXJjaCBGb3JtXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzZWFyY2hGb3JtOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICBoYW5kbGVTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoIHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hGb3JtOiAhcHJldlN0YXRlLnNlYXJjaEZvcm1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOYXZiYXJcclxuICAgIF9pc01vdW50ZWQgPSBmYWxzZTtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJpcy1zdGlja3lcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXN0aWNreVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjbGFzc09uZSA9IGNvbGxhcHNlZCA/ICdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnIDogJ2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93JztcclxuICAgICAgICBjb25zdCBjbGFzc1R3byA9IGNvbGxhcHNlZCA/ICduYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCBjb2xsYXBzZWQnIDogJ25hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0JztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhIG5hdmJhci1hcmVhLXR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRhbmktbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwiYmxhY2stbG9nb1wiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28td2hpdGUucG5nXCIgIGNsYXNzTmFtZT1cIndoaXRlLWxvZ29cIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVOYXZiYXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzVHdvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgdG9wLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgbWlkZGxlLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgYm90dG9tLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzT25lfSBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17ZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lIE9uZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4MlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZSBUd288L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleDNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWUgVGhyZWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleDRcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWUgRm91cjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4NVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgRml2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3XCI+TmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4NlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgU2l4IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXdcIj5OZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5kZXg3XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBTZXZlbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3XCI+TmV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luZGV4OFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgRWlnaHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleDlcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIE5pbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ld1wiPk5ldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VzIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWJvdXQgVXMgU3R5bGUgT25lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXQyXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dCBVcyBTdHlsZSBUd288L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5UZWFtIFN0eWxlIE9uZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RlYW0yXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5UZWFtIFN0eWxlIFR3bzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlYXR1cmVzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5GZWF0dXJlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaWNpbmdcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlByaWNpbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYXJ0bmVyXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5QYXJ0bmVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaWdudXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZBUTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Vycm9yXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj40MDQgRXJyb3IgUGFnZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TZXJ2aWNlcyBTdHlsZSBPbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlczJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNlcnZpY2VzIFN0eWxlIFR3bzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzM1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2VydmljZXMgU3R5bGUgVGhyZWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlLWRldGFpbHNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlIERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0cyA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlByb2plY3RzIFN0eWxlIE9uZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UHJvamVjdHMgU3R5bGUgVHdvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Qcm9qZWN0cyBTdHlsZSBUaHJlZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzNFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+UHJvamVjdHMgU3R5bGUgRm91cjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3QtZGV0YWlsc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2hvcDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpbmdsZS1wcm9kdWN0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaW5nbGUgcHJvZHVjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2cgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QmxvZyBHcmlkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZzJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkJsb2cgUmlnaHQgU2lkZWJhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctZGV0YWlsc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QmxvZyBEZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9kdWN0cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaEZvcm19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYnRuIGZsYXRpY29uLXNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnNlYXJjaEZvcm0gPyAnbm9uZScgOiAnYmxvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoRm9ybX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNsb3NlLWJ0biBmbGF0aWNvbi1jbG9zZSAke3RoaXMuc3RhdGUuc2VhcmNoRm9ybSA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5IHNlYXJjaC1wb3B1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnNlYXJjaEZvcm0gPyAnYmxvY2snIDogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoLWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVyZ2VyLW1lbnVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBSaWdodCBTaWRlYmFyIE1vZGFsICovfVxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXJNb2RhbCBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfSBhY3RpdmU9e3RoaXMuc3RhdGUuc2lkZWJhck1vZGFsID8gJ2FjdGl2ZScgOiAnJ30gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShOYXZiYXJUd28pO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgUHJpY2luZ1N0eWxlVGhyZWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJpY2luZy1hcmVhLXR3byBwdC0xMDAgcGItNzAgYmctZjRmN2ZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPu2ZiO2OmOydtOyngCDsoJzsnpEg67mE7JqpPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPi48L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXByaWNpbmctdGFibGUgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+7IaM7IOB6rO17J24IO2KueqwgO2YlTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPjwvc3VwPiA1MOunjOybkCA8c3ViPjwvc3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByaWNpbmctZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg67CY7J2R7ZiVIOybue2OmOydtOyngFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25lIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFTyDstZzsoIHtmZRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuLpOydtOuCmOuvuSDsnbjthLDroInti7DruIwg7J207Y6Z7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHRoZSBwbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJpY2luZy10YWJsZSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7rqoXtkogg67CY7J2R7ZiVIOybueyCrOydtO2KuDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPjwvc3VwPiAyODDrp4zsm5B7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ViPjwvc3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByaWNpbmctZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg67CY7J2R7ZiVIOybueyCrOydtO2KuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1NM7ISk7LmYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vbGUgQWQvTmF2ZXIg7YyM7JuM66eB7YGsIOyEuO2MhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg66Gc7JaEIO2CpOybjOuTnCDshLjtjIVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2PrO2EuOyCrOydtO2KuCDsgqzsnbTtirgg65Ox66GdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHRoZSBwbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJpY2luZy10YWJsZSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrqoXtkogg67iM656c65SpIOuwmOydke2YlSDtmYjtjpjsnbTsp4BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPjwvc3VwPiAzNTDrp4zsm5B7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ViPjwvc3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByaWNpbmctZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg67CY7J2R7ZiVIOybue2OmOydtOyngFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0VPIOy1nOygge2ZlFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1NMIOyEpOy5mFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vbGUgQWQvTmF2ZXIg7YyM7JuM66eB7YGsIOyEuO2MhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg66Gc7JaEIO2CpOybjOuTnCDshLjtjIVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOu4lOuhnOq3uCDrp4jsvIDtjIUg6rWQ7JyhIDHtmoxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyYgeyDgSDtjrjsp5Eg6riw67O4IOq1kOycoSAx7ZqMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy14LWNpcmNsZSByZWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J247Iqk7YOAIOuniOy8gO2MhSDqtZDsnKEgMe2ajFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMteC1jaXJjbGUgcmVkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDqsozsi5ztjJAgJmFtcDvqsITtjrjroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHRoZSBwbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJpY2luZy10YWJsZSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrqoXtkogg7IiY7J21ICZhbXA7IOuwmOydke2YlVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyHvO2VkeuqsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+PC9zdXA+IDUwMOunjOybkHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+PC9zdWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJpY2luZy1mZWF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy1iYWRnZS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrsJjsnZHtmJXtmYjtjpjsnbTsp4Ag7Ju5JmFtcDvrqqjrsJTsnbxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtmLjtmZjtmJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFT+y1nOygge2ZlFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1NM7ISk7LmYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy1iYWRnZS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29sZSBBZC8gTmF2ZXIg7YyM7JuM66eB7YGsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IS47YyFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy1iYWRnZS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTTlMg66eI7LyA7YyFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKOu4lOuhnOq3uCzsnbjsiqTtg4As7JiB7IOB7Y647KeRKeq1kOycoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyblDHtmoxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLXgtY2lyY2xlIHJlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQRyDshJzruYTsiqQg7KCc6rO1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy14LWNpcmNsZSByZWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6rCE7Y64IOuhnOq3uOyduCjsubTsubTsmKQg64Sk7J2067KEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg66Gc6re47J24KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCB0aGUgcGxhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wcmljaW5nLXRhYmxlIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPuq4sOyXhe2YlSDtmYjtjpjsnbTsp4A8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD48L3N1cD4gNzAw66eM7JuQe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1Yj48L3N1Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcmljaW5nLWZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNFTyDstZzsoIHtmZRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNTTOyEpOy5mFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29vZ2xlIEFkL05hdmVyIO2MjOybjOunge2BrFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyEpOyglVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg66Gc7JaEIO2CpOybjOuTnCDshLjtjIVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOq0gOumrOyekCDtjpjsnbTsp4Ag7KCc6rO1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy1iYWRnZS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQRyDsi5zsiqTthZwg7KCc6rO1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy1iYWRnZS1jaGVja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDqsITtjrjroZzqt7jsnbgo64Sk7J2067KELyDsubTsubTsmKTthqEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4cy14LWNpcmNsZSByZWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Y287Y+s66i87IqkIOuniOy8k+2MhSDqtZDsnKEg7JuUMe2ajFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMteC1jaXJjbGUgcmVkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2ZiO2OmOydtOyngCDqtIDrpqwg6rWQ7JyhIOyblDHtmoxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgdGhlIHBsYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgb2Zmc2V0LWxnLTAgb2Zmc2V0LXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJpY2luZy10YWJsZSBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7rqoXtkoggU1BBIO2UjOueq+2PvO2YlTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPjwvc3VwPiAxMDAw66eM7JuQIOu2gO2EsHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+IDwvc3ViPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByaWNpbmctZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0VPIOy1nOygge2ZlFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXRhbCBNYXJrZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBBbmFseXRpY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWJhZGdlLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kaW5nIFNvbHV0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXRhbCBBY2NvdW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5LXBlci1DbGlja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieHMtYmFkZ2UtY2hlY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjQvNyBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHRoZSBwbGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBbmltYXRpb24gSW1hZ2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGUyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2hhcGUvc2hhcGU1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaW1nNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zaGFwZS9zaGFwZTYucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pbWc5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlOS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWltZzEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3NoYXBlL3NoYXBlMTAucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBQcmljaW5nU3R5bGVUaHJlZTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGViYXJNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbW9kYWw6IGZhbHNlXHJcbiAgICB9O1xyXG4gXHJcbiAgICBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnN0YXRlLm1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZWJhci1tb2RhbCAke3RoaXMucHJvcHMuYWN0aXZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1tb2RhbC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYWJvdXQtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BYm91dCBVczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2UgYmVsaWV2ZSBicmFuZCBpbnRlcmFjdGlvbiBpcyBrZXkgaW4gY29tbXVuaWNhdGlvbi4gUmVhbCBpbm5vdmF0aW9ucyBhbmQgYSBwb3NpdGl2ZSBjdXN0b21lciBleHBlcmllbmNlIGFyZSB0aGUgaGVhcnQgb2Ygc3VjY2Vzc2Z1bCBjb21tdW5pY2F0aW9uLiBObyBmYWtlIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcy4gVGhlIGN1c3RvbWVyIGlzIGtpbmcsIHRoZWlyIGxpdmVzIGFuZCBuZWVkcyBhcmUgdGhlIGluc3BpcmF0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1pbnN0YWdyYW0tZmVlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluc3RhZ3JhbTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2UxLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2UyLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2UzLmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2U0LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2U1LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2U2LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2U3LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ibG9nLWltYWdlL2Jsb2ctaW1hZ2U4LmpwZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWN0LWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm8tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKzA4OCAxMzAgNjI5IDg2MTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9yXCI+T1I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5leGFtcGxlQHRhaWtlci5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEteW91dHViZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluLWluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0gY2xhc3NOYW1lPVwiY2xvc2UtYnRuIHNpZGViYXItbW9kYWwtY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJNb2RhbDsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSlcbiAgICA7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zXG4gICAgICAgIDtcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmR5bmFtaWNPcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgY29uc3Qgc3VzcGVuc2VPcHRpb25zID0gbG9hZGFibGVPcHRpb25zO1xuICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMpIHtcbiAgICAgICAgLy8gRXJyb3IgaWYgcmVhY3Qgcm9vdCBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBkb2Mgd2hlbiB0aGlzIGZlYXR1cmUgaXMgc3RhYmxlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIHJldHVybiBsb2FkYWJsZUZuKHN1c3BlbnNlT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2YmFyVHdvIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclR3byc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lTmluZS9CYW5uZXInO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lTmluZS9Qcm9qZWN0cyc7XHJcbmltcG9ydCBGdW5GYWN0cyBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9GdW5GYWN0cyc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHNUd28gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vVGVzdGltb25pYWxzVHdvJztcclxuaW1wb3J0IFByaWNpbmdTdHlsZUZpdmUgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljaW5nL1ByaWNpbmdTdHlsZUZpdmUnO1xyXG5pbXBvcnQgT3VyVGVhbVR3byBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9PdXJUZWFtVHdvJztcclxuaW1wb3J0IExldHNHZXRUb1dvcmsgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vTGV0c0dldFRvV29yayc7XHJcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZVNldmVuL0NsaWVudHMnO1xyXG5pbXBvcnQgU3Vic2NyaWJlQm94ZWQgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vU3Vic2NyaWJlQm94ZWQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlcic7XHJcblxyXG5jbGFzcyBJbmRleDkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyVHdvIC8+XHJcbiAgICAgICAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgICAgIDxGdW5GYWN0cyAvPlxyXG4gICAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsc1R3byAvPlxyXG4gICAgICAgICAgICAgICAgPFByaWNpbmdTdHlsZUZpdmUgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8T3VyVGVhbVR3byAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxMZXRzR2V0VG9Xb3JrIC8+IFxyXG4gICAgICAgICAgICAgICAgey8qIDxDbGllbnRzIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxTdWJzY3JpYmVCb3hlZCAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPiBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg5OyIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyByb3V0ZXIsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCBjaGlsZCA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xyXG5cclxuICAgIGxldCBjbGFzc05hbWUgPSBjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyc7XHJcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09PSBwcm9wcy5ocmVmICYmIHByb3BzLmFjdGl2ZUNsYXNzTmFtZSkge1xyXG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtwcm9wcy5hY3RpdmVDbGFzc05hbWV9YC50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlIHByb3BzLmFjdGl2ZUNsYXNzTmFtZTtcclxuXHJcbiAgICByZXR1cm4gPExpbmsgey4uLnByb3BzfT57UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGNsYXNzTmFtZSB9KX08L0xpbms+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmVMaW5rKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnR1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb3VudFVwIiwiVmlzaWJpbGl0eVNlbnNvciIsIkZ1bkZhY3RzIiwiZGlkVmlld0NvdW50VXAiLCJpc1Zpc2libGUiLCJzZXRTdGF0ZSIsInJlbmRlciIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInRvcCIsInN0YXRlIiwiTGluayIsIkxldHNHZXRUb1dvcmsiLCJkeW5hbWljIiwiT3dsQ2Fyb3VzZWwiLCJvcHRpb25zIiwibG9vcCIsIm5hdiIsImRvdHMiLCJtYXJnaW4iLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhdXRvcGxheSIsIm1vdXNlRHJhZyIsInRvdWNoRHJhZyIsIm5hdlRleHQiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJPdXJUZWFtVHdvIiwiZGlzcGxheSIsImNvbXBvbmVudERpZE1vdW50IiwiX2lzTW91bnRlZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiU3Vic2NyaWJlQm94ZWQiLCJUZXN0aW1vbmlhbHNUd28iLCJCYW5uZXIiLCJQcm9qZWN0cyIsIkNsaWVudHMiLCJGb290ZXIiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImNvbm5lY3QiLCJTaWRlYmFyTW9kYWwiLCJOYXZiYXJUd28iLCJzaWRlYmFyTW9kYWwiLCJzZWFyY2hGb3JtIiwicHJldlN0YXRlIiwiY29sbGFwc2VkIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsVG8iLCJwcm9kdWN0cyIsInByb3BzIiwiY2xhc3NPbmUiLCJjbGFzc1R3byIsInRvZ2dsZU5hdmJhciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImhhbmRsZVNlYXJjaEZvcm0iLCJ0b2dnbGVNb2RhbCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFkZGVkSXRlbXMiLCJQcmljaW5nU3R5bGVUaHJlZSIsIm1vZGFsIiwib25DbGljayIsImFjdGl2ZSIsImNsb3NlTW9kYWwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm5vU1NSIiwiX2xvYWRhYmxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwibG9hZGFibGVGbiIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsIl9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTIiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlByaWNpbmdTdHlsZUZpdmUiLCJJbmRleDkiLCJBY3RpdmVMaW5rIiwiY2xhc3NOYW1lIiwiYWN0aXZlQ2xhc3NOYW1lIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=