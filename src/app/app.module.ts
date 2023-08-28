import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GameComponent } from './components/game/game.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './components/app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { EndComponent } from './components/end/end.component';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonsListItemComponent } from './components/pokemons-list-item/pokemons-list-item.component';
import { SnakeComponent } from './components/snake/snake.component';
import { LinksComponent } from './components/links/links.component';
import { ArtComponent } from './components/art/art.component';
import { LinksCardsComponent } from './components/links-cards/links-cards.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'ticktacktoe', component: GameComponent},
  // { path: 'scoreboard', component: ScoreboardComponent},
  { path:'pokemons', component:PokemonComponent},
  { path: 'snake', component:SnakeComponent},
  { path: 'links', component:LinksComponent},
  {path:'art', component:ArtComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreboardComponent,
    HeaderComponent,
    FooterComponent,
    EndComponent,
    PlayerStatusComponent,
    PokemonComponent,
    HomeComponent,
    PokemonsListItemComponent,
    SnakeComponent,
    LinksComponent,
    ArtComponent,
    LinksCardsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
