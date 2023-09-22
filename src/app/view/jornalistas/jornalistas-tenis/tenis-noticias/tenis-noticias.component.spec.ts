import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisNoticiasComponent } from './tenis-noticias.component';

describe('TenisNoticiasComponent', () => {
  let component: TenisNoticiasComponent;
  let fixture: ComponentFixture<TenisNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenisNoticiasComponent]
    });
    fixture = TestBed.createComponent(TenisNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
