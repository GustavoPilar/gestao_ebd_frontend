import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { environment } from '../env/environment';
import { CUSTOM_PRESET } from './core/config/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      license: environment.primeng.license,
      theme: {
        preset: CUSTOM_PRESET,
        options: {
          darkModeSelector: false || 'none'
        }
      },
      ripple: true
    })
  ]
};
