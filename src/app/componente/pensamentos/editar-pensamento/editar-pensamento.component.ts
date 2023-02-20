import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../../Pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamentos: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((resposta) => {
      this.pensamentos = resposta;
    })
  }

  editarPensamento(): void {
    this.service.editar(this.pensamentos).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  cancelarPensamento(): void {
    this.router.navigate(['/']);
  }
}
