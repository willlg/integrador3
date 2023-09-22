import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasquetePrognosticosComponent } from './basquete-prognosticos.component';

describe('BasquetePrognosticosComponent', () => {
  let component: BasquetePrognosticosComponent;
  let fixture: ComponentFixture<BasquetePrognosticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasquetePrognosticosComponent]
    });
    fixture = TestBed.createComponent(BasquetePrognosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
