import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IForm, IFormOption, IFormQuestion, IFormQuestionType, IUser} from '../my_classes/dataTypes';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }



  // USERS
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/api/users');
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/api/user/' + id);
  }

  addUser(user: IUser): Observable<Object> {
    return this.http.put('http://localhost:3000/api/user', user);
  }

  modifyUser(user: IUser): Observable<Object> {
    return this.http.post('http://localhost:3000/api/user', user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete('http://localhost:3000/api/user/' + id);
  }



  // FORMS
  getForms(user_id: number): Observable<Object> {
    return this.http.get<IForm[]>('http://localhost:3000/api/forms/user/' + user_id);
  }

  getForm(id: number): Observable<Object> {
    return this.http.get<IForm>('http://localhost:3000/api/form/' + id);
  }

  addForm(form: IForm): Observable<Object> {
    return this.http.put('http://localhost:3000/api/form', form);
  }

  modifyForm(form: IForm): Observable<Object> {
    // TODO
    return null;
  }

  deleteForm(id: number): Observable<Object> {
    return this.http.delete('http://localhost:3000/api/form/' + id);
  }



  // QUESTIONS
  getQuestions(form_id: number): Observable<Object> {
    return this.http.get<IFormQuestion[]>('http://localhost:3000/api/questions/form/' + form_id);
  }

  getQuestion(id: number): Observable<Object> {
    return this.http.get<IFormQuestion>('http://localhost:3000/api/question/' + id);
  }

  addQuestion(question: IFormQuestion): Observable<Object> {
    return this.http.put('http://localhost:3000/api/question', question);
  }

  modifyQuestion(question: IFormQuestion): Observable<Object> {
    // TODO
    return null;
  }

  deleteQuestion(id: number): Observable<Object> {
    return this.http.delete('http://localhost:3000/api/question/' + id);
  }



  // OPTIONS
  getOptions(question_id: number): Observable<Object> {
    return this.http.get<IFormOption[]>('http://localhost:3000/api/options/question/' + question_id);
  }

  getOption(id: number): Observable<Object> {
    return this.http.get<IFormOption>('http://localhost:3000/api/option/' + id);
  }

  addOption(option: IFormOption): Observable<Object> {
    return this.http.put('http://localhost:3000/api/option', option);
  }

  modifyOption(option: IFormOption): Observable<Object> {
    // TODO
    return null;
  }

  deleteOption(id: number): Observable<Object> {
    return this.http.delete('http://localhost:3000/api/option/' + id);
  }



  // QUESTION TYPES
  getQuestionTypes(): Observable<IFormQuestionType[]> {
    return this.http.get<IFormQuestionType[]>('http://localhost:3000/api/question-types');
  }
}
