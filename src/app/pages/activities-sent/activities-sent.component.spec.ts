import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSentComponent } from './activities-sent.component';

describe('ActivitiesSentComponent', () => {
  let component: ActivitiesSentComponent;
  let fixture: ComponentFixture<ActivitiesSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
