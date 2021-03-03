import {Component} from '@angular/core';
import {User} from './models/User';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // test = {
  //   id: 0, title: 'title x'
  //
  // };
  //
  // idValues = [1, 2, 3, 4, 5];
  //
  // users: User[];
  //
  //
  // testTest(myFrom: NgForm): void {
  //   console.log(myFrom);
  //   console.log(this.test);
  // }

  id = new FormControl(100500, [Validators.required, this.customValidator]);
  myForm = new FormGroup({
    id: this.id,
    name: new FormControl('vasya', [Validators.required, Validators.minLength(10)])
  });
  user = {id: 123, name: 'hasfdhgfsah'};

  x = new Promise(resolve => {
    let user = {};
    setTimeout(() => {
      user = {id: 100, name: 'kokos'};

      resolve(user);
    }, 2000);

  });
  date = new Date();

  doStuff(): void {
    console.log(this.myForm);
  }

  customValidator(data: AbstractControl): any {
    const value = data.value + '';
    console.log(value);
    if (value.includes('duck')) {
      return {duckPresent: 'you have du*k word in your string'};
    }
    return null;

  }


}


