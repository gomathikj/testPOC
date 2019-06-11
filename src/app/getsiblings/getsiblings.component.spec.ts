import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsiblingsComponent } from './getsiblings.component';

describe('GetsiblingsComponent', () => {
  let component: GetsiblingsComponent;
  let fixture: ComponentFixture<GetsiblingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsiblingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
