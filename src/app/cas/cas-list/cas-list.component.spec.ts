import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasListComponent } from './cas-list.component';

describe('CasListComponent', () => {
  let component: CasListComponent;
  let fixture: ComponentFixture<CasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
