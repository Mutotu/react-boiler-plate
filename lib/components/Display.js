"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Display = function Display() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      result = _useState4[0],
      setResult = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      added = _useState6[0],
      setAdded = _useState6[1];

  var _useState7 = (0, _react.useState)(5),
      _useState8 = _slicedToArray(_useState7, 2),
      limit = _useState8[0],
      setLimit = _useState8[1];

  function pquery(artist) {
    var response = fetch("https://itunes.apple.com/search?term=".concat(artist, "&media=music&entity=album&attribute=artistTerm&limit=200")).then(function (res) {
      return res.json();
    }).then(function (r) {
      return showResult(r);
    });
  }

  var handleClick = function handleClick() {
    pquery(input);
    setAdded(true);
    setLimit(5);
    moreButton();
  };

  var moreButton = function moreButton() {
    if (added) return /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {// setLimit((limit += 5));
      }
    }, "See more");
  };

  var showResult = function showResult(data) {
    var _data$results;

    var response = data === null || data === void 0 ? void 0 : (_data$results = data.results) === null || _data$results === void 0 ? void 0 : _data$results.slice(limit - 5, limit);
    return response === null || response === void 0 ? void 0 : response.map(function (artist, id) {
      console.log(artist.artistName);
      return /*#__PURE__*/_react["default"].createElement("p", null, "sdasdasdasd") // <div id={artist.artistId}>
      //   <img src={artist.artworkUrl100} />
      // <p>{artist.artistName} </p>
      //   <p>{artist.collectionName}</p>
      // </div>
      ;
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "",
    value: input,
    onChange: function onChange(e) {
      setInput(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleClick
  }, "Search")), moreButton(), showResult() ? showResult() : null);
};

var _default = Display;
exports["default"] = _default;