import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildCmpComponent } from './viewchild-cmp.component';

describe('ViewchildCmpComponent', () => {
  let component: ViewchildCmpComponent;
  let fixture: ComponentFixture<ViewchildCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
