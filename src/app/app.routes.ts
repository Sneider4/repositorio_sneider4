import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ApiPikachuComponent } from './components/pages/api-pikachu/api-pikachu.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
    title: 'Inicio | Mi Portafolio'
  },
  {
    path: 'pokeApi',
    component: ApiPikachuComponent,
    title: 'API de Pokemones | Mi Portafolio'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Página no encontrada'
  },
];
