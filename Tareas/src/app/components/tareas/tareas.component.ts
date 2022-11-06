import { Tarea } from './../../models/Tarea';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = ''
  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea(): void {
    if(this.nombreTarea==''){
      return;
    }
    const TAREA: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listTareas.push(TAREA);

    this.nombreTarea = ''
  }

  eliminarTarea(index: number): void {
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number): void {
    this.listTareas[index].estado = !tarea.estado;
  }
}
