import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-links-cards',
  templateUrl: './links-cards.component.html',
  styleUrls: ['./links-cards.component.css']
})
export class LinksCardsComponent {
  @Input() linkName:string = "sample link";
  @Input() URL!:string;
  @Input() desc:string = 'sample description of the sample link';  
  @Input() color!: string;
  
  selected : boolean = false;

  toggle(){
    this.selected = !this.selected;
  }

}
