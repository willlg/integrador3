import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseballNoticiasComponent } from './baseball-noticias.component';


describe('BaseballNoticiasComponent', () => {
  let component: BaseballNoticiasComponent;
  let fixture: ComponentFixture<BaseballNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseballNoticiasComponent]
    });
    fixture = TestBed.createComponent(BaseballNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
