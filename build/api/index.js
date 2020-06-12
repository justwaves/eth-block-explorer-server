"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var apiCtrl = _interopRequireWildcard(require("./api.ctrl"));

var api = new _koaRouter["default"]();
api.get('/cryptocurrency', apiCtrl.cryptocurrency);
var _default = api;
exports["default"] = _default;