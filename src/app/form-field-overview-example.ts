import { Component } from '@angular/core';
import { UsernameService } from './username.service';
import { UserService } from './user.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import existingUsernameValidator from "./username.validator";
import { MatSnackBar } from "@angular/material";
import { ToastService } from "./toast.service";
import { mapTo } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
  form: FormGroup;

  loading$: Observable<boolean> = this._user.isCreating();

  constructor(
    private _user: UserService, 
    private _formBuilder: FormBuilder,
    private _username: UsernameService
  ) {
    this.form = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: [
          '',
        [Validators.minLength(3) ], // minLength validator can be move to field attr in template
        [existingUsernameValidator(this._username)]
      ],
      description: [''],
      gender: ['']
    });
  }

  submit() {
    if (this.form.valid) {
      this._user.createUser(this.form.value);
      this.form.reset();
    }
  }
}

