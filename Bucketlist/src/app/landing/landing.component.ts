    
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'landing-app',
    templateUrl: './landing.component.html',
    styleUrls:['./landing.component.css']
})
export class LandingComponent {
    model: any = {};
    loading = false;
    mode: string = 'register';
    email: string;
    password: string;


    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authservice: AuthenticationService ) { }

    register() {
        this.model = {   
            "email":this.email,
            "password":this.password
        }
        console.log(this.model) 
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.authservice.login(this.email, this.password).subscribe(
                        data =>{
                            this.router.navigate(['/bucketlist'])
                            },
                            error => {
                                this.alertService.error(error._body);
                                this.loading = false;
                            });
                    }
                ,
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}