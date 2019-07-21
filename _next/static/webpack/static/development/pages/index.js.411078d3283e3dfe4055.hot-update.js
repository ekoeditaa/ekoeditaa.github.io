webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuItem/MenuItem.jsx":
/*!******************************************!*\
  !*** ./components/MenuItem/MenuItem.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./components/Icon/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/MenuItem/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ekoedita/Desktop/Code/portfol/components/MenuItem/MenuItem.jsx";





function getSVGFill(color) {
  var path = {
    fill: color
  };
  return path;
}

var MenuItem = function MenuItem(props) {
  var title = props.title,
      url = props.url,
      icon = props.icon,
      active = props.active,
      handleClick = props.handleClick;
  var iconSize = 60;

  var renderIcon = function renderIcon() {
    if (active) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: iconSize,
        color: "#EE86B7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, icon.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: i,
          key: i,
          style: getSVGFill('#EE86B7'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: iconSize,
      color: "#6E7376",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, icon.map(function (i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: i,
        key: i,
        style: getSVGFill('#6E7376'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.menu_item,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, renderIcon()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ })

})
//# sourceMappingURL=index.js.411078d3283e3dfe4055.hot-update.js.map