import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PokemonService {
  private http = inject(HttpClient);
  private readonly url = 'https://pokeapi.co/api/v2/pokemon/';

  getIdPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.url}${name.toLowerCase()}`).pipe(shareReplay(1));
  }

  getPokemon(limit: number = 20, offset: number = 0): Observable<any> {
  return this.http.get<any>(`${this.url}?limit=${limit}&offset=${offset}`);
}

}
