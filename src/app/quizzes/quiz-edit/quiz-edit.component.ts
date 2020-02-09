import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import {Quiz} from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class QuizEditComponent implements OnInit {
  public quizEdit: FormGroup;
  private quizCalled: Quiz;
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
        console.log('Quiz ' + id + ' DON\'T EXIST' + this.quizCalled);
      });
  }

}
