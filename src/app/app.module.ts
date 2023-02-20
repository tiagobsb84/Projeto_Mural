import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { FooterComponent } from './componente/footer/footer.component';
import { CriarPensamentoComponent } from './componente/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componente/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componente/pensamentos/pensamento/pensamento.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './componente/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componente/pensamentos/editar-pensamento/editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterComponent,
    CriarPensamentoComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
