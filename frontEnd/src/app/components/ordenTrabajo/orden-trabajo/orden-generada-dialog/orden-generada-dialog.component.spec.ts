import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenGeneradaDialogComponent } from './orden-generada-dialog.component';

describe('OrdenGeneradaDialogComponent', () => {
  let component: OrdenGeneradaDialogComponent;
  let fixture: ComponentFixture<OrdenGeneradaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenGeneradaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenGeneradaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
