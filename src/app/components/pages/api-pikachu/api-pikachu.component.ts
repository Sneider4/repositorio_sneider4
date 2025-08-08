import { Component } from '@angular/core';
import { PokemonService } from '../../../services/api/pokemon.service';
import { Subscription, catchError, forkJoin, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuscadorService } from '../../../services/shared/buscador.service';

@Component({
  selector: 'app-api-pikachu',
  imports: [CommonModule],
  templateUrl: './api-pikachu.component.html',
  styleUrl: './api-pikachu.component.css'
})
export class ApiPikachuComponent {

  private searchSub!: Subscription;

  private subscriptions: Subscription = new Subscription();

  pokemones: any[] = []
  pokemonBuscado: string = '';

  isLoading: boolean = false;


  limit = 20;
  offset = 0;
  totalPokemones = 0;

  constructor(
    private apiPokemones: PokemonService,
    private fb: FormBuilder,
    private buscadorService: BuscadorService
  ) {
  }

  ngOnInit(): void {
    this.searchSub = this.buscadorService.searchTerm$.subscribe(term => {
      if (term) {
        this.buscarPokemon(term); // Puedes implementar esta lógica
      } else {
        this.consultarPokemones(); // Tu función para cargar todos
      }
    });
  }

  buscarPokemon(term: string) {
    this.isLoading = true;
    this.pokemonBuscado = term;
    this.offset = 0; 
    this.totalPokemones = 0; // Reiniciar el total de Pokémon al buscar
    this.pokemones = [];
    this.apiPokemones.getIdPokemon(term).subscribe({
      next: (data: any) => {
        this.pokemones = [data];
        console.log('Pokémon encontrado:', data);
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error al buscar Pokémon:', err);
        this.isLoading = false;
      }
    });
  }

  consultarPokemones() {
    this.isLoading = true;
    this.pokemones = [];

    this.apiPokemones.getPokemon(this.limit, this.offset).subscribe({
      next: (data: any) => {
        const results = data.results;
        this.totalPokemones = data.count;

        const requests = results.map((pokemon: any) =>
          this.apiPokemones.getIdPokemon(pokemon.name)
        );

        forkJoin(requests).subscribe({
          next: (detalles: any) => {
            this.pokemones = detalles;
          },
          error: (err) => console.error('Error al obtener detalles:', err),
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al consultar lista:', err);
        this.isLoading = false;
      }
    });
  }

  nextPage() {
    if (this.offset + this.limit < this.totalPokemones) {
      this.offset += this.limit;
      this.consultarPokemones();
    }
  }

  prevPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.consultarPokemones();
    }
  }

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
    this.buscadorService.clearSearchTerm();
  }
}
