import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dadosService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent implements OnInit{
  dados: any[] = [];

  constructor(private dadosService: DadosService) {}

  ngOnInit() {
    this.dadosService.getDados().subscribe((response) => {
      this.dados = response;
      console.log(this.dados);
    });
  }
}
