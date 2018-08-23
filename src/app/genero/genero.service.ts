import { Injectable } from '@angular/core';
import { CrudService } from '../generic/crudservice';
import { Genero } from '../model/genero';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneroService extends CrudService<Genero, number> {


  constructor(http: HttpClient) {
    super(environment.api + '/genero', http);
   }
}
