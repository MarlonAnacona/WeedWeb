import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicesService } from './services.service';
import {
  companyRegister,
  userLogin,
  userRegister,
  farmCreate,
  parcelaCreate,
} from '../model/interfaces';

describe('ServicesService', () => {
  let service: ServicesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicesService]
    });
    service = TestBed.inject(ServicesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.removeItem('token')
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send login request', () => {
    const data: userLogin = { email: "marlon.andres.anacona@gmail.com", password: "juan12345" };
    var refreseh='';
    var  access='';
    service.login(data).subscribe(response => {
      expect(response.refresh).toEqual(jasmine.any(String))
      expect(response.access).toEqual(jasmine.any(String))
      refreseh=response.refreseh
      access=response.access


        });

    const req = httpMock.expectOne('http://127.0.0.1:8000/users/api/token/');
    expect(req.request.method).toBe('POST');
    req.flush({ refresh:refreseh , access:access });
  });

  it('should send user registration request', () => {
    const data: userRegister = {

	email: "name@email.com",
	password: "contrasena123",
	phone_number: "0123456789",
	national_id: 1151954101,
	first_name: "name",
	middle_name: "",
	last_name: "name"

    };
    service.userRegister(data).subscribe(response => {
      expect(response).toEqual(data)
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/users/person/create/');
    expect(req.request.method).toBe('POST');
    req.flush(data);
  });

  it('should send company registration request', () => {
    const data: companyRegister = {
      email:"company@email.com",
      password: "contrasena123",
      phone_number: 1234567819,
      NIT: 11112,
      name: "company inc"

    };
    service.companyRegister(data).subscribe(response => {
      expect(response).toEqual(data)
      // Add your assertions for the response here
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/users/company/create/ ');
    expect(req.request.method).toBe('POST');
    req.flush(data);
  });

  it('should send create farm request', () => {
    const data: farmCreate = {
      user_id: '123',
      farm_name: 'My Farm',
      latitude: 52.1,
      longitude:52.1
    };
    service.createFarm(data).subscribe(response => {
      expect(response).toEqual(data)
      // Add your assertions for the response here
    });

    const req = httpMock.expectOne('http://127.0.0.1:8000/farms/create-farm/');
    expect(req.request.method).toBe('POST');
    req.flush(data);
  });

  // it('should send create parcela request', () => {
  //   const data: parcelaCreate = {
  //     width: 10,
  //     length: 20,
  //     crop_modality: 'Crop Modality'
  //   };
  //   service.createParcela(data).subscribe(response => {
  //     expect(response).toBeTruthy();
  //     // Add your assertions for the response here
  //   });

  //   const req = httpMock.expectOne('http://127.0.0.1:8000/farms/create-parcel/');
  //   expect(req.request.method).toBe('POST');
  //   req.flush({ /* Mocked response */ });
  //   });

    });
function done() {
  throw new Error('Function not implemented.');
}

