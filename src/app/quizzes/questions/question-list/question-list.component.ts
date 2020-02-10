import {Component, OnInit} from '@angular/core';
import {Question} from '../../../../models/question.model';
import {QuizEditComponent} from '../../quiz-edit/quiz-edit.component';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})

export class QuestionListComponent implements OnInit {

  questionList: Question[];


  constructor(quizEdit: QuizEditComponent) {
    quizEdit.questions$.subscribe((question) => this.questionList = question);

  }
  ngOnInit(): void {
  }


  questionDeleted(question: Question) {
      this.questionList.splice(this.questionList.indexOf(question), 1);
      console.log('The quiz \"' + question.label + '\" was successfully deleted.');  }
}
