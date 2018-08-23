import { Injectable } from '@angular/core';
import { Editora } from '../model/editora';
import { CrudService } from '../generic/crudservice';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditoraService extends CrudService<Editora, number> {


  constructor(http: HttpClient) {
    super(environment.api + '/editora', http);
   }
}
