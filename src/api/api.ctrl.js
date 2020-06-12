import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const { API_KEY } = process.env;

export const cryptocurrency = async (ctx) => {
  try {
    const response = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=KRW',
      {
        qs: {
          start: '1',
          limit: '5000',
          convert: 'KRW',
          symbol: 'ETH',
        },
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY,
        },
        json: true,
        gzip: true,
      },
    );
    ctx.body = response.data;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 유료
export const blockchain = async (ctx) => {
  try {
    const response = await axios.get(
      'https://pro-api.coinmarketcap.com/v1/blockchain/statistics/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY,
        },
        json: true,
        gzip: true,
      },
    );
    ctx.body = response.data;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export default null;
