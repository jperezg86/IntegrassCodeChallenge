import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import User from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CodeChallengeIntegrass';
  users: User[]
  constructor(public apiService : ApiService ) {

  }
  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users
      }
    );
  }


}
