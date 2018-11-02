import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileplanComponent } from './mobileplan.component';

describe('MobileplanComponent', () => {
  let component: MobileplanComponent;
  let fixture: ComponentFixture<MobileplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
