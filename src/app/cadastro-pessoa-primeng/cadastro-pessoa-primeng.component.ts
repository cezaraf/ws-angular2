import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/model/pessoa';
import { PessoaService } from 'app/cadastro-pessoa/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa-primeng',
  templateUrl: './cadastro-pessoa-primeng.component.html',
  styleUrls: ['./cadastro-pessoa-primeng.component.css']
})
export class CadastroPessoaPrimengComponent implements OnInit {

  pessoas: Pessoa[] = []

  constructor(private service: PessoaService) { }

  ngOnInit() {

    this.service.obterTodosAsPessoas().subscribe(pessoas => this.pessoas = pessoas)
  }

}
