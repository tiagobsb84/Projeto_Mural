import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passando informação para filho',
      autoria: 'tiago',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Recebendo informação do pai',
      autoria: 'tiago',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem Ipry. Lorem Ipsum has been ts standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ',
      autoria: 'tiago',
      modelo: 'modelo1'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
