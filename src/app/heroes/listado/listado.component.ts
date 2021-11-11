import { Component} from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','IronMan','Hulk','Loki','Capitán America'];
  heroeBorrado : string = '';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  }
  restaurarHeroe(heroe:string){
    this.heroes.push(heroe);
  }
}