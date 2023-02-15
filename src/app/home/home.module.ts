import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPokemonComponent } from './admin-pokemon/admin-pokemon.component';
import { UserPokemonComponent } from './user-pokemon/user-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPokemonComponent,
    UserPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
