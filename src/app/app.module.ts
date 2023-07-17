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


const appRoutes: Routes = [
  { path: '', component: GameComponent},
  { path: 'scoreboard', component: ScoreboardComponent}
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
