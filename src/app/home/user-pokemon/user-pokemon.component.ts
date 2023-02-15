import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-user-pokemon',
  templateUrl: './user-pokemon.component.html',
  styleUrls: ['./user-pokemon.component.css']
})
export class UserPokemonComponent {

  name: string = ''
  urlPhoto : string=''

  constructor(private pokemonService : PokemonService) { }

  search(){
    this.pokemonService.getPokemonByName(this.name).subscribe((data:any) =>{
      this.urlPhoto = data.sprites.front_default
    })
  }
  
}
