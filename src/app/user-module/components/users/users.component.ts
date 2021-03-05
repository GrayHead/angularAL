import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../../models/User';
import {DataService} from '../../../serivices/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private dataService: DataService) {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
    console.log(this.dataService.getData());
    this.dataService.setData('users compoennt');
    console.log(this.dataService.getData());

  }

}
