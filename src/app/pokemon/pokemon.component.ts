import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  name: string = ''
  urlPhoto : string=''

  constructor(private pokemonService : PokemonService) { }

  search(){
    this.pokemonService.getPokemonByName(this.name).subscribe((data:any) =>{
      this.urlPhoto = data.sprites.front_default
    })
  }
}
