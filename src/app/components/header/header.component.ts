import { Component } from '@angular/core';
import { filter } from 'rxjs/operators'
import { NavigationEnd, Router  } from '@angular/router';
import { ScoresService } from '../../services/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private scoreService: ScoresService){

  }

  ngOnInit(){
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ) {
            
        }
      })

  }
}
