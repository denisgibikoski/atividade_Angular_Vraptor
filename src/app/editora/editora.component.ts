import { Component, OnInit } from '@angular/core';
import { Editora } from '../model/editora';
import { EditoraService } from './editora.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  titulo = 'Editora - Lista';
  editoras: Editora[];
  datasource:  Editora[];
  generoEdit: Editora = new Editora();
  today: number = Date.now();
  showDialog = false;
  cols: any[];
  totalRecords: number;
  maxRecords: number = 5;
  currentPage: number = 1;

  loading: boolean;

  constructor(
    private editoraService: EditoraService
   ) { }

  ngOnInit() {

    this.editoraService.findAll().subscribe(editoras => {
      this.datasource = editoras;
      this.totalRecords = this.datasource.length;
  });

  this.cols = [
      { field: 'codigo', header: 'Codigo' },
      { field: 'nome', header: 'Nome' },
      
   ] ;

  this.loading = true;
}
findAllPaged(page: number, size: number) {
  this.editoraService.getTotalRecords().subscribe(e => this.totalRecords = e);
  this.editoraService.findPageable(page, size).subscribe(e => this.editoras = e);
}
loadEditorasLazy(event: LazyLoadEvent) {

  this.currentPage = event.first / event.rows + 1;
  this.maxRecords = event.rows;
  setTimeout(() => {
    this.findAllPaged(this.currentPage, this.maxRecords);
  }, 250);

}
  

}
