import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
