import { EditoraComponent } from './editora/editora.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GeneroComponent } from './genero/genero.component';
import { LivroComponent } from './livro/livro.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  { path: 'principal' , component: PrincipalComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'genero', component: GeneroComponent },
  { path: 'genero/new', component: GeneroComponent },
  { path: 'genero/:id', component: GeneroComponent },
  { path: 'editora', component: EditoraComponent },
  { path: 'livro', component: LivroComponent },

];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
