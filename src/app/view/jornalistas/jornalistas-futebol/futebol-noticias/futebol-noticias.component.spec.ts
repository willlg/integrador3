import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutebolNoticiasComponent } from './futebol-noticias.component';

describe('FutebolNoticiasComponent', () => {
  let component: FutebolNoticiasComponent;
  let fixture: ComponentFixture<FutebolNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutebolNoticiasComponent]
    });
    fixture = TestBed.createComponent(FutebolNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
