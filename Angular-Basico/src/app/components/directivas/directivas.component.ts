import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

 /*******************(*ngFor)*************/
public listEstudiantes: Array<any> = [];

/*******************(*ngIf)*************/
public mostrarTabla: boolean = true;
toggle(): void {
  this.mostrarTabla = !this.mostrarTabla
}

constructor() { }

ngOnInit(): void {
  this.listEstudiantes = [
    {
      nombre: 'Tomas Gonzales',
      estado: 'Promocionado'
    },
    {
      nombre: 'Lucaz Perez',
      estado: 'Regular'
    },
    {
      nombre: 'Juan Garcia',
      estado: 'Regular'
    },
    {
      nombre: 'Dalton Cuenca',
      estado: 'Promocionado'
    },
    {
      nombre: 'Otro Dalton Cuenca',
      estado: 'Libre'
    }
  ]
}

}