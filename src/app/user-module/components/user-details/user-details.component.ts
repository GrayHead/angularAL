import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user: /*User;*/ any;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router
  ) {
    this.activatedRoute.params.subscribe(value => {
      console.log(history.state);
      console.log(this.router.getCurrentNavigation()?.extras.state);
      this.user = this.router.getCurrentNavigation()?.extras.state/* as User*/;

    });

  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(value => {
    //   this.userService.getUser(value.id).subscribe(user => this.user = user);
    // });
  }

}
