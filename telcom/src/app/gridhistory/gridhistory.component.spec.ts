import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridhistoryComponent } from './gridhistory.component';

describe('GridhistoryComponent', () => {
  let component: GridhistoryComponent;
  let fixture: ComponentFixture<GridhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
