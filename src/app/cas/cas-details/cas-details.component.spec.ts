import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasDetailsComponent } from './cas-details.component';

describe('CasDetailsComponent', () => {
  let component: CasDetailsComponent;
  let fixture: ComponentFixture<CasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
