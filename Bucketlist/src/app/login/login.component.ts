import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';

@Component({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[ AlertService, AuthenticationService ]

})
export class LoginComponent implements OnInit {
    loading = false;
    email: string;
    password: string;
    returnUrl: string;

    constructor(private authService: AuthenticationService,
                private _service: AlertService,
                private _router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        // this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/bucketlist';
    }
    login(){
        this.authService.login(this.email, this.password)
            .subscribe(
                data =>{
                    this._router.navigate([this.returnUrl])
                },
                error => {
                    this._service.error(error._body);
                    this.loading = false;
                }
            )
    }

}