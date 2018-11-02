import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileadivorsComponent } from './mobileadivors.component';

describe('MobileadivorsComponent', () => {
  let component: MobileadivorsComponent;
  let fixture: ComponentFixture<MobileadivorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileadivorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileadivorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
