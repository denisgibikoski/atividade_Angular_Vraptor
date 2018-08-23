import { GeneroService } from './genero/genero.service';
import { LivroService } from './livro/livro.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditoraComponent } from './editora/editora.component';
import { LivroComponent } from './livro/livro.component';
import { GeneroComponent } from './genero/genero.component';
import { HttpClientModule,  } from '@angular/common/http';

/* Import do PrimeNG */
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { EditoraService } from './editora/editora.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EditoraComponent,
    LivroComponent,
    GeneroComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    AutoCompleteModule,

    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  providers: [
    LivroService,
    GeneroService,
    ConfirmationService,
    EditoraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
