"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.blockchain = exports.cryptocurrency = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var API_KEY = process.env.API_KEY;

var cryptocurrency = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios["default"].get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=KRW', {
              qs: {
                start: '1',
                limit: '5000',
                convert: 'KRW',
                symbol: 'ETH'
              },
              headers: {
                'X-CMC_PRO_API_KEY': API_KEY
              },
              json: true,
              gzip: true
            });

          case 3:
            response = _context.sent;
            ctx.body = response.data;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            ctx["throw"](500, _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function cryptocurrency(_x) {
    return _ref.apply(this, arguments);
  };
}(); // 유료


exports.cryptocurrency = cryptocurrency;

var blockchain = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx) {
    var response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _axios["default"].get('https://pro-api.coinmarketcap.com/v1/blockchain/statistics/latest', {
              headers: {
                'X-CMC_PRO_API_KEY': API_KEY
              },
              json: true,
              gzip: true
            });

          case 3:
            response = _context2.sent;
            ctx.body = response.data;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            ctx["throw"](500, _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function blockchain(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.blockchain = blockchain;
var _default = null;
exports["default"] = _default;