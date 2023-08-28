import { Component } from "@angular/core";
import { filter, map, shareReplay } from "rxjs/operators";
import { NavigationEnd, Router } from "@angular/router";
import { ScoresService } from "../../services/score.service";
import { Observable, Subscription, timer } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  
  private subs = new Subscription()
  
  time$: Observable<Date> = timer(0, 1000).pipe(
    map((tick) => new Date()),
    shareReplay(1)
  ); 

  hours !: string[];
  minutes !: string[];
  seconds!: string[];

  clock!: Date;
  
  constructor(private router: Router, private scoreService: ScoresService) {}

  ngOnInit() 
  {
    this.subs.add(
      this.time$.subscribe( value => {
        this.hours = value.getHours().toString().split("")
        this.minutes = value.getMinutes().toString().split("")
        this.seconds = value.getSeconds().toString().split("")
        this.clock = value
      })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
