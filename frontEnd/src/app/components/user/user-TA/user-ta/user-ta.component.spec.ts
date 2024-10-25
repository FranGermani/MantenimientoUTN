import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTAComponent } from './user-ta.component';

describe('UserTAComponent', () => {
  let component: UserTAComponent;
  let fixture: ComponentFixture<UserTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
