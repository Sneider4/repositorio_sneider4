import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {

  habilidades = [
    { nombre: 'Angular', nivel: 75 },
    { nombre: 'JavaScript', nivel: 80 },
    { nombre: 'TypeScript', nivel: 70 },
    { nombre: 'HTML/CSS', nivel: 85 },
    { nombre: 'Bootstrap', nivel: 80 },
    { nombre: 'Python', nivel: 70 },
    { nombre: 'Flask/Django', nivel: 65 },
    { nombre: 'Express.js', nivel: 60 },
    { nombre: 'PostgreSQL', nivel: 65 },
    { nombre: 'Git/GitHub', nivel: 80 },
    { nombre: 'Scrum (Metodología Ágil)', nivel: 75 },
  ];

}
