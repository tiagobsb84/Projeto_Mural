import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentoComponent } from './componente/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './componente/pensamentos/criar-pensamento/criar-pensamento.component';
import { EditarPensamentoComponent } from './componente/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './componente/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: "full"
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamento/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamento/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
