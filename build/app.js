"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _api = _interopRequireDefault(require("./api"));

var PORT = process.env.PORT;
var app = new _koa["default"]();
var router = new _koaRouter["default"]();
var corsOptions = {
  origin: '/',
  optionsSuccessStatus: 200,
  credentials: true
};
app.use((0, _cors["default"])(corsOptions)); // api route 적용

router.use('/api', _api["default"].routes());
app.use((0, _koaBodyparser["default"])()); // app 인스턴스에 router 적용

app.use(router.routes()).use(router.allowedMethods());
var port = PORT || 4000;
app.listen(port, function () {
  console.log("Listening to port ".concat(port));
});