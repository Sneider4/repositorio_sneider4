import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  datos = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  mensajeEnviado = false;

  enviarFormulario() {
    // Aquí normalmente enviarías los datos a un backend.
    console.log('Formulario enviado:', this.datos);
    this.mensajeEnviado = true;

    // Limpiar formulario
    this.datos = { nombre: '', email: '', mensaje: '' };

    // Ocultar el mensaje después de unos segundos
    setTimeout(() => {
      this.mensajeEnviado = false;
    }, 4000);
  }

}
