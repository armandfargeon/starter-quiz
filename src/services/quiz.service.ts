import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = QUIZ_LIST;
  private quizzesUrl = 'https://api.myjson.com/bins/13ajhy';
  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor(
    private http: HttpClient) {

  }

  addQuiz(quiz: Quiz) {
    console.log('The quiz \"' + quiz.name + '\" was successfully added.');

    if (quiz.questions.length === 0) {
      quiz.questions = [] ;
    }

    quiz.id = (this.quizzes.length + 1).toString();

    quiz.creationDate = new Date();
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
    console.log('The quiz \"' + quiz.id + '\" was successfully added.');

    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes.splice(this.quizzes.indexOf(quiz), 1);
    this.quizzes$.next(this.quizzes);
    console.log('The quiz \"' + quiz.name + '\" was successfully deleted.');

  }

  setQuizzesFromUrl() {
    this.http.get(this.quizzesUrl).subscribe(data => {
      const key = 'quizzes';
      const quizzes: Quiz[] = data[key];
      quizzes.forEach(quiz => {
        this.addQuiz(quiz);
      });
    });
  }

  getQuiz(id: string): Observable<Quiz> {
    return of(QUIZ_LIST.find(quiz => quiz.id === id));
  }

}
