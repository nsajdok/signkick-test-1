import {Injectable} from '@angular/core';
import { MatSnackBar } from "@angular/material";

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(private matSnackBar: MatSnackBar) {}

    show(message: string, duration: number) {
        this.matSnackBar.open(message, null, { duration });
    }
}
