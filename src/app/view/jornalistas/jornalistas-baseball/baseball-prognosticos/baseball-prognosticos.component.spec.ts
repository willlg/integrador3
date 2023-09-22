import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseballPrognosticosComponent } from './baseball-prognosticos.component';


describe('BaseballPrognosticosComponent', () => {
  let component: BaseballPrognosticosComponent;
  let fixture: ComponentFixture<BaseballPrognosticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseballPrognosticosComponent]
    });
    fixture = TestBed.createComponent(BaseballPrognosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
