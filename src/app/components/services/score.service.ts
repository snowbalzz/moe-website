import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Scores } from 'src/app/Scores';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private apiUrl = 'http://localhost:5000/scores'

  constructor(private http:HttpClient) { }

  getScore(): Observable<Scores[]> {
    return this.http.get<Scores[]>(this.apiUrl);
  }

  addScore(score: string): Observable<any>{
    return this.http.post(this.apiUrl, score, httpOptions);
  }

}
