import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersComponent} from './components/users/users.component';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UsersComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule {
}
