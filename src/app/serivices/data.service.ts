import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataStorage = new BehaviorSubject<string>('hello');

  constructor() {
  }

  setData(data): void {
    this.dataStorage.next(data);
  }

  getData(): string {
    return this.dataStorage.getValue();
  }


}
