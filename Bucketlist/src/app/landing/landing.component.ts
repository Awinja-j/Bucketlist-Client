import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { User } from '../models/user.model';
import { LoginComponent } from '../login/login.component'

@Component({
    selector:'landing-app',
    templateUrl:'./landing.component.html',
    styleUrls: ['./landing.component.css'],
    providers:[ AuthenticationService ]


})
export class LandingComponent implements OnInit{
    user: User;
    response: any;
    mode: string = 'register';
  
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
    }
register() {
      this.response = this.authService.register(this.user.email, this.user.password)
      .subscribe(response => {
          response = response;
          if(response['result']) {
              this._service(
                     response['message'],
                     '',
                      {
                          timeOut: 3000,
                          pauseOnHover: false,
                          clickToClose: false,
                          maxLength: 50
                      }
                 );
              this.login();
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
          }
      });

  }


}