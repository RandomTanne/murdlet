import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { Home } from './home/home';
import { Login } from './login/login';
import { Lobby } from './lobby/lobby';
import { Playcard } from './playcard/playcard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', component: Home, canActivate: [authGuard]},
    {path: 'lobby/:id', component: Lobby, canActivate: [authGuard]},
    {path: 'play/:id', component: Playcard, canActivate: [authGuard]},

    {path: 'login', component: Login},
];
