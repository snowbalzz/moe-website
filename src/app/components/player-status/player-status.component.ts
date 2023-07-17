import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent {
  @Input() player !: string;

  constructor () {
    this.player = ""
  }
}
