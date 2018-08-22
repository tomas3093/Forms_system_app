import { Component, OnInit } from '@angular/core';
import {IUser} from '../../my_classes/dataTypes';
import {DataApiService} from '../data-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private dataApiService: DataApiService) {}

  ngOnInit(): void {
    this.dataApiService.getUsers()
      .subscribe(
        resultArray => this.users = resultArray,
        error => console.log(error)
      );
  }
}
