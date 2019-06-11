import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcComponent } from './parentc.component';

describe('ParentcComponent', () => {
  let component: ParentcComponent;
  let fixture: ComponentFixture<ParentcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
