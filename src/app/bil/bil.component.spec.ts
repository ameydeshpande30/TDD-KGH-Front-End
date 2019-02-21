import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilComponent } from './bil.component';

describe('BilComponent', () => {
  let component: BilComponent;
  let fixture: ComponentFixture<BilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
