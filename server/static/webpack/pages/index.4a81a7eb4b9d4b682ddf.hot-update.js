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

/***/ "./src/components/state/Misc/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/state/Misc/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/data */ \"./src/data/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/snyssss/\\u5DE5\\u4F5C/WFHelper-UI/src/components/state/Misc/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar StyledBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box)(function (_ref) {\n  var theme = _ref.theme;\n  return {\n    display: 'flex',\n    alignItems: 'center',\n    padding: theme.spacing(0, 1.5),\n    borderWidth: '0 0 1px',\n    borderStyle: 'solid',\n    borderColor: theme.palette.divider\n  };\n});\n\nvar Row = function Row(_ref2) {\n  _s();\n\n  var index = _ref2.index,\n      style = _ref2.style;\n\n  var _useGameState = (0,_data__WEBPACK_IMPORTED_MODULE_2__.useGameState)(),\n      _useGameState2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useGameState, 1),\n      gameState = _useGameState2[0];\n\n  if (index < Object.keys(gameState || {}).length) {\n    var key = Object.keys(gameState || {})[index];\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StyledBox, {\n      style: style,\n      sx: index % 2 === 0 ? {\n        background: function background(theme) {\n          return theme.palette.grey[100];\n        }\n      } : {},\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        variant: \"body2\",\n        noWrap: true,\n        children: [key, \" : \", gameState[key]]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return null;\n};\n\n_s(Row, \"VW420Dl3dZeJcBq7/gg2XpFte5o=\", false, function () {\n  return [_data__WEBPACK_IMPORTED_MODULE_2__.useGameState];\n});\n\n_c = Row;\n\nvar Component = function Component() {\n  _s2();\n\n  var _useGameState3 = (0,_data__WEBPACK_IMPORTED_MODULE_2__.useGameState)(),\n      _useGameState4 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useGameState3, 1),\n      gameState = _useGameState4[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n      title: \"\\u6742\\u9879\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Divider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_6__.FixedSizeList, {\n      className: \"List\",\n      width: \"100%\",\n      height: 400,\n      itemCount: Object.keys(gameState || {}).length,\n      itemSize: 40,\n      children: Row\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Component, \"VW420Dl3dZeJcBq7/gg2XpFte5o=\", false, function () {\n  return [_data__WEBPACK_IMPORTED_MODULE_2__.useGameState];\n});\n\n_c2 = Component;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Row\");\n$RefreshReg$(_c2, \"Component\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdGF0ZS9NaXNjL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFRQTtBQUtBOztBQU9BLElBQU1TLFNBQVMsR0FBR0YsNERBQU0sQ0FBQ0wsOENBQUQsQ0FBTixDQUFZO0FBQUEsTUFBR1EsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDNUNDLElBQUFBLE9BQU8sRUFBRSxNQURtQztBQUU1Q0MsSUFBQUEsVUFBVSxFQUFFLFFBRmdDO0FBRzVDQyxJQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsR0FBakIsQ0FIbUM7QUFJNUNDLElBQUFBLFdBQVcsRUFBRSxTQUorQjtBQUs1Q0MsSUFBQUEsV0FBVyxFQUFFLE9BTCtCO0FBTTVDQyxJQUFBQSxXQUFXLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjQztBQU5pQixHQUFoQjtBQUFBLENBQVosQ0FBbEI7O0FBU0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sUUFBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsS0FBNkIsU0FBN0JBLEtBQTZCO0FBQUEsTUFBdEJDLEtBQXNCLFNBQXRCQSxLQUFzQjs7QUFDMUMsc0JBQW9CZCxtREFBWSxFQUFoQztBQUFBO0FBQUEsTUFBT2UsU0FBUDs7QUFFQSxNQUFJRixLQUFLLEdBQUdHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixTQUFTLElBQUksRUFBekIsRUFBNkJHLE1BQXpDLEVBQWlEO0FBQy9DLFFBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDQyxJQUFQLENBQVlGLFNBQVMsSUFBSSxFQUF6QixFQUE2QkYsS0FBN0IsQ0FBWjtBQUVBLHdCQUNFLDhEQUFDLFNBQUQ7QUFDRSxXQUFLLEVBQUVDLEtBRFQ7QUFHRSxRQUFFLEVBQ0FELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUNJO0FBQUVPLFFBQUFBLFVBQVUsRUFBRSxvQkFBQ2xCLEtBQUQ7QUFBQSxpQkFBV0EsS0FBSyxDQUFDUSxPQUFOLENBQWNXLElBQWQsQ0FBbUIsR0FBbkIsQ0FBWDtBQUFBO0FBQWQsT0FESixHQUVJLEVBTlI7QUFBQSw2QkFTRSw4REFBQyxxREFBRDtBQUFZLGVBQU8sRUFBQyxPQUFwQjtBQUE0QixjQUFNLE1BQWxDO0FBQUEsbUJBQ0dGLEdBREgsU0FDV0osU0FBUyxDQUFDSSxHQUFELENBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGLE9BRU9OLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBZUQ7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0F4QkQ7O0dBQU1EO1VBQ2dCWjs7O0tBRGhCWTs7QUEwQk4sSUFBTVUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBb0I7QUFBQTs7QUFDcEMsdUJBQW9CdEIsbURBQVksRUFBaEM7QUFBQTtBQUFBLE1BQU9lLFNBQVA7O0FBRUEsc0JBQ0UsOERBQUMsK0NBQUQ7QUFBQSw0QkFDRSw4REFBQyxxREFBRDtBQUFZLFdBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyx1REFBRDtBQUNFLGVBQVMsRUFBQyxNQURaO0FBRUUsV0FBSyxFQUFDLE1BRlI7QUFHRSxZQUFNLEVBQUUsR0FIVjtBQUlFLGVBQVMsRUFBRUMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLFNBQVMsSUFBSSxFQUF6QixFQUE2QkcsTUFKMUM7QUFLRSxjQUFRLEVBQUUsRUFMWjtBQUFBLGdCQU9HTjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbEJEOztJQUFNVTtVQUNnQnRCOzs7TUFEaEJzQjtBQW9CTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zdGF0ZS9NaXNjL2luZGV4LnRzeD9kZmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzLCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcblxuaW1wb3J0IHtcbiAgQm94LFxuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBEaXZpZGVyLFxuICBUb29sdGlwLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcblxuaW1wb3J0IHsgdXNlU2l6ZSB9IGZyb20gJ2Fob29rcyc7XG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcblxuaW1wb3J0IHsgdXNlR2FtZUxvZywgdXNlR2FtZVN0YXRlIH0gZnJvbSAnfi9kYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3dQcm9wcyB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHN0eWxlOiBDU1NQcm9wZXJ0aWVzO1xufVxuXG5jb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQoQm94KSgoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEuNSksXG4gIGJvcmRlcldpZHRoOiAnMCAwIDFweCcsXG4gIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxufSkpO1xuXG5jb25zdCBSb3cgPSAoeyBpbmRleCwgc3R5bGUgfTogUm93UHJvcHMpID0+IHtcbiAgY29uc3QgW2dhbWVTdGF0ZV0gPSB1c2VHYW1lU3RhdGUoKTtcblxuICBpZiAoaW5kZXggPCBPYmplY3Qua2V5cyhnYW1lU3RhdGUgfHwge30pLmxlbmd0aCkge1xuICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGdhbWVTdGF0ZSB8fCB7fSlbaW5kZXhdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRCb3hcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBzeD17XG4gICAgICAgICAgaW5kZXggJSAyID09PSAwXG4gICAgICAgICAgICA/IHsgYmFja2dyb3VuZDogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXSB9XG4gICAgICAgICAgICA6IHt9XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgbm9XcmFwPlxuICAgICAgICAgIHtrZXl9IDoge2dhbWVTdGF0ZVtrZXldfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1N0eWxlZEJveD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBDb21wb25lbnQgPSAoKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgW2dhbWVTdGF0ZV0gPSB1c2VHYW1lU3RhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCLmnYLpoblcIiAvPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgIGNsYXNzTmFtZT1cIkxpc3RcIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgaXRlbUNvdW50PXtPYmplY3Qua2V5cyhnYW1lU3RhdGUgfHwge30pLmxlbmd0aH1cbiAgICAgICAgaXRlbVNpemU9ezQwfVxuICAgICAgPlxuICAgICAgICB7Um93fVxuICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZpeGVkU2l6ZUxpc3QiLCJCb3giLCJDYXJkIiwiQ2FyZEhlYWRlciIsIkRpdmlkZXIiLCJUeXBvZ3JhcGh5Iiwic3R5bGVkIiwidXNlR2FtZVN0YXRlIiwiU3R5bGVkQm94IiwidGhlbWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJzcGFjaW5nIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwicGFsZXR0ZSIsImRpdmlkZXIiLCJSb3ciLCJpbmRleCIsInN0eWxlIiwiZ2FtZVN0YXRlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImtleSIsImJhY2tncm91bmQiLCJncmV5IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/state/Misc/index.tsx\n");

/***/ })

});