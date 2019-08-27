import { Component } from '@angular/core';
import { UsernameService } from './username.service';
import { UserService } from './user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
  form: FormGroup;

  constructor(
    private _user: UserService, 
    private _formBuilder: FormBuilder,
    private _username: UsernameService, 
  ) {
    this.form = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      userName: [''],
      description: [''],
      gender: ['']
    });
  }
}

