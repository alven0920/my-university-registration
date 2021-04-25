import PostRegistartionService from '../PostRegistrationService';

import { Registrant } from '../../domain/Registrant';
import { RegistrantFactory } from '../../repository/factories/RegistrantFactory';

const entity: Registrant = {
  birthPlace: 'Sampaloc, Manila',
  birthday: 549391776,
  fatherName: 'Luke Alba',
  motherName: 'Jane Reyes',
  firstName: 'Rodel',
  middleName: 'Reyes',
  lastName: 'Alba',
  homeAddress: 'Sto. Niño Village, Muntinlupa City',
  nationality: 'Filipino'
};

describe('Post Registration Service', () => {
  beforeEach((done) => {
    done();
  });

  afterEach((done) => {
    jest.clearAllMocks();

    done();
  });

  it('should register a student and return success message', async (done) => {
    jest.spyOn(RegistrantFactory, 'getInstanceByTenant').mockReturnValueOnce({
      getByField: async (field: string, value: string) => entity,
      getByUniqueId: async (id: string) => entity,
      saveOneRecord: async (ent: Registrant) => true
    });

    const postSvc = new PostRegistartionService();
    const result = await postSvc.execute({
      firstName: 'Stephen',
      lastName: 'Fry',
      middleName: 'Mark'
    });

    expect(result.message).toBeDefined();
    done();
  });

  it('should return error when database returns false in registration', async (done) => {
    jest.spyOn(RegistrantFactory, 'getInstanceByTenant').mockReturnValueOnce({
      getByField: async (field: string, value: string) => entity,
      getByUniqueId: async (id: string) => entity,
      saveOneRecord: async (ent: Registrant) => false
    });

    const postSvc = new PostRegistartionService();
    const result = await postSvc.execute({
      firstName: 'Stephen',
      lastName: 'Fry',
      middleName: 'Mark'
    });

    expect(result.message).not.toBeDefined();
    expect(result.error).toBeDefined();
    done();
  });
});