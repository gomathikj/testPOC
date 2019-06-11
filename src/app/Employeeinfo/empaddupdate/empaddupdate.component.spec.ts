import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaddupdateComponent } from './empaddupdate.component';

describe('EmpaddupdateComponent', () => {
  let component: EmpaddupdateComponent;
  let fixture: ComponentFixture<EmpaddupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaddupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaddupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
