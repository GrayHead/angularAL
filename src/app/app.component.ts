import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/User';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];


  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }
}


