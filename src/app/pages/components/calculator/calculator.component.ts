import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  cadena: string;
  operacionResuelta: boolean;

  constructor() {
    this.cadena = '';
    this.operacionResuelta = false;
  }

  ngOnInit(): void {
  }

  pulsarBoton(botonPulsado: string) {
    if (this.operacionResuelta) {
      this.cadena = botonPulsado;
      this.operacionResuelta = false;
    } else {
      this.cadena += botonPulsado;
    }
  }

  resolverOperacion() {
    this.cadena = eval(this.cadena);
    this.operacionResuelta = true;
  }

}
