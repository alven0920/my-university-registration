import { RegistrantRepository } from '../abstract/RegistrantRepository';
import { registrantBindings } from './bindings';

export class RegistrantFactory {
  static getInstanceByTenant(id: string): RegistrantRepository {
    const instance = <RegistrantRepository> Object.create(registrantBindings[id].prototype);
    instance.constructor.apply(instance);

    return instance;
  }
}
