import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileplanfooterComponent } from './mobileplanfooter.component';

describe('MobileplanfooterComponent', () => {
  let component: MobileplanfooterComponent;
  let fixture: ComponentFixture<MobileplanfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileplanfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileplanfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
