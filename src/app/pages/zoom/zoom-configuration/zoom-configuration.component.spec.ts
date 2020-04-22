import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomConfigurationComponent } from './zoom-configuration.component';

describe('ZoomConfigurationComponent', () => {
  let component: ZoomConfigurationComponent;
  let fixture: ComponentFixture<ZoomConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
