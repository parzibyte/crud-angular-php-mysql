import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMascotaComponent } from './agregar-mascota.component';

describe('AgregarMascotaComponent', () => {
  let component: AgregarMascotaComponent;
  let fixture: ComponentFixture<AgregarMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
