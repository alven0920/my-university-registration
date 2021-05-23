import { Registrant } from '../../domain/Registrant';

export abstract class RegistrantRepository {
  abstract getByUniqueId(id: string): Promise<Registrant>;
  abstract getByField(field: string, value: string): Promise<Registrant>;
  abstract saveOneRecord(entity: Registrant): Promise<boolean>;
}
