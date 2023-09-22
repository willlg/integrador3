import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrudPartidasComponent } from './admin-crud-partidas.component';

describe('AdminCrudPartidasComponent', () => {
  let component: AdminCrudPartidasComponent;
  let fixture: ComponentFixture<AdminCrudPartidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCrudPartidasComponent]
    });
    fixture = TestBed.createComponent(AdminCrudPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
