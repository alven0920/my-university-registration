import { RegistrantRepository } from '../abstract/RegistrantRepository';

import { RegistrantMySQLRepository } from '../RegistrantMySQLRepository';

export const registrantBindings: Record<string, typeof RegistrantRepository> = {
  default: RegistrantMySQLRepository
};
