import { Component } from '@angular/core';
import { BuscadorService } from '../../../services/shared/buscador.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private buscadorService: BuscadorService
  ) {
  }
  ngOnDestroy(): void {
    this.buscadorService.clearSearchTerm();
  }
}
