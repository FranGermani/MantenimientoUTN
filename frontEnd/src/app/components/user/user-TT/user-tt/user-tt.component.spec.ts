import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTTComponent } from './user-tt.component';

describe('UserTTComponent', () => {
  let component: UserTTComponent;
  let fixture: ComponentFixture<UserTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
