import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesUsedComponent } from './technologies-used.component';

describe('TechnologiesUsedComponent', () => {
  let component: TechnologiesUsedComponent;
  let fixture: ComponentFixture<TechnologiesUsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesUsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
