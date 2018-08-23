import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livro';
import { LivroService } from './livro.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  
  titulo = 'Livro - Lista';
  livros: Livro[];
  datasource: Livro[];
  livroEdit: Livro = new Livro();
  today: number = Date.now();
  showDialog = false;
  cols: any[];
  totalRecords: number;
  maxRecords: number = 5;
  currentPage: number = 1;

  loading: boolean;

  constructor(private livroService: LivroService) { }

  ngOnInit() {

    this.livroService.findAll().subscribe(livros => {
      this.datasource = livros;
      this.totalRecords = this.datasource.length;
    });

    this.cols = [
      { field: 'codigo', header: 'Codigo' },
      { field: 'titulo', header: 'Titulo' },
      { field: 'ano', header: 'Ano' },
      { field: 'paginas', header: 'Paginas' },
      { field: 'isbn', header: 'ISBN' },
      { field: 'genero', header: 'Genero' },
      { field: 'editora', header: 'Editora' }
   
    ];

    this.loading = true;
  }

  findAllPaged(page: number, size: number) {
    this.livroService.getTotalRecords().subscribe(e => this.totalRecords = e);
    this.livroService.findPageable(page, size).subscribe(e =>  this.livros = e);
  }
  loadlivrosLazy(event: LazyLoadEvent) {

    this.currentPage = event.first / event.rows + 1;
    this.maxRecords = event.rows;
    setTimeout(() => {
      this.findAllPaged(this.currentPage, this.maxRecords);
    }, 250);

  }



  findAll() {
    this.livroService.findAll().subscribe(e => this.livros = e);
  }

  remover(id: number) {
    this.livroService.delete(id).subscribe(() => {
      this.findAll();
    });
  }
  editar(livro: Livro) {
    this.today = Date.now();
    this.livroEdit = Object.assign({}, livro);
    this.showDialog = true;
  }



}
