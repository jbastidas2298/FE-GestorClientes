import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosOrdenComponent } from './articulos-orden.component';

describe('ArticulosOrdenComponent', () => {
  let component: ArticulosOrdenComponent;
  let fixture: ComponentFixture<ArticulosOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticulosOrdenComponent]
    });
    fixture = TestBed.createComponent(ArticulosOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
