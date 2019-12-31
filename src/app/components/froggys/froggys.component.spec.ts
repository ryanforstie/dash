import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FroggysComponent } from './froggys.component';

describe('FroggysComponent', () => {
  let component: FroggysComponent;
  let fixture: ComponentFixture<FroggysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroggysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroggysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
