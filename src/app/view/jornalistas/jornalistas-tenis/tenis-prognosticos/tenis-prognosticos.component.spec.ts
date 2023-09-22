import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisPrognosticosComponent } from './tenis-prognosticos.component';

describe('TenisPrognosticosComponent', () => {
  let component: TenisPrognosticosComponent;
  let fixture: ComponentFixture<TenisPrognosticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenisPrognosticosComponent]
    });
    fixture = TestBed.createComponent(TenisPrognosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
