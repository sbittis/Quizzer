import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';
import { SignalRService } from '../signalr.service';

@Component({
  selector: 'app-quiz-master',
  templateUrl: './quiz-master.component.html',
  styleUrls: ['./quiz-master.component.css']
})
export class QuizMasterComponent implements OnInit {
  question: any;
  guesses: { [guess: string]: string; } = {};
  players: string[] = [];
  guessesRevealed = false;
  correctAnswerRevealed = false;

  constructor(
    private quizService: QuizService,
    private signalRService: SignalRService
    ) { }

  ngOnInit(): void {
    this.signalRService.questionReceived$.subscribe((question: any) => {
      this.question = question;
    });

    this.signalRService.guessMade$.subscribe((data: any) => {
      this.guesses[data.player] = data.guess;
    });

    this.signalRService.setPlayerName$.subscribe(playerName => {
      this.players.push(playerName);
    });
  }

  start(): void {
    this.quizService.nextQuestion();
  }

  revealGuesses(): void {
    this.guessesRevealed = true;
  }

  revealCorrectAnswer(): void {
    this.correctAnswerRevealed = true;
  }

  nextQuestion(): void {
    this.guessesRevealed = false;
    this.correctAnswerRevealed = false;
    this.guesses = {};
    this.quizService.nextQuestion();
  }

  playersGuessed(answer: string): string[] {
    const players = [];
    for (const player in this.guesses) {
      if (this.guesses[player] === answer) {
        players.push(player);
      }
    }

    return players;
  }
}
