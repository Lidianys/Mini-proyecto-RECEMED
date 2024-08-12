"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
var _server = require("react-dom/server");
var _server2 = require("vike/server");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function render() {
  return (0, _server.renderToString)( /*#__PURE__*/React.createElement(_server2.VikeServer, null, /*#__PURE__*/React.createElement(_App["default"], null)));
}