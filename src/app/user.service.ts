import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  private subject: Subject<boolean> = new Subject();

  constructor(private _toastService: ToastService) {}

  createUser(user: IUser): void {
    this.subject.next(true);

    setTimeout(() => {
      this._users.push(user);
      this._toastService.show('Info: Thanks for giving us a quick intro about you', 2000);
      this.subject.next(false);
    }, 2000);

  }

  isCreating(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
