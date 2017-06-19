import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { User } from '../models/user.model';


@Component({
    selector:'login-app',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css'],
    // providers:[ AlertService ],
    providers:[ AuthenticationService ]

})
export class LoginComponent implements OnInit{
    user: User;
    response: any;
    token: string;
    mode: string = 'login';
  
    constructor(private authService: AuthenticationService,
                private _service: AuthenticationService,
                private _router: Router) {
                this.user = {
                'email': '',
                'password': '',
          }
                }

    ngOnInit() {
        this.user.email = '';
        this.user.password = '';
        this.token = localStorage.getItem('token');
    }

    login() {
        this.response = this.authService.login(this.user.username, this.user.password)
        .subscribe(response => {
            response = response;
            if(response['result']) {
                localStorage.setItem('token', response['access_token']);
                localStorage.setItem('authorised', response['result']);
                this._router.navigate(['/bucketlists']);
            }
            else{
                this._service.error(
                        'Oops.',
                        response['error'],
                        {
                            timeOut: 3000,
                            pauseOnHover: false,
                            clickToClose: false,
                            maxLength: 50
                        }
                    );
                localStorage.setItem('authorised', response['result']);
            }
        });
    }
                }