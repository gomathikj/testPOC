import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlistComponent } from './olist.component';

describe('OlistComponent', () => {
  let component: OlistComponent;
  let fixture: ComponentFixture<OlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
