import { Component, OnInit } from '@angular/core';
import { Scores } from 'src/app/Scores';
import { ScoresService } from '../../services/score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent {

  board !: string[];
  combinations !: number[][];
  currentPlayer !: string;
  winner !: string;

  endMenu : boolean = false;
  startPlayer : string = "X";
  counter : number = 0;;
  
  scores: Scores[] = [];

  constructor(private scoresService: ScoresService){

    this.combinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    this.currentPlayer = this.startPlayer;
  }

  ngOnInit() : void {
    this.board = new Array(9).fill('');
  }

  /**
   * Reload the game
   */
  reload(){
    this.board = new Array(9).fill('');
    this.endMenu = false;
    this.startPlayer = this.changePlayer();
    this.counter = 0;
  }

  /**
   * 
   * Used to determine next player
   * 
   * @returns Either player X or player O
   */
  changePlayer() : string {
    if(this.currentPlayer == "X"){
      return "O"
    } else {
      return "X"
    }
  }

  /**
   * 
   * Check for the win conditions
   * 
   * @returns Returns the playe who has win conditions
   */
  winCond() : string {

    for (let i = 0; i < this.combinations.length; i++) {

      const [a, b, c] = this.combinations[i];

      if(this.board[a] && 
        this.board[a] == this.board[b] && 
        this.board[a] == this.board[c] 
      ) {
        this.endMenu = true;
        this.addsWinner(this.board[a])
        return "Player " + this.board[a] + " won!";
      }
    }
      
    if(this.counter == 9) {
      this.endMenu = true;
      return "You Both Suck!"
    }

    return ""
  }

  /**
   * Recording who and when won
   */
  addsWinner(a : string){
    let dateTime = new Date()
    const newScore = {
      text: a,
      day: dateTime
    }
    const body = JSON.stringify(newScore);
    // this.scoresService.addScore(body).subscribe();
  }

  /**
   * 
   * Handles player input 
   * 
   * @param i Tick identifier
   * @returns exit in case already pressed
   */
  playerInput(i : number){


    if(this.board[i] !== '') {
      return;
    } 

    this.counter += 1;
    this.board[i] = this.currentPlayer;
    this.currentPlayer = this.changePlayer();
    this.winner =  this.winCond();
  }

}
