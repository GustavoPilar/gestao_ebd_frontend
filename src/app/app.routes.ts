import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: async () => (await import ('./pages/auth/login/login')).LoginPage },
    { path: 'pages', loadChildren: async () => (await import('./core/routes/pages.routes')).routes },

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
