import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceClassWidgetComponent } from './resource-class-widget.component';

describe('ResourceClassWidgetComponent', () => {
  let component: ResourceClassWidgetComponent;
  let fixture: ComponentFixture<ResourceClassWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceClassWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceClassWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
