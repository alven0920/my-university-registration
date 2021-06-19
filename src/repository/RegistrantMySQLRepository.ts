import { Registrant } from '../domain/Registrant';
import { RegistrantRepository } from './abstract/RegistrantRepository';
import { MySQLBaseDataSource } from './shared/MySQLBaseDataSource';

export class RegistrantMySQLRepository extends RegistrantRepository {
  private _mysqlDataSource: MySQLBaseDataSource;

  private _tableName = 'registrant';

  constructor() {
    super();
    this._mysqlDataSource = MySQLBaseDataSource.getInstance();
  }

  private toDomain(rawData: any): Registrant {
    return {};
  }

  async getByUniqueId(id: string): Promise<Registrant> {
    const result = await this._mysqlDataSource.db
      ?.table(this._tableName)
      .select('id')
      .where('id', id);

    if (!result?.length || !result[0]) {
      return {} as Registrant;
    }

    return this.toDomain(result[0]);
  }

  getByField(field: string, value: string): Promise<Registrant> {
    throw new Error('Method not implemented.');
  }

  saveOneRecord(entity: Registrant): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

}
