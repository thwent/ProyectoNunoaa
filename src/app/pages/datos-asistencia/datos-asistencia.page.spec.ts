import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosAsistenciaPage } from './datos-asistencia.page';

describe('DatosAsistenciaPage', () => {
  let component: DatosAsistenciaPage;
  let fixture: ComponentFixture<DatosAsistenciaPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(DatosAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
