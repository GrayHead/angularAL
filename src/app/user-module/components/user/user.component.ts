import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input()
  u: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  toUserDetails(u): void {
    this.router.navigate([this.u.id], {state: this.u, relativeTo: this.activatedRoute});

  }
}
