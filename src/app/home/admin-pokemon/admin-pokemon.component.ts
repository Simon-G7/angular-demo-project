import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-admin-pokemon',
  templateUrl: './admin-pokemon.component.html',
  styleUrls: ['./admin-pokemon.component.css']
})
export class AdminPokemonComponent {

  name: string = ''
  urlPhoto : string=''

  constructor(private pokemonService : PokemonService) { }

  search(){
    this.pokemonService.getPokemonByName(this.name).subscribe((data:any) =>{
      this.urlPhoto = data.sprites.front_default
    })
  }
  
}
