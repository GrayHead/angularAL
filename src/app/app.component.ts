import {Component} from '@angular/core';
import {User} from './models/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  test = {
    id: 0, title: 'title x'

  };

  idValues = [1, 2, 3, 4, 5];

  users: User[];


  testTest(myFrom: NgForm): void {
    console.log(myFrom);
    console.log(this.test);
  }
}


