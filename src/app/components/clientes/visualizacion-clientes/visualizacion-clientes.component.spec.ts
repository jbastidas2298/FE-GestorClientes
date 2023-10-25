import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionClientesComponent } from './visualizacion-clientes.component';

describe('VisualizacionClientesComponent', () => {
  let component: VisualizacionClientesComponent;
  let fixture: ComponentFixture<VisualizacionClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacionClientesComponent]
    });
    fixture = TestBed.createComponent(VisualizacionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
