"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function LoginPageRut() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    rut = _useState2[0],
    setRut = _useState2[1];
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleNext = function handleNext() {
    if (rut) {
      navigate("/login-password", {
        state: {
          rut: rut
        }
      });
    } else {
      alert("Por favor, ingrese un RUT válido.");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center h-screen bg-gray-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-8 bg-white shadow-lg rounded-lg w-full max-w-sm"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold mb-4 text-blue-500"
  }, "Ingrese su RUT"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Ingresa tu Rut",
    value: rut,
    onChange: function onChange(e) {
      return setRut(e.target.value);
    },
    className: "border border-gray-300 p-2 w-full mb-4 rounded-full placeholder-center"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleNext,
    className: "bg-rm-blue-100 hover:bg-rm-blue-200 text-white font-bold py-2 px-4 rounded-full w-full"
  }, "Siguiente")));
}
var _default = exports["default"] = LoginPageRut;