import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'app/cadastro-pessoa/pessoa.service';
import { Pessoa } from 'app/model/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  filtro: string = null
  
  tipo: string = "ASC"

  propriedade: string = "id"

  pessoas: Pessoa[] = []

  constructor(private service: PessoaService) { }

  onBlurInput() {

    console.log('teste')
  }

  ngOnInit() {

    this.service.obterTodosAsPessoas().subscribe(pessoas => this.pessoas = pessoas)
  }

}
