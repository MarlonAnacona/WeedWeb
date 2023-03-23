export interface userRegister {
  firstName: string;
  lastName: string;
  email: string;
  nationalId: number;
  phoneNumber:number;
  password: string;
}

export interface user {
  firstName: string;
  lastName: string;
  email: string;
  nationalId: number;
  phoneNumber:number;
  password: string;
}

export interface companyRegister {
  name: string;
  email: string;
  password: string;
  nit: number;
  phoneNumber:number;
}

export interface userLogin {
  email: string;
  password: string;
}
