import { UserService } from './../../../services/user.service';
import { ClientMessage } from './../../../models/client-message';
import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/users";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = 'All Users';
  public users: User[];

  // use a structural directive to check if we have users
  public clientMessage: ClientMessage = new ClientMessage('Sorry no users to display');

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    // we will call the below method to load all User objects from the DB INTO the users[] of this component
    this.findAllUsers();

  }

  public findAllUsers() {
    this.userService.findAllUsers()
      .subscribe(data => this.users = data);
  }

}
