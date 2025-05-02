import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  proyectos = [
    {
      titulo: 'Sistema de Control de Ingreso y Salida de Personal',
      descripcion: 'Aplicación web para controlar el ingreso y salida del personal de una institución. Conectada a una base de datos PostgreSQL y con gráficos en Power BI.',
      enlace: '#'
    },
    {
      titulo: 'E-commerce de Productos Naturales',
      descripcion: 'Tienda online desarrollada con Angular y Express.js, con autenticación, carrito de compras y pasarela de pagos.',
      enlace: '#'
    },
    {
      titulo: 'Sistema de Gestión Académica',
      descripcion: 'Aplicación para gestión de estudiantes, notas y asistencia, desarrollada como proyecto colaborativo en SENA.',
      enlace: '#'
    }
  ];
}
