import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorMessageForm } from './error-message-form';

describe('ErrorMessageForm', () => {
  let component: ErrorMessageForm;
  let fixture: ComponentFixture<ErrorMessageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
