import { Component, OnInit } from '@angular/core';

import { SignalRService } from '../signalr.service';

@Component({
  selector: 'app-quiz-candidate',
  templateUrl: './quiz-candidate.component.html',
  styleUrls: ['./quiz-candidate.component.css']
})
export class QuizCandidateComponent implements OnInit {
  question: any;
  playerName = '';
  initialized = false;

  constructor(private signalRService: SignalRService) { }

  ngOnInit(): void {
    this.signalRService.questionReceived$.subscribe((question: any) => {
      this.question = question;
    });
  }

  setName(): void {
    this.signalRService.setPlayerName(this.playerName);
    this.initialized = true;
  }

  makeGuess(guess: string): void {
    this.signalRService.makeGuess(guess, this.playerName);
  }
}
