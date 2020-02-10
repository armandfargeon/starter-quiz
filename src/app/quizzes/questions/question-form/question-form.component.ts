import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Component} from '@angular/core';
import {QuizEditComponent} from '../../quiz-edit/quiz-edit.component';
import {Question} from '../../../../models/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})

export class QuestionFormComponent  {
  private questionForm: FormGroup;


  constructor(public formBuilder: FormBuilder, private quizEdit: QuizEditComponent) {
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
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    this.quizEdit.addQuestion(questionToCreate);
    this.initializeQuestionForm();
    }

}
