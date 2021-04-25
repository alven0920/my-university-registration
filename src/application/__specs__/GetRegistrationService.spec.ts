import GetRegistartionService from '../GetRegistrationService';

import { Registrant } from '../../domain/Registrant';
import { StatusCodes } from '../../common/constants';
import { RegistrantFactory } from '../../repository/factories/RegistrantFactory';



const entity: Registrant = {
  id: 'uuid-1234-5678',
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

describe('Get Registration Service', () => {
  afterEach((done) => {
    jest.clearAllMocks();

    done();
  });

  it('should get the student by unique id', async (done) => {
    jest.spyOn(RegistrantFactory, 'getInstanceByTenant').mockReturnValueOnce({
      getByField: async (field: string, value: string) => entity,
      getByUniqueId: async (id: string) => entity,
      saveOneRecord: async (ent: Registrant) => true
    });

    const getSvc = new GetRegistartionService();
    const result = await getSvc.execute({
      id: 'uniqueid-1234-5678'
    });

    expect(typeof result.id).toBe('string');
    done();
  });

  it('should get the student by last name', async (done) => {
    jest.spyOn(RegistrantFactory, 'getInstanceByTenant').mockReturnValueOnce({
      getByField: async (field: string, value: string) => entity,
      getByUniqueId: async (id: string) => entity,
      saveOneRecord: async (ent: Registrant) => true
    });

    const getSvc = new GetRegistartionService();
    const result = await getSvc.execute({
      lastName: 'Reyes'
    });

    expect(typeof result.id).toBe('string');
    done();
  });

  it('should return error when there is no record found', async (done) => {
    jest.spyOn(RegistrantFactory, 'getInstanceByTenant').mockReturnValueOnce({
      getByField: async (field: string, value: string) => ({}),
      getByUniqueId: async (id: string) => ({}),
      saveOneRecord: async (ent: Registrant) => true
    });

    const getSvc = new GetRegistartionService();
    const result = await getSvc.execute({
      id: 'uniqueid-1234-5678'
    });

    expect(result?.error?.code).toBe(StatusCodes.NotFound);
    done();
  });
});