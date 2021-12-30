import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuizCandidateComponent } from './quiz-candidate/quiz-candidate.component';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';

const routes: Routes = [
  { path: 'quiz-master', component: QuizMasterComponent },
  { path: 'quiz-candidate', component: QuizCandidateComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
