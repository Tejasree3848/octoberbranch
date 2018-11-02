import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileplancontentComponent } from './mobileplancontent.component';

describe('MobileplancontentComponent', () => {
  let component: MobileplancontentComponent;
  let fixture: ComponentFixture<MobileplancontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileplancontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileplancontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
