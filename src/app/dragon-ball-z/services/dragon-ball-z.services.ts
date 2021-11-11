import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/interfaces";

@Injectable()
export class DragonBallZService{

    private _personajes: Personaje[] = [
        {
          nombre:'Goku',
          ki:5000
        },{
          nombre:'Veggeta',
          ki:6000
        }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}