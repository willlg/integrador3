import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasqueteComponent } from './basquete.component';

describe('BasqueteComponent', () => {
  let component: BasqueteComponent;
  let fixture: ComponentFixture<BasqueteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasqueteComponent]
    });
    fixture = TestBed.createComponent(BasqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
