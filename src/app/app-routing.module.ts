import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AdminPokemonComponent } from './home/admin-pokemon/admin-pokemon.component';
import { UserPokemonComponent } from './home/user-pokemon/user-pokemon.component';
import { LoginBaseComponent } from './login/login-base/login-base.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {path: "administrador", component:AdminPokemonComponent},
  {path: "usuario", component:UserPokemonComponent},
  {path: "login", component:LoginBaseComponent},
  {path: "", redirectTo:'/login', pathMatch: 'full'},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
