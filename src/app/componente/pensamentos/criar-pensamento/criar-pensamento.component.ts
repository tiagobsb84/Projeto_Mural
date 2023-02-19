import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentos = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'DEV',
    modelo: 'modulo1'
  }

  constructor() {}

  ngOnInit(): void {
    
  }

  criarPensamento() {
    alert('Criado pensamento');
  }

  cancelarPensamento() {
    alert('cancelamento pensamento');
  }
}
