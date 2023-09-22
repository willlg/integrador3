import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutebolPrognosticosComponent } from './futebol-prognosticos.component';

describe('FutebolPrognosticosComponent', () => {
  let component: FutebolPrognosticosComponent;
  let fixture: ComponentFixture<FutebolPrognosticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutebolPrognosticosComponent]
    });
    fixture = TestBed.createComponent(FutebolPrognosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
