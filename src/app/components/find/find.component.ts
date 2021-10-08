import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title = 'Find User';
  username: string = '';
  userId: number = 0;

  constructor(private userService: UserService) { }

  public findUserByUsername() {
    this.userService.findByUsername(this.username)
      .subscribe(data => console.log(data));
  }

}
