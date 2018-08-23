import { Genero } from './genero';
import { Editora } from './editora';

export class Livro {
    id: number;
    titulo: string;
    ano: number;
    paginas: number;
    isbn: string;
    genero: Genero;
    editora: Editora;
}
