import { UsernameService } from "./username.service";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

type ValidatorResponse = Observable<ValidationErrors | null>; // can be move to separate file with types if needed

function validate(value: string, usernameService: UsernameService): ValidatorResponse {
    return usernameService
        .isUsernameTaken(value)
        .pipe(
            map(isUserNameTaken => isUserNameTaken ? { isUserNameTaken: true } : null)
        );
}

export default function(usernameService: UsernameService): AsyncValidatorFn {
    return ({ value }: AbstractControl): ValidatorResponse => validate(value, usernameService);
}
