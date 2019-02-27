import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHeaderComponent } from './api-header.component';

describe('ApiHeaderComponent', () => {
  let component: ApiHeaderComponent;
  let fixture: ComponentFixture<ApiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
