import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasqueteNoticiasComponent } from './basquete-noticias.component';

describe('BasqueteNoticiasComponent', () => {
  let component: BasqueteNoticiasComponent;
  let fixture: ComponentFixture<BasqueteNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasqueteNoticiasComponent]
    });
    fixture = TestBed.createComponent(BasqueteNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
