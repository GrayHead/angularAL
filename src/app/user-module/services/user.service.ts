import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this
      .httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: string): Observable<User> {
    return this
      .httpClient
      .get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
