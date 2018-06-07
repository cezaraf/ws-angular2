import { Component } from '@angular/core';

@Component({
  selector: 'app-tcm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  multipleUpload = true;

  disabled = false;

  collapsed = false;

  toggleable = false;

  uploadAuto = true;

  tableSignedFiles = 'Arquivos assinados';

  tableFilesToSign = 'Arquivos a serem assinados';

  chooseLabel = 'Selecionar documentos para assinatura';

  cancelLabel = 'Cancelar Envio';

  uploadLabel = 'Enviar documentos para assinatura';

  accept = '*/*';

  header = 'Assinador TCM';

  exibirModalDeleteFile = false;

  canSignInformedFiles = false;

  canDeleteFiles = false;

  canViewSigners = true;

  canDownloadFiles = true;

  canDownloadOriginalFiles = true;

  uploadEnabled = true;

  eventoDeleteFile = {};

  arquivos = [
    {id: '6e4f6a7b-7b5a-454b-b721-5dd241aa9904'}
  ];

  dataNascimento = new Date();

  deleteFile($event) {

    this.eventoDeleteFile = JSON.stringify($event, (key, value) => {

      if (typeof value === 'function') { return 'function() { ... }'; } else { return value; }

    }, '  ');

    this.exibirModalDeleteFile = true;
  }

}
