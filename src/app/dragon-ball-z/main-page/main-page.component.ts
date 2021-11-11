import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DragonBallZService } from '../services/dragon-ball-z.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  nuevo:Personaje ={
    nombre: 'Maestro',
    ki: 3400
  };
  
  constructor(){}
}