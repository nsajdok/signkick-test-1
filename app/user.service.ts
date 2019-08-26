import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: IUser): void {
    console.log(user);
  }
}