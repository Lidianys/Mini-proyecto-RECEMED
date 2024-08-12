"use strict";

var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _LoginPageRut = _interopRequireDefault(require("./LoginPageRut"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Mock para useNavigate
var mockNavigate = jest.fn();
jest.mock("react-router-dom", function () {
  return _objectSpread(_objectSpread({}, jest.requireActual("react-router-dom")), {}, {
    useNavigate: function useNavigate() {
      return mockNavigate;
    }
  });
});
describe("LoginPageRut Component", function () {
  test("renders input field and button", function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react2["default"].createElement(_LoginPageRut["default"], null)));
    var inputElement = _react.screen.getByPlaceholderText(/Ingresa tu Rut/i);
    expect(inputElement).toBeInTheDocument();
    var buttonElement = _react.screen.getByText(/Siguiente/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test("navigates to /login-password with RUT on button click", function () {
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react2["default"].createElement(_LoginPageRut["default"], null)));
    var inputElement = _react.screen.getByPlaceholderText(/Ingresa tu Rut/i);
    _react.fireEvent.change(inputElement, {
      target: {
        value: "11111111-1"
      }
    });
    expect(inputElement.value).toBe("11111111-1"); // Verifica el valor del input

    var buttonElement = _react.screen.getByText(/Siguiente/i);
    _react.fireEvent.click(buttonElement);
    expect(mockNavigate).toHaveBeenCalledWith("/login-password", {
      state: {
        rut: "11111111-1"
      }
    });
  });
  test("shows alert if RUT is empty on button click", function () {
    // Mock para alert
    window.alert = jest.fn();
    (0, _react.render)( /*#__PURE__*/_react2["default"].createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react2["default"].createElement(_LoginPageRut["default"], null)));
    var buttonElement = _react.screen.getByText(/Siguiente/i);
    _react.fireEvent.click(buttonElement);
    expect(window.alert).toHaveBeenCalledWith("Por favor, ingrese un RUT válido.");
  });
});