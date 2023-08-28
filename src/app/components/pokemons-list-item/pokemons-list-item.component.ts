import { Component, Input } from '@angular/core';
import { BehaviorSubject, Subscription, switchMap } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons-list-item',
  templateUrl: './pokemons-list-item.component.html',
  styleUrls: ['./pokemons-list-item.component.css']
})
export class PokemonsListItemComponent {

  selected : boolean = false;
  @Input() pokemon!:any;  
  details !: any;
  
  toggle(){
    this.selected = !this.selected;
  }

}
