const {
  DB_CLIENT = 'mysql2',
  DB_HOST = '127.0.0.1',
  DB_DATABASE = 'my_university',
  DB_USERNAME = 'root',
  DB_PASSWORD = '',
  DB_INTERACTIVE_TIMEOUT = '30',
  DB_WAIT_TIMEOUT = '0',
} = process.env;

export const dbConfig = {
  client: DB_CLIENT,
  host: DB_HOST,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  interactiveTimeout: DB_INTERACTIVE_TIMEOUT,
  waitTimeout: DB_WAIT_TIMEOUT
};

