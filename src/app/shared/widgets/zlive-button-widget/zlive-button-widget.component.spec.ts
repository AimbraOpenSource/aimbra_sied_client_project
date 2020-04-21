import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZliveButtonWidgetComponent } from './zlive-button-widget.component';

describe('ZliveButtonWidgetComponent', () => {
  let component: ZliveButtonWidgetComponent;
  let fixture: ComponentFixture<ZliveButtonWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZliveButtonWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZliveButtonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
