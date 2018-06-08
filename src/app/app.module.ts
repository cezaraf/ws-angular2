import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BaseModule, BryModule } from 'tcm-base-angular2';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BaseModule,
    BryModule.forRoot({
      servidorDeAssinatura: environment.bry.servidorDeAssinatura,
      tokenPermissao: environment.bry.tokenPermissao,
      sistema: environment.bry.sistema
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
