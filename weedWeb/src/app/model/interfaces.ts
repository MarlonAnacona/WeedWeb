export interface userRegister {
  name: string;
  last_name: string;
  email: string;
  national_id?: number;
  phone_number?: string;
  password: string;
}

export interface farmCreate {
  farm_name: string;
  latitude?: number;
  longitude?: number;
  token: string | null;
}

export interface farmGet{
  token: string | null;
}

export interface parcelaCreate {
  farm_id: number,
  seed_id: number,
  width: number,
  length: number,
  crop_modality: string;
  token: string | null;

}

export interface parcelaEdit {
  seed_id: number,
  width: number,
  length: number,
  crop_modality: string;
  token: string | null;
}

export interface farm {
  user_id?: string;
  farm_name: string;
  latitude?: number;
  longitude?: number;
  create_date?: string;
  token: string | null;
}


export interface parcela {
  id?: string;
  farm_name?: string;
  width?: number;
  length?: number;
  crop_modality?: string;
  create_date?: string;
  token: string | null;
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
  token: string | null;
}

export interface producto {
  code: string;
  name: string;
  description: string;
  image: string | null; 
  price: number;
  category: number;
  quantity: number;
  rating: number;
}


export interface Purchase {
  dateOfPurchase: string;
  items: PurchaseItem[];
}

export interface PurchaseItem {
  productId: number;
  quantity: number;
  priceAtPurchase: number;
}

export interface CreateCategory {
  name: string;
}