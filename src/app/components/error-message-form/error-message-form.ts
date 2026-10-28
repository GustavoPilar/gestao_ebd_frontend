import { Component, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-error-message-form',
  styleUrl: './error-message-form.scss',
  templateUrl: './error-message-form.html',
})
export class ErrorMessageForm {
  readonly errors = input.required<ValidationError.WithFieldTree[]>();
}
