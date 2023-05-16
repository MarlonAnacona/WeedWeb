export interface userRegister {
  first_name: string;
  last_name: string;
  email: string;
  national_id?: number;
  phone_number?: string;
  middle_name?: string;
  password: string;
}
export interface Parcela {
  id?: string;
  farm_name?: string;
  width?: number;
  length?: number;
  crop_modality?: string;
  latitude?: number;
  longitude?: number;
  create_date?: string;
}

export interface user {
  firstName: string;
  lastName: string;
  email: string;
  nationalId: number;
  phoneNumber: number;
  password: string;
}

export interface companyRegister {
  name: string;
  email: string;
  password: string;
  NIT?: number;
  phone_number?: number;
}

export interface userLogin {
  email: string;
  password: string;
}
