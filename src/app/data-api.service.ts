import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IFormQuestionType, IUser} from '../my_classes/dataTypes';
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


  // QUESTION TYPES
  getQuestionTypes(): Observable<IFormQuestionType[]> {
    return this.http.get<IFormQuestionType[]>('http://localhost:3000/api/question-types');
  }
}
