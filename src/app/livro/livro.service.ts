import { Livro } from './../model/livro';
import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crudservice';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService extends CrudService< Livro, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/livro', http);
   }
}
