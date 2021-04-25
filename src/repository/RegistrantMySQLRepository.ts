import { Registrant } from '../domain/Registrant';
import { RegistrantRepository } from './abstract/RegistrantRepository';

export class RegistrantMySQLRepository extends RegistrantRepository {
  getByUniqueId(id: string): Promise<Registrant> {
    throw new Error('Method not implemented.');
  }
  getByField(field: string, value: string): Promise<Registrant> {
    throw new Error('Method not implemented.');
  }
  saveOneRecord(entity: Registrant): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

}
