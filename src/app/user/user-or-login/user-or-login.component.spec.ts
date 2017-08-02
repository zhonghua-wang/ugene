import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrLoginComponent } from './user-or-login.component';

describe('UserOrLoginComponent', () => {
  let component: UserOrLoginComponent;
  let fixture: ComponentFixture<UserOrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
