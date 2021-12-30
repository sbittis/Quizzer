import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMasterComponent } from './quiz-master.component';

describe('QuizMasterComponent', () => {
  let component: QuizMasterComponent;
  let fixture: ComponentFixture<QuizMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
