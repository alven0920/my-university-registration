import knex from 'knex';

import { config } from '../../common/knexfile';

export class MySQLBaseDataSource {
  private static _instance: MySQLBaseDataSource;
  private _db: knex | null = null;

  private constructor() {
    this._db = knex(config);
  }

  get db(): knex | null {
    return this._db;
  }

  async clearConnection(): Promise<void> {
    if (this._db === null) {
      return;
    }

    await this._db.destroy();

    this._db = null;
  }

  static getInstance(): MySQLBaseDataSource {

    return this._instance || (this._instance = new this());
  }

}
