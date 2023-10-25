import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionOrdenComponent } from './visualizacion-orden.component';

describe('VisualizacionOrdenComponent', () => {
  let component: VisualizacionOrdenComponent;
  let fixture: ComponentFixture<VisualizacionOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacionOrdenComponent]
    });
    fixture = TestBed.createComponent(VisualizacionOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
