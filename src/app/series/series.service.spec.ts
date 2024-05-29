/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeriesService } from './series.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";//incluir

describe('Service: Vehiculo', () => {
  let service: SeriesService;//incluir
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],//incluir
      providers: [SeriesService]
    });
    service = TestBed.inject(SeriesService);//incluir
  });

  it('should ...', inject([SeriesService], (service: SeriesService) => {
    expect(service).toBeTruthy();
  }));
});
