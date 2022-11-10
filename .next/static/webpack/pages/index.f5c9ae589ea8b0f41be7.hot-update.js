"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/homepage/homepage.js":
/*!*****************************************!*\
  !*** ./components/homepage/homepage.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-oauth/google */ \"./node_modules/@react-oauth/google/dist/index.esm.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _homepage_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage.module.css */ \"./components/homepage/homepage.module.css\");\n/* harmony import */ var _homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_homepage_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/prestonmoore/Desktop/MyAfroListings/components/homepage/homepage.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Homepage = function Homepage() {\n  _s();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);\n\n  var responseGoogle = function responseGoogle(response) {\n    console.log(response);\n  }; // const { coords, isGeolocationAvailable, isGeolocationEnabled } =\n  //     useGeolocated({\n  //         positionOptions: {\n  //             enableHighAccuracy: true,\n  //         },\n  //         userDecisionTimeout: 5000,\n  //     })\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().homepageContainerMain),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().homepageContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().homepageOverlay),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n            children: \"Afro Business, Afro Education, Afro Community\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h5\", {\n            className: \"m-3\",\n            children: \"Highest Rated Afro Business Services Directory Worldwide, The Best Afro Travel, Afro Education Directory\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 7\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"\".concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchContainer), \" p-3 mt-3 form-inline\"),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"form-group m-2\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n                type: \"search\",\n                className: \"form-control\",\n                autoComplete: \"false\",\n                placeholder: \"Ex: business, service, food\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 9\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"form-group m-2\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n                type: \"search\",\n                className: \"form-control\",\n                autoComplete: \"false\",\n                placeholder: \"Ex: zip code, city, state\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 9\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__.default, {\n              as: \"a\",\n              className: \"\".concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn), \" m-2\"),\n              variant: \"default\",\n              children: \"Search\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 8\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 7\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"video\", {\n        autoPlay: true,\n        muted: true,\n        loop: true,\n        id: \"myVideo\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"source\", {\n          src: \"https://josephfarmsmedia.s3.us-west-1.amazonaws.com/Sequence+01_11.mp4\",\n          type: \"video/mp4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"d-inline-flex p-5 mx-3\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().gridContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().item1),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n            src: \"/tutor1.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainContainer),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                href: \"/hello\",\n                target: \"_blank\",\n                children: \"How one tutor has changed the lives of her students\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 14\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 10\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 8\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"\".concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().item2), \" \").concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainer)),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: \"/img2.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainerDiv),\n            children: \"How Gabby Goodwin's double-face double-snap barrettes shifted the culture\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 8\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"\".concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().item3), \" \").concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainer)),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: \"/img3.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainerDiv),\n            children: \"Beau2Go Meal Prep \\u2013 serving people throughout Philadelphia\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 8\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"\".concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().item4), \" \").concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainer)),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: \"/img4.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainerDiv),\n            children: \"Everyone has potential and everyone needs a coach pushing them to achieve their greatness\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 8\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"\".concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().item5), \" \").concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainer)),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: \"/img5.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainerDiv),\n            children: \"Small black businesses hit harder by inflation, here's why\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 8\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"\".concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().item6), \" \").concat((_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainer)),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: \"/img6.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().smallContainerDiv),\n            children: \"The importance of advancing black home ownership\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 8\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_6___default().rightSide)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Homepage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\n\nvar _c;\n\n$RefreshReg$(_c, \"Homepage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLG1CQURELGVBRUM7QUFBSyxxQkFBUyxFQUFFQSwrRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQTZCQztBQUFLLGlCQUFTLEVBQUVBLHVFQUFnQnNCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNERBLENBM0VEOztHQUFNckI7O0tBQUFBO0FBNkVOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuanM/NDc0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IHVzZUdlb2xvY2F0ZWQgfSBmcm9tIFwicmVhY3QtZ2VvbG9jYXRlZFwiO1xuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdAcmVhY3Qtb2F1dGgvZ29vZ2xlJztcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob21lcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEhvbWVwYWdlID0gKCkgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHR9LCBbXSlcblxuXHRjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xuXHQgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0fVxuICAgIC8vIGNvbnN0IHsgY29vcmRzLCBpc0dlb2xvY2F0aW9uQXZhaWxhYmxlLCBpc0dlb2xvY2F0aW9uRW5hYmxlZCB9ID1cbiAgICAvLyAgICAgdXNlR2VvbG9jYXRlZCh7XG4gICAgLy8gICAgICAgICBwb3NpdGlvbk9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgdXNlckRlY2lzaW9uVGltZW91dDogNTAwMCxcbiAgICAvLyAgICAgfSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZXBhZ2VDb250YWluZXJNYWlufT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZXBhZ2VDb250YWluZXJ9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVwYWdlT3ZlcmxheX0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxoMT5BZnJvIEJ1c2luZXNzLCBBZnJvIEVkdWNhdGlvbiwgQWZybyBDb21tdW5pdHk8L2gxPlxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm0tM1wiPkhpZ2hlc3QgUmF0ZWQgQWZybyBCdXNpbmVzcyBTZXJ2aWNlcyBEaXJlY3RvcnkgV29ybGR3aWRlLCBUaGUgQmVzdCBBZnJvIFRyYXZlbCwgQWZybyBFZHVjYXRpb24gRGlyZWN0b3J5PC9oNT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfSBwLTMgbXQtMyBmb3JtLWlubGluZWB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbS0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIHBsYWNlaG9sZGVyPVwiRXg6IGJ1c2luZXNzLCBzZXJ2aWNlLCBmb29kXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG0tMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiBwbGFjZWhvbGRlcj1cIkV4OiB6aXAgY29kZSwgY2l0eSwgc3RhdGVcIi8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGFzPVwiYVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtzdHlsZXMuYnRufSBtLTJgfVxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJkZWZhdWx0XCI+XG5cdFx0XHRcdFx0XHQgICBcdFx0U2VhcmNoXG5cdFx0XHRcdFx0XHQgIFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbXV0ZWQgbG9vcCBpZD1cIm15VmlkZW9cIj5cblx0XHRcdFx0ICAgIDxzb3VyY2Ugc3JjPVwiaHR0cHM6Ly9qb3NlcGhmYXJtc21lZGlhLnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL1NlcXVlbmNlKzAxXzExLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIj48L3NvdXJjZT5cblx0XHRcdFx0PC92aWRlbz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2BkLWlubGluZS1mbGV4IHAtNSBteC0zYH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZENvbnRhaW5lcn0+XG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW0xfT5cblx0XHRcdFx0XHQgIFx0PGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17XCIvdHV0b3IxLmpwZ1wifS8+XG5cdFx0XHRcdFx0ICBcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRhaW5lcn0+XG5cdFx0XHRcdFx0ICBcdFx0PGgzPjxhIGhyZWY9Jy9oZWxsbycgdGFyZ2V0PVwiX2JsYW5rXCI+SG93IG9uZSB0dXRvciBoYXMgY2hhbmdlZCB0aGUgbGl2ZXMgb2YgaGVyIHN0dWRlbnRzPC9hPjwvaDM+XG5cdFx0XHRcdFx0ICBcdDwvZGl2PlxuXHRcdFx0XHRcdCAgPC9kaXY+XG5cdFx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLml0ZW0yfSAke3N0eWxlcy5zbWFsbENvbnRhaW5lcn1gfT5cblx0XHRcdFx0XHQgIFx0PGltZyBzcmM9e1wiL2ltZzIuanBnXCJ9IC8+XG5cdFx0XHRcdFx0ICBcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxDb250YWluZXJEaXZ9PkhvdyBHYWJieSBHb29kd2luJ3MgZG91YmxlLWZhY2UgZG91YmxlLXNuYXAgYmFycmV0dGVzIHNoaWZ0ZWQgdGhlIGN1bHR1cmU8L2Rpdj5cblx0XHRcdFx0XHQgIDwvZGl2PlxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtM30gJHtzdHlsZXMuc21hbGxDb250YWluZXJ9YH0+XG5cdFx0XHRcdFx0ICBcdDxpbWcgIHNyYz17XCIvaW1nMy5qcGdcIn0gLz5cblx0XHRcdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbENvbnRhaW5lckRpdn0+QmVhdTJHbyBNZWFsIFByZXAg4oCTIHNlcnZpbmcgcGVvcGxlIHRocm91Z2hvdXQgUGhpbGFkZWxwaGlhPC9kaXY+XG5cdFx0XHRcdFx0ICA8L2Rpdj4gIFxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtNH0gJHtzdHlsZXMuc21hbGxDb250YWluZXJ9YH0+XG5cdFx0XHRcdFx0ICBcdDxpbWcgIHNyYz17XCIvaW1nNC5qcGdcIn0gLz5cblx0XHRcdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbENvbnRhaW5lckRpdn0+RXZlcnlvbmUgaGFzIHBvdGVudGlhbCBhbmQgZXZlcnlvbmUgbmVlZHMgYSBjb2FjaCBwdXNoaW5nIHRoZW0gdG8gYWNoaWV2ZSB0aGVpciBncmVhdG5lc3M8L2Rpdj5cblx0XHRcdFx0XHQgIDwvZGl2PlxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtNX0gJHtzdHlsZXMuc21hbGxDb250YWluZXJ9YH0+XG5cdFx0XHRcdFx0ICBcdDxpbWcgIHNyYz17XCIvaW1nNS5qcGdcIn0gLz5cblx0XHRcdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbENvbnRhaW5lckRpdn0+U21hbGwgYmxhY2sgYnVzaW5lc3NlcyBoaXQgaGFyZGVyIGJ5IGluZmxhdGlvbiwgaGVyZSdzIHdoeTwvZGl2PlxuXHRcdFx0XHRcdCAgPC9kaXY+ICBcblx0XHRcdFx0XHQgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbTZ9ICR7c3R5bGVzLnNtYWxsQ29udGFpbmVyfWB9PlxuXHRcdFx0XHRcdCAgXHQ8aW1nICBzcmM9e1wiL2ltZzYuanBnXCJ9IC8+XG5cdFx0XHRcdFx0ICBcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxDb250YWluZXJEaXZ9PlRoZSBpbXBvcnRhbmNlIG9mIGFkdmFuY2luZyBibGFjayBob21lIG93bmVyc2hpcDwvZGl2PlxuXHRcdFx0XHRcdCAgPC9kaXY+IFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFNpZGV9PjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZUdlb2xvY2F0ZWQiLCJHb29nbGVMb2dpbiIsImp3dF9kZWNvZGUiLCJCdXR0b24iLCJzdHlsZXMiLCJIb21lcGFnZSIsInJlc3BvbnNlR29vZ2xlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaG9tZXBhZ2VDb250YWluZXJNYWluIiwiaG9tZXBhZ2VDb250YWluZXIiLCJob21lcGFnZU92ZXJsYXkiLCJzZWFyY2hDb250YWluZXIiLCJidG4iLCJncmlkQ29udGFpbmVyIiwiaXRlbTEiLCJpbWciLCJtYWluQ29udGFpbmVyIiwiaXRlbTIiLCJzbWFsbENvbnRhaW5lciIsInNtYWxsQ29udGFpbmVyRGl2IiwiaXRlbTMiLCJpdGVtNCIsIml0ZW01IiwiaXRlbTYiLCJyaWdodFNpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/homepage/homepage.js\n");

/***/ })

});