import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakaziComponent } from './zakazi.component';

describe('ZakaziComponent', () => {
  let component: ZakaziComponent;
  let fixture: ComponentFixture<ZakaziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakaziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakaziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
