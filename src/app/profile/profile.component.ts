import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataApiService} from '../data-api.service';
import {IUser} from '../../my_classes/dataTypes';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  user_id: number;
  user: IUser;

  private sub: Subscription;

  constructor(private route: ActivatedRoute, private dataApiService: DataApiService) {
    this.user = new IUser();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.user_id = +params['id']; // (+) converts string 'id' to a number

      this.dataApiService.getUser(this.user_id)
        .subscribe(
          resultArray => this.user = resultArray[0],
          error => console.log(error)
        );
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
