import { ClientMessage } from '../../../models/client-message';
import { UserService } from '../../../services/user.service';
import { User, Address } from '../../../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title: String = 'Register User';

  public user = new User(0, '', '', '', '', '', []);
  public address = new Address('', '', '', '');
  public clientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  public registerUser(): void {
    
    // call an injected UserService
    this.user.addresses.push(this.address);

    // push the address object captured into the user's address's []
    this.userService.registerUser(this.user)
      .subscribe(
        data => {
          this.clientMessage.message = `Successfully added ${data.firstName}`
          this.clientMessage.state = true;
        },
        error => {
          this.clientMessage.message = `We got an error ${error}`
          this.clientMessage.state = false;
        }
      )

    // call this.userService.registerUser() method and post it

    
    //
  }

}
