import { promisify } from 'util';
import { Config, CreateTableBuilder } from 'knex';
import { dbConfig } from './config';

const MAX_IDLE = process.platform === 'win32' ? 2147483 : 31536000;

const {
  client,
  database,
  host,
  interactiveTimeout,
  password,
  port,
  username,
  waitTimeout
} = dbConfig;

const isValidNumber = (value: string | undefined): boolean => {
  if (typeof value === undefined || value === '') {
    return false;
  }

  const number = Number(value);

  return Number.isInteger(number) && number >= 1 && number <= MAX_IDLE;
};

const makeAfterCreate = (
  interactiveTimeout: string | undefined,
  waitTimeout: string | undefined
) => async (connection, done) => {
  const query = (sql: string) =>
    promisify(connection.query).call(connection, sql);

  try {
    if (isValidNumber(interactiveTimeout)) {
      console.debug(`Set session interactive_timeout to ${interactiveTimeout}`);
      await query(`SET SESSION interactive_timeout = ${interactiveTimeout};`);
    }

    if (isValidNumber(waitTimeout)) {
      console.debug(`Set session wait_timeout to ${waitTimeout}`);
      await query(`SET SESSION wait_timeout = ${waitTimeout};`);
    }

    done(null, connection);
  } catch (error) {
    console.error(error);
    done(error, connection);
  }
};

const config: Config = {
  client,
  connection: {
    host,
    database,
    user: username,
    password,
    port
  },
  pool: {
    afterCreate: makeAfterCreate(
      interactiveTimeout,
      waitTimeout
    ),
  }
};

export function prepareTable(table: CreateTableBuilder): CreateTableBuilder {
  table.engine('InnoDB');
  table.charset('utf8');
  return table;
}

export default config;
