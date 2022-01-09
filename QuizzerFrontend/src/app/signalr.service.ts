import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState
} from '@microsoft/signalr';

import { Observable, Subject, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  questionReceived$ = new Subject();
  guessMade$ = new Subject();
  setPlayerName$ = new Subject<string>();

  private hubConnection: HubConnection;
  private url = 'https://localhost:44375/hub/';

  constructor(private http: HttpClient) {
    this.hubConnection = this.buildConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  setPlayerName(playerName: string): void {
    this.hubConnection.send('SetPlayerName', playerName);
  }

  makeGuess(guess: string, player: string): void {
    this.hubConnection.send('makeGuess', player, guess);
  }

  private buildConnection(): HubConnection {
    return new HubConnectionBuilder()
      .withUrl(this.url)
      .withAutomaticReconnect()
      .build();
  }

  private startConnection(): void {
    if (this.hubConnection.state === HubConnectionState.Connected) {
      return;
    }

    this.hubConnection.start().then(
      () => {
        console.log('Hub connection started!');
      },
      error => console.error(error)
    );
  }

  private registerOnServerEvents(): void {
    this.hubConnection.on('GoToQuestion', (question: any) => {
      this.questionReceived$.next(question);
    });

    this.hubConnection.on('GuessMade', (player: string, guess: string) => {
      this.guessMade$.next({ player, guess });
    });

    this.hubConnection.on('PlayerNameSet', (playerName: string) => {
      this.setPlayerName$.next(playerName);
    });
  }

  private handleError(error: Response): Observable<never> {
    return throwError(error || 'Server error');
  }
}
