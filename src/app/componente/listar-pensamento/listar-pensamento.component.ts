import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamentos/pensamento.service';


@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  paginaAtual: number = 1;

  haMaisPensamentos: boolean = true;

  filtro: string = "";

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((resposta) => {
      this.listaPensamentos = resposta;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(this.listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro).subscribe(listaPensamento => {
      this.listaPensamentos = listaPensamento;
    })
  }
}
