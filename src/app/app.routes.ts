import { DetailComponent } from './detail/detail.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'detail/:id',
        loadComponent: () =>
            import('./detail/detail.component').then((m) => m.DetailComponent),
    },
    {
        path: 'create',
        loadComponent: () =>
            import('./create/create.component').then((m) => m.CreateComponent),
    },
];

