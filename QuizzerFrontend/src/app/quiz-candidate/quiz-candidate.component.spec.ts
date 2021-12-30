import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCandidateComponent } from './quiz-candidate.component';

describe('QuizCandidateComponent', () => {
  let component: QuizCandidateComponent;
  let fixture: ComponentFixture<QuizCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
