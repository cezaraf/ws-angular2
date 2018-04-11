import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pessoa } from '../model/pessoa';
import "rxjs/add/operator/map"

@Injectable()
export class PessoaService {

  constructor(private http: Http) { }

  obterTodosAsPessoas(): Observable<Pessoa[]> {

    return this.http.get('assets/pessoas.json').map(r => r.json() as Pessoa[])
  }
}
