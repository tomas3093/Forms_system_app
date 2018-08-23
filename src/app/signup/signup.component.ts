import { Component, OnInit } from '@angular/core';
import {IUser} from '../../my_classes/dataTypes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted = false;
  model: IUser;

  constructor() {
    this.model = {
      user_id: 1,
      username: 'Ivan',
      last_login: null,
      email: 'ivan@cremlin.ru',
      birthdate: null,
      country: null,
      name: null,
      password: 'qewq',
      registered: null,
      sex: null
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }
}
