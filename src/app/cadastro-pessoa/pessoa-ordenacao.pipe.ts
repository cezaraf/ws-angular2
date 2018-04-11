import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from 'app/model/pessoa';

@Pipe({
  name: 'pessoaOrdenacao'
})
export class PessoaOrdenacaoPipe implements PipeTransform {

  transform(pessoas: Pessoa[], propriedade: string, tipo: string = "ASC"): any {

    return pessoas.sort((pa, pb) => {

      let retorno = 0;

      if (pa[propriedade] < pb[propriedade]) {

        retorno = -1;

      } else if (pa[propriedade] > pb[propriedade]) {

        retorno = 1;
        
      }

      return (tipo == "ASC") ? retorno : retorno * -1;

    });
  }

}
