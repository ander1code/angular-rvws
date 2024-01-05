import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsErrorsComponent } from './forms-errors.component';

describe('FormsErrorsComponent', () => {
  let component: FormsErrorsComponent;
  let fixture: ComponentFixture<FormsErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
