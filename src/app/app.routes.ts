import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'love-timeline',
        loadComponent: () =>
            import('./love-timeline/love-timeline.component').then(
                (m) => m.LoveTimelineComponent
            ),
    },
];

