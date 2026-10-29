import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('../../pages/layout/layout')).Layout,
        children: [
            { path: 'home', loadComponent: async () => (await import('../../pages/home/home')).Home },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
]