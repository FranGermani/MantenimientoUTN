import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoTablaComponent } from './orden-trabajo-tabla.component';

describe('OrdenTrabajoTablaComponent', () => {
  let component: OrdenTrabajoTablaComponent;
  let fixture: ComponentFixture<OrdenTrabajoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdenTrabajoTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenTrabajoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
