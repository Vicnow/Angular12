import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DragonBallZModule } from '../dragon-ball-z.module';
import { DragonBallZService } from '../services/dragon-ball-z.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() nuevo:Personaje={
    nombre: '',
    ki: 0
  }

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private DragonBallZService: DragonBallZService){}
  agregarPersonaje(){

    if(this.nuevo.nombre.trim().length==0){return;}
    console.log(this.nuevo);

    // this.onNewPersonaje.emit(this.nuevo);
    this.DragonBallZService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre:'',
      ki:0,
    }
  }
}
