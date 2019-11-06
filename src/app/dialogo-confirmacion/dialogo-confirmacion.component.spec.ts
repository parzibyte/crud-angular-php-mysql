import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoConfirmacionComponent } from './dialogo-confirmacion.component';

describe('DialogoConfirmacionComponent', () => {
  let component: DialogoConfirmacionComponent;
  let fixture: ComponentFixture<DialogoConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
