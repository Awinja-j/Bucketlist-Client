import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent{
    model: any;
    email: string;
    password: string;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,

    )

}
