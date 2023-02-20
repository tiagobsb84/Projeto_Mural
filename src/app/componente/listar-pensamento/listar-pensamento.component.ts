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

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((resposta) => {
      this.listaPensamentos = resposta;
    });
  }
}
