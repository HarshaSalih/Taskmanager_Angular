import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch patient details by email', () => {
    const dummyData = { /* dummy data */ };
    const email = 'example@example.com';

    service.fetchloggeddetails(email).subscribe(data => {
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne(`http://localhost:8080/viewPatient/${email}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});



