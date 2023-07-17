import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {

  @Input() visibility !: string;
  @Input() winner !: string;
  @Output() btnClick = new EventEmitter();
  
  constructor(){ 
    this.visibility = '';
    this.winner = '';
  }

  onClick(){
    this.btnClick.emit()
  } 

}
