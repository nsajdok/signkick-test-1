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
  private users: IUser[] = [];

  createUser(user: IUser): void {
    this.users.push(user);
  }
}
