"use strict";

var _client = require("react-dom/client");
var _client2 = require("vike/client");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var root = document.getElementById("app");
var rootElement = (0, _client.createRoot)(root);
rootElement.render( /*#__PURE__*/React.createElement(_client2.VikeClient, null, /*#__PURE__*/React.createElement(_App["default"], null)));