import 'dotenv/config';

export default {
  name: 'B.Weather',
  version: '1.0.0',
  extra: {
    ...process.env,
  },
};
