import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Component} from '@angular/core';
import {QuestionListComponent} from '../question-list/question-list.component';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})

export class QuestionFormComponent  {
  private questionForm: FormGroup;


  constructor(public formBuilder: FormBuilder) {
  this.initializeQuestionForm();
  }


  private initializeQuestionForm() {
  this.questionForm = this.formBuilder.group({
    label: [''],
    answers: this.formBuilder.array([])
  });
  }


  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false
    });
  }

  addAnswer() {
       this.answers.push(this.createAnswer());
    }

    createQuestion() {
    }

}
