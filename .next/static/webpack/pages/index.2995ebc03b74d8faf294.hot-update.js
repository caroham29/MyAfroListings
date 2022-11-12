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

/***/ "./components/modals/login/login.js":
/*!******************************************!*\
  !*** ./components/modals/login/login.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-oauth/google */ \"./node_modules/@react-oauth/google/dist/index.esm.js\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.module.css */ \"./components/modals/login/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/prestonmoore/Desktop/MyAfroListings/components/modals/login/login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Login = function Login(_ref) {\n  _s();\n\n  var setShowLogin = _ref.setShowLogin;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      hoverItem = _useState[0],\n      setHoverItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n      step = _useState2[0],\n      setStep = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"\".concat((_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().loginContainer)),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().loginBody),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().closeContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_7__.GrFormClose, {\n          onClick: function onClick() {\n            return setShowLogin(false);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n        children: \"Sign Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_react_oauth_google__WEBPACK_IMPORTED_MODULE_3__.GoogleLogin, {\n        onSuccess: function onSuccess(credentialResponse) {\n          console.log(credentialResponse);\n          var data = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__.default)(credentialResponse.credential);\n          console.log(data, \" OK SIR\");\n        },\n        width: \"300\",\n        text: \"continue_with\",\n        shape: \"pill\",\n        onError: function onError() {\n          console.log('Login Failed');\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().orContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().orContainerBorder)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().orItem),\n          children: \"OR\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().orContainerBorder)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {\n        as: \"a\",\n        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().fullWidth),\n        variant: \"primary\",\n        children: \"CONTINUE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Login, \"8cSPqWGpFSCoGQq5d7I2xjKj5yc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFscy9sb2dpbi9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCO0FBQ2pDLE1BQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7O0FBQ0Esa0JBQWtDRCwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPWSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUF3QmIsK0NBQVEsQ0FBQyxDQUFELENBQWhDO0FBQUEsTUFBT2MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0FoQixFQUFBQSxnREFBUyxDQUFDLFlBQU0sQ0FFZixDQUZRLEVBRU4sRUFGTSxDQUFUO0FBS0Esc0JBQ0M7QUFBSyxhQUFTLFlBQUtNLHlFQUFMLENBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBRUEsb0VBQWhCO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFFQSx5RUFBaEI7QUFBQSwrQkFDQyw4REFBQyx1REFBRDtBQUFhLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUssWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRCxlQU1HLDhEQUFDLDREQUFEO0FBQ0MsaUJBQVMsRUFBRSxtQkFBQVMsa0JBQWtCLEVBQUk7QUFDL0JDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixrQkFBWjtBQUNBLGNBQUlHLElBQUksR0FBR2QsbURBQVUsQ0FBQ1csa0JBQWtCLENBQUNJLFVBQXBCLENBQXJCO0FBQ0FILFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLEVBQWtCLFNBQWxCO0FBQ0QsU0FMRjtBQU1DLGFBQUssRUFBQyxLQU5QO0FBT0MsWUFBSSxFQUFDLGVBUE47QUFRQyxhQUFLLEVBQUMsTUFSUDtBQVNDLGVBQU8sRUFBRSxtQkFBTTtBQUNiRixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkgsZUFtQkM7QUFBSyxpQkFBUyxFQUFFaEIsc0VBQWhCO0FBQUEsZ0NBQ0M7QUFBTSxtQkFBUyxFQUFFQSw0RUFBd0JvQjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFBTSxtQkFBUyxFQUFFcEIsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELGVBR0M7QUFBTSxtQkFBUyxFQUFFQSw0RUFBd0JvQjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRCxlQXdCQyw4REFBQywyREFBRDtBQUFRLFVBQUUsRUFBQyxHQUFYO0FBQ0MsaUJBQVMsRUFBRXBCLG9FQURaO0FBRUMsZUFBTyxFQUFDLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBa0NBLENBM0NEOztHQUFNSTtVQUNVUjs7O0tBRFZRO0FBNkNOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9kYWxzL2xvZ2luL2xvZ2luLmpzPzU5OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBHb29nbGVMb2dpbiwgdXNlR29vZ2xlTG9naW4gfSBmcm9tICdAcmVhY3Qtb2F1dGgvZ29vZ2xlJztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbG9naW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IEdyRm9ybUNsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvZ3InO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcblxuY29uc3QgTG9naW4gPSAoe3NldFNob3dMb2dpbn0pID0+IHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IFtob3Zlckl0ZW0sIHNldEhvdmVySXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XG5cdH0sIFtdKVxuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxvZ2luQ29udGFpbmVyfWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkJvZHl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlQ29udGFpbmVyfT5cblx0XHRcdFx0XHQ8R3JGb3JtQ2xvc2Ugb25DbGljaz17KCkgPT4gc2V0U2hvd0xvZ2luKGZhbHNlKX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8aDM+U2lnbiBVcDwvaDM+XG5cdFx0XHQgIFx0PEdvb2dsZUxvZ2luXG5cdFx0XHQgIFx0XHRvblN1Y2Nlc3M9e2NyZWRlbnRpYWxSZXNwb25zZSA9PiB7XG5cdFx0XHQgICAgXHRcdGNvbnNvbGUubG9nKGNyZWRlbnRpYWxSZXNwb25zZSk7XG5cdFx0XHQgICAgXHRcdHZhciBkYXRhID0gand0X2RlY29kZShjcmVkZW50aWFsUmVzcG9uc2UuY3JlZGVudGlhbCk7XG5cdFx0XHQgICAgXHRcdGNvbnNvbGUubG9nKGRhdGEsIFwiIE9LIFNJUlwiKVxuXHRcdFx0ICBcdFx0fX1cblx0XHRcdCAgXHRcdHdpZHRoPSczMDAnXG5cdFx0XHQgIFx0XHR0ZXh0PSdjb250aW51ZV93aXRoJ1xuXHRcdFx0ICBcdFx0c2hhcGU9J3BpbGwnXG5cdFx0XHQgIFx0XHRvbkVycm9yPXsoKSA9PiB7XG5cdFx0XHQgICAgXHRcdGNvbnNvbGUubG9nKCdMb2dpbiBGYWlsZWQnKTtcblx0XHRcdCAgXHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3JDb250YWluZXJ9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm9yQ29udGFpbmVyQm9yZGVyfT48L3NwYW4+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMub3JJdGVtfT5PUjwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5vckNvbnRhaW5lckJvcmRlcn0+PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PEJ1dHRvbiBhcz1cImFcIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxXaWR0aH1cblx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiPlxuXHRcdFx0ICAgXHRcdENPTlRJTlVFXG5cdFx0XHQgIFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGb250QXdlc29tZUljb24iLCJHb29nbGVMb2dpbiIsInVzZUdvb2dsZUxvZ2luIiwic3R5bGVzIiwiQnV0dG9uIiwiR3JGb3JtQ2xvc2UiLCJqd3RfZGVjb2RlIiwiTG9naW4iLCJzZXRTaG93TG9naW4iLCJyb3V0ZXIiLCJob3Zlckl0ZW0iLCJzZXRIb3Zlckl0ZW0iLCJzdGVwIiwic2V0U3RlcCIsImxvZ2luQ29udGFpbmVyIiwibG9naW5Cb2R5IiwiY2xvc2VDb250YWluZXIiLCJjcmVkZW50aWFsUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNyZWRlbnRpYWwiLCJvckNvbnRhaW5lciIsIm9yQ29udGFpbmVyQm9yZGVyIiwib3JJdGVtIiwiZnVsbFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/modals/login/login.js\n");

/***/ })

});