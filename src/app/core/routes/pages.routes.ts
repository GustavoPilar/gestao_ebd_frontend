import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('../../pages/layout/layout')).Layout,
        // children: [
        //     { path: '', redirectTo: '', pathMatch: 'full' }
        // ]
    }
]