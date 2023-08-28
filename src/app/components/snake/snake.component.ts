import { Component, HostListener } from '@angular/core';
import { KeyboardService } from '../services/keyboard.service';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent {

  direction : string = "STILL"
  stop: boolean = false;
  constructor(private keyboardService: KeyboardService){ 
  }

  ngOnInit(){
    this.loop()
  }

  ngOnDestroy(){
    this.stop = true;
  }

  public loop = () => {
    this.keyCheck();
    console.log(this.direction);  
    //Nothing bellow this, maybe stop logic or whatever
    if(this.stop) return;
    requestAnimationFrame(this.loop);
  };

  keyCheck = () => {
    if (this.keyboardService.isKeyDown(KeyboardService.KEY_DOWN)) {
      this.direction = "DOWN";
    }
    if (this.keyboardService.isKeyDown(KeyboardService.KEY_UP)) {
      this.direction = "UP";
    }
    if (this.keyboardService.isKeyDown(KeyboardService.KEY_RIGHT)) {
      this.direction = "RIGHT";
    } 
    if (this.keyboardService.isKeyDown(KeyboardService.KEY_LEFT)) {
      this.direction = "LEFT";
    }
    if(this.keyboardService.isKeyDown(KeyboardService.KEY_ESC)){
      this.stop = true;
    }
    if(this.keyboardService.isKeyDown(KeyboardService.KEY_ESC)){
      this.stop = true;
    }
  }
}
