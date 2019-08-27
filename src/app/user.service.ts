import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { ToastService } from "./toast.service";

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
  private _users: IUser[] = [];

  constructor(private _toastService: ToastService) {}


  createUser(user: IUser): void {
    this._users.push(user);

    this._toastService.show('Info: Thanks for giving us a quick intro about you')
  }
}
