import { Component, inject, signal } from '@angular/core';
import { email, form, maxLength, minLength, required, FormField, submit } from '@angular/forms/signals';
import { InputTextModule } from 'primeng/inputtext';
import { InputPasswordModule } from 'primeng/inputpassword';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Book } from '@primeicons/angular/book';
import { Envelope } from '@primeicons/angular/envelope';
import { Lock } from '@primeicons/angular/lock';
import { Eye } from '@primeicons/angular/eye';
import { EyeSlash } from '@primeicons/angular/eye-slash';
import { Verified } from '@primeicons/angular/verified';
import { SignIn } from '@primeicons/angular/sign-in';
import { Times } from '@primeicons/angular/times';
import { Spinner } from '@primeicons/angular/spinner';
import { EMPTY_LOGIN, Login } from '../../../core/models/auth/login';
import { ErrorMessageForm } from '../../../components/error-message-form/error-message-form';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  imports: [
    InputTextModule,
    InputPasswordModule,
    ButtonModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    Book,
    Envelope,
    Lock,
    Eye,
    EyeSlash,
    Verified,
    SignIn,
    Times,
    Spinner,
    ErrorMessageForm,
    FormField
  ],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class LoginPage {
  
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly mask = signal<boolean>(true);

  private readonly loginSignal = signal<Login>(EMPTY_LOGIN);

  protected readonly loginForm = form(this.loginSignal, (path) => {
    required(path.email, { when: ({state}) => state.touched(), message: 'Campo obrigatório'});
    required(path.password, { when: ({state}) => state.touched(), message: 'Campo obrigatório'});

    minLength(path.password, 8, { when: ({state}) => state.touched(), message: 'Mínimo 8 caracteres'});

    email(path.email, { when: ({state}) => state.touched(), message: 'E-mail inválido'});

    maxLength(path.email, 255, { when: ({state}) => state.touched(), message: 'Máximo de 255 caracteres'});
  });

  protected toggleMask(): void {
    this.mask.update((current) => !current);
  }

  protected onSubmit(event: Event): void {
    event.preventDefault();

    submit(this.loginForm, async () => {
      await this.authService.Login();
      this.router.navigate(['pages']);
    });
  }

}
