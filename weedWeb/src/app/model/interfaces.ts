export interface userRegister {
  first_name: string;
  last_name: string;
  email: string;
  national_id?: number;
  phone_number?: string;
  middle_name?: string;
  password: string;
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
