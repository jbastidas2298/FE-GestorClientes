import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionArticulosComponent } from './visualizacion-articulos.component';

describe('VisualizacionArticulosComponent', () => {
  let component: VisualizacionArticulosComponent;
  let fixture: ComponentFixture<VisualizacionArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacionArticulosComponent]
    });
    fixture = TestBed.createComponent(VisualizacionArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
