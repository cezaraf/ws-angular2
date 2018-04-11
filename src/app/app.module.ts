import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule, DataTableModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { HomeComponent } from './home/home.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { RouterModule, Route } from '@angular/router';
import { PessoaService } from './cadastro-pessoa/pessoa.service';
import { PessoaPipe } from './cadastro-pessoa/pessoa.pipe';
import { PessoaOrdenacaoPipe } from './cadastro-pessoa/pessoa-ordenacao.pipe';
import { CadastroPessoaPrimengComponent } from './cadastro-pessoa-primeng/cadastro-pessoa-primeng.component';

const rotasAplicacao: Route[] = [

  {
    path: '',

    component: HomeComponent,

    data: { titulo: 'PÁGINA INICIAL' }
  },

  {
    path: 'pagina-cadastro-pessoa',

    component: CadastroPessoaComponent,

    data: { titulo: "PAGINA DE CADASTRO DE PESSOA" }
  },

  {
    path: 'pagina-cadastro-pessoa-primeng',

    component: CadastroPessoaPrimengComponent,

    data: { titulo: "PAGINA DE CADASTRO DE PESSOA" }
  }

]

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    HomeComponent,
    CadastroPessoaComponent,
    PessoaPipe,
    PessoaOrdenacaoPipe,
    CadastroPessoaPrimengComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    DataTableModule,
    HttpModule,
    RouterModule.forRoot(rotasAplicacao, { useHash: true })
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
