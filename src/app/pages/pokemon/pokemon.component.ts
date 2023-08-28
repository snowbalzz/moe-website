import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { BehaviorSubject, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  
  loading = true;
  payload!:any; 
  selected : boolean = false;

  private fetchPokemon = new BehaviorSubject({})
  private subscription = new Subscription();

  pokemon$ = this.fetchPokemon.asObservable().pipe(switchMap((value)=>{
    return this.pokemonServices.getPokemons()
  }), tap(()=>this.loading = false));

  constructor(
    private pokemonServices: PokemonService
  ){}

  ngOnInit(){
    this.subscription.add(this.pokemon$.subscribe((payload)=>{
      this.payload = payload;
    }))
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  updateData(){
    this.fetchPokemon.next({})
  }
}
