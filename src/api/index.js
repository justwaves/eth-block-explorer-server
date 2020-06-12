import Router from 'koa-router';
import * as apiCtrl from './api.ctrl';

const api = new Router();

api.get('/cryptocurrency', apiCtrl.cryptocurrency);

export default api;
