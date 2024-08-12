"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRouterDom = require("react-router-dom");
var _LoginPagePassword = _interopRequireDefault(require("./pages/LoginPagePassword"));
var _LoginPageRut = _interopRequireDefault(require("./pages/LoginPageRut"));
var _PrescriptionsPage = _interopRequireDefault(require("./pages/PrescriptionsPage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_LoginPageRut["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/login-password",
    element: /*#__PURE__*/React.createElement(_LoginPagePassword["default"], null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/React.createElement(_PrescriptionsPage["default"], null)
  })));
}
var _default = exports["default"] = App;