"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _display = _interopRequireDefault(require("./components/display"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// class App extends React.Component {
//   render() {
//     return <h1>TEST</h1>;
//   }
// }
// export default App;
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_display["default"], null));
};

var _default = App;
exports["default"] = _default;