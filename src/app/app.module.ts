import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BaseModule, BryModule } from 'tcm-base-angular2';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BaseModule,
    BryModule.forRoot({
      servidorDeAssinatura: 'http://10.10.110.227:8080',
      tokenPermissao: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBRDg2OTM5MTZGRTk0NjAyOTY4NkI3MzA5MTRDQURCNiIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTUyODIxODQ4ODA3MywiZXhwIjoxNTU5NzU0NDg4fQ.EuU9RFxtK20wAKN-YFhKB2v-xQ5XEKlDNflFLEhYFKqVic6TvPL3tft1Jp72m85Nagn1-8YM9ZsO7_bgEJLQNg',
      sistema: 'esiproc'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
