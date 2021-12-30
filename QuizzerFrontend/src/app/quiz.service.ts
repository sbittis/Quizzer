import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = 'https://localhost:44375/Quiz/';

  constructor(private http: HttpClient) { }

  nextQuestion(): Subscription {
    return this.http
      .get(this.url + 'Next')
      .pipe(catchError(this.handleError)).subscribe();
  }

  // makeGuess(guess: string, player: string) {
  //   return this.http
  //     .get(this.url + "MakeGuess/" + player + "/" + guess)
  //     .pipe(catchError(this.handleError)).subscribe();
  // }

  // setPlayerName(playerName: string) {
  //   return this.http
  //     .get(this.url + "SetPlayerName/" + playerName)
  //     .pipe(catchError(this.handleError)).subscribe();
  // }

  private handleError(error: Response): Observable<never> {
    return throwError(error || 'Server error');
  }
}
