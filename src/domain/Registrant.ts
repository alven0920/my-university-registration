export interface Registrant {
  id?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  homeAddress?: string;
  homeContactNumber?: string;
  emailAddress?: string;
  provincialAddress?: string;
  provincialContactNumber?: string;
  birthday?: number; // Unix timestamp format
  birthPlace?: string;
  gender?: string;
  maritalStatus?: string;
  nationality?: string;
  height?: number;
  weight?: number;
  fatherName?: string;
  fatherOccupation?: string;
  motherName?: string;
  motherOccupation?: string;
  guardianName?: string;
  guardianRelationship?: string;
  guardianAddress?: string
}
