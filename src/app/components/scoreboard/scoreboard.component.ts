import { Component } from '@angular/core';
import { Scores } from 'src/app/Scores';
import { ScoresService } from '../services/score.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})

export class ScoreboardComponent {

  scores: Scores[] = [];

  constructor (private scoresService: ScoresService){}
  
  ngOnInit(): void{
    this.scoresService.getScore().subscribe((scores) => this.scores = scores)
  }
}
