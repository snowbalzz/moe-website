import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-links-cards',
  templateUrl: './links-cards.component.html',
  styleUrls: ['./links-cards.component.css']
})
export class LinksCardsComponent {
  @Input() linkName!:string;
  @Input() url!:string;
  @Input() iconFile!:string;
  @Input() desc!:string;  
  @Input() color!: string;
}
