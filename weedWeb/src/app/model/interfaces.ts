export interface userRegister {
  name: string;
  last_name: string;
  email: string;
  national_id?: number;
  phone_number?: string;
  password: string;
}

export interface farmCreate {
  user_id: string;
  farm_name: string;
  latitude?: number;
  longitude?: number;
}

export interface parcelaCreate {
  farm_id: number,
  seed_id: number,
  width: number,
  length: number,
  crop_modality: string

}

export interface parcelaEdit {
  seed_id: number,
  width: number,
  length: number,
  crop_modality: string
}

export interface farm {
  user_id?: string;
  farm_name: string;
  latitude?: number;
  longitude?: number;
  create_date?: string;
}


export interface parcela {
  id?: string;
  farm_name?: string;
  width?: number;
  length?: number;
  crop_modality?: string;
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
  nit?: number;
  phone_number?: number;
}

export interface userLogin {
  password: string;
  email: string;

}

export interface seed{
  id: number;
  description:string;
  cbd:number;
  thc:number;
  species_name:string;
}
