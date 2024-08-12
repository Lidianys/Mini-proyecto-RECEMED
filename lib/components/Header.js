"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function Header() {
  var userName = localStorage.getItem("userName") || "Invitado";
  return /*#__PURE__*/React.createElement("header", {
    className: "bg-rm-blue-100 text-white p-4 flex justify-end"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg"
  }, userName));
}
var _default = exports["default"] = Header;