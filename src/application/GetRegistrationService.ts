import AbstractService from './shared/AbstractService';
import { GetRegistrationRequestDTO, RegServiceRequestDTO } from './RegistrationServiceDTO';
import { ErrorResponseDTO } from './shared/ErrorResponseDTO';
import { Registrant } from '../domain/Registrant';
import { StatusCodes } from '../common/constants';
import { RegistrantFactory } from '../repository/factories/RegistrantFactory';

type ResponseDTO = ErrorResponseDTO & RegServiceRequestDTO;

export default class GetRegistrationService
  extends AbstractService<GetRegistrationRequestDTO, ResponseDTO> {

  private toResponseDTO(entity: Registrant): RegServiceRequestDTO {
    const {
      id,
      birthPlace,
      birthday,
      fatherName,
      fatherOccupation,
      firstName,
      gender,
      guardianAddress,
      guardianName,
      guardianRelationship,
      height,
      homeAddress,
      homeContactNumber,
      lastName,
      maritalStatus,
      middleName,
      motherName,
      motherOccupation,
      nationality,
      provincialAddress,
      provincialContactNumber,
      weight
    } = entity;

    return {
      id,
      birthPlace,
      birthday,
      fatherName,
      fatherOccupation,
      firstName,
      gender,
      guardianAddress,
      guardianName,
      guardianRelationship,
      height,
      homeAddress,
      homeContactNumber,
      lastName,
      maritalStatus,
      middleName,
      motherName,
      motherOccupation,
      nationality,
      provincialAddress,
      provincialContactNumber,
      weight
    };
  }

  async execute(args: GetRegistrationRequestDTO): Promise<ResponseDTO> {
    const { tenantId = '', id, lastName } = args;
    let result: Registrant = {};

    if (id) {
      result = await RegistrantFactory.getInstanceByTenant(tenantId).getByUniqueId(id);
    }

    if (lastName) {
      result = await RegistrantFactory.getInstanceByTenant(tenantId).getByField('lastName', lastName);
    }

    if (!result || !Object.keys(result).length) {
      return {
        error: {
          code: StatusCodes.NotFound,
          message: 'Record Not Found'
        }
      };
    }

    return this.toResponseDTO(result);
  }
}
