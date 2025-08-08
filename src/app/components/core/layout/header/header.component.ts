import { Component } from '@angular/core';
import { BuscadorService } from '../../../../services/shared/buscador.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private buscadorService: BuscadorService, private router: Router) { }

  currentTerm = '';

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentTerm = ''; 
        this.buscadorService.clearSearchTerm();
      });

    this.buscadorService.searchTerm$.subscribe(term => {
      this.currentTerm = term;
    });
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.currentTerm = value;
  }

  onEnter(): void {
    this.buscadorService.setSearchTerm(this.currentTerm);
  }

}
