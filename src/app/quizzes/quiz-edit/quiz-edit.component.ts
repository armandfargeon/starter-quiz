import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';
import {Question} from '../../../models/question.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class QuizEditComponent implements OnInit {
  private quizCalled: Quiz;
  private questions: Question[] = [];
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
  ) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(quiz => {
        this.quizCalled = quiz;
      });
  }

  addQuestion(question: Question): void {
    console.log(question);
    this.questions.push(question);
    this.questions$.next(this.questions);
  }

}
