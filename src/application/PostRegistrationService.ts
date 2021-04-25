import AbstractService from './shared/AbstractService';
import { RegServiceRequestDTO, RegServiceResponseDTO } from './RegistrationServiceDTO';
import { Registrant } from '../domain/Registrant';
import { ErrorResponseDTO } from './shared/ErrorResponseDTO';
import { StatusCodes } from '../common/constants';
import { RegistrantFactory } from '../repository/factories/RegistrantFactory';

type ResponseDTO = ErrorResponseDTO & RegServiceResponseDTO;

export default class PostRegistrationService
  extends AbstractService<RegServiceRequestDTO, ResponseDTO> {

  private toDomain(raw: any): Registrant {
    const {
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
    } = raw;

    return {
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

  async execute(args: RegServiceRequestDTO): Promise<ResponseDTO> {
    const { tenantId = '' } = args;

    const registrant = this.toDomain(args);

    const result = await RegistrantFactory.getInstanceByTenant(tenantId)
      .saveOneRecord(registrant);

    if (!result) {
      return {
        error: {
          code: StatusCodes.InternalServerError,
          message: 'Cannot process registration. Please try again later.'
        }
      };
    }

    return {
      message: 'Registration is successful',
    };
  }
}
