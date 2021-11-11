import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DragonBallZService } from '../services/dragon-ball-z.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{
  
  get personajes(){
    return this.DragonBallZService.personajes;
  }
  
  constructor(private DragonBallZService:DragonBallZService){
    
  }
}
