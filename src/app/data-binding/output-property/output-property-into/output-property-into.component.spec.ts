import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertyIntoComponent } from './output-property-into.component';

describe('OutputPropertyIntoComponent', () => {
  let component: OutputPropertyIntoComponent;
  let fixture: ComponentFixture<OutputPropertyIntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropertyIntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertyIntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
