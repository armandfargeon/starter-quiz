import {Component, OnInit} from '@angular/core';
import {Question} from '../../../../models/question.model';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})

export class QuestionListComponent implements OnInit {
  questionList: Question[];




  constructor() {

  }
  ngOnInit(): void {
  }

  addQuestion(question: Question) {
    this.questionList.push(question);
  }

  deleteQuestion(question: Question) {
    this.questionList.splice(this.questionList.indexOf(question), 1);
    console.log('The quiz \"' + question.label + '\" was successfully deleted.');  }
}
