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

const url="https://weed-backend.onrender.com/"
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

    const req = httpMock.expectOne(url+'users/api/token/');
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

    const req = httpMock.expectOne(url+'users/person/create/');
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

    const req = httpMock.expectOne(url+'users/company/create/ ');
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

    const req = httpMock.expectOne(url+'farms/create-farm/');
    expect(req.request.method).toBe('POST');
    req.flush(data);
  });

// Continuación del bloque de código anterior...

  // Test para el método getUser
  it('should send getUser request', () => {
    const id = '123';
    var result;
    service.getUser(id).subscribe(response => {
      expect(response).toEqual(jasmine.any(Object));
      result=response
    });

    const req = httpMock.expectOne(url + 'users/person/' + id);
    expect(req.request.method).toBe('GET');
    req.flush({ result });
  });

  // Test para el método createParcela
  it('should send createParcela request', () => {
    const data: parcelaCreate = {


      farm_id: 1, seed_id: 1, width: 8, length: 8, crop_modality: "Indoor"
    };
    service.createParcela(data).subscribe(response => {
      expect(response).toEqual(data)
    });

    const req = httpMock.expectOne(url+'farms/create-parcel/');
    expect(req.request.method).toBe('POST');
    req.flush(data);
  });

  // Test para el método getFarm
  it('should send getFarm request', () => {
    var result;
    service.getFarm('token').subscribe(response => {
      expect(response).toEqual(jasmine.any(Object));

      result=response
    });

    const req = httpMock.expectOne(url+'farms/get-farm/');
    expect(req.request.method).toBe('GET');
    req.flush({result });
  });

  // Test para el método getParcel
  it('should send getParcel request', () => {
    const id = 1;
    var result;
    service.getParcel(id).subscribe(response => {
      expect(response).toEqual(jasmine.any(Object));
      result=response
    });

    const req = httpMock.expectOne(url+'farms/get-parcel/?farm_id='+id);
    expect(req.request.method).toBe('GET');
    req.flush({ result });
  });

  // Test para el método tokenRefresh
  it('should send tokenRefresh request', () => {
    service.tokenRefresh().subscribe(response => {
      expect(response).toEqual(jasmine.any(Object));
      // Add your assertions for the response here
    });

    const req = httpMock.expectOne(url+'users/api/token/refresh/');
    expect(req.request.method).toBe('POST');
    req.flush({ /* response data */ });
  });

  // Test para el método findAllSeeds
  it('should send findAllSeeds request', () => {
    var result
    service.findAllSeeds().subscribe(response => {
      expect(response).toEqual(jasmine.any(Object));
      result=response
    });

    const req = httpMock.expectOne(url+'seeds/get-seed/');
    expect(req.request.method).toBe('GET');
    req.flush({ result });
  });


  // Test para el método getWheaterApi
it('should send getWheaterApi request', () => {
  const latitude = 52.1;
  const longitude = 52.1;
  var result;
  service.getWheaterApi(latitude, longitude).subscribe(response => {
    expect(response).toEqual(jasmine.any(Object));
    result=response
  });

  const req = httpMock.expectOne(`https://api.open-meteo.com/v1/forecast?longitude=${longitude}&latitude=${latitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain&timezone=auto`);
  expect(req.request.method).toBe('GET');
  req.flush({ result });
});

// Test para el método editParcel
it('should send editParcel request', () => {
  const id = 1;
  const body: parcelaCreate = {
    farm_id: 1, seed_id: 1, width: 8, length: 8, crop_modality: "Indoor"

  };
  service.editParcel(body, id).subscribe(response => {
    expect(response).toEqual(body);
  });

  const req = httpMock.expectOne(url + 'farms/update-parcel/' + id+'/');
  expect(req.request.method).toBe('PUT');
  req.flush(body);
});

// Test para el método getWheaterApiOneDay
it('should send getWheaterApiOneDay request', () => {
  const latitude = 52.1;
  const longitude = 52.1;
  const day = 1;
  var result;
  service.getWheaterApiOneDay(latitude, longitude, day).subscribe(response => {
    expect(response).toEqual(jasmine.any(Object));
    result=response
  });

  const req = httpMock.expectOne(`https://api.open-meteo.com/v1/forecast?longitude=${longitude}&latitude=${latitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain&forecast_days=${day}&timezone=auto`);
  expect(req.request.method).toBe('GET');
  req.flush({ result });
});


});


function done() {
  throw new Error('Function not implemented.');
}

