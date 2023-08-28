import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  private pokemonBaseUrl = "https://pokeapi.co/api/v2/pokemon?limit=5"

  getPokemons():Observable<JSON>{    
    const result = this.http.get<JSON>(this.pokemonBaseUrl)
    return result
  } 

  getPokemon(url:string){
    const result = this.http.get<JSON>(url)
    return result
  }

}
