import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from 'app/model/pessoa';

@Pipe({
  name: 'pessoaFilter'
})
export class PessoaPipe implements PipeTransform {

  transform(pessoas: Pessoa[], propriedade: string, texto: string): any {

    if (propriedade && texto ) {

      return pessoas.filter(p => p[propriedade].toString().toUpperCase().indexOf(texto.toUpperCase()) > -1)

    } else {

      return pessoas;
    }
  }

}
