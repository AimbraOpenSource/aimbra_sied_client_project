import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserRoleComponent } from './select-user-role.component';

describe('SelectUserRoleComponent', () => {
  let component: SelectUserRoleComponent;
  let fixture: ComponentFixture<SelectUserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
