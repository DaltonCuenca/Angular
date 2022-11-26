import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent implements OnInit {

  /*******************INTERPOLACION*************/
  public texto: string = 'Dalton';

  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
  /*******************PROPERTY BINDING*************/
  public img: String = "../../favicon.ico";
  public textoPlaceholder = "Escriba despues de 3s";
  public deshabilitado: boolean = true;
  /*******************EVENT BINDING*************/
  public textoBoton: string = "";

  cambiarTexto(): void {
    this.textoBoton = "El texto fue cambiado";
  }

  /*******************TWO WAY DATA BINDING*************/
  public textoInput: string = "";

  constructor() {
    setInterval(() => (this.texto = ' Joshue'), 3000);
    setInterval(() => (this.deshabilitado = false), 3000);
  }

  ngOnInit(): void { }
}
