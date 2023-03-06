import { environment } from './../../environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FinancaService } from './financa.service';

describe('FinancaService', () => {
  let service: FinancaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FinancaService]
    });

    service = TestBed.inject(FinancaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the stock chart data', () => {
    const symbolStock = 'AAPL';
    const mockData = {
      chart: {
        result: [{
          meta: {},
          indicators: {},
          timestamp: []
        }]
      }
    };

    service.buscarStock(symbolStock).subscribe(data => {
      expect(data).toEqual(mockData.chart.result[0]);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/v8/finance/chart/${symbolStock}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

});
