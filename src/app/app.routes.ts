import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./paginas/inicio/inicio.component').then(m => m.InicioComponent) },
  { path: 'sobre-mi', loadComponent: () => import('./paginas/sobre-mi/sobre-mi.component').then(m => m.SobreMiComponent) },
  { path: 'proyectos', loadComponent: () => import('./paginas/proyectos/proyectos.component').then(m => m.ProyectosComponent) },
  { path: 'habilidades', loadComponent: () => import('./paginas/habilidades/habilidades.component').then(m => m.HabilidadesComponent) },
  { path: 'certificaciones', loadComponent: () => import('./paginas/certificaciones/certificaciones.component').then(m => m.CertificacionesComponent) },
  { path: 'contacto', loadComponent: () => import('./paginas/contacto/contacto.component').then(m => m.ContactoComponent) },
];
