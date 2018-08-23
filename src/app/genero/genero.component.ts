import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, LazyLoadEvent } from 'primeng/api';
import { Genero } from '../model/genero';
import { GeneroService } from './genero.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  titulo = 'Gênero - Lista';
  generos: Genero[];
  datasource: Genero[];
  generoEdit: Genero = new Genero();
  today: number = Date.now();
  showDialog = false;
  cols: any[];
  totalRecords: number;
  maxRecords: number = 5;
  currentPage: number = 1;

  loading: boolean;

  constructor(private generoService: GeneroService) { }

  ngOnInit() {

    this.generoService.findAll().subscribe(generos => {
      this.datasource = generos;
      this.totalRecords = this.datasource.length;
    });

    this.cols = [
      { field: 'codigo', header: 'Codigo' },
      { field: 'nome', header: 'Nome' },

    ];

    this.loading = true;
  }

  findAllPaged(page: number, size: number) {
    this.generoService.getTotalRecords().subscribe(e => this.totalRecords = e);
    this.generoService.findPageable(page, size).subscribe(e =>  this.generos = e);
  }
  loadGenerosLazy(event: LazyLoadEvent) {

    this.currentPage = event.first / event.rows + 1;
    this.maxRecords = event.rows;
    setTimeout(() => {
      this.findAllPaged(this.currentPage, this.maxRecords);
    }, 250);

  }



  findAll() {
    this.generoService.findAll().subscribe(e => this.generos = e);
  }

  remover(id: number) {
    this.generoService.delete(id).subscribe(() => {
      this.findAll();
    });
  }
  editar(genero: Genero) {
    this.today = Date.now();
    this.generoEdit = Object.assign({}, genero);
    this.showDialog = true;
  }



}
