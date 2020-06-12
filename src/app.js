import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import api from './api';

const { PORT } = process.env;

const app = new Koa();
const router = new Router();

const corsOptions = {
  origin: '/',
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

// api route 적용
router.use('/api', api.routes());

app.use(bodyParser());

// app 인스턴스에 router 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
