import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moe-clock',
  templateUrl: './moe-clock.component.html',
  styleUrls: ['./moe-clock.component.css']
})
export class MoeClockComponent {
  @Input() time!:Date
  @Input() minutes!: string[]
  @Input() hours!: string[]
  @Input() seconds!: string[]
}
