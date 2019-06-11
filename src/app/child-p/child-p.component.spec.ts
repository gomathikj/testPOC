import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPComponent } from './child-p.component';

describe('ChildPComponent', () => {
  let component: ChildPComponent;
  let fixture: ComponentFixture<ChildPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
