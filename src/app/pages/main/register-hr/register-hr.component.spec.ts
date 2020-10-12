import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHRComponent } from './register-hr.component';

describe('RegisterHRComponent', () => {
  let component: RegisterHRComponent;
  let fixture: ComponentFixture<RegisterHRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
