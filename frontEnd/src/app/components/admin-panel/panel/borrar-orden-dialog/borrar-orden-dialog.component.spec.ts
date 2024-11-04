import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarOrdenDialogComponent } from './borrar-orden-dialog.component';

describe('BorrarOrdenDialogComponent', () => {
  let component: BorrarOrdenDialogComponent;
  let fixture: ComponentFixture<BorrarOrdenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BorrarOrdenDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarOrdenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
