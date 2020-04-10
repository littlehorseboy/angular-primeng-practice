import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupDemoComponent } from './input-group-demo.component';

describe('InputGroupDemoComponent', () => {
  let component: InputGroupDemoComponent;
  let fixture: ComponentFixture<InputGroupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGroupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
