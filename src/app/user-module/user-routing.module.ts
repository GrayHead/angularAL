import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserResolveService} from './services/user-resolve.service';
import {UserActivatorService} from './services/user-activator.service';

const routes: Routes = [

  // /users
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UserResolveService},
    canDeactivate: [UserActivatorService],
    canActivate : [UserActivatorService],
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
