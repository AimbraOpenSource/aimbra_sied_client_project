import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqusCommentComponent } from './disqus-comment.component';

describe('DisqusCommentComponent', () => {
  let component: DisqusCommentComponent;
  let fixture: ComponentFixture<DisqusCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisqusCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisqusCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
