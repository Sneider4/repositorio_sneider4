import { Component } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  imports: [],
  templateUrl: './certificaciones.component.html',
  styleUrl: './certificaciones.component.css'
})
export class CertificacionesComponent {

  certificaciones = [
    {
      titulo: 'Programación en JavaScript',
      descripcion: 'Curso realizado en Coursera que cubre fundamentos de JavaScript moderno.',
      fecha: 'Febrero 2025',
      enlace: 'https://www.coursera.org/account/accomplishments/ejemplo-certificado'
    },
    {
      titulo: 'C++ Básico',
      descripcion: 'Certificación en fundamentos de programación en C++.',
      fecha: '2023',
      enlace: ''
    },
    {
      titulo: 'Desarrollo Web con Flask',
      descripcion: 'Curso práctico de desarrollo de aplicaciones web con Flask y Python.',
      fecha: '2024',
      enlace: ''
    }
  ];

}
