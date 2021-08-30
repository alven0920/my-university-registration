const {
  DB_CLIENT = 'mysql2',
  DB_HOST = '127.0.0.1',
  DB_DATABASE = 'my_university',
  DB_USERNAME = 'root',
  DB_PORT = '3307',
  DB_PASSWORD = 'Abcd12345',
  DB_INTERACTIVE_TIMEOUT = '30',
  DB_WAIT_TIMEOUT = '0',

  PORT = '9002',
  APP_ID = 'MY_UNIVERSITY_REGISTRATION_DEFAULT',
  IS_CLUSTERED = 'false'
} = process.env;

export const serverSettings = {
  isClustered: IS_CLUSTERED === 'true',
  appId: APP_ID,
  port: parseInt(PORT, 10)
};

export const dbConfig = {
  client: DB_CLIENT,
  host: DB_HOST,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT, 10),
  interactiveTimeout: DB_INTERACTIVE_TIMEOUT,
  waitTimeout: DB_WAIT_TIMEOUT
};

