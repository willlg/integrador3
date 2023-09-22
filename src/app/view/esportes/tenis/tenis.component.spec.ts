import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisComponent } from './tenis.component';

describe('TenisComponent', () => {
  let component: TenisComponent;
  let fixture: ComponentFixture<TenisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenisComponent]
    });
    fixture = TestBed.createComponent(TenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
