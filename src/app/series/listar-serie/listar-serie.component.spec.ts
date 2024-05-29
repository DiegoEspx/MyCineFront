import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSerieComponent } from './listar-serie.component';

describe('ListarSerieComponent', () => {
  let component: ListarSerieComponent;
  let fixture: ComponentFixture<ListarSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
