import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDetalleDialogComponent } from './orden-detalle-dialog.component';

describe('OrdenDetalleDialogComponent', () => {
  let component: OrdenDetalleDialogComponent;
  let fixture: ComponentFixture<OrdenDetalleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenDetalleDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenDetalleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
