import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMascotaComponent } from './editar-mascota.component';

describe('EditarMascotaComponent', () => {
  let component: EditarMascotaComponent;
  let fixture: ComponentFixture<EditarMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
