import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';


import { FinancasComponent } from './financas.component';
import { FinancaService } from '../services/financa.service';
import { MatIconModule } from '@angular/material/icon';

describe('FinancasComponent', () => {
  let component: FinancasComponent;
  let fixture: ComponentFixture<FinancasComponent>;
  let financaService: FinancaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancasComponent ],
      imports: [ HttpClientTestingModule, MatIconModule ],
      providers: [ FinancaService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancasComponent);
    component = fixture.componentInstance;
    financaService = TestBed.inject(FinancaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getStockInfo', () => {
    it('should clear variables when value is empty', () => {
      spyOn(component, 'clearVariables');
      spyOn(component, 'checkIfHaveValue').and.returnValue(false);

      component.getStockInfo('');

      expect(component.clearVariables).toHaveBeenCalled();
      expect(component.checkIfHaveValue).toHaveBeenCalledWith('');
      // expect(financaService.buscarStock).not.toHaveBeenCalled();
    });

    it('should make API call when value is not empty', () => {
      spyOn(component, 'makeApiCall');
      spyOn(component, 'checkIfHaveValue').and.returnValue(true);

      component.getStockInfo('AAPL');

      expect(component.makeApiCall).toHaveBeenCalledWith('AAPL');
      expect(component.checkIfHaveValue).toHaveBeenCalledWith('AAPL');
    });
  });

  describe('makeApiCall', () => {


    it('should set erro to true if API response has undefined timeframes or open market values', () => {

      spyOn(component, 'callError');
      spyOn(component.financaService, 'buscarStock').and.returnValue(of({
        timestamp: undefined,
        indicators: {
          quote: [
            { open: undefined }
          ]
        }
      }));
      component.makeApiCall('TEST');
      expect(component.callError).toHaveBeenCalled();
      // expect(component.erro).toBeTrue();
    });

    it('should populate chart data and labels if API response is valid', () => {

      spyOn(component.financaService, 'buscarStock').and.returnValue(of({
        timestamp: [1626705600, 1626709200],
        indicators: {
          quote: [
            { open: [15.75, 15.55] }
          ]
        }
      }));
      component.makeApiCall('TEST');
      expect(component.lineChartData).toEqual([{ data: [15.75, 15.55], label: 'TEST' }]);
      expect(component.lineChartLabels.length).toBe(2);
      expect(component.erro).toBeFalse();
      expect(component.ligarCors).toBeFalse();
    });

    it('should call callLigarCors if API returns status 0', () => {

      spyOn(component, 'callLigarCors');
      spyOn(component.financaService, 'buscarStock').and.returnValue(throwError({ status: 0 }));
      component.makeApiCall('TEST');
      expect(component.callLigarCors).toHaveBeenCalled();
    });

    it('should call callError if API returns an error status code', () => {

      spyOn(component, 'callError');
      spyOn(component.financaService, 'buscarStock').and.returnValue(throwError({ status: 404 }));
      component.makeApiCall('TEST');
      expect(component.callError).toHaveBeenCalled();
      // expect(component.erro).toBeTrue();
    });

  });
  });
