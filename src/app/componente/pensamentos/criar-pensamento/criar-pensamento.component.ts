import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../../Pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentos: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    
  }

  criarPensamento() {
    this.service.criar(this.pensamentos).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/']);
  }
}
