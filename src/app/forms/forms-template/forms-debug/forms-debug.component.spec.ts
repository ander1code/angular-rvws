import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDebugComponent } from './forms-debug.component';

describe('FormsDebugComponent', () => {
  let component: FormsDebugComponent;
  let fixture: ComponentFixture<FormsDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
