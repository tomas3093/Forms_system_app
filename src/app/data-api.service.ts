import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUser} from '../my_classes/dataTypes';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/api/users');
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/api/user/' + id);
  }

  // TODO
  addUser(user: IUser) {

  }

  modifyUser(user: IUser) {

  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete('http://localhost:3000/api/user/' + id);
  }
}
