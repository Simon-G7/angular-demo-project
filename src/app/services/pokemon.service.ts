import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http : HttpClient) { }

  getPokemonByName(name: string){
    return this.http.get(`${this.urlPokemon}/${name}`)
  }
}
