import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {IUser} from '../../my_classes/dataTypes';
import {DataApiService} from '../data-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  enteredData: IUser;
  submitted = false;
  submitError = false;


  constructor(private dataApiService: DataApiService) {
    this.enteredData = {
      user_id: null,
      username: null,
      password: null,
      registered: null,
      last_login: null,
      email: null,
      birthdate: null,
      country: null,
      name: null,
      sex: 'u'
    };
  }

  ngOnInit(): void { }

  onSubmit() {

    this.dataApiService.addUser(this.enteredData)
      .subscribe(
        result => {
          console.log(result);
          this.submitted = true;
          this.submitError = false;
        },
        err => {
          console.log(err);
          this.submitted = true;
          this.submitError = err.status !== 200;
        }
      );
  }
}
