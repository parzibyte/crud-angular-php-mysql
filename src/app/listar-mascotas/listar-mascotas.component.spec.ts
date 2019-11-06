import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMascotasComponent } from './listar-mascotas.component';

describe('ListarMascotasComponent', () => {
  let component: ListarMascotasComponent;
  let fixture: ComponentFixture<ListarMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
